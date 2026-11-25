<template>
  <main class="english-study english-learning" aria-labelledby="english-title">
    <EnglishStudyHeader title="背单词">
      <template #icon><Reading /></template>
      <template #return>
        <RouterLink class="study-action" :to="vocabularyRoute">
          <ArrowLeft aria-hidden="true" />返回词汇
        </RouterLink>
      </template>
    </EnglishStudyHeader>

    <p v-if="loading" class="learning-message" role="status">正在加载章节和学习进度…</p>
    <section v-else-if="loadError" class="learning-message">
      <p role="alert">{{ loadError }}</p>
      <button type="button" class="study-action" @click="loadStudy">重新加载</button>
    </section>
    <p v-else-if="!chapter" class="learning-message">暂无可学习的章节。</p>

    <div v-else class="learning-layout">
      <aside class="learning-sidebar" aria-labelledby="learning-chapters">
        <h2 id="learning-chapters">学习章节</h2>
        <nav class="learning-chapters" aria-labelledby="learning-chapters">
          <button
            v-for="item in chapters"
            :key="item.id"
            type="button"
            :aria-current="item.id === chapter.id ? 'true' : undefined"
            :disabled="busy"
            @click="selectChapter(item)"
          >
            <span class="chapter-index">{{ item.number }}</span>
            <span class="chapter-label">{{ item.title }}</span>
            <span class="chapter-count">{{ summaries.get(item.id)?.learned.length ?? 0 }}/{{ item.wordCount }}</span>
          </button>
        </nav>
        <label class="learning-chapter-select">
          选择章节
          <select :value="chapter.id" :disabled="busy" @change="selectChapterById($event.target.value)">
            <option v-for="item in chapters" :key="item.id" :value="item.id">第 {{ item.number }} 章 · {{ item.title }}</option>
          </select>
        </label>
        <button v-if="pastDue.length" type="button" class="study-action past-review" :disabled="busy" @click="reviewPast">
          <Refresh aria-hidden="true" />往期复习 <span>{{ pastDue.length }} 词</span>
        </button>
      </aside>

      <section class="learning-card" aria-labelledby="learning-chapter-title" :aria-busy="busy">
        <header class="learning-card-header">
          <div>
            <p class="chapter-kicker">{{ run?.kind === 'past' ? '往期复习' : '第 ' + chapter.number + ' 章' }}</p>
            <h2 id="learning-chapter-title">{{ run?.kind === 'past' ? chapterNames.get(run.chapterId) : chapter.title }}</h2>
          </div>
          <button v-if="run && !finished" type="button" class="study-action" :disabled="busy" @click="closeRound">
            返回章节
          </button>
        </header>
        <div v-if="run?.kind !== 'past'" class="chapter-progress">
          <dl>
            <div><dt>已学</dt><dd>{{ summary.learned.length }} / {{ chapter.wordCount }}</dd></div>
            <div><dt title="连续两次到期复习都能想起词义">稳定记住</dt><dd>{{ summary.stable.length }}</dd></div>
            <div><dt>待复习</dt><dd>{{ summary.due.length }}</dd></div>
          </dl>
          <progress aria-label="本章已学词数" :max="chapter.wordCount || 1" :value="summary.learned.length" />
        </div>

        <p v-if="actionError" class="learning-error" role="alert">{{ actionError }}</p>
        <p v-if="loadingRound" class="learning-message" role="status">正在准备单词…</p>
        <div v-else-if="!run" class="lesson-overview">
          <p v-if="summary.due.length">本章有 {{ summary.due.length }} 个词等你回想，复习完就能接着学。</p>
          <p v-else-if="remaining">下一组 {{ Math.min(remaining, STUDY_GROUP_SIZE) }} 个新词。</p>
          <p v-else-if="chapter.wordCount">本章新词已学完，可以抽查本章，或继续下一章。</p>
          <p v-else>本章暂无词汇。</p>
          <div class="lesson-actions">
            <button v-if="summary.due.length || remaining" type="button" class="study-action study-action--primary" @click="startChapterRound">
              {{ summary.due.length ? '复习本章' : summary.learned.length ? '学习下一组' : '开始学习' }} <ArrowRight aria-hidden="true" />
            </button>
            <button v-if="chapter.wordCount && !remaining" type="button" class="study-action" @click="prepareRound('recap')">整章抽查</button>
            <RouterLink v-if="weakWords.length" class="study-action" :to="dictationRoute(weakWords)">默写本章薄弱词</RouterLink>
            <button v-if="!remaining && nextChapter" type="button" class="study-action" @click="selectChapter(nextChapter)">
              去下一章 <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>

        <div v-else-if="finished" class="lesson-overview lesson-finished">
          <CircleCheck aria-hidden="true" />
          <h3>本轮完成</h3>
          <p>回想了 {{ run.total }} 个词<span v-if="run.weak.size">，其中 {{ run.weak.size }} 个可以再练习拼写</span>。</p>
          <div class="lesson-actions">
            <button type="button" class="study-action study-action--primary" @click="closeRound">返回章节学习</button>
            <RouterLink class="study-action" :to="dictationRoute(roundWordIds, run.chapterId)">
              默写本轮单词
            </RouterLink>
          </div>
        </div>

        <div v-else-if="currentWord" class="lesson-content">
          <div class="lesson-prompt">
            <p class="lesson-step" aria-live="polite">
              {{ introducing
                ? '认识新词 · ' + (run.index + 1) + ' / ' + run.words.length
                : currentQuestion.retry ? '再回想一次' : '回想词义 · ' + (run.completed + 1) + ' / ' + run.total }}
            </p>
            <h3 v-if="answerVisible || !currentQuestion?.listen" class="lesson-word" lang="en">{{ currentWord.word }}</h3>
            <p v-else class="listening-title">听发音，回想词义</p>
            <div class="lesson-audio">
              <button v-if="currentWord.hasAudio" type="button" class="study-action" :disabled="playback?.loading" @click="toggleWord(currentWord)">
                <Headset aria-hidden="true" />
                {{ playback?.loading ? '加载发音…' : playback ? '停止播放' : '播放发音' }}
              </button>
              <button v-if="!answerVisible && currentQuestion.listen" type="button" class="study-action" @click="currentQuestion.listen = false">
                看英文
              </button>
            </div>
            <p v-if="audioError" class="learning-error" role="alert">{{ audioError.message }}</p>
          </div>

          <EnglishWordDetails v-if="answerVisible" class="lesson-details" :word="currentWord" compact />
          <p v-else class="recall-help">先在心里想一想它的中文意思，再翻开核对。</p>

          <div class="lesson-actions">
            <button v-if="introducing" type="button" class="study-action study-action--primary" :disabled="busy" @click="introduceWord">
              {{ saving ? '保存中…' : run.index + 1 === run.words.length ? '开始回想' : '下一个单词' }}
              <ArrowRight aria-hidden="true" />
            </button>
            <button v-else-if="!revealed" type="button" class="study-action study-action--primary" @click="revealAnswer">翻开答案</button>
            <template v-else>
              <button type="button" class="study-action outcome-forgot" :disabled="busy" @click="rateWord('FORGOT')">没想起来</button>
              <button type="button" class="study-action outcome-unsure" :disabled="busy" @click="rateWord('UNSURE')">有点模糊</button>
              <button type="button" class="study-action study-action--primary" :disabled="busy" @click="rateWord('REMEMBERED')">想起来了</button>
            </template>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ArrowLeft, ArrowRight, CircleCheck, Headset, Reading, Refresh } from '@element-plus/icons-vue'
