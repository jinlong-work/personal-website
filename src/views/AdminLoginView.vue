<template>
  <main class="admin-login">
    <header class="login-header">
      <RouterLink class="login-brand" to="/"><span>jl.</span> 曹进龙</RouterLink>
      <RouterLink class="back-home" to="/">← 返回网站</RouterLink>
    </header>

    <div class="login-layout">
      <section class="login-intro" aria-labelledby="intro-title">
        <p class="login-eyebrow">PERSONAL WEBSITE / ADMIN</p>
        <h1 id="intro-title">让每一次更新，<br /><em>都有新的可能。</em></h1>
        <p class="intro-description">在这里，打理你的作品与表达。<br />让项目、经历与灵感，持续生长。</p>
        <div class="intro-coordinate" aria-hidden="true"><span>✳</span> WEBGIS · CODE · CREATIVE</div>
      </section>

      <section class="login-card" aria-labelledby="login-title">
        <p class="login-eyebrow">WELCOME BACK</p>
        <h2 id="login-title">登录后台</h2>
        <p class="card-description">使用管理员账号，进入个人网站管理空间。</p>

        <form novalidate :aria-busy="submitting" @submit.prevent="submit">
          <fieldset :disabled="submitting">
          <div class="login-field">
            <label for="admin-username">管理员账号</label>
            <input id="admin-username" v-model="username" name="username" autocomplete="username" autocapitalize="none" :spellcheck="false" placeholder="请输入管理员账号" maxlength="100" :aria-invalid="Boolean(errors.username)" :aria-describedby="errors.username ? 'username-error' : undefined" @input="clearFeedback('username')" />
            <p v-if="errors.username" id="username-error" class="field-error">{{ errors.username }}</p>
          </div>

          <div class="login-field">
            <label for="admin-password">登录密码</label>
            <div class="password-input">
              <input id="admin-password" v-model="password" name="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="请输入登录密码" :aria-invalid="Boolean(errors.password)" :aria-describedby="[errors.password && 'password-error', capsLock && 'caps-lock-hint'].filter(Boolean).join(' ') || undefined" @input="clearFeedback('password')" @keydown="checkCapsLock" @keyup="checkCapsLock" @blur="capsLock = false" />
              <button type="button" :aria-label="showPassword ? '隐藏密码' : '显示密码'" :aria-pressed="showPassword" @click="showPassword = !showPassword">{{ showPassword ? '隐藏' : '显示' }}</button>
            </div>
            <p v-if="errors.password" id="password-error" class="field-error">{{ errors.password }}</p>
            <p v-if="capsLock" id="caps-lock-hint" class="field-hint">大写锁定已开启</p>
          </div>

          <div v-if="captcha.enabled || !captcha.ready" class="login-field">
            <div class="captcha-label"><label for="admin-code">验证码</label><span>点击图片换一张</span></div>
            <div class="captcha-input">
              <input id="admin-code" v-model="captcha.code" name="code" autocomplete="off" autocapitalize="none" :spellcheck="false" maxlength="12" placeholder="请输入图中结果" :disabled="captcha.loading || !captcha.ready" :aria-invalid="Boolean(errors.code)" :aria-describedby="errors.code ? 'code-error' : undefined" @input="clearFeedback('code')" />
              <button class="captcha-image" type="button" :disabled="captcha.loading" aria-label="刷新验证码" :aria-busy="captcha.loading" @click="loadCaptcha">
                <img v-if="captcha.image && !captcha.loading" :src="captcha.image" alt="登录验证码" />
                <span v-else>{{ captcha.loading ? '加载中…' : '点击重试' }}</span>
              </button>
            </div>
            <p v-if="errors.code" id="code-error" class="field-error">{{ errors.code }}</p>
            <p v-if="captcha.error" class="field-error" role="alert">{{ captcha.error }}</p>
          </div>

          <p v-if="feedback" class="login-feedback" role="alert">{{ feedback }}</p>
          <button class="login-submit" type="submit" :disabled="submitting || captcha.loading || !captcha.ready">{{ submitting ? '正在登录…' : captcha.loading ? '正在加载验证码…' : '登录后台' }} <span aria-hidden="true">↗</span></button>
          </fieldset>
        </form>
        <p class="login-note">仅限网站管理员访问。忘记密码请联系网站维护者。</p>
      </section>
    </div>
    <footer class="login-footer">© {{ new Date().getFullYear() }} 曹进龙 <span>个人网站管理中心</span></footer>
  </main>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { authErrorMessage, fetchLoginCaptcha, loginAdmin } from '@/services/adminAuth'

