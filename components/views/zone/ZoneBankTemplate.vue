<template>
  <ZoneTemplate>
    <div>
      <div
        class="grid grid-cols-1 gap-3 px-4 pb-3 pt-10 md:px-10 xl:grid-cols-2 xl:px-16"
        :style="`background: url(${bgImage}) no-repeat center bottom / cover;`"
      >
        <div>
          <h2 class="text-base-80 mb-8 font-medium xl:mb-10">
            考試簡章 / 錄用人數 / 薪資福利 / 考古題免費下載
          </h2>
          <h1 class="mb-4 text-4xl font-medium text-base-800 lg:text-5xl">八大公股銀行</h1>
          <h2 class="mb-3 font-medium text-base-800">台灣銀行、土地銀行、兆豐銀行、合作金庫</h2>
          <h2 class="mb-8 font-medium text-base-800 xl:mb-10">
            第一銀行、彰化銀行、華南銀行、臺灣中小企銀
          </h2>
          <div>
            <div class="mb-2 grid max-w-[500px] grid-cols-2 gap-2 text-center">
              <a
                class="inline-block w-full rounded-3xl border border-solid border-[#d24646] bg-[#ef6262] px-4 py-1 text-xl tracking-widest text-white duration-300 ease-in-out hover:bg-white hover:text-[#d24646]"
                href=""
                >金融基測<span class="hidden sm:inline-block">FIT</span></a
              >
              <a
                class="inline-block w-full rounded-3xl border border-solid border-[#d24646] bg-[#ef6262] px-4 py-1 text-xl tracking-widest text-white duration-300 ease-in-out hover:bg-white hover:text-[#d24646]"
                href=""
                >簡章下載</a
              >
            </div>
            <a
              class="inline-block w-full max-w-[500px] rounded-3xl border border-solid border-[#d24646] bg-[#ef6262] px-4 py-1 text-center text-xl tracking-widest text-white duration-300 ease-in-out hover:bg-white hover:text-[#d24646]"
              href=""
              >馬上諮詢</a
            >
          </div>
        </div>
        <div>
          <div class="text-right">
            <span
              class="mb-2 block w-full rounded-3xl bg-white px-5 py-1 text-center text-2xl text-[#F94445] md:inline-block md:w-auto md:text-right"
              ><font-awesome-icon class="mr-2" :icon="['fas', 'magnifying-glass']" />TKB銀行</span
            >
          </div>
          <!--  學員心得影音固定 -->
          <div class="w-full">
            <Swiper
              :modules="[SwiperAutoplay, SwiperNavigation]"
              :autoplay="{
                delay: 8000
              }"
              :navigation="{
                nextEl: '.exam-bank-swiper-next',
                prevEl: '.exam-bank-swiper-prev'
              }"
              class="bank-banner-swiper overflow-hidden rounded border-4 border-solid border-white"
            >
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/lzBSRyvGl5U"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/-ozzlhAWBac"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/0ocFzu_F8pw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/wdnvHOrjzsw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/QoDXocVN0Yk"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="youtube">
                  <iframe
                    src="https://www.youtube.com/embed/Z3UxgRy4jUI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </SwiperSlide>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </Swiper>
            <div class="flex items-center justify-center pb-6 pt-2 md:pb-0 md:pt-4">
              <div
                class="exam-bank-swiper-prev mr-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-base-50 duration-200 ease-in-out"
              >
                <font-awesome-icon class="text-3xl text-base-600" :icon="['fa', 'chevron-left']" />
              </div>
              <div
                class="exam-bank-swiper-next flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-base-50 duration-200 ease-in-out"
              >
                <font-awesome-icon class="text-3xl text-base-600" :icon="['fa', 'chevron-right']" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  跑馬燈固定 -->
      <div class="my-2">
        <ZoneBankMarquee />
      </div>
      <!--  ＊浮動Navbar -->
      <ZoneBankNav class="my-10" :nav-items="NavData" :items="itemsRef" />

      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <ZoneInfoContent>
          <ZoneInfoListRight>
            <ZoneInfoTitle titlename="最新消息" />
            <ZoneInfoNewItem
              v-for="(newitem, index) in NewsData"
              :key="index"
              :caption="examNewsData.newsTypeName"
              :title="newitem.title"
              :summary="newitem.subTitle"
              :url="`/news/toNews?news_id=${newitem.id}`"
            />
            <div class="text-right">
              <ButtonMore
                class="right-0"
                :to="`/news/toNewsList?type_id=${examNewsData.newsTypeId}`"
              />
            </div>
          </ZoneInfoListRight>
          <ZoneInfoListLeft>
            <ZoneInfoTitle titlename="新進簡章" />
            <ZoneInfoBrochureItem />
            <ZoneInfoBrochureItem />
            <ZoneInfoBrochureItem />
          </ZoneInfoListLeft>
        </ZoneInfoContent>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>精選文章</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-3 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          <nuxt-link
            v-for="(articleiItem, index) in ArticlesData.slice(0, 2)"
            :key="index"
            class="inline-block"
            :to="`/article/toArticle?article_id=${articleiItem.id}`"
          >
            <div class="relative mb-2 h-auto w-full overflow-hidden pt-[34.545455%]">
              <img class="absolute left-0 top-0 block h-full w-full" :src="articleiItem.picture" />
            </div>
            <h3 class="mb-1 line-clamp-1 h-auto font-medium">
              {{ articleiItem.title }}
            </h3>
            <p class="mb-1 line-clamp-1 h-auto">
              文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容文章內容
            </p>
          </nuxt-link>
        </div>
        <div class="text-right">
          <ButtonMore
            class="right-0"
            :to="`/article/toArticleList?type_id=${examArticleData.articleTypeId}`"
          />
        </div>
      </ZoneTemplateXPaddingNarrow>

      <div class="flex gap-3">
        <ZoneSectionTitle ref="anchor0">考試時程表</ZoneSectionTitle>
        <nuxt-link
          to="/examCalendar/toExamCalendarIndex"
          class="inline-block cursor-pointer rounded-3xl bg-primary-500 px-3 py-1 text-xl text-white duration-400 ease-in hover:opacity-80"
          target="_blank"
        >
          <font-awesome-icon :icon="['fas', 'calendar-plus']" />
          <span>加入行事曆</span>
        </nuxt-link>
      </div>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <ExamScheduleSwiperCard />
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>金融基測(FIT)</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <div class="mb-10 flex flex-col gap-8 xl:flex-row xl:gap-4">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl text-[#F4804D]">金融人員基礎學科測驗</h4>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1">
              <p>
                目的： <br />金融機構快速覓得適合的求職者 <br />求職者除可減輕多次準備考試之壓力
              </p>
              <p>採用行庫： <br />第一銀行、彰化銀行、華南銀行、臺灣中小企銀</p>
            </div>
          </div>
          <div class="w-full xl:w-[65%]">
            <h4 class="mb-3 text-3xl">考試時程表</h4>
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    屆別
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    報名期間
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    測驗日期
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    測驗查詢結果
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    第八屆
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    111/12/09～112/01/11
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/02/11
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/03/08
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    第九屆
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/02/17～112/03/22
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/04/15
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/05/11
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    第十屆
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/04/14～112/05/17
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    112/06/10
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    待簡章公告
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h4 class="mb-3 text-3xl">考試時程表</h4>
        <table class="w-full table-auto border-collapse text-center">
          <thead>
            <tr>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              ></th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                考科 I
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                考科 II
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                考科 III
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                <span class="cursor-pointer underline underline-offset-2">考科 IV</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                考科
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                會計學+貨幣銀行學
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                票據法+銀行法<br />(含施行細則)
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                民法+民事訴訟法+<br />強制執行法
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                <span class="cursor-pointer underline underline-offset-2"
                  >邏輯推理+資訊科技+<br />創新科技</span
                >
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                適用<br class="block sm:hidden" />專業
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                一般<br class="block sm:hidden" />行員
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                一般<br class="block sm:hidden" />行員
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                法務<br class="block sm:hidden" />人員
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                <span class="cursor-pointer underline underline-offset-2"
                  >資訊<br class="block sm:hidden" />人員</span
                >
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                測驗題型
              </td>
              <td
                colspan="4"
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                選擇題
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                測驗題型
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                80題
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                50題
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                80題
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                80題
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                測驗時間
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                90分鐘
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                60分鐘
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                90分鐘
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                90分鐘
              </td>
            </tr>
          </tbody>
        </table>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="anchor1">專業上榜課程</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <div class="mb-6 overflow-x-auto">
          <div class="w-[1130px]">
            <ul class="flex items-center gap-2">
              <li
                :class="{ courseactive: activeCourseTab === 0 }"
                class="w-[20%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 0"
              >
                正課班
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 1 }"
                class="w-[12%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 1"
              >
                速成班
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 2 }"
                class="w-[22%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 2"
              >
                總複習班
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 3 }"
                class="w-[15%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 3"
              >
                題庫班
              </li>
              <li
                :class="{ courseactive: activeCourseTab === 4 }"
                class="w-[28%] cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
                @click="activeCourseTab = 4"
              >
                口面試課程
              </li>
            </ul>
          </div>
          <div class="my-4 w-[1130px]">
            <img class="" src="~/assets/img/bank/timeline.svg" />
          </div>
        </div>

        <!-- 正課班 -->
        <div v-show="activeCourseTab === 0" class="mb-3 flex flex-col gap-4 xl:flex-row">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl font-bold">正課班</h4>
            <div class="grid grid-cols-2 gap-4 xl:grid-cols-1">
              <p class="text-lg">
                <span class="block">適合對象：</span>
                <span class="block">長期準備需求者(學習時間6~12個月)</span>
              </p>
              <p class="text-lg">
                <span class="block">課程設計：</span>
                <span class="block"
                  >完整的課程內容，從基礎打底到考場運用，通過系統化教學，讓門外漢都能輕鬆學會！</span
                >
              </p>
            </div>
            <ButtonS2
              class="hidden text-sm sm:text-base xl:block"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
          <div class="w-full xl:w-[65%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    科目
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">英文</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    凱西
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    43
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">會計學</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    45
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">票據法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    林菲
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    12
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">銀行法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    12
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">銀行法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    陳弘
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王達昌
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    45
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王喆
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    42
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >洗錢防制法</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    陳弘
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block text-center xl:hidden">
            <ButtonS2
              class="text-sm sm:text-base"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
        </div>
        <!-- 速成班 -->
        <div v-show="activeCourseTab === 1" class="mb-3 flex flex-col gap-4 xl:flex-row">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl font-bold">速成班</h4>
            <div class="grid grid-cols-2 gap-4 xl:grid-cols-1">
              <p class="text-lg">
                <span class="block">適合對象：</span>
                <span class="block">短期準備需求者（學習時間1~2個月）</span>
              </p>
              <p class="text-lg">
                <span class="block">課程設計：</span>
                <span class="block"
                  >速成的課程內容，加強考點解析，通過特殊的課程設計，讓你只要30
                  天一天不用3小時，快速學習！</span
                >
              </p>
            </div>
            <ButtonS2
              class="hidden text-sm sm:text-base xl:block"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
          <div class="w-full xl:w-[65%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    科目
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">會計學</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    33
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">票據法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    林菲
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    12
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">銀行法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    12
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">銀行法</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    陳弘
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王達昌
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    24
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王喆
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    24
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >洗錢防制法</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    陳弘
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block text-center xl:hidden">
            <ButtonS2
              class="text-sm sm:text-base"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
        </div>
        <!-- 總複習班 -->
        <div v-show="activeCourseTab === 2" class="mb-3 flex flex-col gap-4 xl:flex-row">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl font-bold">總複習班</h4>
            <div class="grid grid-cols-2 gap-4 xl:grid-cols-1">
              <p class="text-lg">
                <span class="block">適合對象：</span>
                <span class="block">考前準備需求者（學習時間6~10天）</span>
              </p>
              <p class="text-lg">
                <span class="block">課程設計：</span>
                <span class="block"
                  >考前不知道該怎麼準備嗎？我們替您準備好了，重點整理考題解析應有盡有，陪您走最後一哩路！</span
                >
              </p>
            </div>
            <ButtonS2
              class="hidden text-sm sm:text-base xl:block"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
          <div class="w-full xl:w-[65%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    科目
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">會計學</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王達昌
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">英文</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    凱西
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block text-center xl:hidden">
            <ButtonS2
              class="text-sm sm:text-base"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
        </div>
        <!-- 題庫班 -->
        <div v-show="activeCourseTab === 3" class="mb-3 flex flex-col gap-4 xl:flex-row">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl font-bold">題庫班</h4>
            <div class="grid grid-cols-2 gap-4 xl:grid-cols-1">
              <p class="text-lg">
                <span class="block">適合對象：</span>
                <span class="block">考前最後衝刺者（學習時間3天）</span>
              </p>
              <p class="text-lg">
                <span class="block">課程設計：</span>
                <span class="block"
                  >整理年度考題，搭配詳細解說內容，讓你熟悉各家銀行考試題型，進考場前信心滿滿!</span
                >
              </p>
            </div>
            <ButtonS2
              class="hidden text-sm sm:text-base xl:block"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
          <div class="w-full xl:w-[65%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    科目
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">會計學</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    揚智
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    5
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >貨幣銀行學</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    王達昌
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    11
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >法科(票據法+銀行法+洗錢防制法)</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    陳弘+林菲
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    4.5
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">英文</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    游懿
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    5.5
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail">英文</nuxt-link>
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    凱西
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    9
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block text-center xl:hidden">
            <ButtonS2
              class="text-sm sm:text-base"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
        </div>
        <!-- 口面試課程 -->
        <div v-show="activeCourseTab === 4" class="mb-3 flex flex-col gap-4 xl:flex-row">
          <div class="w-full xl:w-[35%]">
            <h4 class="mb-3 text-3xl font-bold">口面試課程</h4>
            <div class="grid grid-cols-2 gap-4 xl:grid-cols-1">
              <p class="text-lg">
                <span class="block">適合對象：</span>
                <span class="block"
                  >公股銀行考生，由於筆試放榜到面試考前時間不定，最短只有一周準備，建議提前報名，加速上榜！</span
                >
              </p>
              <p class="text-lg">
                <span class="block">課程設計：</span>
                <span class="block"
                  >最後一關面試應該如何準備?
                  TKB完整的銀行口面試課程，精選面試考題，幫助你順利過關，直達金榜!</span
                >
              </p>
            </div>
            <ButtonS2
              class="hidden text-sm sm:text-base xl:block"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
          <div class="w-full xl:w-[65%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    科目
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    <nuxt-link class="text-link" to="/product/toProductDetail"
                      >銀行口面試全攻略</nuxt-link
                    >
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    Allen
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    4
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    銀行書審口試訓練
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    TKB師資
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    4
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="block text-center xl:hidden">
            <ButtonS2
              class="text-sm sm:text-base"
              :width="'sm:w-[120px]'"
              :bg-color="'bg-[#f4804c]'"
              >立即購買</ButtonS2
            >
          </div>
        </div>

        <div class="text-right">
          <ButtonMore class="cursor-pointer" @click="nextTab">NEXT</ButtonMore>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>包套豐富課程</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <table class="w-full table-auto border-collapse text-center">
          <thead>
            <tr>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                銀行<br class="block sm:hidden" />
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                銀行<br class="block sm:hidden" />菁英班
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                銀行<br class="block sm:hidden" />金榜班
              </th>
              <th
                class="border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                銀行<br class="block sm:hidden" />高效班
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                正課班
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              ></td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                正課班
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              ></td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                總複習班
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                題庫班
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              ></td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                銀行口面試全攻略
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                V
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                使用期限
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                一年
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                一年
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                一年
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                價格
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                NT$<br class="block sm:hidden" />32,000
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                NT$<br class="block sm:hidden" />26,000
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                NT$<br class="block sm:hidden" />19,000
              </td>
            </tr>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                適合對象
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                在校生，零基礎，長時間準備
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                上班族，零基礎
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                商科背景，有會計、貨銀底子
              </td>
            </tr>
            <tr>
              <td class="break-words px-1 py-2 align-middle text-lg"></td>
              <td class="break-words px-1 py-2 align-middle text-lg">
                <ButtonS2
                  class="text-sm sm:text-base"
                  :width="'sm:w-[120px]'"
                  :bg-color="'bg-[#f4804c]'"
                  >立即購買</ButtonS2
                >
              </td>
              <td class="break-words px-1 py-2 align-middle text-lg">
                <ButtonS2
                  class="text-sm sm:text-base"
                  :width="'sm:w-[120px]'"
                  :bg-color="'bg-[#f4804c]'"
                  >立即購買</ButtonS2
                >
              </td>
              <td class="break-words px-1 py-2 align-middle text-lg">
                <ButtonS2
                  class="text-sm sm:text-base"
                  :width="'sm:w-[120px]'"
                  :bg-color="'bg-[#f4804c]'"
                  >立即購買</ButtonS2
                >
              </td>
            </tr>
          </tbody>
        </table>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="anchor2">師資介紹</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="mb-10 py-3 md:py-8">
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :loop="true"
          :slides-per-view="1"
          :space-between="40"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true
          }"
          :autoplay="{
            delay: 5000
          }"
          :breakpoints="{
            [breakpointsInt('md')]: {
              slidesPerView: 2,
              spaceBetween: 20
            }
          }"
          :lazy="{
            loadPrevNext: true,
            loadPrevNextAmount: 2 // 可視block的預載入數量
          }"
          class="teacherSwiper relative h-auto w-full overflow-hidden"
        >
          <!-- 揚智 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  揚智
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>會計學</span>
                    </div>
                    <p class="text-base-500">
                      快速解題模式與步驟，不以強記重理解的教學方式，讓考生能在短時間內掌握精要重點與考試核心。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-yangjhih.png" alt="揚智" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>中華民國審計部</div>
                      <div>東吳大學審計學兼任講師</div>
                      <div>真理大學中級會計學兼任講師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">證照</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>會計師、記帳士、地政士、證券分析師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>國立大學會計系所博士候選人</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 韓裕 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  韓 裕
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>會計學</span>
                    </div>
                    <p class="text-base-500">
                      活潑的教學，搭配口訣背誦主題大架構，解題簡單又好懂。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-hanyu.png" alt="韓裕" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>公股銀行一般金融人員</div>
                      <div>高考三級金融保險</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">證照</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>證券分析師（CSIA）</div>
                      <div>企業評價師證照</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 王達昌 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  王達昌
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>貨幣銀行學</span>
                    </div>
                    <p class="text-base-500">
                      喜愛研究經濟學，對經濟學有獨到的見解，帶你對貨銀有不一樣的認識。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-wangdachang.png" alt="王達昌" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>中華經濟研究院研究助理</div>
                      <div>美國約翰霍普金斯大學(JHU) 財金系助教</div>
                      <div>美國密西根州立大學(MSU) 經濟學助教</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>台大財金系畢業（原台大電機系轉系）</div>
                      <div>美國約翰霍普金斯大學(JHU) 財務工程學碩士</div>
                      <div>美國密西根州立大學(MSU) 經濟學博士班(進修)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 凱西 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  凱 西
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>銀行英文</span>
                    </div>
                    <p class="text-base-500">
                      以淺顯易懂的方式，加強同學掌握字根的能力。帶同學快速解題，技巧取分。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-cathy.png" alt="凱西" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>百官網英文科講師</div>
                      <div>大碩教育高普特考英文解題書作者</div>
                      <div>長廣翻譯兼職翻譯員</div>
                      <div>國立臺灣師範大學進修推廣學院講師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">證照</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>多益新制990滿分</div>
                      <div>全民英檢高級證書</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>國立政治大學語言學博士</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 陳弘 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  陳 弘
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>銀行法、洗錢防制法</span>
                    </div>
                    <p class="text-base-500">
                      以體系化的方式講解金融法規之涵義適時連結歷年試題解析，讓學員能以最有效率的方式掌握命題重點，進而獲取高分快速上榜。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-chen.png" alt="陳弘" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>銀行法務主管、金融研訓院菁英講座</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>東海大學法律系</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 林菲 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  林 菲
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>票據法</span>
                    </div>
                    <p class="text-base-500">
                      加強基本觀念，強調法條融會貫通。透過考古題演練，使同學易於掌握重點。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-linfei.png" alt="林菲" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>政大法律事務所合署律師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">證照</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>律師證照</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>台科大專利所</div>
                      <div>東吳大學法學士</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 王喆 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  王 喆
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>貨幣銀行學</span>
                    </div>
                    <p class="text-base-500">掌握最新時事融入課程，實務解釋理論易學易懂。</p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-wangjhe.png" alt="王喆" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>補教貨幣銀行學講師</div>
                      <div>銀行經濟學相關書籍暢銷作家</div>
                      <div>大學專業財務分析師</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- Allen -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  Allen
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>銀行口面試</span>
                    </div>
                    <p class="text-base-500">
                      運用業界工作經驗，分析銀行面試要訣，讓同學能快速準備面試，立即上榜。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12">
                    <img class="block" src="~/assets/img/bank/t-allen.png" alt="Allen" />
                  </div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>金控轄下證券公司人力資源部專案規畫暨人才招募主管(協理)</div>
                      <div>中央大學企業職涯導師</div>
                      <div>人力銀行履歷健診諮詢師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">證照</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>國際內部稽核師</div>
                      <div>證券商財富管理顧問</div>
                      <div>高級業務員</div>
                      <div>投信投顧業務人員</div>
                      <div>信託業業務人員</div>
                      <div>期貨業務員</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>紐西蘭奧克蘭大學財務金融系</div>
                      <div>國立中山大學企業管理研究所碩士</div>
                      <div>國立成功大學企業管理系學士</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <!-- 黃榕 -->
          <SwiperSlide>
            <div class="flex w-full pt-8">
              <div
                class="relative w-full rounded-md border border-solid border-[#FF954D] px-2 py-3"
              >
                <div
                  class="text-bold absolute -top-4 inline-block rounded bg-[#F4804D] px-5 py-[4px] text-xl tracking-widest text-white"
                >
                  黃 榕
                </div>
                <div class="mb-2 mt-4 flex gap-2">
                  <div class="w-full">
                    <div>
                      <span class="mr-1 font-medium">教授科目</span
                      ><font-awesome-icon
                        class="mr-1 text-[#FFA561]"
                        :icon="['fas', 'caret-right']"
                      /><span>銀行口面試</span>
                    </div>
                    <p class="text-base-500">
                      以類別分析題型，快速掌握題型背後的意義，讓學員能以最有效率的方式掌握口試重點。最後透過一對一教學，針對學員特色，強化口試重點，以獲取高分快速上榜。
                    </p>
                  </div>
                  <div class="h-[106px] w-[106px] shrink-0 grow -translate-y-12"></div>
                </div>
                <div class="flex w-full flex-row flex-wrap">
                  <div class="mb-3 mr-2 flex items-center">
                    <div class="whitespace-nowrap font-medium">經歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>多間大學兼任講師</div>
                      <div>套裝甄戰學習顧問中心經理及老師</div>
                    </div>
                  </div>
                  <div class="mb-3 mr-2 flex w-full items-center xl:w-[48%]">
                    <div class="whitespace-nowrap font-medium">學歷</div>
                    <div class="mx-2 h-full bg-[#FFA561] p-[2px] opacity-50"></div>
                    <div class="flex flex-col">
                      <div>清華大學科管所畢業</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div class="swiper-pagination"></div>
        </Swiper>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="anchor3">參考適用對象</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 0 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 0 ? -1 : 0"
          >
            Q 我目前是上班族，我想轉職，我從來沒有準備過銀行考試課程，我應該選擇那一種課程？
          </h4>
          <p v-if="activeIndex === 0" class="py-3 pl-3 pr-6">
            我們建議您可以選擇<span class="font-bold">「銀行金榜班」</span>，課程包含了<span
              class="font-bold"
              >正課班</span
            >課程可以打好基礎，
            <span class="font-bold">總複習班</span
            >做考前複習觀念及解題技巧，在工作之餘好好準備公股銀行考試。
          </p>
        </div>
        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 1 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 1 ? -1 : 1"
          >
            Q 我是在校學生，請問我適合那一種課程？
          </h4>
          <p v-if="activeIndex === 1" class="py-3 pl-3 pr-6">
            我們建議您可以選擇<span class="font-weight-bold">「銀行菁英班」</span
            >是門針對在校學生和擁有長時間準備的考生而設計的課程，課程內容完整，包含了
            <span class="font-weight-bold">正課班、速成班、總複習班</span
            >，讓大二、大三有志畢業即就業的學生，在畢業後可以立即就業。
          </p>
        </div>
        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 2 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 2 ? -1 : 2"
          >
            Q 我是商學院畢業學生，學過會計學及貨幣銀行學，我想報考銀考試，請問我適合那一種課程？
          </h4>
          <p v-if="activeIndex === 2" class="py-3 pl-3 pr-6">
            我們建議您可以選擇<span class="font-weight-bold">「銀行高效班」</span>，課程包含了
            <span class="font-weight-bold">速成班</span
            >帶您快速找回會計學及貨幣銀行學的記憶，最後搭配<span class="font-weight-bold"
              >總複習班</span
            >課程做考前複習觀念及解題技巧。
          </p>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle>銀行考試課程</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 3 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 3 ? -1 : 3"
          >
            Q 什麼是金融基測(FIT)考試呢？
          </h4>
          <p v-if="activeIndex === 3" class="py-3 pl-3 pr-6">
            <a href="https://www.tkbgo.com.tw/news/toNews.jsp?news_id=4509" target="_blank"
              ><font-awesome-icon :icon="['fas', 'circle-arrow-right']"
            /></a>
            全名為金融人員基礎學科測驗 (Fundamental Integrated Test for Banking and Finanace)
            <span class="block pt-3"
              >取其字首英文字母簡稱為金融基測(FIT)，其中FIT也呼應著"適合"的意思，代表採用金融從業人員尋求合適人選的意味，此考試從2020年首次舉辦由金融研訓院及六大公股銀行聯手。其中台灣銀行、土地銀行不採用FIT。</span
            >
          </p>
        </div>

        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 4 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 4 ? -1 : 4"
          >
            Q 有採用金融基測成績做為招募標準的行庫有哪些？
          </h4>
          <p v-if="activeIndex === 4" class="py-3 pl-3 pr-6">
            <span>金融研訓院與泛公股銀行合力推出金融基測(FIT)，以建構具代表性之徵才參考指標。</span>
          </p>
          <p v-if="activeIndex === 4" class="py-3 pl-3 pr-6">
            <span
              >取其字首英文字母簡稱為金融基測(FIT)，其中FIT也呼應著"適合"的意思，代表採用金融從業人員尋求合適人選的意味，此考試從2020年首次舉辦由金融研訓院及六大公股銀行聯手。其中台灣銀行、土地銀行不採用FIT。</span
            >
          </p>
        </div>

        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 5 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 5 ? -1 : 5"
          >
            Q 請問課程內容有包含金融基測考試內容嗎？
          </h4>
          <p v-if="activeIndex === 5" class="py-3 pl-3 pr-6">
            <span class="block"
              >正課班、速成班的課程內容都有包含金融基測考試範圍，同學觀看可以一次準備金融基測及各行招考。</span
            >
          </p>
        </div>
        <div class="mb-3 rounded bg-base-200 px-2 py-2 sm:px-6">
          <h4
            :class="activeIndex === 6 ? 'openfaq' : ''"
            class="relative cursor-pointer px-3 text-2xl font-bold tracking-widest after:absolute after:right-0 after:top-1/2 after:ml-3 after:-translate-y-[50%] after:text-primary-500 after:content-['+']"
            @click="activeIndex = activeIndex === 6 ? -1 : 6"
          >
            Q 請問「正課班」與「速成班」的差異？
          </h4>
          <p v-if="activeIndex === 6" class="py-3 pl-3 pr-6">
            <span class="font-bold">「正課班」</span
            >是完整課程，尤其是會計學及貨幣銀行學，老師會從頭開始上課，幫上課同學打好基礎。
          </p>
          <p v-if="activeIndex === 6" class="py-3 pl-3 pr-6">
            <span class="font-bold">「速成班」</span
            >主要是提供已熟讀課程的學員，在最後階段，考試簡章公告後1~2個月的衝刺使用。
          </p>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="anchor4">銀行最大優勢</ZoneSectionTitle>
      <div class="my-8 flex flex-row flex-wrap gap-2 bg-[#ffb882] px-8 py-6 xl:gap-0">
        <div
          class="mx-auto my-4 flex w-[260px] gap-1 sm:my-0 sm:w-[48%] sm:justify-start xl:w-[24%] xl:justify-center xl:after:right-0 xl:after:block xl:after:h-[100px] xl:after:w-[1px] xl:after:translate-x-8 xl:after:bg-white xl:after:opacity-70 xl:after:content-['']"
        >
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/bank/advantage_icon-01.jpg"
              title="銀行人4大優勢 第一大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-base-800">薪資福利</div>
            <p class="text-lg">年薪含年終達80萬</p>
          </div>
        </div>
        <div
          class="mx-auto my-4 flex w-[260px] gap-1 sm:my-0 sm:w-[48%] sm:justify-start xl:w-[24%] xl:justify-center xl:after:right-0 xl:after:block xl:after:h-[100px] xl:after:w-[1px] xl:after:translate-x-8 xl:after:bg-white xl:after:opacity-70 xl:after:content-['']"
        >
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/bank/advantage_icon-02.jpg"
              title="銀行人4大優勢 第二大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-base-800">升遷機會</div>
            <p class="text-lg">每兩年升等考核<br />升遷快速且透明公開</p>
          </div>
        </div>
        <div
          class="mx-auto my-4 flex w-[260px] gap-1 sm:my-0 sm:w-[48%] sm:justify-start xl:w-[24%] xl:justify-center xl:after:right-0 xl:after:block xl:after:h-[100px] xl:after:w-[1px] xl:after:translate-x-8 xl:after:bg-white xl:after:opacity-70 xl:after:content-['']"
        >
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/bank/advantage_icon-03.jpg"
              title="銀行人4大優勢 第三大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-base-800">考試次數</div>
            <p class="text-lg">每年10次以上</p>
          </div>
        </div>
        <div
          class="mx-auto my-4 flex w-[260px] gap-1 sm:my-0 sm:w-[48%] sm:justify-start xl:w-[24%] xl:justify-center"
        >
          <div class="h-[83px] w-[82px]">
            <img
              class="block w-full"
              src="~/assets/img/bank/advantage_icon-04.jpg"
              title="銀行人4大優勢 第四大"
            />
          </div>
          <div>
            <div class="mb-1 text-3xl font-bold text-base-800">考科準備</div>
            <p class="text-lg">5科專業科目<br />以選擇題為主</p>
          </div>
        </div>
      </div>

      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-[#ffb881]" :icon="['fas', 'comment-dollar']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">薪資福利好</h4>
            <span class="text-2xl text-primary-500">年薪含年終達80萬</span>
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  職等
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  薪資待遇
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  優惠待遇
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  八職等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  底薪54,600元
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                  rowspan="4"
                >
                  <ul class="ml-4 block list-decimal pl-2 text-left">
                    <li>48萬13%優惠存款</li>
                    <li>每年調薪3%起跳</li>
                    <li>年終獎金保證2個月以上</li>
                    <li>勤務加給</li>
                    <li>優惠貸款</li>
                    <li>臺土另有國民旅遊金</li>
                    <li>固定每兩年升等</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  七職等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  底薪48,500元
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  六職等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  底薪41,700元
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  五職等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  底薪36,471元
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-[#ffb881]" :icon="['fas', 'comment-dollar']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">升遷機會快速</h4>
            <span class="text-2xl text-primary-500"
              >每兩年升等考核，升遷快速且透明公開(全台約1,527位經理、3054位副理，升遷機會多)</span
            >
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 flex flex-col xl:flex-row xl:items-center xl:gap-3">
          <div class="m-auto w-[300px] sm:w-[400px] xl:w-[800px]">
            <img class="w-full" src="~/assets/img/bank/bank_chance.webp" alt="銀行考試升遷機會多" />
          </div>
          <div>
            <div class="mb-3 overflow-scroll lg:overflow-clip">
              <table class="w-[992px] table-auto border-collapse text-center sm:w-full">
                <thead>
                  <tr>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      董事長
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      董事(常務)
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      總經理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      副總經理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      協理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      主任
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      經理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      副理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      襄理
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      課長
                    </th>
                    <th
                      class="whitespace-nowrap border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                    >
                      組長
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                      colspan="7"
                    >
                      10~15職等
                    </td>
                    <td
                      class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                      colspan="4"
                    >
                      5~9職等
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              以上資料是以台銀為例『一般金融人員(櫃員)』入行以5職級1級次任用(簡稱5等1)，經過六個月試用期過後會升一級次數變為５等２，在職級的升級都是非常固定的，完整的兩年升『職級』1次，沒有升級的那年就是升『級次』，平均8年就可以勝任8職等。
            </div>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-[#ffb881]" :icon="['fas', 'comment-dollar']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">上榜機會多</h4>
            <span class="text-2xl text-primary-500"
              >銀行局統計，2022年公股銀行缺額，將達3,000人以上</span
            >
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                ></th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  公職考試
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  國營考試
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  銀行考試
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  招考次數
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  1次
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  2次
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  約12次以上(依各銀行)
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  錄取人數
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  583人
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  740人
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  約3,000人
                </td>
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  備註
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                  colspan="3"
                >
                  公職考試(金融類)內含一般行政、會計、財稅行政、金融保險
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="flex items-start gap-3">
          <font-awesome-icon class="text-6xl text-[#ffb881]" :icon="['fas', 'comment-dollar']" />
          <div class="inline-block text-3xl">
            <h4 class="font-bold">考科準備容易</h4>
            <span class="text-2xl text-primary-500">5科專業科目，以「選擇題」為主</span>
          </div>
        </div>
        <hr class="my-4" />
        <div class="mb-8 overflow-scroll sm:overflow-clip">
          <table class="w-[568px] table-auto border-collapse text-center sm:w-full">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                ></th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  會計
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  貨銀
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  票據法
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  銀行法
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  洗錢防制
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  台灣銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  土地銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  兆豐銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  合作金庫
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  臺灣企銀
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  第一銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  彰化銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  華南銀行
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  金融基測
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
              </tr>
              <tr>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                >
                  備註
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle text-lg"
                  colspan="5"
                >
                  實際以公告簡章為主
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </ZoneTemplateXPaddingNarrow>

      <ZoneSectionTitle ref="anchor5">學員見證</ZoneSectionTitle>
      <div
        class="my-8 flex flex-col gap-4 bg-[#ffb881] px-2 py-12 lg:px-[160px] xl:flex-row xl:gap-6"
      >
        <Swiper
          :modules="[SwiperAutoplay, SwiperController, SwiperNavigation, SwiperEffectCreative]"
          :allow-touch-move="true"
          :effect="fade"
          :loop="true"
          :slides-per-view="auto"
          :lazy="{
            loadPrevNext: true,
            loadPrevNextAmount: 1
          }"
          :autoplay="{
            delay: 6000,
            stopOnLastSlide: false,
            disableOnInteraction: true
          }"
          :controller="{
            control: studentAvatarSwiper,
            inverse: false,
            By: 'container'
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }"
          class="student-avatar-slider w-[300px] lg:w-[460px] xl:pl-14"
        >
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_10.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_11.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_12.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_9.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_8.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_7.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_6.webp"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="img_box">
              <img
                class="absolute h-full w-full rounded-full border-4 border-solid border-white object-cover"
                src="~/assets/img/bank/exp_avatar_5.webp"
              />
            </div>
          </SwiperSlide>
          <div class="swiper-button-prev left-[70px] lg:left-[150px] xl:left-[120px]">
            <font-awesome-icon class="text-white" :icon="['fas', 'left-long']" />
          </div>
          <div class="swiper-button-next right-[70px] lg:right-[150px] xl:right-[150px]">
            <font-awesome-icon class="text-white" :icon="['fas', 'right-long']" />
          </div>
          <div
            class="absolute bottom-[160px] left-3 z-10 hidden h-[70px] w-[32px] bg-black px-2 pb-0 pt-[32px] text-center text-white after:absolute after:-bottom-[14px] after:-left-[12px] after:block after:h-[26px] after:w-11 after:border-x-2 after:border-b-2 after:border-solid after:border-black after:content-[''] xl:block"
          >
            <span class="px-[2px] py-0">2</span>
            <span
              class="absolute -top-5 left-0 right-0 mx-auto my-0 h-8 w-[2px] bg-white before:absolute before:-bottom-[14px] before:block before:h-[3px] before:w-[3px] before:rounded-full before:bg-white before:content-[''] after:absolute after:-bottom-[44px] after:block after:h-[3px] after:w-[3px] after:rounded-full after:bg-white after:content-['']"
            ></span>
          </div>
        </Swiper>

        <Swiper
          :modules="[SwiperAutoplay, SwiperController, SwiperNavigation, SwiperEffectCreative]"
          :allow-touch-move="false"
          :effect="fade"
          :loop="true"
          class="student-experience-slider mx-auto w-full text-center lg:w-[520px] lg:text-start"
          @swiper="studentExperienceSwiper"
        >
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">土地銀行 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">林Ｏ文</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              當初是看到廣告跟TKB主動聯繫，會選擇TKB學堂主要是因為我當時還有工作，雲端學習對於我十分方便。TKB提供的銀行考前猜題也十分有用，除了測試自己實力
              外，也可以快速了解每間銀行的出題重點。回首現在，更感謝當初的選擇。
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">華南銀行 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">紀Ｏ如</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              會計學及貨幣銀行學的準備方式，我會邊聽老師講課邊在課本空白處寫筆記，雲端函授有一個好處就是可以隨時按暫停或倒帶，讓我在遇到困難的題型時，
              能有時間可以思考或是再重複聽老師的解說。而我都會在老師要講解課本上的考古題時，讓影片先暫停，讓自己試著做題目，做錯的題目就會再回去看老師如何解題。
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">兆豐銀行 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">林Ｏ慧</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              原先是打算自讀做一個全職考生，但也因為太久沒有讀這些科目，很多概念已經忘記，因此考慮透過補習班幫助理解。一方面碰上疫情，不希望人擠人也不想花
              時間在交通上，因此看到TKB的雲端上課模式，非常的適合我!另外線上小編的回覆也非常迅速，對課程有疑問時，很快就能得到回覆，TKB就成了我的首選!
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">合作金庫 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">蘇O瑋</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              對於非本科系準備的我來說，真的很感謝TKB提供了那麼好的師資，讓我能夠在短時間內學會考試的所有考科，且在考前和考後有時候會額外提供總複習或是解題
              的課程給大家真的對在準備考試的考生很有幫助！當初在決定要不要補習時我用了一個想法決定要花這筆錢，就是問自己願不願意花一個月的薪水來換一份工作，
              現在往回看自己當初的選擇真的覺得非常值得，真心推薦給大家！
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">台灣銀行/合作金庫 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">陳O云</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              當初想要報考銀行是因為覺得上份工作沒有什麼晉升空間還有自己並不喜歡公司的文化。剛開始自行準備了一個月，去參加第二屆金融基測，對於考科不甚熟悉，
              成績當然慘不忍睹，於是我上網搜尋銀行招考課程，最後決定報名TKB課程。經過四個月的準備，課本整整讀了六、七次，考古題更是練習了五次，在考場上不免
              緊張，但是歸功於平日的練習還有老師的教導，最終在合庫的筆試奪得意想不到的好成績。凡事最難的從來不是達成目標，而是堅持的勇氣。
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">合作金庫 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">傅O瑀</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              我大學讀的是休閒系，正因為這樣所以我更知道在先天上是沒有優勢的，必須從零開始。必須說銀行雖然不是最好的選擇，但卻是評估下來CP值絕對排在前面的，
              這是一個行銷金融商品的地方，勢必要瞭解到它需要賣東西，如果一丁點業績都接受不了，那就只能乖乖考高普考。因為有強烈的目標，所以我從開始全職到準備
              完成大約經歷了三個月的時間，這當中是相當辛苦而且高壓的，但回頭來看會發現自己成長非常快速，最後的1-2個月時間我開始調整比重到準備相關證照的考試，
              因為除了拿到筆試的門票外，證照在口試也會有一定的加分效果，雖然會埋沒在書堆當中，但是要短時間衝刺，是絕對有可能的，我就是活生生的例子。
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <h4 class="text-xl font-bold text-base-800">合庫/華銀/彰銀 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">陳O斌</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              合庫/彰銀/華銀連續上榜！專業科目幾乎都是從零學起，比起準備時間，認為最重要的是讀書的品質，先按照老師講的，看完課馬上做題目，加上教材都有法
              條對照節省很多時間，最後自己用"講故事"的方式複習重點推導解題過程，找到對的方法，「準備不怕苦，邊追劇邊讀！」
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
          <SwiperSlide class="">
            <h4 class="text-xl font-bold text-base-800">第一銀行 一般行員</h4>
            <div class="my-7 text-5xl font-bold tracking-widest text-base-800">李O蓉</div>
            <div
              class="mb-3 line-clamp-5 h-auto text-start text-xl leading-8 tracking-wider text-base-800"
            >
              出社會工作十幾年了，不想再為生活遷就不滿意的工作環境，雖然猶豫但「不去試怎麼會知道？」，原本預計年底上榜明年轉職，沒想到3月開始上課後，
              老師鼓勵我們多考有機會，沒上就當練習，我開始每天利用上班前、午休、下班時間快速讀完課程，雖然很煎熬，但也因為提早報考讓自己更加認真準備，
              提早5個月達成心中的目標，7月順利上榜一銀！
            </div>
            <div class="text-right">
              <ButtonMore to="/review/toReview" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <ZoneSectionTitle>銀行資訊人員</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-6 flex flex-col xl:flex-row xl:items-center xl:gap-3">
          <div class="mb-6 w-full xl:mb-0 xl:w-[40%]">
            <p class="mb-2 text-xl">適合對象： 金融界資訊人員</p>
            <p class="text-xl">課程設計： 針對金融基測-考科IV，獨特30小時課程架構，零基礎輔考！</p>
          </div>
          <div class="w-full xl:w-[60%]">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    課程
                  </th>
                  <th
                    class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    師資
                  </th>
                  <th
                    class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    參考時數
                  </th>
                  <th
                    class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
                  >
                    上課模式
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    資訊科技&創新科技
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    張逸
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    30
                  </td>
                  <td
                    class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
                  >
                    雲端
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <table class="mb-3 w-full table-auto border-collapse text-center">
          <thead>
            <tr>
              <th
                class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                資訊科技
              </th>
              <th
                class="whitespace-nowrap border border-solid border-[#FFE6CF] bg-[#FFE6CF] p-2 align-middle text-lg font-bold tracking-widest text-[#AD533B]"
              >
                創新科技
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                作業系統操作<br />
                程式語言<br />
                資訊系統<br />
                資料庫應用<br />網路管理<br />
                資訊安全
              </td>
              <td
                class="break-words border border-solid border-[#FFE6CF] px-1 py-2 align-middle text-lg"
              >
                人工智慧<br />
                大數據<br />
                物聯網<br />
                VR/AR<br />....
              </td>
            </tr>
          </tbody>
        </table>
        <a
          href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2011ITI000001&class_type=I&group=8&type=135&kind=396"
          target="_blank"
          ><ButtonS2>立即購買</ButtonS2></a
        >
      </ZoneTemplateXPaddingNarrow>

      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <PublicForm />
      </ZoneTemplateXPaddingNarrow>

      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-4 grid grid-cols-2 gap-4">
          <a
            class="flex flex-col items-center justify-center gap-2 rounded bg-social-line-50 px-2 py-1 sm:flex-row sm:justify-start"
            href="https://lin.ee/7PCkQlZ"
            target="_blank"
          >
            <font-awesome-icon class="text-7xl text-social-line-500" :icon="['fab', 'line']" />
            <div class="text-center sm:text-left">
              <div class="text-lg font-bold">立即加入</div>
              <div class="">掌握即時考試資訊</div>
            </div>
          </a>
          <a
            class="flex flex-col items-center justify-center gap-2 rounded bg-social-fb-50 px-2 py-1 sm:flex-row sm:justify-start"
            href="https://www.facebook.com/bank.tkbgo"
            target="_blank"
          >
            <font-awesome-icon
              class="text-7xl text-social-fb-500"
              :icon="['fab', 'square-facebook']"
            />
            <div class="text-center sm:text-left">
              <div class="text-lg font-bold">TKB銀行</div>
              <div class="">成為銀行人</div>
            </div>
          </a>
        </div>
        <a
          class="w-ful mb-10 block"
          target="_blank"
          href="https://www.tkbgo.com.tw/go_edm/edm623/index.jsp?PRINT_ID=12466"
        >
          <picture>
            <source
              media="(min-width: 600px)"
              srcset="https://www.tkbtv.com.tw/p20230223EC001_1101_381/toPic.action"
            />
            <img
              class="w-full"
              src="https://www.tkbtv.com.tw/p20230223EC001_1101_381/toPic.action"
            />
          </picture>
        </a>
      </ZoneTemplateXPaddingNarrow>
      <ZoneSectionTitle class="">銀行考試日程表</ZoneSectionTitle>
      <ZoneTemplateXPaddingNarrow class="py-3 md:py-8">
        <div class="mb-3 flex flex-wrap gap-1">
          <ButtonS1
            v-for="(tab, index) in schedulesYearsData"
            :key="tab.id"
            :name="tab + '年'"
            :class="{ active: activeTabIndex === index }"
            @click="TabClick(tab, index)"
          />
        </div>
        <table class="w-full table-auto border-collapse text-center">
          <thead>
            <tr>
              <th
                class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
              >
                考試<br class="block md:hidden" />資訊
              </th>
              <!-- <th class="text-lg border-solid border border-base-300 bg-base-300 text-base-800 tracking-widest font-bold align-middle p-2">最新<br class="block md:hidden">消息</th> -->
              <th
                class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
              >
                預定<br class="block md:hidden" />報名日期
              </th>
              <th
                class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
              >
                預定<br class="block md:hidden" />考試日期
              </th>
              <th
                class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
              >
                簡章<br class="block md:hidden" />下載
              </th>
              <th
                class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
              >
                考古<br class="block md:hidden" />題
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in examSchedulesData" :key="index">
              <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
                <nuxt-link
                  :to="`/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
                  class="block text-lg text-link decoration-1 underline-offset-2"
                  >{{ item.examName }}</nuxt-link
                >
              </td>
              <!-- <td class="break-words py-2 px-1 align-middle border-solid border border-base-300 max-w-[200px]" v-if="item.newlink"><nuxt-link to=item.newlink class="block underline decoration-1 underline-offset-2 text-lg">{{item.newname}}</nuxt-link></td>
                <td class="break-words py-2 px-1 align-middle border-solid border border-base-300" v-else>尚無最新消息</td> -->
              <td
                v-if="item.applicationBeginDate !== ''"
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                {{ item.applicationBeginDate }}<br class="block md:hidden" />~<br
                  class="block md:hidden"
                />{{ item.applicationEndDate }}
              </td>
              <td
                v-else
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                尚未公告
              </td>
              <td
                v-if="item.examBeginDate !== ''"
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                {{ item.examBeginDate }}
              </td>
              <td
                v-else
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                尚未公告
              </td>
              <td
                v-if="item.examId !== ''"
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                <nuxt-link
                  :to="`/examData/toExamDowloadRegulation?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
                  class="text-link"
                  >下載頁</nuxt-link
                >
              </td>
              <td
                v-else
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                準備中
              </td>
              <td
                v-if="item.year !== ''"
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                <nuxt-link
                  :to="`/govArchaeology/toDownloadDetail?seqno=72&yy=${item.year}&exam_type_id=${examTypeId}`"
                  class="text-primary-500"
                  ><font-awesome-icon :icon="['fas', 'download']"
                /></nuxt-link>
              </td>
              <td
                v-else
                class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
              >
                準備中
              </td>
            </tr>
          </tbody>
        </table>
      </ZoneTemplateXPaddingNarrow>
    </div>
  </ZoneTemplate>
