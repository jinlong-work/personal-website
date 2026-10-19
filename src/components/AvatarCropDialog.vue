<template>
  <el-dialog
    :model-value="modelValue"
    title="裁剪头像"
    width="760px"
    class="avatar-crop-dialog"
    append-to-body
    destroy-on-close
    :close-on-click-modal="false"
    :close-on-press-escape="!exporting"
    :show-close="!exporting"
    @update:model-value="close"
    @opened="open"
    @close="dispose"
  >
    <p class="crop-description">拖动选框选择保留的部分，拖动边角调整范围，也可以移动或缩放图片。</p>
    <div class="crop-layout">
      <div class="crop-workspace">
        <div v-loading="loading" class="crop-stage" aria-label="头像裁剪区域">
          <div ref="container" class="crop-container"></div>
        </div>
        <div class="crop-zoom">
          <el-button :disabled="!ready || exporting" aria-label="缩小图片" @click="setZoom(zoom - 10)">−</el-button>
          <el-slider :model-value="zoom" :min="100" :max="400" :step="1" :disabled="!ready || exporting" :format-tooltip="value => `${value}%`" aria-label="图片缩放比例" @update:model-value="setZoom" />
          <el-button :disabled="!ready || exporting" aria-label="放大图片" @click="setZoom(zoom + 10)">＋</el-button>
          <span class="zoom-value">{{ zoom }}%</span>
        </div>
        <div class="crop-tools">
          <el-button :disabled="!ready || exporting" @click="rotate">旋转90°</el-button>
          <el-button :disabled="!ready || exporting" @click="reset">重置</el-button>
        </div>
      </div>
      <aside class="crop-previews" aria-label="裁剪效果预览">
        <p>头像预览</p>
        <div class="crop-preview square"><img v-if="preview" :src="preview" alt="方形头像预览" /></div>
        <small>方形</small>
        <div class="crop-preview round"><img v-if="preview" :src="preview" alt="圆形头像预览" /></div>
        <small>圆形</small>
      </aside>
    </div>
    <p class="crop-hint">确认后更新预览，保存用户时生效。</p>
    <el-alert v-if="error" type="error" :title="error" :closable="false" show-icon />
    <template #footer>
      <el-button :disabled="exporting" @click="close(false)">取消</el-button>
      <el-button type="primary" :disabled="!ready" :loading="exporting" @click="confirm">确认裁剪</el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { canvasToPng, MAX_AVATAR_BYTES } from '@/utils/avatarImage'

const props = defineProps({
  modelValue: Boolean,
  source: { type: Object, default: null },
  initialState: { type: Object, default: null }
})
const emit = defineEmits(['update:modelValue', 'confirm'])
const container = ref(null)
const loading = ref(false)
const ready = ref(false)
const exporting = ref(false)
const zoom = ref(100)
const preview = ref('')
const error = ref('')
let cropper
let image
let selection
let canvas
let baseScale = 1
let generation = 0
let suppressBounds = false
let observer
let canvasSize = { width: 0, height: 0 }
let previewFrame = 0
let previewRevision = 0
let drawingPreview = false
let isOpen = false

const template = `
  <cropper-canvas background theme-color="#6b886c">
    <cropper-image initial-fit="contain" scalable translatable></cropper-image>
    <cropper-shade></cropper-shade>
    <cropper-handle action="move" plain></cropper-handle>
    <cropper-selection aspect-ratio="1" movable resizable precise min-inset="0">
      <cropper-grid role="grid" bordered covered></cropper-grid>
      <cropper-crosshair centered></cropper-crosshair>
      <cropper-handle action="move" theme-color="rgba(255,255,255,.12)"></cropper-handle>
      <cropper-handle action="n-resize"></cropper-handle>
      <cropper-handle action="e-resize"></cropper-handle>
      <cropper-handle action="s-resize"></cropper-handle>
      <cropper-handle action="w-resize"></cropper-handle>
      <cropper-handle action="ne-resize"></cropper-handle>
      <cropper-handle action="nw-resize"></cropper-handle>
      <cropper-handle action="se-resize"></cropper-handle>
      <cropper-handle action="sw-resize"></cropper-handle>
    </cropper-selection>
  </cropper-canvas>`

