<template>
  <nuxtLink
    class="mb-4 flex flex-col-reverse flex-wrap duration-100 ease-in hover:opacity-80 xl:flex-row"
    :to="url"
  >
    <div class="basis-full bg-base-50 px-[22px] py-[18px] xl:flex-[1_1_0]">
      <h2 class="mb-2 line-clamp-2 text-xl font-bold text-secondary-500">
        {{ info.title }}
      </h2>
      <p class="line-clamp-3 leading-[22px]">
        {{ info.content.replace(/<[^>]+>/g, '') }}
      </p>
    </div>
    <div class="list-outter flex-[0_1_100%] xl:flex-[0_1_424px]">
      <div class="h-full">
        <img
          class="aspect-[424/154] h-full object-cover object-center"
          :src="info.picture || info.picUrl"
          alt="info.title"
        />
      </div>
    </div>
  </nuxtLink>
</template>
<script setup>
defineProps({
  info: {
    type: Object,
    default() {
      return {}
    }
  },
  url: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped></style>
