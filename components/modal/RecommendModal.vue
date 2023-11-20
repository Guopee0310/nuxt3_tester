<template>
  <div class="fixed inset-0 z-20 m-auto overflow-y-auto overflow-x-hidden">
    <div class="fixed m-auto h-full w-full bg-[rgba(0,0,0,0.705)]"></div>
    <div class="relative mx-4 my-[120px] max-w-[1000px] lg:mx-auto">
      <div class="absolute -top-12 right-0 h-12 w-12 cursor-pointer" @click="$emit('controlModal')">
        <img src="~/assets/img/home_page/rec-modal-btn-close.webp" />
      </div>
      <div class="overflow-hidden rounded-xl bg-white">
        <div class="relative flex justify-between overflow-hidden">
          <div
            class="flex flex-[0_1_calc(100%-180px)] flex-col flex-wrap justify-center py-4 pl-3 pr-2 md:flex-[0_1_calc(100%-315px)]"
          >
            <div class="md:leading-auto mb-1 text-sm leading-[1] text-[#ec6941] md:text-lg">
              TKB學員
            </div>
            <span class="md:leading-auto mb-2 text-lg font-bold text-black md:text-3xl"
              >考取學校 國立台灣大學會計學系</span
            >
            <span class="md:leading-auto text-base leading-[1] md:text-[1.65rem]">莊Ｏ安</span>
          </div>
          <div
            class="pic-box relative right-0 top-0 h-[120px] w-[120px] bg-cover bg-center bg-no-repeat md:h-[200px] md:w-[200px]"
            style="background: url('~/assets/img/home_page/rec-student-1.webp')"
          ></div>
        </div>
        <div class="px-3 py-2">
          <h3 class="mb-2 text-xl font-bold text-[#ec6941]">銀行招考心得〡兆豐銀行辦事員正取</h3>
          <div>
            <p
              class="mb-4 text-justify text-base tracking-[2px] text-base-700 md:text-lg md:leading-[1.8]"
            >
              兩位TKB的老師對我的幫助其實都非常的大，非常的謝謝老師！貨銀是是在所有科目中，對我來說最困難的一科，尤其是在後半段碰上IS、LM比較複雜的理論，TKB貨銀老師在這部分的畫圖教學非常詳細，每一個步驟都一步一步畫完全不跳過，對於理解非常有幫助。<br />
              很感謝TKB會計老師在會計上講解還會搭配統整的表格，整個架構非常清楚，上課也會帶非常多的練習題，除了詳解，還會教許多解題技巧，幫助我們更快解答！畢竟考試時間其實非常緊湊，這樣子的技巧是自己複習時抓不出來的，幫助很大。
            </p>
          </div>
        </div>
        <div class="flex flex-col px-3 py-2">
          <div class="flex items-center">
            <div class="mr-2">
              <img src="~/assets/img/home_page/rec-modal-icon1.webp" />
            </div>
            <span class="inline-block text-xl font-bold text-black">上榜學員使用課程</span>
          </div>
        </div>
        <div class="mt-7 bg-[#ede6cd] px-3">
          <div class="-translate-y-6">
            <CourseSwiperCard />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseSwiperCard from '@/components/card/CourseSwiperCard.vue'
export default {
  components: {
    CourseSwiperCard
  },
  data() {
    return {
      swiperOption: {
        observer: true, // 修改swiper自己或子元素時，自動初始化swiper
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 8,
        autoHeight: false,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.rec-modal-btn-next',
          prevEl: '.rec-modal-btn-pre'
        },
        breakpoints: {
          1200: {
            slidesPerView: 5
          },
          960: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          576: {
            slidesPerView: 2
          }
        },
        rewind: true,
        loop: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pic-box::before {
  content: '';
  background-image: url('~/assets/img/home_page/rec-modal-frame-1.webp');
  @apply absolute -left-[68px] bottom-0 top-0 block w-[calc(100%_+_68px)] bg-cover md:-left-[114px] md:w-[calc(100%_+_114px)];
}
</style>
