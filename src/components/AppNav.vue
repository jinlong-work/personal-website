<template>
  <nav class="nav container">
    <!-- logo -->
    <a href="#" class="nav__logo">个人网站</a>

    <div :class="['nav__menu', menuShow ? 'nav__menu--show' : '']">
      <ul class="nav__list grid">
        <li class="nav__item" v-for="item in menuList" :key="item.name">
          <a :href="item.href" class="nav__link">
            <i class="nav__icon" :class="[item.icon]"></i>
            <p>{{ $t(item.name) }}</p>
          </a>
        </li>

        <li class="nav__item">
          <div class="nav__link" @click="changeLanguage">
            <i class="fa-solid fa-language nav__icon nav__icon--translate"></i>
            <a class="nav__link" id="translate">中/en</a>
          </div>
        </li>
      </ul>
      <i class="fa-solid fa-xmark nav__close nav__icon" @click="menuShow = false"></i>
    </div>

    <div class="nav__btns">
      <i
        :class="['fa-regular', theme === 'dark' ? 'fa-sun' : 'fa-moon', 'nav__theme']"
        id="theme-button"
        @click="toggleTheme"
      >
      </i>
      <div class="nav__toggle" @click="menuShow = true">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useThemeState } from '@/store'
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

// 主题
const { theme, toggleTheme } = useThemeState()
// 响应式移动端时 点击菜单图标
const menuShow = ref(false)
// 菜单列表
const menuList = ref([
  {
    name: 'home',
    href: '#home',
    icon: 'fa-solid fa-house'
  },
  {
    name: 'about',
    href: '#about',
    icon: 'fa-regular fa-address-card'
  },
  {
    name: 'skills',
    href: '#skills',
    icon: 'fa-solid fa-kitchen-set'
  },
  {
    name: 'portfolio',
    href: '#portfolio',
    icon: 'fa-solid fa-briefcase'
  },
  {
    name: 'contact',
    href: '#contact',
    icon: 'fa-solid fa-tty'
  }
])
// 切换语言
const { locale } = useI18n()
const changeLanguage = () => {
  locale.value = locale.value === 'zh' ? 'en' : 'zh'
  localStorage.setItem('i18n', locale.value)
}
</script>

<style lang="scss" scoped>
@import '../styles/tools/_sassMagic.scss';
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  @include min-screen(768px) {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }
  #translate {
    @include min-screen(768px) {
      font-size: 0;
    }
  }
  &__logo {
    color: var(--title-color);
    font-weight: var(--font-medium);
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &:hover {
      color: var(--first-color);
      transform: scale(1.05);
    }
  }
  &__menu {
    &--show {
      bottom: 0 !important;
    }
    @include min-screen(768px) {
      margin-left: auto;
    }
    @include max-screen(767px) {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 2rem 1.5rem 4rem;
      box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
      border-radius: 1.5rem 1.5rem 0 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    @include max-screen(350px) {
      padding: 2rem 0.25rem 4rem;
    }
  }
  &__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    @include max-screen(350px) {
      column-gap: 0;
    }
    @include min-screen(768px) {
      display: flex;
      column-gap: 2rem;
    }
  }
  &__item {
    align-items: center;
    @include min-screen(768px) {
      align-content: center;
      display: flex;
      flex-wrap: wrap;
    }
  }
  &__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    cursor: pointer;
    text-transform: capitalize;
    transition: all 0.3s ease;
    position: relative;
    &:hover {
      color: var(--first-color);
      svg {
        fill: var(--first-color);
        transform: translateY(-2px);
      }
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: var(--first-color);
      transition: width 0.3s ease;
    }
    &:hover:after {
      width: 100%;
    }
  }
  &__btns {
    display: flex;
    align-items: center;
  }
  &__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    @include min-screen(768px) {
      display: none;
    }
    &:hover {
      color: var(--first-color);
      transform: rotate(90deg);
    }
  }
  &__close {
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    cursor: pointer;
    color: var(--first-color);
    transition: all 0.3s ease;
    &:hover {
      color: var(--first-color-alt);
      transform: scale(1.1);
    }
    @include min-screen(768px) {
      display: none;
    }
  }
  &__icon {
    font-size: 1.2rem;
    transition: all 0.3s ease;
    &--translate {
      @include min-screen(768px) {
        display: block !important;
        font-size: 1.5rem;
      }
    }
    @include min-screen(768px) {
      display: none;
    }
  }
  &__theme {
    font-size: 1.2rem;
    color: var(--title-color);
    margin-right: var(--mb-1);
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      color: var(--first-color);
      transform: rotate(180deg);
    }
    @include min-screen(768px) {
      font-size: 1.4rem;
    }
  }
}
</style>
