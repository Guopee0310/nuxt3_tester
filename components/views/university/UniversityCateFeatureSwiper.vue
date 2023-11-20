<template>
  <div>
    <div class="mb-5 flex items-center justify-center">
      <div class="feature-prev left-4 top-1/2 mx-1 -translate-y-1/2 lg:absolute">
        <span class="inline-block h-8 w-8 rounded-full bg-white text-center text-sm leading-[40px]">
          <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </span>
      </div>
      <div class="feature-next right-4 top-1/2 mx-1 -translate-y-1/2 lg:absolute">
        <span class="inline-block h-8 w-8 rounded-full bg-white text-center text-sm leading-[40px]">
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </span>
      </div>
    </div>
    <div
      id="featureSlider"
      v-swiper:infoSwiper="swiperOption"
      class="swiper-container max-w-[1130px]"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="relative min-h-[405px]">
            <div
              class="relative flex max-w-full justify-center lg:absolute lg:right-5 lg:max-w-[720px]"
            >
              <img src="~/assets/img/university/plan-feature1.png" alt="" />
            </div>
            <div
              class="relative mx-auto -mt-4 flex h-4/5 w-4/5 max-w-[720px] flex-col items-end justify-center bg-primary-100 p-5 lg:absolute lg:inset-x-0 lg:inset-y-5 lg:mx-0 lg:my-auto lg:h-[300px] lg:w-[412px]"
            >
              <h5 class="mb-5 text-2xl font-bold">全方位性向測驗診斷</h5>
              <p>
                「全方位智慧鑑診系統」針對同學進行自我探索，提出五種性格量表。可從中找到適合自己的學習方向，並對應大學18學群及職業發展，擬定一個客製化學習計劃
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="relative min-h-[405px]">
            <div
              class="relative flex max-w-full justify-center lg:absolute lg:right-5 lg:max-w-[720px]"
            >
              <img src="~/assets/img/university/plan-feature2.png" alt="" />
            </div>
            <div
              class="relative mx-auto -mt-4 flex h-4/5 w-4/5 max-w-[720px] flex-col items-end justify-center bg-primary-100 p-5 lg:absolute lg:inset-x-0 lg:inset-y-5 lg:mx-0 lg:my-auto lg:h-[300px] lg:w-[412px]"
            >
              <h5 class="mb-5 text-2xl font-bold">碩博士級師資</h5>
              <p>
                不論是資訊學群、工程學群、醫藥衛生學群、或是管理學群等，皆由TKB甄戰各大領域的碩博士級師資輔導同學製作學習
                歷程，以實現「成就每一個孩子—適性揚才、終身學習」的新課綱願景。
              </p>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="relative min-h-[405px]">
            <div
              class="relative flex max-w-full justify-center lg:absolute lg:right-5 lg:max-w-[720px]"
            >
              <img src="~/assets/img/university/plan-feature3.png" alt="" />
            </div>
            <div
              class="relative mx-auto -mt-4 flex h-4/5 w-4/5 max-w-[720px] flex-col items-end justify-center bg-primary-100 p-5 lg:absolute lg:inset-x-0 lg:inset-y-5 lg:mx-0 lg:my-auto lg:h-[300px] lg:w-[412px]"
            >
              <h5 class="mb-5 text-2xl font-bold">採小班制、一對一指導</h5>
              <p>
                每位學員皆有一位學習顧問師及一位碩博士老師共同指導，課程內容包含學習定向探索與三項學習目標，顧問師會透過「安排學習進度與規劃」，協助掌握學習成效與成果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="feature-page my-5 w-full text-center"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
          nextEl: '.feature-next',
          prevEl: '.feature-prev'
        },
        pagination: {
          el: '.feature-page',
          type: 'bullets',
          clickable: true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper-button-disabled {
  @apply cursor-auto opacity-20;
}

:deep() .swiper-pagination-bullet {
  @apply mr-3 bg-secondary-200;
}
</style>
