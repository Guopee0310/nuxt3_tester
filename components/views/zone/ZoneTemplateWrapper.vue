<template>
  <div :class="[grid, gap, padding]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  grid: { type: String, default: 'grid grid-cols-1' },
  gap: { type: String, default: 'gap-y-16' },
  padding: { type: String, default: 'py-3 md:py-8' }
})
</script>
