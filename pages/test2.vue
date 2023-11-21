<!-- vueInit開始基本架構 -->
<template>
  <div class="overflow-hidden">
    <div class="bg-primary-500">111111</div>
    <div class="banner">123</div>

    <GoIndexBanner />
    <Swiper
    :modules="swiperOption.modules"
    :effect="swiperOption.effect"
    :slides-per-view="swiperOption.slidesPerView"
    :loop="swiperOption.loop"
    :pagination="swiperOption.pagination"
    :breakpoints="swiperOption.breakpoints"
    :autoplay="swiperOption.autoplay"
  >
    <SwiperSlide v-for="(item, index) in bannerData" :key="index">
      <div class="cursor-pointer" @click="navigateTo(item.link, { external: true })">
        <img
          class="swiper-lazy swiper-lazy-loaded"
          :src="item.picture"
          :alt="item.title"
          :title="item.title"
        />
      </div>
    </SwiperSlide>
  </Swiper>
    <DefaultLgModal v-model="DefaultLgModalVisible" class="md:h-auto/md:h-[600px] h-full">
      <template #content>
        <el-scrollbar> //您的內容 </el-scrollbar>
      </template>
    </DefaultLgModal>
  </div>
</template>
< script setup>
//引入components//
import DefaultLgModal from '@/components/modal/DefaultLgModal.vue'
import GoIndexBanner from '@/components/banner/GoIndexBanner'
import { EffectFade } from 'swiper/modules'

definePageMeta({
  layout: 'main'
})
const swiperOption = reactive({
  modules: [EffectFade, SwiperAutoplay, SwiperPagination],
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  pagination: {
    clickable: true,
    bulletClass: 'swiper-pagination-bullet',
    bulletActiveClass: 'my-pagination-active'
  }
})

let bannerData = reactive([])
const { data: res } = await useApi('/api/ad/banner', { query: { adPositionId: 33, count: 5 } })
bannerData = res.value.data
</script>
<style lang="scss" scoped>
.banner {
  background-color: deeppink;
  @apply text-base-300;
}



</style>
