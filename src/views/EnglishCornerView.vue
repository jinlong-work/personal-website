<template>
  <main class="english-study english-corner" aria-labelledby="english-title">
    <EnglishStudyHeader title="雅思词汇">
      <template #icon><Reading /></template>
      <template #meta>
        <p v-if="chapters.length">{{ chapters.length }} 章 <span aria-hidden="true">·</span> {{ wordCount.toLocaleString('zh-CN') }} 个词汇</p>
      </template>
      <template #primary>
        <RouterLink class="study-action study-action--primary" :to="practiceRoute">
          <EditPen aria-hidden="true" />
          背单词
        </RouterLink>
      </template>
      <template #return>
        <RouterLink class="study-action" :to="{ name: 'admin-dashboard' }">
          <ArrowLeft aria-hidden="true" />
          返回后台
        </RouterLink>
      </template>
    </EnglishStudyHeader>

    <p v-if="chaptersLoading" class="list-message" role="status">正在加载章节…</p>
    <div v-else-if="chapterError" class="list-message" role="alert">
      <p>{{ chapterError }}</p>
      <button type="button" class="secondary-action" @click="loadChapters">重新加载</button>
    </div>
    <p v-else-if="!chapters.length" class="list-message">暂无词汇章节</p>

    <div v-else class="corner-layout">
      <nav class="chapter-nav" aria-label="雅思词汇章节">
        <h2>章节目录</h2>
        <ol class="chapter-list">
          <li v-for="chapter in chapters" :key="chapter.id">
            <button
              type="button"
              class="chapter-link"
              :aria-current="chapter.id === selectedId ? 'true' : undefined"
              @click="selectChapter(chapter.id)"
            >
              <span class="chapter-number">{{ chapter.number }}</span>
              <span class="chapter-label">{{ chapter.title }}</span>
              <span class="chapter-count">{{ chapter.wordCount }}</span>
            </button>
          </li>
        </ol>
        <label class="chapter-select">
          <span>选择章节</span>
          <select :value="selectedId" @change="selectChapter(Number($event.target.value))">
            <option v-for="chapter in chapters" :key="chapter.id" :value="chapter.id">
              第 {{ chapter.number }} 章 · {{ chapter.title }}
            </option>
          </select>
        </label>
      </nav>

      <section v-if="selectedChapter" ref="chapterContent" class="chapter-content" aria-labelledby="chapter-title">
        <header class="chapter-header">
          <div>
            <p class="chapter-meta">第 {{ selectedChapter.number }} 章 <span aria-hidden="true">·</span> {{ selectedChapter.wordCount }} 词</p>
            <h2 id="chapter-title">{{ selectedChapter.title }}</h2>
          </div>
          <button
            type="button"
            class="loop-action"
            :disabled="selectedChapter.wordCount === 0"
            :aria-pressed="playback?.mode === 'loop'"
            @click="toggleLoop(selectedId)"
          >
            <component :is="playback?.mode === 'loop' ? VideoPause : Headset" aria-hidden="true" />
            {{ playback?.mode === 'loop' ? '停止循环' : '循环播放本章' }}
          </button>
        </header>

        <div v-if="pagePlayback" class="playback-bar" role="status">
          <Headset aria-hidden="true" />
          <span v-if="!pagePlayback.track">正在加载播放列表…</span>
          <template v-else>
            <span>{{ pagePlayback.loading ? '正在加载发音' : '正在播放' }}</span>
            <strong lang="en">{{ pagePlayback.track.word }}</strong>
            <span v-if="pagePlayback.mode === 'loop'" class="track-position">{{ pagePlayback.position }} / {{ pagePlayback.total }}</span>
          </template>
        </div>
        <p v-if="audioError && audioError.mode !== 'detail'" class="playback-error" role="alert">{{ audioError.message }}</p>

        <div class="word-results">
          <div
            v-if="wordPage?.rows.length"
            class="word-grid"
            :class="{ 'is-loading-chapter': !chapterLoaded }"
            :inert="!chapterLoaded"
          >
            <article
              v-for="word in wordPage.rows"
              :key="word.id"
              :id="'ielts-word-' + word.id"
              class="word-card"
              :class="{ 'is-playing': pagePlayback?.track?.id === word.id }"
              tabindex="-1"
            >
              <header class="word-heading">
                <h3 lang="en">{{ word.word }}</h3>
                <button
                  type="button"
                  class="sound-action"
                  :disabled="!word.hasAudio"
                  :aria-label="soundLabel(word)"
                  :title="soundLabel(word)"
                  @click="toggleWord(word)"
                >
                  <component :is="isSingleTrack(word) ? VideoPause : Headset" aria-hidden="true" />
                </button>
              </header>
              <p v-if="word.phonetic" class="word-phonetic" lang="en">{{ word.phonetic }}</p>
              <p class="word-meaning">{{ word.meaningZh }}</p>
              <footer class="word-footer">
                <div class="word-tags">
                  <span class="pos-tag">{{ word.partOfSpeech }}</span>
                  <span class="frequency-tag" :data-frequency="word.frequency">{{ word.frequency }}</span>
                </div>
                <button
                  type="button"
                  class="detail-action"
                  :aria-label="'查看 ' + word.word + ' 的详情'"
                  aria-haspopup="dialog"
                  @click="openDetails(word)"
                >详情<ArrowRight aria-hidden="true" /></button>
              </footer>
            </article>
          </div>

          <div
            v-if="wordError || !chapterLoaded || !wordPage.rows.length"
            class="list-message"
            :class="{ 'over-grid': !chapterLoaded && wordPage?.rows.length }"
          >
            <template v-if="wordError">
              <p role="alert">{{ wordError }}</p>
              <button type="button" class="secondary-action" @click="loadWords">重试</button>
            </template>
            <p v-else-if="wordsLoading" role="status">正在加载词汇…</p>
            <p v-else>这一章暂无词汇</p>
          </div>
          <p
            v-else-if="wordPage.rows.length < wordPage.total"
            :key="wordPage.chapterId + ':' + wordPage.number"
            ref="loadMoreTrigger"
            class="load-more"
            role="status"
          >
            {{ wordsLoading ? '正在加载更多词汇…' : '已显示 ' + wordPage.rows.length + ' / ' + wordPage.total }}
          </p>
        </div>
      </section>
    </div>

    <EnglishWordIndex
      v-if="selectedChapter"
      :key="selectedChapter.id"
      :title="selectedChapter.title"
      :words="wordIndex"
      :loading="indexLoading"
      :error="indexError"
      @request="loadWordIndex"
      @select="locateWord"
    />

    <el-dialog
      v-model="detailsOpen"
      :title="detailWord?.word"
      width="min(720px, calc(100vw - 32px))"
      align-center
      destroy-on-close
      @close="closeDetails"
    >
      <template #header="{ titleId }">
        <div v-if="detailWord" class="dialog-word-heading">
          <h2 :id="titleId" lang="en">{{ detailWord.word }}</h2>
          <button
            v-if="detailWord.hasAudio"
            type="button"
            class="sound-action"
            :class="{ 'is-playing': isSingleTrack(detailWord, 'detail') }"
            :aria-label="soundLabel(detailWord, 'detail')"
            :title="soundLabel(detailWord, 'detail')"
            @click="toggleWord(detailWord, 'detail')"
          ><component :is="isSingleTrack(detailWord, 'detail') ? VideoPause : Headset" aria-hidden="true" /></button>
        </div>
      </template>
      <EnglishWordDetails v-if="detailWord" :word="detailWord">
        <p v-if="audioError?.mode === 'detail'" class="detail-audio-error" role="alert">{{ audioError.message }}</p>
      </EnglishWordDetails>
    </el-dialog>
  </main>
