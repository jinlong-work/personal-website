<template>
  <section class="resume-manager" aria-labelledby="resume-manager-title">
    <header class="resume-heading">
      <div>
        <p class="eyebrow">ONLINE RESUME</p>
        <h1 id="resume-manager-title">在线简历 <span>让经历成为你的表达</span></h1>
        <p>维护首页个人资料，以及第二屏的教育背景、工作经历与技术栈。</p>
      </div>
      <RouterLink to="/" class="preview-link">查看首页 ↗</RouterLink>
    </header>
    <div v-if="loading" class="resume-loading" role="status">正在加载简历资料…</div>
    <div v-else-if="loadError" class="resume-loading" role="alert">
      <p>{{ loadError }}</p>
      <button class="resume-button" @click="load">重新加载</button>
    </div>
    <form v-else @submit.prevent="save">
      <div class="resume-toolbar">
        <div class="resume-language" aria-label="编辑语言">
          <button
            v-for="lang in languages"
            :key="lang.key"
            type="button"
            :class="{ selected: language === lang.key }"
            :aria-pressed="language === lang.key"
            @click="language = lang.key"
          >
            {{ lang.label }}
          </button>
        </div>
        <span class="resume-save-state" role="status"
          ><i :class="{ dirty }"></i>{{ dirty ? '有未保存的修改' : '已与首页同步' }}</span
        >
      </div>
      <p class="translation-hint">
        {{
          language === 'zh'
            ? '中文内容为首页主要资料。保存后刷新首页即可看到更新。'
            : '英文内容可选。基本信息留空时使用中文；某类经历或技术分组为空时，整组使用中文。'
        }}
      </p>
      <div class="resume-editor-layout">
        <aside class="resume-tabs" role="tablist" aria-label="简历内容分类">
          <button
            v-for="(item, index) in tabs"
            :id="`resume-tab-${item.key}`"
            :key="item.key"
            type="button"
            role="tab"
            :aria-selected="tab === item.key"
            :aria-controls="`resume-panel-${item.key}`"
            :class="{ active: tab === item.key }"
            @click="tab = item.key"
          >
            <span class="tab-number">0{{ index + 1 }}</span
            ><span
              >{{ item.label }}<small>{{ item.detail }}</small></span
            ><b v-if="item.key !== 'basic'">{{ editing[item.key].length }}</b>
          </button>
        </aside>
        <div
          :id="`resume-panel-${tab}`"
          class="resume-editor"
          role="tabpanel"
          :aria-labelledby="`resume-tab-${tab}`"
        >
          <fieldset :disabled="saving || !canEdit">
            <template v-if="tab === 'basic'">
              <div class="editor-heading">
                <div>
                  <h2>个人基本信息</h2>
                  <p>姓名、职业和简介展示在首屏，联系方式同步更新到联系区域。</p>
                </div>
                <span>首页 · 第一屏</span>
              </div>
              <div class="basic-fields">
                <label
                  v-for="field in basicFields"
                  :key="field.key"
                  :class="{ wide: field.multiline }"
                  ><span
                    >{{ field.label }}<em v-if="field.required && language === 'zh'"> *</em></span
                  ><textarea
                    v-if="field.multiline"
                    v-model="editing.basic[field.key]"
                    :maxlength="field.max"
                    :rows="field.key === 'about' ? 4 : 3"
                  ></textarea
                  ><input
                    v-else
                    v-model="editing.basic[field.key]"
                    :type="field.key === 'email' ? 'email' : 'text'"
                    :maxlength="field.max"
                    :required="field.required && language === 'zh'"
                  /><small v-if="field.key === 'about'">用于第二屏简介，可换行分段。</small></label
                >
              </div>
            </template>
            <template v-else>
              <div class="editor-heading">
                <div>
                  <h2>{{ activeTab.label }}</h2>
                  <p>{{ activeTab.detail }}，按列表顺序在首页第二屏展示。</p>
                </div>
                <button
                  class="resume-button"
                  type="button"
                  :disabled="editing[tab].length >= limits[tab]"
                  @click="addItem"
                >
                  ＋ {{ activeTab.addLabel }}
                </button>
              </div>
              <div v-if="!editing[tab].length" class="resume-empty">
                <span aria-hidden="true">＋</span>
                <h3>添加你的{{ activeTab.label }}</h3>
                <p>
                  {{
                    language === 'en'
                      ? '留空时会使用中文内容。'
                      : '从一段经历或一组技术开始，让访客更了解你。'
                  }}
                </p>
                <button class="resume-button" type="button" @click="addItem">
                  {{ activeTab.addLabel }}
                </button>
              </div>
              <article
                v-for="(item, index) in editing[tab]"
                :key="`${language}-${tab}-${index}`"
                class="resume-entry"
              >
                <header>
                  <h3>
                    <span>{{ String(index + 1).padStart(2, '0') }}</span
                    >{{
                      tab === 'education'
                        ? item.school || '新的教育经历'
                        : tab === 'experience'
                          ? item.company || '新的工作经历'
                          : item.name || '新的技术分组'
                    }}
                  </h3>
                  <div>
                    <button
                      v-if="tab !== 'skills'"
                      type="button"
                      :aria-label="`编辑第${index + 1}项`"
                      @click="openExperience(index)"
                    >
                      编辑
                    </button>
                    <button
                      type="button"
                      :disabled="index === 0"
                      :aria-label="`第${index + 1}项上移`"
                      @click="moveItem(index, -1)"
                    >
                      ↑</button
                    ><button
                      type="button"
                      :disabled="index === editing[tab].length - 1"
                      :aria-label="`第${index + 1}项下移`"
                      @click="moveItem(index, 1)"
                    >
                      ↓</button
                    ><button
                      type="button"
                      class="remove-entry"
                      :aria-label="`删除第${index + 1}项`"
                      @click="removeItem(index)"
                    >
                      删除
                    </button>
                  </div>
                </header>
                <div v-if="tab !== 'skills'" class="experience-summary">
                  <p class="experience-subtitle">
                    {{
                      tab === 'education'
                        ? [item.degree, item.major].filter(Boolean).join(' · ')
                        : item.role
                    }}
                  </p>
                  <span class="experience-period">{{ experiencePeriod(item) }}</span>
                  <p v-if="item.description" class="experience-description">
                    {{ item.description }}
                  </p>
                </div>
                <div v-else class="entry-fields">
                  <label class="wide"
                    >分组名称 *<input
                      v-model="item.name"
                      maxlength="100"
                      required
                      placeholder="例如：地图与空间" /></label
                  ><label class="wide"
                    >技术名称 *<textarea
                      :value="item.items.join('\n')"
                      :rows="4"
                      maxlength="2429"
                      placeholder="每行一项，例如 Vue 3、Cesium、Three.js"
                      required
                      @input="item.items = $event.target.value.split('\n')"
                    ></textarea
                    ><small
                      >每行一项，最多30项，每项最多80字。技术标签按填写顺序展示。</small
                    ></label
                  >
                </div>
                <label v-if="tab === 'skills'" class="entry-description"
                  >分组说明<textarea
                    v-model="item.description"
                    :rows="3"
                    :maxlength="600"
                    placeholder="介绍技术实践，可换行。"
                  ></textarea>
                </label>
              </article>
            </template>
          </fieldset>
        </div>
      </div>
      <div class="resume-savebar">
        <div>
          <p v-if="saveError" class="resume-error" role="alert">{{ saveError }}</p>
          <span v-else-if="!canEdit">当前账号拥有查看权限。</span
          ><span v-else>{{ dirty ? '修改尚未发布，保存后更新首页资料。' : updatedLabel }}</span>
        </div>
        <div>
          <button type="button" class="resume-button" :disabled="saving" @click="reload">
            重新加载</button
          ><button
            type="button"
            class="resume-button"
            :disabled="!dirty || saving"
            @click="discard"
          >
            撤销修改</button
          ><button
            class="resume-button primary"
            type="submit"
            :disabled="!canEdit || !dirty || saving"
          >
            {{ saving ? '正在保存…' : '保存并更新首页' }}
          </button>
        </div>
      </div>
    </form>
    <ResumeExperienceDialog
      v-model="experienceVisible"
      :kind="experienceTarget.kind"
      :entry="experienceEntry"
      :editing="experienceTarget.index !== null"
      :language="experienceTarget.language"
      @confirm="acceptExperience"
      @dirty-change="experienceDirty = $event"
    />
  </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { onBeforeRouteLeave, RouterLink } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getAdminResume, saveAdminResume } from '@/api/resume'
