<template>
  <section class="project-manager" aria-labelledby="project-manager-title">
    <header class="manager-heading">
      <div><p class="eyebrow">PROJECT LIBRARY</p><h1 id="project-manager-title">项目管理 <span>首页作品</span></h1></div>
      <el-button type="primary" :disabled="loading || saving || !canCreate" @click="openEditor()">＋ 新增项目</el-button>
    </header>
    <div class="manager-card">
      <form class="manager-filters" @submit.prevent="search">
        <el-input v-model="keyword" class="keyword" placeholder="搜索项目名称或类型" maxlength="150" clearable aria-label="搜索项目名称或类型" />
        <el-select v-model="status" placeholder="全部状态" clearable aria-label="按发布状态筛选"><el-option label="已发布" value="published" /><el-option label="草稿 / 已下架" value="draft" /></el-select>
        <el-button native-type="submit" type="primary" :disabled="saving">查询</el-button>
        <el-button :disabled="saving" @click="resetSearch">重置</el-button>
      </form>
      <div class="table-caption"><span>项目库 <strong>{{ total }}</strong> 个</span><el-button link :disabled="loading || saving" @click="loadProjects">刷新列表</el-button></div>
      <el-alert v-if="loadError" type="error" :title="loadError" :closable="false" show-icon />
      <el-table v-loading="loading" :data="rows" row-key="id" class="project-table" :empty-text="loadError ? '项目暂时无法加载' : '还没有符合条件的项目'">
        <el-table-column label="项目" min-width="300"><template #default="{ row }"><div class="project-cell"><el-image v-if="row.images?.length" :src="resolveProjectImage(row.images[0])" fit="cover" class="project-cover"><template #error><span class="image-placeholder">图片失效</span></template></el-image><span v-else class="project-cover image-placeholder">暂无封面</span><div><strong>{{ row.name }}</strong><small>{{ row.type }} · {{ row.images.length }} 张效果图</small></div></div></template></el-table-column>
        <el-table-column label="展示位置" width="125"><template #default="{ row }"><el-tag :type="row.featured ? 'success' : 'info'" effect="plain">{{ row.featured ? '精选项目' : '更多项目' }}</el-tag></template></el-table-column>
        <el-table-column label="排序" prop="sortOrder" width="85" />
        <el-table-column label="状态" width="110"><template #default="{ row }"><el-tag :type="row.status === 'published' ? 'success' : 'info'">{{ row.status === 'published' ? '已发布' : '草稿 / 下架' }}</el-tag></template></el-table-column>
        <el-table-column label="更新时间" min-width="170"><template #default="{ row }">{{ formatDate(row.updateTime) }}</template></el-table-column>
        <el-table-column label="操作" width="220" fixed="right"><template #default="{ row }"><div class="row-actions"><el-button link type="primary" :disabled="saving || !row.canEdit" @click="openEditor(row)">编辑</el-button><el-button link :type="row.status === 'published' ? 'warning' : 'success'" :disabled="saving || !row.canPublish" @click="changeStatus(row)">{{ row.status === 'published' ? '下架' : '发布' }}</el-button><el-button link type="danger" :disabled="saving || !row.canRemove" @click="removeProject(row)">删除</el-button></div></template></el-table-column>
      </el-table>
      <footer class="table-footer"><span>排序值越小越靠前；已发布项目会在首页展示。</span><el-pagination v-model:current-page="pageNum" v-model:page-size="pageSize" :page-sizes="[10, 20, 50]" :total="total" layout="total, sizes, prev, pager, next" background :disabled="saving || loading" @current-change="loadProjects" @size-change="changePageSize" /></footer>
    </div>

    <el-drawer v-model="editorVisible" :title="target ? '编辑项目' : '新增项目'" size="min(920px, 100vw)" class="project-editor" append-to-body destroy-on-close :close-on-click-modal="false" :close-on-press-escape="!saving && !preparing" :show-close="!saving && !preparing" :before-close="beforeClose" @closed="clearEditor">
      <el-form ref="formRef" :model="form" :rules="rules" label-position="top" :disabled="saving || preparing" @submit.prevent="save">
        <div class="editor-section-heading"><h2>项目内容</h2><span>中文为默认内容，英文留空时使用中文。</span></div>
        <el-tabs v-model="contentTab">
          <el-tab-pane label="中文内容" name="zh">
            <div class="form-columns"><el-form-item label="项目名称" prop="name"><el-input v-model="form.name" maxlength="150" show-word-limit placeholder="请输入项目名称" /></el-form-item><el-form-item label="项目类型" prop="type"><el-input v-model="form.type" maxlength="80" placeholder="如：三维地图、管理系统" /></el-form-item></div>
            <el-form-item label="项目介绍" prop="description"><el-input v-model="form.description" type="textarea" :rows="5" maxlength="12000" show-word-limit placeholder="介绍项目背景、目标与核心功能" /></el-form-item>
            <el-form-item label="技术栈"><el-select v-model="form.technologies" multiple filterable allow-create default-first-option :reserve-keyword="false" :multiple-limit="20" placeholder="输入技术名称，回车添加"><el-option v-for="item in technologyOptions" :key="item" :label="item" :value="item" /></el-select></el-form-item>
            <el-form-item label="项目贡献"><el-input v-model="form.achievementsText" type="textarea" :rows="5" maxlength="60000" placeholder="每行填写一项贡献或成果，最多30项" /></el-form-item>
            <div class="form-columns"><el-form-item label="首页卡片标题"><el-input v-model="form.headline" maxlength="180" placeholder="留空使用项目名称" /></el-form-item><el-form-item label="首页展示分类"><el-input v-model="form.category" maxlength="100" placeholder="留空使用项目类型" /></el-form-item></div>
            <el-form-item label="首页卡片简介"><el-input v-model="form.summary" type="textarea" :rows="3" maxlength="1000" placeholder="留空使用项目介绍" /></el-form-item>
          </el-tab-pane>
          <el-tab-pane label="English（可选）" name="en">
            <div class="form-columns"><el-form-item label="Project name"><el-input v-model="form.english.name" maxlength="150" /></el-form-item><el-form-item label="Project type"><el-input v-model="form.english.type" maxlength="80" /></el-form-item></div>
            <el-form-item label="Description"><el-input v-model="form.english.description" type="textarea" :rows="5" maxlength="12000" /></el-form-item>
            <el-form-item label="Technologies"><el-select v-model="form.english.technologies" multiple filterable allow-create default-first-option :reserve-keyword="false" :multiple-limit="20" placeholder="Type a technology and press Enter"><el-option v-for="item in technologyOptions" :key="item" :label="item" :value="item" /></el-select></el-form-item>
            <el-form-item label="Key contributions"><el-input v-model="form.english.achievementsText" type="textarea" :rows="5" maxlength="60000" placeholder="One contribution per line" /></el-form-item>
            <div class="form-columns"><el-form-item label="Card headline"><el-input v-model="form.english.headline" maxlength="180" /></el-form-item><el-form-item label="Card category"><el-input v-model="form.english.category" maxlength="100" /></el-form-item></div>
            <el-form-item label="Card summary"><el-input v-model="form.english.summary" type="textarea" :rows="3" maxlength="1000" /></el-form-item>
          </el-tab-pane>
        </el-tabs>

        <div class="editor-section-heading gallery-heading"><h2>项目效果图</h2><el-button :disabled="saving || preparing || !canUpload || gallery.length >= 12" @click="imageInput?.click()">＋ 添加图片</el-button></div>
        <input ref="imageInput" type="file" multiple :accept="PROJECT_IMAGE_ACCEPT" :disabled="saving || preparing || !canUpload" class="image-input" aria-label="选择项目效果图" @change="selectImages" />
        <p class="field-hint">支持 JPG / JPEG、PNG、WebP、GIF、BMP、AVIF，每张最大10MB，最多12张。保留原比例，动图转为静态图，第一张为封面。</p>
        <p v-if="preparing" role="status" class="upload-status">正在读取并处理图片…</p>
        <div v-if="gallery.length" class="gallery-grid">
          <article v-for="(image, index) in gallery" :key="image.key" class="gallery-item">
            <el-image :src="image.preview || resolveProjectImage(image.path)" :preview-src-list="gallery.map(item => item.preview || resolveProjectImage(item.path))" :initial-index="index" preview-teleported fit="contain" class="gallery-image"><template #error><span class="image-placeholder">图片无法显示</span></template></el-image>
            <span v-if="index === 0" class="cover-label">封面</span>
            <div class="gallery-tools"><el-button link :disabled="saving || preparing || index === 0" @click="makeCover(index)">设为封面</el-button><el-button link :disabled="saving || preparing || index === 0" aria-label="图片前移" @click="moveImage(index, -1)">←</el-button><el-button link :disabled="saving || preparing || index === gallery.length - 1" aria-label="图片后移" @click="moveImage(index, 1)">→</el-button><el-button link type="danger" :disabled="saving || preparing" @click="removeImage(index)">移除</el-button></div>
          </article>
        </div>
        <div v-else class="gallery-empty">添加项目效果图，展示你的作品。</div>
        <el-alert v-if="imageError" type="error" :title="imageError" :closable="false" show-icon />

        <div class="editor-section-heading publish-heading"><h2>首页展示</h2></div>
        <div class="form-columns"><el-form-item label="展示位置"><el-radio-group v-model="form.featured"><el-radio :value="true">精选项目</el-radio><el-radio :value="false">更多项目</el-radio></el-radio-group></el-form-item><el-form-item label="排序值"><el-input-number v-model="form.sortOrder" :min="0" :max="999999" :precision="0" /><small class="field-hint">值越小，展示越靠前。</small></el-form-item></div>
        <el-form-item label="发布状态"><el-radio-group v-model="form.status" :disabled="!canPublish"><el-radio value="draft">草稿 / 下架</el-radio><el-radio value="published">发布到首页</el-radio></el-radio-group></el-form-item>
        <p class="field-hint">发布前需填写项目介绍并添加至少一张效果图。保存后首页刷新即可看到最新内容。</p>
        <el-alert v-if="saveError" type="error" :title="saveError" :closable="false" show-icon />
      </el-form>
      <template #footer><div class="editor-footer"><span v-if="uploadStatus" role="status">{{ uploadStatus }}</span><el-button :disabled="saving || preparing" @click="requestClose">取消</el-button><el-button type="primary" :loading="saving" :disabled="preparing" @click="save">{{ form.status === 'published' ? '保存并发布' : '保存草稿' }}</el-button></div></template>
    </el-drawer>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import * as api from '@/api/admin/projects'
