<template>
  <div>
    <section class="shadow-1 mb-6">
      <h2
        class="whitespace-nowrap bg-gradient-to-r from-[#59B5B2_0%] to-[#7fd0cd_100%] py-2 text-center text-xl tracking-[0.2rem] text-white"
      >
        學員心得
      </h2>
      <ul>
        <ReviewItem v-for="info in infos" :key="info.id" :info="info" />
      </ul>
    </section>
  </div>
</template>
<script setup>
import ReviewItem from './ReviewItem.vue'
defineProps({
  infos: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped>
li:nth-child(even) {
  background-color: #f9f9f9;
}
</style>
