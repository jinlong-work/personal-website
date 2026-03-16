<template>
  <section class="skills section" id="skills">
    <h2 class="section__title skills__title">
      <i class="fa-solid fa-computer skills__icon"></i>技能
    </h2>
    <span class="section__subtitle">技术水平</span>

    <div class="skills__container container">
      <!-- Web Development Skills -->
      <div class="skills__category">
        <h3 class="skills__category-title">Web开发</h3>
        <div class="skills__grid">
          <div v-for="skill in webSkills" :key="skill.title" class="skills__item">
            <div class="skills__info">
              <span class="skills__name">{{ skill.title }}</span>
              <span class="skills__level">{{ skill.percentage }}</span>
            </div>
            <div class="skills__progress">
              <div
                class="skills__progress-bar"
                :style="`width: 0%`"
                :data-width="skill.percentage"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- GIS Technologies Skills -->
      <div class="skills__category">
        <h3 class="skills__category-title">GIS技术</h3>
        <div class="skills__grid">
          <div v-for="skill in gisSkills" :key="skill.title" class="skills__item">
            <div class="skills__info">
              <span class="skills__name">{{ skill.title }}</span>
              <span class="skills__level">{{ skill.percentage }}</span>
            </div>
            <div class="skills__progress">
              <div
                class="skills__progress-bar"
                :style="`width: 0%`"
                :data-width="skill.percentage"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- GIS Software Skills -->
      <div class="skills__category">
        <h3 class="skills__category-title">GIS软件</h3>
        <div class="skills__grid">
          <div v-for="skill in softwareSkills" :key="skill.title" class="skills__item">
            <div class="skills__info">
              <span class="skills__name">{{ skill.title }}</span>
              <span class="skills__level">{{ skill.percentage }}</span>
            </div>
            <div class="skills__progress">
              <div
                class="skills__progress-bar"
                :style="`width: 0%`"
                :data-width="skill.percentage"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Database & Tools Skills -->
      <div class="skills__category">
        <h3 class="skills__category-title">数据库与工具</h3>
        <div class="skills__grid">
          <div v-for="skill in dbToolsSkills" :key="skill.title" class="skills__item">
            <div class="skills__info">
              <span class="skills__name">{{ skill.title }}</span>
              <span class="skills__level">{{ skill.percentage }}</span>
            </div>
            <div class="skills__progress">
              <div
                class="skills__progress-bar"
                :style="`width: 0%`"
                :data-width="skill.percentage"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const webSkills = ref([
  { title: 'HTML5', percentage: '95%' },
  { title: 'CSS3/SCSS', percentage: '85%' },
  { title: 'JavaScript (ES6+)', percentage: '85%' },
  { title: 'TypeScript', percentage: '75%' },
  { title: 'Vue.js', percentage: '85%' },
  { title: 'React', percentage: '70%' },
  { title: 'WebGL', percentage: '65%' },
  { title: 'RESTful APIs', percentage: '80%' }
])

const gisSkills = ref([
  { title: 'OpenLayers', percentage: '90%' },
  { title: 'Mapbox GL JS', percentage: '85%' },
  { title: 'CesiumJS', percentage: '88%' },
  { title: 'Leaflet', percentage: '80%' },
  { title: 'GeoJSON', percentage: '95%' },
  { title: 'TopoJSON', percentage: '75%' },
  { title: 'TurboFan', percentage: '60%' },
  { title: 'Three.js (3D)', percentage: '70%' }
])

const softwareSkills = ref([
  { title: 'ArcGIS Pro', percentage: '85%' },
  { title: 'QGIS', percentage: '90%' },
  { title: 'ENVI', percentage: '75%' },
  { title: 'Global Mapper', percentage: '70%' },
  { title: 'AutoCAD Map 3D', percentage: '65%' }
])

const dbToolsSkills = ref([
  { title: 'PostGIS', percentage: '80%' },
  { title: 'MongoDB', percentage: '75%' },
  { title: 'MySQL/PostgreSQL', percentage: '85%' },
  { title: 'Node.js', percentage: '80%' },
  { title: 'Git/GitHub', percentage: '90%' },
  { title: 'Docker', percentage: '70%' }
])

onMounted(() => {
  // Animate progress bars on mount
  setTimeout(() => {
    const progressBars = document.querySelectorAll('.skills__progress-bar')
    progressBars.forEach((bar) => {
      const width = bar.getAttribute('data-width')
      bar.style.width = width
      bar.style.transition = 'width 1.5s ease-out'
    })
  }, 300)
})
</script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';

.skills {
  &__container {
    row-gap: 3rem;
  }

  &__title {
    margin-bottom: var(--mb-0-75);
  }

  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
    margin-bottom: 2rem;
  }

  &__category {
    background-color: var(--container-color);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: 0 2px 10px var(--shadow-color);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-2px);
    }
  }

  &__category-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
    margin-bottom: 1.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--first-color-lighter);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  &__item {
    background-color: var(--body-color);
    border-radius: 0.5rem;
    padding: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--first-color-lighter);
    }
  }

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;
  }

  &__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--title-color);
  }

  &__level {
    font-size: var(--small-font-size);
    color: var(--first-color);
    font-weight: var(--font-medium);
  }

  &__progress {
    width: 100%;
    height: 6px;
    background-color: var(--first-color-lighter);
    border-radius: 3px;
    overflow: hidden;
  }

  &__progress-bar {
    height: 100%;
    background: linear-gradient(90deg, var(--first-color), var(--first-color-alt));
    border-radius: 3px;
    width: 0%;
    transition: width 1.5s ease-out;
  }

  &__icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  // Responsive adjustments
  @media screen and (max-width: 768px) {
    &__grid {
      grid-template-columns: 1fr;
    }

    &__category {
      padding: 1rem;
    }
  }
}
</style>
