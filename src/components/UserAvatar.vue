<template>
  <span class="avatar-image" :aria-label="`${name || '用户'}的头像`" role="img">
    <img v-if="source && !failed" :src="source" alt="" decoding="async" @error="failed = true" />
    <span v-else aria-hidden="true">{{ Array.from(name || '用户')[0] }}</span>
  </span>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { resolveAvatarUrl } from '@/utils/avatar'

const props = defineProps({ avatar: { type: String, default: '' }, name: { type: String, default: '' } })
const source = computed(() => resolveAvatarUrl(props.avatar))
const failed = ref(false)
watch(source, () => { failed.value = false })
</script>

<style scoped>
.avatar-image { display: inline-grid; place-items: center; flex-shrink: 0; width: 40px; height: 40px; overflow: hidden; border-radius: 50%; background: #eaf0df; color: #597344; font-size: 16px; vertical-align: middle; }
.avatar-image img { width: 100%; height: 100%; display: block; object-fit: cover; }
</style>
