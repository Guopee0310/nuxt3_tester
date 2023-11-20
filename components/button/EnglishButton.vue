<template>
  <nuxt-link
    :class="[textColor, bgColor, padding, lineHeight]"
    class="flex flex-wrap items-center justify-center hover:!opacity-100"
  >
    <slot>按鈕內容</slot>
  </nuxt-link>
</template>

<script setup>
defineProps({
  textColor: { type: String, default: 'text-white' },
  bgColor: { type: String, default: 'bg-secondary-500 hover:bg-secondary-600' },
  padding: { type: String, default: 'px-3 py-2' },
  lineHeight: { type: String, default: 'leading-none' }
})
</script>
