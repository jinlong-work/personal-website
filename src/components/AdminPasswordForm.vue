<template>
  <section class="password-panel" aria-labelledby="password-title">
    <p class="eyebrow">ACCOUNT SECURITY</p>
    <h2 id="password-title">修改密码</h2>
    <p class="description">修改后需要重新登录，请先保存上方账号资料。</p>
    <form novalidate :aria-busy="saving" @submit.prevent="save">
      <fieldset :disabled="saving || disabled">
        <div v-for="field in fields" :key="field.key" class="password-field">
          <label :for="`password-${field.key}`">{{ field.label }}</label>
          <input :id="`password-${field.key}`" v-model="form[field.key]" :name="field.key" :type="showPassword ? 'text' : 'password'" :autocomplete="field.autocomplete" :placeholder="field.placeholder" :aria-invalid="Boolean(errors[field.key])" :aria-describedby="`password-${field.key}-error`" @input="clearFeedback(field.key)" />
          <p :id="`password-${field.key}-error`" class="field-error">{{ errors[field.key] }}</p>
        </div>
        <div class="password-options"><label><input v-model="showPassword" type="checkbox" />显示密码</label><span>新密码至少8个字符，最多72个UTF-8字节</span></div>
        <p v-if="feedback" class="password-feedback" role="status">{{ feedback }}</p>
        <div class="password-actions"><button type="submit" class="save-button">{{ saving ? '正在修改…' : '修改密码' }}</button><button type="button" class="reset-button" @click="reset">清空</button></div>
      </fieldset>
    </form>
  </section>
</template>

<script setup>
import { nextTick, onBeforeUnmount, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { authErrorMessage, isSessionError, updateAdminPassword } from '@/services/adminAuth'

const props = defineProps({ disabled: Boolean })
const emit = defineEmits(['busy'])
const router = useRouter()
const saving = ref(false)
const showPassword = ref(false)
const feedback = ref('')
const form = reactive({ currentPassword: '', newPassword: '', confirmPassword: '' })
const errors = reactive({ currentPassword: '', newPassword: '', confirmPassword: '' })
const fields = [
  { key: 'currentPassword', label: '当前密码', autocomplete: 'current-password', placeholder: '请输入当前登录密码' },
  { key: 'newPassword', label: '新密码', autocomplete: 'new-password', placeholder: '请输入新的登录密码' },
  { key: 'confirmPassword', label: '确认新密码', autocomplete: 'new-password', placeholder: '请再次输入新密码' }
]
const byteLength = value => new TextEncoder().encode(value).length

function clearFeedback(field) {
  errors[field] = ''
  feedback.value = ''
}

function reset() {
  Object.assign(form, { currentPassword: '', newPassword: '', confirmPassword: '' })
  Object.assign(errors, { currentPassword: '', newPassword: '', confirmPassword: '' })
  feedback.value = ''
  showPassword.value = false
}

async function save() {
  if (saving.value || props.disabled) return
  feedback.value = ''
  errors.currentPassword = !form.currentPassword ? '请输入当前密码'
    : byteLength(form.currentPassword) > 72 ? '当前密码不能超过72个UTF-8字节' : ''
  errors.newPassword = Array.from(form.newPassword).length < 8 ? '新密码至少8个字符'
    : byteLength(form.newPassword) > 72 ? '新密码不能超过72个UTF-8字节'
    : form.newPassword === form.currentPassword ? '新密码不能与当前密码相同' : ''
  errors.confirmPassword = !form.confirmPassword ? '请再次输入新密码'
    : form.newPassword !== form.confirmPassword ? '两次输入的新密码不一致' : ''
  const invalid = Object.keys(errors).find(key => errors[key])
  if (invalid) {
    document.getElementById(`password-${invalid}`)?.focus()
    return
  }
  saving.value = true
  emit('busy', true)
  let focusField
  try {
    await updateAdminPassword({ ...form })
    reset()
    await router.replace({ name: 'admin-login', query: { reason: 'password-changed' } })
  } catch (error) {
    if (isSessionError(error) || error.response?.data?.code === 'PASSWORD_CHANGED_RETRY') {
      reset()
      await router.replace({ name: 'admin-login', query: { reason: 'expired' } })
      return
    }
    feedback.value = error.response?.status === 429 ? '密码修改尝试过于频繁，请稍后再试'
      : !error.response && error.code ? '未能确认修改结果，请重新登录后确认密码是否已更新'
      : authErrorMessage(error)
    if (error.response?.data?.code === 'CURRENT_PASSWORD_INCORRECT') {
      errors.currentPassword = feedback.value
      form.currentPassword = ''
      focusField = 'currentPassword'
    }
  } finally {
    saving.value = false
    emit('busy', false)
    if (focusField) {
      await nextTick()
      document.getElementById(`password-${focusField}`)?.focus()
    }
  }
}

onBeforeUnmount(reset)
</script>

<style scoped>
.password-panel { max-width: 800px; margin-top: 24px; padding: 32px; border: 1px solid #dfe5d8; border-radius: 14px; background: #fbfcf8; }
.eyebrow { font-size: 10px; letter-spacing: 2px; color: #64774e; font-weight: 600; }
h2 { font-size: 23px; margin: 12px 0; font-weight: 600; }
.description { margin-bottom: 28px; color: #7b8c73; font-size: 13px; line-height: 1.8; }
fieldset { border: 0; padding: 0; margin: 0; min-width: 0; }
.password-field { margin-bottom: 22px; }
.password-field label { display: block; margin-bottom: 10px; font-size: 13px; font-weight: 600; }
.password-field input { width: 100%; background: #fff; border: 1px solid #d5ddce; border-radius: 8px; padding: 13px 14px; color: #1b3025; font: inherit; font-size: 14px; }
input:focus-visible, button:focus-visible { outline: 2px solid #91ad62; outline-offset: 3px; }
.password-field input[aria-invalid='true'] { border-color: #b95842; }
input::placeholder { color: #9aa592; }
.field-error { color: #ad4938; font-size: 12px; margin-top: 8px; line-height: 1.7; }
.field-error:empty { display: none; }
.password-options { display: flex; gap: 16px; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-bottom: 24px; color: #7b8c73; font-size: 12px; }
.password-options label { display: flex; align-items: center; gap: 8px; }
.password-options input { accent-color: #64774e; }
.password-feedback { background: #fbebe5; color: #a44936; padding: 12px 16px; border-radius: 8px; font-size: 13px; line-height: 1.8; margin-bottom: 20px; }
.password-actions { display: flex; gap: 12px; }
button { font: inherit; font-size: 13px; padding: 12px 20px; border-radius: 8px; cursor: pointer; }
.save-button { border: 1px solid #1b3025; background: #1b3025; color: #e9f4d9; }
.reset-button { border: 1px solid #d5ddce; background: transparent; color: #64774e; }
fieldset:disabled { opacity: .65; }
fieldset:disabled button { cursor: wait; }
@media (max-width: 700px) { .password-panel { padding: 22px; } }
</style>