import { basicFields, emptyResumeContent } from '@/content/resumeDefaults'
import ResumeExperienceDialog from '@/components/ResumeExperienceDialog.vue'

const emit = defineEmits(['busy'])
const languages = [
  { key: 'zh', label: '中文内容' },
  { key: 'en', label: 'English（可选）' }
]
const tabs = [
  { key: 'basic', label: '基本信息', detail: '首页个人介绍' },
  { key: 'education', label: '教育背景', detail: '学校、专业与学历', addLabel: '添加教育经历' },
  { key: 'experience', label: '工作经历', detail: '工作履历与实践', addLabel: '添加工作经历' },
  { key: 'skills', label: '技术栈', detail: '技术分组与能力', addLabel: '添加技术分组' }
]
const limits = { education: 12, experience: 20, skills: 12 }
const language = ref('zh')
const tab = ref('basic')
const document = ref({ zh: emptyResumeContent(), en: emptyResumeContent() })
const baseline = ref('')
const version = ref(0)
const updateTime = ref('')
const canEdit = ref(false)
const loading = ref(true)
const saving = ref(false)
const loadError = ref('')
const saveError = ref('')
const experienceVisible = ref(false)
const experienceDirty = ref(false)
const experienceTarget = ref({ kind: 'education', language: 'zh', index: null })
const experienceEntry = computed(() => {
  const { kind, language, index } = experienceTarget.value
  return index === null ? null : document.value[language][kind][index]
})
let alive = true
const dirty = computed(() => !!baseline.value && JSON.stringify(document.value) !== baseline.value)
const editing = computed(() => document.value[language.value])
const activeTab = computed(() => tabs.find((item) => item.key === tab.value))
const updatedLabel = computed(() =>
  updateTime.value
    ? `最近更新：${new Date(updateTime.value).toLocaleString('zh-CN', { hour12: false })}`
    : '内容已保存'
)
watch(
  () => saving.value || experienceVisible.value,
  (busy) => emit('busy', busy)
)

