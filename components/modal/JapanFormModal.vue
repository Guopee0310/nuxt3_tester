<template>
  <el-dialog
    :visible="isVisible"
    custom-class="max-w-[700px] w-full"
    :center="true"
    :lock-scroll="false"
    :append-to-body="true"
  >
    <!-- <div slot="title" class="text-center text-2xl">立即諮詢</div> -->
    <PublicForm>&nbsp;</PublicForm>
  </el-dialog>
</template>
<script setup>
import PublicForm from '@/components/form/PublicForm.vue'

// export default {
//   components: {
//     PublicForm
//   },
//   data() {
//     return {
//       isVisible: false
//     }
//   },
//   mounted() {
//     this.$nuxt.$on('formModalVisible', (value) => {
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
