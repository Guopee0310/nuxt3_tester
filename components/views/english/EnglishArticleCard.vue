<template>
  <nuxt-link class="grid grid-cols-1 gap-3 hover:!opacity-100">
    <div class="aspect-[55/19]">
      <img
        class="block aspect-auto h-full w-full object-cover"
        :src="imgSrc"
        :alt="mainTitle"
        :title="mainTitle"
      />
    </div>
    <div class="flex flex-col gap-y-2 px-1">
      <h4 class="line-clamp-1 text-xl font-semibold">{{ mainTitle }}</h4>
      <p class="line-clamp-2 h-[3em]">{{ summary }}</p>
      <div class="flex items-end justify-end gap-3 text-sm text-base-300">
        <div>
          <font-awesome-icon :icon="['fas', 'calendar-days']" class="mr-1" />{{ updateDate }}
        </div>
        <div><font-awesome-icon :icon="['fas', 'eye']" class="mr-1" />{{ clicks }}</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  imgSrc: { type: String, default: '/assets/img/tkbgo_english/logo_tkbgo_english.svg' },
  mainTitle: { type: String, default: '標題' },
  summary: { type: String, default: '簡介' },
  updateDate: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 }
})
</script>
