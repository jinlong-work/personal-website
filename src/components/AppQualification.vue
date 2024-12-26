<template>
  <section class="qualification section">
    <h2 class="section__title">
      {{ $t('qualification__title') }}
    </h2>
    <span class="section__subtitle">{{ $t('qualification__subtitle') }}</span>
    <div class="container">
      <div class="qualification__tabs">
        <div
          :class="[curSeleced === 'education' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex"
          @click="curSeleced = 'education'"
        >
          <i class="fa-solid fa-graduation-cap qualification__icon"></i>

          <span>{{ $t('education') }}</span>
        </div>

        <div
          :class="[curSeleced === 'work' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex"
          @click="curSeleced = 'work'"
        >
          <i class="fa-solid fa-briefcase qualification__icon"></i>
          <span>{{ $t('work') }}</span>
        </div>
      </div>
      <div class="qualification__sections">
        <!--==================== QUALIFICATION CONTENT 1 ====================-->
        <div id="education" v-show="curSeleced === 'education'">
          <TheQualificationItemVue :list="educationList"></TheQualificationItemVue>
        </div>
        <!--==================== QUALIFICATION CONTENT 2 ====================-->
        <div class="qualification__content" v-show="curSeleced === 'work'">
          <TheQualificationItemVue :list="workList"></TheQualificationItemVue>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import TheQualificationItemVue from './TheQualificationItem.vue'

// 当前选中的是教育还是工作
const curSeleced = ref('education')
// i18n 对应 key
const educationList = ref([
  {
    title: 'qualification1__title',
    describe: 'qualification1__describe',
    time: '2019.09-2023.06'
  },
  {
    title: 'qualification2__title',
    describe: 'qualification2__describe',
    time: '2024.03-至今'
  }
])
const workList = ref([
  {
    title: 'qualification3__title',
    describe: 'qualification3__describe',
    time: '2022.07 - 2022.09'
  }
])
</script>
<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.qualification {
  &__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);
    @include min-screen(768px) {
      justify-content: center;
    }
  }
  &__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;
    &:hover {
      color: var(--first-color);
    }
    &--active {
      color: var(--first-color);
    }
    @include min-screen(768px) {
      margin: 0 var(--mb-1);
    }
  }
  &__icon {
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
  }
  &__sections {
    @include min-screen(568px) {
      display: grid;
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
    @include min-screen(768px) {
      grid-template-columns: 0.5fr;
    }
  }
}
</style>
