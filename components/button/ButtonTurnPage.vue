<template>
  <div class="flex flex-col sm:flex-row">
    <nuxt-link class="flex flex-1 text-left hover:!opacity-100">
      <div :class="[textColor]" class="w-8 flex-initial text-4xl">
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </div>
      <div class="flex flex-1 flex-col items-start">
        <div :class="[textColor]">上一篇</div>
        <div>
          文章標題文章標題文章標題文章標題文章標題文章標題文章標題文章標題文章標題文章標題文章標題文章標題
        </div>
      </div>
    </nuxt-link>
    <nuxt-link class="flex flex-1 text-right hover:!opacity-100">
      <div class="flex flex-1 flex-col items-end">
        <div :class="[textColor]">下一篇</div>
        <div>文章標題</div>
      </div>
      <div :class="[textColor]" class="w-8 flex-initial text-4xl">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  textColor: { type: String, default: 'text-primary-500' }
})
</script>