function imageBounds() {
  const parent = canvas.getBoundingClientRect()
  const rect = image.getBoundingClientRect()
  return { x: rect.x - parent.x, y: rect.y - parent.y, width: rect.width, height: rect.height }
}

function contains(outer, inner) {
  const epsilon = 0.1
  return inner.x >= outer.x - epsilon && inner.y >= outer.y - epsilon
    && inner.x + inner.width <= outer.x + outer.width + epsilon
    && inner.y + inner.height <= outer.y + outer.height + epsilon
}

function selectionChanged(event) {
  if (event.target !== selection || suppressBounds || !ready.value) return
  const bounds = imageBounds()
  const minSide = Math.min(24, Math.min(bounds.width, bounds.height) * 0.2)
  if (event.detail.width < minSide || event.detail.height < minSide || !contains(bounds, event.detail)) {
    event.preventDefault()
    return
  }
  queuePreview()
}

function imageChanged(event) {
  if (event.target !== image || suppressBounds || !ready.value) return
  const next = event.detail
  // 旋转只允许工具栏的90°操作；平移和缩放期间保持选区完全被图片覆盖。
  if (!contains(next, selection)) event.preventDefault()
}

function imageTransformed(event) {
  if (event.target !== image || suppressBounds || !ready.value) return
  const scale = Math.hypot(event.detail.matrix[0], event.detail.matrix[1]) / baseScale
  if (scale < 0.999 || scale > 4.001) { event.preventDefault(); return }
  // transform 在样式更新前触发，下一帧再读取实际画面。
  queuePreview()
  nextTick(updateZoom)
}

function updateZoom() {
  if (image) zoom.value = Math.round(Math.hypot(...image.$getTransform().slice(0, 2)) / baseScale * 100)
}

function queuePreview() {
  previewRevision++
  if (previewFrame || drawingPreview) return
  const id = generation
  previewFrame = requestAnimationFrame(async () => {
    previewFrame = 0
    if (!selection || !ready.value || id !== generation) return
    drawingPreview = true
    const revision = previewRevision
    try {
      const thumbnail = await selection.$toCanvas({ width: 128, height: 128 })
      if (id === generation && revision === previewRevision) preview.value = thumbnail.toDataURL('image/png')
      thumbnail.width = 0
      thumbnail.height = 0
    } catch {
      if (id === generation) error.value = '预览生成失败，请重置或重新选择图片'
    } finally {
      if (id === generation) {
        drawingPreview = false
        if (revision !== previewRevision) queuePreview()
      }
    }
  })
}

function captureState() {
  return {
    matrix: [...image.$getTransform()],
    selection: { x: selection.x, y: selection.y, width: selection.width, height: selection.height },
    canvas: { ...canvasSize },
    baseScale
  }
}

function restoreState(state) {
  const rect = canvas.getBoundingClientRect()
  const ratio = Math.min(rect.width / state.canvas.width, rect.height / state.canvas.height)
  const [a, b, c, d, e, f] = state.matrix
  const cx = props.source.width / 2
  const cy = props.source.height / 2
  const newX = x => rect.width / 2 + (x - state.canvas.width / 2) * ratio
  const newY = y => rect.height / 2 + (y - state.canvas.height / 2) * ratio
  suppressBounds = true
  image.$setTransform(a * ratio, b * ratio, c * ratio, d * ratio, newX(cx + e) - cx, newY(cy + f) - cy)
  selection.$change(newX(state.selection.x), newY(state.selection.y), state.selection.width * ratio, state.selection.height * ratio, 1)
  baseScale = state.baseScale * ratio
  canvasSize = { width: rect.width, height: rect.height }
  suppressBounds = false
  updateZoom()
  queuePreview()
}

