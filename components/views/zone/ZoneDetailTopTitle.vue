<template>
  <div class="flex items-start justify-between">
    <h1 class="text-3xl text-base-800">
      <slot>標題內容</slot>
    </h1>
    <ButtonS4
      text-color="text-base-500"
      bg-color="bg-white"
      padding="px-2 py-1"
      class="border border-solid border-base-200"
      :to="toSrc"
      >返回列表</ButtonS4
    >
  </div>
</template>

<script setup>
import ButtonS4 from '@/components/button/ButtonS4.vue'
defineProps({
  toSrc: { type: String, default: '' }
})
</script>
