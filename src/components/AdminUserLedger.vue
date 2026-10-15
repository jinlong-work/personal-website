<template>
  <section class="user-ledger" aria-labelledby="user-ledger-title">
    <header class="ledger-heading">
      <div>
        <p class="eyebrow">USER DIRECTORY</p>
        <h1 id="user-ledger-title">用户管理 <span>用户台账</span></h1>
        <p class="description">集中维护用户账号、登录状态与角色权限。</p>
      </div>
      <el-button class="create-user" type="primary" :disabled="loading || saving || !canCreate" @click="openDialog('create')">＋ 新增用户</el-button>
    </header>

    <div class="role-guide" aria-label="角色权限说明">
      <div v-for="role in roleDefinitions" :key="role.key"><span class="role-dot" :class="role.key"></span><div><strong>{{ role.label }}</strong><p>{{ role.description }}</p></div></div>
    </div>

    <div class="ledger-card">
      <form class="ledger-filters" @submit.prevent="search">
        <el-input v-model="filters.keyword" class="search-input" placeholder="搜索账号、昵称或邮箱" maxlength="100" clearable aria-label="搜索账号、昵称或邮箱" />
        <el-select v-model="filters.role" clearable placeholder="全部角色" aria-label="按角色筛选"><el-option v-for="role in roleDefinitions" :key="role.key" :label="role.label" :value="role.key" /></el-select>
        <el-select v-model="filters.status" clearable placeholder="全部状态" aria-label="按状态筛选"><el-option label="正常" value="0" /><el-option label="停用" value="1" /></el-select>
        <el-button native-type="submit" type="primary" :disabled="saving">查询</el-button>
        <el-button :disabled="saving" @click="resetFilters">重置</el-button>
      </form>
      <div class="table-caption"><span>用户台账 <strong>{{ total }}</strong><small>条</small></span><el-button link :disabled="loading || saving" @click="loadUsers">刷新列表</el-button></div>
      <el-alert v-if="loadError" class="ledger-alert" type="error" :title="loadError" :closable="false" show-icon><el-button link @click="loadUsers">重新加载</el-button></el-alert>
      <el-table v-loading="loading" :data="rows" row-key="userId" class="ledger-table" stripe :empty-text="loadError ? '暂时无法获取用户台账，请重试' : '没有符合条件的用户'" aria-label="用户台账列表">
        <el-table-column label="序号" width="66" align="center"><template #default="{ $index }">{{ (pageNum - 1) * pageSize + $index + 1 }}</template></el-table-column>
        <el-table-column label="账号 / 昵称" min-width="180"><template #default="{ row }"><div class="account-cell"><UserAvatar class="user-avatar" :avatar="row.avatar || ''" :name="row.nickname || row.username" /><div><strong>{{ row.username }}</strong><el-tag v-if="isSelf(row)" size="small" effect="plain" class="self-tag">本人</el-tag><small>{{ row.nickname || '未设置昵称' }}</small></div></div></template></el-table-column>
        <el-table-column label="联系方式" min-width="200" show-overflow-tooltip><template #default="{ row }"><span>{{ row.email || '未设置邮箱' }}</span><small class="cell-secondary">{{ row.phone || '未设置手机号' }}</small></template></el-table-column>
        <el-table-column label="角色权限" min-width="130"><template #default="{ row }"><el-tag :type="roleTagType(row.role)" effect="light">{{ row.roleName }}</el-tag></template></el-table-column>
        <el-table-column label="账号状态" width="100"><template #default="{ row }"><span class="status-text" :class="{ inactive: row.status === '1' }"><i></i>{{ row.status === '0' ? '正常' : '停用' }}</span></template></el-table-column>
        <el-table-column label="创建时间" min-width="170"><template #default="{ row }">{{ formatDate(row.createTime) }}</template></el-table-column>
        <el-table-column label="最近登录" min-width="170"><template #default="{ row }">{{ formatDate(row.lastLoginAt) }}</template></el-table-column>
        <el-table-column label="操作" width="265" fixed="right"><template #default="{ row }"><div class="row-actions">
          <el-button link type="primary" :disabled="saving || !row.canEdit" @click="openDialog('edit', row)">编辑</el-button>
          <el-button link type="primary" :disabled="saving || !row.canResetPassword" @click="openDialog('password', row)">重置密码</el-button>
          <el-button link type="primary" :disabled="saving || !row.canSetRole" @click="openDialog('role', row)">设置角色</el-button>
          <el-button link :type="row.status === '0' ? 'danger' : 'success'" :disabled="saving || !row.canSetStatus" @click="changeStatus(row)">{{ row.status === '0' ? '停用' : '启用' }}</el-button>
        </div></template></el-table-column>
      </el-table>
      <footer class="table-footer"><span>{{ currentAdmin?.isSuperAdmin ? '内置超级管理员和本人账号不可停用，本人角色不可调整。' : '可维护普通用户；本人角色和其他管理员由超级管理员维护。' }}</span><el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[10, 20, 50]" :total="total" layout="total, sizes, prev, pager, next" :disabled="saving || loading" background @size-change="changePageSize" @current-change="loadUsers" /></footer>
    </div>

    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="540px" class="user-editor-dialog" :close-on-click-modal="false" :close-on-press-escape="!saving" :show-close="!saving" :before-close="beforeClose" @closed="clearDialog">
      <p class="dialog-description">{{ dialogDescription }}</p>
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top" :disabled="saving" @submit.prevent="save">
        <template v-if="mode === 'create' || mode === 'edit'">
          <el-form-item label="用户头像"><AvatarPicker v-model="form.avatar" v-model:file="avatarFile" :name="form.nickname || form.username" :disabled="saving" /></el-form-item>
          <el-form-item label="登录账号" prop="username"><el-input v-model="form.username" maxlength="100" autocomplete="off" placeholder="请输入登录账号" /></el-form-item>
          <el-form-item label="用户昵称" prop="nickname"><el-input v-model="form.nickname" maxlength="100" placeholder="请输入昵称（选填）" /></el-form-item>
          <div class="form-columns"><el-form-item label="联系邮箱" prop="email"><el-input v-model="form.email" maxlength="254" type="email" placeholder="选填" /></el-form-item><el-form-item label="手机号码" prop="phone"><el-input v-model="form.phone" maxlength="30" placeholder="选填" /></el-form-item></div>
          <el-form-item label="账号状态" prop="status"><el-radio-group v-model="form.status" :disabled="mode === 'edit' && !target?.canSetStatus"><el-radio value="0">正常</el-radio><el-radio value="1">停用</el-radio></el-radio-group></el-form-item>
        </template>
        <el-form-item v-if="mode === 'create' || mode === 'role'" label="角色权限" prop="role">
          <el-radio-group v-model="form.role" class="role-options"><el-radio v-for="role in roleDefinitions" :key="role.key" :value="role.key" :disabled="!role.assignable" border><strong>{{ role.label }}</strong><small>{{ role.description }}</small></el-radio></el-radio-group>
        </el-form-item>
        <template v-if="mode === 'create' || mode === 'password'">
          <el-form-item :label="mode === 'create' ? '初始密码' : '新密码'" prop="password"><el-input v-model="form.password" type="password" show-password autocomplete="new-password" placeholder="至少8个字符，最多72个UTF-8字节" /></el-form-item>
          <el-form-item label="确认密码" prop="confirmPassword"><el-input v-model="form.confirmPassword" type="password" show-password autocomplete="new-password" placeholder="请再次输入密码" @keyup.enter="save" /></el-form-item>
        </template>
        <el-alert v-if="saveError" type="error" :title="saveError" :closable="false" show-icon />
      </el-form>
      <template #footer><el-button :disabled="saving" @click="requestClose">取消</el-button><el-button type="primary" :loading="saving" @click="save">{{ mode === 'create' ? '创建用户' : '保存修改' }}</el-button></template>
    </el-dialog>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import * as userApi from '@/api/admin/users'
