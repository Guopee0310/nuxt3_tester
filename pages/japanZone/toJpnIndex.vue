<template>
  <div>
    <div class="japHome-bg relative overflow-hidden bg-base-50">
      <div class="container">
        <!-- banner -->
        <div class="my-8">
          <Swiper
            :modules="[SwiperAutoplay, SwiperPagination]"
            :pagination="{
              el: '.swiper-pagination',
              clickable: true
            }"
            :allow-touch-move="true"
            :loop="true"
            :autoplay="{
              delay: 5000
            }"
            class="japanBannerSlider"
          >
            <SwiperSlide>
              <a
                class="inline-block h-[30vh] w-full overflow-hidden rounded-3xl lg:h-[50vh] lg:max-h-[350px]"
                href="https://www.tkbgo.com.tw/japanZone/news/toNews.jsp?news_id=4947&print_id=9989&isJapanzoneBigbanner"
                target="_blank"
              >
                <img
                  class="block h-full w-full object-cover object-center"
                  src="https://www.tkbtv.com.tw/upload/tv_ad/59b0e6a120230503140854.jpg"
                  alt="【TKB日文】J.TEST免費直播專場"
                  title="【TKB日文】J.TEST免費直播專場"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                class="inline-block h-[30vh] w-full overflow-hidden rounded-3xl lg:h-[50vh] lg:max-h-[350px]"
                href="https://www.tkbgo.com.tw/go_edm/edm515/index.jsp?print_id=9989&isJapanzoneBigbanner"
                target="_blank"
              >
                <img
                  class="block h-full w-full object-cover object-center"
                  src="https://www.tkbtv.com.tw/upload/tv_ad/8f87ead920230301160820.jpg"
                  alt="林彩惠日語線上開課"
                  title="林彩惠日語線上開課"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                class="inline-block h-[30vh] w-full overflow-hidden rounded-3xl lg:h-[50vh] lg:max-h-[350px]"
                href="https://www.tkbgo.com.tw/product/toProductList.jsp?group=138&type=3302&kind=4516&print_id=9989&isJapanzoneBigbanner"
                target="_blank"
              >
                <img
                  class="block h-full w-full object-cover object-center"
                  src="https://www.tkbtv.com.tw/upload/tv_ad/20210925173545145378.jpg"
                  alt="跟著王怡璇老師從零開始三個月打造初級日語！"
                  title="跟著王怡璇老師從零開始三個月打造初級日語！"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                class="inline-block h-[30vh] w-full overflow-hidden rounded-3xl lg:h-[50vh] lg:max-h-[350px]"
                href="https://www.tkbgo.com.tw/japanZone/news/toNews.jsp?news_id=4875&print_id=9989"
                target="_blank"
              >
                <img
                  class="block h-full w-full object-cover object-center"
                  src="https://www.tkbtv.com.tw/upload/tv_ad/33fe80a520230208183627.jpg"
                  alt="TKB日文文法能力檢測"
                  title="TKB日文文法能力檢測"
                />
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a
                class="inline-block h-[30vh] w-full overflow-hidden rounded-3xl lg:h-[50vh] lg:max-h-[350px]"
                href="https://www.tkbgo.com.tw/japanZone/news/toNews.jsp?news_id=4919&print_id=9989&isJapanzoneBigbanner"
                target="_blank"
              >
                <img
                  class="block h-full w-full object-cover object-center"
                  src="https://www.tkbtv.com.tw/upload/tv_ad/20220125133515200311.jpg"
                  alt="TKB日文帶你高效線上學日語！"
                  title="TKB日文帶你高效線上學日語！"
                />
              </a>
            </SwiperSlide>
            <div class="swiper-pagination"></div>
          </Swiper>
        </div>

        <!-- 我們的課程 -->
        <div class="mb-16 text-center">
          <JapanTitle class="mb-10">
            <template #JapaneseTitle>TKB日文スクール</template>
            <template #ChineseTitle>我們的課程</template>
          </JapanTitle>

          <div
            class="mb-16 flex flex-row flex-wrap justify-center md:flex-nowrap md:justify-between"
          >
            <div class="w-1/2 p-1 md:w-1/3 md:p-2">
              <nuxt-link to="/japanZone/toJpnExam" class="course-info">
                <img
                  class="mb-2 block"
                  src="~/assets/img/japanZone/home/course_1.svg"
                  alt="初學者專班"
                />
                <div class="course-btn">
                  JLPT/文法/<fa class="course-btn-icon" :icon="['fas', 'circle-chevron-right']" />
                </div>
                <div class="hint-info-right">
                  <div class="flex gap-1">
                    <span class="font-bold">課程項目</span><span class="">JLPT/文法/</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">適合對象</span
                    ><span class="">準備N5~N1的日檢受試生</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">使用期限</span><span class="">自繳清日起算一年</span>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="w-1/2 p-1 md:w-1/3 md:p-2">
              <nuxt-link to="/japanZone/toJpnExam" class="course-info">
                <img
                  class="mb-2 block"
                  src="~/assets/img/japanZone/home/course_2.svg"
                  alt="初學者專班"
                />
                <div class="course-btn">
                  JLPT /解題/<fa class="course-btn-icon" :icon="['fas', 'circle-chevron-right']" />
                </div>
                <div class="hint-info-right">
                  <div class="flex gap-1">
                    <span class="font-bold">課程項目</span><span class="">JLPT/解題/</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">適合對象</span><span class="">考前衝刺</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">使用期限</span><span class="">自繳清日起算一年</span>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="w-1/2 p-1 md:w-1/3 md:p-2">
              <nuxt-link to="/japanZone/toJpnExam" class="course-info">
                <img
                  class="mb-2 block"
                  src="~/assets/img/japanZone/home/course_3.svg"
                  alt="初學者專班"
                />
                <div class="course-btn">
                  商用日文<fa class="course-btn-icon" :icon="['fas', 'circle-chevron-right']" />
                </div>
                <div class="hint-info-left">
                  <div class="flex gap-1">
                    <span class="font-bold">課程項目</span><span class="">商用日文</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">適合對象</span
                    ><span class="">將接觸日商文化的社會新鮮人、轉職者</span>
                  </div>
                  <div class="flex gap-1">
                    <span class="font-bold">使用期限</span><span class="">自繳清日起算一年</span>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="m-auto h-4 w-[90%] bg-[url('~/assets/img/japanZone/home/deco.svg')]"></div>
        </div>

        <!-- 雲端學習 -->
        <div class="mb-16 text-center">
          <JapanTitle class="mb-10">
            <template #JapaneseTitle>クラウドコース</template>
            <template #ChineseTitle>雲端學習</template>
          </JapanTitle>

          <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            <div>
              <div class="group relative inline-block">
                <img
                  class="mb-6 block"
                  src="~/assets/img/japanZone/home/cloud-1.svg"
                  alt="支援各平台"
                />
                <img
                  class="absolute bottom-6 left-4 h-auto w-12 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100"
                  src="~/assets/img/japanZone/home/ShibaInu-1.png"
                  alt="ShibaInu"
                />
                <h3>支援各平台，學習不受限</h3>
              </div>
            </div>
            <div>
              <div class="group relative inline-block">
                <img
                  class="mb-6 block"
                  src="~/assets/img/japanZone/home/cloud-2.svg"
                  alt="多段式上課語速"
                />
                <img
                  class="absolute bottom-6 left-4 h-auto w-12 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100"
                  src="~/assets/img/japanZone/home/ShibaInu-2.png"
                  alt="ShibaInu"
                />
                <h3>自由調整多段式上課語速</h3>
              </div>
            </div>
            <div>
              <div class="group relative inline-block">
                <img
                  class="mb-6 block"
                  src="~/assets/img/japanZone/home/cloud-3.svg"
                  alt="彈性安排"
                />
                <img
                  class="absolute bottom-6 left-4 h-auto w-12 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100"
                  src="~/assets/img/japanZone/home/ShibaInu-3.png"
                  alt="ShibaInu"
                />
                <h3>彈性安排個人學習課表</h3>
              </div>
            </div>
          </div>

          <div class="m-auto h-4 w-[90%] bg-[url('~/assets/img/japanZone/home/deco.svg')]"></div>
        </div>

        <!-- 日文學習的障礙 -->
        <div class="mb-16 text-center">
          <JapanTitle class="mb-10">
            <template #JapaneseTitle>日本語勉強のトラブル</template>
            <template #ChineseTitle>日文學習的障礙</template>
          </JapanTitle>

          <div class="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
            <div v-for="item in items" :key="item.alt">
              <div
                class="group relative inline-block max-w-[200px] cursor-pointer"
                @click="openVideoModal(item.youtubeSrc)"
              >
                <img class="mb-6 block" :src="item.imgSrc" :alt="item.alt" />
                <img
                  class="absolute bottom-12 left-4 h-auto w-16 opacity-0 transition duration-700 ease-in-out group-hover:opacity-100"
                  src="~/assets/img/japanZone/home/ShibaInu-4.png"
                  alt="ShibaInu"
                />
                <h3 v-html="item.text"></h3>
              </div>
            </div>
          </div>

          <div class="m-auto h-4 w-[90%] bg-[url('~/assets/img/japanZone/home/deco.svg')]"></div>
        </div>

        <!-- 免費學習 -->
        <div class="relative mx-auto mb-[150px] flex w-[90%] flex-col gap-6 md:flex-row-reverse">
          <div class="w-full self-center text-center md:w-[22%]">
            <JapanTitle class="mb-2">
              <template #JapaneseTitle>無料動画</template>
              <template #ChineseTitle>免費學習</template>
            </JapanTitle>
            <nuxt-link
              class="absolute -bottom-14 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-0"
              to="/japanZone/toJpnVideoList"
            >
              <ButtonS3 :font-size="'text-base'">More</ButtonS3>
            </nuxt-link>
          </div>

          <div class="video-block">
            <div class="video-left">
              <nuxt-link class="video-item-main" to="/video/toVideo">
                <img
                  class="item-img"
                  src="https://www.tkbtv.com.tw/upload/pic/2021123012174220392.jpg"
                />
                <div class="play-btn">
                  <svg viewbox="0,0,70,70" preserveAspectRatio="xMidYMid meet">
                    <circle
                      transform="rotate(35,35,35)"
                      cx="35"
                      cy="35"
                      r="25"
                      stroke="white"
                      stroke-width="5"
                      fill="transparent"
                    />
                    <polygon
                      transform="translate(10,10) scale(0.7)"
                      stroke-linejoin="round"
                      stroke="white"
                      stroke-width="5"
                      points="25,20 50,35 25,50"
                      fill="white"
                    ></polygon>
                  </svg>
                </div>
              </nuxt-link>
            </div>
            <div class="video-right">
              <nuxt-link class="video-item-other" to="/video/toVideo">
                <img
                  class="item-img"
                  src="https://www.tkbtv.com.tw/upload/pic/2021040115234517479.jpg"
                />
                <div class="play-btn">
                  <svg viewbox="0,0,70,70" preserveAspectRatio="xMidYMid meet">
                    <circle
                      transform="rotate(35,35,35)"
                      cx="35"
                      cy="35"
                      r="25"
                      stroke="white"
                      stroke-width="5"
                      fill="transparent"
                    />
                    <polygon
                      transform="translate(10,10) scale(0.7)"
                      stroke-linejoin="round"
                      stroke="white"
                      stroke-width="5"
                      points="25,20 50,35 25,50"
                      fill="white"
                    ></polygon>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link class="video-item-other" to="/video/toVideo">
                <img
                  class="item-img"
                  src="https://www.tkbtv.com.tw/upload/pic/2021033109442414659.jpg"
                />
                <div class="play-btn">
                  <svg viewbox="0,0,70,70" preserveAspectRatio="xMidYMid meet">
                    <circle
                      transform="rotate(35,35,35)"
                      cx="35"
                      cy="35"
                      r="25"
                      stroke="white"
                      stroke-width="5"
                      fill="transparent"
                    />
                    <polygon
                      transform="translate(10,10) scale(0.7)"
                      stroke-linejoin="round"
                      stroke="white"
                      stroke-width="5"
                      points="25,20 50,35 25,50"
                      fill="white"
                    ></polygon>
                  </svg>
                </div>
              </nuxt-link>
              <nuxt-link class="video-item-other" to="/video/toVideo">
                <img
                  class="item-img"
                  src="https://www.tkbtv.com.tw/upload/pic/2020082417343618864.jpg"
                />
                <div class="play-btn">
                  <svg viewbox="0,0,70,70" preserveAspectRatio="xMidYMid meet">
                    <circle
                      transform="rotate(35,35,35)"
                      cx="35"
                      cy="35"
                      r="25"
                      stroke="white"
                      stroke-width="5"
                      fill="transparent"
                    />
                    <polygon
                      transform="translate(10,10) scale(0.7)"
                      stroke-linejoin="round"
                      stroke="white"
                      stroke-width="5"
                      points="25,20 50,35 25,50"
                      fill="white"
                    ></polygon>
                  </svg>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- 最新消息 -->
        <div class="relative mx-auto mb-[150px] flex w-[90%] flex-col gap-6 md:flex-row">
          <div class="w-full self-center text-center md:w-[22%]">
            <JapanTitle class="mb-2">
              <template #JapaneseTitle>最新ニュース</template>
              <template #ChineseTitle>最新消息</template>
            </JapanTitle>
            <nuxt-link
              class="absolute -bottom-14 left-1/2 -translate-x-1/2 md:relative md:bottom-0 md:left-0"
              to="/japanZone/toJpnNewsList"
            >
              <ButtonS3 :font-size="'text-base'">More</ButtonS3>
            </nuxt-link>
          </div>

          <div class="mb-6 flex flex-col gap-8 md:mb-0 md:flex-[1_0_65%] md:flex-row">
            <div class="w-full md:w-[calc(33.333333%-10px)]">
              <nuxt-link
                class="inline-block w-full shadow-[10px_2px_0px_rgba(242,144,0,1)] transition ease-in-out hover:shadow-[5px_1px_0px_rgba(242,144,0,0.6)] hover:duration-300 md:shadow-[20px_5px_0px_rgba(242,144,0,1)]"
                to="/japanZone/article/toArticle"
              >
                <figure class="relative h-full md:h-[150px]">
                  <img
                    class="h-full w-full object-cover"
                    src="https://www.tkbtv.com.tw/p20230517EC002_1100_380/toPic.action"
                  />
                  <div
                    class="absolute left-0 top-0 z-[1] bg-primary-500 px-3 py-2 text-white md:bottom-0 md:top-auto"
                  >
                    日文學習
                  </div>
                </figure>
                <figcaption class="w-full bg-white px-2 pb-10 pt-6">
                  <div class="mb-1">2023<span class="inline-block md:hidden">-05-17</span></div>
                  <div class="mb-1 hidden text-2xl font-semibold text-base-400 md:block">
                    2023-05-17
                  </div>
                  <div class="mb-1 line-clamp-1 h-auto text-2xl text-secondary-500">
                    鼻の慣用語｜鼻にかける・鼻で笑う・鼻につく・鼻を折る・鼻を突く｜慣用語教室｜Ellie老師
                  </div>
                  <div class="line-clamp-2 h-auto">
                    歡迎各位同學來到Ellie老師和小尼打造的「日文慣用語教室」！這系列將為各位同學帶來「身體相關慣用語」的教學，除了文章教學，還有Ellie老師的解說影片，千萬別錯過！這次要和大家介紹的是鼻の慣用語｜鼻にかける・鼻で笑う・鼻につく・鼻を折る・鼻を突く
                  </div>
                </figcaption>
              </nuxt-link>
            </div>

            <div class="w-full md:w-[calc(33.333333%-10px)]">
              <nuxt-link
                class="inline-block w-full shadow-[10px_2px_0px_rgba(243,143,131,1)] transition ease-in-out hover:shadow-[5px_1px_0px_rgba(243,143,131,0.6)] hover:duration-300 md:shadow-[20px_5px_0px_rgba(243,143,131,1)]"
                to="/japanZone/article/toArticle"
              >
                <figure class="relative h-full md:h-[150px]">
                  <img
                    class="h-full w-full object-cover"
                    src="	https://www.tkbtv.com.tw/p20210529banner001_1100_380/toPic.action"
                  />
                  <div
                    class="absolute left-0 top-0 z-[1] bg-[#ea8f83] px-3 py-2 text-white md:bottom-0 md:top-auto"
                  >
                    老師介紹
                  </div>
                </figure>
                <figcaption class="w-full bg-white px-2 pb-10 pt-6">
                  <div class="mb-1">2021<span class="inline-block md:hidden">-09-25</span></div>
                  <div class="mb-1 hidden text-2xl font-semibold text-base-400 md:block">
                    2021-09-25
                  </div>
                  <div class="mb-1 line-clamp-1 h-auto text-2xl text-secondary-500">
                    TKB日文王牌講師│王怡璇老師教學簡介
                  </div>
                  <div class="line-clamp-2 h-auto">
                    大家好，我是王怡璇老師，輔大日文系、熊本大學日本語文學所畢業，本身一路鑽研「日本語、日本文學、日文教學」超過10年，除了會教授「日本語」外，對於日文的文法結構、文化、文學涵養等方面都有深度的涉獵，所以無論是「聽」「說」「讀」「寫」等各個方面，都能給予學生實質上的幫助。
                  </div>
                </figcaption>
              </nuxt-link>
            </div>

            <div class="w-full md:w-[calc(33.333333%-10px)]">
              <nuxt-link
                class="inline-block w-full shadow-[10px_2px_0px_rgba(95,182,179,1)] transition ease-in-out hover:shadow-[5px_1px_0px_rgba(95,182,179,0.6)] hover:duration-300 md:shadow-[20px_5px_0px_rgba(95,182,179,1)]"
                to="/japanZone/article/toArticle"
              >
                <figure class="relative h-full md:h-[150px]">
                  <img
                    class="h-full w-full object-cover"
                    src="https://www.tkbtv.com.tw/p20160805EC053_1100_380/toPic.action"
                  />
                  <div
                    class="absolute left-0 top-0 z-[1] bg-secondary-500 px-3 py-2 text-white md:bottom-0 md:top-auto"
                  >
                    課程開箱
                  </div>
                </figure>
                <figcaption class="w-full bg-white px-2 pb-10 pt-6">
                  <div class="mb-1">2023<span class="inline-block md:hidden">-03-09</span></div>
                  <div class="mb-1 hidden text-2xl font-semibold text-base-400 md:block">
                    2023-03-09
                  </div>
                  <div class="mb-1 line-clamp-1 h-auto text-2xl text-secondary-500">
                    【JLPT N1】考一次就合格！必勝33小時N1速成包┃日文檢定線上課程
                  </div>
                  <div class="line-clamp-2 h-auto">
                    N1是JLPT日語檢定最高等級的考試，生常止步於此高牆前，覺得很挫折，進而放棄了挑戰N1的念頭，
                    也就成為了坊間教學N1補習班不多的原因。如果您是挑戰N1失利多次，常常覺得心有餘而力不足的重考戰士....TKB日檢高效班提供給您高效率、短時數、章章精華的33小時N1必勝課程。
                  </div>
                </figcaption>
              </nuxt-link>
            </div>
          </div>
        </div>

        <!-- 學員見證 -->
        <div class="mb-10 bg-no-repeat sm:bg-[url('~/assets/img/japanZone/home/bg-score.svg')]">
          <div class="mx-auto flex w-[90%] flex-col gap-6 md:gap-10">
            <div class="w-full self-center text-center">
              <JapanTitle class="mb-2">
                <template #JapaneseTitle>学習者の感想</template>
                <template #ChineseTitle>學員見證</template>
              </JapanTitle>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
              <nuxt-link
                class="inline-block w-full border-2 border-solid transition ease-in-out hover:duration-300 md:shadow-[-30px_-15px_0px_rgba(95,182,179,1)] md:hover:shadow-[-10px_-5px_0px_rgba(95,182,179,0.6)]"
                to="/japanZone/article/toArticle"
              >
                <div class="max-w-10/12 flex md:w-full md:max-w-full">
                  <div
                    class="flex flex-[0_1_30%] items-center border-b-2 border-r-2 border-solid bg-secondary-600 p-4"
                  >
                    <img
                      class="mx-auto h-auto w-auto"
                      src="~/assets/img/japanZone/home/N1.svg"
                      alt="n1"
                    />
                  </div>
                  <div class="flex w-[70%] items-center border-b-2 border-solid bg-[#EA8F83] p-4">
                    <fa class="mr-1 text-4xl text-white" :icon="['fas', 'medal']" />
                    <span class="border-b border-solid text-4xl text-white">135/180</span>
                  </div>
                </div>
                <div class="flex gap-6 bg-secondary-200 p-6 text-xl md:text-2xl">
                  <div>
                    <fa class="mr-1" :icon="['fas', 'chalkboard']" />課程<br />日檢能力高效班
                  </div>
                  <div><fa class="mr-1" :icon="['fas', 'award']" />推薦老師<br />林彩惠</div>
                </div>
                <div class="bg-white p-6 text-xl md:text-2xl">
                  <div class="mb-1"><fa class="mr-1" :icon="['far', 'face-smile']" />心得</div>
                  <div class="line-clamp-2 h-auto">
                    老師的課程編排很適合自我學習的人。在這次考上之前，我N1已經考過3次都沒上，能夠考上我真的很高興!
                  </div>
                </div>
              </nuxt-link>

              <nuxt-link
                class="inline-block w-full border-2 border-solid transition ease-in-out hover:duration-300 md:shadow-[-30px_-15px_0px_rgba(95,182,179,1)] md:hover:shadow-[-10px_-5px_0px_rgba(95,182,179,0.6)]"
                to="/japanZone/article/toArticle"
              >
                <div class="max-w-10/12 flex md:w-full md:max-w-full">
                  <div
                    class="flex flex-[0_1_30%] items-center border-b-2 border-r-2 border-solid bg-secondary-600 p-4"
                  >
                    <img
                      class="mx-auto h-auto w-auto"
                      src="~/assets/img/japanZone/home/N1.svg"
                      alt="n1"
                    />
                  </div>
                  <div class="flex w-[70%] items-center border-b-2 border-solid bg-[#EA8F83] p-4">
                    <fa class="mr-1 text-4xl text-white" :icon="['fas', 'medal']" />
                    <span class="border-b border-solid text-4xl text-white">105/180</span>
                  </div>
                </div>
                <div class="flex gap-6 bg-secondary-200 p-6 text-xl md:text-2xl">
                  <div>
                    <fa class="mr-1" :icon="['fas', 'chalkboard']" />課程<br />日檢能力高效班
                  </div>
                  <div><fa class="mr-1" :icon="['fas', 'award']" />推薦老師<br />楊開雲</div>
                </div>
                <div class="bg-white p-6 text-xl md:text-2xl">
                  <div class="mb-1"><fa class="mr-1" :icon="['far', 'face-smile']" />心得</div>
                  <div class="line-clamp-2 h-auto">
                    老師的課程編排很適合想用短時間考取證照的人！
                  </div>
                </div>
              </nuxt-link>
            </div>

            <div class="-mt-2 text-center">
              <nuxt-link class="inline-block" to="/japanZone/toJpnReviewList">
                <ButtonS3 :font-size="'text-base'">More</ButtonS3>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 日文學習的障礙彈窗 -->
    <VideoShowModal v-model="visible" :video-src="videonsrc" :close="myVideoMethod" />
  </div>
