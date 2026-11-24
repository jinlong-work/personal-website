<template>
  <div class="word-details" :class="{ 'is-compact': compact }">
    <slot />
    <div class="detail-meta">
      <span v-if="word.phonetic" class="detail-phonetic" lang="en">{{ word.phonetic }}</span>
      <span class="pos-tag">{{ word.partOfSpeech }}</span>
      <span class="frequency-tag" :data-frequency="word.frequency">{{ word.frequency }}</span>
    </div>
    <p v-if="showMeaning" class="detail-meaning">{{ word.meaningZh }}</p>
    <section v-if="word.exampleEn || word.exampleZh" class="detail-section detail-example">
      <h3>中英例句</h3>
      <p v-if="word.exampleEn" class="example-en" lang="en">{{ word.exampleEn }}</p>
      <p v-if="word.exampleZh" class="example-zh">{{ word.exampleZh }}</p>
    </section>
    <section v-if="!compact && word.root" class="detail-section">
      <h3>词根</h3>
      <p>{{ word.root }}</p>
    </section>
    <section v-if="!compact && word.extra" class="detail-section">
      <h3>补充说明</h3>
      <p>{{ word.extra }}</p>
    </section>
  </div>
</template>

<script setup>
defineProps({
  word: { type: Object, required: true },
  showMeaning: { type: Boolean, default: true },
  compact: Boolean
})
</script>

<style scoped>
.word-details { display: grid; gap: 14px; color: var(--ink); font-size: 14px; line-height: 1.65; }
.detail-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 7px; }
.detail-phonetic { margin-right: 3px; color: var(--muted); }
.detail-meaning { font-size: clamp(17px, 2.2vw, 22px); font-weight: 600; }
.detail-section { padding: 12px 14px; border-radius: 8px; background: var(--tint); }
.detail-section h3 { margin-bottom: 4px; color: var(--accent); font-size: 12px; }
.detail-section p { white-space: pre-line; overflow-wrap: anywhere; }
.detail-example { border-inline-start: 3px solid var(--accent-line); }
.example-en { font-size: 15px; font-style: italic; }
.example-zh { margin-top: 4px; color: var(--muted); }
.word-details.is-compact { gap: 8px; font-size: 13px; line-height: 1.55; }
.is-compact .detail-section { padding: 9px 11px; }
.is-compact .example-en, .is-compact .detail-meaning { font-size: 14px; }
.is-compact :is(.detail-meaning, .example-en, .example-zh) {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
.is-compact .detail-meaning { -webkit-line-clamp: 2; }
</style>