import { clearAdminLogin, currentAdmin, fetchCurrentAdmin } from '@/services/adminAuth'
import { getErrorStatus } from '@/utils/request'
import AvatarPicker from '@/components/AvatarPicker.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { uploadAvatar } from '@/api/admin/files'

const emit = defineEmits(['busy'])
const router = useRouter()
const rows = ref([])
const total = ref(0)
const pageNum = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const saving = ref(false)
const canCreate = ref(false)
const loadError = ref('')
const saveError = ref('')
const filters = reactive({ keyword: '', role: '', status: '' })
let appliedFilters = { ...filters }
let listController
let requestId = 0
let disposed = false
const dialogVisible = ref(false)
const mode = ref('create')
const target = ref(null)
const formRef = ref(null)
const avatarFile = ref(null)
const emptyForm = () => ({ username: '', nickname: '', email: '', phone: '', avatar: '', status: '0', role: 'common', password: '', confirmPassword: '' })
const form = reactive(emptyForm())
const baseline = ref('')
const roleOptions = ref([])
const roleDefinitions = computed(() => [
  { key: 'admin', label: '超级管理员', description: '管理全部用户与角色权限' },
  { key: 'manager', label: '管理员', description: '维护普通用户的账号和密码' },
  { key: 'common', label: '普通用户', description: '维护本人的账号和密码' }
].map(role => ({ ...role, assignable: roleOptions.value.find(option => option.key === role.key)?.assignable === true })))
const dialogTitle = computed(() => ({ create: '新增用户', edit: '编辑用户', password: '重置密码', role: '设置角色权限' })[mode.value])
const dialogDescription = computed(() => mode.value === 'create' ? '填写账号信息并设置初始密码和角色。' : mode.value === 'password'
  ? `为「${target.value?.username || ''}」设置新密码，保存后该用户需重新登录。`
  : mode.value === 'role' ? `调整「${target.value?.username || ''}」的角色，权限将在后续请求中生效。` : '修改用户账号及联系信息，登录账号修改后使用新账号登录。')
