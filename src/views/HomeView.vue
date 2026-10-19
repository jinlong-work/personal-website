<template>
  <div ref="page" class="spatial-site book-site">
    <header class="site-header">
      <nav class="nav wrap" :aria-label="copy.t0">
        <RouterLink class="brand" to="/admin" aria-label="进入后台管理"
          ><span class="brand-symbol">jl.</span>{{ copy.t1 }}</RouterLink
        >
        <div class="navlinks">
          <a
            v-for="chapter in chapters"
            :key="chapter.id"
            :href="'#' + chapter.id"
            :class="{ 'is-active': currentPage.chapter === chapter.id }"
            :aria-current="currentPage.chapter === chapter.id ? 'page' : undefined"
            @click.prevent="scrollToSection(chapter.id)"
            >{{ chapter.label }}</a
          >
        </div>
        <div class="nav-contact">
          <span class="status"><i class="dot"></i>{{ copy.t6 }}</span
          ><a href="#contact" @click.prevent="scrollToSection('contact')">{{ copy.t7 }}</a>
        </div>
        <div class="nav-controls">
          <button
            class="theme-toggle"
            type="button"
            :aria-label="themeAction"
            :title="themeAction"
            :aria-pressed="!isDark"
            @click="toggleTheme"
          >
            <svg v-if="isDark" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path
                d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
              />
            </svg>
            <svg v-else viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.8 13A9 9 0 0 1 11 3.2 9 9 0 1 0 20.8 13Z" />
            </svg>
            <span>{{
              locale === 'zh' ? (isDark ? '浅色' : '深色') : isDark ? 'Light' : 'Dark'
            }}</span>
          </button>
          <button
            class="locale-toggle"
            type="button"
            :aria-label="locale === 'zh' ? '切换为英文' : 'Switch to Chinese'"
            @click="toggleLocale"
          >
            {{ locale === 'zh' ? 'English' : '中文' }}
          </button>
        </div>
      </nav>
    </header>
    <main
      ref="bookStage"
      class="portfolio-book"
      :class="{
        'is-turning': turning,
        'turn-forward': direction === 'forward',
        'turn-backward': direction === 'backward'
      }"
      :aria-label="bookCopy.title"
      @wheel="onWheel"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @pointercancel="onPointerCancel"
      @click.capture="onClickCapture"
    >
      <div
        v-for="leaf in bookPages"
        :id="'book-frame-' + leaf.id"
        :key="leaf.id"
        v-show="activeId === leaf.id || leavingId === leaf.id"
        class="book-leaf"
        :class="{ 'is-current': activeId === leaf.id, 'is-leaving': leavingId === leaf.id }"
        :data-book-page="leaf.id"
        :aria-label="leaf.label"
        :aria-roledescription="bookCopy.page"
        :aria-hidden="activeId !== leaf.id"
        :inert="activeId !== leaf.id || turning"
        :tabindex="activeId === leaf.id ? 0 : -1"
        role="group"
        @scroll="onPageScroll"
      >
        <section v-if="leaf.kind === 'cover'" class="hero wrap" id="home">
          <div class="hero-top reveal">
            <span class="eyebrow hero-availability"><i class="dot"></i>{{ copy.hero.welcome }}</span
            ><span class="eyebrow edition">{{ copy.t9 }}</span>
          </div>
          <div class="hero-main">
            <div class="hero-copy">
              <div class="hero-greeting reveal">{{ copy.hero.hello }} <span>↗</span></div>
              <h1 class="hero-name reveal">
                {{ copy.t1
                }}<span v-if="locale === 'zh' && profile.latinName" class="hero-name-latin">{{
                  profile.latinName
                }}</span>
              </h1>
              <h2 class="hero-role reveal delay">
                {{ copy.t37 }}<span v-if="copy.hero.role"> / {{ copy.hero.role }}</span>
              </h2>
              <p class="hero-statement reveal delay">
                {{ copy.hero.statement }}<em>{{ copy.hero.statementAccent }}</em>
              </p>
              <p class="intro reveal delay">{{ copy.hero.intro }}</p>
              <dl class="hero-facts reveal delay">
                <div v-if="profile.hometown">
                  <dt>{{ locale === 'zh' ? '来自哪里' : 'FROM' }}</dt>
                  <dd>{{ profile.hometown }}</dd>
                </div>
                <div v-if="profile.location">
                  <dt>{{ locale === 'zh' ? '目前所在地' : 'BASED IN' }}</dt>
                  <dd>{{ profile.location }}</dd>
                </div>
              </dl>
              <div class="actions reveal delay">
                <a class="pill primary" href="#about" @click.prevent="scrollToSection('about')"
                  >{{ bookCopy.begin }} <span>↗</span></a
                ><button class="text-link resume-link" type="button" @click="resumeVisible = true">
                  {{ copy.t14 }} <span>↗</span>
                </button>
              </div>
            </div>
            <EarthScene
              :locale="locale"
              :motion-enabled="motionEnabled && activeId === 'home' && !turning"
              :theme="theme"
            />
          </div>
        </section>
        <ResumeSection
          v-else-if="leaf.kind === 'background'"
          :resume="resume"
          :locale="locale"
          :loading="resumeLoading"
          :error="resumeError"
          book-mode
          @retry="loadResume"
        />
        <section v-else-if="leaf.kind === 'contact'" class="contact wrap" id="contact">
          <div class="eyebrow reveal">{{ copy.t49 }}</div>
          <h2 class="serif reveal">
            {{ copy.t50 }}<em>{{ copy.t51 }}</em>
          </h2>
          <div class="contact-meta reveal">
            <p>{{ copy.p4 }}</p>
            <button
              class="pill primary"
              @click="
                assistant?.open(locale === 'zh' ? '查看简历与联系方式' : 'Resume and contact')
              "
            >
              {{ copy.t52 }} <span>↗</span>
            </button>
          </div>
          <div class="contact-details reveal">
            <div class="contact-links">
              <a v-if="profile.email" :href="`mailto:${profile.email}`">{{ profile.email }} ↗</a
              ><a v-if="profile.phone" :href="`tel:${profile.phone.replace(/[^+\d]/g, '')}`">{{
                profile.phone
              }}</a
              ><span>{{ copy.t53 }}</span
              ><a :href="RESUME_FILE_PATH" :download="RESUME_FILE_NAME">{{ copy.t54 }}</a>
            </div>
            <details class="wechat">
              <summary>{{ copy.t55 }}</summary>
              <img :src="weixinImg" :alt="copy.t56" width="140" height="140" />
            </details>
          </div>
          <div class="book-colophon">
            <span>© {{ new Date().getFullYear() }} {{ profile.name }}</span
            ><span>{{ copy.t58 }}</span>
          </div>
        </section>
        <BookProjectsPage
          v-else
          :projects="bookProjects"
          :locale="locale"
          :loading="projectsLoading"
          :error="projectsError"
          @open="openProject"
          @retry="loadProjects"
        />
      </div>
    </main>
    <footer class="book-footer">
      <div class="book-running-title">
        <button
          type="button"
          class="book-assistant-button"
          :aria-label="locale === 'zh' ? '问问 AI，了解我' : 'Ask the portfolio assistant'"
          :title="locale === 'zh' ? '问问 AI，了解我' : 'Ask the portfolio assistant'"
          @click="assistant?.open()"
        >
          <AiMark />
        </button>
        <div class="book-caption">
          <span>{{ bookCopy.title }}</span
          ><strong>{{ currentPage.label }}</strong>
        </div>
      </div>
      <nav class="book-chapters" :aria-label="bookCopy.chapters">
        <button
          v-for="(chapter, index) in chapters"
          :key="chapter.id"
          type="button"
          :class="{ 'is-active': currentPage.chapter === chapter.id }"
          :aria-label="chapter.label"
          :aria-current="currentPage.chapter === chapter.id ? 'step' : undefined"
          :disabled="turning"
          @click="scrollToSection(chapter.id)"
        >
          <span>{{ String(index + 1).padStart(2, '0') }}</span
          ><small>{{ chapter.label }}</small>
        </button>
      </nav>
      <div class="book-page-controls">
        <button
          class="book-page-arrow"
          type="button"
          :aria-label="bookCopy.previous"
          :title="bookCopy.previous"
          :disabled="!canPrevious || turning"
          @click="turnPage(-1)"
        >
          ←</button
        ><span class="book-page-count"
          ><b>{{ String(activeIndex + 1).padStart(2, '0') }}</b
          ><i>/</i>{{ String(bookPages.length).padStart(2, '0') }}</span
        ><button
          class="book-page-arrow"
          type="button"
          :aria-label="bookCopy.next"
          :title="bookCopy.next"
          :disabled="!canNext || turning"
          @click="turnPage(1)"
        >
          →
        </button>
      </div>
      <div class="book-reading-progress" aria-hidden="true">
        <i :style="{ transform: 'scaleX(' + progress + ')' }"></i>
      </div>
      <span class="book-screen-reader" role="status" aria-live="polite" aria-atomic="true">{{
        readingStatus
      }}</span>
    </footer>

    <PortfolioAssistant
      ref="assistant"
      @open-change="assistantVisible = $event"
      :projects="localizedProjects"
      :resume="resume"
      :locale="locale"
      :motion-enabled="motionEnabled"
      @project="openProject"
      @resume="resumeVisible = true"
      @contact="scrollToSection('contact')"
    />
    <ProjectDetailModal
      :visible="projectVisible"
      :project="selectedProject"
      :labels="content.dialog"
      :is-dark="isDark"
      @close="projectVisible = false"
    />
    <ResumePreviewModal
      :visible="resumeVisible"
      :pdf-src="RESUME_FILE_PATH"
      :title="content.resumePreview"
      :is-dark="isDark"
      :locale="locale"
      @close="resumeVisible = false"
    />
  </div>
