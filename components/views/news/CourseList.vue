<template>
  <section class="discount-block">
    <div
      class="flex items-center justify-around bg-gradient-to-r from-[#59B5B2_0%] to-[#7fd0cd_100%] py-2"
    >
      <h2 class="text-xl text-white">公職考試優惠活動</h2>
      <a
        class="rounded-2xl bg-white px-3 text-secondary-300"
        href="https://www.tkbgo.com.tw/product/toProductList.jsp?group=7&amp;type=21&amp;kind=260"
        >More</a
      >
    </div>
    <div>
      <CourseItem v-for="info in infos" :key="info.id" :info="info" />
    </div>
  </section>
</template>
<script setup>
import CourseItem from '@/components/views/news/CourseItem.vue'
defineProps({
  infos: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
