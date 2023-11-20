<template>
  <div>
    <div class="flex items-center">
      <slot></slot>
      <div v-if="needNav" class="ml-6">
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
    <div v-swiper:swiper="swiperOption" class="swiper-container my-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <PostCard />
        </div>
        <div class="swiper-slide">
          <PostCard />
        </div>
        <div class="swiper-slide">
          <PostCard />
        </div>
        <div class="swiper-slide">
          <PostCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostCard from '@/components/card/PostCard.vue'
export default {
  components: {
    PostCard
  },
  props: {
    delay: {
      default: 5000
    },
    needNav: {
      type: Boolean,
      default: true
    },
    nextId: {
      type: String,
      default: 'postNext'
    },
    prevId: {
      type: String,
      default: 'postPrev'
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
          768: {
            slidesPerView: 3,
            spaceBetween: 50
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 25
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-button-disabled {
  @apply pointer-events-none cursor-auto opacity-30;
}
</style>