function reset() {
  if (!image || exporting.value) return
  suppressBounds = true
  image.$resetTransform().$center('contain')
  baseScale = Math.hypot(...image.$getTransform().slice(0, 2))
  const rect = canvas.getBoundingClientRect()
  const bounds = imageBounds()
  const side = Math.min(bounds.width, bounds.height) * 0.8
  selection.$change((rect.width - side) / 2, (rect.height - side) / 2, side, side, 1)
  canvasSize = { width: rect.width, height: rect.height }
  suppressBounds = false
  zoom.value = 100
  error.value = ''
  queuePreview()
}

function setZoom(value) {
  if (!ready.value || exporting.value) return
  const target = Math.min(400, Math.max(100, Number(value)))
  const matrix = image.$getTransform()
  const ratio = target / 100 * baseScale / Math.hypot(matrix[0], matrix[1])
  image.$setTransform(matrix[0] * ratio, matrix[1] * ratio, matrix[2] * ratio, matrix[3] * ratio, matrix[4], matrix[5])
  updateZoom()
}

function rotate() {
  if (!ready.value || exporting.value) return
  suppressBounds = true
  image.rotatable = true
  image.$rotate('90deg').$center('contain')
  image.rotatable = false
  baseScale = Math.hypot(...image.$getTransform().slice(0, 2))
  const rect = canvas.getBoundingClientRect()
  const bounds = imageBounds()
  const side = Math.min(bounds.width, bounds.height) * 0.8
  selection.$change((rect.width - side) / 2, (rect.height - side) / 2, side, side, 1)
  suppressBounds = false
  zoom.value = 100
  queuePreview()
}

async function open() {
  isOpen = true
  await initialize()
}

async function initialize() {
  disposeCropper()
  if (!props.modelValue || !props.source || !container.value) return
  const id = generation
  loading.value = true
  error.value = ''
  try {
    const { default: Cropper } = await import('cropperjs')
    if (id !== generation || !props.modelValue) return
    const original = new Image()
    original.src = props.source.url
    original.alt = '待裁剪头像'
    cropper = new Cropper(original, { container: container.value, template })
    image = cropper.getCropperImage()
    selection = cropper.getCropperSelection()
    canvas = cropper.getCropperCanvas()
    await image.$ready()
    await nextTick()
    if (id !== generation || !props.modelValue) return
    image.addEventListener('change', imageChanged)
    image.addEventListener('transform', imageTransformed)
    selection.addEventListener('change', selectionChanged)
    ready.value = true
    if (props.initialState) restoreState(props.initialState)
    else reset()
    observer = new ResizeObserver(() => {
      if (!ready.value || exporting.value) return
      const rect = canvas.getBoundingClientRect()
      if (rect.width && rect.height && (Math.abs(rect.width - canvasSize.width) > 1 || Math.abs(rect.height - canvasSize.height) > 1)) restoreState(captureState())
    })
    observer.observe(canvas)
  } catch {
    if (id === generation) {
      ready.value = false
      error.value = '裁剪工具加载失败，请关闭后重试'
    }
  } finally {
    if (id === generation) loading.value = false
  }
}

async function confirm() {
  if (!ready.value || exporting.value) return
  const id = generation
  exporting.value = true
  canvas.disabled = true
  error.value = ''
  try {
    const state = captureState()
    const scale = Math.hypot(...image.$getTransform().slice(0, 2))
    const side = Math.max(1, Math.min(512, Math.floor(selection.width / scale)))
    const output = await selection.$toCanvas({ width: side, height: side })
    let blob
    try { blob = await canvasToPng(output) } finally { output.width = 0; output.height = 0 }
    if (id !== generation || !props.modelValue) return
    if (blob.size > MAX_AVATAR_BYTES) throw new Error('裁剪结果超过2MB，请缩小选区后重试')
    const name = props.source.name.replace(/\.[^.]+$/, '') || 'avatar'
    emit('confirm', { file: new File([blob], `${name}.png`, { type: 'image/png' }), state })
    emit('update:modelValue', false)
  } catch (failure) {
    if (id === generation) error.value = failure.message || '裁剪失败，请重试'
  } finally {
    if (id === generation) {
      exporting.value = false
      if (canvas) canvas.disabled = false
    }
  }
}

