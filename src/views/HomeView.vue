<template>
  <div class="site-wrapper">
    <div class="three-background">
      <ThreeScene />
    </div>

    <div
      class="nav-overlay"
      :class="{ active: isMobileNavOpen }"
      @click="isMobileNavOpen = false"
    ></div>

    <ProjectDetailModal
      :visible="isModalVisible"
      :project="selectedProject"
      :labels="content.dialog"
      @close="closeModal"
    />

    <div class="mobile-header">
      <div class="mobile-profile">
        <h1 class="mobile-name">{{ content.name }}</h1>
      </div>
      <div class="mobile-header-actions">
        <a
          :href="RESUME_FILE_PATH"
          :download="RESUME_FILE_NAME"
          class="resume-download-mobile"
          :title="downloadTitle"
        >
          <i class="fa-solid fa-download"></i>
        </a>
        <button class="theme-toggle-mobile" @click="toggleTheme" :title="themeToggleTitle">
          <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
        </button>
        <button class="locale-toggle-mobile" @click="toggleLocale" :title="localeToggleTitle">
          <i class="fa-solid fa-language"></i>
        </button>
        <button class="menu-toggle" @click="isMobileNavOpen = !isMobileNavOpen">
          <i :class="isMobileNavOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
        </button>
      </div>
    </div>

    <aside class="sidebar" :class="{ 'mobile-nav-open': isMobileNavOpen }">
      <div class="sidebar-content">
        <div class="profile">
          <h1 class="profile-name">{{ content.name }}</h1>
          <h2 class="profile-title">{{ content.profileTitle }}</h2>
          <p class="profile-description">{{ content.profileDescription }}</p>
        </div>

        <nav class="nav">
          <a
            v-for="item in navItems"
            :key="item.id"
            :href="`#${item.id}`"
            class="nav-link"
            :class="{ active: activeSection === item.id }"
            @click="handleNavClick($event, item.id)"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="social-links">
          <a
            :href="RESUME_FILE_PATH"
            :download="RESUME_FILE_NAME"
            class="social-link"
            :title="downloadTitle"
          >
            <i class="fa-solid fa-download"></i>
          </a>
          <button class="social-link" @click="toggleTheme" :title="themeToggleTitle">
            <i :class="isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
          </button>
          <button
            class="social-link locale-toggle"
            @click="toggleLocale"
            :title="localeToggleTitle"
          >
            <i class="fa-solid fa-language"></i>
          </button>
        </div>
      </div>
    </aside>

    <main ref="mainContentRef" class="main-content" @scroll="handleScroll">
      <section id="about" class="section">
        <h2 class="section-title">{{ content.sections.about }}</h2>
        <div class="about-content">
          <p v-for="(paragraph, index) in content.about" :key="`about-${index}`">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section id="experience" class="section">
        <h2 class="section-title">{{ content.sections.experience }}</h2>
        <div class="experience-list">
          <div
            v-for="(item, index) in content.experience"
            :key="`experience-${index}`"
            class="experience-item"
          >
            <div class="experience-header">
              <div class="experience-info">
                <h3 class="experience-title">{{ item.title }}</h3>
                <p class="experience-company">{{ item.company }}</p>
              </div>
              <span class="experience-period">{{ item.period }}</span>
            </div>
            <p class="experience-description">{{ item.description }}</p>
          </div>
        </div>
      </section>

      <section id="skills" class="section">
        <h2 class="section-title">{{ content.sections.skills }}</h2>
        <div class="skills-grid">
          <div
            v-for="(group, groupIndex) in content.skillGroups"
            :key="`skill-group-${groupIndex}`"
            class="skill-category"
          >
            <h3 class="skill-category-title">{{ group.title }}</h3>
            <div class="skill-list">
              <span
                v-for="(item, itemIndex) in group.items"
                :key="`skill-${groupIndex}-${itemIndex}`"
                class="skill-tag"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">{{ content.sections.projects }}</h2>
        <div class="projects-grid">
          <div
            v-for="project in localizedProjects"
            :key="project.id"
            class="project-card"
            @click="openProjectDialog(project.id)"
          >
            <div class="project-header">
              <h3 class="project-title">
                {{ project.name }}
                <i class="fa-solid fa-arrow-up-right-from-square click-hint-icon"></i>
              </h3>
              <span class="project-tag">{{ project.type }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-technologies">
              <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>
            <div class="click-hint">
              <i class="fa-solid fa-hand-pointer"></i>
              {{ content.projectHint }}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">{{ content.sections.contact }}</h2>
        <div class="contact-content">
          <p>{{ content.contactIntro }}</p>
          <div class="contact-methods">
            <a href="mailto:1426559553@qq.com" class="contact-method">
              <i class="fa-solid fa-envelope"></i>
              <span>1426559553@qq.com</span>
            </a>
            <a href="tel:13310539521" class="contact-method">
              <i class="fa-solid fa-phone"></i>
              <span>13310539521</span>
            </a>
            <div class="contact-method">
              <i class="fa-solid fa-location-dot"></i>
              <span>{{ content.location }}</span>
            </div>
            <div class="contact-method wechat-method">
              <i class="fa-brands fa-weixin"></i>
              <div class="wechat-info">
                <span class="wechat-label">{{ content.wechatLabel }}</span>
                <div class="wechat-qrcode-inline">
                  <img :src="weixinImg" :alt="content.qrAlt" class="wechat-img-inline" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>{{ content.footer }}</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import ThreeScene from '@/components/ThreeScene.vue'
import ProjectDetailModal from '@/components/ProjectDetailModal.vue'
import { getProjects } from '@/api/api'
import weixinImg from '@/assets/img/weixin.jpg'
import {
  fallbackProjects,
  localizeProjects,
  RESUME_FILE_NAME,
  RESUME_FILE_PATH,
  siteContent
} from '@/content/siteContent'

const activeSection = ref('about')
const rawProjects = ref([])
const isModalVisible = ref(false)
const selectedProjectId = ref(null)
const isMobileNavOpen = ref(false)
const isDark = ref(true)
const locale = ref('zh')
const mainContentRef = ref(null)

const content = computed(() => siteContent[locale.value])
const localizedProjects = computed(() => localizeProjects(rawProjects.value, locale.value))
const selectedProject = computed(
  () => localizedProjects.value.find((project) => project.id === selectedProjectId.value) ?? {}
)

const navItems = computed(() => [
  { id: 'about', label: content.value.sections.about },
  { id: 'experience', label: content.value.sections.experience },
  { id: 'skills', label: content.value.sections.skills },
  { id: 'projects', label: content.value.sections.projects },
  { id: 'contact', label: content.value.sections.contact }
])

const downloadTitle = computed(() => (locale.value === 'zh' ? '下载简历' : 'Download Resume'))

const themeToggleTitle = computed(() => {
  if (locale.value === 'zh') {
    return isDark.value ? '切换到明亮模式' : '切换到暗夜模式'
  }

  return isDark.value ? 'Switch to Light Mode' : 'Switch to Dark Mode'
})

const localeToggleTitle = computed(() =>
  locale.value === 'zh' ? '切换到英文' : 'Switch to Chinese'
)

const loadTheme = () => {
  const savedTheme = localStorage.getItem('theme')
  isDark.value = savedTheme ? savedTheme === 'dark' : true
  applyTheme()
}

const applyTheme = () => {
  document.documentElement.classList.toggle('light-theme', !isDark.value)
  document.documentElement.classList.toggle('dark-theme', isDark.value)
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}

const applyLocale = () => {
  document.documentElement.setAttribute('lang', locale.value === 'zh' ? 'zh-CN' : 'en')
}

const loadLocale = () => {
  const savedLocale = localStorage.getItem('locale')
  locale.value = savedLocale === 'en' ? 'en' : 'zh'
  applyLocale()
}

const toggleLocale = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('locale', locale.value)
  applyLocale()
}

