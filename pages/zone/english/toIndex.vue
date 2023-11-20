<template>
  <div>
    <EnglishIndexBanner :default-data="indexBannerData" />
    <div class="grid grid-cols-1 gap-y-10 bg-base-50 py-10">
      <div class="container flex flex-col gap-y-4">
        <EnglishTitleMain>
          <template #title>強檔熱銷</template>
          <template #subtitle>HOT</template>
        </EnglishTitleMain>
        <div class="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-10">
          <div>
            <nuxt-link
              to="/go_edm/edm703/index"
              class="relative flex h-[130px] w-full items-center justify-center overflow-clip rounded-lg bg-[url('@/assets/img/tkbgo_english/hotImg01.webp')] bg-cover shadow-lg before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:bg-black before:opacity-40 before:transition before:content-[''] hover:!opacity-100 hover:shadow-md hover:before:opacity-10 lg:h-[160px]"
            >
              <picture>
                <!-- 說明：電腦banner尺寸。 -->
                <source
                  :media="'(min-width:' + tailwinds.theme.screens.md + ')'"
                  srcset="@/assets/img/tkbgo_english/hotIcon01.svg"
                />
                <!-- 說明：手機banner尺寸。 -->
                <img class="relative" src="@/assets/img/tkbgo_english/hotIcon01_mb.svg" />
              </picture>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              to="/go_edm/edm630/index"
              class="relative flex h-[130px] w-full items-center justify-center overflow-clip rounded-lg bg-[url('@/assets/img/tkbgo_english/hotImg02.webp')] bg-cover shadow-lg before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:bg-black before:opacity-40 before:transition before:content-[''] hover:!opacity-100 hover:shadow-md hover:before:opacity-10 lg:h-[160px]"
            >
              <picture>
                <!-- 說明：電腦banner尺寸。 -->
                <source
                  :media="'(min-width:' + tailwinds.theme.screens.md + ')'"
                  srcset="@/assets/img/tkbgo_english/hotIcon02.svg"
                />
                <!-- 說明：手機banner尺寸。 -->
                <img class="relative" src="@/assets/img/tkbgo_english/hotIcon02_mb.svg" />
              </picture>
            </nuxt-link>
          </div>
          <div>
            <nuxt-link
              to="/go_edm/edm213/index"
              class="relative flex h-[130px] w-full items-center justify-center overflow-clip rounded-lg bg-[url('@/assets/img/tkbgo_english/hotImg03.webp')] bg-cover shadow-lg before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:bg-black before:opacity-40 before:transition before:content-[''] hover:!opacity-100 hover:shadow-md hover:before:opacity-10 lg:h-[160px]"
            >
              <picture>
                <!-- 說明：電腦banner尺寸。 -->
                <source
                  :media="'(min-width:' + tailwinds.theme.screens.md + ')'"
                  srcset="@/assets/img/tkbgo_english/hotIcon03.svg"
                />
                <!-- 說明：手機banner尺寸。 -->
                <img class="relative" src="@/assets/img/tkbgo_english/hotIcon03_mb.svg" />
              </picture>
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>好評課程</template>
            <template #subtitle>Courses</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-course-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-course-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/product/toProductType?group=138&type=433"
              >More</EnglishButton
            >
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1.2"
            :navigation="{ nextEl: '.j-course-next', prevEl: '.j-course-prev' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 2.1
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 3
              }
            }"
          >
            <SwiperSlide class="px-1 pb-1 sm:px-2 lg:px-5">
              <EnglishCourseCard
                summary="開頭內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容結尾"
                price="10000"
              />
            </SwiperSlide>
            <SwiperSlide class="px-1 pb-1 sm:px-2 lg:px-5">
              <EnglishCourseCard
                summary="開頭內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容結尾"
                price="10000"
                sale="10001"
              />
            </SwiperSlide>
            <SwiperSlide class="px-1 pb-1 sm:px-2 lg:px-5">
              <EnglishCourseCard
                summary="開頭內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容結尾"
                price="10000"
                sale="9999"
              />
            </SwiperSlide>
            <SwiperSlide class="px-1 pb-1 sm:px-2 lg:px-5">
              <EnglishCourseCard
                summary="開頭內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容結尾"
                price="20000"
                sale="15000"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/product/toProductType?group=138&type=433"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-y-10 py-10">
      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>最新消息</template>
            <template #subtitle>News</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-news-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-news-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/zone/english/news/toNewsList">More</EnglishButton>
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1.2"
            :space-between="30"
            :navigation="{ nextEl: '.j-news-next', prevEl: '.j-news-prev' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 2.1,
                spaceBetween: 30
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }"
          >
            <SwiperSlide v-for="item in indexNewsData" :key="item.id">
              <EnglishArticleCard
                :to="`/zone/english/news/toNewsDetail?news_id=${item.id}`"
                :img-src="item.picture"
                :main-title="item.title"
                :summary="item.subTitle"
                :update-date="item.date"
                :clicks="item.clicks"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/zone/english/news/toNewsList"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>

      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>課表總覽</template>
            <template #subtitle>Timetable</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-newcourse-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-newcourse-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/zone/english/news/toNewsList">More</EnglishButton>
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1.2"
            :space-between="30"
            :navigation="{ nextEl: '.j-newcourse-next', prevEl: '.j-newcourse-prev' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 2.1,
                spaceBetween: 30
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }"
          >
            <SwiperSlide v-for="item in indexNewCourseData" :key="item.id">
              <EnglishArticleCard
                :to="`/zone/english/news/toNewsDetail?news_id=${item.id}`"
                :img-src="item.picture"
                :main-title="item.title"
                :summary="item.subTitle"
                :update-date="item.date"
                :clicks="item.clicks"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/zone/english/news/toNewsList"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>
    </div>

    <div class="flex flex-col xl:flex-row">
      <div class="xl:w-1/2 xl:min-w-[800px]">
        <Swiper
          :modules="[EffectFade, SwiperAutoplay, Controller, SwiperNavigation]"
          :controller="{ control: indexLectureControlled }"
          :loop="true"
          :effect="'fade'"
          :fade-effect="{
            crossFade: true
          }"
          :autoplay="{
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }"
          :navigation="{
            nextEl: '.j-lecture-next',
            prevEl: '.j-lecture-prev'
          }"
          @slide-change-transition-end="onIndexLectureSlideChange"
        >
          <SwiperSlide v-for="item in indexLectureData" :key="item.id">
            <nuxt-link :to="`/zone/english/lecture/toLectureDetail?lecture_id=${item.id}`">
              <div class="aspect-[55/19]">
                <img
                  class="block aspect-auto h-full w-full object-cover"
                  :src="item.picUrl"
                  :title="item.title"
                  :alt="item.title"
                />
              </div>
            </nuxt-link>
          </SwiperSlide>
          <div
            class="j-lecture-prev absolute left-0 top-0 z-10 flex h-full w-8 cursor-pointer flex-col items-center justify-center bg-gradient-to-r from-[rgba(0,0,0,0.5)] opacity-50 transition before:block before:h-6 before:w-[2px] before:-skew-x-[24deg] before:bg-white before:content-[''] after:block after:h-6 after:w-[2px] after:skew-x-[24deg] after:bg-white after:content-[''] hover:opacity-100"
          ></div>
          <div
            class="j-lecture-next absolute right-0 top-0 z-10 flex h-full w-8 cursor-pointer flex-col items-center justify-center bg-gradient-to-l from-[rgba(0,0,0,0.5)] opacity-50 transition before:block before:h-6 before:w-[2px] before:skew-x-[24deg] before:bg-white before:content-[''] after:block after:h-6 after:w-[2px] after:-skew-x-[24deg] after:bg-white after:content-[''] hover:opacity-100"
          ></div>
        </Swiper>
      </div>
      <div
        class="flex flex-1 cursor-pointer flex-col gap-4 bg-secondary-700 py-4 text-white xl:w-1/2 xl:max-w-[calc(100%-800px)] xl:py-8"
        @click.stop="
          $router.push(`/zone/english/lecture/toLectureDetail?lecture_id=${indexLectureActiveId}`)
        "
      >
        <div class="flex gap-2">
          <h1
            class="block border border-solid border-secondary-900 bg-secondary-900 px-4 py-2 text-4xl font-semibold leading-none"
          >
            英文講座
          </h1>
          <div
            class="flex cursor-pointer items-center justify-center border border-solid border-white px-4 text-2xl leading-none transition hover:bg-white hover:text-secondary-700"
            @click.stop="$router.push('/zone/english/lecture/toLectureList')"
          >
            More
          </div>
        </div>
        <div class="h-full">
          <Swiper
            :modules="[EffectFade, Controller]"
            :loop="true"
            :effect="'fade'"
            :fade-effect="{
              crossFade: true
            }"
            class="h-full"
            @swiper="setIndexLectureControlled"
          >
            <SwiperSlide v-for="item in indexLectureData" :key="'text' + item.id" class="h-full">
              <div class="flex h-full flex-col gap-2 pl-4 pr-4 md:pr-15">
                <h4 class="line-clamp-1 text-2xl font-semibold">{{ item.title }}</h4>
                <div class="flex-1">
                  <p class="line-clamp-2">{{ item.description }}</p>
                </div>
                <div class="flex justify-end gap-4">
                  <div>
                    <font-awesome-icon :icon="['fas', 'calendar-week']" class="mr-1" />{{
                      item.earlyDate + ' ~ ' + item.lastesDate
                    }}
                  </div>
                  <div>
                    <font-awesome-icon :icon="['far', 'eye']" class="mr-1" />{{ item.checkNum }}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 bg-primary-50 py-10">
      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>英文影音</template>
            <template #subtitle>Video</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-video-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-video-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/zone/english/video/toVideoList?ts_pc2=4190"
              >More</EnglishButton
            >
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperPagination, SwiperNavigation]"
            :slides-per-view="1.2"
            :space-between="30"
            :pagination="{
              el: '.j-video-pagination',
              clickable: true
            }"
            :navigation="{ nextEl: '.j-video-next-mob', prevEl: '.j-video-prev-mob' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 2.1,
                spaceBetween: 30,
                navigation: { nextEl: '.j-video-next', prevEl: '.j-video-prev' }
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 3,
                spaceBetween: 30,
                navigation: { nextEl: '.j-video-next', prevEl: '.j-video-prev' }
              }
            }"
          >
            <SwiperSlide v-for="item in indexVideoData" :key="item.id">
              <div>
                <youtubeVideo src="https://www.youtube.com/embed/fJ82VbKDR1w" />
                <h4 class="border border-solid border-base-300 bg-white p-2">
                  <div class="line-clamp-1 text-xl font-semibold">{{ item.title }}</div>
                </h4>
              </div>
            </SwiperSlide>
            <div
              v-show="windowWidth < breakpointsInt('md')"
              class="video-pagination j-video-pagination"
            ></div>
            <div
              v-show="windowWidth < breakpointsInt('md')"
              class="swiper-btn j-video-prev-mob absolute bottom-0 left-0"
            >
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div
              v-show="windowWidth < breakpointsInt('md')"
              class="swiper-btn j-video-next-mob absolute bottom-0 right-0"
            >
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/zone/english/video/toVideoList?ts_pc2=4190"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>
    </div>
    <div
      class="h-6 bg-[url('@/assets/img/tkbgo_english/pixel_bottom.svg')] bg-repeat-x lg:h-10"
    ></div>

    <div class="grid grid-cols-1 gap-y-10 py-10">
      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>英文文章</template>
            <template #subtitle>Article</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-article-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-article-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/zone/english/article/toArticleList?type_id=41"
              >More</EnglishButton
            >
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1.2"
            :space-between="30"
            :navigation="{ nextEl: '.j-article-next', prevEl: '.j-article-prev' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 2.1,
                spaceBetween: 30
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }"
          >
            <SwiperSlide v-for="item in indexArticleData" :key="item.id">
              <EnglishArticleCard
                :to="`/zone/english/article/toArticleDetail?article_id=${item.id}`"
                :img-src="item.picture"
                :main-title="item.title"
                :summary="item.secTitle"
                :update-date="item.onlineDate"
                :clicks="item.checkNum"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/zone/english/article/toArticleList?type_id=41"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>
      <div class="container flex flex-col gap-y-4">
        <div class="flex items-center justify-between">
          <EnglishTitleMain>
            <template #title>學員心得</template>
            <template #subtitle>Feedback</template>
          </EnglishTitleMain>
          <div v-show="windowWidth >= breakpointsInt('md')" class="flex gap-1">
            <div class="swiper-btn j-feedback-prev">
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div class="swiper-btn j-feedback-next">
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
            <EnglishButton class="w-19" to="/zone/english/review/toReviewList?page_type=4182"
              >More</EnglishButton
            >
          </div>
        </div>
        <div>
          <Swiper
            :modules="[SwiperNavigation]"
            :slides-per-view="1"
            :navigation="{ nextEl: '.j-feedback-next-mob', prevEl: '.j-feedback-prev-mob' }"
            :breakpoints="{
              [breakpointsInt('md')]: {
                slidesPerView: 1,
                navigation: { nextEl: '.j-feedback-next', prevEl: '.j-feedback-prev' }
              },
              [breakpointsInt('lg')]: {
                slidesPerView: 2,
                navigation: { nextEl: '.j-feedback-next', prevEl: '.j-feedback-prev' }
              }
            }"
          >
            <SwiperSlide v-for="item in indexVideoData" :key="item.id" class="p-4">
              <nuxt-link class="group hover:!opacity-100">
                <div
                  class="relative flex flex-col gap-3 rounded bg-white p-3 shadow-[0px_0px_15px_rgba(0,0,0,0.1)] transition group-hover:shadow-[0px_0px_5px_rgba(0,0,0,0.2)] hover:-translate-y-1 sm:flex-row"
                >
                  <div class="flex items-center justify-center">
                    <div class="aspect-square w-[160px] overflow-clip rounded-full">
                      <img
                        class="block aspect-auto h-full w-full object-cover"
                        src="@/assets/img/tkbgo_english/logo_tkbgo_english.svg"
                        alt="圖片"
                        title="圖片"
                      />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-y-2">
                    <h4 class="col-span-full line-clamp-1 text-xl font-semibold">
                      {{ item.title }}
                    </h4>
                    <div class="col-span-full sm:col-auto">
                      <h5 class="text-lg">
                        <font-awesome-icon
                          :icon="['fas', 'chalkboard']"
                          class="mr-1 text-secondary-700"
                        />課程
                      </h5>
                      <p class="line-clamp-1">假內容假內容假內容假內容</p>
                    </div>
                    <div class="col-span-full sm:col-auto">
                      <h5 class="text-lg">
                        <font-awesome-icon
                          :icon="['fas', 'medal']"
                          class="mr-1 text-secondary-700"
                        />推薦老師
                      </h5>
                      <p class="line-clamp-1">假內容假內容假內容假內容</p>
                    </div>
                    <div class="col-span-full">
                      <h5 class="text-lg">
                        <font-awesome-icon
                          :icon="['fas', 'face-smile']"
                          class="mr-1 text-secondary-700"
                        />心得
                      </h5>
                      <p class="line-clamp-2">
                        假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容假內容
                      </p>
                    </div>
                  </div>
                  <div
                    class="absolute -right-2 top-2 rounded-s-2xl bg-primary-500 px-3 py-1 text-sm leading-none text-white after:absolute after:-bottom-2 after:right-0 after:block after:h-0 after:w-0 after:border-b-[5px] after:border-l-[5px] after:border-r-[5px] after:border-t-[5px] after:border-solid after:border-b-transparent after:border-l-primary-800 after:border-r-transparent after:border-t-primary-800 after:content-['']"
                  >
                    多一斤正
                  </div>
                </div>
              </nuxt-link>
            </SwiperSlide>
            <div
              v-show="windowWidth < breakpointsInt('md')"
              class="swiper-btn j-feedback-prev-mob absolute bottom-1/2 left-0 z-10"
            >
              <font-awesome-icon :icon="['fas', 'chevron-left']" />
            </div>
            <div
              v-show="windowWidth < breakpointsInt('md')"
              class="swiper-btn j-feedback-next-mob absolute bottom-1/2 right-0 z-10"
            >
              <font-awesome-icon :icon="['fas', 'chevron-right']" />
            </div>
          </Swiper>
        </div>
        <EnglishButton
          v-if="windowWidth < breakpointsInt('md')"
          class="block"
          to="/zone/english/review/toReviewList?page_type=4182"
        >
          More<font-awesome-icon :icon="['fas', 'angles-right']" class="ml-1" />
        </EnglishButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EffectFade, Controller } from 'swiper/modules'
