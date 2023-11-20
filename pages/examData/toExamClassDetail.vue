<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <section>
          <div class="flex flex-col-reverse flex-nowrap lg:flex-row">
            <aside
              class="box-border basis-full border-r-0 border-solid border-base-300 lg:flex-[0_1_280px] lg:border-r"
            >
              <!-- 記帳士有考試時程表 -->
              <div class="mx-auto hidden max-w-[280px] lg:block">
                <ExamScheduleSwiperCard
                  :arrow-left="'absolute left-0 z-10 top-[26px]'"
                  :arrow-right="'absolute right-0 z-10 top-[26px]'"
                />
              </div>
              <hr class="my-2 hidden lg:block" />
              <div class="hidden px-2 lg:block">
                <div class="mt-4 text-center text-lg font-bold text-base-800">考試類科列表</div>
                <ul class="my-2 flex flex-row flex-wrap">
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >企管</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >人資</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >財會</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >國貿</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >大眾傳播</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >資訊</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >統計資訊</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >文化資產</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >法務</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >政風</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >地政</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >土地開發</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >土木</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >水利</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >機械</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >電機</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >儀電</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >環工</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >職業安全衛生</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >化學</nuxt-link
                    >
                  </li>
                  <li class="w-1/2 p-2">
                    <nuxt-link class="line-clamp-1" to="/examData/toExamClassDetail"
                      >化工製程</nuxt-link
                    >
                  </li>
                </ul>
              </div>
              <div class="mb-3 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                <ButtonIconS2 icon-bg="bg-primary-400" to="/formAsk/CONTACT_B/toAsk">
                  <template #icon><font-awesome-icon :icon="['fas', 'phone-flip']" /></template>
                  <template #title>聯絡我們</template>
                  <template #subtitle>CONTENT</template>
                </ButtonIconS2>
                <ButtonIconS2 icon-bg="bg-[#ffa791]" to="/onSale/toOnSaleList">
                  <template #icon><font-awesome-icon :icon="['fas', 'pencil']" /></template>
                  <template #title>優惠課程</template>
                  <template #subtitle>ON SALE</template>
                </ButtonIconS2>
              </div>
              <div class="mb-3 grid w-full grid-cols-1 gap-2 px-2 sm:grid-cols-2 lg:grid-cols-1">
                <ButtonIconS3 color="text-[#642719]">
                  <template #title>峰碩課程</template>
                </ButtonIconS3>
                <ButtonIconS3 to="https://www.tkbtv.com.tw/tkbxo/toIndex.action">
                  <template #icon><font-awesome-icon :icon="['fab', 'youtube']" /></template>
                  <template #title>XO影音解答</template>
                </ButtonIconS3>
                <ButtonIconS3
                  color="text-[#705c57]"
                  bottom-line="border-b-2 sm:max-lg:border-b-0 border-dotted border-base-200"
                  to="https://www.tkbtv.com.tw/"
                >
                  <template #icon><font-awesome-icon :icon="['fas', 'cloud']" /></template>
                  <template #title>雲端學習</template>
                </ButtonIconS3>
                <ButtonIconS3 color="text-[#eeb58f]" bottom-line="border-b-0" to="/toBlog">
                  <template #icon><font-awesome-icon :icon="['fas', 'comment-dots']" /></template>
                  <template #title>相關粉絲頁</template>
                </ButtonIconS3>
              </div>
            </aside>
            <main class="overflow-hidden lg:flex-[1_1_0]">
              <!-- 推薦考試區塊滑動插件 -->
              <div
                class="exam_recommendSlider relative mb-6 w-full border-b border-solid border-base-300 bg-base-200 bg-opacity-95 py-4"
              >
                <Swiper
                  :modules="[SwiperNavigation, SwiperMousewheel, SwiperKeyboard]"
                  :navigation="{ nextEl: '.exam-swiper-next', prevEl: '.exam-swiper-prev' }"
                  :keyboard="{
                    enabled: true,
                    onlyInViewport: true
                  }"
                  :grab-cursor="true"
                  :slides-per-view="1.5"
                  :speed="400"
                  :space-between="20"
                  :mousewheel="true"
                  :centered-slides="true"
                  :breakpoints="{
                    [breakpointsInt('lg')]: {
                      slidesPerView: 4,
                      spaceBetween: 20
                    },
                    [breakpointsInt('md')]: {
                      slidesPerView: 3,
                      spaceBetween: 20
                    },
                    [breakpointsInt('sm')]: {
                      slidesPerView: 2,
                      spaceBetween: 20
                    }
                  }"
                  class="flex w-full items-center justify-between px-10 py-5"
                >
                  <SwiperSlide class="hover:-translate-y-1">
                    <nuxt-link
                      class="inline-block w-full bg-white"
                      to="/product/toProductDetail"
                      target="_blank"
                    >
                      <div class="flex flex-col">
                        <img
                          class="h-[120px] w-full object-cover object-center"
                          src="https://www.tkbtv.com.tw/upload/subject/20200630161447201927.webp"
                        />
                        <div class="flex flex-col gap-2 p-2">
                          <span class="line-clamp-1 text-lg"
                            >台電、中油、台水新進職員甄試-電機(一)全修(一年期)-雲端</span
                          >
                          <span class="text-danger-600">$49000</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                  <SwiperSlide class="hover:-translate-y-1">
                    <nuxt-link
                      class="inline-block w-full bg-white"
                      to="/product/toProductDetail"
                      target="_blank"
                    >
                      <div class="flex flex-col">
                        <img
                          class="h-[120px] w-full object-cover object-center"
                          src="https://www.tkbtv.com.tw/upload/subject/20200630161447201927.webp"
                        />
                        <div class="flex flex-col gap-2 p-2">
                          <span class="line-clamp-1 text-lg"
                            >台電、中油、台水新進職員甄試-電機(一)全修(一年期)-雲端</span
                          >
                          <span class="text-danger-600">$49000</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                  <SwiperSlide class="hover:-translate-y-1">
                    <nuxt-link
                      class="inline-block w-full bg-white"
                      to="/product/toProductDetail"
                      target="_blank"
                    >
                      <div class="flex flex-col">
                        <img
                          class="h-[120px] w-full object-cover object-center"
                          src="https://www.tkbtv.com.tw/upload/subject/20200630161447201927.webp"
                        />
                        <div class="flex flex-col gap-2 p-2">
                          <span class="line-clamp-1 text-lg"
                            >台電、中油、台水新進職員甄試-電機(一)全修(一年期)-雲端</span
                          >
                          <span class="text-danger-600">$49000</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                  <SwiperSlide class="hover:-translate-y-1">
                    <nuxt-link
                      class="inline-block w-full bg-white"
                      to="/product/toProductDetail"
                      target="_blank"
                    >
                      <div class="flex flex-col">
                        <img
                          class="h-[120px] w-full object-cover object-center"
                          src="https://www.tkbtv.com.tw/upload/subject/20200630161447201927.webp"
                        />
                        <div class="flex flex-col gap-2 p-2">
                          <span class="line-clamp-1 text-lg"
                            >台電、中油、台水新進職員甄試-電機(一)全修(一年期)-雲端</span
                          >
                          <span class="text-danger-600">$49000</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                  <SwiperSlide class="hover:-translate-y-1">
                    <nuxt-link
                      class="inline-block w-full bg-white"
                      to="/product/toProductDetail"
                      target="_blank"
                    >
                      <div class="flex flex-col">
                        <img
                          class="h-[120px] w-full object-cover object-center"
                          src="https://www.tkbtv.com.tw/upload/subject/20200630161447201927.webp"
                        />
                        <div class="flex flex-col gap-2 p-2">
                          <span class="line-clamp-1 text-lg"
                            >台電、中油、台水新進職員甄試-電機(一)全修(一年期)-雲端</span
                          >
                          <span class="text-danger-600">$49000</span>
                        </div>
                      </div>
                    </nuxt-link>
                  </SwiperSlide>
                </Swiper>
                <div
                  class="exam-swiper-prev absolute left-0 top-1/2 z-[11] flex h-20 -translate-y-10 cursor-pointer items-center rounded-r bg-white px-1 py-10 shadow-lg"
                >
                  <font-awesome-icon class="text-xl text-base-600" :icon="['fas', 'angle-left']" />
                </div>
                <div
                  class="exam-swiper-next absolute right-0 top-1/2 z-[11] flex h-20 -translate-y-10 cursor-pointer items-center rounded-l bg-white px-1 py-10 shadow-lg"
                >
                  <font-awesome-icon class="text-xl text-base-600" :icon="['fas', 'angle-right']" />
                </div>
              </div>

              <!-- 手機版-考試類科列表 -->
              <div class="mb-6 block px-2 lg:hidden">
                <div class="bg-base-200 py-3">
                  <h3 class="my-2 text-center font-medium tracking-[3px] text-base-500">
                    考試類科列表
                  </h3>
                  <div class="cursor-pointer px-2 text-center" @click="openModal()">
                    <span
                      class="inline-block w-full bg-base-50 py-3 text-xl font-medium tracking-[3px] text-base-800 shadow-lg"
                      >請選擇您想觀看的<font-awesome-icon
                        class="ml-1 text-lg"
                        :icon="['fas', 'chevron-down']"
                    /></span>
                  </div>
                </div>
              </div>

              <!-- 內容區塊-Nav -->
              <div class="mb-3 flex items-center gap-3 pl-8">
                <h1 class="font-bold tracking-wide">關務特考</h1>
                <!-- 標題固定 -->
                <div class="flex items-center gap-1 text-2xl tracking-wide">
                  <span class="flex h-6 w-6 items-center justify-center rounded-full bg-base-300"
                    ><font-awesome-icon
                      class="text-sm text-white"
                      :icon="['fas', 'pen-to-square']" /></span
                  >一般行政
                </div>
              </div>
              <div ref="mimosaWrapper" class="mb-6">
                <Swiper
                  :modules="[SwiperNavigation, SwiperThumbs]"
                  :slides-per-view="'auto'"
                  :speed="400"
                  :space-between="0"
                  class="j-mimosa-nav exam-nav-slider w-full border-b border-solid border-base-300 bg-white"
                  :class="navTopClass"
                  :style="navTopStyle"
                  :navigation="{
                    nextEl: '.nav-swiper-next',
                    prevEl: '.nav-swiper-prev'
                  }"
                  @swiper="NavSwiper"
                >
                  <SwiperSlide class="inline-block cursor-pointer px-2 py-3 text-center text-lg">
                    <font-awesome-icon
                      class="mr-1 text-sky-600"
                      :icon="['fas', 'pencil']"
                    />考試介紹
                  </SwiperSlide>
                  <SwiperSlide class="inline-block cursor-pointer px-2 py-3 text-center text-lg">
                    <font-awesome-icon class="mr-1 text-sky-600" :icon="['fas', 'list']" />考試科目
                  </SwiperSlide>
                  <SwiperSlide class="inline-block cursor-pointer px-2 py-3 text-center text-lg">
                    <font-awesome-icon
                      class="mr-1 text-sky-600"
                      :icon="['fas', 'money-check-dollar']"
                    />薪資待遇
                  </SwiperSlide>
                  <SwiperSlide class="inline-block cursor-pointer px-2 py-3 text-center text-lg">
                    <font-awesome-icon
                      class="mr-1 text-sky-600"
                      :icon="['fas', 'check-double']"
                    />錄取率
                  </SwiperSlide>
                  <SwiperSlide class="inline-block cursor-pointer px-2 py-3 text-center text-lg">
                    <font-awesome-icon
                      class="mr-1 text-sky-600"
                      :icon="['fas', 'book-open']"
                    />全部課程
                  </SwiperSlide>
                  <div
                    class="nav-swiper-prev absolute left-0 top-1/2 z-[2] mt-0 flex h-[55px] -translate-y-[50%] cursor-pointer items-center bg-white px-1 shadow-lg"
                    :class="{ 'opacity-0': hideButton }"
                  >
                    <font-awesome-icon class="text-base-600" :icon="['fas', 'angle-left']" />
                  </div>
                  <div
                    class="nav-swiper-next absolute right-0 top-1/2 z-[2] mt-0 flex h-[55px] -translate-y-[50%] cursor-pointer items-center bg-white px-1 shadow-lg"
                    :class="{ 'opacity-0': hideButton }"
                  >
                    <font-awesome-icon class="text-base-600" :icon="['fas', 'angle-right']" />
                  </div>
                </Swiper>
              </div>

              <!-- 內容區塊-Content -->
              <Swiper
                :modules="[SwiperThumbs]"
                :active-index="0"
                :space-between="0"
                :auto-height="false"
                :allow-touch-move="false"
                :slides-per-view="1"
                :speed="600"
                class="exam-content-slider w-full px-8"
                :thumbs="{ swiper: ContentSwiper }"
              >
                <SwiperSlide class="swiper-hide-height">
                  <div class="text-right">
                    <a
                      class="inline-block cursor-pointer font-bold text-link"
                      @click="scrollToTarget('#baseForm')"
                      ><font-awesome-icon class="mr-1" :icon="['fas', 'pen']" />免費試聽申請</a
                    >
                  </div>
                  <PublicPost :create-directory="false">
                    <h2>2023/112國考－初等考試／初考／公務員考試</h2>
                    <p>
                      ▎<strong>直播時間</strong>：<br />
                      貨幣銀行學➛2022/9/1(四)19:00~20:00<br />
                      會計學➛2022/9/1(四)20:00~21:00
                    </p>
                    <p>▎<strong>直播回放</strong>：本次直播不提供回放服務</p>
                    <p>
                      ▎<strong>簡報索取</strong>：8/25起可於右側表單作答，直播當天將於聊天室裡提供電子教材下載(後續不另外提供)
                    </p>
                    <p>
                      ▎<strong>參加資格</strong>：<br />
                      1.線上觀看➜點擊直播頁面，卡位9月模擬考名額。<span class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                          target="_blank"
                          >報名直播講座</a
                        ></span
                      ><br />
                      2.現場講座➜填寫右側表單，即可幫你劃位(限量10名，報名有限)<span
                        class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/formAsk/CONTACT_B/toAsk.jsp?print_id=10919&amp;type_id=633"
                          target="_blank"
                          >報名實體現場場次</a
                        ></span
                      >
                    </p>
                    <br />
                    <br />
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/czsBZKCX9oQ"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <h2>銀行招考-模擬考直播講座 | 活動流程</h2>
                    <table class="rwd-table">
                      <thead>
                        <tr>
                          <th width="30%">時間</th>
                          <th>活動內容</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>18:50-19:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>直播入場時間</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>19:00-20:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>貨銀模擬考解析</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>20:00-21:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>會計學模擬考解析</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="lg-button">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                        >報名9月仿真銀行模擬考</a
                      >
                    </div>
                    <h2>銀行招考-模擬考直播講座&nbsp;| 師資介紹</h2>
                    <br />
                    <br />
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;貨幣銀行學<br />王達昌老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        美國約翰霍普金斯大學財務金融研究所碩士 / 助教<br />
                        美國密西根州立大學經濟研究所博士候選人 / 助教 <br />
                        <br />
                        <strong>• 授課科目：</strong><br />
                        研究所/公職<br />
                        個體經濟學、總體經濟學<br />
                        貨幣與銀行 <br />
                      </p>
                    </div>
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;銀行會計學<br />韓裕老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        北商大會研所<br />
                        台大國際企業系 <br />
                        <br />
                        <strong>• 考取：</strong><br />
                        高考三級金融保險<br />
                        國內證券分析師<br />
                        企業評價師 <br />
                        <br />
                        <strong>• 證照及資格：</strong><br />
                        證券分析師（CSIA）<br />
                        企業評價師<br />
                        會計事務乙級 <br />
                      </p>
                    </div>
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <h2>銀行招考模擬考直播講座 | 推薦影音</h2>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/X5wjQ8nA9j4"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/Wkdn2_IK-jA"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <table
                      border="0"
                      cellpadding="5"
                      cellspacing="0"
                      class="CSSTableGenerator"
                      style="width: 100%"
                    >
                      <colgroup>
                        <col width="50%" />
                        <col width="50%" />
                      </colgroup>
                      <tbody>
                        <tr style="text-align: center">
                          <th colspan="2">了解更多銀行招考相關考試消息</th>
                        </tr>
                        <tr>
                          <td style="text-align: center">2022銀行招考最新消息</td>
                          <td style="text-align: center">2022最新銀行考試分析講座</td>
                        </tr>
                        <tr style="text-align: center">
                          <td>
                            <a
                              href="https://www.tkbgo.com.tw/news/toNews.jsp?print_id=8892&amp;news_id=4187"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >最新招考資訊</a
                            >
                          </td>
                          <td>
                            <a
                              href="http://www.tkbgo.com.tw/lecture/toLectureDetail.jsp?lecture_id=590&amp;print_id=8892"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >銀行考情分析講座</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <h2>銀行招考課程推薦-正規、速成、總複習都在這裡</h2>
                    <div class="table_block">
                      <table border="0" cellpadding="3" cellspacing="0" style="width: 100%">
                        <colgroup>
                          <col width="33%" />
                          <col width="33%" />
                          <col width="33%" />
                        </colgroup>
                        <tbody>
                          <tr style="text-align: center">
                            <th colspan="3">TKB銀行－銀行招考熱門課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">完整單科課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911CHI000003&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >李華-國文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1910ENG000002&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >凱西-英文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2011ITI000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=396&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >張逸-金融科技</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907AMD000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >會計學</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2201LAW000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >票據法</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2210BAL000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >銀行法</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: left">
                            <td colspan="3" style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2012CYB000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >王達昌-貨銀</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">多功能組合課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th>銀行考試菁英班</th>
                            <th>銀行考試金榜班</th>
                            <th>銀行考試高效班</th>
                          </tr>
                          <tr style="text-align: center">
                            <td>
                              適合早早勵志，準備時間充裕的考生使用<br />
                              從觀念到重點解題鉅細靡遺的複習一次！
                            </td>
                            <td>
                              適合計畫畢業即報考，或轉職考生<br />
                              利用半年到一年的時間，上課＋重點回顧。
                            </td>
                            <td>
                              適合有概念想高速完整複習的考生<br />
                              快速帶你看過重點，搭配總複習加深印象！
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200062&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試菁英班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200063&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試金榜班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200064&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試高效班"
                                >點我看看
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="accordion">
                      <div class="acc-item show">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目1</div>
                        </div>
                        <div class="acc-content">
                          <div>內容1</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目2</div>
                        </div>
                        <div class="acc-content">
                          <div>內容2</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目3</div>
                        </div>
                        <div class="acc-content">
                          <div>內容3</div>
                        </div>
                      </div>
                    </div>

                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                  </PublicPost>
                </SwiperSlide>
                <SwiperSlide class="swiper-hide-height">
                  <div class="text-right">
                    <a
                      class="inline-block cursor-pointer font-bold text-link"
                      @click="scrollToTarget('#baseForm')"
                      ><font-awesome-icon class="mr-1" :icon="['fas', 'pen']" />免費試聽申請</a
                    >
                  </div>
                  <PublicPost :create-directory="false">
                    <h2>2023/112國考－初等考試／初考／公務員考試</h2>
                    <p>
                      ▎<strong>直播時間</strong>：<br />
                      貨幣銀行學➛2022/9/1(四)19:00~20:00<br />
                      會計學➛2022/9/1(四)20:00~21:00
                    </p>
                    <p>▎<strong>直播回放</strong>：本次直播不提供回放服務</p>
                    <p>
                      ▎<strong>簡報索取</strong>：8/25起可於右側表單作答，直播當天將於聊天室裡提供電子教材下載(後續不另外提供)
                    </p>
                    <p>
                      ▎<strong>參加資格</strong>：<br />
                      1.線上觀看➜點擊直播頁面，卡位9月模擬考名額。<span class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                          target="_blank"
                          >報名直播講座</a
                        ></span
                      ><br />
                      2.現場講座➜填寫右側表單，即可幫你劃位(限量10名，報名有限)<span
                        class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/formAsk/CONTACT_B/toAsk.jsp?print_id=10919&amp;type_id=633"
                          target="_blank"
                          >報名實體現場場次</a
                        ></span
                      >
                    </p>
                    <br />
                    <br />
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/czsBZKCX9oQ"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <h2>銀行招考-模擬考直播講座 | 活動流程</h2>
                    <table class="rwd-table">
                      <thead>
                        <tr>
                          <th width="30%">時間</th>
                          <th>活動內容</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>18:50-19:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>直播入場時間</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>19:00-20:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>貨銀模擬考解析</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>20:00-21:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>會計學模擬考解析</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="lg-button">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                        >報名9月仿真銀行模擬考</a
                      >
                    </div>
                    <h2>銀行招考-模擬考直播講座&nbsp;| 師資介紹</h2>
                    <br />
                    <br />
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;貨幣銀行學<br />王達昌老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        美國約翰霍普金斯大學財務金融研究所碩士 / 助教<br />
                        美國密西根州立大學經濟研究所博士候選人 / 助教 <br />
                        <br />
                        <strong>• 授課科目：</strong><br />
                        研究所/公職<br />
                        個體經濟學、總體經濟學<br />
                        貨幣與銀行 <br />
                      </p>
                    </div>
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;銀行會計學<br />韓裕老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        北商大會研所<br />
                        台大國際企業系 <br />
                        <br />
                        <strong>• 考取：</strong><br />
                        高考三級金融保險<br />
                        國內證券分析師<br />
                        企業評價師 <br />
                        <br />
                        <strong>• 證照及資格：</strong><br />
                        證券分析師（CSIA）<br />
                        企業評價師<br />
                        會計事務乙級 <br />
                      </p>
                    </div>
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <h2>銀行招考模擬考直播講座 | 推薦影音</h2>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/X5wjQ8nA9j4"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/Wkdn2_IK-jA"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <table
                      border="0"
                      cellpadding="5"
                      cellspacing="0"
                      class="CSSTableGenerator"
                      style="width: 100%"
                    >
                      <colgroup>
                        <col width="50%" />
                        <col width="50%" />
                      </colgroup>
                      <tbody>
                        <tr style="text-align: center">
                          <th colspan="2">了解更多銀行招考相關考試消息</th>
                        </tr>
                        <tr>
                          <td style="text-align: center">2022銀行招考最新消息</td>
                          <td style="text-align: center">2022最新銀行考試分析講座</td>
                        </tr>
                        <tr style="text-align: center">
                          <td>
                            <a
                              href="https://www.tkbgo.com.tw/news/toNews.jsp?print_id=8892&amp;news_id=4187"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >最新招考資訊</a
                            >
                          </td>
                          <td>
                            <a
                              href="http://www.tkbgo.com.tw/lecture/toLectureDetail.jsp?lecture_id=590&amp;print_id=8892"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >銀行考情分析講座</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <h2>銀行招考課程推薦-正規、速成、總複習都在這裡</h2>
                    <div class="table_block">
                      <table border="0" cellpadding="3" cellspacing="0" style="width: 100%">
                        <colgroup>
                          <col width="33%" />
                          <col width="33%" />
                          <col width="33%" />
                        </colgroup>
                        <tbody>
                          <tr style="text-align: center">
                            <th colspan="3">TKB銀行－銀行招考熱門課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">完整單科課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911CHI000003&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >李華-國文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1910ENG000002&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >凱西-英文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2011ITI000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=396&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >張逸-金融科技</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907AMD000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >會計學</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2201LAW000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >票據法</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2210BAL000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >銀行法</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: left">
                            <td colspan="3" style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2012CYB000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >王達昌-貨銀</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">多功能組合課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th>銀行考試菁英班</th>
                            <th>銀行考試金榜班</th>
                            <th>銀行考試高效班</th>
                          </tr>
                          <tr style="text-align: center">
                            <td>
                              適合早早勵志，準備時間充裕的考生使用<br />
                              從觀念到重點解題鉅細靡遺的複習一次！
                            </td>
                            <td>
                              適合計畫畢業即報考，或轉職考生<br />
                              利用半年到一年的時間，上課＋重點回顧。
                            </td>
                            <td>
                              適合有概念想高速完整複習的考生<br />
                              快速帶你看過重點，搭配總複習加深印象！
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200062&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試菁英班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200063&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試金榜班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200064&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試高效班"
                                >點我看看
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="accordion">
                      <div class="acc-item show">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目1</div>
                        </div>
                        <div class="acc-content">
                          <div>內容1</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目2</div>
                        </div>
                        <div class="acc-content">
                          <div>內容2</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目3</div>
                        </div>
                        <div class="acc-content">
                          <div>內容3</div>
                        </div>
                      </div>
                    </div>

                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                  </PublicPost>
                </SwiperSlide>
                <SwiperSlide class="swiper-hide-height">
                  <div class="text-right">
                    <a
                      class="inline-block cursor-pointer font-bold text-link"
                      @click="scrollToTarget('#baseForm')"
                      ><font-awesome-icon class="mr-1" :icon="['fas', 'pen']" />免費試聽申請</a
                    >
                  </div>
                  <PublicPost :create-directory="false">
                    <h2>2023/112國考－初等考試／初考／公務員考試</h2>
                    <p>
                      ▎<strong>直播時間</strong>：<br />
                      貨幣銀行學➛2022/9/1(四)19:00~20:00<br />
                      會計學➛2022/9/1(四)20:00~21:00
                    </p>
                    <p>▎<strong>直播回放</strong>：本次直播不提供回放服務</p>
                    <p>
                      ▎<strong>簡報索取</strong>：8/25起可於右側表單作答，直播當天將於聊天室裡提供電子教材下載(後續不另外提供)
                    </p>
                    <p>
                      ▎<strong>參加資格</strong>：<br />
                      1.線上觀看➜點擊直播頁面，卡位9月模擬考名額。<span class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                          target="_blank"
                          >報名直播講座</a
                        ></span
                      ><br />
                      2.現場講座➜填寫右側表單，即可幫你劃位(限量10名，報名有限)<span
                        class="sm-button"
                        ><a
                          href="https://www.tkbgo.com.tw/formAsk/CONTACT_B/toAsk.jsp?print_id=10919&amp;type_id=633"
                          target="_blank"
                          >報名實體現場場次</a
                        ></span
                      >
                    </p>
                    <br />
                    <br />
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/czsBZKCX9oQ"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <h2>銀行招考-模擬考直播講座 | 活動流程</h2>
                    <table class="rwd-table">
                      <thead>
                        <tr>
                          <th width="30%">時間</th>
                          <th>活動內容</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>18:50-19:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>直播入場時間</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>19:00-20:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>貨銀模擬考解析</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div class="data-title">時間</div>
                            <div>20:00-21:00</div>
                          </td>
                          <td>
                            <div class="data-title">活動內容</div>
                            <div>會計學模擬考解析</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div class="lg-button">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                        >報名9月仿真銀行模擬考</a
                      >
                    </div>
                    <h2>銀行招考-模擬考直播講座&nbsp;| 師資介紹</h2>
                    <br />
                    <br />
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;貨幣銀行學<br />王達昌老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        美國約翰霍普金斯大學財務金融研究所碩士 / 助教<br />
                        美國密西根州立大學經濟研究所博士候選人 / 助教 <br />
                        <br />
                        <strong>• 授課科目：</strong><br />
                        研究所/公職<br />
                        個體經濟學、總體經濟學<br />
                        貨幣與銀行 <br />
                      </p>
                    </div>
                    <a
                      style="
                        border-radius: 10px;
                        display: block;
                        margin: 0 auto;
                        width: 75%;
                        background-color: indianred;
                        font-size: 28px;
                        text-align: center;
                        padding: 20px 20px;
                        color: white;
                        text-decoration: none;
                      "
                      target="_blank"
                      >&nbsp;銀行會計學<br />韓裕老師&nbsp;</a
                    >
                    <div
                      style="
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-width: 0 20px 15px 20px;
                        border-color: transparent transparent #959595 transparent;
                        display: block;
                        margin: 0 auto;
                      "
                    ></div>
                    <div style="border: 1px solid #959595; padding: 20px; border-radius: 10px">
                      <p align="center" style="color: #000">
                        <strong>• 學歷：</strong><br />
                        北商大會研所<br />
                        台大國際企業系 <br />
                        <br />
                        <strong>• 考取：</strong><br />
                        高考三級金融保險<br />
                        國內證券分析師<br />
                        企業評價師 <br />
                        <br />
                        <strong>• 證照及資格：</strong><br />
                        證券分析師（CSIA）<br />
                        企業評價師<br />
                        會計事務乙級 <br />
                      </p>
                    </div>
                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                    <h2>銀行招考模擬考直播講座 | 推薦影音</h2>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/X5wjQ8nA9j4"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <div class="video">
                      <div
                        class="youtube"
                        data-lazy-embed="https://www.youtube.com/embed/Wkdn2_IK-jA"
                      >
                        <div class="thumbnail"></div>
                      </div>
                    </div>
                    <table
                      border="0"
                      cellpadding="5"
                      cellspacing="0"
                      class="CSSTableGenerator"
                      style="width: 100%"
                    >
                      <colgroup>
                        <col width="50%" />
                        <col width="50%" />
                      </colgroup>
                      <tbody>
                        <tr style="text-align: center">
                          <th colspan="2">了解更多銀行招考相關考試消息</th>
                        </tr>
                        <tr>
                          <td style="text-align: center">2022銀行招考最新消息</td>
                          <td style="text-align: center">2022最新銀行考試分析講座</td>
                        </tr>
                        <tr style="text-align: center">
                          <td>
                            <a
                              href="https://www.tkbgo.com.tw/news/toNews.jsp?print_id=8892&amp;news_id=4187"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >最新招考資訊</a
                            >
                          </td>
                          <td>
                            <a
                              href="http://www.tkbgo.com.tw/lecture/toLectureDetail.jsp?lecture_id=590&amp;print_id=8892"
                              style="
                                color: rgb(255, 255, 255);
                                margin: 0px;
                                padding: 3px 15px;
                                border: 0px;
                                border-radius: 10px;
                                opacity: 1;
                                background: rgb(255, 128, 0);
                              "
                              target="_blank"
                              >銀行考情分析講座</a
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <br />
                    <h2>銀行招考課程推薦-正規、速成、總複習都在這裡</h2>
                    <div class="table_block">
                      <table border="0" cellpadding="3" cellspacing="0" style="width: 100%">
                        <colgroup>
                          <col width="33%" />
                          <col width="33%" />
                          <col width="33%" />
                        </colgroup>
                        <tbody>
                          <tr style="text-align: center">
                            <th colspan="3">TKB銀行－銀行招考熱門課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">完整單科課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911CHI000003&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >李華-國文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1910ENG000002&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >凱西-英文</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2011ITI000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=396&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >張逸-金融科技</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907AMD000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >會計學</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2201LAW000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試總複習"
                                >票據法</a
                              >
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2210BAL000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試題庫班"
                                >銀行法</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: left">
                            <td colspan="3" style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2012CYB000001&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397&amp;utm_source=go_news_ching"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試速成班"
                                >王達昌-貨銀</a
                              >
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <th colspan="3">多功能組合課程</th>
                          </tr>
                          <tr style="text-align: center">
                            <th>銀行考試菁英班</th>
                            <th>銀行考試金榜班</th>
                            <th>銀行考試高效班</th>
                          </tr>
                          <tr style="text-align: center">
                            <td>
                              適合早早勵志，準備時間充裕的考生使用<br />
                              從觀念到重點解題鉅細靡遺的複習一次！
                            </td>
                            <td>
                              適合計畫畢業即報考，或轉職考生<br />
                              利用半年到一年的時間，上課＋重點回顧。
                            </td>
                            <td>
                              適合有概念想高速完整複習的考生<br />
                              快速帶你看過重點，搭配總複習加深印象！
                            </td>
                          </tr>
                          <tr style="text-align: center">
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200062&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試菁英班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200063&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試金榜班"
                                >點我看看
                              </a>
                            </td>
                            <td style="text-align: center">
                              <a
                                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200064&amp;subject_no=&amp;class_type=I&amp;group=8&amp;type=135&amp;kind=397"
                                style="
                                  background: rgb(46, 194, 179);
                                  padding: 5px 10px;
                                  border-radius: 10px;
                                  display: inline-block;
                                  color: rgb(255, 255, 255);
                                  text-decoration: none;
                                  opacity: 1;
                                "
                                target="_blank"
                                title="銀行考試高效班"
                                >點我看看
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="accordion">
                      <div class="acc-item show">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目1</div>
                        </div>
                        <div class="acc-content">
                          <div>內容1</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目2</div>
                        </div>
                        <div class="acc-content">
                          <div>內容2</div>
                        </div>
                      </div>
                      <div class="acc-item">
                        <div class="acc-button">
                          <span class="dropdown"></span>
                          <div class="title">題目3</div>
                        </div>
                        <div class="acc-content">
                          <div>內容3</div>
                        </div>
                      </div>
                    </div>

                    <p style="text-align: center">
                      <a
                        href="https://www.tkbgo.com.tw/livestream/toDetail.jsp?print_id=10920&amp;subject_no=V2203AMD000011"
                        target="_blank"
                      >
                        <img
                          alt="TKB銀行直播專區"
                          style="width: 100%"
                          title="TKB銀行直播專區"
                          class="lazy"
                          src="https://www.tkbtv.com.tw/p20220818EC001_728_90/toPic.action"
                        />
                      </a>
                    </p>
                  </PublicPost>
                </SwiperSlide>
                <SwiperSlide class="swiper-hide-height">
                  <div class="text-right">
                    <a
                      class="inline-block cursor-pointer font-bold text-link"
                      @click="scrollToTarget('#baseForm')"
                      ><font-awesome-icon class="mr-1" :icon="['fas', 'pen']" />免費試聽申請</a
                    >
                  </div>
                  <div class="mb-3 flex flex-wrap gap-1">
                    <ButtonS1
                      v-for="(tab, index) in tabs"
                      :key="index"
                      :name="tab + '年'"
                      :class="{ active: activeTab === index }"
                      @click="TabClick(index)"
                    />
                  </div>
                  <ZoneDataTable :table-data="tabledata" />
                </SwiperSlide>
                <SwiperSlide class="swiper-hide-height">
                  <h3 class="my-4 tracking-wide">推薦課程</h3>
                  <div class="mb-3">
                    <h3 class="mb-3">全修</h3>
                    <table class="w-full table-auto border-collapse text-center">
                      <tbody>
                        <tr>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="40%"
                          >
                            課程名稱
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="20%"
                          >
                            售價
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="20%"
                          >
                            折扣
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="20%"
                          >
                            特惠價
                          </th>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >台電、中油、台水新進職員甄試-資訊全修(半年)-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 40,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            -$ 1,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 39,000
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >台電、中油、台水新進職員甄試-資訊全修(一年期)-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 43,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            -$ 1,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 42,000
                          </td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >台電、中油、台水新進職員甄試-資訊全修(三個月)-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 29,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            -$ 1,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 28,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mb-3">
                    <h3 class="mb-3">單科</h3>
                    <table class="w-full table-auto border-collapse text-center">
                      <tbody>
                        <tr>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="40%"
                          >
                            課程名稱
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="15%"
                          >
                            授課師資
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="15%"
                          >
                            時數
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="15%"
                          >
                            售價
                          </th>
                          <th
                            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                            width="15%"
                          >
                            滿萬送千
                          </th>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >程式語言-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            劉逸
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            53
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 12,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >計算機概論-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            劉逸
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            90
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 18,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >英文(國營)-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            凱西
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            36
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 7,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >英文-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            江江
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            36
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 7,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          ></td>
                        </tr>
                        <tr>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            <nuxt-link
                              class="underline underline-offset-2"
                              to="/product/toProductDetail"
                              >資訊管理-雲端</nuxt-link
                            >
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            丁祺
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            60
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          >
                            $ 21,000
                          </td>
                          <td
                            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                          ></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </SwiperSlide>
              </Swiper>

              <!-- 填表區塊 -->
              <div class="my-8 px-8">
                <PublicForm id="baseForm" />
              </div>
            </main>
          </div>

          <!-- 考試類科列表彈窗 -->
          <DefaultXlModal
            v-model="DefaultXlModalVisible"
            title="考試類科列表"
            class="h-full md:h-[600px]"
          >
            <template #content>
              <el-scrollbar>
                <div class="grid grid-cols-2 gap-2">
                  <ButtonS2
                    v-for="(item, index) in SujectItems"
                    :key="index"
                    padding="py-3"
                    margin="my-0"
                    ><nuxt-link class="line-clamp-1" :to="item.link">{{
                      item.name
                    }}</nuxt-link></ButtonS2
                  >
                </div>
              </el-scrollbar>
            </template>
          </DefaultXlModal>
        </section>
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>
<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ExamScheduleSwiperCard from '@/components/card/ExamScheduleSwiperCard.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import DefaultXlModal from '@/components/modal/DefaultXlModal.vue'
import PublicPost from '@/components/post/PublicPost.vue'
import ButtonS1 from '@/components/button/ButtonS1'
import ButtonS2 from '@/components/button/ButtonS2'
import ButtonIconS2 from '@/components/button/ButtonIconS2.vue'
import ButtonIconS3 from '@/components/button/ButtonIconS3.vue'
import ZoneDataTable from '@/components/others/ZoneDataTable'
definePageMeta({
  layout: 'main'
})
// zoneGraduateMenu()

