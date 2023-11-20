<template>
  <nuxt-link
    class="japCourseItem flex w-full flex-col border border-solid border-transparent bg-white"
    to="/product/toProductDetail"
  >
    <img
      class="item-img block"
      src="https://www.tkbtv.com.tw/upload/subject/d89f291120230315183251.webp"
    />
    <div class="item-info mx-4 my-1 flex flex-col justify-between gap-2">
      <div
        class="my-1 line-clamp-1 h-auto border-b border-solid border-base-400 pb-[3px] text-2xl font-semibold"
      >
        中階日語-雲端
      </div>
      <div class="mb-2 line-clamp-2 h-10 leading-7 text-base-400">
        TKB日文高階日語講師
        楊開雲老師精選N1文字語彙及N1高級文法課程。用日文講解日文語彙、文法涵義，更能充分運用日文。
      </div>
      <div class="mx-auto flex w-full flex-wrap items-center justify-between">
        <div class="text-base-400">王怡璇</div>
        <div class="font-semibold text-danger-600">
          NT$ <span class="text-2xl">6,600</span> / 科目數：2
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup></script>
<style lang="scss" scoped>
.japCourseItem {
  @apply transition duration-300 ease-in-out;
  .item-img,
  .item-info {
    @apply transition duration-300 ease-in-out;
  }
  &:hover {
    @apply border-base-500 bg-transparent opacity-100 ease-in-out;
    .item-img,
    .item-info {
      @apply scale-90;
    }
  }
}
</style>
