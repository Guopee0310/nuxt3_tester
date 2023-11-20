<template>
  <div
    ref="covercharSlider"
    v-swiper:covercharSwiper="swiperCovercharOption"
    class="swiper-container swiper-coverchar"
  >
    <div class="swiper-wrapper">
      <div class="swiper-slide" data-src="https://www.youtube.com/embed/51j_TAtr_ng">
        <div class="swiper-coverchar-item">
          <img
            src="https://img.youtube.com/vi/51j_TAtr_ng/maxresdefault.jpg"
            alt="龍門轉學考｜我順利轉進台大了！五專插大轉學考經驗分享-鯉魚要龍門"
            title="龍門轉學考｜我順利轉進台大了！五專插大轉學考經驗分享-鯉魚要龍門"
          />
        </div>
      </div>
      <div class="swiper-slide" data-src="https://www.youtube.com/embed/wH94xWLfByM">
        <div class="swiper-coverchar-item">
          <img
            src="https://img.youtube.com/vi/wH94xWLfByM/maxresdefault.jpg"
            alt="龍門轉學考｜私校轉頂大不是夢！學姊補龍門二轉上榜政大企管系、成大經濟系！-鯉魚要龍門"
            title="龍門轉學考｜私校轉頂大不是夢！學姊補龍門二轉上榜政大企管系、成大經濟系！-鯉魚要龍門"
          />
        </div>
      </div>
      <div class="swiper-slide" data-src="https://www.youtube.com/embed/FCZKdmcnkCI">
        <div class="swiper-coverchar-item">
          <img
            src="https://img.youtube.com/vi/FCZKdmcnkCI/maxresdefault.jpg"
            alt="龍門轉學考｜越級打怪！英文系轉考資工系 微積分準備3大技巧上榜清大資工！-鯉魚要龍門"
            title="龍門轉學考｜越級打怪！英文系轉考資工系 微積分準備3大技巧上榜清大資工！-鯉魚要龍門"
          />
        </div>
      </div>
      <div class="swiper-slide" data-src="https://www.youtube.com/embed/KaKZJTaXsHI">
        <div class="swiper-coverchar-item">
          <img
            src="https://img.youtube.com/vi/KaKZJTaXsHI/maxresdefault.jpg"
            alt="龍門轉學考｜私校逆襲！靠龍門二轉上榜台大工管系、成大經濟系！-鯉魚要龍門"
            title="龍門轉學考｜私校逆襲！靠龍門二轉上榜台大工管系、成大經濟系！-鯉魚要龍門"
          />
        </div>
      </div>
      <div class="swiper-slide" data-src="https://www.youtube.com/embed/D5VyUFUTHpo">
        <div class="swiper-coverchar-item">
          <img
            src="https://img.youtube.com/vi/D5VyUFUTHpo/maxresdefault.jpg"
            alt="龍門轉學考｜文轉工一次錄取交大成大政大，別說跨領域不可能！-鯉魚要龍門"
            title="龍門轉學考｜文轉工一次錄取交大成大政大，別說跨領域不可能！-鯉魚要龍門"
          />
        </div>
      </div>
    </div>
    <div class="swiper-coverchar-frame" @click.stop="$emit('coverchar-open-modal')">
      <div class="swiper-coverchar-frame-btn"></div>
    </div>
    <div class="swiper-coverchar-prev">
      <div><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
    </div>
    <div class="swiper-coverchar-next">
      <div><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      covercharVideoSrcToParent: '',
      swiperCovercharOption: {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 15,
        centeredSlides: true,
        slideToClickedSlide: false,
        slideActiveClass: 'swiper-coverchar-active',
        navigation: {
          nextEl: '.swiper-coverchar-next',
          prevEl: '.swiper-coverchar-prev'
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        },
        on: {
          slideChangeTransitionStart: () => {
            this.covercharActiveIndex = this.$refs.covercharSlider.swiper.activeIndex
            console.log(this.covercharActiveIndex)
            this.covercharVideoSrcToParent =
              this.$refs.covercharSlider.swiper.slides[this.covercharActiveIndex].dataset.src
            this.$emit('coverchar-active-src', this.covercharVideoSrcToParent)
          }
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
// 心得影片swiper樣式 start
.swiper-coverchar {
  @apply flex justify-center;
}
.swiper-coverchar-item {
  @apply flex h-0 shrink-0 justify-center pb-[56.25%] opacity-20;
  > img {
    @apply absolute block aspect-auto h-full w-full object-cover;
  }
}
.swiper-coverchar-active > .swiper-coverchar-item {
  @apply opacity-100;
}
.swiper-coverchar-frame {
  @apply absolute top-0 z-[1] flex aspect-video h-full cursor-pointer items-center justify-center border-8 border-solid border-[#FCE519];
}
.swiper-coverchar-frame-btn {
  @apply relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-500;
  &:before {
    font-family: 'Font Awesome 6 Free';
    @apply absolute flex h-15 w-15 items-center justify-center rounded-full border-2 border-solid border-primary-500 pl-1 text-center text-5xl font-bold text-primary-500 content-['\f04b'];
  }
}
.swiper-coverchar-prev,
.swiper-coverchar-next {
  @apply absolute top-[calc(50%-20px)] z-[1] hidden items-center md:flex xl:top-[calc(50%-30px)];
  > * {
    @apply flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-primary-500 shadow-md shadow-primary-200 xl:h-12 xl:w-12;
  }
}
.swiper-coverchar-prev {
  @apply left-[calc(25%-20px)] xl:left-[calc(25%-30px)];
}
.swiper-coverchar-next {
  @apply right-[calc(25%-20px)] xl:right-[calc(25%-30px)];
}
// 心得影片swiper樣式 end
</style>
