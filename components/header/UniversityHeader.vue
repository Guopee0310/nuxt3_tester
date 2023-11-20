<template>
  <header class="fixed top-0 z-20 h-13 w-full bg-white">
    <div class="container flex h-full items-center justify-between">
      <nuxt-link class="inline-block w-[130px]" to="/"
        ><img src="~/assets/img/university/logo.svg" alt=""
      /></nuxt-link>
      <nav class="relative flex h-full items-center justify-center">
        <ul class="hidden items-center lg:flex">
          <li class="relative flex h-full items-center justify-center">
            <nuxt-link to="" class="inline-block whitespace-nowrap p-2">
              <img
                class="inline-block h-[22px] w-[33px]"
                src="~/assets/img/university/icon-focus-l.svg"
                alt=""
              />
              高中數位課程
            </nuxt-link>
          </li>
          <li class="group relative flex h-full items-center justify-center">
            <nuxt-link to="" class="inline-block whitespace-nowrap p-2">
              考試類別
              <font-awesome-icon :icon="['fa', 'angle-down']" />
            </nuxt-link>
            <ul
              class="absolute top-full z-10 hidden w-[150px] list-none rounded bg-base-50 group-hover:block"
            >
              <li class="flex items-center justify-center p-2">
                <nuxt-link to="" class="inline-block whitespace-nowrap p-2"> 學測 </nuxt-link>
              </li>
              <li class="flex items-center justify-center p-2">
                <nuxt-link to="" class="inline-block whitespace-nowrap p-2"> 學習歷程 </nuxt-link>
              </li>
              <li class="flex items-center justify-center p-2">
                <nuxt-link to="" class="inline-block whitespace-nowrap p-2"> 分科測驗 </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="group relative flex h-full items-center justify-center">
            <nuxt-link to="" class="inline-block whitespace-nowrap p-2">
              學習歷程
              <font-awesome-icon :icon="['fa', 'angle-down']" />
            </nuxt-link>
            <ul
              class="absolute top-full z-10 hidden w-[150px] list-none rounded bg-base-50 group-hover:block"
            >
              <li class="flex items-center justify-center p-2">
                <nuxt-link to="" class="inline-block whitespace-nowrap p-2"> 學測 </nuxt-link>
              </li>
              <li class="flex items-center justify-center p-2">
                <nuxt-link to="" class="inline-block whitespace-nowrap p-2"> 分科測驗 </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <div class="relative flex h-full items-center justify-center">
          <span class="inline-block cursor-pointer p-2" @click="handleSearchBar">
            <font-awesome-icon
              :icon="['fa', `${searchBarVisible ? 'circle-xmark' : 'magnifying-glass'}`]"
            />
          </span>
          <span class="inline-block cursor-pointer p-2"
            ><font-awesome-icon :icon="['fa', 'cart-shopping']"
          /></span>
          <span
            class="m-2 inline-block cursor-pointer rounded border border-solid border-base-800 px-2 py-1"
            >登入</span
          >
          <div v-if="false" class="group flex cursor-pointer items-center justify-center p-2">
            <font-awesome-icon :icon="['fa', 'user-large']" />
            <ul
              class="absolute top-13 z-20 hidden min-w-17 bg-base-50 text-center group-hover:block"
            >
              <span class="inline-block whitespace-nowrap p-2">帳戶</span>
              <span class="inline-block whitespace-nowrap p-2">登出</span>
            </ul>
          </div>
          <div
            class="ml-1 flex h-8 w-8 cursor-pointer flex-col items-center justify-center rounded-full bg-primary-500 p-2 duration-300 ease-in-out"
          >
            <span class="inline-block h-[2px] w-4 -translate-y-[4px] bg-white duration-300"></span>
            <span class="inline-block h-[2px] w-4 translate-y-[2px] bg-white duration-300"></span>
          </div>
        </div>
        <div
          v-show="searchBarVisible"
          class="fixed left-2 right-2 top-14 block overflow-hidden rounded-3xl bg-white shadow-md lg:absolute lg:right-[162px]"
        >
          <div class="flex">
            <input
              ref="searchInput"
              class="w-full px-3 py-2 focus:outline-none"
              type="text"
              placeholder="輸入"
            />
            <span class="inline-block cursor-pointer px-3 py-2"
              ><font-awesome-icon :icon="['fa', 'magnifying-glass']"
            /></span>
          </div>
        </div>
        <div
          class="absolute right-0 top-full hidden max-h-[750px] w-[240px] overflow-auto bg-base-50 pb-13"
        >
          <div class="hidden p-4 lg:flex">
            <a
              href="javascript:void(0)"
              class="block rounded-md bg-primary-500 p-2 text-center text-lg text-white"
              >精選課程</a
            >
            <a
              href="javascript:void(0)"
              class="ml-2 block rounded-md bg-secondary-500 p-2 text-center text-lg text-white"
              >專人諮詢</a
            >
          </div>
          <ul>
            <li>
              <nuxt-link to="" class="inline-block px-5 py-3">
                高中數位課程
                <img
                  class="inline-block h-[22px] w-[33px]"
                  src="~/assets/img/university/icon-focus-l.svg"
                  alt=""
                />
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="" class="inline-block px-5 py-3">
                考試類別
                <font-awesome-icon :icon="['fa', 'plus']" />
              </nuxt-link>
              <ul class="hidden bg-white">
                <li><nuxt-link to="" class="inline-block px-5 py-3">學測</nuxt-link></li>
                <li><nuxt-link to="" class="inline-block px-5 py-3">學習歷程</nuxt-link></li>
                <li><nuxt-link to="" class="inline-block px-5 py-3">分科測驗</nuxt-link></li>
              </ul>
            </li>
            <li>
              <nuxt-link to="" class="inline-block px-5 py-3">
                升學指南
                <font-awesome-icon :icon="['fa', 'plus']" />
              </nuxt-link>
              <ul class="hidden bg-white">
                <li><nuxt-link to="" class="inline-block px-5 py-3">最新消息</nuxt-link></li>
                <li><nuxt-link to="" class="inline-block px-5 py-3">文章專區</nuxt-link></li>
                <li><nuxt-link to="" class="inline-block px-5 py-3">講座資訊</nuxt-link></li>
                <li><nuxt-link to="" class="inline-block px-5 py-3">學員見證</nuxt-link></li>
              </ul>
            </li>
            <li><nuxt-link to="" class="inline-block px-5 py-3">升學管道解析</nuxt-link></li>
            <li><nuxt-link to="" class="inline-block px-5 py-3">影音資源</nuxt-link></li>
            <li><nuxt-link to="" class="inline-block px-5 py-3">門市據點</nuxt-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="fixed right-0 top-1/2 -translate-y-1/2">
      <a
        href="javascript:void(0)"
        class="writing-mode-vertical-rl tracking-lg block rounded-l-lg bg-secondary-500 px-2 py-4 text-lg tracking-widest text-white"
        @click="openInfoModal"
        >精選課程</a
      >
      <a
        href="javascript:void(0)"
        class="writing-mode-vertical-rl tracking-lg block rounded-l-lg bg-primary-500 px-2 py-4 text-lg tracking-widest text-white"
        @click="openFormModal"
        >專人諮詢</a
      >
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      searchBarVisible: false
    }
  },
  watch: {
    searchBarVisible() {
      if (this.searchBarVisible) {
        this.$nextTick(() => {
          this.$refs.searchInput.focus()
        })
      } else {
        this.$refs.searchInput.blur()
      }
    }
  },
  methods: {
    openInfoModal() {
      this.$nuxt.$emit('infoModalVisible', true)
    },
    openFormModal() {
      this.$nuxt.$emit('formModalVisible', true)
    },
    handleSearchBar() {
      this.searchBarVisible = !this.searchBarVisible
      this.$refs.searchInput.value = ''
    }
  }
}
</script>
<style lang="scss" scoped></style>
