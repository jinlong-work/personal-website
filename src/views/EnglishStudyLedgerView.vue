<template>
  <main class="english-study english-ledger" aria-labelledby="english-title">
    <EnglishStudyHeader title="学习台账">
      <template #icon><DataAnalysis /></template>
      <template #meta>
        <p v-if="rows.length">已开始 {{ totals.started }} / {{ rows.length }} 章</p>
      </template>
      <template #return>
        <RouterLink class="study-action" :to="{ name: 'admin-english', query: { chapter: route.query.chapter } }">
          <ArrowLeft aria-hidden="true" />返回词汇
        </RouterLink>
      </template>
    </EnglishStudyHeader>

    <p v-if="loading" class="ledger-message" role="status">正在加载学习台账…</p>
    <section v-else-if="loadError" class="ledger-message">
      <p role="alert">{{ loadError }}</p>
      <button type="button" class="study-action" @click="loadLedger">重新加载</button>
    </section>
    <p v-else-if="!rows.length" class="ledger-message">暂无学习章节。</p>

    <div v-else class="ledger-content">
      <div class="ledger-totals" role="group" aria-label="学习总览">
        <button
          v-for="status in studyStatuses"
          :key="status.key"
          type="button"
          class="ledger-summary-card"
          aria-haspopup="dialog"
          @click="openWordList(status)"
        >
          <span class="ledger-summary-label">
            {{ status.label }} <ArrowRight aria-hidden="true" />
          </span>
          <strong class="ledger-summary-value" :class="status.color">
            {{ format.format(totals[status.key]) }}
            <span v-if="status.key === 'learned'">/ {{ format.format(totals.words) }} 词</span>
          </strong>
        </button>
      </div>

      <section class="ledger-panel" aria-labelledby="chapter-stats">
        <header class="ledger-panel-header">
          <h2 id="chapter-stats">章节进度</h2>
          <label class="ledger-filter"><input v-model="onlyDue" type="checkbox" />只看待复习</label>
        </header>
        <p v-if="!visibleRows.length" class="ledger-message" role="status">当前没有待复习的章节。</p>
        <table v-else class="ledger-table" role="table" aria-labelledby="chapter-stats">
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">章节</th>
              <th scope="col" role="columnheader">已学进度</th>
              <th scope="col" role="columnheader">稳定记住</th>
              <th scope="col" role="columnheader">待复习</th>
              <th scope="col" role="columnheader">薄弱词</th>
              <th scope="col" role="columnheader">学习</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            <tr v-for="{ chapter, summary, actionLabel } in visibleRows" :key="chapter.id" role="row">
              <th class="ledger-chapter" scope="row" role="rowheader">
                <span class="ledger-chapter-number">{{ chapter.number }}</span>
                <span>{{ chapter.title }}</span>
              </th>
              <td class="ledger-progress" role="cell">
                <div class="ledger-progress-value">
                  <span class="mobile-label" aria-hidden="true">已学</span>
                  <span>{{ format.format(summary.learned.length) }} / {{ format.format(chapter.wordCount) }}</span>
                </div>
                <progress
                  :aria-label="chapter.title + '已学进度'"
                  :max="chapter.wordCount || 1"
                  :value="summary.learned.length"
                />
              </td>
              <td class="ledger-count stable-count" role="cell">
                <span class="mobile-label" aria-hidden="true">稳定记住</span>{{ format.format(summary.stable.length) }}
              </td>
              <td class="ledger-count" :class="{ 'due-count': summary.due.length }" role="cell">
                <span class="mobile-label" aria-hidden="true">待复习</span>{{ format.format(summary.due.length) }}
              </td>
              <td class="ledger-count" :class="{ 'weak-count': summary.weak.length }" role="cell">
                <span class="mobile-label" aria-hidden="true">薄弱词</span>{{ format.format(summary.weak.length) }}
              </td>
              <td class="ledger-action" role="cell">
                <RouterLink
                  v-if="chapter.wordCount"
                  class="study-action"
                  :aria-label="actionLabel + '，' + chapter.title"
                  :to="studyRoute(chapter.id)"
                >
                  {{ actionLabel }}
                  <ArrowRight aria-hidden="true" />
                </RouterLink>
                <span v-else>暂无词汇</span>
              </td>
            </tr>
          </tbody>
        </table>
        <p v-if="visibleRows.length" class="ledger-note">
          稳定记住按连续两次到期复习都想起词义统计。薄弱词取最近一次「有点模糊」或「没想起来」的记录。
        </p>
      </section>
    </div>

    <EnglishStudyWordList
      v-model="wordListOpen"
      :title="activeStatus.label + ' · ' + format.format(totals[activeStatus.key]) + ' 词'"
      :groups="wordGroups"
    />
  </main>
