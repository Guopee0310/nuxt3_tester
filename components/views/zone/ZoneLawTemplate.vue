<template>
  <ZoneTemplate>
    <div>
      <div
        class="grid grid-cols-1 gap-3 px-4 pb-3 pt-10 md:px-10 xl:grid-cols-2 xl:px-16"
        :style="`background: url(${bgImage}) no-repeat center bottom / cover;`"
      >
        <div class="h-full min-h-[300px]">
          <h1 class="my-4 text-4xl font-medium text-base-800 lg:text-5xl">公職首選-司法特考</h1>
          <h2 class="mb-3 font-medium text-base-800">非法律系也能輕鬆錄取</h2>
        </div>
      </div>
      <ZoneSectionTitle>考試科目投考組合<span>主打類科</span></ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="bg-base-200 py-3 md:pb-1 md:pt-3">
          <h3 class="my-2 text-center font-medium tracking-[3px] text-base-500">
            請選擇理想的考試類別
          </h3>
        </div>
        <div class="bg-base-200 py-3">
          <div class="grid gap-2 px-2 text-center md:grid-cols-3 lg:grid-cols-6">
            <nuxt-link class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              >法院書記官-三等</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >法院書記官-四等</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >執行員</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >執達員</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >法警</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >庭務員</nuxt-link
            >
            <nuxt-link
              class="w-full cursor-pointer bg-base-50 py-2 text-base-800"
              href="javascript:void(0);"
              >錄事</nuxt-link
            >
          </div>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneTemplateXPaddingNarrow class="mb-3 py-6 md:mb-0 md:py-8">
        <ZoneInfoContent>
          <ZoneInfoListRight>
            <ZoneInfoTitle titlename="最新消息" />
            <ZoneInfoNewItem />
            <ZoneInfoNewItem />
            <ZoneInfoNewItem />
            <div class="text-right">
              <ButtonMore class="right-0" to="/news/toNewsList" />
            </div>
          </ZoneInfoListRight>
          <ZoneInfoListLeft>
            <ZoneInfoTitle titlename="新進簡章" />
            <ZoneInfoBrochureItem />
            <ZoneInfoBrochureItem />
            <ZoneInfoBrochureItem />
            <div class="flex flex-col justify-around gap-2 md:flex-row md:gap-1">
              <AnchorPoint
                v-for="(item, index) in items"
                :key="index"
                :classname="item.colorchart"
                :name="item.name"
                :get-target="getTarget(index)"
                :icon="item.icon"
              />
            </div>
          </ZoneInfoListLeft>
        </ZoneInfoContent>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="sort0">司法考試<span>最佳上榜課程</span></ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <div class="mb-6 overflow-x-auto">
          <div class="w-[1130px]">
            <ul class="flex items-center justify-center gap-2">
              <li
                :class="{ courseactive: activeCourseTab === 0 }"
                class="w-[20%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 0"
              >
                法律全修課程
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 1 }"
                class="w-[20%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 1"
              >
                主題式加強課程
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 2 }"
                class="w-[18%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 2"
              >
                單科速成搶分課程
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 3 }"
                class="w-[15%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 3"
              >
                總複習課程
              </li>
            </ul>
          </div>
          <div class="my-4 w-[1130px]">
            <img src="~/assets/img/law/timeline.jpeg" />
          </div>
        </div>

        <!-- 法律全修課程 -->
        <div v-show="activeCourseTab === 0" class="mb-3 flex flex-col gap-4">
          <h4 class="mb-3 block text-3xl font-bold">法律全修課程</h4>
          <div class="grid-row-1 grid gap-4 md:grid-cols-2">
            <p class="w-full text-lg">
              <span class="block">適合對象：</span>
              <span class="block">長期準備需求者(學習時間6~12個月)</span>
            </p>
            <p class="w-full text-lg">
              <span class="block">課程設計：</span>
              <span class="block"
                >完整的課程內容，從基礎打底到考場運用，通過系統化教學，讓門外漢都能輕鬆學會！</span
              >
            </p>
          </div>
          <h4 class="mb-3 block text-2xl font-bold text-base-400">最全面的課程與服務就在TKB</h4>
          <div class="law-course-swiper flex w-full items-center justify-between">
            <div class="exam-law-swiper-prev cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-left']" /></div>
            </div>
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              :space-between="40"
              :navigation="{ nextEl: '.exam-law-swiper-next', prevEl: '.exam-law-swiper-prev' }"
              :breakpoints="{
                [breakpointsInt('lg')]: {
                  slidesPerView: 4.5,
                  spaceBetween: 20
                },
                [breakpointsInt('md')]: {
                  slidesPerView: 3.5,
                  spaceBetween: 20
                },
                [breakpointsInt('sm')]: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                }
              }"
              class="relative h-auto w-full overflow-hidden"
            >
              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>
            </Swiper>
            <div class="exam-law-swiper-next cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-right']" /></div>
            </div>
          </div>
        </div>
        <!-- 主題式加強課程 -->
        <div v-show="activeCourseTab === 1" class="mb-3 flex flex-col gap-4">
          <h4 class="mb-3 text-3xl font-bold">主題式加強課程</h4>
          <div class="grid-row-1 grid gap-4 md:grid-cols-2">
            <p class="w-full text-lg">
              <span class="block">適合對象：</span>
              <span class="block">短期準備需求者(學習時間考前3-6個月)</span>
            </p>
            <p class="w-full text-lg">
              <span class="block">課程設計：</span>
              <span class="block"
                >考前還有科目不知道該怎麼準備嗎？我們替您準備好了，主題式重點整理考題解析應有盡有，陪您走最後一哩路！</span
              >
            </p>
          </div>
          <h4 class="mb-3 block text-2xl font-bold text-base-400">最全面的課程與服務就在TKB</h4>
          <div class="law-course-swiper flex w-full items-center justify-between">
            <div class="exam-law-swiper-prev cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-left']" /></div>
            </div>
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              :space-between="40"
              :navigation="{ nextEl: '.exam-law-swiper-next', prevEl: '.exam-law-swiper-prev' }"
              :breakpoints="{
                [breakpointsInt('lg')]: {
                  slidesPerView: 4.5,
                  spaceBetween: 20
                },
                [breakpointsInt('md')]: {
                  slidesPerView: 3.5,
                  spaceBetween: 20
                },
                [breakpointsInt('sm')]: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                }
              }"
              class="relative h-auto w-full overflow-hidden"
            >
              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>
            </Swiper>
            <div class="exam-law-swiper-next cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-right']" /></div>
            </div>
          </div>
        </div>
        <!-- 單科速成搶分課程 -->
        <div v-show="activeCourseTab === 2" class="mb-3 flex flex-col gap-4">
          <h4 class="mb-3 text-3xl font-bold">單科速成搶分課程</h4>
          <div class="grid-row-1 grid gap-4 md:grid-cols-2">
            <p class="w-full text-lg">
              <span class="block">適合對象：</span>
              <span class="block">短期準備需求者(學習時間考前3-6個月)</span>
            </p>
            <p class="w-full text-lg">
              <span class="block">課程設計：</span>
              <span class="block">
                速成的課程內容，加強考點解析，通過特殊的課程設計，讓你立即學會完整輪廓，快速取分！</span
              >
            </p>
          </div>
          <h4 class="mb-3 block text-2xl font-bold text-base-400">最全面的課程與服務就在TKB</h4>
          <div class="law-course-swiper flex w-full items-center justify-between">
            <div class="exam-law-swiper-prev cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-left']" /></div>
            </div>
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              :space-between="40"
              :navigation="{ nextEl: '.exam-law-swiper-next', prevEl: '.exam-law-swiper-prev' }"
              :breakpoints="{
                [breakpointsInt('lg')]: {
                  slidesPerView: 4.5,
                  spaceBetween: 20
                },
                [breakpointsInt('md')]: {
                  slidesPerView: 3.5,
                  spaceBetween: 20
                },
                [breakpointsInt('sm')]: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                }
              }"
              class="relative h-auto w-full overflow-hidden"
            >
              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>
            </Swiper>
            <div class="exam-law-swiper-next cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-right']" /></div>
            </div>
          </div>
        </div>
        <!-- 總複習課程 -->
        <div v-show="activeCourseTab === 3" class="mb-3 flex flex-col gap-4">
          <h4 class="mb-3 text-3xl font-bold">總複習課程</h4>
          <div class="grid-row-1 grid gap-4 md:grid-cols-2">
            <p class="w-full text-lg">
              <span class="block">適合對象：</span>
              <span class="block">考前最後衝刺者(學習時間考前3個月內)</span>
            </p>
            <p class="w-full text-lg">
              <span class="block">課程設計：</span>
              <span class="block">
                由TKB師資群幫您重點觀念時事全面補強，不必再擔心是否漏掉任何細節，我們都替您準備好了！</span
              >
            </p>
          </div>
          <h4 class="mb-3 block text-2xl font-bold text-base-400">最全面的課程與服務就在TKB</h4>
          <div class="law-course-swiper flex w-full items-center justify-between">
            <div class="exam-law-swiper-prev cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-left']" /></div>
            </div>
            <Swiper
              :modules="[SwiperNavigation]"
              :slides-per-view="1"
              :space-between="40"
              :navigation="{ nextEl: '.exam-law-swiper-next', prevEl: '.exam-law-swiper-prev' }"
              :breakpoints="{
                [breakpointsInt('lg')]: {
                  slidesPerView: 4.5,
                  spaceBetween: 20
                },
                [breakpointsInt('md')]: {
                  slidesPerView: 3.5,
                  spaceBetween: 20
                },
                [breakpointsInt('sm')]: {
                  slidesPerView: 2.5,
                  spaceBetween: 20
                }
              }"
              class="relative h-auto w-full overflow-hidden"
            >
              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>

              <SwiperSlide>
                <CourseItem />
              </SwiperSlide>
            </Swiper>
            <div class="exam-law-swiper-next cursor-pointer px-4 text-secondary-500">
              <div><font-awesome-icon class="text-3xl" :icon="['fas', 'angle-right']" /></div>
            </div>
          </div>
        </div>

        <div class="text-right">
          <ButtonMore class="cursor-pointer" @click="nextTab">NEXT</ButtonMore>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>考試科目及投考組合</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  rowspan="2"
                  class="border-x border-t border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  類科
                </th>
                <th
                  colspan="9"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  專業科目
                </th>
              </tr>
              <tr>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  民法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  民事訴訟法訴概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  刑法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  刑事訴訟法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  行政法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  法院組織法
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  強制執行法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  公務員法概要
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  法學大意
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  書記官
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  法警
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  執達員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  執行員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  普考廉政
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  錄事
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  庭務員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  ●
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                ></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  推薦組合一
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="w-1/2 break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  |科目最少，上榜機會最大
                </td>
                <td
                  class="w-1/2 break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  法警+法律廉政(專業科目共5科)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  推薦組合二
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="w-1/2 break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  |多來一科，上榜率3倍
                </td>
                <td
                  class="w-1/2 break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  法書記官+法律廉政 (專業科目共6科)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="sort1">成為司法公務員<span>最大優勢</span></ZoneSectionTitle>
      <div class="my-8 grid grid-cols-1 gap-4 bg-[#3E4454] px-8 py-6 md:grid-cols-3 md:gap-2">
        <div class="mx-auto flex flex-col items-center gap-3 text-center xl:flex-row xl:text-left">
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/law/advantage_icon-01.png"
              title="銀行人4大優勢 第一大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-white">薪資福利</div>
            <p class="text-lg text-white">年薪含年終達80萬</p>
          </div>
        </div>
        <div class="mx-auto flex flex-col items-center gap-3 text-center xl:flex-row xl:text-left">
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/law/advantage_icon-02.png"
              title="銀行人4大優勢 第二大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-white">升遷機會</div>
            <p class="text-lg text-white">每兩年升等考核<br />升遷快速且透明公開</p>
          </div>
        </div>
        <div class="mx-auto flex flex-col items-center gap-3 text-center xl:flex-row xl:text-left">
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/law/advantage_icon-03.png"
              title="銀行人4大優勢 第四大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-white">考科準備</div>
            <p class="text-lg text-white">5科專業科目<br />以選擇題為主</p>
          </div>
        </div>
      </div>

      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-secondary-500" :icon="['fas', 'chart-line']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">錄取率高</h4>
            <span class="text-2xl text-secondary-500">2018/107年司法特考錄取率</span>
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                ></th>
                <th
                  colspan="2"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  司法特考 近三年平均錄取率
                </th>
              </tr>
              <tr>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  招考類科
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  錄取率
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  為同級一般行政錄取率的倍數
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  法院書記官
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  4.76%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  1.72倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  法警
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  7.92%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  2.87倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  執達員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  5.14%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  1.86倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  執行員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  8.40%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  3.04倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  錄事
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  3.20%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  1.35倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  庭務員
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  3.52%
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  1.48倍
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  備註
                </td>
                <td
                  colspan="2"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  同級一般行政錄取率約在四等2.76%五等2.37%
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-start gap-3">
          <font-awesome-icon
            class="text-6xl text-secondary-500"
            :icon="['fas', 'comment-dollar']"
          />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">薪資高</h4>
            <span class="text-2xl text-secondary-500">司法相關考試之公務人員薪資一覽表</span>
          </div>
        </div>
        <hr class="my-4" />
        <div class="my-4 text-xl">公職的特色不僅在於穩定，薪資的部份更是相對於民間企業來的優渥</div>
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  類別/等級
                </th>
                <th
                  colspan="2"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  薪資給與
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  高普考、地方政府特考
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  四等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 pl-2 text-left text-lg"
                >
                  法律廉政：約37,375元
                </td>
              </tr>
              <tr>
                <td
                  rowspan="2"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  司法特考
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  四等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  <ul class="ml-4 block list-decimal pl-2 text-left">
                    <li>法院書記官：約42,000-52,000元</li>
                    <li>法警：約42,000-52,000元</li>
                    <li>執達員：約42,000-52,000元</li>
                    <li>達行員：約42,000-52,000元</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  五等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  <ul class="ml-4 block list-decimal pl-2 text-left">
                    <li>錄事：約32,000元</li>
                    <li>庭務員：約32,000元</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-secondary-500" :icon="['fas', 'id-card']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">非法律系也可報考</h4>
            <span class="text-2xl text-secondary-500">司法特考考試資格</span>
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  colspan="2"
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  應考資格
                </th>
              </tr>
              <tr>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  四等
                </th>
                <th
                  class="border border-solid border-base-400 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  五等
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  一.高中職以上畢業<br />
                  二.年滿18歲以上
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  一.年滿18歲以上
                </td>
              </tr>
            </tbody>
          </table>
          <div class="my-4 text-xl">※法警類科應考年齡上限為45歲。</div>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>學員<span>見證</span></ZoneSectionTitle>
      <div
        class="student-experience-slider my-8 flex flex-col gap-4 bg-[#3E4454] px-2 py-12 lg:px-[160px] xl:flex-row xl:gap-6"
      >
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperEffectCreative]"
          :allow-touch-move="true"
          :effect="fade"
          :loop="true"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :autoplay="{
            delay: 5000
          }"
          class="mx-auto w-full text-center lg:w-[980px] lg:text-start"
        >
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">考取國家考試 法院書記官四等</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">劉O妤</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              今年6月份參加了TKB的短期解題班，雖然正課的堂數不多，但老師們提綱挈領各科的重要考點，也會補充時事及熱門的議題，讓我在短時間內得到最新的實務見解以及有助於準備考試的重要資訊，真的很感謝老師們的付出。而正課結束後，接下來讀書會課程，我覺得訓練了我有關考試技巧的部分，老師會針對考古題解題，並且告訴我們邏輯與思考的脈絡，大家一起腦力激盪，尋找題目內的爭點，漸漸地發現自己的解題能力有所提升，而且能激發自己在短時間內找出爭點，用自己的文字去描繪法律的重要概念，我認為這是非常重要的考試技巧及能力。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">考取國家考試 律師</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">朱O坤</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              從大三就覺得李老師的教材是市面上最完整的，也用它來準備研究所跟國家考試。在途中當然也碰到了一些同學說為甚麼李老師的教材那麼多啦，太雜啦之類的評語，但是我並沒有因此而改念其他補習班的講義(當然，老師還沒出的科目不算啦……)，因為「成功是留給充分準備的人」，而老師的教材正是提供充分準備的最好工具。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">學生學習心得</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">朱○羅</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              一開始聽老師的民事法相關課程是非常驚訝的，原來之前念不通的地方被老師輕易的就帶過了，聽教材會有欲罷不能的感覺，尤其是民事從實體法、程序法到執行法一氣喝成，另外重點部分老師會一而再、再而三的強調。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">學生學習心得</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">周○鉻</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              李老師的教學與教材真的是非常創新，使得學習法律不再枯燥難懂，如果在大學時期老師的教材就推出的話，我覺得應該會節省下非常多的時間。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">學生學習心得</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">蕭○彬</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              覺得李老師的教材是市面上最完整的，也用它來準備研究所跟國家考試。在途中也碰到了一些同學說為什麼李老師的教材那麼多啦，太雜啦之類的評語，但是我並沒有因此而改念其他補習班講義，因為「成功是留給充分準備好的人」。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">學生學習心得</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">陳○達</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              之前大學時代上民事訴訟法真的是鴨子聽雷，完全不知道民事訴訟到底在幹麻？退伍後輾轉拿到李老師的上課「錄音帶」(年代久遠啊)，認真聽了好幾個月，民事訴訟法有種豁然開朗的感覺，走出五里霧了，從此，民事訴訟法我就不再懼怕了，現在已經考上，李老師的書我還是沒有送人，依舊放在我的書櫃中，謝謝老師。
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-white">學生學習心得</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-white">曾○明</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-white"
            >
              在研究了各種補習班教材和研聽以後，說真的比較喜歡李老師的教學，許多補習班教材講求速成，大量的塞入體系表，甲說與乙說，很少有像這樣這麼認真且詳細的告知所有的來源與爭議點時，及老師的個人意見。再加實際判例、新聞、時事，法律重視的是在解決人的問題，考試的過程雖然難熬，但在這種過程中去慢慢理解，近而推敲解決爭議，雖然時數很長，但我認為教材很值得重覆研究，更對於生活中所碰到。
            </div>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </div>

      <ZoneSectionTitle>立即<span>試聽</span></ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="relative my-4 mb-2 flex flex-col xl:mt-16 xl:flex-row xl:items-center">
          <div
            class="law-teacher-info-slider order-2 mx-auto w-full md:w-10/12 xl:order-1 xl:w-1/2"
          >
            <Swiper
              :modules="[SwiperAutoplay, SwiperController, SwiperPagination, SwiperEffectCreative]"
              :effect="fade"
              :loop="true"
              :pagination="{
                el: '.swiper-pagination',
                clickable: true
              }"
              :autoplay="{
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: true
              }"
              :controller="{
                control: teacherInfoSwiper,
                inverse: false,
                By: 'container'
              }"
            >
              <SwiperSlide>
                <div class="flex flex-col items-center justify-center gap-3 bg-black px-6 py-10">
                  <div class="text-3xl text-white">蕭峰 律師</div>
                  <div class="grid grid-cols-2 gap-3 text-lg md:gap-4 md:text-xl">
                    <nuxt-link class="cursor-pointer tracking-widest text-[#B34454]"
                      >▶課程試聽1<font-awesome-icon
                        class="ml-1"
                        :icon="['fas', 'arrow-up-right-from-square']"
                    /></nuxt-link>
                    <nuxt-link class="cursor-pointer tracking-widest text-[#B34454]"
                      >▶課程試聽2<font-awesome-icon
                        class="ml-1"
                        :icon="['fas', 'arrow-up-right-from-square']"
                    /></nuxt-link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="flex flex-col items-center justify-center gap-3 bg-black px-6 py-10">
                  <div class="text-3xl text-white">陳林</div>
                  <div class="grid grid-cols-2 gap-3 text-lg md:gap-4 md:text-xl">
                    <nuxt-link class="cursor-pointer tracking-widest text-[#B34454]"
                      >▶課程試聽1<font-awesome-icon
                        class="ml-1"
                        :icon="['fas', 'arrow-up-right-from-square']"
                    /></nuxt-link>
                    <nuxt-link class="cursor-pointer tracking-widest text-[#B34454]"
                      >▶課程試聽2<font-awesome-icon
                        class="ml-1"
                        :icon="['fas', 'arrow-up-right-from-square']"
                    /></nuxt-link>
                  </div>
                </div>
              </SwiperSlide>
              <div class="swiper-pagination"></div>
            </Swiper>
          </div>
          <div
            class="absolute -top-[45px] right-[120px] z-[2] hidden h-[280px] w-[530px] border-[20px] border-solid border-[#B34454] xl:block"
          ></div>
          <div
            class="law-teacher-img-slider z-[3] order-1 mx-auto w-full md:w-10/12 xl:order-2 xl:w-1/2"
          >
            <Swiper
              :modules="[SwiperAutoplay, SwiperController, SwiperEffectCreative]"
              :allow-touch-move="false"
              :effect="fade"
              :loop="true"
              @swiper="teacherImgSwiper"
            >
              <SwiperSlide>
                <nuxt-link to="https://www.youtube.com/watch?v=EsHd_Wfgq9Q&t=905s" target="_blank">
                  <img class="w-full" src="~/assets/img/law/video_01.png" alt="蕭峰律師" />
                </nuxt-link>
              </SwiperSlide>
              <SwiperSlide>
                <nuxt-link to="https://www.youtube.com/watch?v=9NSbbHe32sk" target="_blank">
                  <img class="w-full" src="~/assets/img/law/video_02.png" alt="陳林" />
                </nuxt-link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>常見問題</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="law-collapse mt-4">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Q1：考取司法特考後，可以每年調薪嗎？" name="1">
              <div class="mb-1 text-lg font-semibold">Ａ：依據公務人員考績法第七條規定</div>
              <div class="text-lg leading-7">
                甲等：晉本俸一級，並給與一個月俸給總額之一次獎金；乙等：晉本俸一級，並給與半個月俸給總額之一次獎金，簡言之，基本上只要表現別太差(丙等)，原則上每年固定調薪(升俸點)，表現優異則可升等(升職等)。<br />1.升「俸點」：當年考績乙等以上，俸點自動升一級。
                <br />2.升「職等」：考績連續二年甲等，或三年內考績二甲一乙，即可升等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q2：考取司法特考後，一年可領到多少年終獎金？" name="2">
              <div class="mb-1 text-lg font-semibold">Ａ：年終獎金組成分二部份</div>
              <div class="text-lg leading-7">
                1.年終獎金=(本俸+專業加給+主管加給)x1.5<br />
                2.考績獎金：甲等一個月，乙等0.5個月<br />
                以考取司法人員法院書記官為例，三等菜鳥公務員隔年就可以最高領超過12萬；考取四等後，隔年則可領9萬餘元。<br />
                ※備註：專業加給以最低計算；實際年終獎金以政府單位規定為主。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q3：考取司法特考後，幾歲可以退休？" name="3">
              <div class="mb-1 text-lg font-semibold">
                Ａ：依據公務人員退休法第四條及第十一條規定
              </div>
              <div class="text-lg leading-7">
                任職年資滿25年，年滿60歲；或年資滿30年，年滿55歲，才能支領全額月退休金。(計算公式：年資+年齡≧85，這就是所謂的「85制」)
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q4：考取司法特考，退休後獎金怎麼計算？" name="4">
              <div class="mb-1 text-lg font-semibold">
                Ａ：依據公務人員退休法第九條規定，退休金種類共有三種
              </div>
              <div class="text-lg leading-7">
                一次退休金、月退休金、兼領二分之一之一次退休金與二分之一之月退休金。計算公式如下：<br />
                1.一次退休金= (本俸x2) x (1.5x任職年資)<br />
                2.月退休金=(本俸x2) x (2%x任職年資)<br />
                3.兼領二分之一之一次退休金與二分之一之月退休金=上述公式各乘上二分之一
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q5：請問司法特考報名人數何時公布？" name="5">
              <div class="mb-1 text-lg font-semibold">
                Ａ：報名人數統計需等考試報名結束後，應考資格審查完畢
              </div>
              <div class="text-lg leading-7">
                並經本考試第一次典試委員會議通過後始行公告。請於7月中旬考選部全球資訊網\應考人專區\考試資訊\OOO年公務人員特種考試司法人員考試(或104年公務人員特種考試司法官考試)\考試舉行相關事宜查詢。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q6：何謂司法特考增額錄取名額？" name="6">
              <div class="mb-1 text-lg font-semibold">Ａ：本考試除公告之暫定需用名額外</div>
              <div class="text-lg leading-7">
                用人機關如有需要，經分發機關彙整送考選部覈實提報考試院核定後，得增加需用名額。依公務人員考試法第3條規定，公務人員之考試，應依用人機關年度任用需求決定正額錄取人員，
                依序分配訓練。並得視考試成績增列增額錄取人員，列入候用名冊，於正額錄取人員分配完畢後，由分發機關或申請舉辦考試機關配合用人機關任用需要依考試成績定期依序分配訓練。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q7：司法特考兵役限制規定為何？" name="7">
              <div class="mb-1 text-lg font-semibold">
                Ａ：男性考生依法負有服兵役義務或服志願役者
              </div>
              <div class="text-lg leading-7">
                須服畢役期，始得報考。但於本考試筆試考畢之次日起四個月內退伍並持有權責單位發給之證明文件，不在此限。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q8：如果考取司法特考，當年也考取研究所，該怎麼辦？" name="8">
              <div class="mb-1 text-lg font-semibold">Ａ：依公務人員考試法第4條第二款規定</div>
              <div class="text-lg leading-7">
                正額錄取人員於公立或立案之私立大學或符合教育部採認規定之國外大學進修碩士學位，其保留期限不得逾2年；進修博士學位，其保留期限不得逾3年。也就是說，可以先辦理公務人員資格保留，待規定期限內完成研究所學位後再辦理報到。
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="Q9：除了服兵役跟進修可以申請保留，還有其他狀況想申請保留怎麼辦？"
              name="9"
            >
              <div class="mb-1 text-lg font-semibold">Ａ：依公務人員考試法第4條規定</div>
              <div class="text-lg leading-7">
                正額錄取人員無法立即接受分配訓練者，得檢具事證申請保留錄取資格，其事由及保留年限如下：<br />
                1.服兵役，其保留期限不得逾法定役期。<br />
                2.於公立或立案之私立大學或符合教育部採認規定之國外大學進修碩士學位，其保留期限不得逾2年；進修博士學位，其保留期限不得逾3年。<br />
                3.疾病、懷孕、生產、父母病危、子女重症或其他不可歸責事由，其保留期限不得逾2年。<br />
                4.養育三足歲以下子女，其保留期限不得逾三年。但配偶為公務人員依法已申請育嬰留職停薪者不得申請保留。
              </div>
            </el-collapse-item>
            <el-collapse-item title="Q10：司法特考報考年紀為年滿18歲，認定時間如何推算？" name="10">
              <div class="mb-1 text-lg font-semibold">
                Ａ：依公務人員考試法施行細則第7 條第2 項規定
              </div>
              <div class="text-lg leading-7">
                應考年齡之計算，其年齡下限起算至考試前一日之戶籍登記年齡為準，年齡上限起算至報名前一日之戶籍登記年齡為準。
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </ZoneTemplateXPaddingNarrow>
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateXPaddingNarrow from '@/components/views/zone/ZoneTemplateXPaddingNarrow.vue'
import ZoneInfoContent from '@/components/views/zone/ZoneInfoContent.vue'
import ZoneInfoListRight from '@/components/views/zone/ZoneInfoListRight.vue'
import ZoneInfoListLeft from '@/components/views/zone/ZoneInfoListLeft.vue'
import ZoneInfoNewItem from '@/components/views/zone/ZoneInfoNewItem.vue'
import ZoneInfoBrochureItem from '@/components/views/zone/ZoneInfoBrochureItem.vue'
import ZoneInfoTitle from '@/components/views/zone/ZoneInfoTitle.vue'
import ZoneSectionTitle from '@/components/others/ZoneSectionTitle'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
import CourseItem from '@/components/views/news/CourseItem.vue'
import bgImage from '@/assets/img/law/law_background.png'

