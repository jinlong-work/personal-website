<template>
  <div class="site-wrapper">
    <!-- Three.js 3D 背景 -->
    <div class="three-background">
      <ThreeScene />
    </div>

    <!-- 移动端导航遮罩 -->
    <div
      class="nav-overlay"
      :class="{ active: isMobileNavOpen }"
      @click="isMobileNavOpen = false"
    ></div>

    <!-- 项目详情弹窗 -->
    <ProjectDetailModal
      :visible="isModalVisible"
      :project="selectedProject"
      @close="closeModal"
    />

    <!-- 移动端顶部栏 -->
    <div class="mobile-header">
      <div class="mobile-profile">
        <h1 class="mobile-name">曹进龙</h1>
      </div>
      <button class="menu-toggle" @click="isMobileNavOpen = !isMobileNavOpen">
        <i :class="isMobileNavOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- 左侧固定侧边栏 -->
    <aside class="sidebar" :class="{ 'mobile-nav-open': isMobileNavOpen }">
      <div class="sidebar-content">
        <div class="profile">
          <h1 class="profile-name">曹进龙</h1>
          <h2 class="profile-title">高级 WebGIS 开发工程师</h2>
          <p class="profile-description">
            拥有多年 GIS 开发经验，专注于高性能 WebGIS 应用架构设计与研发
          </p>
        </div>

        <!-- 导航菜单 -->
        <nav class="nav">
          <a
            href="#about"
            class="nav-link"
            :class="{ active: activeSection === 'about' }"
            @click="closeMobileNav"
            >关于我</a
          >
          <a
            href="#skills"
            class="nav-link"
            :class="{ active: activeSection === 'skills' }"
            @click="closeMobileNav"
            >技术技能</a
          >
          <a
            href="#experience"
            class="nav-link"
            :class="{ active: activeSection === 'experience' }"
            @click="closeMobileNav"
            >工作经历</a
          >
          <a
            href="#projects"
            class="nav-link"
            :class="{ active: activeSection === 'projects' }"
            @click="closeMobileNav"
            >项目经历</a
          >
          <a
            href="#contact"
            class="nav-link"
            :class="{ active: activeSection === 'contact' }"
            @click="closeMobileNav"
            >联系方式</a
          >
        </nav>

        <!-- 社交媒体链接 -->
        <div class="social-links">
          <a
            href="https://github.com/jinlong-work"
            target="_blank"
            class="social-link"
            title="GitHub"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="mailto:1426559553@qq.com" class="social-link" title="Email">
            <i class="fa-solid fa-envelope"></i>
          </a>
        </div>
      </div>
    </aside>

    <!-- 右侧主内容区域 -->
    <main class="main-content" @scroll="handleScroll">
      <section id="about" class="section">
        <h2 class="section-title">关于我</h2>
        <div class="about-content">
          <p>
            我是曹进龙，一名拥有丰富经验的高级 WebGIS 开发工程师。自 2023
            年毕业于湖北大学地理信息科学专业以来，我一直专注于 WebGIS 领域的前沿技术研究与应用开发。
          </p>
          <p>
            在多年的技术实践中，我深入掌握了从前端可视化到后端空间数据处理的全栈开发技能，擅长设计和实现高性能、高并发的
            GIS 应用系统。我的专业领域包括但不限于： 2D/3D 地图可视化、空间数据分析、WebGL
            渲染优化、分布式空间索引架构等。
          </p>
          <p>
            我对地理信息系统的技术发展趋势保持敏锐的洞察力，致力于将先进的 Web 技术与传统 GIS
            领域深度融合，以解决复杂的空间信息处理与可视化挑战。
          </p>
          <p>
            我具备优秀的团队协作能力和架构设计能力，在多个大型 GIS
            项目中承担核心技术研发工作，积累了丰富的项目管理和技术沉淀经验。
          </p>
        </div>
      </section>

      <section id="skills" class="section">
        <h2 class="section-title">技术技能</h2>
        <div class="skills-grid">
          <!-- 2D/3D 地图可视化 -->
          <div class="skill-category">
            <h3 class="skill-category-title">2D/3D 地图可视化</h3>
            <div class="skill-list">
              <span class="skill-tag">OpenLayers</span>
              <span class="skill-tag">Mapbox GL JS</span>
              <span class="skill-tag">CesiumJS</span>
              <span class="skill-tag">Deck.gl</span>
              <span class="skill-tag">Leaflet</span>
              <span class="skill-tag">Three.js</span>
              <span class="skill-tag">WebGL/WebGPU</span>
            </div>
          </div>

          <!-- 空间数据处理 -->
          <div class="skill-category">
            <h3 class="skill-category-title">空间数据处理</h3>
            <div class="skill-list">
              <span class="skill-tag">PostGIS</span>
              <span class="skill-tag">GeoServer</span>
              <span class="skill-tag">GDAL/OGR</span>
              <span class="skill-tag">Turf.js</span>
              <span class="skill-tag">JTS</span>
              <span class="skill-tag">空间索引</span>
            </div>
          </div>

          <!-- 全栈开发 -->
          <div class="skill-category">
            <h3 class="skill-category-title">全栈开发</h3>
            <div class="skill-list">
              <span class="skill-tag">Vue.js / Nuxt</span>
              <span class="skill-tag">React / Next.js</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">Go</span>
            </div>
          </div>

          <!-- 高性能架构 -->
          <div class="skill-category">
            <h3 class="skill-category-title">高性能架构</h3>
            <div class="skill-list">
              <span class="skill-tag">矢量瓦片</span>
              <span class="skill-tag">渲染优化</span>
              <span class="skill-tag">负载均衡</span>
              <span class="skill-tag">Redis 缓存</span>
              <span class="skill-tag">Kubernetes</span>
              <span class="skill-tag">微服务</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" class="section">
        <h2 class="section-title">工作经历</h2>
        <div class="experience-list">
          <div class="experience-item">
            <div class="experience-header">
              <div class="experience-info">
                <h3 class="experience-title">高级 WebGIS 开发工程师</h3>
                <p class="experience-company">某大型软件公司</p>
              </div>
              <span class="experience-period">2023 - 至今</span>
            </div>
            <p class="experience-description">
              负责公司核心 WebGIS
              产品的架构设计与开发工作。主导完成了高性能矢量瓦片服务的研发，实现了地图渲染性能提升
              400%。
              设计并实现了空间分析引擎，支持复杂的空间查询和数据分析功能。负责团队技术指导和架构决策。
            </p>
          </div>
          <div class="experience-item">
            <div class="experience-header">
              <div class="experience-info">
                <h3 class="experience-title">WebGIS 开发工程师</h3>
                <p class="experience-company">武汉中地数码集团</p>
              </div>
              <span class="experience-period">2022 - 2023</span>
            </div>
            <p class="experience-description">
              参与多个国家级 GIS
              项目的开发工作。负责地图可视化模块的开发，实现了复杂的地图交互功能和数据展示。
              优化了地图渲染性能，解决了大数据量地图加载慢的问题。
            </p>
          </div>
          <div class="experience-item">
            <div class="experience-header">
              <div class="experience-info">
                <h3 class="experience-title">GIS 开发实习生</h3>
                <p class="experience-company">某地理信息研究所</p>
              </div>
              <span class="experience-period">2021 - 2022</span>
            </div>
            <p class="experience-description">
              参与土地利用规划系统的开发，负责空间数据处理和地图可视化功能。
              完成了土地变更调查数据处理工具的开发，提高了工作效率 60%。
            </p>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <h2 class="section-title">项目经历</h2>
        <div class="projects-grid">
          <div
            class="project-card"
            v-for="project in projects"
            :key="project.id"
            @click="showDetailDailog(project)"
          >
            <div class="project-header">
              <h3 class="project-title">{{ project.name }}</h3>
              <span class="project-tag">{{ project.type }}</span>
            </div>
            <p class="project-description">
              {{ project.description }}
            </p>
            <div class="project-technologies">
              <span class="tech-tag" v-for="value in project.technologies">{{ value }}</span>
            </div>
            <div class="project-achievements">
              <h4>主要职责：</h4>
              <ul>
                <li v-for="duty in project.achievements" :key="duty">
                  {{ duty }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <h2 class="section-title">联系方式</h2>
        <div class="contact-content">
          <p>
            期待与志同道合的技术伙伴交流合作。目前我对具有挑战性的 WebGIS
            高级开发岗位保持开放态度，欢迎通过以下方式联系我：
          </p>
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
              <span>广东惠州</span>
            </div>
            <a href="https://github.com/jinlong-work" target="_blank" class="contact-method">
              <i class="fa-brands fa-github"></i>
              <span>github.com/jinlong-work</span>
            </a>
          </div>
        </div>
      </section>

      <footer class="site-footer">
        <p>&copy; 2024 曹进龙. All rights reserved.</p>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ThreeScene from '@/components/ThreeScene.vue'
import ProjectDetailModal from '@/components/ProjectDetailModal.vue'
import { getProjects } from '@/api/api'

// 备用项目数据（内联在代码中，确保总能显示）
const fallbackProjects = [
  {
    id: 1,
    name: '海南国家调查地图基层网点系统',
    type: '大屏二维项目',
    description: '该项目是⼀个集⼤屏数据可视化、地理信息分析与后台运维管理于⼀体的综合性平台。主要用于展示和管理调查机构、专业及区域的分布与实时数据，通过"⼀张图"的形式实现对海南省调查资源的直观监管。',
    technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
    achievements: [
      '调查地图⼤屏开发：独立负责调查地图⼤屏的整体架构与开发，通过 ECharts 与Arcgis api for js，实现调查机构、调查专业及调查专业展示，支持多维度数据的实时动态渲染。',
      '调查经济地图⼤屏开发：此大屏主要展示海南省全体居民、城镇居民、农村居民的收入收支情况，支持一系列数据查看，使用Echarts绘制海南省大致地图进行数据展示。',
      '运维管理模块建设：开发配套的运维管理模块，运维管理模块负责管理大屏中的一系列数据的展示，包括调查机构、辅调员、调查证、调查网点管理。'
    ],
    images: ['/personal-website/img/调查一张图.jpg']
  },
  {
    id: 2,
    name: '深造村便民服务系统',
    type: '大屏三维项目',
    description: '该系统为大屏三维项目，属于琼中番响村智慧乡村项目，提供了村庄总览用于展示村庄概述、现状人口统计和领导小组。提供管理一张图板块，通过实时三维地图，用户可以直观地查看村庄规划和基础设施布局。',
    technologies: ['Vue 3', '超图版Cesium', 'Element Plus'],
    achievements: [
      '负责村庄总览大屏的开发工作，提供了村庄总览用于展示村庄概述、现状人口统计和领导小组。',
      '根据项目需求完成三维维地图界面开发与地图服务加载，实现服务切换及查询功能，支持弹窗移动。',
      '根据需求完成报建审查功能，用户可自行绘制区域、输入坐标来进行报建审查，判定绘制范围占用生态红线、林地、基本农田等的面积。'
    ],
    images: ['/personal-website/img/调查一张图.jpg']
  },
  {
    id: 3,
    name: '海南三维项目',
    type: '三维项目',
    description: '海南3D项目是⼀个基于Vue 2和Cesium构建的三维地理信息系统应用，专注于提供海南地区的三维地理空间分析和可视化功能。该项目通过集成Cesium的强大功能，实现了对海南地区地理数据的三维展示和交互。',
    technologies: ['Vue 3', 'ArcGIS API for JS', 'Element Plus', 'ECharts'],
    achievements: [
      '宜农资源分析：基于坡度分析计算符合条件的图斑面积，并输出可视化结果。支持三种获取分析区域方式：点击 ArcGIS 服务图斑、绘制矩形、上传文件。',
      '⽔⼟保持监管：绘制区域对地形开挖，计算不同地形服务在绘制区域范围内的挖⽅量差值，评估⽔⼟流失情况。',
      '交互功能：独立完成地图标绘系统（点线面体增删改查），多窗⼝对比分析功能以及比例尺组件开发。'
    ],
    images: ['/personal-website/img/调查一张图.jpg']
  }
]

const activeSection = ref('about')
const projects = ref([])
const isModalVisible = ref(false)
const selectedProject = ref({})
const isMobileNavOpen = ref(false)

const handleScroll = (event) => {
  const isMobile = window.innerWidth <= 768
  let scrollContainer
  let scrollTop

  if (isMobile) {
    scrollContainer = document
    scrollTop = window.scrollY
  } else {
    scrollContainer = event.target
    scrollTop = scrollContainer.scrollTop
  }

  const sections = document.querySelectorAll('.section')
  let current = 'about'

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    if (scrollTop >= sectionTop) {
      current = section.getAttribute('id')
    }
  })

  activeSection.value = current
}

