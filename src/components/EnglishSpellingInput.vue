<template>
  <div class="spelling-field" :class="{ 'is-readonly': readonly }" @click="placeCaret">
    <input
      :id="id"
      ref="nativeInput"
      v-model="answer"
      class="spelling-native"
      type="text"
      lang="en"
      autocomplete="off"
      autocapitalize="off"
      autocorrect="off"
      spellcheck="false"
      :readonly="readonly"
      :maxlength="word.length"
      :aria-describedby="describedBy ? id + '-length ' + describedBy : id + '-length'"
      @focus="onFocus"
      @blur="focused = false"
      @input="syncSelection"
      @select="syncSelection"
      @keyup="syncSelection"
    />
    <span :id="id + '-length'" class="spelling-length">{{ letterCount }} 个字母</span>
    <div class="spelling-slots" :data-outcome="outcome" aria-hidden="true">
      <span v-for="group in groups" :key="group[0].index" class="spelling-group">
        <span
          v-for="slot in group"
          :key="slot.index"
          class="spelling-slot"
          :class="[
            slotResult(slot),
            {
              'is-separator': slot.separator,
              'is-guide': !letters[slot.index] && slot.guide,
              'is-active': !readonly && activeIndex === slot.index,
              'is-selected': !readonly && focused && slot.index >= selection.start && slot.index < selection.end
            }
          ]"
          :data-position="slot.index"
        >
          <span v-if="letters[slot.index]" :key="letters[slot.index]" class="typed-letter">{{ letters[slot.index] }}</span>
          <span v-else-if="slot.guide">{{ slot.guide }}</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  word: { type: String, required: true },
  describedBy: { type: String, default: '' },
  outcome: { type: String, default: '' },
  readonly: Boolean
})
const answer = defineModel({ type: String, required: true })
const nativeInput = ref(null)
const focused = ref(false)
const selection = ref({ start: 0, end: 0 })
const letters = computed(() => Array.from(answer.value))
const scoredLetters = computed(() => Array.from(answer.value.normalize('NFC').toLowerCase()))
const letterCount = computed(() => props.word.match(/\p{L}/gu)?.length ?? 0)
const groups = computed(() => {
  let index = 0
  return (props.word.match(/\s+|\S+/gu) ?? []).map(group => Array.from(group, char => ({
    index: index++,
    expected: char.toLowerCase(),
    separator: /[\s'’‐‑‒–—―-]/u.test(char),
    guide: /['’‐‑‒–—―-]/u.test(char) ? char : ''
  })))
})
const activeIndex = computed(() => {
  const position = focused.value ? selection.value.start : letters.value.length
  return Math.min(position, Array.from(props.word).length - 1)
})

function slotResult(slot) {
  if (props.outcome === 'correct') return 'is-correct'
  if (props.outcome === 'incorrect') {
    return scoredLetters.value[slot.index] === slot.expected ? 'is-correct' : 'is-incorrect'
  }
  return ''
}

function syncSelection() {
  const input = nativeInput.value
  if (!input) return
  selection.value = {
    start: Array.from(input.value.slice(0, input.selectionStart)).length,
    end: Array.from(input.value.slice(0, input.selectionEnd)).length
  }
}

function focus(options) {
  nativeInput.value?.focus(options)
}

function onFocus() {
  focused.value = true
  syncSelection()
}

function placeCaret(event) {
  focus({ preventScroll: true })
  if (props.readonly) return
  const slot = event.target.closest('[data-position]')
  const index = slot ? Number(slot.dataset.position) : letters.value.length
  const offset = letters.value.slice(0, index).join('').length
  nativeInput.value?.setSelectionRange(offset, offset)
  syncSelection()
}

watch(answer, syncSelection, { flush: 'post' })
defineExpose({ focus })
</script>

<style scoped>
.spelling-field {
  position: relative;
  min-block-size: 54px;
  padding: 6px 0 10px;
  cursor: text;
}
.spelling-field.is-readonly { cursor: default; }
.spelling-native {
  position: absolute;
  inset: 0;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
  pointer-events: none;
  font-size: 16px;
}
.spelling-length {
  position: absolute;
  inline-size: 1px;
  block-size: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.spelling-slots, .spelling-group {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 8px;
}
.spelling-slots { user-select: none; }
.spelling-group { max-inline-size: 100%; column-gap: clamp(4px, 1vw, 8px); }
.spelling-slot {
  display: grid;
  place-items: end center;
  inline-size: clamp(17px, 4vw, 32px);
  min-block-size: 38px;
  padding-block-end: 3px;
  border-block-end: 2px solid var(--accent-line);
  color: var(--ink);
  font: 650 clamp(18px, 3.2vw, 24px) / 1.15 ui-monospace, 'Cascadia Mono', Consolas, monospace;
}
.spelling-slot.is-separator { inline-size: clamp(12px, 2.4vw, 18px); border-color: transparent; }
.spelling-slot.is-guide { color: var(--muted); }
.spelling-slot.is-active { border-color: var(--focus); }
.spelling-slot.is-selected { background: var(--selection); }
.spelling-field:focus-within .spelling-slot.is-active { background: var(--tint); }
.spelling-slot.is-correct { color: var(--spelling-correct); }
.spelling-slot.is-correct:not(.is-separator) { border-color: var(--spelling-correct); }
.spelling-slot.is-incorrect { border-color: var(--spelling-incorrect); color: var(--spelling-incorrect); }
.typed-letter { display: block; animation: letter-arrive 130ms ease-out; }
.spelling-slots[data-outcome='correct'] { animation: spelling-success 250ms ease-out; }
.spelling-slots[data-outcome='incorrect'] { animation: spelling-error 240ms ease-out; }

@keyframes letter-arrive {
  from { transform: translateY(3px) scale(.94); opacity: .55; }
  to { transform: none; opacity: 1; }
}
@keyframes spelling-success {
  0%, 100% { transform: none; }
  50% { transform: scale(1.035); }
}
@keyframes spelling-error {
  0%, 100% { transform: none; }
  23% { transform: translateX(-4px); }
  50% { transform: translateX(4px); }
  76% { transform: translateX(-2px); }
}
@media (prefers-reduced-motion: reduce) {
  .typed-letter,
  .spelling-slots[data-outcome='correct'],
  .spelling-slots[data-outcome='incorrect'] { animation: none; }
}
</style>
