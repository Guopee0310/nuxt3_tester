<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <!--  ＊浮動Navbar -->
        <ZoneBankNav ref="zoneBankNav" class="navbar" :nav-items="NavData" :items="itemsRef" />

        <!--  banner -->
        <ZoneTemplateXPadding>
          <ZoneIndexBanner :default-data="indexBannerData" />
          <div class="mt-8 text-center">
            <ButtonS2
              width="max-w-[450px]"
              bg-color="bg-secondary-500"
              @click="scrollToTarget(baseForm[0], zoneBankNavRef)"
              ><font-awesome-icon class="mr-1" :icon="['fas', 'arrow-pointer']" />立即諮詢</ButtonS2
            >
          </div>
        </ZoneTemplateXPadding>

        <!--  最新消息 -->
        <ZoneTemplateXPadding ref="anchor0">
          <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
            <font-awesome-icon
              class="mr-1 text-secondary-400"
              :icon="['fas', 'folder-open']"
            />最新資訊
          </h2>
          <ZoneInfoContent>
            <ZoneInfoListRight>
              <ZoneInfoTitle titlename="最新消息" />
              <ZoneInfoNewItem />
              <ZoneInfoNewItem />
              <div class="text-right">
                <ButtonMore class="right-0" to="/news/toNewsList" />
              </div>
            </ZoneInfoListRight>
            <ZoneInfoListLeft>
              <ZoneInfoTitle titlename="熱門文章" />
              <ZoneInfoArticleItem />
              <ZoneInfoArticleItem />
              <div class="text-right">
                <ButtonMore class="right-0" to="/news/toNewsList" />
              </div>
            </ZoneInfoListLeft>
          </ZoneInfoContent>
        </ZoneTemplateXPadding>

        <!-- 課程總覽 -->
        <ZoneTemplateXPadding ref="anchor1">
          <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
            <font-awesome-icon
              class="mr-1 text-secondary-400"
              :icon="['fas', 'folder-open']"
            />課程總覽
          </h2>
          <ul class="mb-6 flex w-full items-center gap-2">
            <li
              :class="{ courseactive: activeCourseTab === 0 }"
              class="w-full cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
              @click="activeCourseTab = 0"
            >
              全修
            </li>
            <li
              :class="{ courseactive: activeCourseTab === 1 }"
              class="w-full cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
              @click="activeCourseTab = 1"
            >
              總複習
            </li>
            <li
              :class="{ courseactive: activeCourseTab === 2 }"
              class="w-full cursor-pointer rounded bg-base-400 px-2 py-1 text-center text-xl text-white"
              @click="activeCourseTab = 2"
            >
              高效包套
            </li>
          </ul>

          <!-- 全修 -->
          <div v-show="activeCourseTab === 0" class="mb-3 flex flex-col gap-4 xl:flex-row">
            <div class="w-full xl:w-[60%]">
              <div
                class="h-full overflow-hidden rounded-md border border-solid border-base-300 p-3"
              >
                <p class="mb-4">
                  最佳王牌<span class="border-b-[1px] border-solid border-primary-500"
                    >會計女神曉寧老師</span
                  >及國稅局退役<span class="border-b-[1px] border-solid border-primary-500"
                    >稅法權威何菲老師</span
                  >打造<span class="border-b-[1px] border-solid border-primary-500">正課課程</span
                  >，特別的授課方式，上榜學生無數。<br />
                  不論是零基礎的同學或是商科專業皆可選擇此課程，重新打好觀念，幫助未來從業。
                </p>
                <p class="mb-8 text-lg font-bold tracking-wider text-primary-500">
                  <span
                    class="mr-1 rounded-3xl border-b-[1px] border-solid border-primary-500 bg-primary-100 px-2 py-1"
                    >適合同學</span
                  >
                  0基礎、不熟悉該領域，但時間有限的同學
                </p>
                <div class="flex justify-center">
                  <a
                    class="cursor-pointer rounded-3xl bg-primary-500 px-4 py-2 text-center text-2xl text-white"
                    href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2100078&amp;subject_no=&amp;class_type="
                    target="_blank"
                  >
                    <font-awesome-icon class="mr-2" :icon="['fas', 'cart-shopping']" />購買課程
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full xl:w-[40%]">
              <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="rounded-tl-lg border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                      <th
                        class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        師資
                      </th>
                      <th
                        class="rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        會計學概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        曉寧
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        297.1H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        記帳相關法規概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        24H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        稅務相關法規概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        57.7H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        租稅申報實務
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        25.5H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        國文-作文
                      </td>
                      <td
                        class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        宇文強
                      </td>
                      <td class="break-words rounded-br-lg p-1 align-middle text-lg">7.8H</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- 總複習 -->
          <div v-show="activeCourseTab === 1" class="mb-3 flex flex-col gap-4 xl:flex-row">
            <div class="w-full xl:w-[60%]">
              <div
                class="h-full overflow-hidden rounded-md border border-solid border-base-300 p-3"
              >
                <p class="mb-4">
                  名師替你畫重點，<span class="border-b-[1px] border-solid border-primary-500"
                    >最後衝刺</span
                  >，考點分析，釐清考生陷阱、盲點，成為記帳士的最後一哩路。 已有所準備的同學<span
                    class="border-b-[1px] border-solid border-primary-500"
                    >快速加強所學知識，考試戰略教授。</span
                  >
                </p>
                <p class="mb-8 text-lg font-bold tracking-wider text-primary-500">
                  <span
                    class="mr-1 rounded-3xl border-b-[1px] border-solid border-primary-500 bg-primary-100 px-2 py-1"
                    >適合同學</span
                  >
                  考前衝刺、已有基礎觀念的同學
                </p>
              </div>
            </div>
            <div class="w-full xl:w-[40%]">
              <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="rounded-tl-lg border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                      <th
                        class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        師資
                      </th>
                      <th
                        class="rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        <a
                          class="cursor-pointer underline underline-offset-2"
                          href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2110CPB000001&amp;class_type=I&amp;group=9&amp;type=72&amp;kind=163"
                        >
                          記帳相關法規概要總複習
                        </a>
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        6.5H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        <a
                          class="cursor-pointer underline underline-offset-2"
                          href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2010CPB000007&amp;class_type=I&amp;group=9&amp;type=72&amp;kind=163"
                        >
                          稅務相關法規概要及<br />租稅申報實務總複習
                        </a>
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        13.6H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        <a
                          class="cursor-pointer underline underline-offset-2"
                          href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2200133&subject_no=&class_type=I&group=9&type=72&kind=163"
                        >
                          會計學概要總複習
                        </a>
                      </td>
                      <td
                        class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        曉寧
                      </td>
                      <td class="break-words border-solid border-base-300 p-1 align-middle text-lg">
                        42.1H
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <!-- 高效包套 -->
          <div v-show="activeCourseTab === 2" class="mb-3 flex flex-col gap-4 xl:flex-row">
            <div class="w-full xl:w-[60%]">
              <div
                class="h-full overflow-hidden rounded-md border border-solid border-base-300 p-3"
              >
                <p class="mb-4">
                  <span class="border-b-[1px] border-solid border-primary-500">完整課程內容</span
                  >，包含<span class="border-b-[1px] border-solid border-primary-500"
                    >基礎、正課及總複習</span
                  >，名師手把手教學，
                  <span class="border-b-[1px] border-solid border-primary-500">零基礎入門學習</span
                  >。為毫無概念的同學量身打造打通任督二脈。
                </p>
                <p class="mb-8 text-lg font-bold tracking-wider text-primary-500">
                  <span
                    class="mr-1 rounded-3xl border-b-[1px] border-solid border-primary-500 bg-primary-100 px-2 py-1"
                    >適合同學</span
                  >
                  0基礎、時間較充裕，希望完整學習的同學
                </p>
                <div class="flex justify-center">
                  <a
                    class="cursor-pointer rounded-3xl bg-primary-500 px-4 py-2 text-center text-2xl text-white"
                    href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2100078&amp;subject_no=&amp;class_type="
                    target="_blank"
                  >
                    <font-awesome-icon class="mr-2" :icon="['fas', 'cart-shopping']" />購買課程
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full xl:w-[40%]">
              <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="rounded-tl-lg border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                      <th
                        class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        師資
                      </th>
                      <th
                        class="rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-base-200 p-1 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        時數
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        會計學概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        曉寧
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        291.7H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        記帳相關法規概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        24H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        稅務相關法規概要
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        57.7H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        租稅申報實務
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        25.5H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        國文-作文
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        宇文強
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        7.8H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        記帳相關法規概要總複習
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        6.5H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        稅務相關法規概要及<br />租稅申報實務總複習
                      </td>
                      <td
                        class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        何菲
                      </td>
                      <td
                        class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        13.6H
                      </td>
                    </tr>
                    <tr>
                      <td
                        class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        會計學概要總複習
                      </td>
                      <td
                        class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      >
                        曉寧
                      </td>
                      <td class="break-words rounded-br-lg p-1 align-middle text-lg">42.1H</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p class="text-right">*課程時數皆為預設非實際時數</p>
            </div>
          </div>

          <div class="mt-6 text-center">
            <nuxt-link to="/product/toProductList"
              ><ButtonS2 width="max-w-[450px]" bg-color="bg-secondary-500"
                ><font-awesome-icon
                  class="mr-1"
                  :icon="['fas', 'arrow-pointer']"
                />看更多專業課程</ButtonS2
              ></nuxt-link
            >
          </div>
        </ZoneTemplateXPadding>

        <!-- 師資介紹 -->
        <ZoneTemplateXPadding>
          <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
            <font-awesome-icon
              class="mr-1 text-secondary-400"
              :icon="['fas', 'chalkboard-user']"
            />師資介紹
          </h2>
          <div class="flex flex-col gap-4 md:flex-row xl:gap-2">
            <div class="w-full overflow-hidden rounded bg-[#FFF4E3] p-2 xl:max-w-[340px]">
              <div class="relative px-2 pt-2">
                <div class="mt-4 flex gap-2">
                  <div class="w-full">
                    <p class="pb-1 text-xl font-bold text-primary-500">何菲</p>
                    <p>科目：稅務相關法規概要</p>
                    <p class="indent-9">租稅申報實務</p>
                    <p class="indent-9">記帳相關法規概要</p>
                  </div>
                  <div class="flex h-[106px] w-[106px] shrink-0 grow items-end justify-end">
                    <font-awesome-icon
                      class="hidden text-[100px] text-primary-500 opacity-20 xl:block"
                      :icon="['fas', 'user']"
                    />
                    <img
                      class="block xl:hidden"
                      src="~/assets/img/bookkeeper/teacher_hofei.png"
                      alt="何菲"
                    />
                  </div>
                </div>
              </div>
              <div class="w-full bg-white p-4">
                <p class="mb-1 font-bold">講師經歷：</p>
                <ol class="mb-3 list-decimal pl-4">
                  <li>財政部臺北國稅局稅務員</li>
                  <li>會計師事務所查帳員</li>
                  <li>眾信聯合會計師事務所審計組長</li>
                  <li>上市科技業內部稽核師</li>
                  <li>會計師事務所執業會計師</li>
                  <li>稅務專業人員</li>
                </ol>
                <p class="mb-1 font-bold">現職：</p>
                <ol class="list-decimal pl-4">
                  <li>會計師</li>
                  <li>TKB記帳士稅法王牌老師</li>
                  <li>國家考試補習班講師</li>
                  <li>私立致理科技大學兼任講師</li>
                </ol>
              </div>
            </div>
            <div class="pt- hidden xl:block xl:w-full xl:max-w-[500px]">
              <img class="translate-y-8" src="~/assets/img/bookkeeper/teacherpichoning.png" />
            </div>
            <div class="w-full overflow-hidden rounded bg-[#FFF4E3] p-2 xl:max-w-[340px]">
              <div class="relative px-2 pt-2">
                <div class="mt-4 flex gap-2">
                  <div class="w-full">
                    <p class="pb-1 text-xl font-bold text-primary-500">曉寧</p>
                    <p>科目：會計學概要</p>
                  </div>
                  <div class="flex h-[106px] w-[106px] shrink-0 grow items-end justify-end">
                    <font-awesome-icon
                      class="hidden text-[100px] text-primary-500 opacity-20 xl:block"
                      :icon="['fas', 'user']"
                    />
                    <img
                      class="block xl:hidden"
                      src="~/assets/img/bookkeeper/teacher_xiaoning.png"
                      alt="曉寧"
                    />
                  </div>
                </div>
              </div>
              <div class="w-full bg-white p-4">
                <p class="mb-1 font-bold">證照及資格：</p>
                <ol class="mb-3 list-decimal pl-4">
                  <li>現、曾任教私立東吳大學及國立臺北商業大學</li>
                  <li>曾任某文教機構研究所、記帳士及公務人員普通考試專任教師</li>
                </ol>
                <p class="mb-1 font-bold">教學經驗：</p>
                <ol class="list-decimal pl-4">
                  <li>現、曾任教私立東吳大學及國立臺北商業大學</li>
                  <li>曾任某文教機構研究所、記帳士及公務人員普通考試專任教師</li>
                </ol>
              </div>
            </div>
          </div>
        </ZoneTemplateXPadding>

        <!-- 學員心得推薦 -->
        <div class="bg-[#FFFCEA] py-4">
          <ZoneTemplateXPadding>
            <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
              <font-awesome-icon
                class="mr-1 text-secondary-400"
                :icon="['fas', 'address-card']"
              />學員心得推薦
            </h2>
            <div class="mx-auto mb-8 max-w-[800px]">
              <youtubeVideo src="https://www.youtube.com/embed/Z5-G_CCCLtA" />
            </div>
            <div class="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="border-b-[1px] border-solid border-secondary-500 md:pb-4">
                <div class="float-left mr-3 w-full max-w-[100px] bg-white md:max-w-[200px]">
                  <img class="block w-full" src="~/assets/img/bookkeeper/s-1.png" alt="studentA" />
                </div>
                <div class="mb-2">
                  <div class="mb-2 text-2xl font-semibold tracking-wider">劉◯瓔</div>
                  <p class="text-justify leading-relaxed">
                    我是一名在會計師事務所上班的<span class="bg-yellow-300">在職人員</span
                    >，事務所本身很忙碌，常 常加班不在話下，並<span class="bg-yellow-300"
                      >沒有時間可以補習</span
                    >，只能選擇<span class="bg-yellow-300">線上教學</span>的模式，
                    <span class="bg-yellow-300">TKB</span>風格是我想要的，且碰到很有耐心的客服人員，
                    很專業很迅速地回答每一個問題，毫不猶豫選擇TKB。
                    <span class="bg-yellow-300">何菲老師講解的很詳細</span>，並且<span
                      class="bg-yellow-300"
                      >很有邏輯性的幫大家整理相關法規</span
                    >相互比較或是比較相近的地方，
                    印象最深的就是，老師用他研究的方法，教我們怎麼去解出租稅申報實務中的家戶制的個人綜所題目，
                    那邊我整整重聽了三次，因為這個方法真的是太好太棒了，真的特別感謝老師提供這個方法。
                  </p>
                </div>
              </div>
              <div class="border-b-[1px] border-solid border-secondary-500 md:pb-4">
                <div class="float-left mr-3 w-full max-w-[100px] bg-white md:max-w-[200px]">
                  <img class="block w-full" src="~/assets/img/bookkeeper/s-2.png" alt="studentB" />
                </div>
                <div class="mb-2">
                  <div class="mb-2 text-2xl font-semibold tracking-wider">呂◯學</div>
                  <p class="text-justify leading-relaxed">
                    <span class="bg-yellow-300">何菲老師讓我掌握稅法的重點</span>尤其是<span
                      class="bg-yellow-300"
                      >解題的步驟及選擇題的解法</span
                    >。
                    另外我覺得申報實務範圍很廣，很難準備，但是老師會大量做題目，做久了就會知道哪些題目是常考的。
                    <span class="bg-yellow-300">建議一定要補習</span>，才能夠<span
                      class="bg-yellow-300"
                      >事半功倍</span
                    >，尤其補習班的<span class="bg-yellow-300">總複習</span>，
                    可以快速的抓到重點，同時也一定要多寫考古題，才可以快速知道的弱點，另外要安排讀書計畫，
                    只要<span class="bg-yellow-300">永不放棄，就一定能夠金榜題名</span
                    >，我們是要考上不是要考榜首，同學們組成讀書會一起討論是最容易上榜的。
                  </p>
                </div>
              </div>

              <div class="border-b-[1px] border-solid border-secondary-500 md:pb-4">
                <div class="float-left mr-3 w-full max-w-[100px] bg-white md:max-w-[200px]">
                  <img class="block w-full" src="~/assets/img/bookkeeper/s-3.png" alt="studentA" />
                </div>
                <div class="mb-2">
                  <div class="mb-2 text-2xl font-semibold tracking-wider">劉O菱</div>
                  <p class="text-justify leading-relaxed">
                    印象最深刻，同時也是最感謝、最推薦的老師，就是會計學曉寧老師。我的會計程度很初級，很感謝老師的教學方法，
                    非常適合沒有底子的學生！老師教學很生動，講話的語氣很有趣，讓會計學變得很好玩！而且老師在講公報中的定義時，
                    花了非常多時間解釋，原本課程只有120小時，最後暴增到291小時。當時因為疫情的關係，就沒有現場的課程，老師
                    很努力想讓遠端的同學理解，竟然增加了好多時數教我們！能遇到這麼有耐心跟愛心的老師真的很幸運，謝謝曉寧老師
                    讓我融會貫通，而不是單靠背誦。也謝謝老師的教學，讓我在找工作、考會計學時，一點也不擔心，順利考上我理想的工作！
                  </p>
                </div>
              </div>
              <div class="border-b-[1px] border-solid border-secondary-500 md:pb-4">
                <div class="float-left mr-3 w-full max-w-[100px] bg-white md:max-w-[200px]">
                  <img class="block w-full" src="~/assets/img/bookkeeper/s-4.png" alt="studentB" />
                </div>
                <div class="mb-2">
                  <div class="mb-2 text-2xl font-semibold tracking-wider">王O瑩</div>
                  <p class="text-justify leading-relaxed">
                    當初其實比較了很多家，而最後選擇TKB原因是：光會計學概要就有 300 多個小時，CP
                    值真的很高！實際試聽的時候，覺得曉寧
                    老師真的講的非常清楚，連計算機怎麼按都有教，我這個完全沒有會計學基礎的門外漢，竟然都聽得懂，這個費用真的非常划算值得。
                    TKB
                    雲端函授的上課方式、設備服務，非常彈性、好用。只要有時間，無論何時何地打開手機電腦隨時都可以觀看課程，非常方便。
                    最後，真心推薦林航專員服務，很帥、很真誠、很有耐心。
                  </p>
                </div>
              </div>
              <div class="clear-both"></div>
            </div>
          </ZoneTemplateXPadding>
        </div>

        <!-- 考試資訊 -->
        <ZoneTemplateXPadding ref="anchor2">
          <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
            <font-awesome-icon class="mr-1 text-secondary-400" :icon="['fas', 'tag']" />考試資訊
          </h2>

          <div class="mb-6">
            <h3
              class="mb-4 text-center text-2xl font-semibold tracking-wider text-primary-500 sm:text-left"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'caret-right']" />考試日期
            </h3>
            <div class="mb-2 text-xl font-semibold text-secondary-600">
              <font-awesome-icon class="mr-1" :icon="['fas', 'calendar-days']" />112年
            </div>
            <div class="mb-4 flex flex-col items-start gap-3 lg:flex-row lg:items-center">
              <div class="flex items-center gap-1 text-lg">
                <span class="rounded bg-primary-50 px-2 py-1 text-primary-500">報名</span>
                <span class="tracking-wider">112/08/01(二) - 08/10(四)</span>
              </div>
              <div class="flex items-center gap-1 text-xl">
                <span class="rounded bg-primary-50 px-2 py-1 text-primary-500">考試</span>
                <span class="tracking-wider">112/11/18(六) - 11/20(一)，共3天</span>
              </div>
              <div class="flex items-center gap-1 text-xl">
                <span class="rounded bg-primary-50 px-2 py-1 text-primary-500">放榜</span>
                <span class="tracking-wider">待公告</span>
              </div>
            </div>
          </div>

          <div class="mb-6">
            <h3
              class="mb-4 text-center text-2xl font-semibold tracking-wider text-primary-500 sm:text-left"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'caret-right']" />考試科目
            </h3>
            <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
              <table class="w-full table-auto border-collapse text-center">
                <thead>
                  <tr>
                    <th
                      class="rounded-tl-lg border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    ></th>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      科目
                    </th>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      題型
                    </th>
                    <th
                      class="rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      時間
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      普通<br class="block sm:hidden" />科目<br />(佔10%)
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      國文（作文）
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      多元型式作文
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      2h
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                      rowspan="4"
                    >
                      專業<br class="block sm:hidden" />科目<br />(佔90%)
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      會計學概要
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      申論題+選擇題
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      2h
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      租稅申報實務
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      申論題
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      1.5h
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      稅務相關法規概要
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      選擇題
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      1h
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      記帳相關法規概要
                    </td>
                    <td
                      class="break-words border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      選擇題
                    </td>
                    <td class="break-words rounded-br-lg p-1 align-middle text-lg">1h</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mb-6">
            <h3
              class="mb-4 text-center text-2xl font-semibold tracking-wider text-primary-500 sm:text-left"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'caret-right']" />相關職業薪資
            </h3>
            <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
              <table class="w-full table-auto border-collapse text-center">
                <thead>
                  <tr>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      職務
                    </th>
                    <th
                      class="border-b-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white sm:border-r-[1px]"
                    >
                      月薪
                    </th>
                    <th
                      class="hidden rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white sm:table-cell"
                    >
                      業務範圍
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      財務、會計主管
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      50,000~80,000元
                    </td>
                    <td
                      class="hidden break-words border-b-[1px] border-solid border-base-300 p-1 pl-6 text-left align-middle text-lg sm:table-cell"
                      rowspan="9"
                    >
                      一、受委任辦理營業、變更、註銷、停業、復業及其他登記事項。<br />
                      二、受委任辦理各項稅捐稽徵案件之申報及申請事項。<br />
                      三、受理稅務諮詢事項。<br />
                      四、受委任辦理商業會計事務。<br />
                      五、其他經主管機關核可辦理與記帳及報稅事務有關之事項。
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      會計師
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      40,000~71,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      財務分析/財務人員
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      38,000~56,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      主辦會計
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      35,000~46,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      成本會計
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      35,000~47,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      查帳／審計人員
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      35,000~50,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      稅務人員
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      31,000~46,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      記帳／出納／一般會計
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      28,000~36,000元
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      財務會計助理
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg sm:border-r-[1px]"
                    >
                      25,000~30,000元
                    </td>
                  </tr>
                  <tr class="sm:hidden">
                    <td
                      class="break-words rounded-bl-lg border-b-[1px] border-solid border-base-300 px-2 py-1 text-left align-middle text-lg"
                      colspan="3"
                    >
                      業務範圍：<br />
                      一、受委任辦理營業、變更、註銷、停業、復業及其他登記事項。<br />
                      二、受委任辦理各項稅捐稽徵案件之申報及申請事項。<br />
                      三、受理稅務諮詢事項。<br />
                      四、受委任辦理商業會計事務。<br />
                      五、其他經主管機關核可辦理與記帳及報稅事務有關之事項。
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words rounded-bl-lg border-b-[1px] border-solid border-base-300 px-2 py-1 text-left align-middle text-lg"
                      colspan="3"
                    >
                      論件計酬：<br />
                      獨立開業、加入大型記帳士事務所接案
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words rounded-bl-lg px-2 py-1 text-left align-middle text-lg"
                      colspan="3"
                    >
                      1. 記帳費（依營業額、行業別、憑證多寡等）：2,000～7,000元/月<br />
                      2. 設立公司（依資本額、組織類型）：3,000～9,000元/件<br />
                      3. 變更（更名遷址等）：3,000～12,000元/件<br />
                      4. 其他（稅務申報或諮詢等）：2,000～8,000元/件<br />
                      ※以上收費依業界各公司不同
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mb-6">
            <h3
              class="mb-4 text-center text-2xl font-semibold tracking-wider text-primary-500 sm:text-left"
            >
              <font-awesome-icon class="mr-2" :icon="['fas', 'caret-right']" />近年錄取率
            </h3>
            <div class="w-full overflow-hidden rounded-lg border border-solid border-base-300">
              <table class="w-full table-auto border-collapse text-center">
                <thead>
                  <tr>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      年度
                    </th>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      報考人數
                    </th>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      到考人數
                    </th>
                    <th
                      class="border-b-[1px] border-r-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      及格人數
                    </th>
                    <th
                      class="rounded-tr-lg border-b-[1px] border-solid border-base-300 bg-secondary-600 p-1 align-middle text-lg font-bold text-white"
                    >
                      總及格率
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      111
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      6,959
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      4,571
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      1,052
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      23.01%
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      110
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      7,034
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      4,790
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      670
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      13.99%
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      109
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      7,380
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      5,187
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      543
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      10.47%
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      108
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      7,115
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      4,967
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      650
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      13.09%
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      107
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      7,960
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      5,515
                    </td>
                    <td
                      class="break-words border-b-[1px] border-r-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      1,052
                    </td>
                    <td
                      class="break-words border-b-[1px] border-solid border-base-300 p-1 align-middle text-lg"
                    >
                      19.08%
                    </td>
                  </tr>
                  <tr>
                    <td
                      class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 px-2 py-1 align-middle text-lg"
                    >
                      106
                    </td>
                    <td
                      class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 px-2 py-1 align-middle text-lg"
                    >
                      8,353
                    </td>
                    <td
                      class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 px-2 py-1 align-middle text-lg"
                    >
                      5,954
                    </td>
                    <td
                      class="break-words rounded-bl-lg border-r-[1px] border-solid border-base-300 px-2 py-1 align-middle text-lg"
                    >
                      311
                    </td>
                    <td class="break-words rounded-bl-lg px-2 py-1 align-middle text-lg">5.22%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="mt-6 text-center">
            <nuxt-link to="/product/toProductList">
              <ButtonS2 width="max-w-[450px]" bg-color="bg-secondary-500"
                ><font-awesome-icon
                  class="mr-1"
                  :icon="['fas', 'arrow-pointer']"
                />點這裡免費拿考古題！<br class="block sm:hidden" />TKB記帳士陪你上榜！</ButtonS2
              >
            </nuxt-link>
          </div>
        </ZoneTemplateXPadding>

        <!-- 相關影片 -->
        <div class="bg-[#FFFCEA] py-4">
          <ZoneTemplateXPadding ref="anchor3">
            <h2 class="mb-6 text-3xl font-semibold tracking-widest text-secondary-600">
              <font-awesome-icon class="mr-1 text-secondary-400" :icon="['fas', 'tag']" />相關影片
            </h2>
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
              <a
                v-for="(vitem, index) in videoItems"
                :key="index"
                class="cursor-pointer"
                @click="openVideoModal(vitem.youtubeSrc)"
              >
                <div class="mb-2 w-full">
                  <img class="block w-full" :src="vitem.imgSrc" />
                </div>
                <div class="flex items-center justify-between">
                  <p class="">{{ vitem.text }}</p>
                  <div class="whitespace-nowrap rounded-2xl bg-secondary-600 px-2 py-1 text-white">
                    觀看
                  </div>
                </div>
              </a>
            </div>
            <div class="mt-6 text-center">
              <a href="https://line.me/R/ti/p/%40385jjtfd">
                <ButtonS2 width="max-w-[450px]" bg-color="bg-secondary-500"
                  ><font-awesome-icon
                    class="mr-1"
                    :icon="['fas', 'arrow-pointer']"
                  />現在加入LINE好友！<br
                    class="block sm:hidden"
                  />獲取記帳士考試最新情報！</ButtonS2
                >
              </a>
            </div>
          </ZoneTemplateXPadding>
        </div>

        <!-- 聯絡表單 -->
        <ZoneTemplateXPadding ref="anchor4">
          <PublicForm />
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
    </ZoneTemplate>

    <!-- 學員見證彈窗 -->
    <VideoShowModal v-model="visible" :video-src="videonsrc" :close="myVideoMethod" />
  </div>
