<template>
  <div class="container flex items-center text-2xl font-bold">
    {{ name }} {{ countStore.count }} <br />
    <button @click="increment">加1</button> <br />
    <button @click="decrement">減1</button> <br />
    <button @click="changeState">改變狀態</button>
    {{ countStore.double }} <br />
    {{ countStore.name }}
    <NuxtLink to="/test">測試頁</NuxtLink>
    <button @click="navigateTo('/test')">移動</button>
    <br />
    數字: {{ abc }}
    <!-- {{ pending }}
    {{ title }} -->
    <!-- <el-button type="primary">Primary</el-button>
    <Swiper
      :modules="swiperOption.modules"
      :slides-per-view="1"
      :loop="swiperOption.loop"
      :pagination="swiperOption.pagination"
      :breakpoints="swiperOption.breakpoints"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true
      }"
    >
      <SwiperSlide v-for="slide in 10" :key="slide">
        <strong>{{ slide }}</strong>
      </SwiperSlide>
    </Swiper> -->
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const abc = useNum()
abc.value++
console.log(abc)

const countStore = useCounterStore()
const increment = () => {
  // countStore.increment()
  countStore.count++
}
const decrement = () => {
  // countStore.decrement()
  countStore.count--
}

const changeState = () => {
  countStore.$patch({
    count: 666,
    name: '小黃'
  })
}

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const { id } = route.query
const {
  data: res,
  pending,
  refresh
} = await useApi('/api/news/detail', {
  query: { id },
  lazy: true
})

const name = useState('name', () => '小陳')

console.log(refresh)

const title = res
// console.log(title)

if (!res) throw createError({ statusCode: 404, message: '該頁面不存在' })

const swiperOption = reactive({
  modules: [SwiperAutoplay, SwiperPagination],
  loop: true,
  pagination: { clickable: true },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    770: {
      slidesPerView: 2,
      spaceBetween: 50
    },

    771: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
})
// const modules = reactive([SwiperAutoplay, SwiperPagination])
</script>

<style lang="scss" scoped></style>
