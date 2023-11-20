<template>
  <header class="header z-[90] h-10 bg-white shadow-[0_4px_4px_0px_rgb(0,0,0,.06)] xl:h-18">
    <!-- nav-list Mask -->
    <div
      v-show="
        (isSearchBtn && isSearchForm === true < breakpointsInt('sm')) ||
        (showSubMenu[1] === true && windowWidth > breakpointsInt('xl')) ||
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
        <img class="h-[32px] w-[32px]" src="~/assets/img/book/bars.svg" alt="bar" />
      </a>
      <div class="logo inline-block w-[110px] xl:w-[176px]">
        <nuxt-link to="/zone/book/toBookIndex"
          ><img class="h-5 lg:h-auto" src="~/assets/img/book/logo.svg" alt="BookLogo"
        /></nuxt-link>
      </div>
      <div
        v-show="showMenu"
        :class="{ block: showMenu || windowWidth > breakpointsInt('xl') }"
        class="fixed left-0 top-10 z-10 h-full w-[320px] overflow-x-hidden bg-white shadow-[0_4px_4px_rgb(0,0,0,0.1)] xl:static xl:contents xl:h-auto xl:w-full xl:shadow-[0_4px_4px_rgb(0,0,0,0)]"
      >
        <ul class="header-nav mb-[220px] flex flex-col p-4 xl:mb-0 xl:ml-5 xl:flex-row xl:p-0">
          <li class="navs-main-item">
            <div class="block cursor-pointer p-2 xl:hidden" @click="closeSideNav()">
              <font-awesome-icon class="text-xl" :icon="['fas', 'xmark']" />
            </div>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs-main-links" @click.stop="toggleSubMenu(0)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[0] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />素養教育
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[0]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown one-dropdown"
              >
                <ul class="nav-drop-group">
                  <li class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" to="/zone/book/literacy/toIndex">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />素養教育
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li class="navs-main-item xl:mr-3">
            <a class="navs-main-links" @click.stop="toggleSubMenu(1)">
              <font-awesome-icon
                class="mr-1 !inline-block xl:!hidden"
                :class="showSubMenu[1] ? 'rotate-90' : 'rotate-0'"
                :icon="['fas', 'caret-right']"
              />書籍分類<font-awesome-icon
                class="ml-1 !hidden xl:!inline-block"
                :icon="['fa', 'caret-down']"
              />
            </a>
            <transition name="slide">
              <div
                v-show="showSubMenu[1]"
                :class="{ block: showSubMenu || windowWidth > breakpointsInt('xl') }"
                class="nav-dropdown"
              >
                <ul class="nav-drop-group">
                  <li v-for="(item, index) in items" :key="index" class="nav-drop-item">
                    <nuxt-link class="nav-drop-link" :to="item.linkSrc">
                      <font-awesome-icon
                        class="mr-1 !hidden xl:!inline-block"
                        :icon="['fas', 'caret-right']"
                      />{{ item.linkName }}
                    </nuxt-link>
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
              <div class="drop-top user-drop-close"><i class="fas fa-times"></i></div>
            </li>

            <li class="flex items-center justify-end">
              <a id="member_profile" class="my-1 w-full cursor-pointer px-1 text-base-500"
                ><i class="fas fa-user-cog"></i>帳戶</a
              >
            </li>
            <hr class="my-1 border-[0.9px] border-solid text-base-500" />
            <li class="flex items-center justify-end">
              <a class="my-1 w-full cursor-pointer px-1 text-base-500" onclick="signin_logout()"
                ><i class="fas fa-sign-out-alt"></i>登出</a
              >
            </li>
          </ul>
        </div>

        <div class="member-item flex items-center">
          <nuxt-link class="item-btn fade show" to="/service/indexQA">
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
const windowResizeEvent = inject('windowResize', ref(null))
const { breakpointsInt } = useTailwindConfig()
const isSearchBtn = ref(true) // 手機版搜尋按鈕是否顯示
const isSearchForm = ref(false) // 手機版搜尋區塊是否顯示
const showMenu = ref(false) // 漢堡線點擊手機版主選單否顯示
const showHeaderMask = ref(false) // 遮罩
const showSubMenu = reactive({
  0: false,
  1: false
})
const windowWidth = ref(0)
const items = reactive([
  {
    linkName: '升學考試',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '公職考試',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '國民營考試',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '消防叢書',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '素養教育',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: 'AI、程式設計',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '證照檢定',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '大專用書',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '產業叢書',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '產業叢書',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '一般圖書',
    linkSrc: '/zone/book/toBookList'
  },
  {
    linkName: '統計研究(數位光碟)',
    linkSrc: '/zone/book/toBookList'
  }
])
watch(windowResizeEvent, () => {
  handleResize()
})
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
  window.addEventListener('click', () => {
    showSubMenu[0] = false
    showSubMenu[1] = false
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
const toggleMenu = () => {
  showMenu.value = !showMenu.value
  if (isSearchForm.value) {
    isSearchForm.value = false
  }
}
const toggleSubMenu = (buttonIndex) => {
  showSubMenu[buttonIndex] = !showSubMenu[buttonIndex]
  if (windowWidth.value > breakpointsInt('xl')) {
    if (buttonIndex === 1) {
      showHeaderMask.value = !showHeaderMask.value
    }
  }
}
const toggleSearchForm = () => {
  if (isSearchBtn.value && windowWidth.value < breakpointsInt('sm')) {
    isSearchForm.value = !isSearchForm.value
    if (showMenu.value && windowWidth.value < breakpointsInt('lg')) {
      showMenu.value = false
    }
  }
}

const closeSideNav = () => {
  showMenu.value = false
  showHeaderMask.value = false
}
// 點擊遮罩關閉
const closeHeaderMask = () => {
  if (isSearchForm.value && windowWidth.value < breakpointsInt('sm')) {
    isSearchForm.value = false
  }
  if (showMenu.value && windowWidth.value < breakpointsInt('xl')) {
    showMenu.value = false
  }
  showSubMenu[1] = false
}

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
.navs-main-links {
  @apply my-2 w-full cursor-pointer px-1 text-2xl duration-100 ease-in hover:text-primary-500 xl:my-0 xl:px-0 xl:text-[0.95rem];
}
.one-dropdown {
  @apply block xl:hidden;
}
.nav-dropdown {
  @apply left-0 top-[unset] z-10 w-full xl:fixed xl:top-[90px] xl:bg-[rgba(255,255,255,.95)] xl:shadow-[0_8px_16px_0px_rgb(0,0,0,.15)];
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