import EnglishIndexBanner from '@/components/banner/EnglishIndexBanner.vue'
import EnglishTitleMain from '@/components/views/english/EnglishTitleMain.vue'
import EnglishButton from '@/components/button/EnglishButton.vue'
import EnglishCourseCard from '@/components/card/EnglishCourseCard.vue'
import EnglishArticleCard from '@/components/views/english/EnglishArticleCard.vue'
import youtubeVideo from '@/components/video/youtubeVideo.vue'
definePageMeta({
  layout: 'english'
})
const { tailwinds, breakpointsInt } = useTailwindConfig()
const windowWidth = ref(0)
// 首圖輪播串接 start
const indexBannerData = ref([])
const { data: bannerInfoRes } = await useApi('/api/ad/banner', {
  query: { adPositionId: 46, count: 5 }
})
indexBannerData.value = bannerInfoRes.value.data
// 首圖輪播串接 end
// 好評課程串接 start
const indexCoursesData = ref([])
const { data: courseInfoRes } = await useApi('/api/subject/type/subjects', { query: { kind: 433 } })
indexCoursesData.value = courseInfoRes.value.data
// 好評課程串接 end
// 最新消息串接 start
const indexNewsData = ref([])
const { data: newsInfoRes } = await useApi('/api/news/news', {
  query: { typeId: 121, page: 0, size: 10 }
})
indexNewsData.value = newsInfoRes.value.data.content
// 最新消息串接 end
// 課表總覽串接 start
const indexNewCourseData = ref([])
const { data: newCourseInfoRes } = await useApi('/api/news/news', {
  query: { typeId: 121, typeId2: 182, page: 0, size: 10 }
})
indexNewCourseData.value = newCourseInfoRes.value.data.content
// 課表總覽串接 end
// 講座串接 start
const indexLectureData = ref([])
const { data: lectureInfoRes } = await useApi('/api/lecture/lectures', {
  query: { typeId: 4177, sortbyDate: 'WEEK' }
})
indexLectureData.value = lectureInfoRes.value.data
// 講座串接 end
// 講座輪播 start
const indexLectureActiveId = ref(0)
const indexLectureControlled = ref(null)
const setIndexLectureControlled = (swiper) => {
  indexLectureControlled.value = swiper
}
indexLectureActiveId.value = indexLectureData.value[0].id
const onIndexLectureSlideChange = (swiper) => {
  // 若用slide-change因loop會有重複的slide，所以用slide-change-transition-end。
  indexLectureData.value.forEach((element, i) => {
    if (i === swiper.realIndex) {
      // 因loop第幾個使用swiper.realIndex，實際.swiper-slide-active的為swiper.activeIndex。
      indexLectureActiveId.value = element.id
    }
  })
}
// 講座輪播 end
// 影音串接 start
const indexVideoData = ref([
  {
    id: '123',
    title: '假標題1'
  },
  {
    id: '456',
    title: '假標題2'
  },
  {
    id: '789',
    title: '假標題3'
  },
  {
    id: '012',
    title: '假標題4'
  }
])
// 影音串接 end
// 文章串接 start
const indexArticleData = ref([])
const { data: articleInfoRes } = await useApi('/api/article/article', {
  query: { typeId: 41, page: 0, size: 10 }
})
indexArticleData.value = articleInfoRes.value.data.content
// 文章串接 end
// 心得串接 start
const indexFeedbackData = ref([])
const { data: feedbackInfoRes } = await useApi('/api/review/review-type/review', {
  query: { reviewTypeId: 4178, size: 10 }
})
indexFeedbackData.value = feedbackInfoRes.value.data.content
console.log('心得資料：', feedbackInfoRes)
// 心得串接 end
const handleResize = () => {
  windowWidth.value = window.innerWidth
}
const windowResizeEvent = inject('windowResize', ref(null))
watch(windowResizeEvent, () => {
  handleResize()
})
onMounted(() => {
  handleResize()
})
</script>

<style lang="scss" scoped>
// 共用Swiper左右按鈕 start
.swiper-btn {
  @apply flex items-center justify-center bg-secondary-500 px-3 py-2 leading-none text-white;
}
.swiper-btn:not(.swiper-button-disabled) {
  @apply cursor-pointer hover:bg-secondary-600;
}
.swiper-btn.swiper-button-disabled {
  @apply opacity-50;
}
// 共用Swiper左右按鈕 end
// 影音Swiper點點 start
.video-pagination {
  @apply h-7 text-center;
}
.video-pagination:deep() .swiper-pagination-bullet {
  @apply bg-white opacity-100;
}
.video-pagination:deep() .swiper-pagination-bullet-active {
  @apply bg-secondary-500;
}
// 影音Swiper點點 end
</style>
