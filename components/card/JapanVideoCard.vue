<template>
  <nuxt-link
    class="inline-block w-full cursor-pointer border border-solid border-secondary-500 px-2 py-1"
    :to="url"
  >
    <div class="text-right text-base-400">{{ teachername }} 老師</div>
    <div class="w-full">
      <img class="block h-full w-full object-cover object-center" :src="imgSrc" />
    </div>
    <div class="mt-2 leading-7 text-secondary-500">
      {{ summary }}
    </div>
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  teachername: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped></style>