import { currentAdmin } from '@/services/adminAuth'
import { getErrorStatus } from '@/utils/request'
import { isProjectImagePath, prepareProjectImage, PROJECT_IMAGE_ACCEPT, resolveProjectImage } from '@/utils/projectImage'

const emit = defineEmits(['busy'])
const rows = ref([])
const total = ref(0)
const keyword = ref('')
const status = ref('')
const pageNum = ref(1)
const pageSize = ref(10)
const loading = ref(false)
const saving = ref(false)
const preparing = ref(false)
const canCreate = ref(false)
const canUpload = ref(false)
const loadError = ref('')
const saveError = ref('')
const imageError = ref('')
const editorVisible = ref(false)
const contentTab = ref('zh')
const target = ref(null)
const imageInput = ref(null)
const formRef = ref(null)
const gallery = ref([])
const baseline = ref('')
const uploadStatus = ref('')
const technologyOptions = ['Vue 3', 'Vue 2', 'Spring Boot', 'MyBatis-Plus', 'PostgreSQL', 'Cesium', 'ArcGIS API for JS', 'ECharts', 'Element Plus', 'WebGIS', 'Three.js', 'TypeScript']
const blankContent = () => ({ name: '', type: '', description: '', category: '', headline: '', summary: '', technologies: [], achievementsText: '' })
const blankForm = () => ({ ...blankContent(), english: blankContent(), featured: true, sortOrder: 100, status: 'draft' })
const form = reactive(blankForm())
const canPublish = computed(() => currentAdmin.value?.permissions?.some(permission => ['*:*:*', 'website:project:publish'].includes(permission)))
const rules = { name: [{ required: true, whitespace: true, message: '请输入项目名称', trigger: 'blur' }], type: [{ required: true, whitespace: true, message: '请输入项目类型', trigger: 'blur' }] }
let appliedFilters = { keyword: '', status: '' }
let controller
let requestId = 0
let imageJob = 0
let nextImageId = 0
let disposed = false
const snapshot = () => JSON.stringify({ form, images: gallery.value.map(image => image.path || image.key) })
const dirty = computed(() => snapshot() !== baseline.value)
watch(() => saving.value || preparing.value || editorVisible.value, value => emit('busy', value), { flush: 'sync' })

