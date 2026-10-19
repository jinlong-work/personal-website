import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const TURN_DURATION = 680
const nativeKeys =
  'input, textarea, select, [contenteditable]:not([contenteditable="false"]), [role="slider"], [role="dialog"], .earth-scene, .ai-panel'

export function usePortfolioBook({ pages, stage, motionEnabled, blocked }) {
  const activeId = ref('home')
  const leavingId = ref(null)
  const direction = ref('forward')
  const turning = ref(false)
  const activeIndex = computed(() =>
    Math.max(
      0,
      pages.value.findIndex((page) => page.id === activeId.value)
    )
  )
  const currentPage = computed(() => pages.value[activeIndex.value])
  const canPrevious = computed(() => activeIndex.value > 0)
  const canNext = computed(() => activeIndex.value < pages.value.length - 1)
  const progress = computed(() => (activeIndex.value + 1) / pages.value.length)
  const scrollPositions = new Map()
  let turnTimer
  let quietTimer
  let focusAfterTurn = false
  let wheelLocked = false
  let wheelAmount = 0
  let lastWheelAt = 0
  let pointerStart
  let suppressClickUntil = 0

  function activePanel() {
    return Array.from(stage.value?.children || []).find(
      (element) => element.dataset.bookPage === activeId.value
    )
  }
  function finishTurn() {
    clearTimeout(turnTimer)
    leavingId.value = null
    turning.value = false
    const shouldFocus = focusAfterTurn && !blocked.value
    focusAfterTurn = false
    if (shouldFocus) nextTick(() => activePanel()?.focus({ preventScroll: true }))
  }
  function goTo(id, { focus = false } = {}) {
    const index = pages.value.findIndex((page) => page.id === id)
    if (index < 0 || blocked.value || turning.value || id === activeId.value) return false
    const previous = activePanel()
    focusAfterTurn = focus || !!previous?.contains(document.activeElement)
    direction.value = index > activeIndex.value ? 'forward' : 'backward'
    leavingId.value = activeId.value
    activeId.value = id
    turning.value = motionEnabled.value
    nextTick(() => {
      const panel = activePanel()
      if (panel) panel.scrollTop = scrollPositions.get(id) || 0
    })
    if (turning.value) turnTimer = setTimeout(finishTurn, TURN_DURATION)
    else finishTurn()
    return true
  }
  function turnBy(offset, options) {
    const target = pages.value[activeIndex.value + offset]
    return target ? goTo(target.id, options) : false
  }
  function onPageScroll(event) {
    const panel = event.currentTarget
    if (panel.dataset.bookPage !== activeId.value) return
    scrollPositions.set(activeId.value, panel.scrollTop)
  }
  function canScroll(element, amount, horizontal = false) {
    const position = horizontal ? element.scrollLeft : element.scrollTop
    const maximum = horizontal
      ? element.scrollWidth - element.clientWidth
      : element.scrollHeight - element.clientHeight
    return maximum > 2 && (amount < 0 ? position > 2 : position < maximum - 2)
  }
  function nestedScroll(target, amount, horizontal) {
    for (let node = target; node && node !== stage.value; node = node.parentElement) {
      if (node instanceof HTMLElement && canScroll(node, amount, horizontal)) {
        const overflow = getComputedStyle(node)[horizontal ? 'overflowX' : 'overflowY']
        if (/(auto|scroll)/.test(overflow)) return true
      }
    }
    return false
  }
  function onWheel(event) {
    if (event.ctrlKey || event.metaKey || blocked.value || event.target.closest(nativeKeys)) return
    const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY) * 1.2
    if (!horizontal) {
      wheelAmount = 0
      return
    }
    const amount =
      event.deltaX *
      (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? stage.value.clientWidth : 1)
    if (!amount) return
    if (turning.value || wheelLocked) {
      event.preventDefault()
      wheelLocked = true
      clearTimeout(quietTimer)
      quietTimer = setTimeout(() => {
        wheelLocked = false
      }, 240)
      return
    }
    if (nestedScroll(event.target, amount, horizontal)) {
      wheelAmount = 0
      return
    }
    event.preventDefault()
    const now = performance.now()
    if (now - lastWheelAt > 180 || Math.sign(amount) !== Math.sign(wheelAmount)) wheelAmount = 0
    lastWheelAt = now
    wheelAmount += amount
    if (Math.abs(wheelAmount) < 55) return
    if (turnBy(wheelAmount > 0 ? 1 : -1)) {
      wheelLocked = true
      clearTimeout(quietTimer)
      quietTimer = setTimeout(() => {
        wheelLocked = false
      }, 240)
    }
    wheelAmount = 0
  }
  function onKeydown(event) {
    if (
      event.defaultPrevented ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      blocked.value ||
      event.target.closest?.(nativeKeys)
    )
      return
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return
    if (turnBy(event.key === 'ArrowRight' ? 1 : -1, { focus: true })) event.preventDefault()
  }
  function onPointerDown(event) {
    if (
      event.pointerType !== 'touch' ||
      !event.isPrimary ||
      blocked.value ||
      turning.value ||
      event.target.closest(nativeKeys)
    )
      return
    pointerStart = {
      id: event.pointerId,
      x: event.clientX,
      y: event.clientY,
      time: performance.now()
    }
  }
  function onPointerUp(event) {
    const start = pointerStart
    pointerStart = null
    if (
      !start ||
      start.id !== event.pointerId ||
      blocked.value ||
      performance.now() - start.time > 1200
    )
      return
    const x = event.clientX - start.x,
      y = event.clientY - start.y
    if (Math.abs(x) > 55 && Math.abs(x) > Math.abs(y) * 1.35 && turnBy(x < 0 ? 1 : -1))
      suppressClickUntil = performance.now() + 450
  }
  function onPointerCancel() {
    pointerStart = null
  }
  function onClickCapture(event) {
    if (performance.now() < suppressClickUntil && event.detail !== 0) {
      event.preventDefault()
      event.stopPropagation()
    }
  }
  watch(
    () => pages.value.map((page) => page.id),
    (ids, previous) => {
      if (!ids.includes(activeId.value)) {
        const index = Math.max(0, previous?.indexOf(activeId.value) || 0)
        finishTurn()
        activeId.value = ids[Math.min(index, ids.length - 1)] || 'home'
      }
    }
  )
  watch(motionEnabled, (enabled) => {
    if (!enabled) finishTurn()
  })
  watch(blocked, (value) => {
    if (value) {
      pointerStart = null
      finishTurn()
    }
  })
  onMounted(() => window.addEventListener('keydown', onKeydown))
  onBeforeUnmount(() => {
    clearTimeout(turnTimer)
    clearTimeout(quietTimer)
    window.removeEventListener('keydown', onKeydown)
  })
  return {
    activeId,
    activeIndex,
    currentPage,
    leavingId,
    direction,
    turning,
    canPrevious,
    canNext,
    progress,
    goTo,
    turnBy,
    onPageScroll,
    onWheel,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
    onClickCapture
  }
}