function accept(data) {
  document.value = { zh: data.zh, en: data.en || emptyResumeContent() }
  baseline.value = JSON.stringify(document.value)
  version.value = data.version
  updateTime.value = data.updateTime
  canEdit.value = data.canEdit
}
async function load() {
  loading.value = true
  loadError.value = ''
  saveError.value = ''
  try {
    const { data } = await getAdminResume()
    if (alive) accept(data.data)
  } catch (error) {
    if (alive) loadError.value = responseMessage(error, '简历资料暂时无法加载，请稍后重试')
  } finally {
    if (alive) loading.value = false
  }
}
function addItem() {
  if (!canEdit.value || saving.value || editing.value[tab.value].length >= limits[tab.value]) return
  if (tab.value !== 'skills') return openExperience()
  editing.value.skills.push({ name: '', items: [], description: '' })
}
function openExperience(index = null) {
  if (!canEdit.value || saving.value || !['education', 'experience'].includes(tab.value)) return
  experienceTarget.value = { kind: tab.value, language: language.value, index }
  experienceDirty.value = false
  experienceVisible.value = true
}
function acceptExperience(entry) {
  const { kind, language, index } = experienceTarget.value
  const entries = document.value[language][kind]
  if (index === null) {
    if (entries.length >= limits[kind]) return
    entries.push(entry)
  } else entries[index] = entry
  experienceDirty.value = false
  experienceVisible.value = false
}
function experiencePeriod(item) {
  if (!item.start && !item.end) return tab.value === 'experience' ? '至今' : '时间未填写'
  if (!item.start) return item.end.replace('-', '.')
  return `${item.start.replace('-', '.')} — ${item.end ? item.end.replace('-', '.') : '至今'}`
}
function moveItem(index, direction) {
  const entries = editing.value[tab.value]
  const moved = entries.splice(index, 1)[0]
  entries.splice(index + direction, 0, moved)
}
function removeItem(index) {
  editing.value[tab.value].splice(index, 1)
}
async function confirmDiscard(title, confirmButtonText) {
  if (saving.value) return false
  if (!dirty.value && !experienceDirty.value) return true
  try {
    await ElMessageBox.confirm('当前修改尚未保存，继续会丢失这些修改。', title, {
      confirmButtonText,
      cancelButtonText: '继续编辑',
      type: 'warning'
    })
    return true
  } catch {
    return false
  }
}
async function confirmLeave() {
  return confirmDiscard('离开简历编辑', '放弃修改并离开')
}
async function reload() {
  if (await confirmDiscard('重新加载简历', '放弃修改并重新加载')) await load()
}
async function discard() {
  if (await confirmDiscard('撤销本次修改', '确认撤销')) {
    document.value = JSON.parse(baseline.value)
    saveError.value = ''
  }
}
async function save() {
  if (saving.value || experienceVisible.value || !canEdit.value || !dirty.value) return
  saving.value = true
  saveError.value = ''
  try {
    const payload = JSON.parse(JSON.stringify(document.value))
    for (const content of Object.values(payload)) {
      content.skills.forEach((group) => {
        group.items = group.items.map((item) => item.trim()).filter(Boolean)
      })
    }
    const { data } = await saveAdminResume({ ...payload, version: version.value })
    if (alive) {
      accept(data.data)
      ElMessage.success('简历已保存，首页资料已更新')
    }
  } catch (error) {
    if (alive) saveError.value = responseMessage(error, '保存失败，请检查网络后重试')
  } finally {
    if (alive) saving.value = false
  }
}
function responseMessage(error, fallback) {
  const message = error.response?.data?.msg
  return typeof message === 'string' && message ? message : fallback
}
function beforeUnload(event) {
  if (dirty.value || experienceDirty.value) {
    event.preventDefault()
    event.returnValue = ''
  }
}
onBeforeRouteLeave(confirmLeave)
onMounted(() => {
  load()
  window.addEventListener('beforeunload', beforeUnload)
})
onBeforeUnmount(() => {
  alive = false
  emit('busy', false)
  window.removeEventListener('beforeunload', beforeUnload)
})
defineExpose({ confirmLeave })
</script>

