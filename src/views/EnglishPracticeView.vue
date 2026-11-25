<template>
  <main class="english-study english-practice" aria-labelledby="english-title">
    <EnglishStudyHeader title="单词默写">
      <template #icon><EditPen /></template>
      <template #return>
        <RouterLink class="study-action" :to="vocabularyRoute">
          <ArrowLeft aria-hidden="true" />
          返回词汇
        </RouterLink>
      </template>
    </EnglishStudyHeader>

    <div class="practice-workspace">
      <p v-if="chaptersLoading" class="practice-message" role="status">正在加载章节…</p>
      <div v-else-if="chapterError" class="practice-message">
        <p role="alert">{{ chapterError }}</p>
        <button type="button" class="practice-button" @click="loadChapters">重新加载</button>
      </div>
      <p v-else-if="!chapters.length" class="practice-message">暂无可练习的章节</p>

      <div v-else class="practice-card">
        <section class="practice-settings" aria-label="练习设置">
          <label class="practice-setting">
            <span>练习章节</span>
            <select :value="selectedId" @change="selectChapter(Number($event.target.value))">
              <option v-for="chapter in chapters" :key="chapter.id" :value="chapter.id">
                第 {{ chapter.number }} 章 · {{ chapter.title }}
              </option>
            </select>
          </label>
          <div class="practice-setting">
            <span id="practice-mode">出题方式</span>
            <div class="mode-controls" role="group" aria-labelledby="practice-mode">
              <button type="button" :aria-pressed="mode === 'meaning'" @click="setMode('meaning')">
                <Reading aria-hidden="true" />看中文
              </button>
              <button type="button" :aria-pressed="mode === 'audio'" @click="setMode('audio')">
                <Headset aria-hidden="true" />听发音
              </button>
              <button type="button" :aria-pressed="mode === 'random'" @click="setMode('random')">
                <Switch aria-hidden="true" />随机
              </button>
            </div>
          </div>
        </section>

        <div v-if="targetWordIds && !deckLoading && !deckError" class="practice-selection">
          <span>指定词汇 · {{ practiceWords.length }} 词</span>
          <button type="button" class="practice-button" @click="selectChapter(selectedId)">练习整章</button>
        </div>

        <div v-if="questions.length && !deckLoading && !deckError" class="practice-progress">
          <dl>
            <div><dt>进度</dt><dd>{{ outcomes.length }} / {{ questions.length }}</dd></div>
            <div><dt>正确</dt><dd class="score-correct">{{ scores.correct }}</dd></div>
            <div><dt>错误</dt><dd class="score-incorrect">{{ scores.incorrect }}</dd></div>
            <div><dt>跳过</dt><dd>{{ scores.skipped }}</dd></div>
          </dl>
          <progress aria-label="练习进度" :value="outcomes.length" :max="questions.length" />
        </div>

        <p v-if="deckLoading" class="practice-message" role="status">正在加载本章练习…</p>
        <div v-else-if="deckError" class="practice-message">
          <p role="alert">{{ deckError }}</p>
          <button type="button" class="practice-button" @click="loadDeck(selectedId)">重试</button>
        </div>
        <p v-else-if="!questions.length" class="practice-message">
          {{ mode === 'audio' && practiceWords.length ? '这组词汇暂无可用发音，可以选择看中文练习。' : '暂无可练习的词汇。' }}
        </p>

        <section v-else class="practice-session" aria-label="单词拼写练习">
          <form v-if="currentWord" class="question-panel" @submit.prevent="submitAnswer">
            <div class="question-prompt">
              <p class="question-number">
                第 {{ questionIndex + 1 }} 题<span v-if="mode === 'random'"> · {{ promptMode === 'audio' ? '听发音' : '看中文' }}</span>
              </p>
              <template v-if="promptMode === 'meaning'">
                <p class="question-meaning">{{ currentWord.meaningZh }}</p>
                <p v-if="currentWord.partOfSpeech" class="question-pos">{{ currentWord.partOfSpeech }}</p>
              </template>
              <button v-else type="button" class="audio-prompt" :disabled="playback?.loading" @click="playPrompt">
                <Headset aria-hidden="true" />
                {{ playback?.loading ? '正在加载发音…' : '播放发音' }}
              </button>
              <p v-if="audioError && promptMode === 'audio'" class="prompt-error" role="alert">{{ audioError.message }}</p>
            </div>

            <div class="answer-area">
              <label for="spelling-answer">英文拼写</label>
              <EnglishSpellingInput
                id="spelling-answer"
                ref="answerInput"
                v-model="answer"
                :word="currentWord.word"
                :readonly="Boolean(outcome)"
                :outcome="outcome"
                described-by="spelling-help"
              />
              <p id="spelling-help" class="spelling-help">在输入框按回车提交，再按回车继续。词内空格和连字符需与原拼写一致。</p>
            </div>

            <div v-if="outcome" class="answer-feedback">
              <div class="practice-feedback" :data-outcome="outcome">
                <p class="feedback-result" role="status">
                  <component :is="outcomeIcons[outcome]" aria-hidden="true" />
                  <b>{{ outcomeLabels[outcome] }}</b>
                  <strong lang="en">{{ currentWord.word }}</strong>
                </p>
                <button
                  v-if="promptMode === 'meaning' && currentWord.hasAudio"
                  type="button"
                  class="practice-button"
                  :disabled="playback?.loading"
                  @click="playPrompt"
                >
                  <Headset aria-hidden="true" />
                  {{ playback?.loading ? '正在加载发音…' : '听发音' }}
                </button>
              </div>
              <p v-if="audioError && promptMode === 'meaning'" class="prompt-error" role="alert">{{ audioError.message }}</p>
            </div>

            <div class="question-actions">
              <button type="button" class="practice-button" @click="restartRound">重新开始</button>
              <button v-if="!outcome" type="button" class="practice-button" @click="skipQuestion">跳过</button>
              <button v-if="outcome" type="button" class="practice-button" @click="reviewOpen = true">词汇回顾</button>
              <button type="submit" class="practice-button primary" :disabled="!outcome && !answer.trim()">
                {{ !outcome ? '提交答案' : questionIndex + 1 === questions.length ? '查看结果' : '下一题' }}
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
            <EnglishWordDetails
              v-if="outcome"
              class="inline-review"
              :word="currentWord"
              :show-meaning="promptMode === 'audio'"
              compact
            />
          </form>

          <div v-else class="practice-finished" role="status">
            <CircleCheck aria-hidden="true" />
            <h2>本轮练习完成</h2>
            <p>共 {{ questions.length }} 题，答对 {{ scores.correct }} 题。</p>
            <button type="button" class="practice-button primary" @click="restartRound">再练一次</button>
          </div>
        </section>
      </div>
    </div>

    <el-dialog
      v-model="reviewOpen"
      :title="currentWord?.word"
      width="min(680px, calc(100vw - 32px))"
      align-center
      destroy-on-close
    >
      <EnglishWordDetails v-if="currentWord" :word="currentWord" />
    </el-dialog>
  </main>
