<template>
  <div class="earth-scene" ref="container">
    <div class="earth-caption" aria-hidden="true">
      <span>EXPLORING THE WORLD</span>
      <p>{{ copy.caption }}</p>
    </div>
    <div
      class="earth-stage"
      ref="stage"
      :class="{ 'is-ready': ready }"
      :tabindex="ready ? 0 : undefined"
      role="group"
      :aria-label="ready ? copy.description : copy.caption"
    >
      <div class="earth-fallback" aria-hidden="true">
        <div class="earth-fallback-sphere"></div>
        <i></i><i></i>
      </div>
      <canvas ref="canvas" aria-hidden="true"></canvas>
    </div>
    <span class="earth-axis" aria-hidden="true">N<br /><i></i><br />S</span>
    <div class="earth-location" :class="{ 'has-location': position }">
      <span v-if="position" class="earth-location-dot" aria-hidden="true"></span>
      <div class="earth-location-content">
        <strong v-if="position" class="earth-location-name" aria-live="polite">{{
          city ? copy.youAreIn.replace('{city}', city) : copy.youAreHere
        }}</strong>
        <span v-if="position" class="earth-coordinates">{{ coordinates }}</span>
        <button
          class="earth-locate"
          type="button"
          :disabled="!ready || locationStatus === 'locating'"
          :title="copy.locationPrivacy"
          @click="locateVisitor"
        >
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <circle cx="10" cy="10" r="5" />
            <circle cx="10" cy="10" r="1.5" />
            <path d="M10 1v3m0 12v3M1 10h3m12 0h3" />
          </svg>
          {{
            locationStatus === 'locating' ? copy.locating : position ? copy.recenter : copy.locate
          }}
        </button>
        <span class="earth-location-status" role="status" aria-live="polite">
          {{ locationMessage }}
        </span>
      </div>
    </div>
    <div class="earth-footer">
      <span class="earth-hint" role="status">{{
        failed ? copy.fallback : ready ? copy.hint : copy.loading
      }}</span>
      <button
        v-if="ready && motionEnabled"
        class="earth-motion"
        type="button"
        :aria-label="paused ? copy.play : copy.pause"
        :aria-pressed="paused"
        @click="paused = !paused"
      >
        <span aria-hidden="true">{{ paused ? '▷' : 'Ⅱ' }}</span
        >{{ paused ? copy.play : copy.pause }}
      </button>
      <span v-else-if="ready" class="earth-still">{{ copy.still }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useVisitorLocation } from '@/composables/useVisitorLocation'
import { useVisitorCity } from '@/composables/useVisitorCity'

const props = defineProps({
  locale: { type: String, default: 'zh' },
  motionEnabled: { type: Boolean, default: true },
  theme: { type: String, default: 'dark' }
})
const labels = {
  zh: {
    caption: '在真实世界，留下创造的坐标。',
    description: '可交互三维地球，拖动或使用方向键旋转',
    youAreHere: '你在这里',
    youAreIn: '你在{city}',
    locate: '定位我的位置',
    locating: '正在定位…',
    recenter: '回到我的位置',
    locationPrivacy: '允许定位后，在地球上找到你。位置用于本页展示与城市查询。',
    locationMessages: {
      idle: '在地球上，找到你的位置。',
      locating: '请在浏览器提示中允许定位。',
      located: '位置用于地球展示与城市识别。',
      denied: '未获定位授权，允许后可重试。',
      unavailable: '暂时无法获取位置，请重试。',
      timeout: '定位超时，请重试。',
      insecure: '当前连接不支持定位。',
      unsupported: '当前浏览器不支持定位。'
    },
    hint: '拖动探索地球 · 方向键旋转',
    loading: '正在构建这个小小世界…',
    fallback: '一颗小小的地球，一份持续的好奇。',
    pause: '暂停自转',
    play: '继续自转',
    still: '静态欣赏 · 可拖动探索'
  },
  en: {
    caption: 'Finding my place. Building along the way.',
    description: 'Interactive 3D Earth. Drag or use the arrow keys to rotate.',
    youAreHere: 'YOU ARE HERE',
    youAreIn: 'YOU ARE IN {city}',
    locate: 'Find my location',
    locating: 'Locating…',
    recenter: 'Back to my location',
    locationPrivacy: 'Allow location access to find yourself on the globe and identify your city.',
    locationMessages: {
      idle: 'Find your place in the world.',
      locating: 'Allow location access in your browser.',
      located: 'Used for the globe and city lookup.',
      denied: 'Location access denied. Allow it to retry.',
      unavailable: 'Location unavailable. Please try again.',
      timeout: 'Location timed out. Please try again.',
      insecure: 'This connection does not support location.',
      unsupported: 'This browser does not support location.'
    },
    hint: 'DRAG TO EXPLORE · ARROW KEYS TO ROTATE',
    loading: 'Building a little world…',
    fallback: 'A little world. An endless curiosity.',
    pause: 'Pause rotation',
    play: 'Resume rotation',
    still: 'STILL VIEW · DRAG TO EXPLORE'
  }
}
const copy = computed(() => labels[props.locale] || labels.zh)
const container = ref(null)
const stage = ref(null)
const canvas = ref(null)
const paused = ref(false)
const ready = ref(false)
const failed = ref(false)
const { position, status: locationStatus, locate } = useVisitorLocation()
const { city } = useVisitorCity(position)
const locationMessage = computed(() => copy.value.locationMessages[locationStatus.value])
const coordinates = computed(() => {
  if (!position.value) return ''
  const { latitude, longitude } = position.value
  return `${Math.abs(latitude).toFixed(2)}° ${latitude < 0 ? 'S' : 'N'} · ${Math.abs(longitude).toFixed(2)}° ${longitude < 0 ? 'W' : 'E'}`
})
function focusVisitor() {
  if (!position.value || !globe) return
  paused.value = true
  globe.setLocation(position.value, props.motionEnabled)
}
function locateVisitor() {
  if (position.value) focusVisitor()
  else locate()
}
watch(position, focusVisitor)
const controller = new AbortController()
let globe
let alive = true

watch(
  () => props.motionEnabled && !paused.value,
  (enabled) => globe?.setMotion(enabled)
)
watch(
  () => props.theme,
  () => globe?.setTheme(),
  { flush: 'post' }
)
watch(
  () => props.motionEnabled,
  (enabled) => {
    if (!enabled && position.value) globe?.setLocation(position.value, false)
  }
)

onMounted(async () => {
  try {
    const { createGlobeScene } = await import('@/utils/globeScene')
    if (!alive) return
    globe = await createGlobeScene({
      canvas: canvas.value,
      stage: stage.value,
      container: container.value,
      signal: controller.signal,
      motionEnabled: props.motionEnabled && !paused.value,
      onUnavailable: () => {
        ready.value = false
        failed.value = true
      }
    })
    if (!alive) {
      globe.dispose()
      return
    }
    globe.setMotion(props.motionEnabled && !paused.value)
    globe.setTheme()
    ready.value = true
    if (position.value) focusVisitor()
  } catch (error) {
    if (alive && error.name !== 'AbortError') failed.value = true
  }
})

onBeforeUnmount(() => {
  alive = false
  controller.abort()
  globe?.dispose()
})
</script>