const route = useRoute()
// 引入api資料
const examTypeData = inject('examTypeData') // 取得公職專區分類
const examExamsData = inject('examExamsData') // 取得所有考試
const ExamsData = examExamsData.exams
const examTypeId = ref(null)
const examId = ref(null)
// 麵包屑設定
const breadcrumbInfo = ref(null)
watchEffect(() => {
  examTypeId.value = route.query.exam_type_id
  examId.value = route.query.exam_data_id
  const examMainType = computed(() =>
    examTypeData.filter((item) => item.examTypeId === parseInt(examTypeId.value))
  )
  const examSubType = computed(() =>
    ExamsData.filter((item) => item.examId === parseInt(examId.value))
  )

  breadcrumbInfo.value = [
    {
      name: examMainType.value[0].examTypeName,
      path: '/examData/toExamList?exam_type_id=' + examTypeId.value
    },
    {
      name: examSubType.value[0].examName
    }
  ]
})
provide('passbreadcrumb', breadcrumbInfo)
// 取得route query 大分類exam_type_id
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id

// newExamsData考試按鈕,*因為Font Awesome資料為舊版本，暫時用假資料examIcon: ['fas', 'school']
const newExamsData = reactive(
  ExamsData.map((item) => {
    if (item.examId === parseInt(examId.value)) {
      return {
        ...item,
        examIcon: ['fas', 'school'],
        isActive: true,
        toSrc: `/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId.value}`
      }
    } else {
      return {
        ...item,
        examIcon: ['fas', 'school'],
        isActive: false,
        toSrc: `/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId.value}`
      }
    }
  })
)

