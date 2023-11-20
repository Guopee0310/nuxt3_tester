<template>
  <div class="flex flex-col items-center xl:flex-row xl:items-start">
    <div class="sticky h-full w-full flex-[0_0_auto] xl:top-18 xl:w-3/12">
      <!-- 左側選單 -->
      <slot name="leftcontent">左側內容</slot>
    </div>
    <!-- 右側內容 -->
    <div class="w-full flex-[0_0_auto] sm:w-9/12">
      <slot name="rightcontent">右側內容</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'JapanListTemplate'
}
</script>
<style lang="scss" scoped></style>