</template>

<script setup>
import { ArrowLeft, ArrowRight, EditPen, Headset, Reading, VideoPause } from '@element-plus/icons-vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getAllChapterWords, getChapters, getChapterWords } from '@/api/admin/english'
import EnglishStudyHeader from '@/components/EnglishStudyHeader.vue'
import EnglishWordDetails from '@/components/EnglishWordDetails.vue'
import EnglishWordIndex from '@/components/EnglishWordIndex.vue'
import { useEnglishAudio } from '@/composables/useEnglishAudio'

const PAGE_SIZE = 48
const route = useRoute()
const chapters = ref([])
const selectedId = ref(null)
const chaptersLoading = ref(true)
const chapterError = ref('')
const chapterContent = ref(null)
const loadMoreTrigger = ref(null)
const wordPage = shallowRef(null)
const chapterPages = new Map()
const chapterIndexes = new Map()
const wordIndex = shallowRef([])
const indexLoading = ref(false)
const indexError = ref('')
const wordsLoading = ref(false)
const wordError = ref('')
const detailsOpen = ref(false)
const detailWord = ref(null)
const { playback, audioError, reset, toggleWord, toggleLoop } = useEnglishAudio()
const pagePlayback = computed(() => playback.value?.mode === 'detail' ? null : playback.value)
const selectedChapter = computed(() => chapters.value.find(chapter => chapter.id === selectedId.value))
const chapterLoaded = computed(() => wordPage.value?.chapterId === selectedId.value)
const wordCount = computed(() => chapters.value.reduce((sum, chapter) => sum + chapter.wordCount, 0))
const practiceRoute = computed(() => ({
  name: 'admin-english-practice',
  query: selectedId.value === null ? {} : { chapter: String(selectedId.value) }
}))
let chapterRequest
let wordRequest
let indexRequest

