<template>
  <el-dialog
    v-model:visible="isVisible"
    custom-class="max-w-[700px] w-full"
    :center="true"
    :lock-scroll="false"
    :append-to-body="true"
  >
    <div slot="title" class="text-center text-2xl">立即購課</div>
    <div>
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div class="flex flex-col gap-2">
          <h3 class="font-bold tracking-widest">文法</h3>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">基礎日文N5</h4>
            <div class="grid grid-cols-2 gap-2">
              <nuxt-link to=""><ButtonS2 margin="m-0">林彩惠-56H</ButtonS2></nuxt-link>
              <nuxt-link to=""><ButtonS2 margin="m-0">王怡璇-40H</ButtonS2></nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">初階日文N4</h4>
            <div class="grid grid-cols-2 gap-2">
              <nuxt-link to=""><ButtonS2 margin="m-0">林彩惠-56H</ButtonS2></nuxt-link>
              <nuxt-link to=""><ButtonS2 margin="m-0">王怡璇-40H</ButtonS2></nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">中階日文N3</h4>
            <div class="grid grid-cols-2 gap-2">
              <nuxt-link to=""><ButtonS2 margin="m-0">林彩惠-56H</ButtonS2></nuxt-link>
              <nuxt-link to=""><ButtonS2 margin="m-0">王怡璇-40H</ButtonS2></nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">進階日文N2</h4>
            <div class="grid grid-cols-2 gap-2">
              <nuxt-link to=""><ButtonS2 margin="m-0">林彩惠-56H</ButtonS2></nuxt-link>
              <nuxt-link to=""><ButtonS2 margin="m-0">王怡璇-30H</ButtonS2></nuxt-link>
            </div>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">高階日文N1</h4>
            <div class="grid grid-cols-2 gap-2">
              <nuxt-link to=""><ButtonS2 margin="m-0">林彩惠-56H</ButtonS2></nuxt-link>
              <nuxt-link to=""><ButtonS2 margin="m-0">王怡璇-30H</ButtonS2></nuxt-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="font-bold tracking-widest">解題</h3>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">JLPT-N2</h4>
            <nuxt-link to=""><ButtonS2 margin="m-0">日檢解題班</ButtonS2></nuxt-link>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">JLPT-N3</h4>
            <nuxt-link to=""><ButtonS2 margin="m-0">日檢解題班</ButtonS2></nuxt-link>
          </div>
          <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
            <h4 class="w-18">JLPT-N4&N5</h4>
            <nuxt-link to=""><ButtonS2 margin="m-0">日檢解題班</ButtonS2></nuxt-link>
          </div>
        </div>
      </div>
      <br />
      <div class="bg-secondary-500 py-1 text-center text-2xl text-white">商用課程</div>
      <br />
      <div class="flex flex-col justify-between gap-2 md:flex-row">
        <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <h4 class="w-18">商用日文</h4>
          <nuxt-link to=""><ButtonS2 margin="m-0">敬語會話班</ButtonS2></nuxt-link>
        </div>
        <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <h4 class="w-18">商用日文</h4>
          <nuxt-link to=""><ButtonS2 margin="m-0">基礎敬語班</ButtonS2></nuxt-link>
        </div>
        <div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <h4 class="w-18">商用日文</h4>
          <nuxt-link to=""><ButtonS2 margin="m-0">企業實戰班</ButtonS2></nuxt-link>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script setup>
import ButtonS2 from '@/components/button/ButtonS2.vue'
const isVisible = ref(false)

// export default {
//   components: {
//     ButtonS2
//   },
//   data() {
//     return {
//       isVisible: false
//     }
//   },
//   mounted() {
//     this.$nuxt.$on('infoModalVisible', (value) => {
//       this.isVisible = value
//     })
//   }
// }
</script>
<style lang="scss" scoped>
:deep() {
  .el-dialog__header {
    @apply border-b border-solid border-base-200 bg-secondary-500 text-white;
    .el-dialog__close {
      @apply text-white;
    }
  }
}
</style>