const handleScroll = (event) => {
  const isMobile = window.innerWidth <= 768
  const scrollTop = isMobile ? window.scrollY : event.target.scrollTop
  const sections = document.querySelectorAll('.section')
  let current = 'about'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    if (scrollTop >= sectionTop) {
      current = section.getAttribute('id') || 'about'
    }
  })

  activeSection.value = current
}

const scrollToSection = (sectionId) => {
  const targetElement = document.getElementById(sectionId)

  if (!targetElement) {
    return
  }

  if (window.innerWidth <= 768) {
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    })
    return
  }

  mainContentRef.value?.scrollTo({
    top: targetElement.offsetTop - 40,
    behavior: 'smooth'
  })
}

const handleNavClick = (event, sectionId) => {
  event.preventDefault()
  closeMobileNav()
  scrollToSection(sectionId)
}

const handleMobileScroll = () => {
  if (window.innerWidth <= 768) {
    handleScroll({ target: document })
  }
}

const openProjectDialog = (projectId) => {
  selectedProjectId.value = projectId
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
  selectedProjectId.value = null
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

const loadProjects = () => {
  getProjects()
    .then((response) => {
      rawProjects.value = response?.projects?.length ? response.projects : fallbackProjects
    })
    .catch(() => {
      rawProjects.value = fallbackProjects
    })
}

onMounted(() => {
  loadTheme()
  loadLocale()
  loadProjects()
  window.addEventListener('scroll', handleMobileScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleMobileScroll)
})
</script>

<style lang="scss">
.three-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: var(--three-opacity, 0.3);
  pointer-events: none;
  transition: opacity 0.3s ease;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 暗夜主题（默认） */
:root {
  --bg-color: #0a192f;
  --bg-light: #112240;
  --text-color: #8892b0;
  --text-light: #ccd6f6;
  --text-highlight: #64ffda;
  --accent-color: #64ffda;
  --border-color: #233554;
  --three-opacity: 0.3;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* 明亮主题（护眼柔和版） */
html.light-theme {
  --bg-color: #fdf6e3;
  --bg-light: #fef9ef;
  --text-color: #657b83;
  --text-light: #586e75;
  --text-highlight: #859900;
  --accent-color: #859900;
  --border-color: #eee8d5;
  --three-opacity: 0.12;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow: hidden;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  @media (max-width: 768px) {
    overflow-y: auto;
  }
}

/* 移动端导航遮罩 */
.nav-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 25, 47, 0.85);
  z-index: 9;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);

  html.light-theme & {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.active {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    display: block;
  }
}