async function loadChapters() {
  chapterRequest?.abort()
  const controller = new AbortController()
  chapterRequest = controller
  chaptersLoading.value = true
  chapterError.value = ''
  try {
    const data = await getChapters(controller.signal)
    if (controller.signal.aborted) return
    chapters.value = data
    const chapter = data.find(item => String(item.id) === route.query.chapter) ?? data[0]
    if (chapter) selectChapter(chapter.id)
  } catch {
    if (!controller.signal.aborted) chapterError.value = '章节加载失败，请稍后重试'
  } finally {
    if (!controller.signal.aborted) chaptersLoading.value = false
  }
}

function selectChapter(id) {
  if (id === selectedId.value) return
  const section = chapterContent.value
  if (section?.scrollTop) {
    section.scrollTo({ top: 0, behavior: 'instant' })
  } else if (section && section.getBoundingClientRect().top < 0) {
    section.scrollIntoView({ block: 'start', behavior: 'instant' })
  }
  wordRequest?.abort()
  indexRequest?.abort()
  reset()
  detailsOpen.value = false
  wordError.value = ''
  wordsLoading.value = false
  selectedId.value = id
  wordIndex.value = chapterIndexes.get(id) ?? []
  indexLoading.value = false
  indexError.value = ''
  const cached = chapterPages.get(id)
  if (cached) {
    wordPage.value = cached
    return
  }
  void loadWords()
}

async function loadWords() {
  if (wordsLoading.value || selectedId.value === null) return
  wordError.value = ''
  const chapterId = selectedId.value
  const previous = chapterLoaded.value ? wordPage.value : null
  const number = (previous?.number ?? 0) + 1
  const indexedWords = chapterIndexes.get(chapterId)
  if (indexedWords) {
    storeWordPage(chapterId, number, indexedWords.slice(0, number * PAGE_SIZE), indexedWords.length)
    return
  }

  const controller = new AbortController()
  wordRequest = controller
  wordsLoading.value = true
  try {
    const data = await getChapterWords(chapterId, number, PAGE_SIZE, controller.signal)
    if (controller.signal.aborted) return
    const rows = previous ? previous.rows.concat(data.rows) : data.rows
    storeWordPage(chapterId, number, rows, data.total)
  } catch {
    if (!controller.signal.aborted) wordError.value = '词汇加载失败，请稍后重试'
  } finally {
    if (!controller.signal.aborted) wordsLoading.value = false
  }
}