</template>
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import EarthScene from '@/components/EarthScene.vue'
import AiMark from '@/components/AiMark.vue'
import ResumeSection from '@/components/ResumeSection.vue'
import BookProjectsPage from '@/components/BookProjectsPage.vue'
import { usePortfolioBook } from '@/composables/usePortfolioBook'
import PortfolioAssistant from '@/components/PortfolioAssistant.vue'
import ProjectDetailModal from '@/components/ProjectDetailModal.vue'
import ResumePreviewModal from '@/components/ResumePreviewModal.vue'
import { getProjects } from '@/api/api'
import { getPublicResume } from '@/api/resume'
import { defaultResume, localizeResume } from '@/content/resumeDefaults'
import {
  localizeProjects,
  siteContent,
  RESUME_FILE_NAME,
  RESUME_FILE_PATH
} from '@/content/siteContent'
import weixinImg from '@/assets/img/weixin.jpg'
import '@/styles/spatial-portfolio.css'
import '@/styles/home-hero.css'
import '@/styles/portfolio-theme.css'
import '@/styles/portfolio-book.css'
import { usePortfolioLocale } from '@/composables/usePortfolioLocale'
import { usePortfolioTheme } from '@/composables/usePortfolioTheme'
import { portfolioCopy } from '@/content/portfolioCopy'
const { locale, toggleLocale } = usePortfolioLocale()
const { theme, isDark, toggleTheme } = usePortfolioTheme()
const themeAction = computed(() =>
  locale.value === 'zh'
    ? `切换至${isDark.value ? '浅色' : '深色'}主题`
    : `Switch to ${isDark.value ? 'light' : 'dark'} theme`
)
const resumeDocument = ref(defaultResume)
const resume = computed(() => localizeResume(resumeDocument.value, locale.value))
const profile = computed(() => resume.value.basic)
const copy = computed(() => {
  const base = portfolioCopy[locale.value]
  const basic = profile.value
  return {
    ...base,
    t1: basic.name,
    t6: basic.availability,
    t37: basic.title,
    t53: basic.hometown,
    t22: locale.value === 'zh' ? '02 / 精选项目' : '02 / Selected work',
    hero: {
      ...base.hero,
      role: basic.role,
      statement: basic.tagline,
      statementAccent: basic.taglineAccent,
      intro: basic.intro
    }
  }
})
watch(
  [profile, locale],
  () => {
    window.document.title = `${profile.value.name} — ${profile.value.title}`
  },
  { immediate: true }
)
const resumeLoading = ref(true)
const resumeError = ref(false)
let resumeController
const content = computed(() => siteContent[locale.value])

