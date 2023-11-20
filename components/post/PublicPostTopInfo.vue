<template>
  <!-- 文章抬頭資訊 -->
  <div class="mb-3 border-b border-solid border-b-primary-500">
    <div class="mb-5 flex flex-wrap items-start justify-between">
      <h1 class="my-2 mr-2 w-full max-w-[810px] font-bold">{{ title }}</h1>
      <ButtonS2>
        <font-awesome-icon :icon="['fa', 'hand-point-right']"></font-awesome-icon>
        <slot name="buttonText">課程諮詢</slot>
      </ButtonS2>
    </div>
    <div class="mb-3 flex items-end justify-between">
      <div>
        <span class="mt-1 block leading-[1.2]">
          <font-awesome-icon :icon="['fa', 'calendar-days']" />
          {{ date ? date.split('T')[0] : '' }}
        </span>
        <span class="mt-1 block leading-[1.2]">
          <font-awesome-icon :icon="['fa', 'eye']" />
          {{ clicks }}
        </span>
        <span class="mt-1 block leading-[1.2]">
          <font-awesome-icon :icon="['fas', 'database']" />
          最新消息
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import ButtonS2 from '@/components/button/ButtonS2.vue'
defineProps({
  title: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  clicks: {
    type: Number,
    default: 0
  }
})
</script>
<style lang="scss"></style>