const router = useRouter()
const route = useRoute()
const username = ref('')
const password = ref('')
const showPassword = ref(false)
const capsLock = ref(false)
const submitting = ref(false)
const feedback = ref('')
const errors = reactive({ username: '', password: '', code: '' })
const captcha = reactive({ enabled: true, image: '', uuid: '', code: '', loading: false, ready: false, error: '' })
const controller = new AbortController()
let disposed = false

watch(() => route.query.reason, (reason) => {
  feedback.value = reason === 'unavailable'
    ? '暂时无法验证登录状态，请确认后台服务已启动后重试'
    : reason === 'password-changed' ? '密码修改成功，请使用新密码重新登录'
    : reason === 'expired' ? '登录状态已失效，请重新登录' : ''
}, { immediate: true })

function clearFeedback(field) {
  errors[field] = ''
  feedback.value = ''
}

function checkCapsLock(event) {
  capsLock.value = Boolean(event.getModifierState?.('CapsLock'))
}

async function loadCaptcha() {
  if (captcha.loading || disposed) return
  captcha.loading = true
  captcha.ready = false
  captcha.error = ''
  captcha.code = ''
  captcha.uuid = ''
  captcha.image = ''
  errors.code = ''
  try {
    const result = await fetchLoginCaptcha({ signal: controller.signal })
    if (disposed) return
    Object.assign(captcha, result, { ready: true })
  } catch (error) {
    if (!disposed) captcha.error = `验证码加载失败：${authErrorMessage(error)}`
  } finally {
    if (!disposed) captcha.loading = false
  }
}