</template>

<script setup>
import { ArrowLeft, ArrowRight, CircleCheck, CircleClose, EditPen, Headset, Reading, Switch } from '@element-plus/icons-vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { getAllChapterWords, getChapters } from '@/api/admin/english'
import EnglishSpellingInput from '@/components/EnglishSpellingInput.vue'
import EnglishStudyHeader from '@/components/EnglishStudyHeader.vue'
import EnglishWordDetails from '@/components/EnglishWordDetails.vue'
import { useEnglishAudio } from '@/composables/useEnglishAudio'
import { shuffleWords } from '@/utils/englishStudy'

const outcomeLabels = { correct: '拼写正确', incorrect: '拼写错误，正确单词', skipped: '已跳过，正确单词' }
const outcomeIcons = { correct: CircleCheck, incorrect: CircleClose, skipped: ArrowRight }
const route = useRoute()
const router = useRouter()
const { playback, audioError, playWord, reset: resetAudio } = useEnglishAudio()
const chapters = ref([])
const selectedId = ref(null)
const mode = ref('meaning')
const deck = shallowRef([])
const targetWordIds = shallowRef(typeof route.query.words === 'string'
  ? new Set(route.query.words.split(',').map(Number).filter(id => Number.isSafeInteger(id) && id > 0))
  : null)
const practiceWords = computed(() => targetWordIds.value
  ? deck.value.filter(word => targetWordIds.value.has(word.id))
  : deck.value)
const questions = shallowRef([])
const deckCache = new Map()
const chaptersLoading = ref(true)
const deckLoading = ref(false)
const chapterError = ref('')
const deckError = ref('')
const questionIndex = ref(0)
const answer = ref('')
const answerInput = ref(null)
const outcomes = ref([])
const reviewOpen = ref(false)
const currentQuestion = computed(() => questions.value[questionIndex.value])
const currentWord = computed(() => currentQuestion.value?.word)
const promptMode = computed(() => currentQuestion.value?.mode)
const outcome = computed(() => outcomes.value[questionIndex.value])
const scores = computed(() => {
  const counts = { correct: 0, incorrect: 0, skipped: 0 }
  for (const result of outcomes.value) counts[result]++
  return counts
})
const vocabularyRoute = computed(() => ({
  name: 'admin-english',
  query: selectedId.value === null ? {} : { chapter: String(selectedId.value) }
}))
let chapterRequest
let deckRequest

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
    const requested = data.find(item => String(item.id) === route.query.chapter)
    if (!requested) targetWordIds.value = null
    const chapter = requested ?? data[0]
    if (chapter) void loadDeck(chapter.id)
  } catch {
    if (!controller.signal.aborted) chapterError.value = '章节加载失败，请稍后重试'
  } finally {
    if (!controller.signal.aborted) chaptersLoading.value = false
  }
}