function errorMessage(failure) {
  const code = getErrorStatus(failure)
  if (code === 401) return '登录状态已失效，请重新登录'
  if (code && code < 500) return failure.response?.data?.msg || '操作未完成，请刷新后重试'
  return '服务暂时不可用，请稍后重试；若刚提交修改，请先刷新列表核对结果。'
}
function formatDate(value) { return value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '—' }
const lines = value => value.split(/\r?\n/).map(line => line.trim()).filter(Boolean)

async function loadProjects() {
  if (disposed) return
  controller?.abort()
  controller = new AbortController()
  const id = ++requestId
  loading.value = true
  loadError.value = ''
  try {
    const { data } = await api.listProjects({ ...appliedFilters, pageNum: pageNum.value, pageSize: pageSize.value }, { signal: controller.signal })
    if (disposed || id !== requestId) return
    if (!Array.isArray(data.data?.rows) || !Number.isFinite(data.data.total)) throw new Error('项目响应异常')
    const lastPage = Math.max(1, Math.ceil(data.data.total / pageSize.value))
    if (pageNum.value > lastPage) { pageNum.value = lastPage; return loadProjects() }
    rows.value = data.data.rows
    total.value = data.data.total
    canCreate.value = data.data.canCreate === true
    canUpload.value = data.data.canUpload === true
  } catch (failure) {
    if (disposed || id !== requestId || failure.code === 'ERR_CANCELED') return
    rows.value = []
    total.value = 0
    canCreate.value = false
    canUpload.value = false
    loadError.value = errorMessage(failure)
  } finally { if (!disposed && id === requestId) loading.value = false }
}
function search() { appliedFilters = { keyword: keyword.value.trim(), status: status.value || '' }; pageNum.value = 1; void loadProjects() }
function resetSearch() { keyword.value = ''; status.value = ''; search() }
function changePageSize() { pageNum.value = 1; void loadProjects() }

