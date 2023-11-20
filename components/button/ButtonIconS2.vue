<template>
  <nuxt-link
    :class="[width]"
    class="flex items-center justify-around bg-white py-2 text-sm leading-none shadow-lg transition hover:translate-y-px hover:!opacity-100 hover:shadow"
  >
    <div :class="[iconColor, iconBg]" class="flex h-5 w-5 items-center justify-center rounded-sm">
      <slot name="icon"><font-awesome-icon :icon="['fas', 'video']" /></slot>
    </div>
    <div class="text-left">
      <div class="text-lg font-medium text-base-500"><slot name="title">按鈕內容</slot></div>
      <div class="text-base-300"><slot name="subtitle">STRING</slot></div>
    </div>
    <div class="flex h-4 w-4 items-center justify-center rounded-full bg-base-100 text-base-400">
      <font-awesome-icon :icon="['fas', 'angle-right']" />
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  width: { type: String, default: 'w-full' },
  iconColor: { type: String, default: 'text-white' },
  iconBg: { type: String, default: 'bg-secondary-300' }
})
</script>
