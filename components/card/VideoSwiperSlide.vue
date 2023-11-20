<template>
  <div>
    <div class="mb-5 flex items-center justify-center">
      <a
        href="javascript:;"
        class="review-prev mx-1 inline-block h-8 w-8 rounded-full bg-white text-center text-sm leading-[40px] text-secondary-700"
      >
        <font-awesome-icon :icon="['fa', 'arrow-left']" />
      </a>
      <a
        href="javascript:;"
        class="review-next mx-1 inline-block h-8 w-8 rounded-full bg-white text-center text-sm leading-[40px] text-secondary-700"
      >
        <font-awesome-icon :icon="['fa', 'arrow-right']" />
      </a>
    </div>
    <div v-swiper:videoSwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div
          v-for="item in videoArr"
          :key="item"
          class="swiper-slide h-[135px] w-[240px] lg:h-[200px] lg:w-[500px] xl:h-auto xl:w-[700px]"
        >
          <youtubeVideo :src="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import youtubeVideo from '@/components/video/youtubeVideo.vue'
export default {
  components: {
    youtubeVideo
  },
  data() {
    return {
      videoArr: [
        'https://www.youtube.com/embed/fJ82VbKDR1w',
        'https://www.youtube.com/embed/fJ82VbKDR1w',
        'https://www.youtube.com/embed/fJ82VbKDR1w'
      ],
      swiperOption: {
        loop: true,
        autoplay: false,
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: true,
        updateOnWindowResize: true,
        navigation: {
          nextEl: '.review-next',
          prevEl: '.review-prev'
        },
        breakpoints: {
          720: {
            spaceBetween: 48
          }
        }
        // on: {
        //     click: (el) => {
        //     this.youtubePlay(el)
        //     }
        // }
      }
    }
  }
}
</script>
<style lang="scss"></style>
