<template>
  <nuxt-link
    :class="[width, bottomLine]"
    class="group flex items-center justify-around py-3 leading-none before:block before:content-[''] after:block after:content-[''] hover:!opacity-100"
  >
    <div class="text-xl font-bold text-base-400 transition group-hover:opacity-80">
      <slot name="title">按鈕內容</slot>
    </div>
    <div
      :class="[countColor, countBg]"
      class="rounded-sm px-1 text-xs transition group-hover:opacity-80"
    >
      <slot name="count">000</slot>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  width: { type: String, default: 'w-full' },
  bottomLine: { type: String, default: 'border-b border-solid border-base-200' },
  countColor: { type: String, default: 'text-white' },
  countBg: { type: String, default: 'bg-secondary-300' }
})
</script>
