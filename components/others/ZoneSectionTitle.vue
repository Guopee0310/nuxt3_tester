<template>
  <h2 class="flex gap-3 text-3xl font-medium tracking-widest md:tracking-[0.5em]">
    <div
      class="flex w-3 flex-initial items-center border-r border-solid border-primary-500 md:w-8 lg:w-16"
    >
      <div class="h-[1px] flex-1 bg-primary-500"></div>
    </div>
    <div class="flex-1 self-center">
      <!-- 說明：字體顏色為body色，凸顯字請包span。
            例：<span>終極</span>下標策略 -->
      <slot>區塊標題預設字</slot>
    </div>
  </h2>
</template>
<script setup></script>
<style lang="scss" scoped>
span {
  @apply text-primary-500;
}
</style>
