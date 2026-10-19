<template>
  <el-dialog
    v-model="visible"
    :title="`${editing ? '编辑' : '新增'}${education ? '教育经历' : '工作经历'}`"
    width="min(660px, calc(100vw - 32px))"
    append-to-body
    align-center
    destroy-on-close
    :close-on-click-modal="false"
    :close-on-press-escape="!confirming"
    :show-close="!confirming"
    class="resume-experience-dialog"
  >
    <p class="dialog-intro">
      {{ language === 'en' ? 'English 内容' : '中文内容' }} ·
      确认后加入编辑列表，保存整份简历后更新首页。
    </p>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
      label-position="top"
      :disabled="confirming"
      @submit.prevent="confirm"
    >
      <template v-if="education">
        <el-form-item label="学校" prop="school"
          ><el-input v-model="form.school" maxlength="150" placeholder="请输入学校名称"
        /></el-form-item>
        <div class="dialog-columns">
          <el-form-item label="专业" prop="major"
            ><el-input
              v-model="form.major"
              maxlength="150"
              placeholder="请输入专业" /></el-form-item
          ><el-form-item label="学历 / 学位" prop="degree"
            ><el-input v-model="form.degree" maxlength="80" placeholder="例如：本科、硕士"
          /></el-form-item>
        </div>
      </template>
      <template v-else>
        <el-form-item label="公司 / 组织" prop="company"
          ><el-input v-model="form.company" maxlength="150" placeholder="请输入公司或组织名称"
        /></el-form-item>
        <el-form-item label="岗位" prop="role"
          ><el-input v-model="form.role" maxlength="120" placeholder="请输入岗位名称"
        /></el-form-item>
      </template>
      <div class="dialog-columns">
        <el-form-item label="开始时间" prop="start">
          <div class="date-controls">
            <el-select
              v-model="startPrecision"
              popper-class="resume-date-precision-popper"
              aria-label="开始时间精度"
              @change="changePrecision('start', $event)"
              ><el-option label="按月" value="month" /><el-option
                label="按年"
                value="year" /></el-select
            ><el-date-picker
              :key="`start-${startPrecision}`"
              v-model="form.start"
              :type="startPrecision"
              :format="dateFormat(startPrecision)"
              :value-format="valueFormat(startPrecision)"
              :placeholder="startPrecision === 'year' ? '选择年份' : '选择月份'"
              :disabled-date="disableStart"
              :editable="false"
              popper-class="resume-date-picker"
              clearable
              aria-label="开始时间"
              @change="validateDates"
            />
          </div>
        </el-form-item>
        <el-form-item label="结束时间" prop="end">
          <div class="date-controls">
            <el-select
              v-model="endPrecision"
              popper-class="resume-date-precision-popper"
              aria-label="结束时间精度"
              @change="changePrecision('end', $event)"
              ><el-option label="按月" value="month" /><el-option
                label="按年"
                value="year" /></el-select
            ><el-date-picker
              :key="`end-${endPrecision}`"
              v-model="form.end"
              :type="endPrecision"
              :format="dateFormat(endPrecision)"
              :value-format="valueFormat(endPrecision)"
              :placeholder="endPrecision === 'year' ? '选择年份' : '选择月份'"
              :disabled-date="disableEnd"
              :editable="false"
              popper-class="resume-date-picker"
              clearable
              aria-label="结束时间"
              @change="validateDates"
            />
          </div>
        </el-form-item>
      </div>
      <p class="date-hint">
        {{
          education
            ? '可只选择年份；尚未毕业时，结束时间可留空。'
            : '仍在该岗位工作时，结束时间留空表示“至今”。'
        }}
      </p>
      <el-form-item label="经历说明" prop="description"
        ><el-input
          v-model="form.description"
          type="textarea"
          :rows="4"
          :maxlength="education ? 1200 : 2000"
          show-word-limit
          :placeholder="
            education ? '介绍学习方向、在校经历等，可换行。' : '介绍工作职责、主要成果等，可换行。'
          "
      /></el-form-item>
    </el-form>
    <template #footer
      ><div class="dialog-actions">
        <el-button :disabled="confirming" @click="visible = false">取消</el-button
        ><el-button type="primary" :loading="confirming" @click="confirm">{{
          editing ? '确认修改' : '确认添加'
        }}</el-button>
      </div></template
    >
  </el-dialog>
</template>

<script setup>
import { computed, nextTick, reactive, ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  kind: { type: String, default: 'education' },
  entry: { type: Object, default: null },
  editing: Boolean,
  language: { type: String, default: 'zh' }
})
const emit = defineEmits(['update:modelValue', 'confirm', 'dirty-change'])
const visible = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const education = computed(() => props.kind === 'education')
const formRef = ref(null)
const confirming = ref(false)
const form = reactive({})
const baseline = ref('')
const startPrecision = ref('month')
const endPrecision = ref('month')

