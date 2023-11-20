<template>
  <div
    class="flex flex-col gap-4 [&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-solid [&>:not(:last-child)]:border-base-200 [&>:not(:last-child)]:pb-4"
  >
    <nuxt-link
      v-for="item in defaultData"
      :key="item.id"
      :to="`/schoolZone/news/toNews?news_id=${item.id}&graduate_type=${graduateType}`"
      class="flex flex-col gap-2 hover:!opacity-100"
    >
      <div class="flex gap-x-3 gap-y-2 xl:items-center xl:gap-x-4">
        <div class="hidden aspect-[55/19] w-5/12 flex-initial lg:block">
          <img
            class="block aspect-auto h-full w-full object-cover"
            :src="item.picture || item.picUrl"
            :alt="item.title"
            :title="item.title"
          />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <div class="flex items-start">
            <h3 class="line-clamp-2 block flex-1 text-2xl font-semibold xl:line-clamp-1">
              {{ item.title }}
            </h3>
            <div
              v-if="graduateType == 92"
              class="w-8 flex-initial bg-danger-600 py-1 text-center text-xs leading-none text-white"
            >
              HOT
            </div>
            <div
              v-if="graduateType == 91"
              class="w-8 flex-initial bg-primary-500 py-1 text-center text-xs leading-none text-white"
            >
              NEW
            </div>
          </div>
          <div class="flex gap-3">
            <div
              class="w-18 whitespace-nowrap bg-secondary-500 py-1 text-center text-sm leading-none text-white"
            >
              研究所推甄
            </div>
            <div class="flex items-center gap-1 text-base-400">
              <font-awesome-icon :icon="['fas', 'calendar']" />{{ item.date }}
            </div>
            <div class="flex items-center gap-1 text-base-400">
              <font-awesome-icon :icon="['fas', 'eye']" />{{ item.clicks }}
            </div>
          </div>
          <div class="hidden xl:block">
            <div class="line-clamp-2 text-lg">{{ item.content.replace(/<[^>]+>/g, '') }}</div>
          </div>
        </div>
      </div>
      <div :class="[textLines]" class="text-lg xl:hidden">
        {{ item.content.replace(/<[^>]+>/g, '') }}
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  textLines: { type: String, default: 'line-clamp-2' },
  defaultData: { type: Array, default: null },
  graduateType: { type: Number, default: 0 }
})
</script>