const page = ref(null)
const assistant = ref(null)
const assistantVisible = ref(false)
const bookStage = ref(null)
const projects = ref([])
const projectsLoading = ref(true)
const projectsError = ref(false)
let projectsController
const localizedProjects = computed(() => localizeProjects(projects.value, locale.value))
const featuredProjects = computed(() =>
  localizedProjects.value.filter((project) => project.featured)
)
const otherProjects = computed(() => localizedProjects.value.filter((project) => !project.featured))
const selectedId = ref(null)
const selectedProject = computed(
  () => localizedProjects.value.find((project) => project.id === selectedId.value) || {}
)
const projectVisible = ref(false)
const resumeVisible = ref(false)
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
const motionEnabled = ref(!motionPreference.matches)
function updateMotionPreference(event) {
  motionEnabled.value = !event.matches
}
const bookCopy = computed(() =>
  locale.value === 'zh'
    ? {
        title: '一本关于我的作品册',
        page: '书页',
        chapters: '作品册章节',
        previous: '上一页',
        next: '下一页',
        begin: '翻开我的故事',
        cover: '首页',
        background: '经历与能力',
        projects: '项目作品',
        contact: '联系方式'
      }
    : {
        title: 'A personal fieldbook',
        page: 'page',
        chapters: 'Book chapters',
        previous: 'Previous page',
        next: 'Next page',
        begin: 'Turn the first page',
        cover: 'Cover',
        background: 'Background',
        projects: 'Selected work',
        contact: 'Contact'
      }
)
const chapters = computed(() => [
  { id: 'home', label: bookCopy.value.cover },
  { id: 'about', label: bookCopy.value.background },
  { id: 'projects', label: bookCopy.value.projects },
  { id: 'contact', label: bookCopy.value.contact }
])
const bookProjects = computed(() => [...featuredProjects.value, ...otherProjects.value])
const bookPages = computed(() => [
  { id: 'home', kind: 'cover', chapter: 'home', label: bookCopy.value.cover },
  { id: 'about', kind: 'background', chapter: 'about', label: bookCopy.value.background },
  { id: 'projects', kind: 'projects', chapter: 'projects', label: bookCopy.value.projects },
  { id: 'contact', kind: 'contact', chapter: 'contact', label: bookCopy.value.contact }
])
const bookBlocked = computed(
  () => projectVisible.value || resumeVisible.value || assistantVisible.value
)
const {
  activeId,
  activeIndex,
  currentPage,
  leavingId,
  direction,
  turning,
  canPrevious,
  canNext,
  progress,
  goTo,
  turnBy,
  onPageScroll,
  onWheel,
  onPointerDown,
  onPointerUp,
  onPointerCancel,
  onClickCapture
} = usePortfolioBook({ pages: bookPages, stage: bookStage, motionEnabled, blocked: bookBlocked })
const readingStatus = computed(() =>
  locale.value === 'zh'
    ? '第 ' +
      (activeIndex.value + 1) +
      ' 页，共 ' +
      bookPages.value.length +
      ' 页：' +
      currentPage.value.label
    : 'Page ' +
      (activeIndex.value + 1) +
      ' of ' +
      bookPages.value.length +
      ': ' +
      currentPage.value.label
)
function turnPage(offset) {
  assistant.value?.close()
  turnBy(offset)
}

