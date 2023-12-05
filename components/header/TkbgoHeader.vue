<template>
  <header
    ref="goHeaderElement"
    class="header h-10 bg-white shadow-[0_0px_8px_rgb(0,0,0,0.2)] xl:h-18"
  >
    <!-- 透黑遮罩 -->
    <div
      v-show="
        showSubMenu[1] ||
        showSubMenu[2] ||
        showSubMenu[3] ||
        showSubMenu[4] ||
        showSubMenu[5] ||
        (isSearchBtn && isSearchForm === true < breakpointsInt('sm')) ||
        (showMenu === true && windowWidth < breakpointsInt('xl'))
      "
      class="nav-list-mask"
      @click.stop="closeHeaderMask()"
    ></div>

    <div class="container flex h-full flex-wrap items-center py-2">
      <a
        class="mr-1 flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded border border-solid border-secondary-500 xl:hidden"
        @click="toggleMenu"
      >
        <span class="paddin-[1px] block text-[23px] text-secondary-500">☰</span>
      </a>
      <div class="logo inline-block w-[110px] xl:w-[176px]">
        <nuxt-link to="/">
          <img :src="TkbLogo" alt="TKBGO" />
        </nuxt-link>
      </div>
      <!-- 手機板選單底板 -->
      <div
        v-show="showMenu"
        :class="{ block: showMenu || windowWidth > breakpointsInt('lg') }"
        class="fixed left-0 top-10 z-10 h-full w-[320px] overflow-x-hidden bg-white shadow-[0_4px_4px_rgb(0,0,0,0.1)] xl:static xl:contents xl:h-auto xl:w-full xl:shadow-[0_4px_4px_rgb(0,0,0,0)]"
      >
        <!-- <ul class="header-nav ml-5 xl:flex"> -->
        <ul class="header-nav mb-[220px] flex flex-col p-4 xl:mb-0 xl:ml-5 xl:flex-row xl:p-0">
          <!-- 關閉手機選單按鈕 -->
          <li class="navs-main-item">
            <div class="block cursor-pointer p-2 xl:hidden" @click="closeSideNav()">
              <font-awesome-icon class="text-xl" :icon="['fas', 'xmark']" />
            </div>
          </li>

          <!-- <div class="nd-box">
                  <ul class="nd-lists-type">
                    <li class="ndList-item-b">
                      <nuxt-link to="/schoolZone/toGraduateIndex" class="nav-drop-link  -->
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(1)"
              ><font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[1] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              精選課程
              <font-awesome-icon
                class="!hidden xl:!inline-block"
                :icon="['fas', 'caret-down']"
                size="sm"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[1]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <div id="classPc" class="nd-box">
                  <div v-for="(category, index) in courseData" :key="index" class="nd-lists">
                    <span class="nd-lists-title">
                      <font-awesome-icon :icon="['fas', 'caret-right']" /> {{ category.name }}
                    </span>
                    <ul class="ndList-s">
                      <li
                        v-for="(item, itemIndex) in category.children"
                        :key="itemIndex"
                        class="ndList-item-b"
                      >
                        <!-- <a
                          :href="item.href"
                          :data-href="item.dateHref"
                          :data-group="item.dateGroup"
                          :data-type="item.dateType"
                          class="wrap pcHref"
                        > -->
                        <nuxt-link class="wrap pcHref nav-drop-link" :to="item.linkSrc">
                          {{ item.name }}
                        </nuxt-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(11)">
              <!-- <a class="navs_main_links" href="https://www.tkbgo.com.tw/video/toVideoIndex.jsp"> -->
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[11] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              影音專區</a
            >
            <transition name="slide">
              <div
                v-show="showSubMenu[11]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown one-dropdown"
              >
                <ul class="nav-drop-group">
                  <li class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" to="/video/toVideoIndex">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />影音專區</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(2)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[2] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              升學專區
              <font-awesome-icon
                class="ml-1 !hidden xl:!inline-block"
                :icon="['fas', 'caret-down']"
                size="sm"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[2]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <div class="nd-box">
                  <ul class="nd-lists-type">
                    <li class="ndList-item-b">
                      <nuxt-link to="/schoolZone/toGraduateIndex" class="nav-drop-link gaHeader"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1 hidden align-middle md:inline-block"
                        />研究所
                      </nuxt-link>
                    </li>
                    <li class="ndList-item-b">
                      <nuxt-link to="/schoolZone/toTransfer" class="nav-drop-link gaHeader"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />轉學考
                      </nuxt-link>
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}schoolZone/toGraduateIndex.jsp?graduate_type=127"
                        class="nav-drop-link gaHeader"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />高升大</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(3)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[3] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              公職就業
              <font-awesome-icon
                class="ml-1 !hidden xl:!inline-block"
                :icon="['fas', 'caret-down']"
                size="sm"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[3]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <div class="nd-box">
                  <ul class="nd-lists-type">
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                        class="nav-drop-link wrap gaHeader"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />公職考試</a
                      >
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                        class="nav-drop-link"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />國營就業</a
                      >
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                        class="nav-drop-link"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />銀行考試</a
                      >
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                        class="nav-drop-link"
                        ><font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />專業證照</a
                      >
                    </li>
                  </ul>
                  <!-- <div class="nd-lists"></div> -->
                </div>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(4)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[4] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              語言專區
              <font-awesome-icon
                class="ml-1 !hidden xl:!inline-block"
                :icon="['fas', 'caret-down']"
                size="sm"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[4]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <div class="nd-box">
                  <ul class="nd-lists-type">
                    <li class="ndList-item-b">
                      <a
                        target="_blank"
                        href="${BASE_URL}zone/english/toIndex.jsp"
                        class="nav-drop-link"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />美語專區
                      </a>
                    </li>
                    <li class="ndList-item-b">
                      <a
                        target="_blank"
                        href="${BASE_URL}japanZone/toJpnIndex.jsp"
                        class="nav-drop-link"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />日文專區
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(5)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[5] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              最新消息
              <font-awesome-icon
                class="ml-1 !hidden xl:!inline-block"
                :icon="['fas', 'caret-down']"
                size="sm"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[5]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <div class="nd-box">
                  <ul class="nd-lists-type">
                    <li v-for="(item, index) in newsData" :key="index" class="ndList-item-b">
                      <nuxt-link
                        :to="`/news/toNewsIndex?type_id=${item.newsTypeId}`"
                        class="nav-drop-link"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />{{ item.newsTypeName }}
                      </nuxt-link>
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}review/toReviewList.jsp?ts_pc1=2630"
                        class="nav-drop-link"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />學員心得
                      </a>
                    </li>
                    <li class="ndList-item-b">
                      <a
                        href="${BASE_URL}lecture/toLectureList.jsp?type_id=1450"
                        class="nav-drop-link"
                      >
                        <font-awesome-icon
                          :icon="['fas', 'caret-right']"
                          size="sm"
                          class="mr-1"
                        />講座專區
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links" @click.stop="toggleSubMenu(12)">
              <!-- <a class="navs_main_links"  href="https://www.tkbgo.com.tw/video/toVideoIndex.jsp"> -->
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[12] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              線上書城
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[12]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown one-dropdown"
              >
                <ul class="nav-drop-group">
                  <li class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" to="/book/toBookIndex">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />線上書城</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links gaHeader" @click.stop="toggleSubMenu(13)">
              <!-- <a class="navs_main_links"  href="https://www.tkbgo.com.tw/livestream/toIndex.jsp"> -->
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[13] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              <img
                src="https://www.tkbgo.com.tw/tkbgo/img/liveIcon.svg"
                class="inline-block hidden pr-1 align-middle md:inline-block"
              />
              直播專區</a
            >
            <transition name="slide">
              <div
                v-show="showSubMenu[13]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown one-dropdown"
              >
                <ul class="nav-drop-group">
                  <li class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" to="/livestream/toIndex">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />
                      <img
                        src="https://www.tkbgo.com.tw/tkbgo/img/liveIcon.svg"
                        class="inline-block pr-1 align-middle"
                      />直播專區</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs_main_links gaHeader" @click.stop="toggleSubMenu(14)">
              <!-- <a class="navs_main_links"  href="https://www.tkbgo.com.tw/examCalendar/toExamCalendarIndex.jsp"> -->
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[14] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />
              考試行事曆</a
            >
            <transition name="slide">
              <div
                v-show="showSubMenu[14]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown one-dropdown"
              >
                <ul class="nav-drop-group">
                  <li class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" to="/examCalendar/toExamCalendarIndex">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />考試行事曆</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </li>
        </ul>
      </div>

      <div class="member-list ml-auto flex h-[100%] items-center gap-2">
        <div class="flex items-center">
          <div
            class="hidden h-[100%] items-center justify-center overflow-hidden rounded-[20px] border border-solid border-secondary-500 bg-white sm:flex"
          >
            <input
              id="keyword"
              class="w-[100px] py-[4px] pl-[12px] pr-[4px] focus:outline-none"
              type="text"
              name="keyword"
              placeholder="請輸入"
            />
            <button
              class="mx-2 inline-block cursor-pointer border-0 outline-none"
              type="submit"
              onclick="sendSearch(1)"
            >
              <img src="~/assets/img/others/search.webp" alt="搜尋" />
            </button>
          </div>

          <!-- <div class="searchBox-mb block sm:hidden">
            <div id="openSearch"> -->
          <div
            v-if="isSearchBtn"
            class="searchBox-mb block cursor-pointer sm:hidden"
            @click="toggleSearchForm"
          >
            <div class="icon-box relative h-[32px] w-[32px] rounded-full bg-secondary-500">
              <img
                class="absolute left-1/2 top-1/2 h-[12px] -translate-x-1/2 -translate-y-1/2"
                src="~/assets/img/others/search-btn.webp"
                alt="搜尋"
              />
            </div>
          </div>
          <!-- </div> -->
        </div>
        <div class="member-item">
          <a
            class="shop-cart gaHeader duration-300 ease-in"
            href="${BASE_URL}${TM!=null&&!('' eq TM.talk_id_no)?'orders/toShopcart.jsp':'ordersTemp/toShopcart.jsp'}"
          >
            <div class="element_notice buying_cart_count_tab">
              <span></span>
            </div>
            <div class="relative h-[32px] w-[32px] cursor-pointer rounded-full bg-secondary-500">
              <img
                class="absolute left-1/2 top-1/2 h-[14px] -translate-x-1/2 -translate-y-1/2"
                src="~/assets/img/others/cart.webp"
                alt="購物車"
              />
            </div>
          </a>
        </div>

        <div id="signinBtn" class="member-item flex justify-center">
          <div
            class="cursor-pointer rounded-[20px] border border-solid border-secondary-500 bg-white px-[12px] py-[2px] font-bold text-secondary-500 duration-300 ease-in"
          >
            登入
          </div>
        </div>

        <div id="#user-dropdowm" class="member-item hidden">
          <div class="item-btn login-icon-mb">
            <div class="icon-box">
              <img src="~/assets/img/others/user.webp" alt="使用者" />
            </div>
          </div>

          <ul
            id="user-dropdowm"
            class="fixed top-[65px] w-[150px] -translate-x-[100px] rounded bg-[rgba(255,255,255,.99)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,.14)]"
          >
            <li class="drop-item flex items-center justify-end">
              <div class="drop-top user-drop-close">
                <font-awesome-icon :icon="['fas', 'xmark']" size="lg" />
              </div>
            </li>

            <li class="flex items-center justify-end">
              <a id="member_profile" class="my-1 w-full cursor-pointer px-1 text-base-500"
                ><font-awesome-icon :icon="['fas', 'user-gear']" />帳戶</a
              >
            </li>
            <hr class="my-1 border-[0.9px] border-solid text-base-500" />
            <li class="flex items-center justify-end">
              <a class="my-1 w-full cursor-pointer px-1 text-base-500" onclick="signin_logout()">
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" />登出</a
              >
            </li>
          </ul>
        </div>

        <div class="member-item flex items-center">
          <nuxt-link class="item-btn fade show" href="${BASE_URL}service/indexQA.jsp">
            <div class="icon-box relative h-[32px] w-[32px] rounded-full bg-secondary-500">
              <img
                class="absolute left-1/2 top-1/2 h-[14px] -translate-x-1/2 -translate-y-1/2"
                src="~/assets/img/others/question.webp"
                alt="QA"
              />
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- 手機版搜尋 -->
      <div
        v-show="isSearchForm"
        id="searchDrop"
        class="search-drop fixed right-0 top-10 flex h-10 w-full sm:hidden"
      >
        <div class="m-0 flex h-full w-full bg-white px-3 py-1 shadow-inner hover:shadow-base-50">
          <input
            id="keyword2"
            class="m-auto w-[80%] text-lg focus:outline-none"
            type="text"
            name="keyword"
            placeholder="關鍵字搜尋"
          />
          <button class="m-0 inline-block bg-transparent" type="submit" onclick="sendSearch(2)">
            <img class="px-1" src="~/assets/img/others/search-gary-btn.webp" alt="搜尋" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import TkbLogo from '@/assets/img/others/logo_tkb.svg'