function contentFrom(row = {}) { return { ...blankContent(), ...Object.fromEntries(['name', 'type', 'description', 'category', 'headline', 'summary'].map(key => [key, row[key] || ''])), technologies: [...(row.technologies || [])], achievementsText: (row.achievements || []).join('\n') } }
async function openEditor(row = null) {
  if (saving.value) return
  target.value = row ? { id: row.id, version: row.version } : null
  Object.assign(form, blankForm(), row ? { ...contentFrom(row), english: contentFrom(row.english), featured: row.featured, sortOrder: row.sortOrder, status: row.status } : {})
  gallery.value = (row?.images || []).map(path => ({ key: ++nextImageId, path, file: null, preview: '' }))
  saveError.value = imageError.value = uploadStatus.value = ''
  contentTab.value = 'zh'
  baseline.value = snapshot()
  editorVisible.value = true
  await nextTick()
  formRef.value?.clearValidate()
}

async function selectImages(event) {
  const files = [...(event.target.files || [])]
  event.target.value = ''
  if (!files.length || saving.value || preparing.value || !canUpload.value) return
  if (files.length + gallery.value.length > 12) { imageError.value = '每个项目最多12张效果图，请减少选择数量'; return }
  const job = ++imageJob
  preparing.value = true
  imageError.value = ''
  const failures = []
  try {
    for (const file of files) {
      try {
        const prepared = await prepareProjectImage(file)
        if (disposed || job !== imageJob || !editorVisible.value) return
        gallery.value.push({ key: ++nextImageId, path: '', file: prepared, preview: URL.createObjectURL(prepared) })
      } catch (failure) { if (!disposed && job === imageJob) failures.push(failure.message || `${file.name}：图片读取失败`) }
    }
    if (job === imageJob) imageError.value = failures.join('；')
  } finally { if (!disposed && job === imageJob) preparing.value = false }
}
function removeImage(index) { const [image] = gallery.value.splice(index, 1); if (image.preview) URL.revokeObjectURL(image.preview) }
function moveImage(index, direction) { const [image] = gallery.value.splice(index, 1); gallery.value.splice(index + direction, 0, image) }
function makeCover(index) { const [image] = gallery.value.splice(index, 1); gallery.value.unshift(image) }

