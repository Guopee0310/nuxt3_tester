<template>
  <Swiper
    class="swiper-coverchar"
    :modules="[SwiperNavigation]"
    :loop="true"
    :slides-per-view="1.2"
    :space-between="15"
    :centered-slides="true"
    :initial-slide="3"
    :navigation="{ nextEl: '.swiper-coverchar-next', prevEl: '.swiper-coverchar-prev' }"
    :breakpoints="{
      [breakpointsInt('md')]: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }"
    @slide-change-transition-end="onSlideChangeTransitionEnd"
  >
    <SwiperSlide v-for="(item, index) in videoDatas" :key="index">
      <div class="swiper-coverchar-item">
        <img :src="item.imgSrc" :alt="item.title" :title="item.title" />
      </div>
    </SwiperSlide>
    <div class="swiper-coverchar-frame" @click="covercharClick">
      <div class="swiper-coverchar-frame-btn">
        <div><font-awesome-icon :icon="['fas', 'play']" /></div>
      </div>
    </div>
    <div class="swiper-coverchar-prev">
      <div><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
    </div>
    <div class="swiper-coverchar-next">
      <div><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
    </div>
  </Swiper>
</template>

<script setup>
import videoImg0 from '@/assets/img/graduate/video_01.webp'
import videoImg1 from '@/assets/img/graduate/video_02.webp'
import videoImg2 from '@/assets/img/graduate/video_03.webp'
import videoImg3 from '@/assets/img/graduate/video_04.webp'
import videoImg4 from '@/assets/img/graduate/video_05.webp'
import videoImg5 from '@/assets/img/graduate/video_06.webp'
import videoImg6 from '@/assets/img/graduate/video_07.webp'
const { breakpointsInt } = useTailwindConfig()
const videoDatas = reactive([
  {
    videoSrc: 'https://www.youtube.com/embed/hdp-xJD9l7w',
    imgSrc: videoImg0,
    title: '【升學考試】經濟魔法師楊莉 凌晨飆車無極限'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/cHTgNUGW--U',
    imgSrc: videoImg1,
    title: '【升學考試】潘奕學生都這樣說 化學考高分的最大關鍵'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/1qF932Do5Wc',
    imgSrc: videoImg2,
    title: '【升學考試】周易學生都這樣說 工程數學考高分的最大關鍵'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/avpS7R4cWaY',
    imgSrc: videoImg3,
    title: '【升學考試】大碩研究所 慶功宴被學霸包圍啦'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/iNS-h-5-Bb0',
    imgSrc: videoImg4,
    title: '【升學考試】電磁學完整介紹 劉強老師獨家開箱'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/WcWlJJMBaxQ',
    imgSrc: videoImg5,
    title: '【升學考試】張翔學生都這樣說 統計學考高分的最大關鍵'
  },
  {
    videoSrc: 'https://www.youtube.com/embed/Y8GH-QGORUk',
    imgSrc: videoImg6,
    title: '【升學考試】考研究所有哪些管道？有科系限制嗎？能與推甄一起準備嗎？研究所必知ＱＡ'
  }
])
const emit = defineEmits(['onSlideChangeTransitionEnd', 'covercharClick'])
const onSlideChangeTransitionEnd = (swiper) => {
  // 若用slide-change因loop會有重複的slide，所以用slide-change-transition-end。
  let paravideo = ''
  let paratitle = ''
  videoDatas.forEach((element, i) => {
    if (i === swiper.realIndex) {
      // 因loop第幾個使用swiper.realIndex，實際.swiper-slide-active的為swiper.activeIndex。
      paravideo = element.videoSrc
      paratitle = element.title
    }
  })
  // console.log('影片：', paravideo, '\n標題：', paratitle)
  emit('onSlideChangeTransitionEnd', paravideo, paratitle)
}
const covercharClick = () => {
  emit('covercharClick')
}
</script>

<style lang="scss" scoped>
.swiper-coverchar {
  @apply flex justify-center;
}
.swiper-coverchar-item {
  @apply flex h-0 shrink-0 justify-center pb-[56.25%] opacity-20;
  > img {
    @apply absolute block aspect-auto h-full w-full object-cover;
  }
}
.swiper-slide-active > .swiper-coverchar-item {
  @apply opacity-100;
}
.swiper-coverchar-frame {
  @apply absolute top-0 z-[1] flex aspect-video h-full cursor-pointer items-center justify-center border-8 border-solid border-primary-500;
}
.swiper-coverchar-frame-btn {
  @apply relative flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary-500;
  > * {
    @apply absolute flex h-15 w-15 items-center justify-center rounded-full border-2 border-solid border-primary-500 pl-1 text-center text-5xl font-bold text-primary-500;
  }
}
.swiper-coverchar-prev,
.swiper-coverchar-next {
  @apply absolute top-[calc(50%-20px)] z-[1] hidden cursor-pointer items-center md:flex xl:top-[calc(50%-30px)];
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
</style>
