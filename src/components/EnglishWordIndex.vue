<template>
  <div
    class="word-index"
    :class="{ 'is-open': expanded }"
    @pointerenter="onPointerEnter"
    @pointerleave="hovering = false"
    @keydown.esc.stop="closeAndFocus"
  >
    <button
      ref="handle"
      type="button"
      class="index-handle"
      :aria-expanded="expanded"
      aria-controls="chapter-word-index"
      @click="toggle"
    >
      <List aria-hidden="true" />
      <span>本章词汇</span>
    </button>
    <nav id="chapter-word-index" class="index-panel" aria-label="本章词汇索引" :inert="!expanded">
      <header class="index-heading">
        <h2>{{ title }}</h2>
        <span v-if="words.length">{{ words.length }} 词</span>
      </header>
      <p v-if="loading" class="index-message" role="status">正在加载词汇索引…</p>
      <div v-else-if="error" class="index-message">
        <p role="alert">{{ error }}</p>
        <button type="button" class="index-retry" @click="$emit('request')">重试</button>
      </div>
      <ul v-else-if="words.length" class="index-list">
        <li v-for="word in words" :key="word.id">
          <button type="button" class="index-word" @click="selectWord(word.id)">
            <span class="index-word-text">
              <span class="index-term" lang="en">{{ word.word }}</span>
              <span v-if="word.meaningZh" class="index-meaning" lang="zh-CN">{{ word.meaningZh }}</span>
            </span>
            <ArrowRight aria-hidden="true" />
          </button>
        </li>
      </ul>
      <p v-else class="index-message">本章暂无词汇</p>
    </nav>
  </div>
</template>

<script setup>
import { ArrowRight, List } from '@element-plus/icons-vue'
import { computed, ref, watch } from 'vue'

defineProps({
  title: { type: String, required: true },
  words: { type: Array, required: true },
  loading: Boolean,
  error: { type: String, default: '' }
})
const emit = defineEmits(['request', 'select'])
const handle = ref(null)
const hovering = ref(false)
const pinned = ref(false)
const expanded = computed(() => hovering.value || pinned.value)

watch(expanded, open => {
  if (open) emit('request')
})

function onPointerEnter(event) {
  if (event.pointerType === 'mouse') hovering.value = true
}

function close() {
  hovering.value = false
  pinned.value = false
}

function toggle() {
  if (expanded.value) close()
  else pinned.value = true
}

function closeAndFocus() {
  if (!expanded.value) return
  close()
  handle.value?.focus({ preventScroll: true })
}

function selectWord(id) {
  close()
  emit('select', id)
}
</script>

<style scoped>
.word-index {
  --handle-width: 34px;
  --index-width: min(316px, calc(100vw - var(--handle-width) - 12px));
  position: fixed;
  z-index: 5;
  inset-block: 0;
  inset-inline-end: 0;
  display: flex;
  align-items: center;
  pointer-events: none;
  transform: translateX(calc(100% - var(--handle-width)));
  transition: transform 180ms ease-out;
}
.word-index.is-open { transform: translateX(0); }
.index-handle {
  inline-size: var(--handle-width);
  display: grid;
  justify-items: center;
  gap: 8px;
  padding-block: 11px;
  border: 1px solid var(--line);
  border-inline-end: 0;
  border-radius: 9px 0 0 9px;
  background: var(--banner);
  color: var(--accent);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  pointer-events: auto;
}
.index-handle svg, .index-word svg { width: 15px; height: 15px; flex: none; }
.index-handle span { writing-mode: vertical-rl; }
.index-panel {
  display: flex;
  flex-direction: column;
  align-self: stretch;
  inline-size: var(--index-width);
  border-inline-start: 1px solid var(--line);
  background: var(--panel);
  color: var(--ink);
  overflow: hidden;
}
.word-index.is-open .index-panel { box-shadow: -9px 4px 28px var(--card-shadow); pointer-events: auto; }
.index-heading {
  flex: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px;
  padding: 12px 13px;
  border-bottom: 1px solid var(--line);
}
.index-heading h2 { font-size: 14px; }
.index-heading span, .index-message { color: var(--muted); font-size: 12px; }
.index-message { padding: 14px 12px; text-align: center; }
.index-retry { margin-top: 8px; }
.index-list {
  flex: 1;
  min-block-size: 0;
  margin: 0;
  padding: 5px;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  list-style: none;
  scrollbar-width: thin;
  scrollbar-color: var(--accent-line) transparent;
}
.index-word, .index-retry {
  padding: 7px 9px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--accent);
  font: inherit;
  cursor: pointer;
}
.index-word {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  min-block-size: 48px;
  color: var(--ink);
  font-size: 13px;
  text-align: start;
  overflow-wrap: anywhere;
}
.index-word-text { display: grid; min-width: 0; gap: 2px; }
.index-term { font-size: 14px; font-weight: 650; }
.index-meaning { color: var(--muted); font-size: 12px; line-height: 1.45; white-space: pre-line; }
.index-word:hover, .index-retry:hover, .index-handle:hover { background: var(--tint); }
button:focus-visible { outline: 2px solid var(--focus); outline-offset: -2px; }

@media (max-width: 460px) {
  .word-index { --handle-width: 28px; }
}
@media (prefers-reduced-motion: reduce) {
  .word-index { transition: none; }
}
</style>