const { breakpointsInt } = useTailwindConfig()
const DefaultXlModalVisible = ref(false)
const tabs = ref(['112', '111', '110'])
const activeTab = ref(0)
const tabledata = ref([])
const TestData = reactive([
  [
    {
      classname: '地方特考',
      classlink: null,
      newname: null,
      newlink: null,
      date_begin: '112.09.11',
      date_end: '112.09.20',
      teatdate: '112.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '外交特考',
      classlink: null,
      newname: null,
      newlink: null,
      date_begin: '112.09.11',
      date_end: '112.09.20',
      teatdate: '112.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '司法特考',
      classlink: null,
      newname: null,
      newlink: null,
      date_begin: '112.09.11',
      date_end: '112.09.20',
      teatdate: '112.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '調查局特考',
      classlink: null,
      newname: null,
      newlink: null,
      date_begin: '112.09.11',
      date_end: '112.09.20',
      teatdate: '112.12.09',
      downloadlink1: null,
      downloadlink2: null
    }
  ],
  [
    {
      classname: '高普特考',
      classlink: null,
      newname: '高普特考最新消息',
      newlink: null,
      date_begin: '111.09.11',
      date_end: '111.09.20',
      teatdate: '111.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '外交特考',
      classlink: null,
      newname: '外交特考最新消息',
      newlink: null,
      date_begin: '111.09.11',
      date_end: '111.09.20',
      teatdate: '111.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '司法特考',
      classlink: null,
      newname: '司法特考最新消息',
      newlink: null,
      date_begin: '111.09.11',
      date_end: '111.09.20',
      teatdate: '111.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '調查局特考',
      classlink: null,
      newname: '調查局特考最新消息',
      newlink: null,
      date_begin: null,
      date_end: null,
      teatdate: null,
      downloadlink1: null,
      downloadlink2: null
    }
  ],
  [
    {
      classname: '高普特考',
      classlink: null,
      newname: '高普特考最新消息',
      newlink: null,
      date_begin: '110.09.11',
      date_end: '110.09.20',
      teatdate: '110.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '外交特考',
      classlink: null,
      newname: '外交特考最新消息',
      newlink: null,
      date_begin: '110.09.11',
      date_end: '110.09.20',
      teatdate: '110.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '司法特考',
      classlink: null,
      newname: '司法特考最新消息',
      newlink: null,
      date_begin: '110.09.11',
      date_end: '110.09.20',
      teatdate: '110.12.09',
      downloadlink1: null,
      downloadlink2: null
    },
    {
      classname: '調查局特考',
      classlink: null,
      newname: '調查局特考最新消息',
      newlink: null,
      date_begin: null,
      date_end: null,
      teatdate: null,
      downloadlink1: null,
      downloadlink2: null
    }
  ]
])
const SujectItems = reactive([
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '企管',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '人資',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '財會',
    link: '/examData/toExamClassDetail'
  },
  {
    name: '國貿',
    link: '/examData/toExamClassDetail'
  }
])