let alive = true
function openProject(id) {
  selectedId.value = id
  projectVisible.value = true
}
async function scrollToSection(id) {
  if (turning.value) return
  assistant.value?.close()
  const nested = ['skills', 'education', 'experience'].includes(id)
  const pageId = nested ? 'about' : id
  goTo(pageId)
  await nextTick()
  const panel = window.document.getElementById('book-frame-' + pageId)
  const target = nested ? window.document.getElementById(id) : null
  if (panel)
    panel.scrollTo({
      top: target
        ? panel.scrollTop +
          target.getBoundingClientRect().top -
          panel.getBoundingClientRect().top -
          24
        : 0,
      behavior: 'auto'
    })
}
async function loadProjects() {
  projectsController?.abort()
  const controller = new AbortController()
  projectsController = controller
  projectsLoading.value = true
  projectsError.value = false
  try {
    const response = await getProjects({ signal: controller.signal })
    if (alive && projectsController === controller) {
      projects.value = response.projects
      if (selectedId.value && !projects.value.some((project) => project.id === selectedId.value))
        projectVisible.value = false
    }
  } catch {
    if (alive && !controller.signal.aborted && projectsController === controller) {
      projects.value = []
      projectsError.value = true
    }
  } finally {
    if (alive && projectsController === controller) projectsLoading.value = false
  }
}
async function loadResume() {
  resumeController?.abort()
  const controller = new AbortController()
  resumeController = controller
  resumeLoading.value = true
  resumeError.value = false
  try {
    const { data } = await getPublicResume({ signal: controller.signal })
    if (alive && resumeController === controller) resumeDocument.value = data.data
  } catch {
    if (alive && !controller.signal.aborted && resumeController === controller)
      resumeError.value = true
  } finally {
    if (alive && resumeController === controller) resumeLoading.value = false
  }
}
onMounted(async () => {
  motionPreference.addEventListener('change', updateMotionPreference)
  await Promise.allSettled([loadProjects(), loadResume()])
  await nextTick()
})
onBeforeUnmount(() => {
  motionPreference.removeEventListener('change', updateMotionPreference)
  alive = false
  projectsController?.abort()
  resumeController?.abort()
})
</script>
