<template>
  <div>
    <div class="relative overflow-hidden bg-base-50">
      <!-- banner -->
      <div
        class="japExam-bg mb-6 flex h-[260px] items-center overflow-hidden sm:h-[580px] md:mb-14 xl:h-[610px]"
      >
        <div class="container">
          <div
            class="relative mx-auto mt-[25%] flex h-[85vw] w-[85vw] overflow-hidden rounded-full bg-[#F4E9A6] pb-[20%] lg:h-[864px] lg:w-[864px]"
          >
            <img
              class="z-[1] m-auto block h-[75%] w-auto"
              src="~/assets/img/japanZone/page/graMain.png"
              alt="JLPT"
            />
            <div class="circle -right-[5%] bottom-[40%] rotate-[115deg]"></div>
            <div class="circle bottom-1/2 left-[15%] rotate-[115deg]"></div>
          </div>
        </div>
      </div>

      <!-- 日檢能力一覽表 -->
      <section class="section1 pb-3 md:pb-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco1.png"
                />日檢能力一覽表</span
              >
            </h2>
          </div>

          <div class="mx-auto w-full lg:w-[1220px]">
            <Swiper
              class="japanLevelSlider"
              :modules="[SwiperAutoplay]"
              :observer="true"
              :observe-parents="true"
              :slides-per-view="1"
              :space-between="0"
              :active-index="0"
              :breakpoints="{
                [breakpointsInt('lg')]: {
                  slidesPerView: 5,
                  spaceBetween: 10
                }
              }"
              @swiper="levelSwiper"
            >
              <SwiperSlide
                v-for="(slide, index) in slides"
                :key="index"
                class="swiper-slide cursor-pointer"
                :class="{ 'jl-active': index === activeIndex }"
                @click="activeSlide(index)"
                @mouseenter="activeSlide(index)"
              >
                <div class="level-item">
                  <img class="item-img" :src="slide.itemSrc" />
                  <div class="level-main">
                    <img class="main-img" :src="slide.mainSrc" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            class="level-content mx-auto -mt-1 mb-8 w-full max-w-[1200px] rounded-3xl border border-solid px-9 py-4"
          >
            <div v-for="(content, index) in contents" :key="index">
              <div v-if="index === activeIndex">
                <h4 class="mb-5 text-center text-2xl text-secondary-500">{{ content.title }}</h4>
                <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
                  <div class="flex flex-col gap-3">
                    <p class="text-2xl">{{ content.textcount1 }}</p>
                    <p class="text-2xl">{{ content.textcount2 }}</p>
                  </div>
                  <div class="flex flex-col gap-3">
                    <p
                      class="after:contents-[''] relative text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black lg:min-h-11"
                    >
                      {{ content.info1 }}
                    </p>
                    <p
                      class="after:contents-[''] relative text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black lg:min-h-11"
                    >
                      {{ content.info2 }}
                    </p>
                  </div>
                  <div class="flex flex-col gap-3">
                    <p
                      class="after:contents-[''] relative text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black lg:min-h-11"
                    >
                      {{ content.info3 }}
                    </p>
                    <p
                      class="after:contents-[''] relative text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black lg:min-h-11"
                    >
                      {{ content.info4 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="overflow-x-auto">
            <table class="mx-auto w-[1200px] table-auto">
              <tbody>
                <tr>
                  <th
                    class="w-[20%] rounded-tl-3xl bg-base-400 px-7 py-6 text-center align-middle text-xl font-bold tracking-wider text-white"
                  >
                    對應程度
                  </th>
                  <td
                    class="w-[15%] bg-base-200 px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    N5
                  </td>
                  <td
                    class="w-[15%] bg-[#C3F4EF] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    N4
                  </td>
                  <td
                    class="w-[15%] bg-[#FFDFB5] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    N3
                  </td>
                  <td
                    class="w-[15%] bg-[#FFCCC6] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    N2
                  </td>
                  <td
                    class="w-[20%] rounded-tr-3xl bg-[#D0E6FF] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    N1
                  </td>
                </tr>
                <tr>
                  <th
                    class="bg-base-400 px-7 py-6 text-center align-middle text-xl font-bold tracking-wider text-white"
                  >
                    能力值
                  </th>
                  <td
                    class="bg-base-50 px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    能大致理解基礎日語
                  </td>
                  <td
                    class="bg-[#E8FFFC] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    能理解基礎日語
                  </td>
                  <td
                    class="bg-[#FFF4E4] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    能應對日常生活
                  </td>
                  <td
                    class="bg-[#FFE9E6] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    擁有最低限度商用能力
                  </td>
                  <td
                    class="bg-[#E9F3FE] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    擁有完全商用應對能力
                  </td>
                </tr>
                <tr>
                  <th
                    class="rounded-bl-3xl bg-base-400 px-7 py-6 text-center align-middle text-xl font-bold tracking-wider text-white"
                  >
                    能力值
                  </th>
                  <td
                    class="bg-white px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                    colspan="2"
                  >
                    觀光旅遊
                  </td>
                  <td
                    class="bg-[#FFF4E4] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    短期遊留學
                  </td>
                  <td
                    class="bg-[#FFE9E6] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    日商外派最低門檻
                  </td>
                  <td
                    class="rounded-br-3xl bg-[#E9F3FE] px-7 py-6 text-left align-middle text-xl font-bold tracking-wider"
                  >
                    日本研究所
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- 這堂課會如何幫助你 -->
      <section class="section2 pb-3 pt-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco2.png"
                />這堂課會如何幫助你</span
              >
            </h2>
          </div>

          <div
            class="mx-auto mb-16 flex flex-col justify-center gap-0 md:max-w-[80%] md:flex-row md:gap-6"
          >
            <div class="relative min-h-[185px] w-full">
              <h4 class="bg-[#F4E9A6] py-3 text-center text-2xl font-medium text-base-500">
                <fa class="mr-1" :icon="['fas', 'align-right']" />活用文法文型
              </h4>
              <p
                class="absolute top-1/2 text-xl font-semibold tracking-wider text-black md:text-2xl"
              >
                老師親撰「課後練習題」即時檢驗學習成效以及該補強的部分
              </p>
            </div>
            <div class="min-h-[185px] w-full">
              <img
                class="mx-auto block h-auto w-auto"
                src="~/assets/img/japanZone/page/help1.png"
              />
            </div>
          </div>

          <div
            class="mx-auto mb-16 flex flex-col justify-center gap-0 md:max-w-[80%] md:flex-row-reverse md:gap-6"
          >
            <div class="relative min-h-[185px] w-full">
              <h4 class="bg-[#F4E9A6] py-3 text-center text-2xl font-medium text-base-500">
                加強閱讀技巧
              </h4>
              <p
                class="absolute top-1/2 text-xl font-semibold tracking-wider text-black md:text-2xl"
              >
                從文字語彙到文章逐段導讀培養讀解測驗中長篇文章的應考能力
              </p>
            </div>
            <div class="min-h-[185px] w-full">
              <img
                class="mx-auto block h-auto w-auto"
                src="~/assets/img/japanZone/page/help2.png"
              />
            </div>
          </div>

          <div
            class="mx-auto mb-16 flex flex-col justify-center gap-0 md:max-w-[80%] md:flex-row md:gap-6"
          >
            <div class="relative min-h-[185px] w-full">
              <h4 class="bg-[#F4E9A6] py-3 text-center text-2xl font-medium text-base-500">
                掌握單字差異
              </h4>
              <p
                class="absolute top-1/2 text-xl font-semibold tracking-wider text-black md:text-2xl"
              >
                老師彙整必備的重要字彙、搭配標音及老師親自示範念法，為同學建構基礎
              </p>
            </div>
            <div class="min-h-[185px] w-full">
              <img
                class="mx-auto block h-auto w-auto"
                src="~/assets/img/japanZone/page/help3.png"
              />
            </div>
          </div>

          <div
            class="mx-auto flex flex-col justify-center gap-0 md:max-w-[80%] md:flex-row-reverse md:gap-6"
          >
            <div class="relative min-h-[185px] w-full">
              <h4 class="bg-[#F4E9A6] py-3 text-center text-2xl font-medium text-base-500">
                <fa class="mr-1" :icon="['fas', 'eraser']" />加強閱讀技巧
              </h4>
              <p
                class="absolute top-1/2 text-xl font-semibold tracking-wider text-black md:text-2xl"
              >
                比較同義文型的結構找出語意的細微差別掌握日文小細節
              </p>
            </div>
            <div class="min-h-[185px] w-full">
              <img
                class="mx-auto block h-auto w-auto"
                src="~/assets/img/japanZone/page/help4.png"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- 王牌講師陣容 -->
      <section class="section3 pb-3 pt-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <div class="inline-block border-l border-r border-solid border-base-800 px-3">
                <span class="font-bold">王牌講師陣容</span><br />打造日檢硬實力
              </div>
            </h2>
          </div>
          <!-- 預設是可以擺四位老師目前顯示三位 -->
          <div class="mx-auto w-full md:w-[90%]">
            <Swiper
              class="japanTeacherSlider"
              :modules="[SwiperAutoplay]"
              :observer="true"
              :observe-parents="true"
              :slides-per-view="1.7"
              :centered-slides="true"
              :space-between="5"
              :active-index="0"
              :breakpoints="{
                [breakpointsInt('md')]: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                  centeredSlides: false
                }
              }"
              @swiper="teacherSwiper"
            >
              <SwiperSlide
                v-for="(tslide, index) in tslides"
                :key="index"
                class="swiper-slide cursor-pointer"
                :class="{ 'jt-active': index === activeTeacherIndex }"
                @mouseenter="activeTeacherSlide(index)"
                @click="openTeacherDialog(index)"
              >
                <div class="teacher rounded-tl-3xl rounded-tr-3xl px-5 py-3">
                  <div class="teacher-img mt-3">
                    <img :src="tslide.itemSrc" />
                  </div>
                  <div class="mt-3 text-center text-xl md:text-2xl">
                    <h4 class="mb-1 flex items-center justify-center gap-1 text-[#D17462]">
                      <span class="mx-auto inline-block">{{ tslide.title }}</span
                      ><fa :icon="['fas', 'angles-down']" />
                    </h4>
                    <span class="text-base-500">{{ tslide.name }}</span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              class="teacher-content tab-content hidden -translate-y-3 rounded-3xl bg-white px-6 pb-12 pt-20 md:block md:px-[110px] md:py-10"
            >
              <div v-for="(tcontent, index) in tcontents" :key="index">
                <div
                  v-if="index === activeTeacherIndex"
                  :class="{ 'tc-active': index === activeTeacherIndex }"
                  class="teacherItem grid grid-cols-1 gap-4 rounded-3xl border-2 border-solid border-secondary-500 bg-white p-8 shadow-[10px_10px_0px_theme('colors.secondary.500')] md:grid-cols-2 md:gap-5"
                >
                  <div class="flex flex-col gap-3">
                    <h4 class="text-2xl text-[#D17462]">個人經歷</h4>
                    <p
                      class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                    >
                      {{ tcontent.expinfo1 }}
                    </p>
                    <p
                      class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                    >
                      {{ tcontent.expinfo2 }}
                    </p>
                  </div>
                  <div class="flex flex-col gap-3">
                    <h4 class="text-2xl text-[#D17462]">教學特色</h4>
                    <p
                      class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                    >
                      {{ tcontent.skill1 }}
                    </p>
                    <p
                      class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                    >
                      {{ tcontent.skill2 }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 即刻加入TKB日文  諮詢課程規劃 -->
      <section class="section4 py-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco6.png"
                />即刻加入TKB日文 諮詢課程規劃</span
              >
            </h2>
          </div>

          <div class="relative">
            <div class="relative xl:absolute xl:-left-[2%]">
              <img class="" src="~/assets/img/japanZone/page/dog_gift.png" />
            </div>
            <div class="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-3 md:gap-2">
              <div class="mx-auto w-full md:w-[90%]">
                <div class="rounded-3xl border border-solid bg-white px-3 py-4">
                  <div
                    class="flex h-[130px] flex-col items-center justify-center gap-2 rounded-3xl bg-secondary-300 p-3"
                  >
                    <img src="~/assets/img/japanZone/page/deco3.png" />
                    <div class="text-2xl font-semibold tracking-wider text-white">日檢加強包</div>
                  </div>
                  <div class="text-center">
                    <p class="mt-4 text-center text-base-400">
                      3000元課程免費送，搭配電子檔講義，複習沒煩惱！
                    </p>
                    <div class="mt-4 inline-block text-center">
                      <ButtonS1
                        :name="'課程商品'"
                        :url="'https://www.tkbgo.com.tw/product/toProductType.jsp?group=138&type=3302'"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="mx-auto w-full md:w-[90%]">
                <div class="rounded-3xl border border-solid bg-white px-3 py-4">
                  <div
                    class="flex h-[130px] flex-col items-center justify-center gap-2 rounded-3xl bg-primary-300 p-3"
                  >
                    <img src="~/assets/img/japanZone/page/deco4.png" />
                    <div class="text-2xl font-semibold tracking-wider text-white">社群互動</div>
                  </div>
                  <div class="text-center">
                    <p class="mt-4 text-center text-base-400">
                      臉書社團不定期活動，日文學習不再枯燥乏味。
                    </p>
                    <div class="mt-4 inline-block text-center">
                      <ButtonS1 :name="'成為粉絲'" :url="'https://www.facebook.com/TkbJapanese'" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="mx-auto w-full md:w-[90%]">
                <div class="rounded-3xl border border-solid bg-white px-3 py-4">
                  <div
                    class="flex h-[130px] flex-col items-center justify-center gap-2 rounded-3xl bg-[#EA8F83] p-3"
                  >
                    <img src="~/assets/img/japanZone/page/deco5.png" />
                    <div class="text-2xl font-semibold tracking-wider text-white">LINE@</div>
                  </div>
                  <div class="text-center">
                    <p class="mt-4 text-center text-base-400">
                      加入TKB日文報報LINE帳號，掌握最新優惠
                    </p>
                    <div class="mt-4 inline-block text-center">
                      <ButtonS1 :name="'加入好友'" :url="'https://line.me/R/ti/p/%40415lfixm'" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 王牌講師陣容彈窗 -->
      <DefaultXlModal v-model="DefaultXlModalVisible" class="h-full md:h-auto">
        <template #content>
          <el-scrollbar>
            <div
              :key="activeTeacherIndex"
              class="grid grid-cols-1 gap-4 rounded-3xl border-2 border-solid border-secondary-500 bg-white p-8 shadow-[10px_10px_0px_theme('colors.secondary.500')] md:grid-cols-2 md:gap-5"
            >
              <div class="flex flex-col gap-3">
                <h4 class="text-2xl text-[#D17462]">個人經歷</h4>
                <p
                  class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                >
                  {{ tcontents[activeTeacherIndex].expinfo1 }}
                </p>
                <p
                  class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                >
                  {{ tcontents[activeTeacherIndex].expinfo2 }}
                </p>
              </div>
              <div class="flex flex-col gap-3">
                <h4 class="text-2xl text-[#D17462]">教學特色</h4>
                <p
                  class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                >
                  {{ tcontents[activeTeacherIndex].skill1 }}
                </p>
                <p
                  class="after:contents-[''] relative min-h-11 text-xl after:absolute after:-left-2 after:top-1 after:h-4 after:w-1 after:bg-black"
                >
                  {{ tcontents[activeTeacherIndex].skill2 }}
                </p>
              </div>
            </div>
          </el-scrollbar>
        </template>
      </DefaultXlModal>
    </div>
  </div>
</template>
<script setup>
import ButtonS1 from '@/components/button/ButtonS1.vue'
import DefaultXlModal from '@/components/modal/DefaultXlModal.vue'
import dN5 from '@/assets/img/japanZone/page/d-N5.png'
import n5 from '@/assets/img/japanZone/page/n5.png'
import dN4 from '@/assets/img/japanZone/page/d-N4.png'
import n4 from '@/assets/img/japanZone/page/n4.png'
import dN3 from '@/assets/img/japanZone/page/d-N3.png'
import n3 from '@/assets/img/japanZone/page/n3.png'
import dN2 from '@/assets/img/japanZone/page/d-N2.png'
import n2 from '@/assets/img/japanZone/page/n2.png'
import dN1 from '@/assets/img/japanZone/page/d-N1.png'
import n1 from '@/assets/img/japanZone/page/n1.png'
import teacher1 from '@/assets/img/japanZone/page/teacher1.png'
import teacher2 from '@/assets/img/japanZone/page/teacher2.png'
import teacher4 from '@/assets/img/japanZone/page/teacher4.png'
definePageMeta({
  layout: 'japan'
})
const { breakpointsInt, tailwinds } = useTailwindConfig()
const menuResponsive = parseInt(tailwinds.theme.screens.md)
const DefaultXlModalVisible = ref(false)
const activeIndex = ref(0)
const activeTeacherIndex = ref(0)
const slides = reactive([
  {
    itemSrc: dN5,
    mainSrc: n5
  },
  {
    itemSrc: dN4,
    mainSrc: n4
  },
  {
    itemSrc: dN3,
    mainSrc: n3
  },
  {
    itemSrc: dN2,
    mainSrc: n2
  },
  {
    itemSrc: dN1,
    mainSrc: n1
  }
])
const contents = reactive([
  {
    title: '基礎日文文法認識',
    textcount1: '漢字數 : 300字',
    textcount2: '語彙數 : 1,500個',
    info1: '品詞介紹',
    info2: '名詞句用法',
    info3: '形容詞、形容動詞、動詞基礎變化',
    info4: '助詞用法'
  },
  {
    title: '基礎日文文法應用',
    textcount1: '漢字數 : 300字',
    textcount2: '語彙數 : 1,500個',
    info1: '假定條件',
    info2: '使役、被動用法',
    info3: '授受表現用法',
    info4: '尊敬/謙讓語'
  },
  {
    title: '日常生活文型應用',
    textcount1: '漢字數 : 600字',
    textcount2: '語彙數 : 3,000個',
    info1: '「かもしれない」也許、可能',
    info2: '「おかげで」幸虧、多虧',
    info3: '「かわりに」代替、取代',
    info4: '「だろうと思う」我覺得～吧'
  },
  {
    title: '新聞、評論等文書體文型應用',
    textcount1: '漢字數 : 1,000字',
    textcount2: '語彙數 : 6,000個',
    info1: '「〜を中心に」以~為中心',
    info2: '「〜とは限らない」不僅是~',
    info3: '「〜に相違ない」肯定是~',
    info4: '「〜にかかわらず」雖然...但是...'
  },
  {
    title: '經濟、法律等專業議題商討之文型應用',
    textcount1: '漢字數 : 2,000字',
    textcount2: '語彙數 : 10,000個',
    info1: '「〜をよそに」不顧、不管',
    info2: '「〜を踏まえて」依據、根據',
    info3: '「Vてしかるべきだ」當然~',
    info4: '「Nにとどまらず」不僅僅是~'
  }
])
const tslides = reactive([
  {
    itemSrc: teacher1,
    title: '日文王牌講師',
    name: '王怡璇'
  },
  {
    itemSrc: teacher2,
    title: '日檢首席專家',
    name: '林彩惠'
  },
  {
    itemSrc: teacher4,
    title: '進階文法達人',
    name: '楊開雲'
  }
])
const tcontents = reactive([
  {
    expinfo1: '日文教學經驗9年，授課學生超過千人',
    expinfo2: '曾任公立高中第二外語講師、公家機關日文講師',
    skill1: '統整相似字彙與文型、日檢考試重點，讓學習更效率',
    skill2: '比較同義文型的結構，找出語意的細微差別，掌握日文的小細節'
  },
  {
    expinfo1: '超過30年以上教學與輔考經驗',
    expinfo2: '多家補習班與工商界鴻海等知名企業中擔任日文講師',
    skill1: '獨門高效課程，帶領同學系統性學文法，並且循序漸進學習',
    skill2: '課堂整理各考試題型，課程適用全方位考試，聽讀寫課程選擇多元'
  },
  {
    expinfo1: '2015年進入日文補教界，近6年教學經驗',
    expinfo2: '現任TKB日文與多家知名補習班日文講師',
    skill1: '常以日文做思考，將字彙、文型文法做聯想延伸，加深學習印象',
    skill2: '以圖像方式及大量例句說明較複雜的文法，讓同學快速掌握用法'
  }
])
let japanLevelSwiper = reactive({})
const levelSwiper = (swiper) => {
  japanLevelSwiper = swiper
}
const activeSlide = (index) => {
  activeIndex.value = index
  watch(activeIndex, () => {
    japanLevelSwiper.slideTo(activeIndex.value)
  })
}

let japanTeacherSwiper = reactive({})
const teacherSwiper = (swiper) => {
  japanTeacherSwiper = swiper
}
const activeTeacherSlide = (index) => {
  if (window.innerWidth < menuResponsive) return

  activeTeacherIndex.value = index
  japanTeacherSwiper.slideTo(activeTeacherIndex.value)
}

const openTeacherDialog = (index) => {
  if (window.innerWidth >= menuResponsive) return

  activeTeacherIndex.value = index
  japanTeacherSwiper.slideTo(index)
  DefaultXlModalVisible.value = true
}
</script>
<style lang="scss" scoped>
//背景底圖
.japExam-bg {
  background: url('~/assets/img/japanZone/page/JpnExambg.png') theme('colors.base.50') no-repeat
    center center/cover;
  background-blend-mode: normal;
}
.circle {
  background: linear-gradient(132.92deg, #fdf6cf 45.1%, rgba(253, 246, 207, 0) 94.67%);
  @apply absolute h-[10vw] w-[10vw] rounded-full;
}
//section1
:deep() .japanLevelSlider {
  .swiper-slide {
    @apply pb-10;
    .level-item {
      @apply mx-auto min-h-[170px] text-center;
    }
    .level-item .item-img {
      transition: 0.4s ease-in-out;
      position: relative;
      top: 70px;
    }
    .level-item .level-main {
      position: relative;
      z-index: 2;
    }
    &:hover {
      opacity: 1;
    }
    &.jl-active {
      .level-item .item-img {
        top: 2px;
      }
      &::before,
      &::after {
        content: '';
        display: inline-block;
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
      }
      &::before {
        border-width: 25px;
        border-color: transparent transparent theme('colors.base.50') transparent;
        bottom: 4px;
        z-index: 1;
      }
      &::after {
        border-width: 25px;
        border-color: transparent transparent theme('colors.black') transparent;
        bottom: 5px;
      }
    }
  }
}

//section2
.section2 {
  background-image: linear-gradient(to bottom, transparent 95%, white 95%),
    linear-gradient(to right, transparent 95%, white 95%);
  background-size:
    25px 25px,
    25px 25px;
}
//section3
.section3,
.section4 {
  background: fixed url('~/assets/img/japanZone/page/JpnExambg.png') theme('colors.base.50')
    no-repeat center center/cover;
  background-blend-mode: normal;
}
.japanTeacherSlider {
  .swiper-slide {
    .teacher {
      .teacher-img {
        text-align: center;
        background: linear-gradient(136deg, #d3d3d3 0%, #ffedd1, white);
        border-radius: 30px 30px 0 30px;
      }
    }
    &.jt-active {
      .teacher {
        @apply bg-white;
      }
    }
  }
}

.teacher-content {
  .teacherItem {
    &.tc-active {
      @apply grid;
    }
  }
}
</style>
