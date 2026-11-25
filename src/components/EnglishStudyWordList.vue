<template>
  <el-dialog
    v-model="open"
    :title="title"
    width="min(670px, calc(100vw - 32px))"
    align-center
    destroy-on-close
  >
    <template v-if="group">
      <label v-if="groups.length > 1" class="word-list-chapter">
        章节
        <select :value="chapterId" @change="requestedChapterId = Number($event.target.value)">
          <option v-for="item in groups" :key="item.chapter.id" :value="item.chapter.id">
            第 {{ item.chapter.number }} 章 · {{ item.chapter.title }}（{{ item.entries.length }} 词）
          </option>
        </select>
      </label>
      <p v-else class="word-list-chapter">第 {{ group.chapter.number }} 章 · {{ group.chapter.title }}</p>

      <p v-if="loading" class="word-list-message" role="status">正在加载词汇…</p>
      <div v-else-if="loadError" class="word-list-message">
        <p role="alert">本章词汇加载失败。</p>
        <button type="button" class="study-action" @click="loadWords(chapterId)">重新加载</button>
      </div>
      <p v-else-if="!words.length" class="word-list-message">本章暂无可显示的词汇。</p>
      <ul v-else class="word-list">
        <li v-for="word in words" :key="word.id">
          <strong lang="en">{{ word.word }}</strong>
          <span>{{ word.meaningZh }}</span>
        </li>
      </ul>
    </template>
    <p v-else class="word-list-message">这个状态下暂时没有单词。</p>
  </el-dialog>
</template>

<script setup>
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue'
import { getAllChapterWords } from '@/api/admin/english'

const props = defineProps({
  title: { type: String, required: true },
  groups: { type: Array, required: true }
})
const open = defineModel({ type: Boolean, required: true })
const requestedChapterId = ref(null)
const deck = shallowRef([])
const loading = ref(false)
const loadError = ref(false)
const cache = new Map()
let request

const group = computed(() => props.groups.find(item => item.chapter.id === requestedChapterId.value) ?? props.groups[0])
const chapterId = computed(() => group.value?.chapter.id)
const words = computed(() => {
  if (!group.value) return []
  const matches = new Set(group.value.entries.map(entry => entry.wordId))
  return deck.value.filter(word => matches.has(word.id))
})

async function loadWords(id) {
  request?.abort()
  loadError.value = false
  deck.value = cache.get(id) ?? []
  loading.value = Boolean(id && !cache.has(id))
  if (!loading.value) return

  const controller = new AbortController()
  request = controller
  try {
    const chapterWords = await getAllChapterWords(id, controller.signal)
    if (controller.signal.aborted) return
    cache.set(id, chapterWords)
    deck.value = chapterWords
  } catch {
    if (!controller.signal.aborted) loadError.value = true
  } finally {
    if (!controller.signal.aborted) loading.value = false
  }
}

watch([open, chapterId], ([visible, id]) => {
  if (!visible) requestedChapterId.value = null
  void loadWords(visible ? id : null)
})
onBeforeUnmount(() => request?.abort())
</script>

<style scoped>
.word-list-chapter {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 12px;
  color: var(--muted);
  font-size: 13px;
}
.word-list-chapter select {
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: var(--panel);
  color: var(--ink);
  font: inherit;
}
.word-list { margin: 0; padding: 0; list-style: none; }
.word-list li {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: baseline;
  gap: 12px;
  padding: 10px 2px;
  border-bottom: 1px solid var(--line);
  overflow-wrap: anywhere;
}
.word-list li:last-child { border-bottom: 0; }
.word-list strong { color: var(--ink); font-size: 15px; }
.word-list li span { color: var(--muted); line-height: 1.5; }
.word-list-message { padding: 20px 0; color: var(--muted); text-align: center; }
.word-list-message button { margin-top: 8px; }
</style>
