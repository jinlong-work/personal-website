<template>
  <section
    class="resume-section"
    :class="{ 'is-book-page': bookMode }"
    id="about"
    aria-labelledby="resume-section-title"
  >
    <div class="wrap">
      <header class="resume-section-heading">
        <div>
          <div class="eyebrow">
            {{ english ? '01 / BACKGROUND & CAPABILITIES' : '01 / 经历与能力' }}
          </div>
          <h2 id="resume-section-title">
            {{ english ? 'A journey of' : '以经历积累，'
            }}<em>{{ english ? 'learning & building.' : '让能力生长。' }}</em>
          </h2>
        </div>
        <div class="resume-about">
          <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
        </div>
      </header>
      <p v-if="loading" class="resume-status" role="status">
        {{ english ? 'Loading background…' : '正在加载经历与能力…' }}
      </p>
      <div v-else-if="error" class="resume-status" role="alert">
        {{ english ? 'Background is temporarily unavailable.' : '经历资料暂时无法加载。'
        }}<button type="button" @click="$emit('retry')">
          {{ english ? 'Try again' : '重新加载' }}
        </button>
      </div>
      <template v-else>
        <div class="resume-history">
          <div class="history-column" id="education">
            <h3><span>01</span>{{ english ? 'EDUCATION' : '教育背景' }}<i>↗</i></h3>
            <div v-if="!resume.education.length" class="history-empty">
              {{ english ? 'More to come.' : '教育背景正在整理中。' }}
            </div>
            <article v-for="(item, index) in resume.education" :key="index" class="history-entry">
              <div class="history-date">{{ period(item, false) }}</div>
              <h4>{{ item.school }}</h4>
              <div class="history-meta">
                {{ [item.degree, item.major].filter(Boolean).join(' · ') }}
              </div>
              <p v-if="item.description">{{ item.description }}</p>
            </article>
          </div>
          <div class="history-column" id="experience">
            <h3><span>02</span>{{ english ? 'EXPERIENCE' : '工作经历' }}<i>↗</i></h3>
            <div v-if="!resume.experience.length" class="history-empty">
              {{ english ? 'More to come.' : '工作经历正在整理中。' }}
            </div>
            <article v-for="(item, index) in resume.experience" :key="index" class="history-entry">
              <div class="history-date">{{ period(item, true) }}</div>
              <h4>{{ item.role }}</h4>
              <div class="history-meta">{{ item.company }}</div>
              <p v-if="item.description">{{ item.description }}</p>
            </article>
          </div>
        </div>
        <div class="resume-skills" id="skills">
          <div class="skills-heading">
            <h3><span>03</span>{{ english ? 'TECHNOLOGY STACK' : '技术栈' }}</h3>
            <span>{{
              english ? 'TOOLS FOR TURNING IDEAS INTO REALITY' : '把想法变成现实的工具'
            }}</span>
          </div>
          <div v-if="!resume.skills.length" class="history-empty">
            {{ english ? 'More to come.' : '技术栈正在整理中。' }}
          </div>
          <div class="resume-skill-grid">
            <article
              v-for="(group, index) in resume.skills"
              :key="index"
              class="resume-skill-group"
            >
              <h4>{{ group.name }}</h4>
              <div class="resume-skill-tags">
                <span v-for="item in group.items" :key="item">{{ item }}</span>
              </div>
              <p v-if="group.description">{{ group.description }}</p>
            </article>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  resume: { type: Object, required: true },
  locale: { type: String, default: 'zh' },
  loading: Boolean,
  error: Boolean,
  bookMode: Boolean
})
defineEmits(['retry'])
const english = computed(() => props.locale === 'en')
const paragraphs = computed(() =>
  props.resume.basic.about
    .split('\n')
    .map((value) => value.trim())
    .filter(Boolean)
)
function period(item, working) {
  const start = item.start.replace('-', '.')
  const end = item.end.replace('-', '.')
  if (!start && !end) return working ? (english.value ? 'PRESENT' : '至今') : ''
  if (!start) return end
  return `${start} — ${end || (english.value ? 'PRESENT' : '至今')}`
}
</script>

