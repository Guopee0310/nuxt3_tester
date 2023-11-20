<template>
  <div class="relative flex items-center justify-center bg-white">
    <div class="exam-nav mx-2" @click="goSlide(-1)">
      <span
        id="exam-prev"
        class="transition-300 relative inline-block h-6 w-6 basis-[30px] cursor-pointer rounded-full bg-primary-500 text-white ease-in"
      >
        <font-awesome-icon
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-black"
          :icon="['fas', 'chevron-left']"
        />
      </span>
    </div>

    <Swiper
      :modules="swiperOption.modlues"
      :slides-per-view="swiperOption.slidesPerView"
      :space-between="swiperOption.spaceBetween"
      :breakpoints="swiperOption.breakpoints"
      :centered-slides="swiperOption.centeredSlides"
      :initial-slide="swiperOption.initialSlide"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
    >
      <SwiperSlide v-for="item in examData" :key="item.TS_EXAM_DATA_ID">
        <ExamScheduleCard :exam="item" />
      </SwiperSlide>
      <SwiperSlide>
        <ExamAdCard />
      </SwiperSlide>
    </Swiper>

    <div class="exam-nav mx-2" @click="goSlide(1)">
      <span
        id="exam-next"
        class="transition-300 relative inline-block h-6 w-6 basis-[30px] cursor-pointer rounded-full bg-primary-500 text-white ease-in"
      >
        <font-awesome-icon
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-black"
          :icon="['fas', 'chevron-right']"
        />
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import ExamScheduleCard from '@/components/card/ExamScheduleCard.vue'
import ExamAdCard from '@/components/card/ExamAdCard.vue'

const activeIndex = ref<number>(0)
let swiper = reactive<any>({})

const onSwiper = (s: any) => {
  swiper = s
  watch(activeIndex, () => {
    swiper.slideTo(activeIndex.value)
  })
}

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.activeIndex
}

const goSlide = (i: number) => {
  if ((i > 0 && activeIndex.value < swiper.slides.length - 1) || (i < 0 && activeIndex.value > 0)) {
    activeIndex.value += i
  }
}

defineProps({
  swiperOption: {
    type: Object,
    default() {
      return {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        initialSlide: 2, // 設定起始slider
        breakpoints: {
          1401: {
            initialSlide: 1
          },
          450: {
            initialSlide: 0,
            lazy: {
              loadPrevNext: true,
              loadPrevNextAmount: 3
            }
          }
        }
      }
    }
  }
})

// let examData = reactive([])
// const { data: res } = await useApi('/api/exam/examInfo_byhome')
// examData = res.value.result.data
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 280px;
}

.swiper-button-disabled {
  background: #ababab;
}

.ex-month {
  background-image: url('https://www.tkbgo.com.tw/tkbgo_newIndex/img/exam-month.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  padding: 0;

  h2 {
    @apply mt-2 text-lg font-bold;
    color: #7c7c7c;
  }

  .ex-mon-box {
    @apply mx-auto mt-8 flex w-full flex-col items-center;
  }

  .ex-encourage {
    width: 70%;
    background-color: #e5e5e5;
    margin: 0px auto 0;
    height: 224px;
    padding: 10px 15px;
    font-size: 16px;
    position: relative;
  }
}
</style>
