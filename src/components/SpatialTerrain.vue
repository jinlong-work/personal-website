<template>
  <div class="terrain" @pointermove="move" @pointerleave="tilt = 'none'" :aria-label="copy.s0">
    <svg
      class="terrain-art"
      :style="{ transform: motionEnabled ? tilt : 'none' }"
      viewBox="0 0 600 460"
      role="img"
      :aria-label="copy.s1"
    >
      <defs>
        <linearGradient id="contourColor" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="#e0edb2" />
          <stop offset=".5" stop-color="#99b97e" />
          <stop offset="1" stop-color="#3d694f" />
        </linearGradient>
        <linearGradient id="scanColor">
          <stop stop-color="#bddc9e" stop-opacity="0" />
          <stop offset="1" stop-color="#bddc9e" stop-opacity=".5" />
        </linearGradient>
      </defs>
      <g class="terrain-grid">
        <path v-for="(d, index) in grid" :key="index" :d="d" class="axis-line" />
      </g>
      <ellipse
        cx="300"
        cy="260"
        rx="252"
        ry="134"
        fill="none"
        stroke="#a4c19e20"
        stroke-width=".7"
        stroke-dasharray="3 6"
      />
      <g class="orbit">
        <circle cx="548" cy="260" r="3" fill="#c7e9a3" />
        <circle cx="548" cy="260" r="12" fill="none" stroke="#c7e9a340" />
      </g>
      <g class="terrain-lines">
        <path
          v-for="(d, index) in contours"
          :key="index"
          :d="d"
          fill="none"
          :stroke="index % 4 === 0 ? 'url(#contourColor)' : '#87a773'"
          :stroke-width="index % 4 === 0 ? 1.05 : 0.45"
          :opacity="index % 4 === 0 ? 0.85 : 0.48"
          :style="{ '--i': index }"
        />
      </g>
      <path d="M310 176 440 84H540" fill="none" stroke="#b7d99c60" stroke-width=".7" />
      <circle cx="310" cy="176" r="3" fill="#d8f1b0" />
      <circle class="beacon" cx="310" cy="176" r="10" fill="none" stroke="#c7e9a3" />
      <text x="449" y="72" class="axis-label">{{ copy.s2 }}</text>
      <rect class="scan" x="80" y="110" width="70" height="260" fill="url(#scanColor)" />
      <text x="48" y="410" class="axis-label">{{ copy.s3 }}</text>
      <text x="477" y="410" class="axis-label">{{ copy.s4 }}</text></svg
    ><span class="terrain-label top">{{ copy.s5 }}<br />{{ copy.s6 }}</span
    ><span class="terrain-label bottom">{{ copy.s7 }}<br />{{ copy.s8 }}</span>
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { terrainCopy } from '@/content/terrainCopy'
const props = defineProps({
  locale: { type: String, default: 'zh' },
  motionEnabled: { type: Boolean, default: true }
})
const copy = computed(() => terrainCopy[props.locale])
const tilt = ref('none')
const grid = Array.from(
  { length: 9 },
  (_, i) => 'M' + (50 + i * 62) + ' 120V400M30 ' + (150 + i * 30) + 'H570'
)
const contours = Array.from({ length: 28 }, (_, i) => {
  let d = ''
  for (let j = 0; j <= 120; j++) {
    const a = (j / 120) * Math.PI * 2
    const r =
      26 + i * 7.6 + (Math.sin(a * 3 + 0.7) * 14 + Math.cos(a * 5 + i * 0.08) * 8) * (i / 28)
    const x = 300 + Math.cos(a) * r * 1.1
    const y = 263 + Math.sin(a) * r * 0.48 - Math.exp(-Math.pow(i / 12, 2)) * 82
    d += (j ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1)
  }
  return d + 'Z'
})
function move(event) {
  if (!props.motionEnabled || event.pointerType === 'touch') return
  const b = event.currentTarget.getBoundingClientRect()
  tilt.value =
    'rotateY(' +
    ((event.clientX - b.left) / b.width - 0.5) * 10 +
    'deg) rotateX(' +
    ((event.clientY - b.top) / b.height - 0.5) * -8 +
    'deg)'
}
</script>