function storeWordPage(chapterId, number, rows, total) {
  const loaded = { chapterId, number, rows, total }
  chapterPages.set(chapterId, loaded)
  wordPage.value = loaded
}

async function loadWordIndex() {
  const chapterId = selectedId.value
  if (chapterId === null || indexLoading.value || chapterIndexes.has(chapterId)) return
  indexError.value = ''

  const page = wordPage.value
  if (chapterLoaded.value && page.rows.length === page.total) {
    chapterIndexes.set(chapterId, page.rows)
    wordIndex.value = page.rows
    return
  }

  const controller = new AbortController()
  indexRequest = controller
  indexLoading.value = true
  try {
    const words = await getAllChapterWords(chapterId, controller.signal)
    if (controller.signal.aborted) return
    chapterIndexes.set(chapterId, words)
    wordIndex.value = words
  } catch {
    if (!controller.signal.aborted) indexError.value = '词汇索引加载失败，请稍后重试'
  } finally {
    if (!controller.signal.aborted) indexLoading.value = false
  }
}

async function locateWord(wordId) {
  const chapterId = selectedId.value
  const words = wordIndex.value
  const index = words.findIndex(word => word.id === wordId)
  if (index < 0) return
  if (!chapterLoaded.value || !wordPage.value.rows.some(word => word.id === wordId)) {
    wordRequest?.abort()
    wordsLoading.value = false
    wordError.value = ''
    const number = Math.ceil((index + 1) / PAGE_SIZE)
    storeWordPage(chapterId, number, words.slice(0, number * PAGE_SIZE), words.length)
  }

  await nextTick()
  if (selectedId.value !== chapterId) return
  const card = document.getElementById('ielts-word-' + wordId)
  card?.focus({ preventScroll: true })
  card?.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' })
}

function isSingleTrack(word, mode = 'word') {
  return playback.value?.mode === mode && playback.value.track?.id === word.id
}

function soundLabel(word, mode = 'word') {
  if (!word.hasAudio) return '暂无发音'
  return (isSingleTrack(word, mode) ? '停止朗读 ' : '朗读 ') + word.word
}

function openDetails(word) {
  detailWord.value = word
  detailsOpen.value = true
}

function closeDetails() {
  if (playback.value?.mode === 'detail' || audioError.value?.mode === 'detail') reset()
}

onMounted(loadChapters)
watch(loadMoreTrigger, (trigger, _, onCleanup) => {
  if (!trigger) return
  const observer = new IntersectionObserver(([entry]) => {
    const page = wordPage.value
    if (
      entry?.isIntersecting && loadMoreTrigger.value === trigger &&
      chapterLoaded.value && !wordError.value && page.rows.length < page.total
    ) {
      void loadWords()
    }
  })
  observer.observe(trigger)
  onCleanup(() => observer.disconnect())
}, { flush: 'post' })

onBeforeUnmount(() => {
  chapterRequest?.abort()
  wordRequest?.abort()
  indexRequest?.abort()
})
</script>

