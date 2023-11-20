<template>
  <div>
    <section class="shadow-1 mb-6 bg-white">
      <div
        class="jum-head flex items-center justify-between bg-gradient-to-r from-[#59B5B2_0%] to-[#7fd0cd_100%] px-4 py-2"
      >
        <div class="flex grow items-center">
          <h3 class="mr-5 text-white">{{ title }}</h3>
          <hr class="h-[1px] w-1/2 text-white" />
        </div>
        <nuxtLink
          class="rounded-2xl bg-white px-3 text-[#90d4d4]"
          :to="`/${infoType}/to${capitalizeStr(infoType)}list?type_id=${infoTypeId}`"
          >More</nuxtLink
        >
      </div>
      <div class="flex flex-wrap p-4">
        <Swiper
          ref="jumSlider"
          :space-between="swiperOption.spaceBetween"
          :modules="swiperOption.modules"
          :slides-per-view="swiperOption.slidesPerView"
          :autoplay="swiperOption.autoplay"
          :effect="swiperOption.effect"
          :speed="swiperOption.speed"
          class="jum-slider swiper-container basis-full xl:flex-[1_1_0]"
          @swiper="onSwiper"
          @slide-change="onSlideChange"
        >
          <SwiperSlide v-for="item in infos" :key="item.id">
            <div class="block h-full" @click="goTo(item.id)">
              <img
                :src="item.picture || item.picUrl"
                :alt="item.title"
                class="h-full max-h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="mt-4 flex-[0_1_100%] xl:mt-0 xl:flex-[0_1_425px] xl:pl-4">
          <p class="text-xl font-bold tracking-[8px] text-[#85d6d4]">HOT</p>
          <div>
            <div class="flex flex-col">
              <nuxtLink
                v-for="(item, index) in infos"
                :key="item.id"
                :to="`/${infoType}/to${capitalizeStr(infoType)}?${infoType}_id=${item.id}`"
                :class="{ active: index === swiperIndex }"
                class="btn-news-area d-flex w-100"
                @mousemove="changeSlide(index)"
              >
                <div class="hot-num">{{ index + 1 }}</div>
                <p>{{ item.title }}</p>
              </nuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- main-news -->
</template>

<script setup>
import { EffectFade } from 'swiper/modules'

defineProps({
  title: {
    type: String,
    default: ''
  },
  infos: {
    type: Object,
    default() {
      return []
    }
  },
  infoType: {
    type: String,
    default: ''
  },
  infoTypeId: {
    type: Number,
    default: 0
  }
})

// 字首轉大寫
const capitalizeStr = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}

const swiperIndex = ref(0)
let swiper = reactive({})
const swiperOption = reactive({
  spaceBetween: 10,
  speed: 500,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 6000,
    disableOnInteraction: false
  },
  modules: [EffectFade, SwiperAutoplay],
  on: {
    slideChangeTransitionStart: () => {
      this.MainSwiperIndex = this.$refs.jumSlider.swiper.activeIndex
      console.log(this.MainSwiperIndex)
    }
  }
})

const onSwiper = (s) => {
  swiper = s
}

const onSlideChange = (swiper) => {
  swiperIndex.value = swiper.activeIndex
}

const changeSlide = (index) => {
  swiper.slideTo(index, 600)
  swiperIndex.value = index
}

async function goTo(id) {
  await navigateTo(`/${infoType}/to${capitalizeStr(infoType)}?${infoType}_id=${id}`)
}
</script>
<style lang="scss" scoped>
.btn-jum-area {
  @apply flex h-full max-h-full justify-center overflow-hidden;
  img {
    @apply max-h-full object-cover object-center;
  }
}

.btn-news-area {
  display: flex;
  width: 100% !important;
  padding: 22px 16px;
  background-color: #ecffff;
  max-height: 72px;
  align-items: center;
  line-height: 22px;
  transition: 0.4s;
  .hot-num {
    @apply pr-4 text-3xl font-bold text-[#85D6D4];
  }
  p {
    @apply line-clamp-3;
  }

  &.active {
    background-color: #fffaec;
  }
}

.btn-news-area:not(:last-child) {
  @apply mb-4;
}
</style>
