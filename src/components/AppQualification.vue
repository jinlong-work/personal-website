<template>
  <section class="qualification section">
    <h2 class="section__title">学习教育经历</h2>
    <span class="section__subtitle">个人履历</span>
    <div class="container">
      <div class="qualification__tabs">
        <div
          :class="[curSeleced === 'education' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex"
          @click="curSeleced = 'education'"
        >
          <i class="fa-solid fa-graduation-cap qualification__icon"></i>

          <span>教育</span>
        </div>

        <div
          :class="[curSeleced === 'work' ? 'qualification__button--active' : '']"
          class="qualification__button button--flex"
          @click="curSeleced = 'work'"
        >
          <i class="fa-solid fa-briefcase qualification__icon"></i>
          <span>实习</span>
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
// 直接使用中文内容
const educationList = ref([
  {
    title: '地理信息科学',
    describe: '湖北大学',
    time: '2019.09-2023.06'
  },
  {
    title: 'WebGIS开发',
    describe: '武汉新中地+自学',
    time: '2024.03-至今'
  }
])
const workList = ref([
  {
    title: 'WebGIS开发实习生',
    describe: '武汉中地数码公司',
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