const mimosaWrapper = ref(null)
const oldIndex = ref(null)
const activeIndex = ref(0)
const navFixTop = ref(false)
const hideButton = ref(false)
const originNavTop = ref(0)
const lastScrollTop = ref(0)
const goheaderHeight = inject('goHeaderHeight', ref(0))
const windowResize = inject('windowResize', ref(null))
const windowScroll = inject('windowScroll', ref(null))
const navTopClass = reactive({
  fixed: navFixTop,
  relative: !navFixTop,
  'j-mimosa-fix': navFixTop
})
const navTopStyle = reactive({ top: '' })
const ContentSwiper = ref(null)
const NavSwiper = (swiper) => {
  ContentSwiper.value = swiper
}
watch(windowResize, () => {
  setOriginNavTop()
})

watch(windowScroll, () => {
  const currentScrollTop = getScrollTop() // 取得當前滑鼠滾動高度
  const toTop = currentScrollTop < lastScrollTop.value // 判斷滑鼠往上滾動
  const lowerOriginNavTop = currentScrollTop > originNavTop.value // 滾動>浮動menu最上層到頂部距離
  const sameIndex = oldIndex.value === activeIndex.value // 判斷slider index值是否相同
  if (sameIndex) {
    if (toTop && lowerOriginNavTop) {
      fixedNav() // 固定
    } else {
      relativeNav()
    }
  }

  oldIndex.value = activeIndex.value // 當前Index值
  lastScrollTop.value = currentScrollTop // 當前滾動高度
})

