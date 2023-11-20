<template>
  <div>
    <div class="video_block">
      <div
        class="mx-auto flex max-w-[1170px] flex-col flex-wrap overflow-hidden px-0 lg:flex-row lg:px-3"
      >
        <BreadcrumbS2 class="order-first basis-full px-3 py-3 lg:px-0" />
        <div class="order-1 w-full overflow-hidden lg:w-[calc(100%_-_440px)]">
          <div class="relative text-center">
            <img
              class="h-full max-w-full"
              src="https://www.tkbtv.com.tw/upload/subject/20200703090526273773.webp"
            />
            <div class="play_btn"></div>
          </div>
        </div>

        <!-- 全修 -->
        <FullCourseInfoBox />

        <!-- 單科 -->
        <SingleCourseInfoBox v-if="false" />

        <div
          class="relative order-2 w-full px-3 py-3 lg:order-3 lg:w-[calc(100%_-_440px)] lg:px-0 lg:pt-11"
        >
          <!--相關影音區塊-->
          <div
            class="relative mx-auto max-w-[645px] overflow-hidden rounded-l bg-base-100 py-2 pl-9 pr-3 lg:overflow-visible"
          >
            <div
              class="writing-mode-vertical absolute left-0 top-0 h-full w-6 rounded-l bg-secondary-500 p-1 text-center leading-[1.3] text-white"
            >
              相關影音
            </div>
            <div
              v-swiper:reviewSwiper="{
                slidesPerView: 'auto',
                spaceBetween: 15,
                navigation: {
                  nextEl: '.review_next',
                  prevEl: '.review_prev'
                }
              }"
              class="swiper-container video-swiper"
            >
              <div class="swiper-wrapper">
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide w-[105px]">
                  <div class="youtube">
                    <div
                      class="thumbnail"
                      style="
                        background-image: url('https://www.tkbtv.com.tw/upload/pic/2021081816472518361.jpg');
                      "
                    ></div>
                    <div class="thumbnail_mask"></div>
                    <div class="play_button">
                      <i class="far fa-play-circle"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="review_prev absolute inset-y-0 -left-6 m-auto h-4 w-4 rounded-full bg-secondary-500 bg-none"
            >
              <fa
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white"
                :icon="['fa', 'angle-left']"
              />
            </div>
            <div
              class="review_next absolute inset-y-0 -right-6 m-auto h-4 w-4 rounded-full bg-secondary-500 bg-none"
            >
              <fa
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white"
                :icon="['fa', 'angle-right']"
              />
            </div>
          </div>
        </div>
        <div class="order-4 w-full px-3 py-3 lg:ml-8 lg:w-auto lg:px-0 lg:pt-11">
          <div class="flex flex-col justify-center sm:flex-row-reverse">
            <button
              class="mx-0 my-1 h-12 w-full rounded bg-[#f7687a] text-lg tracking-[5px] text-white shadow-[5px_5px_5px_rgba(10,10,10,.116)] duration-200 ease-in-out hover:opacity-90 sm:mx-1 md:w-[300px] lg:h-14 lg:w-[190px]"
            >
              <fa :icon="['fa', 'cart-plus']" />
              加入購物車
            </button>
            <button
              class="mx-0 my-1 h-12 w-full rounded bg-secondary-500 text-lg tracking-[5px] text-white shadow-[5px_5px_5px_rgba(10,10,10,.116)] duration-200 ease-in-out hover:opacity-90 sm:mx-1 md:w-[300px] lg:h-14 lg:w-[190px]"
            >
              <fa :icon="['far', 'comment']" />
              立即諮詢
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container bg-white">
      <div class="j-mimosa-nav">
        <div class="mb-8 flex bg-base-100">
          <div
            :class="
              currentView === 'CourseIntro' ? 'border-b-2 border-solid border-secondary-500' : ''
            "
            class="basis-1/4 cursor-pointer py-3 text-center text-[16px] tracking-[10px]"
            @click="currentView = 'CourseIntro'"
          >
            <fa class="hidden lg:inline" :icon="['fa', 'circle-exclamation']" />
            <span class="hidden lg:inline">課程</span>介紹
          </div>
          <div
            :class="
              currentView === 'ChooseCourse' ? 'border-b-2 border-solid border-secondary-500' : ''
            "
            class="basis-1/4 cursor-pointer py-3 text-center text-[16px] tracking-[10px]"
            @click="currentView = 'ChooseCourse'"
          >
            <fa class="hidden lg:inline" :icon="['fa', 'layer-group']" />
            課程<span class="hidden lg:inline">選擇</span>
          </div>
          <div
            :class="currentView === 'Qa' ? 'border-b-2 border-solid border-secondary-500' : ''"
            class="basis-1/4 cursor-pointer py-3 text-center text-[16px] tracking-[10px]"
            @click="currentView = 'Qa'"
          >
            <fa class="hidden lg:inline" :icon="['fa', 'circle-question']" />
            Q&amp;A
          </div>
          <div
            class="basis-1/4 cursor-pointer bg-[#f7687a] py-3 text-center text-[16px] tracking-[10px] text-white"
          >
            <fa :icon="['fa', 'cart-plus']" />
            <span class="hidden lg:inline">購物車</span>
          </div>
        </div>
      </div>
      <div class="my-6 flex flex-wrap items-center">
        <span class="mr-2 text-lg">課程列表</span>
        <ButtonS1>理工研究所 - 電機所光電所通訊所</ButtonS1>
      </div>
      <div>
        <component :is="currentView"></component>
      </div>
    </div>
    <div class="container">
      <div class="mb-1 block text-lg font-bold text-secondary-500">
        如有課程相關問題 歡迎與我們進行聯繫
      </div>
      <div class="inline-block align-text-bottom">聯絡方式 周一至周五 10:00-19:00</div>
      <div class="inline-block align-text-bottom">電話：(02)5580-5608、0985-368-799</div>
      <div class="inline-block align-text-bottom">台北市中正區開封街一段32號11樓</div>
    </div>
    <div class="my-6 bg-base-100 py-6">
      <div class="container">
        <div class="mb-2 flex items-center">
          <div class="text-xl font-bold tracking-[10px]">推薦課程</div>
          <hr class="ml-2 h-[1px] w-16 border-0 bg-gradient-to-r from-primary-500 to-[#ffddaa]" />
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            class="flex"
            href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1800227&amp;subject_no=&amp;class_type="
          >
            <img
              class="w-[115px]"
              src="https://www.tkbtv.com.tw/upload/subject/20200703090425273541.webp"
            />
            <div class="ml-4">
              <div class="font-bold">研究所-化學所(三科)-雲端</div>
              <div class="text-sm text-base-500">$ 38,000</div>
            </div>
          </a>
          <a
            class="flex"
            href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1800227&amp;subject_no=&amp;class_type="
          >
            <img
              class="w-[115px]"
              src="https://www.tkbtv.com.tw/upload/subject/20200703090425273541.webp"
            />
            <div class="ml-4">
              <div class="font-bold">研究所-化學所(三科)-雲端</div>
              <div class="text-sm text-base-500">$ 38,000</div>
            </div>
          </a>
          <a
            class="flex"
            href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1800227&amp;subject_no=&amp;class_type="
          >
            <img
              class="w-[115px]"
              src="https://www.tkbtv.com.tw/upload/subject/20200703090425273541.webp"
            />
            <div class="ml-4">
              <div class="font-bold">研究所-化學所(三科)-雲端</div>
              <div class="text-sm text-base-500">$ 38,000</div>
            </div>
          </a>
          <a
            class="flex"
            href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1800227&amp;subject_no=&amp;class_type="
          >
            <img
              class="w-[115px]"
              src="https://www.tkbtv.com.tw/upload/subject/20200703090425273541.webp"
            />
            <div class="ml-4">
              <div class="font-bold">研究所-化學所(三科)-雲端</div>
              <div class="text-sm text-base-500">$ 38,000</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadcrumbS2 from '@/components/breadcrumb/BreadcrumbS2'