</template>

<script setup>
import { ArrowLeft, ArrowRight, DataAnalysis } from '@element-plus/icons-vue'
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getChapters, getStudyProgress } from '@/api/admin/english'
import EnglishStudyHeader from '@/components/EnglishStudyHeader.vue'
import EnglishStudyWordList from '@/components/EnglishStudyWordList.vue'
import { EMPTY_STUDY_SUMMARY, summarizeStudy } from '@/utils/englishStudy'

const route = useRoute()
const format = new Intl.NumberFormat('zh-CN')
const studyStatuses = [
  { key: 'learned', label: '已学' },
  { key: 'stable', label: '稳定记住', color: 'stable-count' },
  { key: 'due', label: '待复习', color: 'due-count' },
  { key: 'weak', label: '薄弱词', color: 'weak-count' }
]
const activeStatus = shallowRef(studyStatuses[0])
const wordListOpen = ref(false)
const chapters = shallowRef([])
const progress = shallowRef([])
const now = ref(Date.now())
const onlyDue = ref(false)
const loading = ref(true)
const loadError = ref('')
let request
let clock

const rows = computed(() => {
  const summaries = summarizeStudy(progress.value, now.value)
  return chapters.value.map(chapter => {
    const summary = summaries.get(chapter.id) ?? EMPTY_STUDY_SUMMARY
    return { chapter, summary, actionLabel: chapterAction(chapter, summary) }
  })
})
const visibleRows = computed(() => onlyDue.value ? rows.value.filter(row => row.summary.due.length) : rows.value)
const wordGroups = computed(() => rows.value
  .map(({ chapter, summary }) => ({ chapter, entries: summary[activeStatus.value.key] }))
  .filter(group => group.entries.length))
const totals = computed(() => rows.value.reduce((total, { chapter, summary }) => {
  total.words += chapter.wordCount
  total.learned += summary.learned.length
  total.stable += summary.stable.length
  total.due += summary.due.length
  total.weak += summary.weak.length
  if (summary.learned.length) total.started++
  return total
}, { words: 0, learned: 0, stable: 0, due: 0, weak: 0, started: 0 }))

function chapterAction(chapter, summary) {
  if (summary.due.length) return '去复习'
  if (!summary.learned.length) return '开始学习'
  return summary.learned.length >= chapter.wordCount ? '回顾' : '继续学习'
}

function openWordList(status) {
  now.value = Date.now()
  activeStatus.value = status
  wordListOpen.value = true
}

function studyRoute(chapterId) {
  return {
    name: 'admin-english-study',
    query: chapterId ? { chapter: String(chapterId) } : {}
  }
}

async function loadLedger() {
  request?.abort()
  const controller = new AbortController()
  request = controller
  loading.value = true
  loadError.value = ''
  try {
    const [items, entries] = await Promise.all([getChapters(controller.signal), getStudyProgress(controller.signal)])
    if (controller.signal.aborted) return
    chapters.value = items
    progress.value = entries
    now.value = Date.now()
  } catch {
    if (!controller.signal.aborted) loadError.value = '学习台账加载失败，请稍后重试。'
  } finally {
    if (!controller.signal.aborted) loading.value = false
  }
}

onMounted(() => {
  void loadLedger()
  clock = setInterval(() => { now.value = Date.now() }, 30_000)
})
onBeforeUnmount(() => {
  request?.abort()
  clearInterval(clock)
})
</script>

