<template>
  <div>
    <div class="mb-5 flex items-center">
      <slot></slot>
      <div class="ml-6">
        <a
          :id="prevId"
          href="javascript:;"
          class="ml-1 inline-block h-8 w-8 rounded-full bg-secondary-500 text-center text-sm leading-[40px] text-white"
          ><font-awesome-icon :icon="['fa', 'arrow-left']"
        /></a>
        <a
          :id="nextId"
          href="javascript:;"
          class="ml-1 inline-block h-8 w-8 rounded-full bg-secondary-500 text-center text-sm leading-[40px] text-white"
          ><font-awesome-icon :icon="['fa', 'arrow-right']"
        /></a>
      </div>
    </div>
    <div v-swiper:reviewSwiper="swiperOption" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ReviewCardS2 />
        </div>
        <div class="swiper-slide">
          <ReviewCardS2 />
        </div>
      </div>
    </div>
    <div class="swiper-pagination review-pagination !relative my-2"></div>
  </div>
</template>
<script>
import ReviewCardS2 from '@/components/card/ReviewCardS2.vue'
export default {
  components: {
    ReviewCardS2
  },
  props: {
    delay: {
      default: 5000
    },
    nextId: {
      type: String,
      required: true
    },
    prevId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: this.delay // 5秒切换一次
        },
        navigation: {
          nextEl: `#${this.nextId}`,
          prevEl: `#${this.prevId}`
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 25
          }
        },
        pagination: {
          el: '.review-pagination',
          type: 'bullets'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
:deep() .swiper-pagination-bullet {
  @apply bg-secondary-100;
}
:deep() .swiper-pagination-bullet.swiper-pagination-bullet-active {
  @apply bg-secondary-400;
}

.swiper-button-disabled {
  @apply pointer-events-none cursor-auto opacity-30;
}
</style>