const setupScrollBehavior = () => {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      const mainContent = document.querySelector('.main-content')

      if (targetElement) {
        // 检测是否是移动端
        const isMobile = window.innerWidth <= 768
        if (isMobile) {
          // 移动端使用 window 滚动
          const targetPosition = targetElement.offsetTop - 80 // 留出顶部栏高度
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        } else if (mainContent) {
          // 桌面端使用 main-content 滚动
          const targetPosition = targetElement.offsetTop - 40
          mainContent.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          })
        }
      }
    })
  })
}

// 移动端滚动监听
const handleMobileScroll = () => {
  if (window.innerWidth <= 768) {
    handleScroll({ target: document })
  }
}

const showDetailDailog = (project) => {
  selectedProject.value = project
  isModalVisible.value = true
}

const closeModal = () => {
  isModalVisible.value = false
  selectedProject.value = {}
}

const closeMobileNav = () => {
  isMobileNavOpen.value = false
}

onMounted(() => {
  setupScrollBehavior()
  window.addEventListener('scroll', handleMobileScroll)

  // 先尝试从 API 加载，如果失败则使用备用数据
  getProjects()
    .then((response) => {
      console.log('项目数据加载成功:', response)
      if (response && response.projects && response.projects.length > 0) {
        projects.value = response.projects
      } else {
        console.log('API 返回数据为空，使用备用数据')
        projects.value = fallbackProjects
      }
    })
    .catch((error) => {
      console.warn('获取项目数据失败，使用备用数据:', error)
      projects.value = fallbackProjects
    })
})

onUnmounted(() => {
  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach((link) => {
    link.removeEventListener('click', () => {})
  })
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
  opacity: 0.3;
  pointer-events: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-color: #0a192f;
  --bg-light: #112240;
  --text-color: #8892b0;
  --text-light: #ccd6f6;
  --text-highlight: #64ffda;
  --accent-color: #64ffda;
  --border-color: #233554;
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
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

  @media (max-width: 768px) {
    display: flex;
  }
}

.mobile-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-light);
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
  line-height: 1.5;

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

/* 技能网格 */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
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

  @media (max-width: 480px) {
    padding: 16px;
  }
}

.skill-category-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
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

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 5px 10px;
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

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

.project-achievements {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--border-color);

  h4 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 12px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      position: relative;
      padding-left: 18px;
      font-size: 0.85rem;
      color: var(--text-color);
      line-height: 1.5;
      margin-bottom: 8px;

      &::before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--accent-color);
        font-weight: 600;
      }

      @media (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }
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
