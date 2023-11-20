<template>
  <section class="pt-4">
    <div class="bg-white py-4">
      <div class="container flex flex-wrap items-center md:flex-nowrap">
        <div class="course-title-pt-outter inline-block w-1/2 max-w-[260px] md:w-full">
          <img
            class="course-title-pt"
            src="~/assets/img/home_page/course-title-pt.webp"
            alt="熱門課程"
          />
        </div>
        <div class="flex grow justify-end md:hidden">
          <div
            :class="[{ 'opacity-30': activeIndex === 0 }, 'course-type-btn mx-1 w-7']"
            @click="goSlide(-1)"
          >
            <img src="~/assets/img/home_page/course-icon-prev.webp" />
          </div>
          <div
            :class="[
              { 'opacity-30': activeIndex === courseData.length - 1 },
              'course-type-btn mx-1 w-7'
            ]"
            @click="goSlide(1)"
          >
            <img src="~/assets/img/home_page/course-icon-next.webp" />
          </div>
        </div>
        <div class="mt-4 w-full grow overflow-hidden md:mt-0 md:w-auto">
          <Swiper
            :modules="swiperTabOption.modules"
            :autoplay="swiperTabOption.autoplay"
            :slides-per-view="swiperTabOption.slidesPerView"
            :breakpoints="swiperTabOption.breakpoints"
            @swiper="tabSwiper"
          >
            <SwiperSlide
              v-for="(item, index) in courseData"
              :key="item"
              :class="activeIndex === index ? 'text-primary-600' : 'text-black'"
              class="swiper-slide cursor-pointer border-l-[1px] border-solid border-l-black text-center text-[1.3rem] font-bold leading-[1]"
              @click="tabClick(item.name, index)"
            >
              <span>{{ item.name }}</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <div class="linear-bg pb-10 md:mt-10">
      <div class="mx-auto max-w-[1460px]">
        <div class="course-content-wrapper flex items-center">
          <div
            :class="{ 'opacity-30': activeIndex === 0 }"
            class="course-nav mx-2 hidden cursor-pointer px-2 md:inline-block"
            @click="goSlide(-1)"
          >
            <div class="course-nav-pre">
              <img class="max-w-none" src="~/assets/img/home_page/course-arrow-prev.webp" />
            </div>
          </div>

          <Swiper
            :modules="swiperContentOption.modules"
            :autoplay="swiperContentOption.autoplay"
            :slides-per-view="swiperContentOption.slidesPerView"
            :space-between="swiperContentOption.spaceBetween"
            @swiper="tabContentSwiper"
            @slide-change="onSlideChange"
          >
            <SwiperSlide v-for="slides in courseData" :key="slides.typeId" class="course-box">
              <div class="course-main-group">
                <a class="course-main-card" :href="slides.ads[0].link" target="_blank">
                  <div class="card-head">
                    <img
                      class="course-img"
                      :src="slides.ads[0].picture"
                      :alt="slides.ads[0].title"
                      :title="slides.ads[0].title"
                    />
                  </div>
                  <div class="card-body">
                    <div class="info-text">
                      <span class="text-line">{{ slides.ads[0].title }}</span>
                    </div>
                    <div class="class-text">
                      <span>{{ slides.ads[0].indexType }}</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="course-second-group">
                <a
                  v-for="item in slides.ads.slice(1)"
                  :key="item.picture"
                  class="course-second-card"
                  :href="item.link"
                  target="_blank"
                >
                  <div class="card-head">
                    <img class="course-img" :src="item.picture" :alt="item.title" />
                  </div>
                  <div class="card-body">
                    <div class="info-text">
                      <span>{{ item.title }}</span>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
          <div
            :class="{ 'opacity-30': activeIndex === courseData.length - 1 }"
            class="course-nav mx-2 hidden cursor-pointer px-2 md:inline-block"
            @click="goSlide(1)"
          >
            <div class="course-nav-next">
              <img class="max-w-none" src="~/assets/img/home_page/course-arrow-next.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
let courseData = reactive([])
const { data: res } = await useApi('/api/ad/popular_subject')
courseData = res.value.data

let tab = reactive({})
let tabContent = reactive({})
const activeIndex = ref<number>(0)

const swiperTabOption = reactive({
  modules: [SwiperAutoplay],
  slidesPerView: 3.6,
  breakpoints: {
    1200: { slidesPerView: 10 },
    960: { slidesPerView: 7 },
    576: { slidesPerView: 5 },
    450: { slidesPerView: 3.6 }
  }
})
const swiperContentOption = reactive({
  modules: [SwiperAutoplay],
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInteraction: false
  },
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '#course-next',
    prevEl: '#course-pre'
  }
})

const tabSwiper = (swiper: any) => {
  tab = swiper
  watch(activeIndex, () => {
    tab.slideTo(activeIndex.value - 2, 200)
  })
}

const tabContentSwiper = (swiper) => {
  tabContent = swiper
  watch(activeIndex, () => {
    tabContent.slideTo(activeIndex.value)
  })
}
const onSlideChange = (swiper) => {
  activeIndex.value = swiper.activeIndex
}
const tabClick = (_: string, index: number) => {
  activeIndex.value = index
}
const goSlide = (i: number) => {
  if ((i > 0 && activeIndex.value < courseData.length - 1) || (i < 0 && activeIndex.value > 0)) {
    activeIndex.value += i
  }
}
</script>
<style lang="scss" scoped>
.course-box {
  @apply flex flex-col gap-[10px] md:flex-row;
  .course-main-group {
    @apply w-full grow p-2 md:w-1/2;
    .course-main-card {
      @apply inline-block w-full shadow-[12px_12px_10px_-10px_rgba(150,150,150,.8)];

      .card-body {
        @apply flex items-center justify-between bg-[#476499] text-2xl text-white;

        .info-text {
          @apply line-clamp-1 
          h-10 
          grow 
          from-[transparent_20px] 
          to-[#309d9a_0px]
          bg-right-top 
          px-3
          font-semibold
          leading-[50px] bg-gradient-[-100deg] md:h-18 
          md:leading-[90px];
        }
        .class-text {
          @apply w-20 text-center tracking-[3px];
        }
      }
    }
  }

  .course-second-group {
    @apply flex w-full flex-wrap gap-4 p-2 md:w-1/2;

    .course-second-card {
      @apply relative w-[45%] grow opacity-100 shadow-[12px_12px_10px_-10px_rgba(150,150,150,80%)];

      .card-body {
        @apply flex h-[42px] items-center justify-center bg-secondary-500 text-lg leading-[42px] text-white;

        .info-text {
          @apply line-clamp-1 grow px-2;
        }
      }
    }
  }

  .course-img {
    @apply inline-block aspect-[307/177] w-full object-cover;
  }
}

.linear-bg {
  background: linear-gradient(1turn, #dbdada 25%, #f9f9f9 88%, #fff 88%);
}
</style>