const windowResizeEvent = inject('windowResize', ref(null))
const windowWidth = ref(0)
const { breakpointsInt } = useTailwindConfig()
const isSearchBtn = ref(true) // 手機版搜尋按鈕是否顯示
const isSearchForm = ref(false) // 手機版搜尋區塊是否顯示
const goHeaderElement = ref(null)
const updateHeaderHeight = inject('updateHeaderHeight', () => {})
const showHeaderMask = ref(false) // 遮罩
const showMenu = ref(false) // 漢堡線點擊手機版主選單否顯示
const showSubMenu = reactive({
  // 0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
})

// Resize狀態
const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < breakpointsInt('sm')) {
    isSearchBtn.value = true
    isSearchForm.value = false
  } else {
    isSearchBtn.value = false
    isSearchForm.value = true
  }
  if (windowWidth.value < breakpointsInt('xl')) {
    showMenu.value = false
  } else {
    showMenu.value = true
  }
}
const toggleMenu = () => {
  showMenu.value = !showMenu.value
  if (isSearchForm.value) {
    isSearchForm.value = false
  }
}
const toggleSubMenu = (buttonIndex) => {
  // 點擊其他選項，會收起其他開啟的子選單
  for (let index = 0; index < Object.keys(showSubMenu).length; index++) {
    if (index !== buttonIndex) {
      showSubMenu[index] = false
    }
  }
  // 點擊開合子選單
  showSubMenu[buttonIndex] = !showSubMenu[buttonIndex]
  // 遮罩出現與變換
  if (windowWidth.value > breakpointsInt('lg')) {
    showHeaderMask.value = !showHeaderMask.value
  }
}
// 點擊遮罩關閉
const closeHeaderMask = () => {
  if (showMenu.value && windowWidth.value < breakpointsInt('xl')) {
    showMenu.value = false
  }
  for (let index = 0; index < Object.keys(showSubMenu).length; index++) {
    showSubMenu[index] = false
  }
}
// 關閉手機板選單
const closeSideNav = () => {
  showMenu.value = false
  showHeaderMask.value = false
}
watch(windowResizeEvent, () => {
  updateHeaderHeight(goHeaderElement.value.clientHeight)
  handleResize()
})

