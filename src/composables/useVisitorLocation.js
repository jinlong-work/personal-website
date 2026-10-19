import { onBeforeUnmount, readonly, ref } from 'vue'

export function useVisitorLocation() {
  const position = ref(null)
  const status = ref('idle')
  let requestId = 0
  let timeout

  function locate() {
    if (status.value === 'locating') return
    if (!window.isSecureContext) {
      status.value = 'insecure'
      return
    }
    if (!navigator.geolocation) {
      status.value = 'unsupported'
      return
    }
    const currentRequest = ++requestId
    status.value = 'locating'
    const finish = (nextStatus, coordinates) => {
      if (requestId !== currentRequest) return
      ++requestId
      clearTimeout(timeout)
      if (coordinates) position.value = coordinates
      status.value = nextStatus
    }
    // Ignore late callbacks if permission is left unanswered or the component is removed.
    timeout = setTimeout(() => finish('timeout'), 15000)
    try {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          const { longitude, latitude, accuracy } = coords
          if (
            !Number.isFinite(longitude) ||
            !Number.isFinite(latitude) ||
            longitude < -180 ||
            longitude > 180 ||
            latitude < -90 ||
            latitude > 90
          ) {
            finish('unavailable')
            return
          }
          finish('located', { longitude, latitude, accuracy })
        },
        (error) =>
          finish({ 1: 'denied', 2: 'unavailable', 3: 'timeout' }[error.code] || 'unavailable'),
        { enableHighAccuracy: false, timeout: 12000, maximumAge: 60000 }
      )
    } catch (error) {
      finish(error.name === 'SecurityError' ? 'denied' : 'unavailable')
    }
  }

  onBeforeUnmount(() => {
    ++requestId
    clearTimeout(timeout)
  })

  return { position: readonly(position), status: readonly(status), locate }
}