async function beforeClose(done) {
  if (saving.value || preparing.value) return
  if (dirty.value) {
    try { await ElMessageBox.confirm('尚有未保存的项目修改，确定关闭吗？', '放弃修改', { confirmButtonText: '放弃修改', cancelButtonText: '继续编辑', type: 'warning' }) } catch { return }
  }
  done()
}
function requestClose() { void beforeClose(() => { editorVisible.value = false }) }
function releaseImages() { gallery.value.forEach(image => { if (image.preview) URL.revokeObjectURL(image.preview) }); gallery.value = [] }
function clearEditor() { imageJob++; releaseImages(); Object.assign(form, blankForm()); target.value = null; saveError.value = imageError.value = uploadStatus.value = '' }

async function save() {
  if (saving.value || preparing.value || !editorVisible.value) return
  const valid = await formRef.value?.validate().catch(() => false)
  if (!valid) { contentTab.value = 'zh'; return }
  if (disposed || saving.value || preparing.value || !editorVisible.value) return
  if (form.status === 'published' && (!form.description.trim() || !gallery.value.length)) { saveError.value = '发布前请填写项目介绍，并添加至少一张效果图'; return }
  const achievements = lines(form.achievementsText)
  const englishAchievements = lines(form.english.achievementsText)
  if ([...form.technologies, ...form.english.technologies].some(value => !value.trim() || value.trim().length > 80)) { saveError.value = '每项技术栈需为1至80个字符'; return }
  if ([achievements, englishAchievements].some(values => values.length > 30 || values.some(value => value.length > 2000))) { saveError.value = '项目贡献最多30项，每项不能超过2000个字符'; return }
  saving.value = true
  saveError.value = ''
  try {
    const pending = gallery.value.filter(image => image.file && !image.path)
    for (const [index, image] of pending.entries()) {
      uploadStatus.value = `正在上传图片 ${index + 1} / ${pending.length}`
      const { data } = await api.uploadProjectImage(image.file)
      if (disposed) return
      if (!isProjectImagePath(data.data?.path)) throw new Error('图片上传响应异常')
      image.path = data.data.path
      image.file = null
    }
    uploadStatus.value = '正在保存项目…'
    const payload = { ...form, achievements, english: { ...form.english, achievements: englishAchievements }, images: gallery.value.map(image => image.path) }
    delete payload.achievementsText
    delete payload.english.achievementsText
    if (target.value) await api.updateProject(target.value.id, { ...payload, version: target.value.version })
    else await api.createProject(payload)
    if (disposed) return
    editorVisible.value = false
    ElMessage.success(form.status === 'published' ? '项目已保存并发布，刷新首页即可查看' : '项目草稿已保存')
    await loadProjects()
  } catch (failure) { if (!disposed) saveError.value = errorMessage(failure) }
  finally { saving.value = false; uploadStatus.value = '' }
}

