<template>
  <div>
    <div
      v-show="
        (isSearchBtn && isSearchForm) ||
        (typeof collapseActiveName == 'string' &&
          collapseActiveName != '' &&
          windowWidth >= breakpointsInt('lg')) ||
        (isMainMenu && windowWidth < breakpointsInt('lg'))
      "
      class="fixed left-0 top-0 z-50 h-full w-full overflow-clip bg-black opacity-40"
      @click="handleMask"
    ></div>
    <header
      class="fixed left-0 top-0 z-50 h-10 w-full bg-white shadow-[0_0px_8px_rgb(0,0,0,0.2)] lg:h-18 lg:bg-opacity-95"
    >
      <div class="container flex h-full items-center">
        <div class="flex h-6 w-full justify-between gap-1 lg:h-12 lg:justify-start lg:gap-0">
          <nuxt-link
            v-if="windowWidth >= breakpointsInt('lg')"
            class="my-auto mr-2 inline-block w-[140px] lg:flex-initial"
            to="/zone/english/toIndex"
            ><img
              class="h-5 lg:h-auto"
              src="@/assets/img/tkbgo_english/logo_tkbgo_english.svg"
              alt="TKB美語"
              title="TKB美語"
          /></nuxt-link>
          <!-- 次選單 start -->
          <div
            v-show="isMainMenu"
            :class="{ block: isMainMenu || windowWidth > breakpointsInt('lg') }"
            class="fixed left-0 top-10 max-h-[calc(100%-50px)] w-full overflow-y-auto bg-white px-2 py-1 lg:static lg:flex lg:max-h-none lg:flex-1 lg:items-center lg:overflow-y-visible lg:bg-transparent lg:px-0 lg:py-0"
          >
            <el-collapse v-model="collapseActiveName" accordion @change="handleCollapseChange">
              <el-collapse-item name="course" is-el-collapse>
                <template #title>
                  <div class="flex">
                    <div
                      v-if="windowWidth < breakpointsInt('lg')"
                      class="flex w-8 items-center justify-center"
                    >
                      <font-awesome-icon :icon="['fas', 'book-open']" />
                    </div>
                    精選課程
                  </div>
                  <span class="el-collapse-item__pc-arrow">
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                  </span>
                </template>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />多益
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />托福
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />雅思
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />GRE
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />GMAT
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />英文文法
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />研究所英文
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />商務英文
                </nuxt-link>
              </el-collapse-item>
              <el-collapse-item name="news" is-el-collapse>
                <template #title>
                  <div class="flex">
                    <div
                      v-if="windowWidth < breakpointsInt('lg')"
                      class="flex w-8 items-center justify-center"
                    >
                      <font-awesome-icon :icon="['far', 'newspaper']" />
                    </div>
                    熱門資訊
                  </div>
                  <span class="el-collapse-item__pc-arrow">
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                  </span>
                </template>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />最新消息
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />精選文章
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />英文講座
                </nuxt-link>
              </el-collapse-item>
              <el-collapse-item>
                <template #title>
                  <nuxt-link to="" class="flex">
                    <div
                      v-if="windowWidth < breakpointsInt('lg')"
                      class="flex w-8 items-center justify-center"
                    >
                      <font-awesome-icon :icon="['fas', 'tv']" />
                    </div>
                    影音專區
                  </nuxt-link>
                </template>
              </el-collapse-item>
              <el-collapse-item name="experience" is-el-collapse>
                <template #title>
                  <div class="flex">
                    <div
                      v-if="windowWidth < breakpointsInt('lg')"
                      class="flex w-8 items-center justify-center"
                    >
                      <font-awesome-icon :icon="['fas', 'face-smile']" />
                    </div>
                    學員心得
                  </div>
                  <span class="el-collapse-item__pc-arrow">
                    <font-awesome-icon :icon="['fa', 'caret-down']" />
                  </span>
                </template>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />多益金證
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />多益藍證
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />托福
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />雅思
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />5人小班
                </nuxt-link>
                <nuxt-link to="">
                  <font-awesome-icon
                    v-if="windowWidth >= breakpointsInt('lg')"
                    :icon="['fas', 'caret-right']"
                  />GRE
                </nuxt-link>
              </el-collapse-item>
              <el-collapse-item>
                <template #title>
                  <nuxt-link to="" class="flex">
                    <div
                      v-if="windowWidth < breakpointsInt('lg')"
                      class="flex w-8 items-center justify-center"
                    >
                      <font-awesome-icon :icon="['fas', 'chalkboard-user']" />
                    </div>
                    頂尖師資
                  </nuxt-link>
                </template>
              </el-collapse-item>
              <el-collapse-item class="group">
                <template #title>
                  <nuxt-link
                    to="https://www.tkbgo.com.tw/go_edm/edm703/index.jsp"
                    class="flex lg:gap-1"
                  >
                    <div class="flex w-8 items-center justify-center lg:w-auto">
                      <svg
                        width="23"
                        height="21"
                        viewBox="0 0 23 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="stroke-base-600 transition duration-300 group-hover:stroke-primary-500"
                          d="M19.0319 14.1494C19.4433 14.4895 19.7036 15.0022 19.7036 15.5656C19.7036 16.1291 19.4381 16.6519 19.0163 16.992"
                          stroke-width="1.3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          class="stroke-base-600 transition duration-300 group-hover:stroke-primary-500"
                          d="M20.3025 12.8956C21.0471 13.5555 21.5105 14.5098 21.5105 15.5707C21.5105 16.6316 21.0367 17.6012 20.2764 18.2661"
                          stroke-width="1.3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          class="stroke-base-600 transition duration-300 group-hover:stroke-primary-500"
                          d="M11.4975 19.5198L11.9401 17.0985L14.4343 17.2153C15.0747 17.2457 15.3611 16.8447 15.4705 16.3219L14.7727 15.2965L15.7933 14.7432L16.0953 13.2813H17.0742C17.9438 13.2813 17.8709 12.6366 17.621 12.063L16.0901 8.57572C16.1422 8.2407 16.163 7.93613 16.163 7.62649C16.163 5.57574 15.4653 3.51992 13.5543 2.44886C9.31577 0.0681669 1.37506 2.03262 1.37506 7.62141C1.37506 8.51481 1.56772 9.36759 2.02594 10.3524C2.8903 12.3117 4.11395 13.2965 4.11395 15.2305C4.11395 17.1645 3.94212 17.7584 3.37456 19.4234"
                          stroke-width="1.3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    5人小班
                  </nuxt-link>
                </template>
              </el-collapse-item>
            </el-collapse>
          </div>
          <!-- 次選單 end -->
          <!-- 功能列 start -->
          <div class="flex items-center justify-end lg:flex-initial">
            <!-- 次選單收合按鈕 start -->
            <button
              v-if="windowWidth < breakpointsInt('lg')"
              type="button"
              class="rounded border border-solid border-base-300 px-2 py-1"
              @click="toggleMainMenu"
            >
              <font-awesome-icon :icon="['fas', 'bars']" />
            </button>
            <!-- 次選單收合按鈕 end -->
            <!-- 搜尋 start -->
            <div>
              <button
                v-if="isSearchBtn"
                type="button"
                class="w-7 py-1 text-center text-xl transition hover:text-primary-500"
                @click="toggleSearchForm"
              >
                <font-awesome-icon
                  :icon="['fas', `${isSearchForm ? 'xmark' : 'magnifying-glass'}`]"
                />
              </button>
              <form
                v-show="isSearchForm"
                class="absolute left-0 top-10 flex w-full bg-white px-3 py-1 lg:top-18 xl:static xl:bg-transparent xl:px-0 xl:py-0"
              >
                <input
                  class="block w-full rounded-full border border-base-600 bg-transparent px-2"
                  placeholder="Search"
                />
                <button type="button" class="px-2 py-1 text-xl hover:text-primary-500">
                  <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
                </button>
              </form>
            </div>
            <!-- 搜尋 end -->
            <button type="button" class="px-2 py-1 text-xl hover:text-primary-500">
              <font-awesome-icon :icon="['fas', 'cart-shopping']" />
            </button>
            <button type="button" class="px-2 py-1 text-xl hover:text-primary-500">
              <font-awesome-icon :icon="['fas', 'headset']" />
            </button>
            <button
              type="button"
              class="mr-1 whitespace-nowrap rounded border border-solid border-base-300 px-2 py-1 hover:border-base-600 hover:bg-base-600 hover:text-white"
            >
              帳戶
            </button>
            <button
              type="button"
              class="whitespace-nowrap rounded border border-solid border-base-300 px-2 py-1 hover:border-base-600 hover:bg-base-600 hover:text-white"
            >
              登出
            </button>
          </div>
          <!-- 功能列 end -->
          <nuxt-link
            v-if="windowWidth < breakpointsInt('lg')"
            class="my-auto inline-block w-auto"
            to="/zone/english/toIndex"
            ><img
              class="h-5 lg:h-auto"
              src="@/assets/img/tkbgo_english/logo_tkbgo_english.svg"
              alt="TKB美語"
              title="TKB美語"
          /></nuxt-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
