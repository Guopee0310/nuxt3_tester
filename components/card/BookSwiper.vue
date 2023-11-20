<template>
  <div class="carousel">
    <div class="carousel-btn-area">
      <span :id="prevId">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </span>
    </div>
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :observer="true"
      :observe-parents="true"
      :slides-per-view="1.5"
      :space-between="12"
      :auto-height="false"
      :lazy="true"
      :rewind="true"
      :navigation="{
        nextEl: `#${nextId}`,
        prevEl: `#${prevId}`
      }"
      :breakpoints="{
        1320: {
          slidesPerView: 7,
          spaceBetween: 10
        },
        992: {
          slidesPerView: 6
        },
        768: {
          slidesPerView: 4
        },
        568: {
          slidesPerView: 3
        },
        375: {
          slidesPerView: 2
        }
      }"
      class="carousel-swiper mb-4"
    >
      <SwiperSlide>
        <BookItemCard :url="'book/tobookindex'" />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
      <SwiperSlide>
        <BookItemCard />
      </SwiperSlide>
    </Swiper>
    <div class="carousel-btn-area">
      <span :id="nextId">
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div>
  </div>
</template>
<script setup>
import BookItemCard from '@/components/card/BookItemCard.vue'
defineProps({
  nextId: {
    type: String,
    required: true
  },
  prevId: {
    type: String,
    required: true
  }
})
// export default {
//   name: 'BookSwiper',
//   components: {
//     BookItemCard
//   },
//   props: {
//     nextId: {
//       type: String,
//       required: true
//     },
//     prevId: {
//       type: String,
//       required: true
//     }
//   },
//   data() {
//     return {
//       bookCarouselOption: {
//         observer: true, // 修改swiper自己或子元素時，自動初始化swiper
//         observeParents: true,
//         slidesPerView: 1.5,
//         spaceBetween: 12,
//         autoHeight: false,
//         lazy: true,
//         rewind: true,
//         navigation: {
//           nextEl: `#${this.nextId}`,
//           prevEl: `#${this.prevId}`
//         },
//         breakpoints: {
//           1320: {
//             slidesPerView: 7,
//             spaceBetween: 10
//           },
//           992: {
//             slidesPerView: 6
//           },
//           768: {
//             slidesPerView: 4
//           },
//           568: {
//             slidesPerView: 3
//           },
//           375: {
//             slidesPerView: 2
//           }
//         }
//       }
//     }
//   }
// }
</script>
<style lang="scss" scoped>
.carousel {
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.carousel-swiper {
  flex: 1 1 100%;
  overflow: hidden;
}

.carousel-btn-area {
  flex: 0 1 auto;
  display: flex;
  align-items: center;

  > * {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 23px;
    height: 45px;
    color: theme('colors.white');
    border: 1px solid theme('colors.primary.500');
    background-color: theme('colors.primary.300');
    border-radius: 4px;
    &:not(.swiper-button-disabled) {
      cursor: pointer !important;
    }
    &.swiper-button-disabled {
      opacity: 0;
      cursor: default;
      pointer-events: none;
    }
  }

  // 左按鈕
  &:first-child {
    margin-right: -10px;
    // 移到swiper上層
    z-index: 2;
    transform: translateZ(2px);
  }
  // 右按鈕
  &:last-child {
    margin-left: -10px;
    // 移到swiper上層
    z-index: 1;
    transform: translateZ(1px);
  }
}
</style>