async function changeStatus(row) {
  if (saving.value || !row.canPublish) return
  const next = row.status === 'published' ? 'draft' : 'published'
  try { await ElMessageBox.confirm(next === 'draft' ? `下架「${row.name}」后，首页将不再展示此项目。` : `确定将「${row.name}」发布到首页吗？`, next === 'draft' ? '下架项目' : '发布项目', { type: 'warning', confirmButtonText: '确定', cancelButtonText: '取消' }) } catch { return }
  if (disposed || saving.value) return
  saving.value = true
  try { await api.setProjectStatus(row.id, next, row.version); if (!disposed) { ElMessage.success(next === 'draft' ? '项目已下架' : '项目已发布'); await loadProjects() } }
  catch (failure) { if (!disposed) ElMessage.error(errorMessage(failure)) }
  finally { saving.value = false }
}
async function removeProject(row) {
  if (saving.value || !row.canRemove) return
  try { await ElMessageBox.confirm(`确定删除「${row.name}」吗？删除后首页将不再展示此项目。`, '删除项目', { type: 'warning', confirmButtonText: '删除', cancelButtonText: '取消' }) } catch { return }
  if (disposed || saving.value) return
  saving.value = true
  try { await api.deleteProject(row.id, row.version); if (!disposed) { ElMessage.success('项目已删除'); await loadProjects() } }
  catch (failure) { if (!disposed) ElMessage.error(errorMessage(failure)) }
  finally { saving.value = false }
}
function warnUnsaved(event) { if (editorVisible.value && (dirty.value || saving.value || preparing.value)) { event.preventDefault(); event.returnValue = '' } }
onMounted(() => { void loadProjects(); window.addEventListener('beforeunload', warnUnsaved) })
onBeforeUnmount(() => { disposed = true; imageJob++; controller?.abort(); releaseImages(); emit('busy', false); window.removeEventListener('beforeunload', warnUnsaved) })
</script>

