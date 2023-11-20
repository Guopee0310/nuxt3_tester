<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination]"
    :loop="true"
    :autoplay="{
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
    :pagination="{
      el: '.swiper-indexbanner-pagination',
      clickable: true
    }"
  >
    <SwiperSlide v-for="item in defaultData" :key="item.title" :class="[ratio]">
      <nuxt-link class="flex h-0 shrink-0 justify-center hover:!opacity-100" :to="item.link">
        <img
          :alt="item.title"
          :title="item.title"
          :src="item.picture"
          class="absolute block aspect-auto h-full w-full object-cover"
        />
      </nuxt-link>
    </SwiperSlide>
    <div class="swiper-indexbanner-pagination"></div>
  </Swiper>
</template>

<script setup>
defineProps({
  ratio: { type: String, default: 'pb-[50%] lg:pb-[40%] xl:pb-[26%]' },
  defaultData: { type: Object, default: null }
})
</script>

<style lang="scss" scoped>
.swiper-indexbanner-pagination {
  @apply absolute bottom-0 z-[1] text-center;
}
.swiper-indexbanner-pagination:deep() .swiper-pagination-bullet {
  @apply bg-white;
}
</style>