<style scoped>
.ledger-content { max-width: 1080px; margin-inline: auto; }
.ledger-totals {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: clamp(8px, 1.4vw, 16px);
  margin: 0 0 18px;
}
.ledger-summary-card {
  padding: clamp(12px, 2.15vw, 23px);
  border: 1px solid var(--line);
  border-radius: 13px;
  background: var(--paper);
  color: var(--ink);
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.ledger-summary-card:hover { border-color: var(--accent-line); background: var(--tint); }
.ledger-summary-card:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.ledger-summary-label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
}
.ledger-summary-label svg { width: 14px; height: 14px; flex: none; color: var(--accent); }
.ledger-summary-label, .ledger-note, .ledger-message { color: var(--muted); font-size: 13px; }
.ledger-summary-value {
  display: block;
  margin-top: 6px;
  font-size: clamp(20px, 3vw, 30px);
  font-weight: 670;
  font-variant-numeric: tabular-nums;
}
.ledger-summary-value span { color: var(--muted); font-size: 12px; font-weight: 400; white-space: nowrap; }
.stable-count { color: var(--spelling-correct); }
.due-count { color: var(--frequent); }
.weak-count { color: var(--error); }
.ledger-panel { border: 1px solid var(--line); border-radius: 14px; background: var(--paper); overflow: hidden; }
.ledger-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px clamp(12px, 2vw, 22px);
}
.ledger-panel-header h2 { margin: 0; font-size: 17px; }
.ledger-filter { display: inline-flex; align-items: center; gap: 6px; color: var(--accent); font-size: 13px; cursor: pointer; }
.ledger-filter input { width: 15px; height: 15px; accent-color: var(--action); }
.ledger-table { width: 100%; border-collapse: collapse; font-size: 13px; font-variant-numeric: tabular-nums; }
.ledger-table thead { background: var(--panel); color: var(--muted); }
.ledger-table th, .ledger-table td { padding: 10px clamp(5px, 1.5vw, 18px); border-top: 1px solid var(--line); text-align: left; }
.ledger-table tr > :first-child { padding-inline-start: clamp(12px, 2vw, 22px); }
.ledger-table tr > :last-child { padding-inline-end: clamp(12px, 2vw, 22px); }
.ledger-table thead th { padding-block: 11px; font-weight: 500; white-space: nowrap; }
.ledger-chapter { font-size: 14px; font-weight: 600; }
.ledger-chapter-number {
  display: inline-grid;
  place-items: center;
  width: 26px;
  height: 26px;
  margin-right: 8px;
  border-radius: 6px;
  background: var(--tint);
  color: var(--accent);
  font-size: 12px;
  font-weight: 500;
}
.ledger-progress { width: 30%; min-width: 95px; }
.ledger-progress-value { display: flex; align-items: center; gap: 8px; margin-bottom: 5px; color: var(--muted); }
.ledger-progress progress {
  display: block;
  appearance: none;
  width: 100%;
  height: 5px;
  border: 0;
  border-radius: 3px;
  overflow: hidden;
  background: var(--tint);
}
.ledger-progress progress::-webkit-progress-bar { background: var(--tint); }
.ledger-progress progress::-webkit-progress-value { border-radius: inherit; background: var(--action); }
.ledger-progress progress::-moz-progress-bar { border-radius: inherit; background: var(--action); }
.ledger-count { font-weight: 550; }
.ledger-action { width: 1%; white-space: nowrap; color: var(--muted); }
.ledger-action .study-action { min-height: 32px; }
.mobile-label { display: none; }
.ledger-note { margin: 0; padding: 13px clamp(12px, 2vw, 22px); border-top: 1px solid var(--line); line-height: 1.5; }
.ledger-message { padding: 30px 16px; text-align: center; }
.ledger-message .study-action { margin-top: 12px; }

@media (max-width: 590px) {
  .ledger-totals { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .ledger-table, .ledger-table tbody { display: block; }
  .ledger-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .ledger-table tbody tr {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: center;
    gap: 10px 6px;
    padding: 12px;
    border-top: 1px solid var(--line);
  }
  .ledger-table tbody tr > :is(th, td) { padding: 0; border: 0; }
  .ledger-chapter { grid-column: 1 / 3; overflow-wrap: anywhere; }
  .ledger-progress { grid-column: 1 / -1; width: auto; min-width: 0; }
  .ledger-count { display: flex; align-items: baseline; gap: 4px; font-size: 12px; }
  .ledger-action { grid-area: 1 / 3; justify-self: end; width: auto; }
  .mobile-label { display: inline; color: var(--muted); font-size: 11px; font-weight: 400; }
}
</style>