</template>
<script setup>
import ZoneIndexBanner from '@/components/banner/ZoneIndexBanner.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneInfoTitle from '@/components/views/zone/ZoneInfoTitle.vue'
import ZoneInfoContent from '@/components/views/zone/ZoneInfoContent.vue'
import ZoneInfoListRight from '@/components/views/zone/ZoneInfoListRight.vue'
import ZoneInfoListLeft from '@/components/views/zone/ZoneInfoListLeft.vue'
import ZoneInfoNewItem from '@/components/views/zone/ZoneInfoNewItem.vue'
import ZoneBankNav from '@/components/views/zone/ZoneBankNav'
import ZoneInfoArticleItem from '@/components/views/zone/ZoneInfoArticleItem.vue'
import VideoShowModal from '@/components/modal/VideoShowModal.vue'
import youtubeVideo from '@/components/video/youtubeVideo.vue'
import ButtonS2 from '@/components/button/ButtonS2.vue'
import free6 from '@/assets/img/bookkeeper/free6.jpeg'
import free7 from '@/assets/img/bookkeeper/free7.jpeg'
import free8 from '@/assets/img/bookkeeper/free8.jpg'
import free9 from '@/assets/img/bookkeeper/free9.jpg'

const route = useRoute()
// 引入api資料
const examTypeData = inject('examTypeData') // 取得公職專區分類
const examExamsData = inject('examExamsData') // 取得所有考試
const ExamsData = examExamsData.exams
const examTypeId = ref(null)
const examId = ref(null)
// 取得route query 大分類exam_type_id
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id
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
    examIcon: ['fas', 'paste'],
    toSrc: `/govArchaeology/toDownloadList?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '35832739',
    examName: '線上測驗',
    examIcon: ['fas', 'map'],
    toSrc: `/examData/toBookKeeperTest?exam_type_id=${examTypeId.value}`
  }
])
provide('passmainmenu', newExamsData)
provide('passsubmenu', subMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')
const activeCourseTab = ref(0)
const videonsrc = ref('')
const visible = ref(false)
const itemsRef = reactive([])
const anchor0 = ref(null)
const anchor1 = ref(null)
const anchor2 = ref(null)
const anchor3 = ref(null)
const anchor4 = ref(null)
const baseForm = reactive([])
const zoneBankNav = ref(null)
const zoneBankNavRef = ref(null)
// 首頁輪播banner start
const indexBannerData = reactive([
  {
    title: '圖片說明',
    imgSrcPc: 'https://www.tkbtv.com.tw/upload/tv_ad/20220407151701164993.jpg',
    imgSrcMob: 'https://www.tkbtv.com.tw/upload/tv_ad/20220407151701164993.jpg',
    toSrc: 'https://www.tkbgo.com.tw/go_edm/edm490/index.jsp?print_id=9522'
  },
  {
    title: '圖片說明',
    imgSrcPc: 'https://www.tkbtv.com.tw/upload/tv_ad/20220510092443203252.webp',
    imgSrcMob: 'https://www.tkbtv.com.tw/upload/tv_ad/20220510092443203252.webp',
    toSrc: 'https://www.tkbgo.com.tw/news/toNews.jsp?print_id=9522&news_id=3952'
  },
  {
    title: '圖片說明',
    imgSrcPc: 'https://www.tkbtv.com.tw/upload/tv_ad/20200916100844133967.webp',
    imgSrcMob: 'https://www.tkbtv.com.tw/upload/tv_ad/20200916100844133967.webp',
    toSrc: 'https://www.tkbgo.com.tw/go_edm/edm223/index.jsp?print_id=9522'
  },
  {
    title: '圖片說明',
    imgSrcPc: 'https://www.tkbtv.com.tw/upload/tv_ad/20200326135333119074.webp',
    imgSrcMob: 'https://www.tkbtv.com.tw/upload/tv_ad/20200326135333119074.webp',
    toSrc: 'https://www.tkbgo.com.tw/go_edm/edm505/index.jsp?print_id=9522'
  }
])
const NavData = reactive([
  { labelShort: '消息', labelFull: '最新消息' },
  { labelShort: '課程', labelFull: '課程總覽' },
  { labelShort: '考試', labelFull: '考試資訊' },
  { labelShort: '影片', labelFull: '相關影片' },
  { labelShort: '聯絡', labelFull: '聯絡我們' }
])
const videoItems = reactive([
  {
    imgSrc: free7,
    youtubeSrc: 'https://www.youtube.com/embed/Q_snoNlztg4',
    text: '【記帳士】不可不知的法令！記帳士稅法趨勢講座Part1'
  },
  {
    imgSrc: free6,
    youtubeSrc: 'https://www.youtube.com/embed/Y_soooB44JA',
    text: '【萌萌懂懂】記帳士招考必知ＱＡ'
  },
  {
    imgSrc: free8,
    youtubeSrc: 'https://www.youtube.com/embed/Qsy2X07NjW4',
    text: '【記帳士】教學系列EP2：史上最狂記實轉虛教學，曉寧老師用實例讓你秒懂會計！'
  },
  {
    imgSrc: free9,
    youtubeSrc: 'https://www.youtube.com/embed/Z5-G_CCCLtA',
    text: '【記帳士】在職媽媽分享記帳士上榜心得！考科如何準備？申論題這樣拿分！'
  }
])
const goheaderHeight = inject('goHeaderHeight')
const scrollTo = inject('scrollTo')
onMounted(() => {
  //* 目標要包在最外層，設定ref=anchor+index
  itemsRef.push(anchor0.value.$el)
  itemsRef.push(anchor1.value.$el)
  itemsRef.push(anchor2.value.$el)
  itemsRef.push(anchor3.value.$el)
  itemsRef.push(anchor4.value.$el)
  baseForm.push(anchor4.value.$el)
  zoneBankNavRef.value = zoneBankNav.value.$el.clientHeight
})

const openVideoModal = (item) => {
  visible.value = true
  const autoPlay = '?autoplay=0&enablejsapi=1'
  videonsrc.value = item + autoPlay
}
const myVideoMethod = () => {
  visible.value = false
  videonsrc.value = ''
}

const scrollToTarget = (target, zoneBankNavRef) => {
  const navBarHeight = zoneBankNavRef
  const headerHeight = goheaderHeight.value
  const scrollPosition = target.offsetTop - headerHeight - navBarHeight - 10
  scrollTo(scrollPosition)
}
</script>
<style lang="scss" scoped>
.courseactive {
  box-shadow: 0px 10px 10px rgba(80, 80, 80, 0.247);
  @apply bg-primary-500;
}
</style>