</template>
<script setup>
import JapanTitle from '@/components/views/japan/JapanTitle.vue'
import VideoShowModal from '@/components/modal/VideoShowModal.vue'
import ButtonS3 from '@/components/button/ButtonS3.vue'
import clog1 from '@/assets/img/japanZone/home/clog-1.png'
import clog2 from '@/assets/img/japanZone/home/clog-2.png'
import clog3 from '@/assets/img/japanZone/home/clog-3.png'
definePageMeta({
  layout: 'japan'
})
const videonsrc = ref('')
const visible = ref(false)
const items = reactive([
  {
    imgSrc: clog1,
    youtubeSrc: 'https://www.youtube.com/embed/cYIK-YuLUUs',
    text: '動詞分類&<br>變化好複雜',
    alt: '好複雜'
  },
  {
    imgSrc: clog2,
    youtubeSrc: 'https://www.youtube.com/embed/OVMEg5r3OKE',
    text: '好多文法<br>意思很像',
    alt: '意思很像'
  },
  {
    imgSrc: clog3,
    youtubeSrc: 'https://www.youtube.com/embed/sy01h2tJ51M',
    text: '日文句子好長<br>看不懂',
    alt: '看不懂'
  }
])

const openVideoModal = (item) => {
  visible.value = true
  const autoPlay = '?autoplay=1&enablejsapi=1'
  videonsrc.value = item + autoPlay
}
const myVideoMethod = () => {
  visible.value = false
  videonsrc.value = ''
}
</script>
<style lang="scss" scoped>
//背景底圖
.japHome-bg {
  background-size: 100%;
  background-position-y: 78vh;
  @apply bg-no-repeat sm:bg-[url('~/assets/img/japanZone/home/bg-jpn.svg')];
}

