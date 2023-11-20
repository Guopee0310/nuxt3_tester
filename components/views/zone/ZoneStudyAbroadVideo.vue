<template>
  <div class="abroadvideo">
    <Swiper
      :modules="[SwiperPagination, SwiperNavigation]"
      :loop="true"
      :pagination="{
        el: '.swiper-abroadvideo-pagination',
        clickable: true
      }"
      :navigation="{
        nextEl: '.swiper-abroadvideo-next',
        prevEl: '.swiper-abroadvideo-prev'
      }"
      class="swiper-abroadvideo"
    >
      <SwiperSlide>
        <youtubeVideo src="https://www.youtube.com/embed/BwXrPh1wFuE" />
      </SwiperSlide>
      <SwiperSlide>
        <youtubeVideo src="https://www.youtube.com/embed/m62xpq6yPu8" />
      </SwiperSlide>
      <SwiperSlide>
        <youtubeVideo src="https://www.youtube.com/embed/2ROguyJLNDU" />
      </SwiperSlide>
      <SwiperSlide>
        <youtubeVideo src="https://www.youtube.com/embed/-dLQeK9HI5o" />
      </SwiperSlide>
      <div class="swiper-abroadvideo-pagination"></div>
    </Swiper>
    <div class="swiper-abroadvideo-prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
    <div class="swiper-abroadvideo-next"><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
  </div>
</template>

<script setup>
import youtubeVideo from '@/components/video/youtubeVideo.vue'
</script>

<style lang="scss" scoped>
.abroadvideo {
  @apply flex flex-wrap items-center gap-1 sm:gap-2;
}
.swiper-abroadvideo {
  @apply order-2 flex-[10];
}
.swiper-abroadvideo-pagination {
  @apply text-center;
}
.swiper-abroadvideo-pagination:deep() .swiper-pagination-bullet-active {
  @apply bg-secondary-500;
}
.swiper-abroadvideo-prev,
.swiper-abroadvideo-next {
  @apply flex aspect-square flex-[1] cursor-pointer items-center justify-center rounded-full bg-white text-xl text-secondary-500 shadow-md shadow-secondary-200;
}
.swiper-abroadvideo-prev {
  @apply order-1;
}
.swiper-abroadvideo-next {
  @apply order-3;
}
</style>
