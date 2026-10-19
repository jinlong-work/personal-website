import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { useVisitorLocation } from '@/composables/useVisitorLocation'

let wrapper
let location
let getCurrentPosition

beforeEach(() => {
  vi.useFakeTimers()
  getCurrentPosition = vi.fn()
  vi.stubGlobal('isSecureContext', true)
  vi.stubGlobal('navigator', { geolocation: { getCurrentPosition } })
  wrapper = mount({
    setup() {
      location = useVisitorLocation()
      return () => null
    }
  })
})

afterEach(() => {
  wrapper.unmount()
  vi.clearAllTimers()
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('visitor location', () => {
  it('requests permission only after an explicit locate action and keeps valid zero coordinates', () => {
    expect(getCurrentPosition).not.toHaveBeenCalled()
    expect(location.position.value).toBeNull()
    location.locate()
    expect(location.status.value).toBe('locating')
    getCurrentPosition.mock.calls[0][0]({ coords: { latitude: 0, longitude: 0, accuracy: 100 } })
    expect(location.position.value).toEqual({ latitude: 0, longitude: 0, accuracy: 100 })
    expect(location.status.value).toBe('located')
    vi.advanceTimersByTime(15000)
    expect(location.status.value).toBe('located')
  })

  it('prevents duplicate requests while permission is pending', () => {
    location.locate()
    location.locate()
    expect(getCurrentPosition).toHaveBeenCalledTimes(1)
  })

  it.each([
    [1, 'denied'],
    [2, 'unavailable'],
    [3, 'timeout']
  ])('handles browser error %s without inventing a location and allows retry', (code, status) => {
    location.locate()
    getCurrentPosition.mock.calls[0][1]({ code })
    expect(location.status.value).toBe(status)
    expect(location.position.value).toBeNull()
    location.locate()
    expect(getCurrentPosition).toHaveBeenCalledTimes(2)
    expect(location.status.value).toBe('locating')
  })

  it('times out unanswered permission and ignores late results from the old request', () => {
    location.locate()
    const staleSuccess = getCurrentPosition.mock.calls[0][0]
    vi.advanceTimersByTime(15000)
    expect(location.status.value).toBe('timeout')
    location.locate()
    staleSuccess({ coords: { latitude: 31, longitude: 121 } })
    expect(location.position.value).toBeNull()
    expect(location.status.value).toBe('locating')
    getCurrentPosition.mock.calls[1][0]({ coords: { latitude: -34, longitude: 151 } })
    expect(location.position.value).toMatchObject({ latitude: -34, longitude: 151 })
  })

  it('discards responses after leaving the page and clears its timeout', () => {
    location.locate()
    const success = getCurrentPosition.mock.calls[0][0]
    wrapper.unmount()
    expect(vi.getTimerCount()).toBe(0)
    success({ coords: { latitude: 31, longitude: 121 } })
    expect(location.position.value).toBeNull()
  })

  it.each([
    [91, 0],
    [0, 181],
    [NaN, 0],
    [0, Infinity]
  ])('rejects invalid coordinates %s, %s', (latitude, longitude) => {
    location.locate()
    getCurrentPosition.mock.calls[0][0]({ coords: { latitude, longitude } })
    expect(location.status.value).toBe('unavailable')
    expect(location.position.value).toBeNull()
  })

  it('does not request location when the page is insecure or the browser lacks support', () => {
    vi.stubGlobal('isSecureContext', false)
    location.locate()
    expect(location.status.value).toBe('insecure')
    vi.stubGlobal('isSecureContext', true)
    vi.stubGlobal('navigator', {})
    location.locate()
    expect(location.status.value).toBe('unsupported')
    expect(getCurrentPosition).not.toHaveBeenCalled()
  })
})