function loginDestination() {
  const redirect = route.query.redirect
  if (typeof redirect === 'string' && /^\/admin(?:[/?#]|$)/.test(redirect)) {
    const target = router.resolve(redirect)
    if (target.meta.requiresAdmin) return target.fullPath
  }
  return { name: 'admin-dashboard' }
}

async function submit() {
  if (submitting.value || captcha.loading || !captcha.ready) return
  errors.username = !username.value.trim() ? '请输入管理员账号'
    : username.value.trim().length < 2 || username.value.trim().length > 100 ? '账号需要2至100个字符' : ''
  errors.password = !password.value ? '请输入登录密码'
    : password.value.length < 5 ? '登录密码至少需要5个字符'
    : new TextEncoder().encode(password.value).length > 72 ? '密码不能超过72个UTF-8字节' : ''
  errors.code = captcha.enabled && !captcha.code.trim() ? '请输入验证码' : ''
  feedback.value = ''
  const invalidField = Object.keys(errors).find(field => errors[field])
  if (invalidField) {
    await nextTick()
    document.getElementById(`admin-${invalidField}`)?.focus()
    return
  }
  submitting.value = true
  let focusField
  try {
    await loginAdmin({
      username: username.value.trim(),
      password: password.value,
      code: captcha.enabled ? captcha.code.trim() : '',
      uuid: captcha.enabled ? captcha.uuid : ''
    }, { signal: controller.signal })
    if (disposed) return
    password.value = ''
    captcha.code = ''
    await router.replace(loginDestination())
  } catch (error) {
    if (disposed) return
    feedback.value = authErrorMessage(error)
    // 后端在校验密码前消费验证码，每次登录失败后都需要获取新图片。
    await loadCaptcha()
    focusField = captcha.enabled && captcha.ready ? 'code' : 'password'
  } finally {
    if (!disposed) {
      submitting.value = false
      if (focusField) {
        await nextTick()
        document.getElementById(`admin-${focusField}`)?.focus()
      }
    }
  }
}

onMounted(loadCaptcha)
onBeforeUnmount(() => {
  disposed = true
  controller.abort()
  password.value = ''
  captcha.code = ''
})
</script>

<style scoped>
.admin-login { min-height: 100svh; background: #0d1614; color: #f0f0e6; padding: 0 clamp(24px, 7vw, 112px); display: flex; flex-direction: column; font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif; }
.login-header { display: flex; justify-content: space-between; align-items: center; min-height: 110px; border-bottom: 1px solid #ffffff18; gap: 20px; }
.login-brand { display: flex; align-items: center; gap: 22px; font-size: 21px; font-weight: 700; color: inherit; text-decoration: none; }
.login-brand span { font: italic 46px Georgia, serif; font-weight: 400; }
.back-home { color: #b9c3bc; text-decoration: none; font-size: 14px; }
.back-home:hover { color: #d9ef9b; }
.login-layout { width: 100%; max-width: 1160px; margin: auto; padding: 76px 0; display: grid; grid-template-columns: 1fr 440px; align-items: center; gap: 72px; }
.login-eyebrow { font-size: 11px; letter-spacing: 2.5px; color: #d9ef9b; font-weight: 600; }
.login-intro h1 { margin: 26px 0; font-size: clamp(32px, 3.4vw, 50px); line-height: 1.5; font-weight: 500; letter-spacing: -1px; }
.login-intro h1 em { color: #d9ef9b; font-style: normal; }
.intro-description { color: #a5b3ab; line-height: 2; font-size: 15px; }
.intro-coordinate { margin-top: 76px; display: flex; align-items: center; gap: 16px; color: #a5b3ab; letter-spacing: 2px; font-size: 10px; }
.intro-coordinate span { color: #d9ef9b; font-size: 36px; }
.login-card { padding: 40px; border: 1px solid #ffffff1c; border-radius: 20px; background: #15201c; box-shadow: 0 24px 80px #00000020; }
.login-card h2 { margin: 12px 0; font-size: 28px; font-weight: 600; }
.card-description { margin-bottom: 32px; font-size: 13px; line-height: 1.8; color: #a5b3ab; }
.login-field { margin-bottom: 24px; }
.login-field label { display: block; font-size: 13px; margin-bottom: 10px; color: #d8dfd8; }
.login-field input { width: 100%; height: 50px; padding: 0 14px; border: 1px solid #ffffff26; border-radius: 8px; color: #f0f0e6; background: #0e1814; outline: none; font: inherit; font-size: 14px; }
.login-field input::placeholder { color: #738279; }
.login-field input:focus { border-color: #d9ef9b; box-shadow: 0 0 0 3px #d9ef9b14; }
.login-field input[aria-invalid='true'] { border-color: #eda59a; }
.password-input { position: relative; }
.password-input input { padding-right: 64px; }
.password-input button { position: absolute; right: 12px; top: 0; height: 50px; border: 0; color: #bfcabf; background: transparent; font-size: 12px; cursor: pointer; }
.field-error { color: #eda59a; margin-top: 8px; font-size: 12px; }
.field-hint { color: #e2d8ad; margin-top: 8px; font-size: 12px; }
.captcha-label { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
.captcha-label span { color: #829188; font-size: 11px; }
.captcha-input { display: grid; grid-template-columns: minmax(0, 1fr) 120px; gap: 12px; }
.captcha-image { height: 50px; padding: 0; overflow: hidden; border: 1px solid #ffffff26; border-radius: 8px; background: #eff2e9; color: #435449; cursor: pointer; font: inherit; font-size: 12px; }
.captcha-image img { display: block; width: 100%; height: 100%; object-fit: contain; }
.captcha-image:disabled { cursor: wait; opacity: .65; }
.login-field input:disabled { opacity: .6; }
.login-feedback { padding: 12px; margin-bottom: 18px; color: #e2d8ad; background: #e2d8ad0c; border: 1px solid #e2d8ad26; border-radius: 8px; font-size: 13px; line-height: 1.7; }
.login-submit { width: 100%; display: flex; align-items: center; justify-content: space-between; border: 0; border-radius: 8px; padding: 16px 20px; background: #d9ef9b; color: #142016; font: inherit; font-size: 14px; font-weight: 600; cursor: pointer; transition: background .2s; }
.login-submit:hover { background: #e5f7b8; }
.login-submit:disabled { cursor: wait; opacity: .65; }
fieldset { border: 0; min-width: 0; padding: 0; margin: 0; }
.login-note { margin-top: 24px; color: #829188; font-size: 11px; line-height: 1.8; }
.login-footer { display: flex; justify-content: space-between; gap: 16px; padding: 24px 0; border-top: 1px solid #ffffff18; color: #829188; font-size: 11px; }
a:focus-visible, button:focus-visible { outline: 2px solid #d9ef9b; outline-offset: 5px; }
@media (max-width: 900px) { .login-layout { grid-template-columns: 1fr; max-width: 480px; gap: 36px; padding: 44px 0; } .login-intro h1 { font-size: 32px; margin: 14px 0; } .intro-coordinate, .intro-description { display: none; } .login-header { min-height: 88px; } }
@media (max-width: 480px) { .login-card { padding: 28px 22px; } .login-brand { font-size: 18px; gap: 12px; } .login-footer { flex-wrap: wrap; } .captcha-input { grid-template-columns: minmax(0, 1fr) 104px; gap: 8px; } }
</style>
