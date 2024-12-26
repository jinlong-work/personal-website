<template>
  <section class="skills section" id="skills">
    <h2 class="section__title skills__title">
      <i class="fa-solid fa-computer skills__icon"></i>{{ $t('skills__title') }}
    </h2>
    <span class="section__subtitle">{{ $t('skills__subtitle') }}</span>

    <div class="skills__container container grid">
      <div>
        <div class="skills__content">
          <div class="skills__list grid">
            <div v-for="skill in skills" :key="skill.title">
              <div class="skills__titles">
                <h3 class="skills__name">{{ skill.title }}</h3>
              </div>
              <div class="skills__bar">
                <div class="skills__percentage" :style="`width: ${skill.percentage}`"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'

const skills = ref([
  {
    title: 'HTML',
    percentage: '95%'
  },
  {
    title: 'CSS',
    percentage: '80%'
  },
  {
    title: 'SASS',
    percentage: '60%'
  },
  {
    title: 'JavaScript',
    percentage: '80%'
  },
  {
    title: 'Vue',
    percentage: '80%'
  },
  {
    title: 'OpenLayers',
    percentage: '85%'
  },
  {
    title: 'MapBox',
    percentage: '80%'
  },
  {
    title: 'Cesium',
    percentage: '85%'
  },
  {
    title: 'Three.js',
    percentage: '60%'
  },

  {
    title: 'WebGL',
    percentage: '60%'
  },
])
</script>
<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.skills {
  &__container {
    row-gap: 0;
  }
  &__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }
  &__icon {
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }
  &__title {
    margin-bottom: var(--mb-0-75);
  }
  &__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }
  &__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }
  &__list {
    row-gap: 1.5rem;
    padding: 0 2.7rem;
    transition: 0.4s;
  }
  &__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }
  &__bar {
    background-color: var(--first-color-lighter);
  }
  &__percentage {
    height: 5px;
    border-radius: 0.25rem;
    display: block;
    background-color: var(--first-color);
  }
}
</style>