const subMenuData = reactive([
  {
    examId: '15186434',
    examName: '簡章下載',
    examIcon: ['fas', 'paste'],
    toSrc: `/examData/toexamListRegulations?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '81985168',
    examName: '考古題',
    examIcon: ['fas', 'map'],
    toSrc: `/govArchaeology/toDownloadList?exam_type_id=${examTypeId.value}`
  }
])
provide('passmainmenu', newExamsData)
provide('passsubmenu', subMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')
const { breakpointsInt } = useTailwindConfig()
const activeCourseTab = ref(0)
const sort0 = ref(null)
const sort1 = ref(null)
const items = reactive([
  {
    colorchart: 'w-full text-white block rounded bg-[#a13312] px-6 py-2 text-center text-lg',
    name: '立即上榜課程',
    icon: ['fas', 'trophy']
  },
  {
    colorchart: 'w-full text-white block rounded bg-secondary-400 px-6 py-2 text-center text-lg',
    name: '司法特考優勢',
    icon: ['fas', 'thumbs-up']
  }
])
const getTarget = (index) => {
  if (index === 0) {
    return () => sort0.value.$el
  } else if (index === 1) {
    return () => sort1.value.$el
  } else {
    return () => null
  }
}
const nextTab = () => {
  if (activeCourseTab.value === 3) {
    activeCourseTab.value = 0
  } else {
    activeCourseTab.value++
  }
}
const teacherInfoSwiper = ref([])
const teacherImgSwiper = (swiper) => {
  teacherInfoSwiper.value = swiper
}
</script>

<style lang="scss" scoped>
/* 頁籤 */
.courseactive {
  box-shadow: 0px 10px 10px rgba(80, 80, 80, 0.247);
  @apply bg-[#F4804D];
}

.law-course-swiper {
  .swiper-slide {
    transition: 0.4s ease-out;
    box-shadow: 2px 2px 10px -10px rgba(150, 150, 150, 0.8);
    @apply cursor-pointer overflow-hidden border border-solid border-white;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-disabled {
    @apply opacity-40;
  }
}

/* 學員見證 */
:deep() .student-experience-slider {
  background: linear-gradient(30deg, #1f505a, #3e4454);
  .swiper-wrapper {
    @apply mb-6;
  }
  .swiper-pagination {
    @apply mt-4;
    .swiper-pagination-bullet {
      @apply bg-black opacity-50;
    }
    .swiper-pagination-bullet-active {
      @apply bg-white opacity-100;
    }
  }
}

/* 師資影片 */
:deep() .law-teacher-info-slider {
  .swiper-pagination {
    @apply my-3;
    .swiper-pagination-bullet {
      @apply h-[3px] w-6 rounded bg-white opacity-50;
    }
    .swiper-pagination-bullet-active {
      @apply bg-white opacity-100;
    }
  }
}
:deep() .law-teacher-img-slider {
  a {
    @apply cursor-pointer hover:opacity-100;
  }
}

/* QA常見問題 */
:deep() .law-collapse {
  .el-collapse {
    @apply border-0;
  }
  .el-collapse-item__header {
    background: linear-gradient(30deg, #1f505a, #3e4454);
    @apply mb-4 h-full min-h-14  border-0 pl-3 text-lg text-white shadow-xl;
  }
  .el-collapse-item__content {
    @apply mb-4 bg-white p-2 shadow-lg;
  }
  .el-collapse-item__wrap {
    @apply border-0;
  }
}
</style>
