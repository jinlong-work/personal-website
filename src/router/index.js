import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { ElMessage } from 'element-plus'
import { clearAdminLogin, fetchCurrentAdmin, isSessionError, setSessionExpiredHandler } from '@/services/adminAuth'
import { getToken } from '@/utils/auth'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin-dashboard',
      component: () => import('../views/AdminDashboardView.vue'),
      meta: { requiresAdmin: true }
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/AdminLoginView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  // 登录页与姓名入口共用管理页鉴权，只在后端确认失效后要求重新登录。
  if (to.name === 'admin-login') {
    return getToken() ? { name: 'admin-dashboard', replace: true } : true
  }
  if (!to.meta.requiresAdmin) return true
  if (!getToken()) return { name: 'admin-login', query: { reason: 'expired' }, replace: true }
  try {
    await fetchCurrentAdmin({ suppressAuthRedirect: true })
    return true
  } catch (error) {
    if (isSessionError(error)) {
      clearAdminLogin()
      return { name: 'admin-login', query: { reason: 'expired' }, replace: true }
    }
    // 暂时无法验证时保留Token，回到公开网站；直接打开后台地址也不会留下空页面。
    ElMessage.error('暂时无法验证登录状态，请稍后再次点击姓名进入后台')
    return { name: 'home', replace: true }
  }
})

// 多个并发请求失效时，Token 在第一次响应中清理，仅触发一次跳转。
setSessionExpiredHandler(() => {
  if (router.currentRoute.value.meta.requiresAdmin) {
    void router.replace({ name: 'admin-login', query: { reason: 'expired' } })
  }
})

export default router