/* 移动端顶部栏 */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  z-index: 100;
  padding: 0 25px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  transition: background-color 0.3s ease;

  html.light-theme & {
    background-color: rgba(248, 250, 252, 0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.mobile-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.mobile-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-light);
}

.resume-download-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 1.25rem;
  cursor: pointer;
  transition: var(--transition);
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
}

.theme-toggle-mobile,
.locale-toggle-mobile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 1.25rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
}

.menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  color: var(--accent-color);
  font-size: 1.5rem;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    transform: scale(1.1);
  }
}

.site-wrapper {
  position: relative;
  display: flex;
  height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 150px;
  z-index: 1;

  @media (max-width: 1080px) {
    padding: 0 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 80px 25px 40px 25px;
    height: auto;
    min-height: 100vh;
  }

  @media (max-width: 480px) {
    padding: 80px 15px 40px 15px;
  }
}

/* 左侧侧边栏 */
.sidebar {
  width: 350px;
  height: 100vh;
  padding: 40px 0;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    padding: 80px 30px 40px 30px;
    background-color: var(--bg-light);
    z-index: 10;
    transition: var(--transition);
    overflow-y: auto;

    &.mobile-nav-open {
      right: 0;
    }
  }
}

.sidebar-content {
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

.profile {
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
}

.profile-name {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 8px;
  line-height: 1.1;

  &:hover {
    color: var(--accent-color);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
}

.profile-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--text-highlight);
  margin-bottom: 12px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.profile-description {
  font-size: 0.95rem;
  color: var(--text-color);
  max-width: 300px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
}

/* 导航菜单 */
.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    display: flex;
    gap: 12px;
  }
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: var(--text-color);
  text-decoration: none;
  padding: 8px 0;
  position: relative;
  letter-spacing: 0.5px;
  transition: var(--transition);

  &::before {
    content: '';
    width: 0;
    height: 1px;
    background-color: var(--accent-color);
    margin-right: 16px;
    transition: var(--transition);
  }

  &:hover,
  &.active {
    color: var(--text-light);

    &::before {
      width: 40px;
    }
  }

  &.active {
    color: var(--accent-color);
  }
}

/* 社交媒体链接 */
.social-links {
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 20px;
  }
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: var(--text-color);
  font-size: 1.25rem;
  text-decoration: none;
  transition: var(--transition);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: var(--accent-color);
    transform: translateY(-3px);
  }
}