const dirty = computed(() => Boolean(avatarFile.value) || JSON.stringify(form) !== baseline.value)
const rules = computed(() => ({
  username: [{ required: true, message: '请输入登录账号', trigger: 'blur' }, { pattern: /^[\p{L}\p{N}_][\p{L}\p{N}_.@-]{1,99}$/u, message: '账号需为2至100个字符，可使用文字、数字、下划线、点、@和连字符', trigger: 'blur' }],
  email: [{ validator: (_rule, value, callback) => callback(!value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? undefined : new Error('请输入有效邮箱')), trigger: 'blur' }],
  role: [{ required: true, message: '请选择角色', trigger: 'change' }],
  password: [{ validator: (_rule, value, callback) => callback(Array.from(value).length >= 8 && new TextEncoder().encode(value).length <= 72 ? undefined : new Error('密码至少8个字符，最多72个UTF-8字节')), trigger: 'blur' }],
  confirmPassword: [{ validator: (_rule, value, callback) => callback(value && value === form.password ? undefined : new Error('两次输入的密码不一致')), trigger: 'blur' }]
}))

function isSelf(row) { return String(row.userId) === String(currentAdmin.value?.id) }
function roleTagType(role) { return role === 'admin' ? 'warning' : role === 'manager' ? 'success' : 'info' }
function formatDate(value) {
  if (!value) return '—'
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? '—' : date.toLocaleString('zh-CN', { hour12: false })
}
function errorMessage(error) {
  const status = getErrorStatus(error)
  if (status === 401) return '登录状态已失效，请重新登录'
  if (status === 403) return error.response?.data?.msg || '你没有执行此操作的权限'
  if (status && status < 500) return error.response?.data?.msg || '操作未完成，请刷新后重试'
  return '服务暂时不可用，请稍后重试；若刚提交修改，请先刷新列表核对结果。'
}
function setBusy(value) { saving.value = value; emit('busy', value) }

async function loadUsers() {
  if (disposed) return
  listController?.abort()
  listController = new AbortController()
  const id = ++requestId
  loading.value = true
  loadError.value = ''
  try {
    const { data: response } = await userApi.listUsers({ ...appliedFilters, pageNum: pageNum.value, pageSize: pageSize.value }, { signal: listController.signal })
    if (disposed || id !== requestId) return
    const data = response.data
    if (!Array.isArray(data?.rows) || !Number.isFinite(data.total) || !Array.isArray(data.roles)) throw new Error('用户台账响应异常')
    const lastPage = Math.max(1, Math.ceil(data.total / pageSize.value))
    if (pageNum.value > lastPage) { pageNum.value = lastPage; return loadUsers() }
    rows.value = data.rows
    total.value = data.total
    canCreate.value = data.canCreate === true
    roleOptions.value = data.roles
  } catch (error) {
    if (disposed || id !== requestId || error.code === 'ERR_CANCELED') return
    rows.value = []
    total.value = 0
    canCreate.value = false
    loadError.value = errorMessage(error)
  } finally {
    if (!disposed && id === requestId) loading.value = false
  }
}
function search() { if (saving.value) return; appliedFilters = { keyword: filters.keyword.trim(), role: filters.role || '', status: filters.status || '' }; pageNum.value = 1; void loadUsers() }
function resetFilters() { Object.assign(filters, { keyword: '', role: '', status: '' }); search() }
function changePageSize() { pageNum.value = 1; void loadUsers() }

