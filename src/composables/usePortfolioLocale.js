import { ref, watch } from 'vue'
const locale = ref('zh')
try {
  if (localStorage.getItem('locale') === 'en') locale.value = 'en'
} catch {
  /* Storage is optional. */
}
watch(
  locale,
  (value) => {
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
    document.title =
      value === 'zh'
        ? '曹进龙 — WebGIS 开发者 · 个人作品集'
        : 'Jinlong Cao — WebGIS Developer · Portfolio'
    try {
      localStorage.setItem('locale', value)
    } catch {
      /* Storage is optional. */
    }
  },
  { immediate: true }
)
export function usePortfolioLocale() {
  return {
    locale,
    toggleLocale: () => {
      locale.value = locale.value === 'zh' ? 'en' : 'zh'
    }
  }
}
