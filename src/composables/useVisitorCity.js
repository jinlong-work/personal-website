import { onBeforeUnmount, readonly, ref, watch } from 'vue'
import { getVisitorCity } from '@/services/visitorCity'

export function useVisitorCity(position) {
  const city = ref('')
  let controller

  watch(
    position,
    async (coordinates) => {
      controller?.abort()
      city.value = ''
      if (!coordinates) return
      const current = new AbortController()
      controller = current
      try {
        const name = await getVisitorCity(coordinates, { signal: current.signal })
        if (!current.signal.aborted && controller === current) city.value = name
      } catch {
        // City recognition is optional; the globe and coordinate label remain available.
      }
    },
    { immediate: true }
  )

  onBeforeUnmount(() => controller?.abort())
  return { city: readonly(city) }
}
