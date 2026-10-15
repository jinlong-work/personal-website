<template>
  <div class="avatar-picker">
    <UserAvatar class="avatar-preview" :avatar="preview || modelValue" :name="name" />
    <div class="avatar-controls">
      <div class="avatar-actions">
        <button type="button" :disabled="disabled" @click="input?.click()">{{ preview || modelValue ? '更换头像' : '上传头像' }}</button>
        <button v-if="preview || modelValue" type="button" class="remove-avatar" :disabled="disabled" @click="remove">移除头像</button>
      </div>
      <input ref="input" type="file" accept="image/jpeg,image/png" :disabled="disabled" aria-label="选择头像图片" @change="select" />
      <p class="avatar-hint">JPG / PNG，最大2MB，保存时自动居中裁为方形。</p>
      <p v-if="file" class="avatar-filename">已选择：{{ file.name }}，保存后生效</p>
      <p v-if="error" class="avatar-error" role="alert">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount, ref, watch } from 'vue'
import UserAvatar from '@/components/UserAvatar.vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  file: { type: File, default: null },
  name: { type: String, default: '' },
  disabled: Boolean
})
const emit = defineEmits(['update:modelValue', 'update:file'])
const input = ref(null)
const preview = ref('')
const error = ref('')

function releasePreview() {
  if (preview.value) URL.revokeObjectURL(preview.value)
  preview.value = ''
}

watch(() => props.file, (file) => {
  releasePreview()
  if (file) preview.value = URL.createObjectURL(file)
  error.value = ''
}, { immediate: true })
watch(() => props.modelValue, () => { error.value = '' })
onBeforeUnmount(releasePreview)

function select(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file || props.disabled) return
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    error.value = '头像仅支持JPG和PNG图片'
    return
  }
  if (!file.size || file.size > 2 * 1024 * 1024) {
    error.value = file.size ? '头像图片不能超过2MB' : '请选择非空的图片文件'
    return
  }
  error.value = ''
  emit('update:file', file)
}

function remove() {
  if (props.disabled) return
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
