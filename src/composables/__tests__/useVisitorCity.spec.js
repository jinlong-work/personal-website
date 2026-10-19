import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref, nextTick } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { useVisitorCity } from '@/composables/useVisitorCity'
import { getVisitorCity } from '@/services/visitorCity'

vi.mock('@/services/visitorCity', () => ({ getVisitorCity: vi.fn() }))
let wrapper, position, city

beforeEach(() => {
  vi.clearAllMocks()
  position = ref(null)
  wrapper = mount({
    setup() {
      ;({ city } = useVisitorCity(position))
      return () => null
    }
  })
})
afterEach(() => wrapper.unmount())

describe('visitor city recognition', () => {
  it('starts city lookup only after location has been granted', async () => {
    expect(getVisitorCity).not.toHaveBeenCalled()
    getVisitorCity.mockResolvedValue('重庆')
    position.value = { longitude: 106.55, latitude: 29.61 }
    await flushPromises()
    expect(city.value).toBe('重庆')
  })

  it('keeps the generic label when the city is absent or the service fails', async () => {
    getVisitorCity.mockResolvedValueOnce('').mockRejectedValueOnce(new Error('Unavailable'))
    position.value = { longitude: 0, latitude: 0 }
    await flushPromises()
    expect(city.value).toBe('')
    position.value = { longitude: 1, latitude: 1 }
    await flushPromises()
    expect(city.value).toBe('')
  })

  it('cancels stale lookups so an old response cannot name a new location', async () => {
    let oldResponse
    getVisitorCity
      .mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            oldResponse = resolve
          })
      )
      .mockResolvedValueOnce('杭州')
    position.value = { longitude: 106, latitude: 29 }
    await nextTick()
    const oldSignal = getVisitorCity.mock.calls[0][1].signal
    position.value = { longitude: 120, latitude: 30 }
    await flushPromises()
    expect(oldSignal.aborted).toBe(true)
    oldResponse('重庆')
    await flushPromises()
    expect(city.value).toBe('杭州')
  })

  it('ignores delayed responses after leaving the page', async () => {
    let response
    getVisitorCity.mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          response = resolve
        })
    )
    position.value = { longitude: 106, latitude: 29 }
    await nextTick()
    const signal = getVisitorCity.mock.calls[0][1].signal
    wrapper.unmount()
    response('重庆')
    await flushPromises()
    expect(signal.aborted).toBe(true)
    expect(city.value).toBe('')
  })
})
