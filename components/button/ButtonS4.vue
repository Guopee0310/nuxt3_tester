<template>
  <nuxt-link :class="[textColor, bgColor, padding]" class="rounded text-center">
    <slot>按鈕內容</slot>
  </nuxt-link>
</template>

<script setup>
defineProps({
  textColor: { type: String, default: 'text-white' },
  bgColor: { type: String, default: 'bg-secondary-500' },
  padding: { type: String, default: 'px-3 py-2' }
})
</script>