function close(value) {
  if (!exporting.value) emit('update:modelValue', value)
}

function disposeCropper() {
  generation++
  observer?.disconnect()
  observer = null
  cancelAnimationFrame(previewFrame)
  previewFrame = 0
  previewRevision++
  drawingPreview = false
  ready.value = false
  loading.value = false
  exporting.value = false
  image?.removeEventListener('change', imageChanged)
  image?.removeEventListener('transform', imageTransformed)
  selection?.removeEventListener('change', selectionChanged)
  cropper?.destroy()
  cropper = image = selection = canvas = null
  preview.value = ''
}

function dispose() { isOpen = false; disposeCropper() }
watch(() => props.modelValue, value => { if (!value) dispose() })
watch(() => props.source, () => { if (props.modelValue && isOpen) void initialize() })
onBeforeUnmount(dispose)
</script>

<style scoped>
.crop-description, .crop-hint { color: #7b8b72; font-size: 12px; line-height: 1.8; margin: 0 0 18px; }
.crop-hint { margin: 16px 0 0; }
.crop-layout { display: grid; grid-template-columns: minmax(0, 1fr) 116px; gap: 24px; }
.crop-workspace { min-width: 0; }
.crop-stage { overflow: hidden; border: 1px solid #dfe5d8; border-radius: 12px; background: #eef2e8; }
.crop-container { height: 360px; }
.crop-container :deep(cropper-canvas) { height: 100%; width: 100%; touch-action: none; }
.crop-zoom { display: flex; align-items: center; gap: 14px; margin-top: 16px; }
.crop-zoom .el-slider { min-width: 0; flex: 1; }
.crop-zoom .el-button { padding: 8px 10px; margin: 0; }
.zoom-value { width: 40px; text-align: right; color: #607454; font-size: 11px; font-variant-numeric: tabular-nums; }
.crop-tools { display: flex; justify-content: center; gap: 12px; margin-top: 10px; }
.crop-tools .el-button { margin: 0; }
.crop-previews { display: flex; flex-direction: column; align-items: center; gap: 10px; }
.crop-previews > p { margin: 0 0 2px; color: #53684a; font-size: 12px; }
.crop-preview { width: 100px; height: 100px; overflow: hidden; background: #eaf0df; border: 1px solid #dfe5d8; }
.crop-preview img { display: block; width: 100%; height: 100%; }
.crop-preview.square { border-radius: 14px; }
.crop-preview.round { border-radius: 50%; margin-top: 12px; }
.crop-previews small { font-size: 11px; color: #82917a; }
.el-alert { margin-top: 14px; }
@media (max-width: 600px) {
  .crop-layout { grid-template-columns: 1fr; gap: 18px; }
  .crop-container { height: min(340px, 72vw); }
  .crop-previews { flex-direction: row; justify-content: center; gap: 12px; }
  .crop-preview { width: 56px; height: 56px; }
  .crop-preview.round { margin-top: 0; }
  .crop-previews > p { display: none; }
  .crop-zoom { gap: 10px; }
}
</style>

<style>
.avatar-crop-dialog { --el-color-primary: #3e6244; --el-color-primary-light-9: #edf2e7; --el-color-primary-dark-2: #29492f; max-width: calc(100vw - 24px); border-radius: 14px; padding: 24px; }
.avatar-crop-dialog .el-dialog__title { color: #1b3025; font-size: 19px; font-weight: 600; }
@media (max-width: 600px) { .avatar-crop-dialog { margin-top: 5vh; padding: 18px; } }
</style>