import ButtonS1 from '@/components/button/ButtonS1'
import FullCourseInfoBox from '@/components/views/product/FullCourseInfoBox.vue'
import SingleCourseInfoBox from '@/components/views/product/SingleCourseInfoBox.vue'
import CourseIntro from '@/components/views/product/CourseIntro.vue'
import ChooseCourse from '@/components/views/product/ChooseCourse.vue'
import Qa from '@/components/views/product/Qa.vue'

export default {
  components: {
    BreadcrumbS2,
    ButtonS1,
    FullCourseInfoBox,
    SingleCourseInfoBox,
    CourseIntro,
    ChooseCourse,
    Qa
  },
  layout: 'main',
  data() {
    return {
      subjectType: '',
      currentView: 'CourseIntro'
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/youtube_lazyload';
.video_block {
  @apply mb-10;
  background: linear-gradient(
    180deg,
    rgba(41, 48, 59, 1) 0%,
    rgba(41, 48, 59, 1) 82%,
    rgba(255, 255, 255, 1) 82%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 10px 20px rgb(20 20 20 / 10%);
}
.play_btn {
  @apply absolute left-0 top-0 block h-full w-full cursor-pointer;
}
.play_btn:hover::before {
  content: '';
  @apply bg-base-900 opacity-100;
}
.play_btn::before {
  content: '';
  @apply absolute inset-0 z-10 m-auto h-[60px] w-[100px] rounded bg-base-900 opacity-80 duration-200 ease-in;
}
.play_btn::after {
  content: '';
  @apply absolute inset-y-0 left-[30px] right-0 z-10 m-auto block h-0 w-0;
  border-color: transparent transparent transparent rgb(221, 221, 221);
  border-style: solid;
  border-width: 20px 30px;
}
:deep .video-swiper {
  .swiper-slide {
    width: 105px !important;
  }
}
.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
</style>
