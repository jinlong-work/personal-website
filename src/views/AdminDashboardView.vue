<template>
  <div class="admin-shell">
    <aside class="admin-sidebar">
      <RouterLink to="/" class="admin-brand"><span>jl.</span><div>曹进龙<small>网站管理中心</small></div></RouterLink>
      <p class="nav-label">工作空间</p>
      <nav aria-label="后台管理导航">
        <button v-for="item in sections" :key="item.key" type="button" :disabled="accountSaving" :class="{ active: section === item.key }" :aria-current="section === item.key ? 'page' : undefined" @click="section = item.key">
          <span aria-hidden="true">{{ item.icon }}</span>{{ item.label }}<small v-if="['projects', 'settings'].includes(item.key)">待完善</small>
        </button>
      </nav>
      <RouterLink class="sidebar-return" to="/">← 查看个人网站</RouterLink>
    </aside>

    <div class="admin-body">
      <header class="admin-topbar">
        <span>后台管理 <span class="separator">/</span> {{ activeSection.label }}</span>
        <div class="admin-account"><span class="avatar">{{ displayName.slice(0, 1) }}</span><span>{{ displayName }}</span><button type="button" :disabled="loggingOut || refreshing || accountSaving" @click="logout">{{ loggingOut ? '正在退出…' : '退出登录' }}</button></div>
      </header>

      <main class="admin-content">
        <p v-if="feedback" class="dashboard-feedback" role="status">{{ feedback }}</p>
        <template v-if="section === 'overview'">
          <section class="welcome-panel">
            <div><p class="eyebrow">YOUR CREATIVE SPACE</p><h1>你好，{{ displayName }}。</h1><p>欢迎回到你的网站管理空间，从这里开始今天的更新。</p></div>
            <span class="welcome-symbol" aria-hidden="true">✳</span>
          </section>
          <div class="overview-grid">
            <section class="content-card">
              <div class="card-heading"><h2>当前账号</h2><span class="status-badge">{{ currentAdmin ? '已登录' : '待验证' }}</span></div>
              <dl><div><dt>登录账号</dt><dd>{{ currentAdmin?.username || '—' }}</dd></div><div><dt>账号角色</dt><dd>管理员</dd></div><div><dt>联系邮箱</dt><dd>{{ currentAdmin?.email || '未设置' }}</dd></div><div><dt>最近登录</dt><dd>{{ formatDate(currentAdmin?.lastLoginAt) }}</dd></div><div><dt>当前登录有效至</dt><dd>{{ formatDate(tokenState?.expiresAt) }}</dd></div><div><dt>最长登录有效至</dt><dd>{{ formatDate(tokenState?.maxExpiresAt) }}</dd></div></dl>
              <button class="secondary-button" type="button" :disabled="refreshing || loggingOut" @click="refreshAccount">{{ refreshing ? '正在刷新…' : '刷新账号信息' }}</button>
            </section>
            <section class="content-card"><div class="card-heading"><h2>管理入口</h2><span class="muted">逐步完善</span></div><div class="quick-links"><button v-for="item in sections.slice(1)" :key="item.key" type="button" @click="section = item.key"><span>{{ item.label }}<small>{{ item.description }}</small></span><span aria-hidden="true">↗</span></button></div></section>
          </div>
          <section class="content-card progress-note"><span aria-hidden="true">↗</span><div><h2>管理空间已就绪</h2><p>目前已接入管理员登录、账号资料修改和退出登录。项目管理及网站设置将在后续逐步开放。</p></div></section>
        </template>
        <div v-else-if="section === 'profile'">
          <AdminProfileForm :disabled="loggingOut || refreshing || passwordSaving" @busy="profileSaving = $event" />
          <AdminPasswordForm :disabled="loggingOut || refreshing || profileSaving" @busy="passwordSaving = $event" />
        </div>
        <section v-else class="content-card placeholder-panel">
          <p class="eyebrow">COMING SOON</p><span class="placeholder-icon" aria-hidden="true">{{ activeSection.icon }}</span><h1>{{ activeSection.label }}</h1><p>{{ activeSection.description }}，功能正在规划中。</p><button class="secondary-button" type="button" @click="section = 'overview'">返回工作台</button>
        </section>
      </main>
      <footer class="admin-footer">© {{ new Date().getFullYear() }} 曹进龙 · 个人网站管理中心</footer>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AdminProfileForm from '@/components/AdminProfileForm.vue'
