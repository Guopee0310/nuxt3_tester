<template>
  <div>
    <Swiper
      :modules="[SwiperNavigation]"
      :slides-per-view="'auto'"
      :speed="400"
      :space-between="20"
      :watch-slides-progress="true"
      :watch-slides-visibility="true"
      :touch-release-on-edges="true"
      :navigation="{
        nextEl: '.swiper-zonemenu-next',
        prevEl: '.swiper-zonemenu-prev'
      }"
      class="swiper-zonemenu"
    >
      <SwiperSlide
        v-for="item in props.mainMenu"
        :key="item.examName"
        class="swiper-zonemenu-item"
        :class="item.isActive ? 'zonemenu-active' : ''"
        @click="mainMenuClick(item)"
      >
        <div class="swiper-zonemenu-item-icon"><font-awesome-icon :icon="item.examIcon" /></div>
        <!-- 說明：最多10個全形字 -->
        <div class="swiper-zonemenu-item-text">{{ item.examName }}</div>
      </SwiperSlide>
      <div class="swiper-zonemenu-prev"><font-awesome-icon :icon="['fas', 'angle-left']" /></div>
      <div class="swiper-zonemenu-next">
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </div>
    </Swiper>
  </div>
</template>

<script setup>
const props = defineProps({
  mainMenu: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['mainMenuClick'])
const mainMenuClick = (item) => {
  const activeItem = item
  emit('mainMenuClick', activeItem)
}
</script>

<style lang="scss" scoped>
.swiper-zonemenu {
  @apply mx-0 h-full py-4;
  .swiper-button-disabled {
    opacity: 0;
    cursor: default;
    pointer-events: none;
  }
}
.swiper-zonemenu-item {
  @apply flex h-auto min-h-16 w-19 cursor-pointer flex-col items-center justify-start rounded bg-secondary-500 p-1 text-center text-white transition-all hover:bg-primary-500 md:min-h-17 md:w-20;
}
.swiper-zonemenu-item-icon {
  @apply mb-2 flex h-6 w-full items-end justify-center text-2xl md:h-7 md:text-3xl;
}
.swiper-zonemenu-item-text {
  @apply leading-5;
}
.zonemenu-active {
  @apply relative cursor-default bg-primary-500 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-4px_rgba(0,0,0,0.3)] after:absolute after:-bottom-2 after:h-0 after:w-4 after:border-x-[10px] after:border-t-[10px] after:border-x-transparent after:border-t-primary-500 after:content-[''];
}
.swiper-zonemenu-prev,
.swiper-zonemenu-next {
  @apply absolute top-0 z-[1] flex h-full w-5 cursor-pointer items-center justify-center text-2xl text-white;
}
.swiper-zonemenu-prev {
  @apply left-0 bg-gradient-to-r from-secondary-600 via-secondary-600 to-transparent;
}
.swiper-zonemenu-next {
  @apply right-0 bg-gradient-to-r from-transparent via-secondary-600 to-secondary-600;
}
</style>
