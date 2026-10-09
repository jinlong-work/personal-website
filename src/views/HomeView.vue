<template>
  <div ref="page" class="spatial-site">
    <header class="site-header">
      <nav class="nav wrap" :aria-label="copy.t0">
        <RouterLink class="brand" to="/admin" aria-label="进入后台管理"
          ><span class="brand-symbol">jl.</span>{{ copy.t1 }}</RouterLink
        >
        <div class="navlinks">
          <a href="#projects" @click.prevent="scrollToSection('projects')">{{ copy.t2 }}</a
          ><a href="#about" @click.prevent="scrollToSection('about')">{{ copy.t3 }}</a
          ><a href="#skills" @click.prevent="scrollToSection('skills')">{{ copy.t4 }}</a
          ><a href="#contact" @click.prevent="scrollToSection('contact')">{{ copy.t5 }}</a>
        </div>
        <div class="nav-contact">
          <span class="status"><i class="dot"></i>{{ copy.t6 }}</span
          ><a href="#contact" @click.prevent="scrollToSection('contact')">{{ copy.t7 }}</a>
        </div>
        <button
          class="locale-toggle"
          type="button"
          :aria-label="locale === 'zh' ? '切换为英文' : 'Switch to Chinese'"
          @click="toggleLocale"
        >
          {{ locale === 'zh' ? 'English' : '中文' }}
        </button>
      </nav>
    </header>
    <main>
      <section class="hero wrap" id="home">
        <div class="hero-top reveal">
          <span class="eyebrow">{{ copy.t8 }}</span
          ><span class="eyebrow edition">{{ copy.t9 }}</span>
        </div>
        <div class="hero-main">
          <div class="hero-copy">
            <h1 class="serif reveal">
              {{ copy.t10 }}<br /><em>{{ copy.t11 }}</em>
            </h1>
            <h2 class="hero-zh reveal delay">{{ copy.t12 }}</h2>
            <p class="intro reveal delay">{{ copy.p0 }}</p>
            <div class="actions reveal delay">
              <a class="pill primary" href="#projects" @click.prevent="scrollToSection('projects')"
                >{{ copy.t13 }} <span>↗</span></a
              ><button class="text-link resume-link" type="button" @click="resumeVisible = true">
                {{ copy.t14 }} <span>↗</span>
              </button>
            </div>
          </div>
          <SpatialTerrain :locale="locale" :motion-enabled="motionEnabled" />
        </div>
        <div class="hero-bottom reveal">
          <a class="scroll-cue" href="#projects" @click.prevent="scrollToSection('projects')"
            ><span>↓</span> {{ copy.t15 }}</a
          >
          <div class="hero-count">
            <span><b>2D / 3D</b> {{ copy.t16 }}</span
            ><span
              ><b>{{ copy.t17 }}</b> {{ copy.t18 }}</span
            ><span
              ><b>{{ copy.t19 }}</b> {{ copy.t20 }}</span
            >
          </div>
        </div>
      </section>
      <div class="ticker" aria-hidden="true">
        <div class="ticker-track">
          <span>VUE.JS</span><i>✳</i><span>CESIUM</span><i>✳</i><span>ARCGIS</span><i>✳</i
          ><span>THREE.JS</span><i>✳</i><span>ECHARTS</span><i>✳</i><span>JAVA / SPRING BOOT</span
          ><i>✳</i><span>{{ copy.t21 }}</span
          ><i>✳</i><span>VUE.JS</span><i>✳</i><span>CESIUM</span><i>✳</i><span>ARCGIS</span><i>✳</i
          ><span>THREE.JS</span><i>✳</i><span>ECHARTS</span><i>✳</i><span>JAVA / SPRING BOOT</span
          ><i>✳</i><span>{{ copy.t21 }}</span
          ><i>✳</i>
        </div>
      </div>
      <section class="work" id="projects">
        <div class="wrap">
          <div class="section-head reveal">
            <div>
              <div class="eyebrow">{{ copy.t22 }}</div>
              <h2 class="serif">
                {{ copy.t23 }}<br /><em>{{ copy.t24 }}</em>
              </h2>
            </div>
            <div class="section-note">{{ copy.p1 }}<br /><span class="arrow-circle">↙</span></div>
          </div>
          <div class="project-grid">
            <article v-for="(project, index) in featuredProjects" :key="project.id" class="project">
              <button
                class="project-image"
                type="button"
                :aria-label="copy.t26 + ' · ' + project.name"
                :data-label="copy.t26 + ' ↗'"
                @click="openProject(project.id)"
              >
                <img
                  v-if="project.images?.length"
                  :src="project.images[0]"
                  :alt="project.name"
                  width="1000"
                  height="590"
                  loading="lazy"
                /><span v-else class="project-placeholder">{{ project.name }}</span>
              </button>
              <div>
                <div v-if="index === 0" class="index">{{ copy.t25 }}</div>
                <div class="category">{{ features[project.id]?.category || project.type }}</div>
                <h3>{{ features[project.id]?.headline || project.name }}</h3>
                <p>{{ features[project.id]?.intro || project.description }}</p>
                <div class="project-tags">{{ project.technologies?.join(' / ') }}</div>
                <button class="project-open" type="button" @click="openProject(project.id)">
                  {{ copy.t26 }} <span>↗</span>
                </button>
              </div>
            </article>
          </div>
          <details v-if="otherProjects.length" class="more-projects">
            <summary>
              {{ copy.t27 }} <span>{{ otherProjects.length }} {{ copy.t28 }} ＋</span>
            </summary>
            <div class="more-project-grid">
              <button
                v-for="project in otherProjects"
                :key="project.id"
                class="more-project"
                type="button"
                @click="openProject(project.id)"
              >
                <span class="eyebrow">{{ project.type }}</span
                ><strong>{{ project.name }} ↗</strong
                ><small>{{ project.technologies?.join(' / ') }}</small>
              </button>
            </div>
          </details>
          <div class="work-foot reveal">
            <span>{{ copy.t29 }}</span
            ><span>{{ copy.t30 }}</span>
          </div>
        </div>
      </section>
      <section class="about" id="about">
        <div class="wrap">
          <div class="about-grid">
            <div class="reveal">
              <div class="eyebrow">{{ copy.t31 }}</div>
              <h2 class="serif">
                {{ copy.t32 }}<br />{{ copy.t33 }}<em>{{ copy.t34 }}</em>
              </h2>
              <p class="about-text">{{ copy.t35 }}</p>
              <p class="about-text">{{ copy.p2 }}</p>
              <p class="about-text">{{ copy.p3 }}</p>
            </div>
            <div id="experience" class="timeline reveal delay">
              <div class="timeline-row">
                <div class="timeline-date">{{ copy.t36 }}</div>
                <div>
                  <h3>{{ copy.t37 }}</h3>
                  <p>{{ copy.t38 }}</p>
                  <p>{{ copy.t39 }}</p>
                </div>
              </div>
              <div class="timeline-row">
                <div class="timeline-date">{{ copy.t40 }}</div>
                <div>
                  <h3>{{ copy.t41 }}</h3>
                  <p>{{ copy.t42 }}</p>
                </div>
              </div>
              <div class="timeline-row">
                <div class="timeline-date">{{ copy.t43 }}</div>
                <div>
                  <h3>{{ copy.t44 }}</h3>
                  <p>{{ copy.t45 }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="skill-list" id="skills">
            <div class="skill-row reveal">
              <strong><span class="skill-no">01</span>{{ copy.t46 }}</strong
              ><small>ArcGIS / Cesium / OpenLayers</small>
            </div>
            <div class="skill-row reveal">
              <strong><span class="skill-no">02</span>{{ copy.t47 }}</strong
              ><small>Vue 3 / ECharts / Three.js</small>
            </div>
            <div class="skill-row reveal">
              <strong><span class="skill-no">03</span>{{ copy.t48 }}</strong
              ><small>Java / Spring Boot / MyBatis</small>
            </div>
          </div>
        </div>
      </section>
      <section class="contact wrap" id="contact">
        <div class="eyebrow reveal">{{ copy.t49 }}</div>
        <h2 class="serif reveal">
          {{ copy.t50 }}<em>{{ copy.t51 }}</em>
        </h2>
        <div class="contact-meta reveal">
          <p>{{ copy.p4 }}</p>
          <button
            class="pill primary"
            @click="assistant?.open(locale === 'zh' ? '查看简历与联系方式' : 'Resume and contact')"
          >
            {{ copy.t52 }} <span>↗</span>
          </button>
        </div>
        <div class="contact-details reveal">
          <div class="contact-links">
            <a href="mailto:1426559553@qq.com">1426559553@qq.com ↗</a
            ><a href="tel:13310539521">13310539521</a><span>{{ copy.t53 }}</span
            ><a :href="RESUME_FILE_PATH" :download="RESUME_FILE_NAME">{{ copy.t54 }}</a>
          </div>
          <details class="wechat">
            <summary>{{ copy.t55 }}</summary>
            <img :src="weixinImg" :alt="copy.t56" width="140" height="140" />
          </details>
        </div>
      </section>
    </main>
    <footer class="footer wrap">
      <span>© 2026 {{ copy.t1 }}</span
      ><span>{{ copy.t58 }}</span>
    </footer>

    <PortfolioAssistant
      ref="assistant"
      :projects="localizedProjects"
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
      @close="projectVisible = false"
    />
    <ResumePreviewModal
      :visible="resumeVisible"
      :pdf-src="RESUME_FILE_PATH"
      :title="content.resumePreview"
      :is-dark="true"
      :locale="locale"
      @close="resumeVisible = false"
    />
  </div>
</template>
<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import SpatialTerrain from '@/components/SpatialTerrain.vue'
import PortfolioAssistant from '@/components/PortfolioAssistant.vue'
import ProjectDetailModal from '@/components/ProjectDetailModal.vue'
import ResumePreviewModal from '@/components/ResumePreviewModal.vue'
import { getProjects } from '@/api/api'
import {
  fallbackProjects,
  localizeProjects,
  siteContent,
  RESUME_FILE_NAME,
  RESUME_FILE_PATH
} from '@/content/siteContent'
import weixinImg from '@/assets/img/weixin.jpg'
import '@/styles/spatial-portfolio.css'
import { usePortfolioLocale } from '@/composables/usePortfolioLocale'
import { portfolioCopy } from '@/content/portfolioCopy'
const { locale, toggleLocale } = usePortfolioLocale()
const copy = computed(() => portfolioCopy[locale.value])
const content = computed(() => siteContent[locale.value])

const page = ref(null)
const assistant = ref(null)
const projects = ref(fallbackProjects)
const localizedProjects = computed(() => localizeProjects(projects.value, locale.value))
const featuredIds = [1, 3, 5]
const featuredProjects = computed(() =>
  featuredIds
    .map((id) => localizedProjects.value.find((project) => project.id === id))
    .filter(Boolean)
)
const otherProjects = computed(() =>
  localizedProjects.value.filter((project) => !featuredIds.includes(project.id))
)
const features = computed(() => copy.value.features)
const selectedId = ref(null)
const selectedProject = computed(
  () => localizedProjects.value.find((project) => project.id === selectedId.value) || {}
)
const projectVisible = ref(false)
const resumeVisible = ref(false)
const motionEnabled = true
let observer
let alive = true
function openProject(id) {
  selectedId.value = id
  projectVisible.value = true
}
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
onMounted(async () => {
  document.documentElement.classList.remove('light-theme')
  document.documentElement.classList.add('dark-theme')
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      }),
    { threshold: 0.08 }
  )
  page.value.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
  try {
    const response = await getProjects()
    if (alive && response?.projects?.length) {
      const configured = response.projects.filter(
        (project) => project && typeof project.id === 'number' && typeof project.name === 'string'
      )
      // Keep local project content available even when an older deployment's JSON omits it.
      projects.value = fallbackProjects
        .map((project) => ({ ...project, ...configured.find((item) => item.id === project.id) }))
        .concat(
          configured.filter((project) => !fallbackProjects.some((item) => item.id === project.id))
        )
    }
  } catch {
    /* The local portfolio remains available when configuration cannot be loaded. */
  }
  await nextTick()
})
onBeforeUnmount(() => {
  alive = false
  observer?.disconnect()
})
</script>