async function openDialog(action, row = null) {
  if (saving.value) return
  mode.value = action
  target.value = row
  avatarFile.value = null
  Object.assign(form, emptyForm(), row ? { username: row.username, nickname: row.nickname || '', email: row.email || '', phone: row.phone || '', avatar: row.avatar || '', status: row.status, role: row.role } : {})
  baseline.value = JSON.stringify(form)
  saveError.value = ''
  dialogVisible.value = true
  await nextTick()
  formRef.value?.clearValidate()
}
function clearDialog() { Object.assign(form, emptyForm()); avatarFile.value = null; target.value = null; saveError.value = ''; formRef.value?.clearValidate() }
async function beforeClose(done) {
  if (saving.value) return
  if (dirty.value) {
    try { await ElMessageBox.confirm('尚有未保存的修改，确定关闭吗？', '放弃修改', { confirmButtonText: '放弃修改', cancelButtonText: '继续编辑', type: 'warning' }) } catch { return }
  }
  done()
}
function requestClose() { void beforeClose(() => { dialogVisible.value = false }) }

async function save() {
  if (saving.value || !dialogVisible.value) return
  const valid = await formRef.value?.validate().catch(() => false)
  if (!valid || disposed || saving.value || !dialogVisible.value) return
  setBusy(true)
  saveError.value = ''
  const self = target.value && isSelf(target.value)
  try {
    if (avatarFile.value && ['create', 'edit'].includes(mode.value)) {
      form.avatar = await uploadAvatar(avatarFile.value)
      avatarFile.value = null
      if (disposed) return
    }
    if (mode.value === 'create') await userApi.createUser({ ...form, username: form.username.trim(), nickname: form.nickname.trim(), email: form.email.trim(), phone: form.phone.trim() })
    else if (mode.value === 'edit') await userApi.updateUser(target.value.userId, { username: form.username.trim(), nickname: form.nickname.trim(), email: form.email.trim(), phone: form.phone.trim(), status: form.status, avatar: form.avatar })
    else if (mode.value === 'password') await userApi.resetUserPassword(target.value.userId, { newPassword: form.password, confirmPassword: form.confirmPassword })
    else await userApi.setUserRole(target.value.userId, form.role)
    if (disposed) return
    if (mode.value === 'password' && self) {
      clearAdminLogin()
      dialogVisible.value = false
      await router.replace({ name: 'admin-login', query: { reason: 'password-changed' } })
      return
    }
    const editedSelf = mode.value === 'edit' && self
    dialogVisible.value = false
    form.password = ''
    form.confirmPassword = ''
    ElMessage.success(mode.value === 'create' ? '用户已创建' : mode.value === 'password' ? '密码已重置，该用户需重新登录' : '修改已保存')
    if (editedSelf) {
      try { await fetchCurrentAdmin() } catch { ElMessage.warning('修改已保存，账号信息暂时无法刷新，请稍后重试') }
    }
    await loadUsers()
  } catch (error) {
    if (!disposed) saveError.value = errorMessage(error)
  } finally {
    setBusy(false)
  }
}

async function changeStatus(row) {
  if (saving.value || !row.canSetStatus) return
  const status = row.status === '0' ? '1' : '0'
  try { await ElMessageBox.confirm(`确定${status === '1' ? '停用' : '启用'}「${row.username}」吗？${status === '1' ? '停用后该账号无法登录或访问后台。' : ''}`, '修改账号状态', { confirmButtonText: '确定', cancelButtonText: '取消', type: 'warning' }) } catch { return }
  if (disposed || saving.value) return
  setBusy(true)
  try {
    await userApi.setUserStatus(row.userId, status)
    if (disposed) return
    ElMessage.success(status === '1' ? '账号已停用' : '账号已启用')
    await loadUsers()
  } catch (error) { if (!disposed) ElMessage.error(errorMessage(error)) }
  finally { setBusy(false) }
}

function warnUnsaved(event) { if (dialogVisible.value && (dirty.value || saving.value)) { event.preventDefault(); event.returnValue = '' } }
onMounted(() => { void loadUsers(); window.addEventListener('beforeunload', warnUnsaved) })
onBeforeUnmount(() => { disposed = true; listController?.abort(); form.password = ''; form.confirmPassword = ''; emit('busy', false); window.removeEventListener('beforeunload', warnUnsaved) })
</script>