</template>
<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateXPaddingNarrow from '@/components/views/zone/ZoneTemplateXPaddingNarrow.vue'
import ButtonMore from '@/components/button/ButtonMore.vue'
import ZoneBankMarquee from '@/components/views/zone/ZoneBankMarquee'
import ZoneBankNav from '@/components/views/zone/ZoneBankNav'
import ZoneInfoContent from '@/components/views/zone/ZoneInfoContent.vue'
import ZoneInfoListRight from '@/components/views/zone/ZoneInfoListRight.vue'
import ZoneInfoListLeft from '@/components/views/zone/ZoneInfoListLeft.vue'
import ZoneInfoNewItem from '@/components/views/zone/ZoneInfoNewItem.vue'
import ZoneInfoBrochureItem from '@/components/views/zone/ZoneInfoBrochureItem.vue'
import ZoneInfoTitle from '@/components/views/zone/ZoneInfoTitle.vue'
import ZoneSectionTitle from '@/components/others/ZoneSectionTitle'
import ExamScheduleSwiperCard from '@/components/card/ExamScheduleSwiperCard.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import bgImage from '@/assets/img/bank/top_background.webp'

const route = useRoute()
// 取得route query 大分類exam_type_id
const examTypeId = ref(null)
const examId = ref(null)
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id
// 引入api資料
const examTypeData = inject('examTypeData') // 取得公職專區分類
const examNewsData = inject('examNewsData') // 最新消息
const examArticleData = inject('examArticleData') // 文章
const examExamsData = inject('examExamsData') // 取得所有考試
const ArticlesData = examArticleData.articles
const NewsData = examNewsData.news
const ExamsData = examExamsData.exams
// 取得考試日程表年份
const schedulesYearsData = ref(null)
const currentYear = ref(null)
async function fetchSchedulesYearsData(t1) {
  const { data: schedulesyearsres } = await useApi('/api/exam-section/exam-types/schedules-years', {
    key: '/api/exam-section/exam-types/${' + t1 + '}/schedules/available-years',
    query: { examTypeId: t1 }
  })
  examTypeId.value = t1
  schedulesYearsData.value = schedulesyearsres.value.data.availableYears
  currentYear.value = schedulesYearsData.value[0]
}

