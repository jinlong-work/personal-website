<template>
  <section class="profile-panel" aria-labelledby="profile-title">
    <div class="profile-heading"><div><p class="eyebrow">ACCOUNT PROFILE</p><h1 id="profile-title">账号信息</h1><p>更新你的登录账号、昵称和联系邮箱。</p></div><span class="role-badge">管理员</span></div>
    <form novalidate :aria-busy="saving" @submit.prevent="save">
      <fieldset :disabled="saving || disabled">
        <div class="profile-field">
          <label for="profile-username">登录账号 <span>必填</span></label>
          <input id="profile-username" v-model="form.username" name="username" autocomplete="username" maxlength="100" :aria-invalid="Boolean(errors.username)" aria-describedby="profile-username-hint profile-username-error" @input="clearFeedback('username')" />
          <p id="profile-username-hint" class="field-hint">修改后，下次登录请使用新账号；当前登录会保留。</p>
          <p id="profile-username-error" class="field-error">{{ errors.username }}</p>
        </div>
        <div class="profile-field">
          <label for="profile-nickname">昵称</label>
          <input id="profile-nickname" v-model="form.nickname" name="nickname" autocomplete="nickname" maxlength="100" placeholder="例如：曹进龙" :aria-invalid="Boolean(errors.nickname)" aria-describedby="profile-nickname-error" @input="clearFeedback('nickname')" />
          <p id="profile-nickname-error" class="field-error">{{ errors.nickname }}</p>
        </div>
        <div class="profile-field">
          <label for="profile-email">联系邮箱</label>
          <input id="profile-email" v-model="form.email" name="email" type="email" autocomplete="email" maxlength="254" placeholder="请输入邮箱（选填）" :aria-invalid="Boolean(errors.email)" aria-describedby="profile-email-error" @input="clearFeedback('email')" />
          <p id="profile-email-error" class="field-error">{{ errors.email }}</p>
        </div>
        <p v-if="feedback" class="profile-feedback" :class="{ success: saved }" role="status">{{ feedback }}</p>
        <div class="form-actions"><button class="save-button" type="submit" :disabled="!dirty">{{ saving ? '正在保存…' : '保存修改' }}</button><button class="reset-button" type="button" :disabled="!dirty" @click="reset">取消修改</button><span v-if="dirty">有未保存的修改</span></div>
      </fieldset>
    </form>
    <p class="profile-note">这里修改的是后台账号资料，个人网站公开内容保持不变。</p>
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, reactive, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { authErrorMessage, currentAdmin, isSessionError, updateAdminProfile } from '@/services/adminAuth'

defineProps({ disabled: Boolean })
const emit = defineEmits(['busy'])
const router = useRouter()
const saving = ref(false)
const saved = ref(false)
const feedback = ref('')
const form = reactive({ username: '', nickname: '', email: '' })
const baseline = reactive({ username: '', nickname: '', email: '' })
const errors = reactive({ username: '', nickname: '', email: '' })
const dirty = computed(() => Object.keys(form).some(key => form[key] !== baseline[key]))

function hydrate(user) {
  const values = { username: user?.username || '', nickname: user?.nickname || '', email: user?.email || '' }
  Object.assign(form, values)
  Object.assign(baseline, values)
}

watch(currentAdmin, (user) => { if (!dirty.value) hydrate(user) }, { immediate: true })

function clearFeedback(field) {
  errors[field] = ''
  feedback.value = ''
  saved.value = false
}

function reset() {
  hydrate(currentAdmin.value)
  Object.assign(errors, { username: '', nickname: '', email: '' })
  feedback.value = ''
  saved.value = false
}

