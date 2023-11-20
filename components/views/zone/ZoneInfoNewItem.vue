<template>
  <div>
    <nuxt-link class="mb-4 flex min-h-[72px] flex-col gap-1" :to="url">
      <h3 class="line-clamp-1 h-auto text-base font-medium">
        <font-awesome-icon class="mr-1 text-[#a13312]" :icon="['far', 'note-sticky']" />
        <span
          class="relative w-[110px] text-primary-500 after:absolute after:top-1/2 after:ml-1 after:h-[2px] after:w-3 after:bg-secondary-500 after:content-['']"
          >{{ caption }}</span
        >
        <span class="w-[calc(90% - 150px)] ml-6 mr-2">{{ title }}</span>
      </h3>
      <p class="line-clamp-2 h-auto text-base-500">
        {{ summary }}
      </p>
    </nuxt-link>
  </div>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  caption: {
    type: String,
    default: '主標題'
  },
  title: {
    type: String,
    default: '最新消息標題'
  },
  summary: {
    type: String,
    default: '最新消息內容'
  }
})
</script>
<style lang="scss" scoped></style>