async function loadDeck(chapterId) {
  deckRequest?.abort()
  selectedId.value = chapterId
  deckError.value = ''
  const cached = deckCache.get(chapterId)
  deck.value = cached ?? []
  restartRound()
  if (cached) {
    deckLoading.value = false
    return
  }

  const controller = new AbortController()
  deckRequest = controller
  deckLoading.value = true
  try {
    const words = await getAllChapterWords(chapterId, controller.signal)
    if (controller.signal.aborted) return
    deckCache.set(chapterId, words)
    deck.value = words
    restartRound()
  } catch {
    if (!controller.signal.aborted) deckError.value = '练习加载失败，请稍后重试'
  } finally {
    if (!controller.signal.aborted) deckLoading.value = false
  }
}

function selectChapter(chapterId) {
  targetWordIds.value = null
  void router.replace({ name: 'admin-english-practice', query: { chapter: String(chapterId) } })
  void loadDeck(chapterId)
}

function restartRound() {
  resetAudio()
  reviewOpen.value = false
  const selectedMode = mode.value
  const words = selectedMode === 'audio' ? practiceWords.value.filter(word => word.hasAudio) : practiceWords.value
  const shuffled = shuffleWords(words)
  questions.value = shuffled.map(word => {
    let questionMode = selectedMode
    if (selectedMode === 'random') {
      questionMode = word.hasAudio && Math.random() < 0.5 ? 'audio' : 'meaning'
    }
    return { word, mode: questionMode }
  })
  questionIndex.value = 0
  outcomes.value = []
  answer.value = ''
}

function setMode(value) {
  if (mode.value === value) return
  mode.value = value
  restartRound()
}

function playPrompt() {
  if (currentWord.value?.hasAudio) playWord(currentWord.value)
}

function spelling(value) {
  return value.normalize('NFC').trim().toLowerCase()
}

function focusAnswer() {
  void nextTick(() => answerInput.value?.focus({ preventScroll: true }))
}

function submitAnswer() {
  const word = currentWord.value
  if (!word) return
  if (outcome.value) {
    resetAudio()
    reviewOpen.value = false
    questionIndex.value++
    answer.value = ''
    if (promptMode.value === 'audio') playPrompt()
  } else {
    const written = spelling(answer.value)
    if (!written) return
    outcomes.value.push(written === spelling(word.word) ? 'correct' : 'incorrect')
  }
  focusAnswer()
}

function skipQuestion() {
  if (!currentWord.value || outcome.value) return
  resetAudio()
  outcomes.value.push('skipped')
  focusAnswer()
}

onMounted(loadChapters)
onBeforeUnmount(() => {
  chapterRequest?.abort()
  deckRequest?.abort()
})
</script>