const { breakpointsInt } = useTailwindConfig()
const windowWidth = ref(0)
const isMainMenu = ref(true) // 主選單是否顯示
const isSearchBtn = ref(true) // 手機版搜尋按鈕是否顯示
const isSearchForm = ref(false) // 搜尋區塊是否顯示
const collapseActiveName = ref(null) // 主選單collapse觸發的item
// 主選單collapse改變 start
const handleCollapseChange = (val) => {
  // 傳collapse觸發的item給頁面，判斷黑遮罩是否顯示。
  collapseActiveName.value = val
  if (isSearchForm.value && windowWidth.value < breakpointsInt('xl')) {
    isSearchForm.value = false
  }
  // console.log('collapseActiveName：', collapseActiveName.value, typeof collapseActiveName.value)
}
// 主選單collapse改變 end
// 主選單顯示切換 start
const toggleMainMenu = () => {
  isMainMenu.value = !isMainMenu.value
  if (isSearchForm.value) {
    isSearchForm.value = false
  }
}
// 主選單顯示切換 end
// 搜尋區塊顯示切換 start
const toggleSearchForm = () => {
  if (isSearchBtn.value) {
    isSearchForm.value = !isSearchForm.value
    if (isMainMenu.value && windowWidth.value < breakpointsInt('lg')) {
      isMainMenu.value = false
    }
    if (typeof collapseActiveName.value === 'string' && collapseActiveName.value !== '') {
      collapseActiveName.value = ''
    }
  }
}
// 搜尋區塊顯示切換 end
// 點擊遮罩關閉 start
const handleMask = () => {
  if (isSearchForm.value && windowWidth.value < breakpointsInt('xl')) {
    isSearchForm.value = false
  }
  if (isMainMenu.value && windowWidth.value < breakpointsInt('lg')) {
    isMainMenu.value = false
  }
  collapseActiveName.value = ''
}
// 點擊遮罩關閉 end
const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < breakpointsInt('lg')) {
    isMainMenu.value = false
  } else {
    isMainMenu.value = true
  }
  if (windowWidth.value < breakpointsInt('xl')) {
    isSearchBtn.value = true
    isSearchForm.value = false
  } else {
    isSearchBtn.value = false
    isSearchForm.value = true
  }
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
a:not(.active):hover {
  @apply opacity-100;
}
// 次選單 start
.el-collapse {
  @apply border-b-0 border-t-0 lg:flex;
}
:deep() .el-collapse-item__header {
  @apply m-0 flex justify-between border-b-0 border-t-0 bg-transparent py-3 text-xl font-normal text-base-600 hover:text-primary-500 lg:px-2 lg:text-base;
}
:deep() .el-collapse-item__header.is-active {
  @apply text-primary-500;
  path {
    @apply stroke-primary-500;
  }
}
.el-collapse-item__pc-arrow {
  @apply ml-1 hidden lg:block;
}
.is-active .el-collapse-item__pc-arrow {
  transform: rotateX(180deg);
}
:deep() .el-collapse-item__arrow {
  @apply lg:hidden;
  &.is-active {
    @apply rotate-0;
  }
}
[is-el-collapse]:deep() .el-collapse-item__arrow {
  @apply rotate-90;
  &.is-active {
    transform: rotate(90deg) rotateY(180deg);
  }
}
:deep() .el-collapse-item__wrap {
  @apply left-0 top-18 w-full rounded border-b-0 bg-primary-500 lg:absolute lg:rounded-none lg:bg-white;
}
:deep() .el-collapse-item__content {
  @apply flex flex-col px-2 pb-0 text-lg text-white lg:mx-auto lg:w-[1080px] lg:flex-row lg:gap-3 lg:text-base-800;
}
.el-collapse-item__content {
  > * {
    @apply items-center gap-1 px-5 py-2 hover:text-primary-500 lg:flex lg:px-3 lg:py-3;
  }
  > *:not(:last-child) {
    @apply border-b border-solid border-primary-600 lg:border-b-0;
  }
}
// 次選單 end
</style>