import { computed, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getAllChapterWords, getChapters, getStudyProgress, saveStudyProgress } from '@/api/admin/english'
import EnglishStudyHeader from '@/components/EnglishStudyHeader.vue'
import EnglishWordDetails from '@/components/EnglishWordDetails.vue'
import { useEnglishAudio } from '@/composables/useEnglishAudio'
import { currentAdmin } from '@/services/adminAuth'
import {
  EMPTY_STUDY_SUMMARY, nextReviewGroup, nextStudyGroup, recallQuestion, requeueForgottenWord,
  shuffleWords, STUDY_GROUP_SIZE, summarizeStudy
} from '@/utils/englishStudy'

const route = useRoute()
const { playback, audioError, reset: resetAudio, toggleWord } = useEnglishAudio()
const chapters = shallowRef([])
const chapter = shallowRef(null)
const progress = shallowRef(new Map())
const now = ref(Date.now())
const loading = ref(true)
const loadingRound = ref(false)
const saving = ref(false)
const busy = computed(() => saving.value || loadingRound.value)
const loadError = ref('')
const actionError = ref('')
const run = ref(null)
const revealed = ref(false)
const wordCache = new Map()
let readRequest
let clock

const summaries = computed(() => summarizeStudy(progress.value, now.value))
const chapterNames = computed(() => new Map(chapters.value.map(item => [item.id, item.title])))
const summary = computed(() => summaries.value.get(chapter.value?.id) ?? EMPTY_STUDY_SUMMARY)
const pastDue = computed(() => [...summaries.value.entries()]
  .filter(([chapterId]) => chapterId !== chapter.value?.id)
  .flatMap(([, item]) => item.due))
