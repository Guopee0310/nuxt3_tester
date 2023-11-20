<template>
  <nuxt-link
    :class="[width, bottomLine]"
    class="group flex items-center py-2 leading-none hover:!opacity-100"
  >
    <div :class="[color]" class="px-[10%] transition group-hover:opacity-80 sm:px-[13%] lg:px-4">
      <slot name="icon"><font-awesome-icon :icon="['fas', 'graduation-cap']" /></slot>
    </div>
    <div class="text-lg transition group-hover:opacity-80"><slot name="title">按鈕內容</slot></div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  width: { type: String, default: 'w-full' },
  bottomLine: { type: String, default: 'border-b-2 border-dotted border-base-200' },
  color: { type: String, default: 'text-primary-400' }
})
</script>
