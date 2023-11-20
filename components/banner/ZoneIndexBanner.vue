<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
    :loop="true"
    :autoplay="{
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }"
    :pagination="{
      el: '.swiper-zonebanner-pagination',
      clickable: true
    }"
    :navigation="{
      nextEl: '.swiper-zonebanner-next',
      prevEl: '.swiper-zonebanner-prev'
    }"
  >
    <SwiperSlide v-for="item in defaultData" :key="item.title" :class="[ratio]">
      <nuxt-link class="flex h-0 shrink-0 justify-center hover:!opacity-100" :to="item.link">
        <picture class="absolute block aspect-auto h-full w-full object-cover">
          <source
            :media="'(min-width:' + tailwinds.theme.screens.sm + ')'"
            :srcset="item.picture"
          />
          <img
            class="absolute block aspect-auto h-full w-full object-cover"
            :src="item.picture"
            :alt="item.title"
            :title="item.title"
          />
        </picture>
      </nuxt-link>
    </SwiperSlide>
    <div class="swiper-zonebanner-pagination"></div>
    <div class="swiper-zonebanner-prev">
      <div><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
    </div>
    <div class="swiper-zonebanner-next">
      <div><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
    </div>
  </Swiper>
</template>

<script setup>
const { tailwinds } = useTailwindConfig()
defineProps({
  ratio: { type: String, default: 'pb-[25.77%]' },
  defaultData: { type: Object, default: null }
})
</script>

<style lang="scss" scoped>
.swiper {
  @apply flex items-center;
}
.swiper-zonebanner-pagination {
  @apply text-center md:absolute md:bottom-0 md:z-[1];
}
.swiper-zonebanner-pagination:deep() .swiper-pagination-bullet-active {
  @apply bg-primary-500;
}
.swiper-zonebanner-prev,
.swiper-zonebanner-next {
  @apply absolute z-[1] flex w-6 cursor-pointer items-center justify-center lg:w-8;
  > * {
    @apply flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-lg text-white;
  }
}
.swiper-zonebanner-prev {
  @apply left-0;
}
.swiper-zonebanner-next {
  @apply right-0;
}
</style>
