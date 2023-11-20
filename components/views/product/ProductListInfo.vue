<template>
  <div v-if="classTypes.length">
    <div class="mb-8 flex flex-wrap">
      <span
        v-for="(c, index) in classTypes"
        :key="c.id"
        :class="
          swiperParent.activeIndex == index
            ? 'bg-secondary-600 text-white'
            : 'bg-white text-secondary-600'
        "
        class="mb-1 mr-1 inline-block cursor-pointer rounded-lg border-2 border-solid border-secondary-600 px-3 py-1 text-center text-lg"
        data-status="1"
        @click="changeParentSlide(index)"
        >▼{{ c.name.substr(0, 2)
        }}<span class="hidden md:inline">{{ c.name.substr(2) }}</span></span
      >
    </div>
    <Swiper
      :active-index="swiperParent.activeIndex || 0"
      :allow-touch-move="false"
      @swiper="onParentSwiper"
    >
      <SwiperSlide v-for="c in classTypes" :key="c.id">
        <div
          :class="{
            'border-link': c.id == 'I',
            'border-primary-500': c.id == 'H',
            'border-primary-900': c.id == 'A',
            'border-secondary-800': c.id == 'M'
          }"
          class="mb-3 flex w-full border-b-2 border-solid"
        >
          <span
            :class="[
              swiperChild[c.id]?.swiper.activeIndex === 0 ? '' : 'opacity-50',
              {
                'bg-link': c.id == 'I',
                'bg-primary-500': c.id == 'H',
                'bg-primary-900': c.id == 'A',
                'bg-secondary-800': c.id == 'M'
              }
            ]"
            class="inline-block cursor-pointer rounded-t-lg px-3 py-1 text-center text-base text-white"
            @click="swiperChild[c.id]?.swiper.slidePrev()"
            >全修課程 ({{ c.fullSubjects.length ? c.fullSubjects.length : 0 }})</span
          >
          <span
            :class="[
              swiperChild[c.id]?.swiper.activeIndex === 1 ? '' : 'opacity-50',
              {
                'bg-link': c.id == 'I',
                'bg-primary-500': c.id == 'H',
                'bg-primary-900': c.id == 'A',
                'bg-secondary-800': c.id == 'M'
              }
            ]"
            class="inline-block cursor-pointer rounded-t-lg px-3 py-1 text-center text-[16px] text-white duration-200 ease-in"
            tabindex="0"
            role="button"
            aria-label="Go to slide 1"
            @click="swiperChild[c.id]?.swiper.slideNext()"
            >單科課程 ({{ c.singleSubjects.length ? c.singleSubjects.length : 0 }})</span
          >
        </div>
        <Swiper
          :initial-slide="c.fullSubjects.length ? 0 : 1"
          @swiper="swiperChild[c.id]?.onSwiper"
        >
          <SwiperSlide>
            <div
              v-if="c.fullSubjects.length"
              class="block"
              itemscope
              itemtype="http://schema.org/Offer"
            >
              <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <li v-for="subject in c.fullSubjects" :key="subject.id">
                  <nuxt-link
                    :to="`/product/toProductDetail?f_subject_no=${subject.id}`"
                    class="inline-block h-full"
                  >
                    <CourseCardS2 :subject="subject" :class-type-id="c.id" />
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div v-else class="block" itemscope itemtype="http://schema.org/Offer">
              <div class="text-center">
                <img
                  class="h-[200px] w-[200px]"
                  src="~/assets/img/product/icon-empty.svg"
                  alt="目前無課程"
                />
                <div>目前無“{{ c.name }}”全修課程，您可點選全修課程看更多！</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              v-if="c.singleSubjects.length"
              class="block"
              itemscope
              itemtype="http://schema.org/Offer"
            >
              <ul class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <li v-for="subject in c.singleSubjects" :key="subject.id">
                  <nuxt-link
                    :to="`/product/toProductDetail?subject_no=${subject.id}`"
                    class="inline-block h-full"
                  >
                    <CourseCardS2 :subject="subject" :class-type-id="c.id" />
                  </nuxt-link>
                </li>
              </ul>
            </div>
            <div v-else class="block" itemscope itemtype="http://schema.org/Offer">
              <div class="text-center">
                <img
                  class="h-[200px] w-[200px]"
                  src="~/assets/img/product/icon-empty.svg"
                  alt="目前無課程"
                />
                <div>目前無“{{ c.name }}”單科課程，您可點選全修課程看更多！</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </SwiperSlide>
    </Swiper>
  </div>
  <div v-else>
    <img
      class="m-auto block h-[200px] w-[200px]"
      src="~/assets/img/product/icon-empty.svg"
      alt="目前無課程"
    />
    <div class="text-center">目前無課程</div>
  </div>
</template>
<script setup>
import CourseCardS2 from '@/components/card/CourseCardS2.vue'

const props = defineProps({
  classTypes: {
    type: Array,
    default: () => []
  },
  kindInfo: {
    type: Array,
    default: () => []
  }
})

const swiperParent = ref({})
const swiperChild = reactive({})

// 課程分類swiper
const onParentSwiper = (swiper) => {
  swiperParent.value = swiper
}
const changeParentSlide = (index) => {
  swiperParent.value.slideTo(index, 200)
}

// 全修 / 單科swiper
props.classTypes.forEach((classType) => {
  swiperChild[classType.id] = {
    swiper: {},
    onSwiper: function (swiper) {
      swiperChild[classType.id].swiper = swiper
    }
  }
})

watchEffect(() => {
  props.classTypes.forEach((classType) => {
    swiperChild[classType.id].swiper.activeIndex = classType.fullSubjects.length ? 0 : 1
  })
  swiperParent.value.activeIndex = 0
})
</script>
<style lang="scss" scoped>
:deep() {
  .swiper-slide {
    height: 0;
  }
  .swiper-slide-active {
    height: auto;
  }
}
</style>
