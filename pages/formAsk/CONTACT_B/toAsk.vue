<template>
  <div class="bg-base-50 tracking-wider text-base-500">
    <div class="container grid items-center pt-10 md:grid-cols-2">
      <div class="bg-white p-2 shadow-[0_0_30px_rgba(130,130,130,.2)] md:p-6">
        <PublicForm>
          <h2 class="flex items-center justify-center text-3xl text-secondary-500">
            填寫表單
            <font-awesome-icon
              :icon="['font-awesome-icons', 'check-double']"
              class="hidden font-bold sm:block"
            />
          </h2>
          <p class="mb-5 mt-2 text-center text-xl text-secondary-500">讓我們幫你解答考試問題</p>
        </PublicForm>
      </div>
      <div class="my-10 md:ml-10 md:mt-0">
        <div class="mb-5 text-3xl font-bold text-base-500">
          解惑你所有的考試疑問<br />
          幫助你順利上榜
        </div>
        <ul class="flex flex-wrap text-xl md:w-1/2">
          <li>公職｜</li>
          <li>國營｜</li>
          <li>轉學考｜</li>
          <li>研究所｜</li>
          <li>英語｜</li>
          <li>日文｜</li>
          <li>證照｜</li>
          <li>升大學</li>
        </ul>
        <div class="mt-5 text-lg">
          <div class="flex flex-wrap">
            <div
              class="[0_0_30px_rgba(130,130,130,.2)] mb-2 flex w-full items-center bg-white p-3 md:mr-2 md:w-1/4"
            >
              全方位諮詢
              <font-awesome-icon class="ml-1" :icon="['font-awesome-icons', 'caret-right']" />
            </div>
            <div
              class="mb-2 flex w-full items-center bg-white p-3 shadow-[0_0_30px_rgba(130,130,130,.2)] md:mr-2 md:w-2/4"
            >
              針對各種考試<br />
              提供最全面考試制度解析
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="mb-2 flex w-full items-center bg-white p-3 shadow-[0_0_30px_rgba(130,130,130,.2)] md:mr-2 md:w-1/4"
            >
              客製化學習
              <font-awesome-icon class="ml-1" :icon="['font-awesome-icons', 'caret-right']" />
            </div>
            <div
              class="mb-2 flex w-full items-center bg-white p-3 shadow-[0_0_30px_rgba(130,130,130,.2)] md:mr-2 md:w-2/4"
            >
              專業學習顧問<br />
              量身訂製學習計畫
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary-500">
      <div class="px-5 py-10 text-center text-white">
        <p class="text-3xl font-bold">超過 5,000 以上學員</p>
        <p class="mt-3 text-2xl">幫助無數學生考取理想學校、工作職務及相關證照</p>
      </div>

      <Swiper
        ref="swiper"
        :loop="swiperOption.loop"
        :slides-per-view="swiperOption.slidesPerView"
        :space-between="swiperOption.spaceBetween"
        :centered-slides="swiperOption.centeredSlides"
        :breakpoints="swiperOption.breakpoints"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, index) in videoList" :key="index">
          <youtubeVideo :src="item.src" />
        </SwiperSlide>
        <div class="swiper-button-prev" tabindex="0" role="button" @click="swiper.slidePrev()">
          <font-awesome-icon
            class="text-3xl font-black"
            :icon="['font-awesome-icons', 'angle-left']"
          />
        </div>
        <div class="swiper-button-next" tabindex="0" role="button" @click="swiper.slideNext()">
          <font-awesome-icon
            class="text-3xl font-black"
            :icon="['font-awesome-icons', 'angle-right']"
          />
        </div>
      </Swiper>
    </div>

    <div class="container py-10">
      <h2 class="mb-10 text-center text-3xl font-bold">
        預約諮詢<br />
        打造你的專屬上榜秘訣
      </h2>
      <ul class="grid justify-center lg:grid-cols-3">
        <li class="mb-6 text-center hover:-translate-y-2 lg:mb-0">
          <img src="~/assets/img/form_page/require.svg" alt="需求釐清" />
          <p class="my-4 text-2xl font-bold">需求釐清</p>
          <p>
            針對學習狀況<br />
            釐清學員程度與理想目標
          </p>
        </li>
        <li class="mb-6 text-center hover:-translate-y-2 lg:mb-0">
          <img src="~/assets/img/form_page/goal.svg" alt="需求釐清" />
          <p class="my-4 text-2xl font-bold">擬訂計畫</p>
          <p>
            安排適當課程與師資<br />
            幫助學員達成考試目標
          </p>
        </li>
        <li class="mb-6 text-center hover:-translate-y-2 lg:mb-0">
          <img src="~/assets/img/form_page/study.svg" alt="需求釐清" />
          <p class="my-4 text-2xl font-bold">開始學習</p>
          <p>
            提供 24 小時線上課程<br />
            有問題隨時觀看發問
          </p>
        </li>
      </ul>
    </div>

    <div class="flex items-center justify-center bg-secondary-500 p-14">
      <nuxtLink
        class="inline-block w-full border-8 border-solid border-white p-4 text-center text-3xl font-bold text-white lg:w-2/6"
        @click="goTop"
        >預約諮詢</nuxtLink
      >
    </div>
  </div>
</template>
<script setup>
import PublicForm from '@/components/form/PublicForm.vue'
import youtubeVideo from '@/components/video/youtubeVideo'

definePageMeta({
  layout: 'main'
})

const videoList = reactive([
  { src: 'https://www.youtube.com/embed/Xv6wjKUsnvw' },
  { src: 'https://www.youtube.com/embed/Xyj3oMgmq9A' },
  { src: 'https://www.youtube.com/embed/QMrDQ4ZHMZg' },
  { src: 'https://www.youtube.com/embed/QCfS-o_1OiE' },
  { src: 'https://www.youtube.com/embed/wdnvHOrjzsw' }
])

const swiper = ref()

const onSwiper = (swiperObj) => {
  swiper.value = swiperObj
  console.log(swiper.value)
}

const goTop = () => {
  window.scrollTo(0, 0)
}

const swiperOption = reactive({
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  centeredSlides: true,
  breakpoints: {
    720: {
      spaceBetween: 20
    },
    960: {
      spaceBetween: 48
    }
  }
})
</script>
<style lang="scss" scoped>
.unchecked {
  @apply h-[12px] w-[12px] appearance-none rounded-sm outline outline-1 outline-red-500;
}

.swiper-slide {
  @apply h-[135px] w-[240px] md:h-[auto] md:w-[700px];
}

.swiper-button-prev,
.swiper-button-next {
  @apply h-12 
    w-12
    rounded-full 
    bg-[rgba(255,255,255,.9)]
    bg-none
    text-center
    text-[#EA8F83]
    shadow-[0_0_30px_rgba(130,130,130,20%)];
}

.swiper-button-prev::after,
.swiper-button-next::after {
  display: none;
}

.swiper-button-next {
  right: calc(((50% - 350px) - 20px) - 35px);
}

.swiper-button-prev {
  left: calc(((50% - 350px) - 20px) - 35px);
}
</style>
