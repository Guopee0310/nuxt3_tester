<template>
  <div class="overflow-hidden">
    <div
      class="relative -ml-[47vw] mr-auto w-[195vw] lg:ml-[calc(-960px_+_50%)] lg:h-[500px] lg:w-[1920px]"
    >
      <BannerMenu />
      <GoIndexBanner />
    </div>
    <ProductType />
    <section class="bg-[#3e4870] px-5 py-4 md:py-8">
      <div class="container flex justify-around">
        <img
          class="mx-2 w-1/3 md:w-auto"
          src="~/assets/img/home_page/honor-img-1.webp"
          alt="課程齊全1,985課程"
        />
        <img
          class="mx-2 w-1/3 md:w-auto"
          src="~/assets/img/home_page/honor-img-2.webp"
          alt="上榜見證10,000+學員"
        />
        <img
          class="mx-2 w-1/3 md:w-auto"
          src="~/assets/img/home_page/honor-img-3.webp"
          alt="優質名師100+老師"
        />
      </div>
    </section>
    <HotCourse />
    <section class="py-4">
      <!-- exam-title -->
      <div class="bg-white py-4">
        <div class="container flex items-center justify-between gap-4">
          <div
            class="inline-block w-full max-w-[220px] flex-[1_1_220px] md:max-w-[260px] md:flex-[1_1_260px]"
          >
            <img
              class="exam-title-pt"
              src="~/assets/img/home_page/exam-title-pt.webp"
              alt="考試時程表"
            />
          </div>
          <a
            class="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-primary-500 text-xl text-white shadow-[inset_-2px_-1px_0] shadow-primary-500 duration-400 ease-in hover:opacity-80 md:w-[145px] md:rounded-3xl"
            target="_blank"
            href="https://www.tkbgo.com.tw/examCalendar/toExamCalendarIndex.jsp?print_id=9876"
          >
            <i class="fas fa-bell"></i>
            <font-awesome-icon class="mx-1" :icon="['fas', 'bell']" />
            <span class="hidden md:inline-block">行事曆設定</span>
          </a>
        </div>
      </div>
      <div class="mx-auto block bg-white md:hidden">
        <div class="container">
          <div class="mb-4">
            <img src="~/assets/img/home_page/exam-mark-mb.webp" alt="考試時程表" />
          </div>
        </div>
      </div>
      <!-- exam-content -->
      <div>
        <div class="mx-auto max-w-[1460px]">
          <ExamScheduleSwiperCard />
        </div>
      </div>
      <div class="mb-4 mt-6 hidden bg-white px-4 md:block">
        <div class="flex items-center justify-center">
          <div class="mx-auto max-w-[650px]">
            <img src="~/assets/img/home_page/exam-mark-pt.webp" alt="考試時程表" />
          </div>
        </div>
      </div>
    </section>
    <section
      class="to-[rgba(252,252,252,1)]_100% bg-gradient-to-b from-[rgba(219,218,218,1)_0%] via-[rgba(236,236,236,1)_68%] py-4"
    >
      <div class="mb-4 py-4">
        <div class="container flex items-center justify-start">
          <div class="w-full max-w-[400px]">
            <img
              src="~/assets/img/home_page/recommend-title-pt.webp"
              alt="來自TKB購課網學生的評價"
            />
          </div>
        </div>
      </div>
      <div class="recommend-content">
        <div class="container mx-auto">
          <RecommendSwiperCard />
        </div>
      </div>
    </section>
    <VideoArea />
  </div>
</template>

<script setup>
import GoIndexBanner from '@/components/banner/GoIndexBanner'
import BannerMenu from '@/components/views/homePage/BannerMenu'
import HotCourse from '@/components/views/homePage/HotCourse'
import ProductType from '@/components/views/homePage/ProductType'
import ExamScheduleSwiperCard from '@/components/card/ExamScheduleSwiperCard.vue'
import RecommendSwiperCard from '@/components/card/RecommendSwiperCard.vue'
import VideoArea from '@/components/views/homePage/VideoArea.vue'

definePageMeta({
  layout: 'main'
})
</script>

<style lang="scss" scoped></style>
