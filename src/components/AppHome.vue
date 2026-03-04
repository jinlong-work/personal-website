<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <!-- 包括动态展示打字特效，主要介绍 -->
      <div class="home__content grid">
        <!-- <div class="home__social">
          <a href="" target="_blank">
            <i class="home__icon"></i>
          </a>
          <a href="" target="_blank">
            <i class="home__icon"></i>
          </a>
        </div> -->
        <div class="home__three" id="home__three">
          <MyOfficeScene></MyOfficeScene>
        </div>

        <div class="home__data">
          <h1 class="home__title">
            {{ titleTextArr.join('') }}<span class="home__columeline">|</span>
          </h1>
          <h3 class="home__subtitle">
            {{ $t('home__subtitle') }}
          </h3>
          <p class="home__description">
            {{ $t('home__description') }}
          </p>
          <a
            href="#contact"
            class="button button-flex"
            @click="scrollToSection($event, '#contact')"
          >
            <span>{{ $t('home__contact') }}</span>
            <i class="fa-solid fa-right-long button__icon"></i>
          </a>
        </div>
      </div>
      <div class="home__scroll">
        <a href="#about" class="button--flex" @click="scrollToSection($event, '#about')">
          <span>{{ $t('home__scroll-name') }}</span>
          <i class="fa-solid fa-arrow-down home__arrow"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import MyOfficeScene from '@/components/MyOfficeScene.vue'
import { ref, getCurrentInstance } from 'vue'

// 打字效果
const {
  appContext: {
    config: { globalProperties }
  }
} = getCurrentInstance()
const titleText = globalProperties.$t('home__title')
// 用于动态展示打字特效
const titleTextArr = ref([])
// 递归每隔500ms打一个字符，完成后隔2s再删除字符 循环
const writeText = (text, type) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      if (type === 'write') {
        titleTextArr.value.push(text[i])
      } else {
        titleTextArr.value.pop()
      }
      if (i === titleText.length - 1) {
        setTimeout(() => {
          writeText(text, type === 'write' ? 'wipe' : 'write')
        }, 2000)
      }
    }, i * 500)
  }
}
writeText(titleText, 'write')

// 平滑滚动到指定部分
const scrollToSection = (event, href) => {
  event.preventDefault()
  const targetId = href.substring(1) // 移除 '#'
  const targetElement = document.getElementById(targetId)

  if (targetElement) {
    const headerHeight = document.querySelector('.header')?.offsetHeight || 0
    const targetPosition = targetElement.offsetTop - headerHeight

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.home {
  &__container {
    gap: 1rem;
  }
  &__content {
    margin-bottom: var(--mb-3);
    grid-template-columns: 1fr 0fr;
    align-items: center;
    @include min-screen(768px) {
      padding-top: 5.5rem;
      column-gap: 2rem;
      padding-top: 3.5rem;
    }
    @include min-screen(350px) {
      grid-template-columns: 1fr 0fr;
    }
    @include min-screen(568px) {
      grid-template-columns: max-content 1fr 0fr;
    }
  }
  &__icon {
    font-size: 1.3rem;
    color: var(--first-color);
    transition: all 0.3s ease;
    &:hover {
      color: var(--first-color-alt);
      transform: translateY(-3px);
    }
  }

  &__blob {
    width: 200px;
    fill: var(--first-color);
  }

  &__three {
    height: 240px;
    transition: all 0.5s ease;
    @include min-screen(568px) {
      order: 1;
      height: 340px;
    }
    &:hover {
      transform: scale(1.05);
    }
  }

  &__data {
    max-width: 425px;
    grid-column: 1/3;
    animation: fadeIn 0.8s ease forwards;
    @include min-screen(568px) {
      grid-column: initial;
    }
  }
  &__columeline {
    animation: mydeamon 2s infinite;
  }
  @keyframes mydeamon {
    0% {
      transform: scale(3);
      opacity: 1;
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  &__title {
    font-size: var(--big-font-size);
    margin: 0.4rem 0;
    font-weight: var(--font-semi-bold);
    background: linear-gradient(90deg, var(--first-color), var(--first-color-alt));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__subtitle {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  &__description {
    margin-bottom: var(--mb-2);
    line-height: 1.6;
  }

  &__scroll {
    text-align: center;
    a {
      flex-direction: column;
      transition: all 0.3s ease;
    }
    color: var(--first-color);
    span {
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var(--font-medium);
    }
    &:hover {
      transform: translateY(0.25rem);
      a {
        color: var(--first-color-alt);
      }
    }
  }
  &__arrow {
    font-size: 2rem;
    font-weight: 1000;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(5px);
    }
  }
}
</style>