const remaining = computed(() => Math.max(0, (chapter.value?.wordCount ?? 0) - summary.value.learned.length))
const nextChapter = computed(() => chapters.value[chapters.value.indexOf(chapter.value) + 1])
const weakWords = computed(() => summary.value.weak.map(item => item.wordId))
const introducing = computed(() => run.value?.phase === 'introduce')
const finished = computed(() => run.value?.phase === 'finished')
const currentQuestion = computed(() => run.value?.questions[run.value.index])
const currentWord = computed(() => introducing.value ? run.value.words[run.value.index] : currentQuestion.value?.word)
const answerVisible = computed(() => introducing.value || revealed.value)
const roundWordIds = computed(() => [...new Set(run.value?.questions.map(item => item.word.id))])
const vocabularyRoute = computed(() => ({
  name: 'admin-english',
  query: chapter.value ? { chapter: String(chapter.value.id) } : {}
}))

function dictationRoute(wordIds, chapterId = chapter.value.id) {
  return { name: 'admin-english-practice', query: { chapter: String(chapterId), words: wordIds.join(',') } }
}

function selectedChapterStorageKey() {
  return 'ielts-study-chapter:' + currentAdmin.value?.id
}

function readSelectedChapter() {
  try {
    return localStorage.getItem(selectedChapterStorageKey())
  } catch {
    return null
  }
}

function selectChapter(item) {
  closeRound()
  chapter.value = item
  try {
    localStorage.setItem(selectedChapterStorageKey(), String(item.id))
  } catch {
    // Account progress can still be used to continue learning.
  }
}

function selectChapterById(id) {
  const item = chapters.value.find(entry => String(entry.id) === id)
  if (item) selectChapter(item)
}

function closeRound() {
  resetAudio()
  run.value = null
  revealed.value = false
  actionError.value = ''
  now.value = Date.now()
}

function newReadRequest() {
  readRequest?.abort()
  readRequest = new AbortController()
  return readRequest.signal
}

async function loadStudy() {
  const signal = newReadRequest()
  loading.value = true
  loadError.value = ''
  try {
    const [items, entries] = await Promise.all([getChapters(signal), getStudyProgress(signal)])
    if (signal.aborted) return
    chapters.value = items
    progress.value = new Map(entries.map(entry => [entry.wordId, entry]))
    const latest = entries.reduce((previous, entry) =>
      !previous || Date.parse(entry.startedAt) > Date.parse(previous.startedAt) ? entry : previous, null)
    const preferred = [route.query.chapter, readSelectedChapter(), String(latest?.chapterId), route.query.fromChapter]
      .map(id => items.find(item => String(item.id) === id)).find(Boolean)
    if (preferred ?? items[0]) selectChapter(preferred ?? items[0])
  } catch {
    if (!signal.aborted) loadError.value = '学习进度加载失败，请稍后重试。'
  } finally {
    if (!signal.aborted) loading.value = false
  }
}

async function chapterWords(chapterId, signal) {
  if (wordCache.has(chapterId)) return wordCache.get(chapterId)
  const words = await getAllChapterWords(chapterId, signal)
  if (!signal.aborted) wordCache.set(chapterId, words)
  return words
}

