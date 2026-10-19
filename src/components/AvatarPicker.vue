<template>
  <div class="avatar-picker" :aria-busy="preparing">
    <UserAvatar class="avatar-preview" :avatar="preview || modelValue" :name="name" />
    <div class="avatar-controls">
      <div class="avatar-actions">
        <button type="button" :disabled="disabled || cropVisible" @click="input?.click()">{{ preview || modelValue ? '更换头像' : '上传头像' }}</button>
        <button v-if="preview || modelValue" type="button" :disabled="disabled || preparing || cropVisible" @click="recrop">重新裁剪</button>
        <button v-if="preview || modelValue" type="button" class="remove-avatar" :disabled="disabled || cropVisible" @click="remove">移除头像</button>
        <button v-if="preparing" type="button" :disabled="disabled" @click="cancelPreparation">取消读取</button>
      </div>
      <input ref="input" type="file" :accept="AVATAR_IMAGE_ACCEPT" :disabled="disabled || cropVisible" aria-label="选择头像图片" @change="select" />
      <p class="avatar-hint">{{ AVATAR_IMAGE_TYPES }}，最大2MB，可手动裁剪。动图保存为静态头像。</p>
      <p v-if="preparing" class="avatar-filename" role="status">正在读取图片…</p>
      <p v-if="file" class="avatar-filename">已选择：{{ file.name }}，保存后生效</p>
      <p v-if="error" class="avatar-error" role="alert">{{ error }}</p>
    </div>
    <AvatarCropDialog :model-value="cropVisible" :source="draftSource" :initial-state="draftState" @update:model-value="setCropVisible" @confirm="applyCrop" />
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import AvatarCropDialog from '@/components/AvatarCropDialog.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { resolveAvatarUrl } from '@/utils/avatar'
import { AVATAR_IMAGE_ACCEPT, AVATAR_IMAGE_TYPES, MAX_AVATAR_BYTES, prepareAvatarImage } from '@/utils/avatarImage'

const props = defineProps({
  modelValue: { type: String, default: '' },
  file: { type: File, default: null },
  name: { type: String, default: '' },
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue', 'update:file', 'busy'])
const input = ref(null)
const preview = ref('')
const error = ref('')
const preparing = ref(false)
const cropVisible = ref(false)
const confirmedSource = shallowRef(null)
const draftSource = shallowRef(null)
const cropState = shallowRef(null)
const draftState = shallowRef(null)
const busy = computed(() => preparing.value || cropVisible.value)
let sequence = 0
let controller
let confirmedFile = null

function releasePreview() {
  if (preview.value) URL.revokeObjectURL(preview.value)
  preview.value = ''
}

watch(() => props.file, (file) => {
  releasePreview()
  if (file) preview.value = URL.createObjectURL(file)
  if (file && file !== confirmedFile) clearSources()
  error.value = ''
}, { immediate: true })
watch(() => props.modelValue, () => { error.value = '' })
watch(busy, value => emit('busy', value), { flush: 'sync' })
watch(() => props.disabled, value => {
  if (value) {
    sequence++
    controller?.abort()
    preparing.value = false
    setCropVisible(false)
  }
})
onBeforeUnmount(() => {
  sequence++
  controller?.abort()
  releasePreview()
  clearSources()
  emit('busy', false)
})

function select(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file || props.disabled) return
  void prepare(() => file)
}

function cancelPreparation() {
  sequence++
  controller?.abort()
  controller = null
  preparing.value = false
}

async function prepare(getFile) {
  const id = ++sequence
  controller?.abort()
  const nextController = new AbortController()
  controller = nextController
  preparing.value = true
  error.value = ''
  try {
    const file = await getFile(nextController.signal)
    if (id !== sequence || props.disabled) return
    const source = await prepareAvatarImage(file)
    if (id !== sequence || props.disabled) return
    releaseDraft()
    draftSource.value = { ...source, url: URL.createObjectURL(source.blob) }
    draftState.value = null
    cropVisible.value = true
  } catch (failure) {
    if (id === sequence) error.value = failure.message || '图片读取失败，请重新选择图片'
  } finally {
    if (id === sequence) {
      preparing.value = false
      controller = null
    }
  }
}

function recrop() {
  if (props.disabled || busy.value) return
  error.value = ''
  if (confirmedSource.value) {
    draftSource.value = confirmedSource.value
    draftState.value = cropState.value
    cropVisible.value = true
    return
  }
  void prepare(async signal => {
    if (props.file) return props.file
    try {
      const url = resolveAvatarUrl(props.modelValue)
      if (!url) throw new Error()
      const response = await fetch(url, { signal, credentials: 'omit' })
      if (!response.ok || Number(response.headers.get('content-length')) > MAX_AVATAR_BYTES) throw new Error()
      return new File([await response.blob()], 'avatar.png')
    } catch {
      throw new Error('当前头像无法读取，请重新选择本地图片')
    }
  })
}

function applyCrop({ file, state }) {
  if (props.disabled || !draftSource.value) return
  if (confirmedSource.value && confirmedSource.value !== draftSource.value) URL.revokeObjectURL(confirmedSource.value.url)
  confirmedSource.value = draftSource.value
  cropState.value = state
  confirmedFile = file
  emit('update:file', file)
  error.value = ''
}

function releaseDraft() {
  if (draftSource.value && draftSource.value !== confirmedSource.value) URL.revokeObjectURL(draftSource.value.url)
  draftSource.value = null
  draftState.value = null
}

function setCropVisible(value) {
  cropVisible.value = value
  if (!value) releaseDraft()
}

function clearSources() {
  const urls = new Set([confirmedSource.value?.url, draftSource.value?.url])
  confirmedSource.value = null
  draftSource.value = null
  cropState.value = null
  draftState.value = null
  confirmedFile = null
  urls.forEach(url => { if (url) URL.revokeObjectURL(url) })
}

function remove() {
  if (props.disabled) return
  sequence++
  controller?.abort()
  preparing.value = false
  setCropVisible(false)
  clearSources()
  emit('update:file', null)
  emit('update:modelValue', '')
  error.value = ''
}
</script>

<style scoped>
.avatar-picker { display: flex; gap: 18px; align-items: center; width: 100%; }
.avatar-preview { width: 76px; height: 76px; font-size: 28px; border: 1px solid #dfe5d8; border-radius: 18px; }
.avatar-controls { min-width: 0; }
.avatar-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.avatar-actions button { padding: 8px 12px; border: 1px solid #cddac1; border-radius: 7px; background: #f1f6e9; color: #3e6244; font: inherit; font-size: 12px; cursor: pointer; }
.avatar-actions .remove-avatar { border-color: transparent; background: transparent; color: #7b8b72; }
.avatar-actions button:disabled { opacity: .5; cursor: default; }
.avatar-actions button:focus-visible { outline: 2px solid #91ad62; outline-offset: 3px; }
input[type='file'] { display: none; }
.avatar-hint, .avatar-filename, .avatar-error { font-size: 11px; line-height: 1.7; margin: 8px 0 0; color: #7b8b72; overflow-wrap: anywhere; }
.avatar-filename { color: #52732b; }
.avatar-error { color: #ad4938; }
@media (max-width: 480px) { .avatar-picker { align-items: flex-start; gap: 12px; } .avatar-preview { width: 60px; height: 60px; border-radius: 14px; } }
</style>
