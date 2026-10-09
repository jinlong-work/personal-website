<template>
  <button
    v-show="!isOpen"
    ref="launcher"
    class="ai-launch"
    type="button"
    aria-controls="ai-panel"
    :aria-expanded="isOpen"
    @click="open()"
  >
    <AiMark /><span>{{ copy.a0 }}</span
    ><span>↗</span>
  </button>
  <section
    id="ai-panel"
    ref="panel"
    class="ai-panel"
    :class="{ open: isOpen }"
    :aria-label="copy.a1"
    :aria-hidden="!isOpen"
    :inert="!isOpen"
    @keydown.esc.stop="close"
  >
    <header>
      <AiMark />
      <div class="ai-title">
        <strong>{{ copy.a1 }}</strong
        ><small>{{ copy.a2 }}</small>
      </div>
      <button class="icon-button ai-close" :aria-label="copy.a3" type="button" @click="close">
        ×
      </button>
    </header>
    <div ref="body" class="ai-body">
      <div v-if="!messages.length" class="ai-welcome">
        <AiMark />
        <h3>{{ copy.a4 }}<br />{{ copy.a5 }}</h3>
        <p>{{ copy.a6 }}<br />{{ copy.a7 }}</p>
        <div class="suggestions">
          <button
            v-for="question in questions.slice(0, 4)"
            :key="question"
            type="button"
            @click="send(question)"
          >
            {{ question }}<span>↗</span>
          </button>
        </div>
      </div>
      <div
        class="ai-messages"
        role="log"
        :aria-label="copy.a8"
        aria-live="polite"
        :aria-busy="pending"
      >
        <div v-for="message in messages" :key="message.id" class="message" :class="message.role">
          <div v-if="message.role === 'assistant'" class="message-label">
            {{ copy.a9 }}
          </div>
          <div>{{ message.text }}</div>
          <template v-for="projectId in message.projectIds || []" :key="projectId">
            <button
              v-if="projectById(projectId)"
              class="chat-card"
              type="button"
              @click="emit('project', projectId)"
            >
              <img
                v-if="projectById(projectId).images?.length"
                :src="projectById(projectId).images[0]"
                :alt="projectById(projectId).name"
              />
              <span class="chat-card-content"
                ><strong>{{ projectById(projectId).name }}</strong
                ><small>{{ copy.a10 }}</small
                ><b>{{ copy.a11 }} <span>↗</span></b></span
              >
            </button>
          </template>
          <div v-if="message.showResume || message.showContact" class="chat-actions">
            <button
              v-if="message.showResume"
              type="button"
              class="ai-follow"
              @click="emit('resume')"
            >
              {{ copy.a12 }}
            </button>
            <button v-if="message.showContact" type="button" class="ai-follow" @click="showContact">
              {{ copy.a13 }}
            </button>
          </div>
          <button
            v-if="message.role === 'assistant'"
            type="button"
            class="ai-follow"
            :disabled="pending"
            @click="send(questions[4])"
          >
            {{ copy.a14 }}
          </button>
        </div>
        <div v-if="pending" class="typing" :aria-label="copy.a15">
          <i style="--i: 0"></i><i style="--i: 1"></i><i style="--i: 2"></i>
        </div>
      </div>
    </div>
    <div class="ai-compose">
      <form @submit.prevent="send(draft)">
        <input
          ref="input"
          v-model="draft"
          :aria-label="copy.a16"
          :placeholder="copy.a17"
          maxlength="300"
          autocomplete="off"
        /><button :disabled="pending || !draft.trim()" :aria-label="copy.a18" type="submit">
          ↑
        </button>
      </form>
      <small>{{ copy.a19 }}</small>
    </div>
  </section>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import AiMark from './AiMark.vue'
import { assistantCopy } from '@/content/assistantCopy'
import { getPortfolioReply } from '@/services/portfolioAssistant'

const props = defineProps({
  locale: { type: String, default: 'zh' },
  projects: { type: Array, default: () => [] },
  motionEnabled: { type: Boolean, default: true }
})
const emit = defineEmits(['project', 'resume', 'contact'])
const copy = computed(() => assistantCopy[props.locale])
const questions = computed(() => copy.value.questions)
const isOpen = ref(false)
const messages = ref([])
const pending = ref(false)
const draft = ref('')
const launcher = ref(null)
const input = ref(null)
const panel = ref(null)
const body = ref(null)
let trigger
let controller
let sequence = 0
const projectById = (id) => props.projects.find((p) => p.id === id)
const scrollBottom = async () => {
  await nextTick()
  body.value?.scrollTo({
    top: body.value.scrollHeight,
    behavior: props.motionEnabled ? 'smooth' : 'auto'
  })
}
async function open(question) {
  trigger = document.activeElement
  isOpen.value = true
  await nextTick()
  input.value?.focus({ preventScroll: true })
  if (typeof question === 'string') send(question)
}
function close() {
  isOpen.value = false
  nextTick(() => (trigger?.isConnected ? trigger : launcher.value)?.focus({ preventScroll: true }))
}
function showContact() {
  close()
  emit('contact')
}
async function send(value) {
  const question = value.trim()
  if (!question || pending.value) return
  messages.value.push({ id: ++sequence, role: 'user', text: question })
  draft.value = ''
  pending.value = true
  const request = new AbortController()
  controller = request
  scrollBottom()
  try {
    const reply = await getPortfolioReply({
      question,
      locale: props.locale,
      projects: props.projects,
      history: messages.value.map(({ role, text }) => ({ role, content: text })),
      signal: request.signal
    })
    if (request.signal.aborted) return
    messages.value.push({ ...reply, id: ++sequence, role: 'assistant' })
  } catch (error) {
    if (error.name !== 'AbortError')
      messages.value.push({
        id: ++sequence,
        role: 'assistant',
        text: copy.value.a20,
        showResume: true
      })
  } finally {
    if (controller === request) {
      pending.value = false
      scrollBottom()
    }
  }
}
watch(
  () => props.locale,
  () => {
    controller?.abort()
    messages.value = []
    draft.value = ''
    pending.value = false
  }
)
onBeforeUnmount(() => controller?.abort())
defineExpose({ open })
</script>