async function prepareRound(kind, chapterId = chapter.value.id, entries = []) {
  if (busy.value) return
  const signal = newReadRequest()
  closeRound()
  loadingRound.value = true
  try {
    const deck = await chapterWords(chapterId, signal)
    if (signal.aborted) return
    const dueIds = new Set(nextReviewGroup(entries).map(entry => entry.wordId))
    const words = kind === 'learn' ? nextStudyGroup(deck, progress.value)
      : kind === 'recap' ? shuffleWords(deck).slice(0, 20)
        : deck.filter(word => dueIds.has(word.id))
    if (!words.length) {
      actionError.value = '这一轮暂无可学习的词汇。'
      return
    }
    run.value = { kind, chapterId, phase: 'introduce', words, questions: [], index: 0, completed: 0, total: words.length, weak: new Set() }
    if (kind !== 'learn') startRecall()
  } catch {
    if (!signal.aborted) actionError.value = '词汇加载失败，请重试。'
  } finally {
    if (!signal.aborted) loadingRound.value = false
  }
}

function startChapterRound() {
  now.value = Date.now()
  const due = summary.value.due
  return prepareRound(due.length ? 'review' : 'learn', chapter.value.id, due)
}

function reviewPast() {
  const oldest = nextReviewGroup(pastDue.value)[0]
  return prepareRound('past', oldest.chapterId, pastDue.value.filter(entry => entry.chapterId === oldest.chapterId))
}

function startRecall() {
  run.value.phase = 'recall'
  run.value.index = 0
  run.value.questions = shuffleWords(run.value.words).map(word => recallQuestion(word))
}

async function recordProgress(word, rating) {
  saving.value = true
  actionError.value = ''
  try {
    const existing = progress.value.get(word.id)
    const entry = await saveStudyProgress(word.id, rating, existing?.version ?? 0)
    progress.value = new Map(progress.value).set(word.id, entry)
    now.value = Date.now()
    return true
  } catch {
    actionError.value = '学习进度保存失败，请重试当前单词。'
    return false
  } finally {
    saving.value = false
  }
}

async function introduceWord() {
  if (busy.value || !await recordProgress(currentWord.value, 'SEEN')) return
  resetAudio()
  run.value.index++
  if (run.value.index === run.value.words.length) startRecall()
}

function revealAnswer() {
  resetAudio()
  revealed.value = true
}

async function rateWord(rating) {
  if (busy.value || !revealed.value) return
  const question = currentQuestion.value
  if (!question.retry && !await recordProgress(question.word, rating)) return
  if (rating !== 'REMEMBERED') run.value.weak.add(question.word.id)
  if (!question.retry) {
    run.value.completed++
    if (rating === 'FORGOT') requeueForgottenWord(run.value, question)
  }
  resetAudio()
  revealed.value = false
  run.value.index++
  if (run.value.index === run.value.questions.length) run.value.phase = 'finished'
}

onMounted(() => {
  void loadStudy()
  clock = setInterval(() => { now.value = Date.now() }, 30_000)
})
onBeforeUnmount(() => {
  readRequest?.abort()
  clearInterval(clock)
})
</script>

