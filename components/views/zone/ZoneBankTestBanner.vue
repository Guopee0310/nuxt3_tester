<template>
  <div class="w-full max-w-[300px] md:max-w-[540px]">
    <!-- 主視覺廣告輪播 start -->
    <div
      v-swiper:swiper="{
        lazy: true,
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        slidesPerView: 1,
        navigation: {
          nextEl: '.exam-bank-swiper-next',
          prevEl: '.exam-bank-swiper-prev'
        }
      }"
      class="swiper-container overflow-hidden rounded border-4 border-solid border-white"
    >
      <div class="swiper-wrapper">
        <!-- 主視覺廣告輪播重複項目 start -->
        <div class="swiper-slide">
          <a
            class="exam-advertise"
            target="_blank"
            href="https://www.tkbgo.com.tw/go_edm/edm460/index.jsp?print_id=8021"
          >
            <picture>
              <!-- 說明：電腦banner尺寸，需要後台 -->
              <source
                media="(min-width: 600px)"
                srcset="https://www.tkbtv.com.tw/upload/tv_ad/2022021417272883244.webp"
              />
              <!-- 說明：手機banner尺寸，需要後台 -->
              <img src="https://www.tkbtv.com.tw/upload/tv_ad/2022081714222417485.jpg" />
            </picture>
          </a>
        </div>
        <div class="swiper-slide">
          <a
            class="exam-advertise"
            target="_blank"
            href="https://www.tkbgo.com.tw/go_edm/edm460/index.jsp?print_id=8021"
          >
            <picture>
              <!-- 說明：電腦banner尺寸，需要後台 -->
              <source
                media="(min-width: 600px)"
                srcset="https://www.tkbtv.com.tw/upload/tv_ad/2022021417272883244.webp"
              />
              <!-- 說明：手機banner尺寸，需要後台 -->
              <img src="https://www.tkbtv.com.tw/upload/tv_ad/2022081714222417485.jpg" />
            </picture>
          </a>
        </div>
      </div>
      <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
    </div>
    <!-- 主視覺廣告輪播 end -->
    <!-- 主視覺廣告輪播按鈕 start -->
    <div class="flex items-center justify-center pb-6 pt-2 md:pb-0 md:pt-4">
      <div
        class="exam-bank-swiper-next mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-base-50 duration-200 ease-in-out"
      >
        <font-awesome-icon class="text-3xl text-base-600" :icon="['fa', 'chevron-left']" />
      </div>
      <div
        class="exam-bank-swiper-prev flex h-8 w-8 items-center justify-center rounded-full bg-base-50 duration-200 ease-in-out"
      >
        <font-awesome-icon class="text-3xl text-base-600" :icon="['fa', 'chevron-right']" />
      </div>
    </div>
    <!-- 主視覺廣告輪播按鈕 end -->
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.swiper-button-disabled {
  @apply opacity-50;
}
</style>
