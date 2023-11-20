<template>
  <div>
    <div class="relative overflow-hidden bg-base-50">
      <!-- 浮動標題 -->
      <div class="bg-base-50 py-4 opacity-90" :class="{ sticky: isSticky }">
        <div class="container">
          <h3 class="text-3xl text-secondary-500 md:text-4xl">綜合實力培養</h3>
        </div>
      </div>

      <!-- 優惠組合 -->
      <div class="bg-base-50 py-6">
        <div class="container">
          <h4 class="mb-5 border-l border-solid pl-2 text-3xl md:text-4xl">優惠組合</h4>

          <div class="my-2">
            <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
            </div>
          </div>
        </div>
      </div>

      <!-- 單選課程 -->
      <div class="bg-base-100 py-6">
        <div class="container">
          <h4 class="mb-5 border-l border-solid pl-2 text-3xl md:text-4xl">單選課程</h4>
          <div class="my-2">
            <div class="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
              <JapanCourseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import JapanCourseCard from '@/components/card/JapanCourseCard.vue'
definePageMeta({
  layout: 'japan'
})
const isSticky = ref(false)
const windowScroll = inject('windowScroll', ref(null))
watch(windowScroll, () => {
  if (window.pageYOffset > 0) {
    isSticky.value = true
  } else {
    isSticky.value = false
  }
})
</script>
<style lang="scss" scoped>
.sticky {
  @apply fixed top-10 z-20 w-full lg:top-18;
}
</style>