<style scoped>
.english-practice { padding-block: clamp(12px, 2.4vh, 28px) 18px; }
.english-practice :deep(.study-header) { margin-bottom: 16px; padding-block: 8px 14px; }
.practice-workspace { inline-size: min(100%, 920px); margin-inline: auto; }
.practice-selection {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 16px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 13px;
}
.practice-settings {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px 18px;
  padding: 14px 16px;
}
.practice-setting { display: grid; gap: 5px; min-width: 0; color: var(--muted); font-size: 13px; }
.practice-setting select {
  width: 100%;
  min-width: 0;
  border: 1px solid var(--line);
  border-radius: 9px;
  background: var(--paper);
  color: var(--ink);
  font: inherit;
}
.practice-setting select { min-height: 40px; padding: 7px 10px; font-size: 14px; }
.mode-controls { display: flex; width: fit-content; max-width: 100%; flex-wrap: wrap; gap: 4px; padding: 3px; border-radius: 10px; background: var(--tint); }
.mode-controls button, .practice-button, .audio-prompt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  min-height: 36px;
  padding: 7px 12px;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--accent);
  background: transparent;
  font: inherit;
  cursor: pointer;
}
.mode-controls button svg, .practice-button svg { width: 16px; height: 16px; flex: none; }
.mode-controls button[aria-pressed='true'] { background: var(--action); color: var(--action-ink); font-weight: 650; }
.mode-controls button:hover[aria-pressed='false'] { background: var(--selection); }
.english-practice button:focus-visible, .practice-setting select:focus-visible {
  outline: 2px solid var(--focus);
  outline-offset: 2px;
}
.practice-card, .practice-workspace > .practice-message {
  border: 1px solid var(--line);
  border-radius: 16px;
  background: var(--paper);
}
.practice-session, .practice-card > .practice-message { border-top: 1px solid var(--line); }
.practice-message { padding: 42px 20px; text-align: center; color: var(--muted); }
.practice-message .practice-button { margin-top: 10px; }
.practice-progress { display: grid; gap: 8px; padding: 11px 16px 14px; border-top: 1px solid var(--line); }
.practice-progress dl { display: grid; grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr)); gap: 8px; }
.practice-progress dl div { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 7px; }
.practice-progress dt { color: var(--muted); font-size: 12px; }
.practice-progress dd { font-size: 16px; font-weight: 650; font-variant-numeric: tabular-nums; }
.score-correct { color: var(--spelling-correct); }
.score-incorrect { color: var(--spelling-incorrect); }
.practice-progress progress {
  display: block;
  width: 100%;
  height: 6px;
  appearance: none;
  border: 0;
  border-radius: 999px;
  overflow: hidden;
  background: var(--tint);
  color: var(--accent);
}
.practice-progress progress::-webkit-progress-bar { background: var(--tint); }
.practice-progress progress::-webkit-progress-value { background: var(--accent); }
.practice-progress progress::-moz-progress-bar { background: var(--accent); }
.question-panel { display: grid; gap: 14px; padding: 20px clamp(16px, 2.8vw, 32px); }
.question-prompt {
  display: grid;
  justify-items: center;
  align-content: center;
  gap: 8px;
  min-height: clamp(108px, 19vh, 148px);
  padding: 14px;
  border-radius: 12px;
  background: var(--banner);
  text-align: center;
  overflow-wrap: anywhere;
}
.question-number, .question-pos { color: var(--muted); font-size: 13px; }
.question-meaning { font-size: clamp(24px, 4vw, 40px); font-weight: 700; line-height: 1.3; }
.audio-prompt { min-height: 48px; padding-inline: 14px; border-color: var(--accent-line); background: var(--selection); font-weight: 650; }
.audio-prompt svg { width: 19px; height: 19px; }
.prompt-error { color: var(--error); font-size: 13px; }
.answer-area { display: grid; gap: 8px; width: min(100%, 520px); margin-inline: auto; }
.answer-area label { color: var(--accent); font-size: 13px; font-weight: 650; text-align: center; }
.spelling-help { color: var(--muted); font-size: 12px; line-height: 1.5; text-align: center; }
.inline-review { inline-size: min(100%, 680px); margin-inline: auto; }
.answer-feedback { display: grid; gap: 7px; text-align: center; }
.practice-feedback {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 8px 12px;
  color: var(--accent);
  font-size: 14px;
  overflow-wrap: anywhere;
}
.practice-feedback[data-outcome='correct'] { color: var(--spelling-correct); }
.practice-feedback[data-outcome='incorrect'] { color: var(--spelling-incorrect); }
.feedback-result { display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 6px 8px; }
.feedback-result svg { width: 20px; height: 20px; flex: none; }
.feedback-result strong { font-size: clamp(18px, 3vw, 23px); }
.question-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
.practice-button { border-color: var(--line); background: var(--paper); font-size: 13px; font-weight: 650; }
.practice-button:hover:not(:disabled) { background: var(--tint); }
.practice-button.primary { border-color: transparent; background: var(--action); color: var(--action-ink); }
.practice-button.primary:hover:not(:disabled) { background: var(--action-hover); }
.practice-button:disabled, .audio-prompt:disabled { opacity: .58; cursor: default; }
.practice-finished { display: grid; justify-items: center; gap: 12px; padding: 44px 16px; text-align: center; }
.practice-finished svg { width: 36px; height: 36px; color: var(--core); }
.practice-finished p { color: var(--muted); font-size: 14px; }

@media (max-width: 590px) {
  .practice-settings { grid-template-columns: minmax(0, 1fr); gap: 8px; padding: 10px 14px; }
  .mode-controls button { padding-inline: 8px; }
  .practice-progress { padding-inline: 14px; }
  .practice-progress dl div { align-items: flex-start; flex-direction: column; }
  .practice-progress dd { font-size: 14px; }
  .question-panel { padding-block: 16px; gap: 12px; }
}

@media (max-height: 700px) {
  .english-practice { padding-block: 10px 12px; }
  .english-practice :deep(.study-header) { margin-bottom: 10px; padding-block: 4px 10px; }
  .practice-settings { padding-block: 10px; }
  .practice-progress { padding-block: 9px; }
  .question-panel { gap: 10px; padding-block: 14px; }
  .question-prompt { min-height: 88px; gap: 4px; padding-block: 10px; }
  .question-meaning { font-size: clamp(22px, 3vw, 33px); }
  .answer-area { gap: 4px; }
}
@media (max-width: 590px), (max-height: 620px) {
  .question-panel > .inline-review { display: none; }
}
</style>
