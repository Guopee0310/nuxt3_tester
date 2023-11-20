<template>
  <nuxt-link class="group block pb-[3px] hover:!opacity-100">
    <div class="bg-white shadow-md transition group-hover:translate-y-[3px] group-hover:shadow">
      <div class="relative aspect-video">
        <img
          class="block aspect-auto h-full w-full object-cover"
          :src="imgSrc"
          :alt="mainTitle"
          :title="mainTitle"
        />
        <div class="absolute left-0 top-1 w-20">
          <img class="w-full" src="/assets/img/tkbgo_english/cloud.svg" alt="雲端" title="雲端" />
        </div>
      </div>
      <div class="flex flex-col gap-y-2 p-3">
        <h4 class="line-clamp-1 text-xl font-semibold tracking-widest">{{ mainTitle }}</h4>
        <p class="line-clamp-2 h-[3em]">{{ summary }}</p>
        <hr />
        <div class="flex items-end justify-between">
          <div v-if="true" class="text-sm">
            <font-awesome-icon :icon="['fas', 'book']" class="mr-1" />00000小時
          </div>
          <div class="flex flex-1 items-end justify-end gap-3">
            <div
              v-if="parseInt(sale) > 0 && parseInt(sale) < parseInt(price)"
              class="text-sm text-base-300 line-through"
            >
              ${{ price }}
            </div>
            <div class="text-sm text-danger-600">
              NT$<span class="text-3xl">{{
                parseInt(sale) > 0 && parseInt(sale) < parseInt(price) ? sale : price
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  imgSrc: { type: String, default: '/assets/img/tkbgo_english/logo_tkbgo_english.svg' },
  mainTitle: { type: String, default: '標題' },
  summary: { type: String, default: '簡介' },
  price: { type: Number, default: 0 },
  sale: { type: Number, default: 0 }
})
</script>