// banner
:deep() .japanBannerSlider {
  .swiper-pagination-bullet {
    @apply bg-white opacity-50;
  }
  .swiper-pagination-bullet-active {
    @apply w-4 rounded-sm opacity-100;
  }
}

// 我們的課程
.course-info {
  @apply relative inline-block rounded-3xl bg-white p-4;
  .course-btn {
    @apply relative inline-block rounded-xl bg-[#EA8F83] px-3 py-2 text-white md:text-xl;
    .course-btn-icon {
      @apply absolute -right-[10%] top-1/2 inline-block -translate-y-1/2 rounded-full bg-white text-2xl text-base-900;
    }
  }
  .hint-info-right {
    @apply absolute left-8 top-[40%] hidden h-[160px] w-full -translate-y-1/2 flex-col items-start justify-center gap-2 rounded-3xl bg-white p-3 text-left shadow-[0_4px_4px_rgb(0,0,0,0.2)] sm:right-1/2 lg:left-[110%];
    &::before {
      content: '';
      border-width: 20px;
      border-color: transparent theme('colors.base.200') transparent transparent;
      position: absolute;
      top: 50%;
      left: -40px;
      transform: translateY(-50%);
    }
    &::after {
      content: '';
      border-width: 20px;
      border-color: transparent theme('colors.white') transparent transparent;
      position: absolute;
      top: 47%;
      left: -40px;
      transform: translateY(-50%);
    }
  }
  .hint-info-left {
    @apply absolute right-8 top-[40%] hidden h-[160px] w-full -translate-y-1/2 flex-col items-start justify-center gap-2 rounded-3xl bg-white p-3 text-left shadow-[0_4px_4px_rgb(0,0,0,0.2)] lg:right-[110%];
    &::before {
      content: '';
      border-width: 20px;
      border-color: transparent transparent transparent theme('colors.base.200');
      position: absolute;
      top: 50%;
      right: -40px;
      transform: translateY(-50%);
    }
    &::after {
      content: '';
      border-width: 20px;
      border-color: transparent transparent transparent theme('colors.white');
      position: absolute;
      top: 47%;
      right: -40px;
      transform: translateY(-50%);
    }
  }
  &:hover {
    @apply opacity-100 shadow-[0_4px_4px_rgb(0,0,0,0.08)];
    .course-btn {
      @apply bg-black;
      .course-btn-icon {
        @apply text-[#EA8F83];
      }
    }
    .hint-info-right {
      z-index: 1;
      @apply hidden sm:flex;
    }
    .hint-info-left {
      z-index: 1;
      @apply hidden sm:flex;
    }
  }
}

// 免費學習 影片
.video-block {
  @apply mb-6 flex flex-col gap-6 md:mb-0 md:flex-[1_0_65%] md:flex-row;
  .video-left {
    @apply w-full;
    .video-item-main {
      @apply relative inline-block h-full w-full;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: theme('colors.base.600');
        opacity: 0.65;
        transition: 0.2s 0.4s ease-in;
      }
      .item-img {
        @apply h-full w-full object-cover;
      }
      .play-btn {
        z-index: 2;
        @apply absolute left-1/2 top-1/2 h-13 w-13 -translate-x-1/2 -translate-y-1/2 md:h-20 md:w-20;
        > svg {
          filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
          circle {
            transition: 0.4s ease-in;
            stroke-dasharray: 1000;
            stroke-dashoffset: 850;
          }
          polygon {
            transition: 0.2s 0.4s ease-in;
          }
        }
      }
      &:hover {
        opacity: 1;
        .play-btn svg circle {
          stroke-dashoffset: 1000;
        }
        .play-btn svg polygon {
          fill: white;
          stroke: white;
          transform: scale(1.5);
          opacity: 0;
        }
        &::after {
          opacity: 0.15;
        }
      }
    }
  }

  .video-right {
    @apply flex flex-col gap-4 md:w-[38%] md:gap-2;
    .video-item-other {
      @apply relative inline-block h-full w-full;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: theme('colors.base.600');
        opacity: 0.65;
        transition: 0.2s 0.4s ease-in;
      }
      .item-img {
        @apply h-full w-full object-cover;
      }
      .play-btn {
        z-index: 2;
        @apply absolute left-1/2 top-1/2 h-13 w-13 -translate-x-1/2 -translate-y-1/2;
        > svg {
          filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.3));
          circle {
            transition: 0.4s ease-in;
            stroke-dasharray: 1000;
            stroke-dashoffset: 850;
          }
          polygon {
            transition: 0.2s 0.4s ease-in;
          }
        }
      }
      &:hover {
        opacity: 1;
        .play-btn svg circle {
          stroke-dashoffset: 1000;
        }
        .play-btn svg polygon {
          fill: white;
          stroke: white;
          transform: scale(1.5);
          opacity: 0;
        }
        &::after {
          opacity: 0.15;
        }
      }
    }
  }
}
</style>
