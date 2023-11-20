<template>
  <div>
    <nuxt-link class="mb-4 flex min-h-[72px] flex-row justify-between gap-2" :to="url">
      <div class="h-auto w-[120px]">
        <img class="block h-full w-full object-cover" :src="imgSrc" />
      </div>
      <div class="flex-[1_1_0]">
        <h3 class="mb-1 line-clamp-1 h-auto text-base font-medium">
          {{ title }}
        </h3>
        <p class="line-clamp-2 h-auto text-base-500">
          {{ summary }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: 'https://www.tkbtv.com.tw/p20200901EC001_1100_380/toPic.action'
  },
  title: {
    type: String,
    default: '文章標題'
  },
  summary: {
    type: String,
    default: '文章內容'
  }
})
</script>
