<template>
  <div class="flex items-center">
    <div
      :class="swiper.isBeginning ? 'pointer-events-none opacity-50' : ''"
      class="mx-2 shrink cursor-pointer text-center"
      @click="swiper.slidePrev()"
    >
      <div class="rec-modal-btn-pre">
        <img src="~/assets/img/home_page/rec-modal-btn-prev.webp" />
        <span class="mt-2 inline-block text-xs">PREV</span>
      </div>
    </div>

    <Swiper
      class="w-full"
      :modules="swiperOption.modules"
      :autoplay="swiperOption.autoplay"
      :space-between="swiperOption.spaceBetween"
      :breakpoints="swiperOption.breakpoints"
      :slides-per-view="swiperOption.slidesPerView"
      @swiper="onSwiper"
    >
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
      <SwiperSlide>
        <CourseCard />
      </SwiperSlide>
    </Swiper>

    <div class="mx-2 shrink cursor-pointer text-center" @click="swiper.slideNext()">
      <div :class="swiper.isEnd ? 'pointer-events-none opacity-50' : ''" class="rec-modal-btn-next">
        <img src="~/assets/img/home_page/rec-modal-btn-next.webp" />
        <span class="mt-2 inline-block text-xs">NEXT</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CourseCard from '@/components/card/CourseCard.vue'

const swiper = ref({
  isBeginning: true,
  isEnd: false
})
const onSwiper = (s: any) => {
  swiper.value = s
  console.log(swiper)
}
const swiperOption = reactive({
  modules: [SwiperAutoplay],
  spaceBetween: 8,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.rec-modal-btn-next',
    prevEl: '.rec-modal-btn-pre'
  },
  breakpoints: {
    1200: {
      slidesPerView: 5
    },
    960: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    }
  },
  loop: true
})
</script>
<style lang="scss"></style>