import AdminPasswordForm from '@/components/AdminPasswordForm.vue'
import { authErrorMessage, currentAdmin, fetchCurrentAdmin, isSessionError, logoutAdmin } from '@/services/adminAuth'
import { tokenState } from '@/utils/auth'

const router = useRouter()
const section = ref('overview')
const loggingOut = ref(false)
const refreshing = ref(false)
const profileSaving = ref(false)
const passwordSaving = ref(false)
const accountSaving = computed(() => profileSaving.value || passwordSaving.value)
const feedback = ref('')
const sections = [
  { key: 'overview', label: '工作台', icon: '◈' },
  { key: 'projects', label: '项目管理', icon: '▦', description: '整理与展示你的精选作品' },
  { key: 'profile', label: '个人资料', icon: '◎', description: '修改登录账号、昵称和联系邮箱' },
  { key: 'settings', label: '网站设置', icon: '⚙', description: '管理网站的基础信息' }
]
const activeSection = computed(() => sections.find(item => item.key === section.value))
const displayName = computed(() => currentAdmin.value?.nickname || currentAdmin.value?.username || '管理员')

function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString('zh-CN', { hour12: false })
}

async function refreshAccount() {
  if (refreshing.value || loggingOut.value) return
  refreshing.value = true
  feedback.value = ''
  try {
    await fetchCurrentAdmin()
    feedback.value = '账号信息已更新'
  } catch (error) {
    if (isSessionError(error)) {
      await router.replace({ name: 'admin-login', query: { reason: 'expired' } })
    } else {
      feedback.value = '暂时无法刷新账号信息，请稍后重试'
    }
  } finally {
    refreshing.value = false
  }
}

async function logout() {
  if (loggingOut.value || refreshing.value || accountSaving.value) return
  loggingOut.value = true
  feedback.value = ''
  try {
    await logoutAdmin()
    await router.replace({ name: 'admin-login' })
  } catch (error) {
    feedback.value = authErrorMessage(error)
  } finally {
    loggingOut.value = false
  }
}
</script>

