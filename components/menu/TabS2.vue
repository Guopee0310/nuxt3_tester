<template>
  <div class="mimosa flex flex-col gap-3">
    <div
      ref="tabMenuSwiper"
      v-swiper:tabMenuSwiper="tabMenuSwiperOption"
      class="swiper mimosa-nav mx-0"
    >
      <ul class="swiper-wrapper">
        <li
          v-for="tab in tabs"
          :key="tab"
          :class="{ 'is-active': tab.isActive }"
          class="swiper-slide inline-block w-auto"
        >
          <a
            :href="tab.href"
            class="block border-b-2 border-solid border-transparent px-4 py-2 text-center text-lg hover:!opacity-100 lg:px-6"
            @click="selectTab(tab)"
          >
            <font-awesome-icon :icon="tab.tabIcon" :class="[iconColor]" class="mr-1" />{{
              tab.lable
            }}
          </a>
        </li>
      </ul>
      <div class="btn-prev">
        <div><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
      </div>
      <div class="btn-next">
        <div><font-awesome-icon :icon="['fas', 'angle-right']" /></div>
      </div>
    </div>
    <!-- 此區塊不與tab切換 start -->
    <slot name="no_tab_content"></slot>
    <!-- 此區塊不與tab切換 end -->
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconColor: { default: 'text-secondary-500' }
  },
  data() {
    return {
      tabs: [],
      pagePosTop: 0,
      mimosaBoolean: false,
      tabMenuSwiperOption: {
        slidesPerView: 'auto',
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        touchReleaseOnEdges: true,
        navigation: {
          nextEl: '.btn-next',
          prevEl: '.btn-prev'
        }
      }
    }
  },
  created() {
    this.tabs = this.$children
  },
  mounted() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleScroll)
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name
        this.tabMenuSwiper.activeIndex = selectedTab
      })
    },
    handleScroll() {
      const thisPage = this.$el
      const mimosaWrapper = document.querySelector('.mimosa')
      const mimosaNav = document.querySelector('.mimosa-nav')
      const headerHeight = document.querySelector('header').offsetHeight
      let mimosaBoolean
      const pagePosTop = window.pageYOffset + thisPage.getBoundingClientRect().top
      const navPosTop = window.pageYOffset + mimosaWrapper.getBoundingClientRect().top
      const scroll = document.scrollingElement.scrollTop
      const isUp = scroll < this.scrollPos
      const isOverTop = scroll > pagePosTop
      const notOverNav = scroll > navPosTop

      // console.log("pagePosTop", pagePosTop, "，scroll", scroll, "，this scrollPos", this.scrollPos, "，navPosTop", navPosTop, "\n", "isUp", isUp ,"，isOverTop", isOverTop, "，notOverNav", notOverNav);

      mimosaBoolean = isUp && isOverTop && notOverNav

      if (mimosaBoolean) {
        console.log('符合條件：', mimosaBoolean)
        mimosaNav.classList.add('mimosa-fix')
        mimosaNav.style.top = headerHeight + 'px'
      } else {
        console.log('不符條件：', mimosaBoolean)
        mimosaNav.classList.remove('mimosa-fix')
        mimosaNav.style.top = null
      }

      this.scrollPos = scroll
      this.pagePosTop = pagePosTop
    }
  }
}
</script>
<style lang="scss" scoped>
.swiper {
  background: linear-gradient(to top, theme('colors.base.200') 1px, transparent 1px);
}
.is-active > * {
  @apply cursor-default border-primary-500 text-primary-500;
  > svg {
    @apply text-primary-500;
  }
}
.btn-prev,
.btn-next {
  @apply absolute top-0 z-10 flex h-[calc(100%-1px)] w-6 items-center justify-center bg-white text-base-400 shadow-lg;
}
.btn-prev {
  @apply left-0;
}
.btn-next {
  @apply right-0;
}
.swiper-button-disabled {
  @apply pointer-events-none opacity-0;
}
// 捲軸向上選單出現 start
.mimosa-nav {
  @apply relative left-0 top-0;
  transition: all 0.4s ease-in-out;
  animation-direction: reverse;
  animation-fill-mode: both;
}
.mimosa-nav.mimosa-fix {
  @apply fixed z-20 w-full bg-white;
}
.mimosa-nav.mimosa-fix .swiper-wrapper {
  @apply justify-center;
}
// 捲軸向上選單出現 end
</style>