onBeforeMount(() => {
  tabledata.value = TestData[activeTab.value]
})
onMounted(() => {
  setOriginNavTop()
})

// const swiperPrev = () => {
//   examNavSwiper.translateTo(examNavSwiper.translate + 160) // 160+160
// }

// const swiperNext = () => {
//   const windowWidth = window.innerWidth // 當前螢幕寬度
//   const maxTranslateWidth = examNavSwiper.slides.length * -160 + windowWidth // 5*-160+當前螢幕寬度
//   const translateTo = examNavSwiper.translate - 160 // 160+160
//   examNavSwiper.translateTo(maxTranslateWidth < translateTo ? translateTo : maxTranslateWidth)
// }

const fixedNav = () => {
  navFixTop.value = true
  navTopStyle.top = `${goheaderHeight.value}px`
}

const relativeNav = () => {
  navFixTop.value = false
  navTopStyle.top = ''
}

const getScrollTop = () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop // 滑鼠滾動高度
  return scrollTop
}

const setOriginNavTop = () => {
  const pageYOffset = window.pageYOffset // 當前頁面相對窗口顯示區左上角的Y位置(0)
  const top = mimosaWrapper.value.getBoundingClientRect().top // 浮動menu最上層到頂部距離
  originNavTop.value = pageYOffset + top // 0＋浮動menu最上層到頂部距離
}

