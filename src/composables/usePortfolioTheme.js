import { computed, readonly, ref, watch } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const theme = ref('dark')

try {
  if (localStorage.getItem(STORAGE_KEY) === 'light') theme.value = 'light'
} catch {
  // Theme switching remains available when browser storage is disabled.
}

watch(
  theme,
  (value) => {
    const root = document.documentElement
    root.dataset.portfolioTheme = value
    root.classList.toggle('light-theme', value === 'light')
    root.classList.toggle('dark-theme', value === 'dark')
    try {
      localStorage.setItem(STORAGE_KEY, value)
    } catch {
      // Saving the preference is optional.
    }
  },
  { immediate: true, flush: 'sync' }
)

export function usePortfolioTheme() {
  return {
    theme: readonly(theme),
    isDark: computed(() => theme.value === 'dark'),
    toggleTheme: () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark'
    }
  }
}