<style scoped>
.resume-section {
  min-height: calc(100svh - 86px);
  box-sizing: border-box;
  padding: 60px 0 54px;
  background: var(--surface);
  color: var(--ink);
  border-top: 1px solid var(--line);
}
.resume-section.is-book-page {
  min-height: 100%;
  border-top: 0;
  padding-block: clamp(26px, 4dvh, 56px);
}
.is-book-page .resume-section-heading {
  padding-bottom: 24px;
}
.is-book-page h2 {
  font-size: clamp(30px, 3vw, 44px);
}
.is-book-page .resume-history {
  padding: 22px 0 12px;
}
.is-book-page .history-column h3 {
  margin-bottom: 18px;
}
.is-book-page .history-entry {
  margin-bottom: 18px;
}
.is-book-page .resume-skills {
  padding-top: 20px;
}
.is-book-page .skills-heading {
  margin-bottom: 16px;
}
.is-book-page .resume-skill-group {
  padding: 16px 20px;
}
.resume-section-heading {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: end;
  padding-bottom: 30px;
  border-bottom: 1px solid var(--line-strong);
}
.eyebrow {
  color: var(--lime);
  font-size: 10px;
  letter-spacing: 2.4px;
}
h2 {
  font-size: clamp(30px, 3.4vw, 50px);
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.04em;
  margin: 20px 0 0;
}
h2 em {
  display: block;
  font-style: normal;
  color: var(--lime);
}
.resume-about p {
  font-size: 12px;
  color: var(--muted);
  line-height: 1.9;
  margin: 10px 0 0;
  white-space: pre-line;
  overflow-wrap: anywhere;
}
.resume-history {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  padding: 26px 0 20px;
}
.history-column h3,
.skills-heading h3 {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  margin: 0 0 25px;
}
h3 > span {
  color: var(--subtle);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1px;
}
h3 i {
  font-style: normal;
  color: var(--lime);
  margin-left: auto;
  font-size: 18px;
}
.history-entry {
  border-left: 1px solid var(--line-strong);
  padding: 0 0 0 23px;
  position: relative;
  margin: 0 0 24px 6px;
}
.history-entry::before {
  content: '';
  position: absolute;
  top: 2px;
  left: -4px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--lime);
  box-shadow: 0 0 0 5px var(--surface);
}
.history-date {
  color: var(--subtle);
  font-size: 10px;
  letter-spacing: 1px;
  min-height: 12px;
  margin-bottom: 9px;
}
h4 {
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 7px;
  overflow-wrap: anywhere;
}
.history-meta {
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
  overflow-wrap: anywhere;
}
.history-entry p,
.resume-skill-group p {
  font-size: 11px;
  line-height: 1.9;
  color: var(--subtle);
  margin: 9px 0 0;
  white-space: pre-line;
  overflow-wrap: anywhere;
}
.resume-skills {
  padding-top: 26px;
  border-top: 1px solid var(--line-strong);
}
.skills-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 22px;
}
.skills-heading h3 {
  margin: 0;
}
.skills-heading > span {
  font-size: 9px;
  letter-spacing: 1.2px;
  color: var(--subtle);
}
.resume-skill-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}
.resume-skill-group {
  padding: 18px 20px;
  border: 1px solid var(--line);
  border-radius: 7px;
  background: var(--accent-soft);
}
.resume-skill-group h4 {
  font-size: 12px;
  margin-bottom: 15px;
}
.resume-skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
}
.resume-skill-tags span {
  border: 1px solid var(--line-strong);
  border-radius: 4px;
  padding: 5px 9px;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.4;
  overflow-wrap: anywhere;
  max-width: 100%;
}
.history-empty,
.resume-status {
  padding: 20px 0 35px;
  font-size: 12px;
  color: var(--subtle);
  line-height: 1.8;
}
.resume-status button {
  margin-left: 12px;
  color: var(--lime);
  background: transparent;
  border: 1px solid var(--line-strong);
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  font: inherit;
}
@media (min-width: 1500px) and (min-height: 950px) {
  .resume-section {
    padding-block: 95px 85px;
  }
  .resume-history {
    padding-top: 40px;
  }
  .history-entry {
    margin-bottom: 34px;
  }
  .resume-skill-group {
    padding: 24px;
  }
}
@media (max-width: 850px) {
  .resume-section-heading {
    gap: 35px;
  }
  .resume-skill-grid {
    gap: 12px;
  }
  .resume-skill-group {
    padding: 16px;
  }
}
@media (max-width: 600px) {
  .resume-section {
    padding: 48px 0;
  }
  .resume-section-heading {
    grid-template-columns: 1fr;
    gap: 18px;
    padding-bottom: 28px;
  }
  h2 {
    font-size: 34px;
  }
  .resume-about p {
    font-size: 12px;
  }
  .resume-history {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 28px 0 8px;
  }
  .history-column h3 {
    margin-bottom: 22px;
  }
  .history-entry {
    padding-left: 20px;
  }
  .resume-skill-grid {
    grid-template-columns: 1fr;
  }
  .skills-heading > span {
    display: none;
  }
  .resume-skill-group {
    padding: 20px;
  }
}
</style>