/* 右侧主内容 */
.main-content {
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 80px 0;
  margin-left: 50px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--border-color);
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 0;
    height: auto;
    overflow-y: visible;
  }
}

.section {
  padding: 40px 0;

  &:first-child {
    padding-top: 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }
}

.section-title {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 30px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
}

/* About 内容 */
.about-content {
  max-width: 600px;

  p {
    margin-bottom: 16px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-color);
  }
}

/* 技能内容 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.skill-category {
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  transition: var(--transition);

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
  }
}

.skill-category-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 16px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  display: inline-block;
  padding: 6px 12px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.85rem;
  color: var(--accent-color);
  transition: var(--transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--bg-color);
  }
}

/* 工作经历 */
.experience-list {
  max-width: 600px;
}

.experience-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 8px;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
}

.experience-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 4px;
}

.experience-company {
  font-size: 0.9rem;
  color: var(--accent-color);
}

.experience-period {
  font-size: 0.85rem;
  color: var(--text-color);
  white-space: nowrap;
}

.experience-description {
  font-size: 0.9rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-top: 12px;
  padding-left: 0;
}

/* 联系方式 */
.contact-content {
  max-width: 500px;

  > p {
    margin-bottom: 24px;
    font-size: 0.95rem;
    line-height: 1.7;
  }
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.95rem;
  color: var(--text-color);
  text-decoration: none;
  transition: var(--transition);

  &:hover {
    color: var(--accent-color);
  }

  i {
    width: 24px;
    text-align: center;
    color: var(--accent-color);
  }
}

/* 微信内联样式 */
.wechat-method {
  align-items: flex-start;
  padding-top: 8px;
  padding-bottom: 8px;
}

.wechat-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wechat-label {
  font-size: 0.95rem;
  color: var(--text-color);
}

.wechat-qrcode-inline {
  display: inline-block;
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  padding: 8px;
  transition: var(--transition);

  &:hover {
    border-color: var(--accent-color);
  }
}

.wechat-img-inline {
  width: 120px;
  height: 120px;
  object-fit: contain;
  border-radius: 4px;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
}

/* 项目经历 */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.project-card {
  background-color: var(--bg-light);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
  }

  @media (max-width: 480px) {
    padding: 16px;
  }
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-light);
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
}

.click-hint-icon {
  font-size: 0.85rem;
  color: var(--accent-color);
  opacity: 0.7;
  transition: var(--transition);
}

.project-card:hover .click-hint-icon {
  opacity: 1;
  transform: translate(2px, -2px);
}

.project-tag {
  display: inline-block;
  padding: 4px 12px;
  background-color: var(--accent-color);
  color: var(--bg-color);
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
}

.project-description {
  font-size: 0.9rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.tech-tag {
  display: inline-block;
  padding: 4px 10px;
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  font-size: 0.8rem;
  color: var(--accent-color);
  transition: var(--transition);

  &:hover {
    background-color: var(--accent-color);
    color: var(--bg-color);
  }
}

// .project-achievements {
//   margin-top: 16px;
//   padding-top: 16px;
//   border-top: 1px solid var(--border-color);

//   h4 {
//     font-size: 0.9rem;
//     font-weight: 600;
//     color: var(--text-light);
//     margin-bottom: 12px;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 0;

//     li {
//       position: relative;
//       padding-left: 18px;
//       font-size: 0.85rem;
//       color: var(--text-color);
//       line-height: 1.5;
//       margin-bottom: 8px;

//       &::before {
//         content: '▹';
//         position: absolute;
//         left: 0;
//         color: var(--accent-color);
//         font-weight: 600;
//       }

//       @media (max-width: 480px) {
//         font-size: 0.8rem;
//       }
//     }
//   }
// }

.click-hint {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border-color);
  font-size: 0.85rem;
  color: var(--text-color);
  opacity: 0.8;
  transition: var(--transition);

  i {
    color: var(--accent-color);
  }
}

.project-card:hover .click-hint {
  opacity: 1;
  color: var(--accent-color);
}

/* 页脚 */
.site-footer {
  padding: 40px 0 0 0;
  text-align: center;

  p {
    font-size: 0.8rem;
    color: var(--text-color);
  }
}

/* 动画效果 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  animation: fadeInUp 0.5s ease-out;
}
</style>