<style scoped>
.learning-layout {
  display: grid;
  grid-template-columns: 212px minmax(0, 1fr);
  align-items: start;
  gap: clamp(14px, 2.5vw, 32px);
}
.learning-sidebar {
  position: sticky;
  top: 16px;
  display: flex;
  flex-direction: column;
  max-height: calc(100dvh - 32px);
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
}
.learning-sidebar h2 { margin: 0; padding: 16px 14px 10px; font-size: 15px; }
.learning-chapters {
  display: grid;
  gap: 3px;
  padding: 0 6px 8px;
  overflow-y: auto;
  scrollbar-color: var(--accent-line) transparent;
  scrollbar-width: thin;
}
.learning-chapters button {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 7px;
  min-height: 37px;
  padding: 5px 6px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--ink);
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.learning-chapters button:hover { background: var(--tint); }
.learning-chapters button[aria-current] { background: var(--selection); }
.learning-chapters button:focus-visible, .learning-chapter-select select:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: -2px;
}
.chapter-index {
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: var(--tint);
  color: var(--accent);
  font-size: 11px;
}
[aria-current] .chapter-index { background: var(--action); color: var(--action-ink); }
.chapter-label { overflow-wrap: anywhere; }
.chapter-count { color: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
.learning-chapter-select { display: none; }
.past-review { margin: 8px; justify-content: space-between; }
.past-review span { margin-left: auto; color: var(--muted); }
.learning-card {
  width: min(100%, 800px);
  margin-inline: auto;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--paper);
}
.learning-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: clamp(16px, 2.8vw, 28px);
  background: var(--banner);
}
.chapter-kicker, .lesson-step { color: var(--accent); font-size: 13px; font-variant-numeric: tabular-nums; }
.learning-card-header h2 { margin: 5px 0 0; font-size: clamp(22px, 3vw, 34px); }
.chapter-progress { padding: 14px clamp(16px, 2.8vw, 28px); border-bottom: 1px solid var(--line); }
.chapter-progress dl {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 8px;
  margin: 0;
}
.chapter-progress dl div { display: flex; align-items: baseline; gap: 5px 9px; flex-wrap: wrap; }
.chapter-progress dt { color: var(--muted); font-size: 12px; }
.chapter-progress dd { margin: 0; font-weight: 650; font-variant-numeric: tabular-nums; }
.chapter-progress progress {
  display: block;
  appearance: none;
  width: 100%;
  height: 5px;
  margin: 12px 0 0;
  overflow: hidden;
  border: 0;
  border-radius: 4px;
  background: var(--tint);
  color: var(--accent);
}
.chapter-progress progress::-webkit-progress-bar { background: var(--tint); }
.chapter-progress progress::-webkit-progress-value { background: var(--accent); border-radius: inherit; }
.chapter-progress progress::-moz-progress-bar { background: var(--accent); border-radius: inherit; }
.lesson-overview, .learning-message {
  padding: clamp(24px, 5vw, 48px) 16px;
  text-align: center;
}
.lesson-overview p, .learning-message p, .recall-help { color: var(--muted); line-height: 1.6; }
.learning-message .study-action { margin-top: 14px; }
.lesson-content { padding: 0 clamp(14px, 4vw, 40px) 24px; }
.lesson-prompt { padding: 22px 0 12px; text-align: center; }
.lesson-word {
  margin: 8px 0 12px;
  font-size: clamp(27px, 4.5vw, 46px);
  line-height: 1.12;
  overflow-wrap: anywhere;
}
.listening-title { margin: 10px 0; font-size: clamp(20px, 3vw, 28px); font-weight: 650; }
.lesson-audio, .lesson-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.lesson-actions { margin-top: 18px; }
.lesson-actions .study-action { min-height: 39px; padding-inline: 12px; }
.lesson-details { max-width: 590px; margin: 10px auto 0; }
.lesson-details :deep(.detail-meaning), .lesson-details :deep(.detail-example p) { display: block; }
.recall-help { margin-top: 14px; font-size: 13px; text-align: center; }
.english-learning .study-action.outcome-forgot { color: var(--error); }
.english-learning .study-action.outcome-unsure { color: var(--frequent); }
.lesson-finished > svg { width: 27px; height: 27px; color: var(--spelling-correct); }
.lesson-finished h3 { margin: 6px 0; font-size: 22px; }
.learning-error { margin: 10px 12px 0; color: var(--error); text-align: center; }
.learning-layout button:disabled { opacity: .62; cursor: default; }
@media (max-width: 730px) {
  .learning-layout { grid-template-columns: 1fr; }
  .learning-sidebar {
    position: static;
    flex-direction: row;
    align-items: end;
    flex-wrap: wrap;
    gap: 8px;
    padding: 10px;
  }
  .learning-sidebar h2, .learning-chapters { display: none; }
  .learning-chapter-select { display: grid; gap: 4px; min-width: 0; flex: 1 1 180px; color: var(--muted); font-size: 12px; }
  .learning-chapter-select select {
    width: 100%;
    min-height: 36px;
    padding: 6px 8px;
    border: 1px solid var(--line);
    border-radius: 7px;
    background: var(--paper);
    color: var(--ink);
    font: inherit;
  }
  .past-review { margin: 0; }
}
</style>