<style scoped>
.resume-manager {
  color: #213a2b;
}
.resume-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 30px;
}
.eyebrow {
  color: #6e875e;
  font-size: 10px;
  letter-spacing: 2.4px;
  margin: 0 0 12px;
}
h1 {
  font-size: 28px;
  font-weight: 600;
  margin: 0 0 12px;
}
h1 span {
  font-size: 12px;
  color: #7d8d75;
  font-weight: 400;
  margin-left: 15px;
}
.resume-heading p:last-child {
  color: #74836d;
  font-size: 12px;
  line-height: 1.8;
  margin: 0;
}
.preview-link {
  flex-shrink: 0;
  color: #47643c;
  font-size: 12px;
  text-decoration: none;
  border-bottom: 1px solid #c7d3ba;
  padding: 8px 0;
}
.resume-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.resume-language {
  display: flex;
  background: #e8eddf;
  padding: 4px;
  border: 1px solid #dce4d0;
  border-radius: 9px;
}
button,
input,
textarea {
  font: inherit;
}
button {
  cursor: pointer;
}
.resume-language button {
  border: 0;
  padding: 10px 18px;
  border-radius: 6px;
  font-size: 12px;
  color: #6a7b60;
  background: transparent;
}
.resume-language .selected {
  background: #fcfdf8;
  color: #2d4a25;
  box-shadow: 0 2px 5px #263b2210;
}
.resume-save-state {
  font-size: 11px;
  color: #718065;
  display: flex;
  gap: 8px;
  align-items: center;
}
.resume-save-state i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #6a934c;
}
.resume-save-state i.dirty {
  background: #b89446;
}
.translation-hint {
  color: #7f8e76;
  font-size: 11px;
  margin: 14px 0 22px;
  line-height: 1.8;
}
.resume-editor-layout {
  display: grid;
  grid-template-columns: 190px minmax(0, 1fr);
  border: 1px solid #dfe5d8;
  border-radius: 14px;
  overflow: hidden;
  background: #fbfcf8;
}
.resume-tabs {
  padding: 20px 12px;
  border-right: 1px solid #e4e9dc;
  background: #f4f7ee;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.resume-tabs button {
  display: flex;
  gap: 10px;
  align-items: center;
  text-align: left;
  border: 0;
  border-radius: 8px;
  padding: 15px 10px;
  background: transparent;
  color: #708167;
  font-size: 13px;
}
.resume-tabs button.active {
  background: #e3ecd5;
  color: #36572b;
}
.tab-number {
  font-size: 10px;
  opacity: 0.6;
}
.resume-tabs small {
  display: block;
  font-size: 10px;
  margin-top: 6px;
  opacity: 0.7;
}
.resume-tabs b {
  margin-left: auto;
  font-size: 10px;
  font-weight: 400;
}
.resume-editor {
  padding: 28px;
  min-height: 490px;
}
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}
.editor-heading {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
  border-bottom: 1px solid #e6ebdf;
  margin-bottom: 24px;
}
.editor-heading h2 {
  font-size: 17px;
  margin: 0 0 9px;
  font-weight: 600;
}
.editor-heading p {
  color: #84907b;
  font-size: 11px;
  line-height: 1.8;
  margin: 0;
}
.editor-heading > span {
  color: #84907b;
  font-size: 10px;
  white-space: nowrap;
}
.basic-fields,
.entry-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
label {
  display: flex;
  flex-direction: column;
  gap: 9px;
  font-size: 12px;
  color: #566c49;
  min-width: 0;
}
label em {
  font-style: normal;
  color: #9d7950;
}
input,
textarea {
  width: 100%;
  min-width: 0;
  border: 1px solid #d8e1cf;
  border-radius: 7px;
  padding: 11px 12px;
  color: #2f4728;
  background: #fffefb;
  font-size: 13px;
  line-height: 1.65;
  box-sizing: border-box;
}
input::placeholder,
textarea::placeholder {
  color: #a2ac9a;
  font-size: 11px;
}
textarea {
  resize: vertical;
}
label small {
  color: #8a967f;
  font-size: 10px;
  line-height: 1.7;
}
.wide {
  grid-column: 1 / -1;
}
.resume-entry {
  border: 1px solid #e0e7d7;
  border-radius: 10px;
  padding: 20px;
  margin-top: 18px;
}
.resume-entry header {
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;
}
.resume-entry h3 {
  display: flex;
  gap: 10px;
  min-width: 0;
  overflow-wrap: anywhere;
  font-size: 13px;
  font-weight: 500;
  margin: 0;
}
.resume-entry h3 span {
  color: #94a284;
  font-size: 11px;
}
.resume-entry header > div {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.resume-entry header button {
  border: 1px solid #e0e7d6;
  border-radius: 5px;
  background: transparent;
  color: #7c8d6d;
  padding: 4px 8px;
  font-size: 12px;
}
.resume-entry header .remove-entry {
  border-color: transparent;
  color: #a07966;
}
.experience-subtitle {
  margin: 0 0 9px;
  font-size: 13px;
  color: #566c49;
  overflow-wrap: anywhere;
}
.experience-period {
  font-size: 11px;
  color: #89967e;
  letter-spacing: 0.5px;
}
.experience-description {
  white-space: pre-line;
  overflow-wrap: anywhere;
  font-size: 12px;
  line-height: 1.9;
  color: #7c8d6d;
  margin: 14px 0 0;
}
.entry-description {
  margin-top: 20px;
}
.resume-empty {
  padding: 46px 20px;
  text-align: center;
  color: #7c8e6e;
}
.resume-empty > span {
  display: block;
  color: #a3b48c;
  font-size: 35px;
}
.resume-empty h3 {
  font-size: 15px;
  font-weight: 400;
}
.resume-empty p {
  font-size: 12px;
  margin-bottom: 22px;
  line-height: 1.8;
}
.resume-savebar {
  position: sticky;
  bottom: 16px;
  display: flex;
  gap: 18px;
  justify-content: space-between;
  align-items: center;
  padding: 18px 22px;
  margin-top: 20px;
  background: #fbfcf8f5;
  border: 1px solid #dce4d1;
  border-radius: 12px;
  box-shadow: 0 7px 25px #30441e08;
}
.resume-savebar > div:last-child {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}
.resume-savebar span {
  font-size: 11px;
  color: #7e8d74;
}
.resume-button {
  border: 1px solid #d6e0c8;
  border-radius: 7px;
  padding: 10px 15px;
  background: #f3f6ed;
  color: #526d3d;
  font-size: 12px;
  white-space: nowrap;
}
.resume-button.primary {
  background: #385e30;
  color: #f4f8ea;
  border-color: #385e30;
}
.resume-error {
  color: #a45642;
  font-size: 12px;
  line-height: 1.7;
  margin: 0;
}
.resume-loading {
  padding: 60px 20px;
  text-align: center;
  color: #7b8e6b;
  border: 1px solid #dfe5d8;
  background: #fbfcf8;
  border-radius: 14px;
  font-size: 13px;
}
button:disabled {
  opacity: 0.45;
  cursor: default;
}
input:focus,
textarea:focus {
  outline: 2px solid #a1b68a;
  outline-offset: 1px;
}
button:focus-visible,
a:focus-visible {
  outline: 2px solid #8fa574;
  outline-offset: 3px;
}
@media (max-width: 1050px) {
  .resume-editor-layout {
    grid-template-columns: 160px minmax(0, 1fr);
  }
  .resume-editor {
    padding: 22px;
  }
  h1 span {
    display: block;
    margin: 9px 0 0;
  }
}
@media (max-width: 700px) {
  .resume-heading {
    gap: 12px;
    align-items: flex-start;
  }
  h1 {
    font-size: 25px;
  }
  .resume-heading p:last-child {
    font-size: 11px;
  }
  .resume-editor-layout {
    grid-template-columns: 1fr;
  }
  .resume-tabs {
    flex-direction: row;
    padding: 8px;
    border-right: 0;
    border-bottom: 1px solid #e4e9dc;
    gap: 4px;
  }
  .resume-tabs button {
    flex: 1;
    justify-content: center;
    padding: 12px 2px;
    font-size: 11px;
    gap: 0;
  }
  .resume-tabs small,
  .resume-tabs b,
  .tab-number {
    display: none;
  }
  .resume-editor {
    padding: 20px 16px;
  }
  .basic-fields,
  .entry-fields {
    grid-template-columns: 1fr;
  }
  .resume-entry {
    padding: 15px;
  }
  .resume-savebar {
    flex-direction: column;
    align-items: stretch;
    bottom: 8px;
    padding: 15px;
    gap: 12px;
  }
  .resume-savebar > div:last-child {
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .resume-button {
    padding: 10px 11px;
    font-size: 11px;
  }
  .resume-language button {
    padding: 10px 12px;
    font-size: 11px;
  }
  .resume-save-state {
    font-size: 10px;
  }
  .editor-heading {
    align-items: flex-start;
  }
}
</style>