onMounted(() => {
  window.addEventListener('resize', handleResize)
  updateHeaderHeight(goHeaderElement.value.clientHeight)
  // 點擊頁面其他處可以收合子選單
  window.addEventListener('click', () => {
    for (let index = 0; index < Object.keys(showSubMenu).length; index++) {
      showSubMenu[index] = false
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleSearchForm = () => {
  if (isSearchBtn.value && windowWidth.value < breakpointsInt('sm')) {
    isSearchForm.value = !isSearchForm.value
    if (showMenu.value && windowWidth.value < breakpointsInt('lg')) {
      showMenu.value = false
    }
  }
}

let courseData = reactive([])
const { data: courseRes } = await useApi('/api/lecture/header')
courseData = courseRes.value.data

let newsData = reactive([])
const { data: res } = await useApi('/api/news/header')
newsData = res.value.data
</script>

<style lang="scss" scoped>
.nav-list-mask {
  @apply fixed left-0 top-[50px] z-[-1] h-full w-full cursor-pointer overflow-hidden bg-black opacity-40 xl:top-[90px];
}

.navs-main-item {
  @apply flex flex-wrap items-center justify-end;
  &:not(:first-child):not(:last-child) {
    @apply border-b border-solid border-base-300 xl:border-0;
  }
}
.navs_main_links {
  // @apply cursor-pointer text-[0.95rem] duration-100 ease-in hover:text-primary-500;
  @apply my-2 w-full cursor-pointer px-1 text-2xl duration-100 ease-in hover:text-primary-500 xl:my-0 xl:px-0 xl:text-[0.95rem];
}

.nav-dropdown {
  // @apply fixed left-0 top-[90px] z-10 w-full bg-[rgba(255,255,255,.95)] pb-4 pt-3 shadow-[0,8px,16px,0px,rgba(0,0,0,.15)];
  @apply left-0 top-[unset] z-10 w-full xl:fixed xl:top-[90px] xl:bg-[rgba(255,255,255,.95)] xl:shadow-[0_8px_16px_0px_rgb(0,0,0,.15)];
}
.one-dropdown {
  @apply block xl:hidden;
}
.nd-box {
  // @apply mx-auto w-[1100px];
  @apply mx-auto flex w-full flex-col flex-wrap xl:w-[1100px] xl:flex-row;
}
.nav-drop-group {
  @apply mx-auto flex w-full flex-col flex-wrap xl:w-[1100px] xl:flex-row;
}
.nav-drop-item {
  @apply flex h-auto items-center pl-2 xl:h-[65px] xl:flex-[0_1_156px];
}
.nav-drop-link {
  @apply inline-block cursor-pointer p-2 text-xl duration-100 ease-in hover:text-primary-500 xl:text-sm;
}
.nd-lists {
  @apply float-left mb-4 w-[150px];
}

.nd-lists-title {
  @apply mb-2 block;
}

.nd-lists-type {
  @apply flex h-[100%] w-[100%] flex-wrap items-center justify-start;
}

.ndList-item {
  @apply block px-2 text-sm leading-6;
  // @apply border-t border-solid border-base-300 xl:border-0;
  // @apply flex h-auto items-center pl-2 xl:h-[65px] xl:flex-[0_1_156px];
}

.ndList-item-b {
  // @apply h-[65px] w-[150px] leading-[65px];
  // @apply w-[150px] leading-[65px];
  @apply w-full md:w-[150px] md:leading-[65px];
  @apply border-t border-solid border-base-300 xl:border-0;
}

// 手機版主選單樣式
.slide-leave-active,
.slide-enter-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  transform: translateY(-10px);
  opacity: 0;
}
.slide-leave-active {
  opacity: 1;
  transition: all 0.3s ease;
}
.slide-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