// 依考試類別 ID 及民國年取得考試日程資訊
const activeTabIndex = ref(0)
const activeTabYear = ref(null)
const examSchedulesData = ref(null)
const oldexamSchedulesData = ref(null)
const newexamSchedulesData = ref(null)

watch(currentYear, async () => {
  const { data: firstschedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: examTypeId.value, year: currentYear.value }
  })
  examSchedulesData.value = firstschedulesres.value.data.schedules
  oldexamSchedulesData.value = firstschedulesres.value.data.schedules
  newexamSchedulesData.value = oldexamSchedulesData.value
})

await fetchSchedulesYearsData(examTypeId.value)
// 路由更新重新渲染資料
onBeforeRouteUpdate(async (newRoute) => {
  examTypeId.value = newRoute.query.exam_type_id
  await fetchSchedulesYearsData(examTypeId.value)
})
// 麵包屑設定
const breadcrumbInfo = ref(null)
watchEffect(() => {
  examTypeId.value = route.query.exam_type_id
  examId.value = route.query.exam_data_id
  const examMainType = computed(() =>
    examTypeData.filter((item) => item.examTypeId === parseInt(examTypeId.value))
  )
  breadcrumbInfo.value = [
    {
      name: examMainType.value[0].examTypeName,
      path: '/examData/toExamList?exam_type_id=' + examTypeId.value
    }
  ]
})
provide('passbreadcrumb', breadcrumbInfo)
// 綠色區塊按鈕設定
// newExamsData考試按鈕,*因為Font Awesome資料為舊版本，暫時用假資料examIcon: ['fas', 'school']
const newExamsData = reactive(
  ExamsData.map((exam) => {
    return {
      ...exam,
      examIcon: ['fas', 'school'],
      isModal: false,
      toSrc: `/examData/toIntroduction?exam_data_id=${exam.examId}&exam_type_id=${examTypeId.value}`
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
    examIcon: ['fas', 'paste'],
    toSrc: `/govArchaeology/toDownloadDetail?seqno=51&yy=112&exam_type_id=${examTypeId.value}`
  },
  {
    examId: '35832739',
    examName: '線上測驗',
    examIcon: ['fas', 'map'],
    toSrc: `/examData/toBankTest?exam_type_id=${examTypeId.value}`
  }
])
provide('passmainmenu', newExamsData)
provide('passsubmenu', subMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')
const { breakpointsInt } = useTailwindConfig()

const activeCourseTab = ref(0)
const itemsRef = reactive([])
const anchor0 = ref(null)
const anchor1 = ref(null)
const anchor2 = ref(null)
const anchor3 = ref(null)
const anchor4 = ref(null)
const anchor5 = ref(null)

const NavData = reactive([
  { labelShort: '時程', labelFull: '招考時程' },
  { labelShort: '課程', labelFull: '金榜課程' },
  { labelShort: '師資', labelFull: '高手雲集' },
  { labelShort: 'Q&A', labelFull: '適用對象' },
  { labelShort: '優勢', labelFull: '必考理由' },
  { labelShort: '心得', labelFull: '學員見證' }
])
const studentAvatarSwiper = ref([])
const studentExperienceSwiper = (swiper) => {
  studentAvatarSwiper.value = swiper
}

onMounted(() => {
  //* 目標要包在最外層，設定ref=anchor+index
  itemsRef.push(anchor0.value.$el)
  itemsRef.push(anchor1.value.$el)
  itemsRef.push(anchor2.value.$el)
  itemsRef.push(anchor3.value.$el)
  itemsRef.push(anchor4.value.$el)
  itemsRef.push(anchor5.value.$el)
})

const nextTab = () => {
  if (activeCourseTab.value === 4) {
    activeCourseTab.value = 0
  } else {
    activeCourseTab.value++
  }
}

const TabClick = async (tab, index) => {
  activeTabYear.value = tab
  activeTabIndex.value = index

  // console.log(activeTabYear.value, activeTabIndex.value)
  const { data: schedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: examTypeId.value, year: activeTabYear.value }
  })

  examSchedulesData.value = schedulesres.value.data.schedules
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/youtube_lazyload';

.swiper-button-disabled {
  @apply opacity-50;
}

/* 師資介紹 */
:deep() .teacherSwiper {
  .swiper-wrapper {
    padding-bottom: 60px;
  }
  .swiper-slide {
    display: flex;
    height: auto;
  }
  .swiper-pagination {
    margin-top: 20px;
  }
  .swiper-pagination-bullet {
    background-color: #ffa561;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
}
/* 學員見證 */
:deep() .student-avatar-slider {
  @apply relative;
  .swiper-wrapper {
    @apply duration-300;
  }
  .img_box {
    filter: drop-shadow(9px 9px 0px #ffffff);
    margin-bottom: 60px;
    @apply relative z-10 mx-auto h-[250px] w-[250px] rounded-full xl:mx-0 xl:text-center;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-prev,
  .swiper-button-next {
    @apply absolute bottom-0 top-auto mb-2 w-auto cursor-pointer;
  }
}
:deep() .student-experience-slider {
  .swiper-slide-active.op-1 {
    opacity: 1 !important;
  }
  .swiper-slide-thumb-active.op-0 {
    opacity: 1 !important;
  }
}

.openfaq {
  &::after {
    content: '－';
  }
  > p {
    display: block;
  }
}

/* 頁籤 */
.active {
  @apply bg-secondary-500 text-base-50;
}

.courseactive {
  box-shadow: 0px 10px 10px rgba(80, 80, 80, 0.247);
  @apply bg-[#F4804D];
}

.bankNav {
  .nav-active {
    @apply bg-[#FFF1EA];
  }
}
</style>