<style scoped>
.project-manager { --el-color-primary: #3e6244; --el-color-primary-light-3: #6b886c; --el-color-primary-light-7: #cbd7be; --el-color-primary-light-9: #edf2e7; --el-color-primary-dark-2: #29492f; --el-text-color-primary: #1b3025; }
.manager-heading { display: flex; justify-content: space-between; align-items: center; gap: 24px; margin-bottom: 28px; }
.eyebrow { color: #71815e; font-size: 10px; font-weight: 600; letter-spacing: 2px; }
h1 { font-size: 28px; font-weight: 600; margin: 12px 0; } h1 span { font-size: 11px; font-weight: 400; color: #708167; vertical-align: middle; padding: 5px 9px; border: 1px solid #d7e0cf; border-radius: 5px; margin-left: 10px; }
.manager-card { background: #fbfcf8; border: 1px solid #dfe5d8; border-radius: 14px; overflow: hidden; }
.manager-filters { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; padding: 24px; border-bottom: 1px solid #e8ecdf; }
.manager-filters .keyword { width: 280px; }.manager-filters .el-select { width: 160px; }.manager-filters .el-button { margin: 0; }
.table-caption { display: flex; align-items: center; justify-content: space-between; padding: 18px 24px; color: #607454; font-size: 12px; }.table-caption strong { margin: 0 8px; }
.project-table { --el-table-header-bg-color: #f0f4e9; --el-table-tr-bg-color: #fbfcf8; --el-table-border-color: #e7ecdf; --el-table-header-text-color: #64785a; --el-table-text-color: #3e5138; font-size: 12px; }
.project-table :deep(.el-table__cell) { padding: 18px 0; }.project-cell { display: flex; align-items: center; gap: 14px; }.project-cover { flex-shrink: 0; width: 88px; height: 56px; border-radius: 7px; overflow: hidden; background: #eef2e7; }.project-cell strong { color: #2b4529; font-weight: 600; overflow-wrap: anywhere; }.project-cell small { display: block; color: #8a9782; font-size: 11px; margin-top: 7px; }
.image-placeholder { display: grid; place-items: center; width: 100%; height: 100%; color: #8a9782; font-size: 11px; }.project-cover.image-placeholder { width: 88px; height: 56px; }
.row-actions { display: flex; align-items: center; gap: 16px; }.row-actions .el-button { margin: 0; font-size: 12px; }
.table-footer { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; padding: 22px 24px; border-top: 1px solid #e8ecdf; }.table-footer > span { color: #8a9782; font-size: 11px; }
.editor-section-heading { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 14px; }.editor-section-heading h2 { color: #29452f; font-size: 15px; margin: 0; }.editor-section-heading > span { color: #8a9782; font-size: 11px; }
.form-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }.form-columns .el-form-item { min-width: 0; }.el-select { width: 100%; }
.field-hint { color: #839276; font-size: 11px; line-height: 1.8; margin: 0 0 14px; }.el-form-item .field-hint { display: block; margin: 5px 0 0; width: 100%; }
.gallery-heading, .publish-heading { margin-top: 26px; padding-top: 22px; border-top: 1px solid #e5ebdd; }.image-input { display: none; }.gallery-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; margin-bottom: 16px; }.gallery-item { position: relative; overflow: hidden; border: 1px solid #dfe5d8; border-radius: 9px; background: #f5f8ef; }.gallery-image { display: block; width: 100%; height: 140px; }.cover-label { position: absolute; top: 8px; left: 8px; border-radius: 4px; padding: 3px 8px; background: #3e6244; color: white; font-size: 10px; }.gallery-tools { display: flex; align-items: center; justify-content: space-around; gap: 4px; padding: 10px 4px; }.gallery-tools .el-button { margin: 0; font-size: 11px; }.gallery-empty { border: 1px dashed #cddac1; border-radius: 10px; padding: 38px 16px; text-align: center; color: #8a9782; font-size: 12px; }.upload-status { color: #3e6244; font-size: 12px; }
.editor-footer { display: flex; justify-content: flex-end; align-items: center; gap: 12px; }.editor-footer > span { margin-right: auto; color: #6b805d; font-size: 12px; }.editor-footer .el-button { margin: 0; }.el-alert { margin-top: 12px; }
@media (max-width: 700px) { .manager-heading { flex-wrap: wrap; gap: 16px; }.manager-filters { padding: 18px; }.manager-filters .keyword { width: 100%; }.table-footer { padding: 18px; }.table-footer :deep(.el-pagination) { flex-wrap: wrap; gap: 8px; }.form-columns { grid-template-columns: 1fr; gap: 0; }.gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }.editor-section-heading > span { max-width: 170px; text-align: right; } }
</style>

<style>
.project-editor { --el-color-primary: #3e6244; --el-color-primary-light-9: #edf2e7; --el-color-primary-dark-2: #29492f; background: #fbfcf8; color: #29452f; }
.project-editor .el-drawer__header { margin-bottom: 0; padding: 24px; border-bottom: 1px solid #e5ebdd; color: #1b3025; font-weight: 600; }
.project-editor .el-drawer__body { padding: 26px; }.project-editor .el-drawer__footer { padding: 18px 26px; border-top: 1px solid #e5ebdd; }.project-editor .el-form-item__label { color: #53684a; font-size: 12px; }
@media (max-width: 600px) { .project-editor .el-drawer__body { padding: 18px; }.project-editor .el-drawer__footer { padding: 16px 18px; } }
</style>