const openModal = () => {
  DefaultXlModalVisible.value = true
}

const TabClick = (index) => {
  activeTab.value = index
  tabledata.value = TestData[index]
}
</script>

<style lang="scss" scoped>
/* 推薦課程 */
:deep() .exam_recommendSlider {
  .swiper-wrapper {
    @apply py-4;
  }
  .swiper-slide {
    transition: 0.4s ease-out;
    box-shadow: 4px 4px 35px rgba(160, 160, 160, 0.4);
    @apply cursor-pointer overflow-hidden border border-solid border-white transition-all duration-300 ease-in-out hover:-translate-y-1;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    display: none;
  }
  .swiper-button-disabled {
    > svg {
      @apply opacity-50;
    }
  }
}

/* 連動swiper */
:deep() .exam-nav-slider {
  .swiper-slide {
    width: 160px !important;
    &:hover {
      @apply text-primary-500 opacity-80;
      svg {
        @apply text-primary-500 opacity-80;
      }
    }
    &.swiper-slide-thumb-active {
      @apply text-primary-500;
      > svg {
        @apply text-primary-500;
      }
    }
  }

  .nav-swiper-prev.swiper-button-disabled,
  .nav-swiper-next.swiper-button-disabled {
    @apply hidden;
  }
}
:deep() .j-mimosa-nav {
  transition: all 0.4s ease-in-out;
  animation-direction: reverse;
  animation-fill-mode: forwards;
  left: 0;
  top: 0;
  &.j-mimosa-fix {
    position: fixed !important;
    left: 0;
    z-index: 10;
    transform: translateZ(90px);
    height: auto;
  }
  &.j-mimosa-fix .swiper-wrapper {
    @apply lg:justify-center;
  }
}

:deep() .exam-content-slider {
  .swiper-slide {
    @apply px-4;
  }
  .swiper-hide-height.swiper-slide-active {
    height: auto !important;
  }
  .swiper-hide-height {
    height: 0 !important;
  }
}

/* 頁籤 */
.active {
  @apply bg-secondary-500 text-base-50;
}
</style>