const required = (message, max) => [
  { required: true, whitespace: true, message, trigger: 'blur' },
  { max, message: `最多${max}字`, trigger: 'blur' }
]
const rules = computed(() => ({
  school: required('请填写学校名称', 150),
  company: required('请填写公司或组织名称', 150),
  role: required('请填写岗位名称', 120),
  start: [{ validator: validatePeriod, trigger: 'change' }],
  end: [{ validator: validatePeriod, trigger: 'change' }]
}))
const lower = (value) => (value.length === 4 ? `${value}-01` : value)
const upper = (value) => (value.length === 4 ? `${value}-12` : value)
const valueFormat = (precision) => (precision === 'year' ? 'YYYY' : 'YYYY-MM')
const dateFormat = (precision) => (precision === 'year' ? 'YYYY 年' : 'YYYY 年 MM 月')

watch(
  () => props.modelValue,
  async (open) => {
    if (!open) {
      emit('dirty-change', false)
      return
    }
    const fields = education.value
      ? ['school', 'major', 'degree', 'start', 'end', 'description']
      : ['company', 'role', 'start', 'end', 'description']
    Object.keys(form).forEach((key) => delete form[key])
    fields.forEach((key) => {
      form[key] = props.entry?.[key] || ''
    })
    startPrecision.value = form.start.length === 4 ? 'year' : 'month'
    endPrecision.value = form.end.length === 4 ? 'year' : 'month'
    baseline.value = JSON.stringify(form)
    await nextTick()
    formRef.value?.clearValidate()
  },
  { immediate: true }
)
watch(
  form,
  () => {
    if (props.modelValue) emit('dirty-change', JSON.stringify(form) !== baseline.value)
  },
  { deep: true }
)

function validatePeriod(_rule, _value, callback) {
  const dates = [form.start, form.end].filter(Boolean)
  if (dates.some((value) => !/^[12]\d{3}(?:-(?:0[1-9]|1[0-2]))?$/.test(value)))
    return callback(new Error('请选择有效的年份或月份'))
  if (form.start && form.end && lower(form.start) > upper(form.end))
    return callback(new Error('结束时间不能早于开始时间'))
  callback()
}
function pickerValue(date, precision) {
  const year = String(date.getFullYear())
  return precision === 'year' ? year : `${year}-${String(date.getMonth() + 1).padStart(2, '0')}`
}
function outsideYears(date) {
  return date.getFullYear() < 1000 || date.getFullYear() > 2999
}
function disableStart(date) {
  return (
    outsideYears(date) ||
    !!(form.end && lower(pickerValue(date, startPrecision.value)) > upper(form.end))
  )
}
function disableEnd(date) {
  return (
    outsideYears(date) ||
    !!(form.start && upper(pickerValue(date, endPrecision.value)) < lower(form.start))
  )
}
function changePrecision(field, precision) {
  // Keep a known year when reducing precision; never invent a month for year-only data.
  form[field] = form[field] && precision === 'year' ? form[field].slice(0, 4) : ''
  validateDates()
}
async function validateDates() {
  await nextTick()
  formRef.value?.validateField(['start', 'end']).catch(() => {})
}
async function confirm() {
  if (confirming.value || !formRef.value) return
  confirming.value = true
  try {
    await formRef.value.validate()
    emit(
      'confirm',
      Object.fromEntries(
        Object.entries(form).map(([key, value]) => [
          key,
          typeof value === 'string' ? value.trim() : ''
        ])
      )
    )
  } catch {
    // Element Plus displays validation messages beside the corresponding fields.
  } finally {
    confirming.value = false
  }
}
</script>

<style scoped>
:global(.resume-experience-dialog),
:global(.resume-date-picker),
:global(.resume-date-precision-popper) {
  --el-color-primary: #385e30;
  --el-color-primary-light-3: #6b8d62;
  --el-color-primary-light-5: #9ab18f;
  --el-color-primary-light-7: #c4d3bc;
  --el-color-primary-light-8: #dce5d6;
  --el-color-primary-light-9: #eef3e9;
  --el-color-primary-dark-2: #294924;
}
:global(.resume-experience-dialog) {
  --el-dialog-bg-color: #fbfcf8;
  --el-text-color-primary: #213a2b;
  --el-border-color: #d8e1cf;
  max-height: calc(100svh - 48px);
  display: flex;
  flex-direction: column;
}
:global(.resume-experience-dialog .el-dialog__header),
:global(.resume-experience-dialog .el-dialog__footer) {
  flex-shrink: 0;
}
:global(.resume-experience-dialog .el-dialog__body) {
  min-height: 0;
  overflow-y: auto;
}
.dialog-intro {
  margin: 0 0 22px;
  color: #7d8c73;
  font-size: 12px;
  line-height: 1.8;
}
.dialog-columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}
.date-controls {
  display: flex;
  gap: 8px;
  width: 100%;
  min-width: 0;
}
.date-controls > .el-select {
  width: 76px;
  flex-shrink: 0;
}
.date-controls :deep(.el-date-editor.el-input) {
  width: auto;
  min-width: 0;
  flex: 1;
}
.date-hint {
  color: #8a977e;
  font-size: 11px;
  line-height: 1.7;
  margin: -6px 0 22px;
}
.dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
@media (max-width: 600px) {
  .dialog-columns {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