<style scoped>
.english-corner { --card-min-height: 176px; --card-content-height: 144px; }
.chapter-meta { color: var(--muted); font-size: 12px; font-variant-numeric: tabular-nums; }
.chapter-meta span { margin: 0 4px; }
.corner-layout { display: grid; grid-template-columns: 196px minmax(0, 1fr); align-items: start; gap: 24px; }
.chapter-content { scroll-margin-block-start: 16px; }
.chapter-nav {
  overflow: hidden;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 13px;
}
.chapter-nav h2 { font-size: 13px; padding: 16px 15px 13px; border-bottom: 1px solid var(--line); }
.chapter-list { list-style: none; overflow: auto; padding: 6px; }
.chapter-link {
  display: grid;
  grid-template-columns: 26px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  width: 100%;
  min-height: 40px;
  color: var(--ink);
  background: transparent;
  border: 0;
  padding: 6px 8px;
  border-radius: 8px;
  text-align: left;
  font-size: 13px;
}
.chapter-link:hover { background: var(--tint); }
.chapter-link[aria-current] { color: var(--accent-strong); background: var(--selection); font-weight: 650; }
.chapter-number {
  display: grid;
  place-items: center;
  min-height: 25px;
  border-radius: 6px;
  color: var(--muted);
  background: var(--tint);
  font-size: 11px;
  font-variant-numeric: tabular-nums;
}
.chapter-link[aria-current] .chapter-number { color: var(--action-ink); background: var(--action); }
.chapter-count { color: var(--muted); font-size: 11px; font-variant-numeric: tabular-nums; }
.chapter-select { display: none; }
.chapter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 21px 24px;
  margin-bottom: 17px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--banner);
  background-image:
    radial-gradient(circle at 54% 29%, #b8d3ffcf 1px, transparent 2.2px),
    radial-gradient(circle at 70% 73%, #a4bdfbaf 0.8px, transparent 1.8px),
    radial-gradient(circle at 78% 22%, #e2eaffb0 1px, transparent 2.4px),
    radial-gradient(circle at 90% 43%, #a5c7ff66 1px, transparent 2px),
    radial-gradient(ellipse at 74% 3%, #4a548674, transparent 60%),
    linear-gradient(110deg, transparent 25%, #192d5080);
}
.chapter-header h2 { margin: 5px 0 0; font-size: clamp(23px, 2.4vw, 34px); line-height: 1.22; letter-spacing: -.04em; }
button { font-family: inherit; cursor: pointer; }
button:disabled { cursor: default; opacity: .55; }
button:focus-visible, select:focus-visible { outline: 2px solid var(--focus); outline-offset: 2px; }
.loop-action, .secondary-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 40px;
  padding: 8px 13px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 650;
}
.loop-action { flex-shrink: 0; color: var(--action-ink); background: var(--action); }
.loop-action:hover:not(:disabled) { background: var(--action-hover); }
.loop-action[aria-pressed="true"] { color: var(--accent); background: var(--paper); border-color: var(--accent-line); }
.loop-action svg, .playback-bar svg { width: 16px; height: 16px; flex-shrink: 0; }
.playback-bar, .playback-error {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 13px;
  margin: 0 0 16px;
  border: 1px solid var(--line);
  border-radius: 9px;
  color: var(--accent);
  background: var(--paper);
  font-size: 13px;
}
.playback-error { color: var(--error); border-color: var(--error-line); background: var(--error-surface); }
.track-position { margin-left: auto; color: var(--muted); font-variant-numeric: tabular-nums; }
.word-results { position: relative; min-block-size: var(--card-min-height); }
.word-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(100%, 203px), 1fr)); gap: 14px; }
.word-grid.is-loading-chapter { visibility: hidden; }
.list-message.over-grid { position: absolute; inset: 0 0 auto; }
.word-card {
  position: relative;
  min-width: 0;
  min-height: var(--card-min-height);
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--paper);
  box-shadow: 0 2px 8px var(--card-shadow);
  content-visibility: auto;
  contain-intrinsic-block-size: auto var(--card-content-height);
}
.word-card:hover { border-color: var(--accent-line); }
.word-card.is-playing { border-color: var(--focus); background: var(--playing); }
.word-card:focus { outline: 2px solid var(--focus); outline-offset: -2px; }
.word-heading { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
.word-heading h3 { color: var(--ink); font-size: clamp(17px, 1.5vw, 22px); font-weight: 680; line-height: 1.16; overflow-wrap: anywhere; }
.word-heading > .sound-action { position: relative; z-index: 1; }
.sound-action {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border: 0;
  border-radius: 8px;
  background: var(--tint);
  color: var(--accent);
}
.sound-action svg { width: 16px; height: 16px; }
.sound-action:hover:not(:disabled), .is-playing .sound-action, .sound-action.is-playing { background: var(--selection); }
.word-phonetic { color: var(--muted); margin-top: 3px; font-size: 13px; line-height: 1.4; overflow-wrap: anywhere; }
.word-meaning { margin: 10px 0 13px; font-size: 14px; line-height: 1.55; overflow-wrap: anywhere; }
.word-footer { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 6px; margin-top: auto; }
.word-tags { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
.detail-action {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 4px;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--accent);
  font-size: 11px;
}
.detail-action:hover { color: var(--accent-strong); background: var(--tint); }
.detail-action svg { width: 12px; height: 12px; }
.detail-action::after { content: ''; position: absolute; inset: 0; border-radius: 12px; }
.detail-action:focus-visible { outline: none; }
.detail-action:focus-visible::after { outline: 2px solid var(--focus); outline-offset: -2px; }
.list-message { padding: 34px 14px; text-align: center; color: var(--muted); font-size: 14px; }
.list-message .secondary-action { margin-top: 10px; }
.load-more { margin: 18px 0 5px; padding: 5px; color: var(--muted); font-size: 12px; text-align: center; }
.secondary-action { color: var(--accent); background: var(--paper); border-color: var(--line); }
.secondary-action:hover:not(:disabled) { background: var(--tint); }
.dialog-word-heading { display: flex; flex-wrap: wrap; align-items: center; gap: 10px 14px; }
.dialog-word-heading h2 { color: var(--ink); font-size: clamp(25px, 4vw, 38px); line-height: 1.15; overflow-wrap: anywhere; }
.detail-audio-error { padding: 8px 12px; border-radius: 8px; color: var(--error); background: var(--error-surface); }

@media (max-width: 1150px) {
  .corner-layout { grid-template-columns: 167px minmax(0, 1fr); gap: 16px; }
  .chapter-link { gap: 5px; }
  .word-grid { grid-template-columns: repeat(auto-fill, minmax(min(100%, 175px), 1fr)); }
}
@media (min-width: 881px) {
  .english-corner {
    display: flex;
    flex-direction: column;
    block-size: 100dvh;
    padding-block-end: 16px;
  }
  .corner-layout { flex: 1; min-block-size: 0; align-items: stretch; }
  .chapter-nav { display: flex; flex-direction: column; }
  .chapter-nav h2 { flex: none; }
  .chapter-list { flex: 1; min-block-size: 0; }
  .chapter-list, .chapter-content {
    overscroll-behavior-y: contain;
    scrollbar-width: thin;
    scrollbar-color: var(--accent-line) transparent;
  }
  .chapter-content { min-block-size: 0; overflow-y: auto; scrollbar-gutter: stable; }
}
@media (max-width: 880px) {
  .corner-layout { grid-template-columns: minmax(0, 1fr); gap: 12px; }
  .chapter-nav { overflow: visible; }
  .chapter-nav h2, .chapter-list { display: none; }
  .chapter-select { display: flex; align-items: center; gap: 10px; padding: 8px 10px; font-size: 12px; }
  .chapter-select span { flex-shrink: 0; }
  .chapter-select select {
    width: 100%;
    min-width: 0;
    border: 1px solid var(--line);
    padding: 8px;
    border-radius: 6px;
    background: var(--paper);
    color: var(--ink);
    font: inherit;
  }
}
@media (max-width: 460px) {
  .english-corner { --card-min-height: 145px; --card-content-height: 123px; }
  .chapter-header { flex-wrap: wrap; padding: 15px; margin-bottom: 12px; gap: 10px; }
  .word-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .word-card { padding: 10px; }
  .word-heading { gap: 4px; }
  .word-heading h3 { font-size: 16px; }
  .word-meaning { font-size: 13px; }
  .sound-action { width: 28px; height: 28px; }
  .sound-action svg { width: 14px; height: 14px; }
}
</style>