async function save() {
  if (saving.value || !dirty.value) return
  const values = { username: form.username.trim(), nickname: form.nickname.trim(), email: form.email.trim() }
  errors.username = !values.username ? '请输入登录账号' : values.username.length > 100 ? '登录账号不能超过100个字符' : ''
  errors.nickname = values.nickname.length > 100 ? '昵称不能超过100个字符' : ''
  errors.email = values.email && (values.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) ? '请输入有效邮箱，且不能超过254个字符' : ''
  feedback.value = ''
  saved.value = false
  const invalid = Object.keys(errors).find(key => errors[key])
  if (invalid) {
    document.getElementById(`profile-${invalid}`)?.focus()
    return
  }
  saving.value = true
  emit('busy', true)
  try {
    const user = await updateAdminProfile(values)
    hydrate(user)
    saved.value = true
    feedback.value = '账号信息已保存'
  } catch (error) {
    if (isSessionError(error)) {
      await router.replace({ name: 'admin-login', query: { reason: 'expired' } })
      return
    }
    feedback.value = authErrorMessage(error)
    if (error.response?.status === 409) {
      errors.username = feedback.value
      document.getElementById('profile-username')?.focus()
    }
  } finally {
    saving.value = false
    emit('busy', false)
  }
}

function warnUnsaved(event) {
  if (!dirty.value) return
  event.preventDefault()
  event.returnValue = ''
}
window.addEventListener('beforeunload', warnUnsaved)
onBeforeUnmount(() => window.removeEventListener('beforeunload', warnUnsaved))
</script>

<style scoped>
.profile-panel { max-width: 800px; padding: 32px; border: 1px solid #dfe5d8; border-radius: 14px; background: #fbfcf8; }
.profile-heading { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; margin-bottom: 30px; }
.eyebrow { font-size: 10px; letter-spacing: 2px; color: #64774e; font-weight: 600; }
h1 { font-size: 26px; margin: 12px 0; font-weight: 600; }
.profile-heading p:last-child { font-size: 13px; color: #7b8c73; line-height: 1.8; }
.role-badge { background: #eaf2dc; color: #52732b; border-radius: 20px; padding: 6px 12px; font-size: 11px; white-space: nowrap; }
fieldset { border: 0; padding: 0; margin: 0; min-width: 0; }
.profile-field { margin-bottom: 22px; }
label { display: block; margin-bottom: 10px; font-size: 13px; font-weight: 600; }
label span { color: #82917f; font-size: 11px; font-weight: 400; margin-left: 8px; }
input { width: 100%; background: #fff; border: 1px solid #d5ddce; border-radius: 8px; padding: 13px 14px; color: #1b3025; font: inherit; font-size: 14px; }
input:focus { outline: 2px solid #91ad62; outline-offset: 1px; }
input[aria-invalid='true'] { border-color: #b95842; }
input::placeholder { color: #9aa592; }
.field-hint, .field-error { font-size: 12px; margin-top: 8px; line-height: 1.7; }
.field-hint { color: #7b8c73; }
.field-error:empty { display: none; }
.field-error { color: #ad4938; }
.profile-feedback { background: #fbebe5; color: #a44936; padding: 12px 16px; border-radius: 8px; font-size: 13px; line-height: 1.8; margin-bottom: 20px; }
.profile-feedback.success { background: #eaf2dc; color: #52732b; }
.form-actions { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
button { font: inherit; font-size: 13px; padding: 12px 20px; border-radius: 8px; cursor: pointer; }
.save-button { border: 1px solid #1b3025; background: #1b3025; color: #e9f4d9; }
.reset-button { border: 1px solid #d5ddce; background: transparent; color: #64774e; }
button:disabled { opacity: .5; cursor: default; }
button:focus-visible { outline: 2px solid #91ad62; outline-offset: 4px; }
.form-actions span, .profile-note { font-size: 11px; color: #82917f; line-height: 1.8; }
.profile-note { border-top: 1px solid #e5e9df; padding-top: 20px; margin-top: 28px; }
@media (max-width: 700px) { .profile-panel { padding: 22px; } .profile-heading { gap: 12px; } h1 { font-size: 23px; } }
</style>
