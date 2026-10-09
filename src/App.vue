<template>
  <div class="app-shell">
    <el-config-provider :locale="elementLocale"><RouterView /></el-config-provider>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { usePortfolioLocale } from '@/composables/usePortfolioLocale'
const { locale } = usePortfolioLocale()
const elementLocale = computed(() => (locale.value === 'zh' ? zhCn : en))
</script>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', 'Microsoft YaHei', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: clip;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