<style scoped>
.admin-shell { min-height: 100svh; display: flex; background: #f3f5ef; color: #1b3025; font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif; }
.admin-sidebar { width: 240px; flex-shrink: 0; background: #101c16; color: #e9ede3; padding: 32px 20px; display: flex; flex-direction: column; }
.admin-brand { display: flex; align-items: center; gap: 18px; color: inherit; text-decoration: none; padding: 0 12px 38px; font-size: 18px; font-weight: 600; }
.admin-brand > span { font: italic 46px Georgia, serif; }
.admin-brand small { display: block; color: #90a297; font-size: 11px; margin-top: 7px; font-weight: 400; }
.nav-label { color: #83998b; font-size: 11px; padding: 0 14px; margin-bottom: 16px; }
nav { display: grid; gap: 8px; }
button { font: inherit; cursor: pointer; }
nav button { display: flex; align-items: center; gap: 12px; padding: 14px; border: 0; border-radius: 9px; background: transparent; color: #b8c9bc; text-align: left; font-size: 13px; }
nav button:hover { background: #ffffff09; }
nav button.active { background: #d9ef9b; color: #172b1d; font-weight: 600; }
nav button small { margin-left: auto; font-size: 10px; opacity: .65; }
.sidebar-return { margin-top: auto; padding: 32px 14px 0; color: #b8c9bc; text-decoration: none; font-size: 12px; }
.admin-body { min-width: 0; flex: 1; display: flex; flex-direction: column; }
.admin-topbar { min-height: 88px; padding: 18px 40px; border-bottom: 1px solid #1b302513; display: flex; justify-content: space-between; align-items: center; gap: 20px; font-size: 13px; background: #fbfcf8; }
.separator { padding: 0 12px; color: #a0aca2; }
.admin-account { display: flex; align-items: center; gap: 12px; }
.avatar { background: #e8eddf; width: 32px; height: 32px; display: grid; place-items: center; border-radius: 50%; }
.admin-account button { background: transparent; border: 0; border-left: 1px solid #dce2d7; padding-left: 16px; color: #647868; font-size: 12px; }
.admin-content { width: 100%; max-width: 1280px; margin: 0 auto; padding: 36px 40px; flex: 1; }
.welcome-panel { padding: 36px; background: #e5ecd7; border: 1px solid #d8e1ca; border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 24px; }
.eyebrow { font-size: 10px; letter-spacing: 2px; color: #64774e; font-weight: 600; }
h1 { font-size: 28px; font-weight: 600; margin: 15px 0; }
.welcome-panel p:last-child { font-size: 13px; line-height: 1.8; color: #67795d; }
.welcome-symbol { font-size: 90px; color: #617b42; }
.overview-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.content-card { border: 1px solid #dfe5d8; border-radius: 14px; background: #fbfcf8; padding: 26px; }
.card-heading { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 24px; }
h2 { font-size: 15px; font-weight: 600; }
.status-badge { color: #52732b; background: #eaf2dc; border-radius: 20px; padding: 5px 10px; font-size: 10px; }
.muted { color: #82917f; font-size: 11px; }
dl { display: grid; gap: 18px; margin-bottom: 24px; font-size: 12px; }
dl div { display: flex; justify-content: space-between; gap: 16px; }
dt { color: #7e8c79; flex-shrink: 0; }
dd { text-align: right; overflow-wrap: anywhere; }
.secondary-button { border: 1px solid #d9e1cf; border-radius: 7px; background: #f2f5ec; padding: 10px 16px; font-size: 12px; color: #4c643c; }
.secondary-button:hover { background: #e8efdc; }
.quick-links { display: grid; gap: 10px; }
.quick-links button { display: flex; align-items: center; justify-content: space-between; gap: 14px; border: 1px solid #e5e9df; border-radius: 8px; padding: 14px 16px; text-align: left; background: transparent; color: #334b2c; font-size: 13px; }
.quick-links button:hover { background: #f0f4e7; }
.quick-links small { display: block; margin-top: 6px; color: #82917f; font-size: 11px; }
.progress-note { margin-top: 24px; display: flex; gap: 20px; align-items: center; }
.progress-note > span { font-size: 30px; color: #72885d; }
.progress-note p { margin-top: 10px; font-size: 12px; line-height: 1.9; color: #7b8c73; }
.dashboard-feedback { padding: 14px 18px; margin-bottom: 20px; border-radius: 8px; background: #e9efdc; font-size: 13px; line-height: 1.8; }
.placeholder-panel { text-align: center; padding: 72px 24px; }
.placeholder-icon { display: block; margin: 24px 0; color: #6d8553; font-size: 48px; }
.placeholder-panel > p:not(.eyebrow) { color: #7b8c73; font-size: 13px; line-height: 1.8; margin-bottom: 28px; }
.admin-footer { padding: 20px 40px; color: #8a9784; font-size: 11px; }
button:disabled { opacity: .6; cursor: wait; }
a:focus-visible, button:focus-visible { outline: 2px solid #91ad62; outline-offset: 4px; }
@media (max-width: 1050px) { .admin-sidebar { width: 210px; } .overview-grid { grid-template-columns: 1fr; } .admin-content { padding: 24px; } .admin-topbar { padding: 18px 24px; } }
@media (max-width: 700px) { .admin-shell { flex-direction: column; } .admin-sidebar { width: 100%; padding: 16px; } .admin-brand { padding: 0 8px 16px; } .admin-brand > span { font-size: 36px; } .nav-label, .sidebar-return { display: none; } nav { grid-template-columns: repeat(4, 1fr); gap: 4px; } nav button { padding: 12px 6px; justify-content: center; font-size: 11px; gap: 6px; } nav button small { display: none; } .admin-topbar { padding: 16px; min-height: 70px; flex-wrap: wrap; } .admin-content { padding: 20px 16px; } .welcome-panel { padding: 24px; } .welcome-symbol { display: none; } h1 { font-size: 24px; } .content-card { padding: 22px; } .admin-footer { padding: 20px 16px; } }
</style>
