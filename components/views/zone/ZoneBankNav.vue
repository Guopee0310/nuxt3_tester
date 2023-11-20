<template>
  <div>
    <div ref="stickyWrapper" class="sticky-wrapper flex w-full" :class="{ sticky: isSticky }">
      <div
        ref="zoneBankNav"
        class="bankNav relative box-border flex h-full w-full items-center justify-center border-b-[1px] border-solid border-base-100 text-2xl"
      >
        <div
          v-for="(navItem, index) in navItems"
          :key="index"
          :ref="'item-' + index"
          :class="{ 'nav-active': activeIndex === index }"
          class="relative flex-1 cursor-pointer py-2 text-center text-base-800 transition-all ease-in-out before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-[80%] before:-translate-x-1/2 before:bg-primary-500 before:opacity-0 before:transition-all before:ease-in-out before:content-[''] hover:text-primary-500"
          @click="scrollToTarget(index)"
        >
          <div class="inline text-xl tracking-wide md:hidden">
            <span class="nav-underline">{{ navItem.labelShort }}</span>
          </div>
          <div class="hidden text-2xl tracking-wide md:inline">
            <span class="nav-underline">{{ navItem.labelFull }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  navItems: { type: Array, default: () => null },
  items: { type: Array, default: () => null }
})
const activeIndex = ref(null)
const isSticky = ref(false)
const navOffsetTop = ref(0)
const stickyWrapper = ref(null)
const zoneBankNav = ref(null)
const goheaderHeight = inject('goHeaderHeight')
const scrollTo = inject('scrollTo')
const scrollToTarget = (index) => {
  const navBarHeight = zoneBankNav.value?.offsetHeight
  const headerHeight = goheaderHeight.value
  const scrollPosition = props.items[index].offsetTop - headerHeight - navBarHeight - 10
  scrollTo(scrollPosition)
}
// 浮動選單固定
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const navBarHeight = zoneBankNav.value?.offsetHeight
  const headerHeight = goheaderHeight.value
  isSticky.value = scrollTop >= navOffsetTop.value
  props.items
    .map((e, i) => ({ offsetTop: e.offsetTop, index: i }))
    .sort((a, b) => b.offsetTop - a.offsetTop)
    .some((e) => {
      if (e.offsetTop - headerHeight - navBarHeight - 10 <= scrollTop) {
        activeIndex.value = e.index
        return true
      } else return false
    })
}

onMounted(() => {
  navOffsetTop.value = stickyWrapper.value?.offsetTop
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<style lang="scss" scoped>
.sticky-wrapper {
  position: relative;
  text-align: center;

  .bankNav {
    max-width: 1290px;
    left: 50%;
    transform: translateX(-50%);
    @apply bg-white;
    .nav-underline {
      @apply relative before:absolute before:-bottom-[13px] before:left-1/2 before:h-[2px] before:w-full before:-translate-x-1/2 before:bg-primary-500 before:opacity-0 before:transition-all before:ease-in-out before:content-[''];
    }
    .nav-active {
      @apply text-primary-500 before:opacity-0;
      .nav-underline {
        @apply before:opacity-100;
      }
    }
  }
}

.sticky {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 999;
  @apply top-10 xl:top-18;
  .bankNav {
    @apply opacity-95 shadow-inner;
  }
}
</style>
