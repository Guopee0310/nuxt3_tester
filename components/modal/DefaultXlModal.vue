<!-- 說明：使用公版彈窗範例，注意需在元件上設置高度樣式，並在<template #content>包入<el-scrollbar>否則會被視窗切到，
    <DefaultXlModal v-model="DefaultXlModalVisible" class="h-full md:h-auto/md:h-[600px]">
      <template #content>
        <el-scrollbar>
          //您的內容
        </el-scrollbar>
      </template>
    </DefaultXlModal>
-->
<template>
  <el-dialog class="xl-dialog" :append-to-body="true" :lock-scroll="true">
    <template v-if="isHeader" #header><slot name="header"></slot></template>
    <template v-if="isFooter" #footer><slot name="footer"></slot></template>
    <slot name="content"></slot>
  </el-dialog>
</template>

<script setup>
defineProps({
  isHeader: { type: Boolean, default: false },
  isFooter: { type: Boolean, default: false }
})
</script>

<style lang="scss">
.el-overlay-dialog {
  @apply box-border flex items-center justify-center;
}
.xl-dialog {
  @apply m-0 flex w-full flex-col md:w-[760px] xl:w-[1140px];
}
.el-dialog__title {
  @apply inline-block max-w-[96%] break-words;
}
.el-dialog__body {
  @apply overflow-hidden;
}
</style>