<style scoped>
.user-ledger { --el-color-primary: #3e6244; --el-color-primary-light-3: #6b886c; --el-color-primary-light-5: #9eaf91; --el-color-primary-light-7: #cbd7be; --el-color-primary-light-9: #edf2e7; --el-color-primary-dark-2: #29492f; --el-text-color-primary: #1b3025; }
.ledger-heading { display: flex; justify-content: space-between; align-items: center; gap: 24px; margin-bottom: 28px; }
.eyebrow { color: #71815e; font-size: 10px; font-weight: 600; letter-spacing: 2px; }
h1 { font-size: 28px; font-weight: 600; margin: 12px 0; } h1 span { font-size: 11px; font-weight: 400; color: #708167; vertical-align: middle; padding: 5px 9px; border: 1px solid #d7e0cf; border-radius: 5px; margin-left: 10px; }
.description { font-size: 13px; color: #788871; line-height: 1.8; }.create-user { padding: 18px 20px; }
.role-guide { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }.role-guide > div { display: flex; gap: 12px; padding: 18px 20px; background: #fbfcf8; border: 1px solid #dfe5d8; border-radius: 10px; }.role-guide strong { font-size: 13px; font-weight: 600; }.role-guide p { color: #82917a; font-size: 11px; margin-top: 7px; line-height: 1.6; }.role-dot { width: 8px; height: 8px; background: #90a283; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }.role-dot.admin { background: #bb9252; }.role-dot.manager { background: #577c50; }
.ledger-card { background: #fbfcf8; border: 1px solid #dfe5d8; border-radius: 14px; overflow: hidden; }.ledger-filters { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; padding: 24px; border-bottom: 1px solid #e8ecdf; }.ledger-filters .search-input { width: 250px; }.ledger-filters .el-select { width: 142px; }.ledger-filters .el-button + .el-button { margin-left: 0; }
.table-caption { display: flex; justify-content: space-between; align-items: center; padding: 18px 24px; color: #607454; font-size: 12px; }.table-caption strong { color: #334e31; margin: 0 8px 0 12px; }.table-caption small { color: #8c9785; }.ledger-alert { margin-bottom: 12px; }
.ledger-table { --el-table-header-bg-color: #f0f4e9; --el-table-tr-bg-color: #fbfcf8; --el-table-row-hover-bg-color: #eef3e6; --el-table-border-color: #e7ecdf; --el-table-header-text-color: #64785a; --el-table-text-color: #3e5138; font-size: 12px; }:deep(.el-table__cell) { padding: 15px 0; }:deep(.el-table__row--striped td.el-table__cell) { background: #f6f8f1; }.account-cell { display: flex; align-items: center; gap: 12px; }.user-avatar { width: 34px; height: 34px; flex-shrink: 0; display: grid; place-items: center; border-radius: 9px; color: #597344; background: #eaf0df; font-size: 14px; }.account-cell strong { color: #2b4529; font-weight: 600; overflow-wrap: anywhere; }.account-cell small, .cell-secondary { display: block; font-size: 11px; color: #8a9782; margin-top: 5px; }.self-tag { margin-left: 7px; font-size: 10px; }.status-text { display: inline-flex; align-items: center; gap: 7px; color: #62824d; }.status-text i { width: 6px; height: 6px; border-radius: 50%; background: #72965c; }.status-text.inactive { color: #939d8e; }.status-text.inactive i { background: #aeb6a8; }.row-actions { display: flex; align-items: center; gap: 12px; }.row-actions .el-button { margin: 0; font-size: 12px; }
.table-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 22px 24px; border-top: 1px solid #e8ecdf; }.table-footer > span { font-size: 11px; color: #8a9782; line-height: 1.8; }.dialog-description { color: #7b8b72; font-size: 12px; line-height: 1.8; margin-bottom: 22px; }.form-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }.role-options { display: grid; gap: 10px; width: 100%; }.role-options .el-radio { margin: 0; padding: 16px; width: 100%; height: auto; white-space: normal; }.role-options strong { font-size: 13px; }.role-options small { display: block; font-size: 11px; line-height: 1.7; font-weight: 400; margin-top: 5px; color: #8a9782; }
@media (max-width: 900px) { .role-guide { gap: 8px; }.role-guide > div { padding: 14px 12px; }.ledger-filters { padding: 18px; }.table-footer { padding: 18px; }.ledger-filters .search-input { width: 100%; } }
@media (max-width: 600px) { .ledger-heading { flex-wrap: wrap; gap: 16px; }.role-guide { grid-template-columns: 1fr; }.role-guide > div { padding: 12px 16px; }.role-guide p { margin-top: 3px; }.ledger-filters .el-select { width: calc(50% - 6px); }.form-columns { grid-template-columns: 1fr; gap: 0; }.table-footer :deep(.el-pagination) { flex-wrap: wrap; gap: 8px; }.table-footer :deep(.el-pagination__sizes) { margin: 0; } }
</style>

<style>
.user-editor-dialog { --el-color-primary: #3e6244; --el-color-primary-light-9: #edf2e7; max-width: calc(100vw - 32px); border-radius: 14px; padding: 24px; }
.user-editor-dialog .el-dialog__title { color: #1b3025; font-size: 19px; font-weight: 600; }.user-editor-dialog .el-form-item__label { font-size: 12px; color: #53684a; }
</style>
