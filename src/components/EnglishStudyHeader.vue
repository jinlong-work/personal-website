<template>
  <header class="study-header">
    <div class="study-heading">
      <span class="study-mark" aria-hidden="true"><slot name="icon" /></span>
      <div>
        <h1 id="english-title">{{ title }}</h1>
        <slot name="meta" />
      </div>
    </div>
    <div class="study-actions">
      <slot name="primary" />
      <slot name="return" />
    </div>
  </header>
</template>

<script setup>
import '@/styles/english-study.css'

defineProps({ title: { type: String, required: true } })
</script>
