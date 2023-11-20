<template>
  <Swiper
    :modules="swiperOption.modules"
    :effect="swiperOption.effect"
    :slides-per-view="swiperOption.slidesPerView"
    :loop="swiperOption.loop"
    :pagination="swiperOption.pagination"
    :breakpoints="swiperOption.breakpoints"
    :autoplay="swiperOption.autoplay"
  >
    <SwiperSlide v-for="(item, index) in bannerData" :key="index">
      <div class="cursor-pointer" @click="navigateTo(item.link, { external: true })">
        <img
          class="swiper-lazy swiper-lazy-loaded"
          :src="item.picture"
          :alt="item.title"
          :title="item.title"
        />
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { EffectFade } from 'swiper/modules'

const swiperOption = reactive({
  modules: [EffectFade, SwiperAutoplay, SwiperPagination],
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'my-pagination-active'
  }
})

let bannerData = reactive([])
const { data: res } = await useApi('/api/ad/banner', { query: { adPositionId: 33, count: 5 } })
bannerData = res.value.data
</script>

<style lang="scss" scoped>
:deep() {
  .swiper-pagination {
    bottom: 20px;
    .swiper-pagination-bullet {
      @apply mx-1 inline-block h-2 w-8 rounded-none bg-[#7a7a7a] opacity-60;
    }
    .my-pagination-active {
      @apply bg-primary-600 opacity-100;
    }
  }
}
</style>
