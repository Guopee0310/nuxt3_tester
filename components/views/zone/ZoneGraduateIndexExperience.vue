<template>
  <div class="swiper-experience">
    <Swiper
      :modules="[Mousewheel, SwiperNavigation]"
      :slides-per-view="1.1"
      :mousewheel="true"
      :navigation="{ nextEl: '.swiper-experience-next', prevEl: '.swiper-experience-prev' }"
      :breakpoints="{
        [breakpointsInt('lg')]: {
          slidesPerView: 2.1
        },
        [breakpointsInt('xl')]: {
          slidesPerView: 3.1
        }
      }"
    >
      <SwiperSlide class="experience-card">
        <nuxt-link
          class="experience-card-frame group hover:!opacity-100"
          to="/schoolZone/review/toReview"
        >
          <div class="experience-card-title">
            <div>
              研究所考試心得 | 110年台灣大學 應用力學所 正取研究所考試心得 | 110年台灣大學
              應用力學所 正取
            </div>
          </div>
          <div class="experience-card-content">
            <div>
              雲端課程很重要，其實在讀書期間有時會感覺到無力，像是讀後面忘前面、讀前面忘後面的時候，念到後來都會懷疑自己，但其實不用擔心，花時間念進去的沒有消失，多讀幾次加深印象，累積自己的基本功和底子，自然而然就會前後貫通。
            </div>
          </div>
          <div>
            <div class="text-right">
              <div class="experience-card-btn group-hover:bg-primary-300 group-hover:text-white">
                MORE
              </div>
            </div>
            <div class="experience-card-identity">
              <div class="experience-card-identity-photo">
                <img
                  alt="○○○"
                  title="○○○"
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
                />
              </div>
              <div class="experience-card-identity-text">○○○ 同學</div>
            </div>
          </div>
        </nuxt-link>
      </SwiperSlide>
      <SwiperSlide class="experience-card">
        <nuxt-link
          class="experience-card-frame group hover:!opacity-100"
          to="/schoolZone/review/toReview"
        >
          <div class="experience-card-title">
            <div>
              研究所考試心得 | 110年台灣大學 應用力學所 正取研究所考試心得 | 110年台灣大學
              應用力學所 正取
            </div>
          </div>
          <div class="experience-card-content">
            <div>
              雲端課程很重要，其實在讀書期間有時會感覺到無力，像是讀後面忘前面、讀前面忘後面的時候，念到後來都會懷疑自己，但其實不用擔心，花時間念進去的沒有消失，多讀幾次加深印象，累積自己的基本功和底子，自然而然就會前後貫通。
            </div>
          </div>
          <div>
            <div class="text-right">
              <div class="experience-card-btn group-hover:bg-primary-300 group-hover:text-white">
                MORE
              </div>
            </div>
            <div class="experience-card-identity">
              <div class="experience-card-identity-photo">
                <img
                  alt="○○○"
                  title="○○○"
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
                />
              </div>
              <div class="experience-card-identity-text">○○○ 同學</div>
            </div>
          </div>
        </nuxt-link>
      </SwiperSlide>
      <SwiperSlide class="experience-card">
        <nuxt-link
          class="experience-card-frame group hover:!opacity-100"
          to="/schoolZone/review/toReview"
        >
          <div class="experience-card-title">
            <div>
              研究所考試心得 | 110年台灣大學 應用力學所 正取研究所考試心得 | 110年台灣大學
              應用力學所 正取
            </div>
          </div>
          <div class="experience-card-content">
            <div>
              雲端課程很重要，其實在讀書期間有時會感覺到無力，像是讀後面忘前面、讀前面忘後面的時候，念到後來都會懷疑自己，但其實不用擔心，花時間念進去的沒有消失，多讀幾次加深印象，累積自己的基本功和底子，自然而然就會前後貫通。
            </div>
          </div>
          <div>
            <div class="text-right">
              <div class="experience-card-btn group-hover:bg-primary-300 group-hover:text-white">
                MORE
              </div>
            </div>
            <div class="experience-card-identity">
              <div class="experience-card-identity-photo">
                <img
                  alt="○○○"
                  title="○○○"
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
                />
              </div>
              <div class="experience-card-identity-text">○○○ 同學</div>
            </div>
          </div>
        </nuxt-link>
      </SwiperSlide>
      <SwiperSlide class="experience-card">
        <nuxt-link
          class="experience-card-frame group hover:!opacity-100"
          to="/schoolZone/review/toReview"
        >
          <div class="experience-card-title">
            <div>
              研究所考試心得 | 110年台灣大學 應用力學所 正取研究所考試心得 | 110年台灣大學
              應用力學所 正取
            </div>
          </div>
          <div class="experience-card-content">
            <div>
              雲端課程很重要，其實在讀書期間有時會感覺到無力，像是讀後面忘前面、讀前面忘後面的時候，念到後來都會懷疑自己，但其實不用擔心，花時間念進去的沒有消失，多讀幾次加深印象，累積自己的基本功和底子，自然而然就會前後貫通。
            </div>
          </div>
          <div>
            <div class="text-right">
              <div class="experience-card-btn group-hover:bg-primary-300 group-hover:text-white">
                MORE
              </div>
            </div>
            <div class="experience-card-identity">
              <div class="experience-card-identity-photo">
                <img
                  alt="○○○"
                  title="○○○"
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
                />
              </div>
              <div class="experience-card-identity-text">○○○ 同學</div>
            </div>
          </div>
        </nuxt-link>
      </SwiperSlide>
    </Swiper>
    <div class="swiper-experience-prev">
      <div><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
    </div>
    <div class="swiper-experience-next">
      <div><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
    </div>
  </div>
</template>

<script setup>
import { Mousewheel } from 'swiper/modules'
const { breakpointsInt } = useTailwindConfig()
</script>

<style lang="scss" scoped>
.swiper-experience {
  @apply flex sm:gap-2 md:gap-3;
}
.swiper {
  @apply order-2;
}
.swiper-experience-prev,
.swiper-experience-next {
  @apply hidden items-center sm:flex;
  > * {
    @apply flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white text-xl text-primary-500 shadow-md shadow-primary-200 xl:h-12 xl:w-12;
  }
}
.swiper-experience-prev {
  @apply order-1;
}
.swiper-experience-next {
  @apply order-3;
}
.swiper-button-disabled {
  @apply pointer-events-none cursor-default opacity-30;
}
.experience-card {
  @apply h-auto px-1 pb-4 pt-1 md:px-3 md:pb-5;
}
.experience-card-frame {
  @apply flex h-full cursor-pointer flex-col gap-4 rounded-3xl bg-white px-3 py-4 shadow-md shadow-primary-200 md:shadow-lg md:shadow-primary-200;
}
.experience-card-title {
  @apply text-xl font-bold;
  height: 3em * 1.3;
  > * {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
.experience-card-content {
  height: 6em * 1.5;
  > * {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 6;
  }
}
.experience-card-btn {
  @apply relative inline-block border border-solid border-primary-500 px-4 py-1 tracking-widest text-primary-500 transition
        after:absolute after:-right-3 after:top-1/2 after:h-[1px] after:w-6 after:bg-primary-500;
}
.experience-card-identity {
  @apply flex items-center gap-2;
}
.experience-card-identity-photo {
  @apply h-9 w-9 overflow-hidden rounded-full border-2 border-solid border-primary-500;
  > img {
    @apply block aspect-auto h-full w-full object-cover;
  }
}
.experience-card-identity-text {
  @apply text-base-400;
}
</style>
