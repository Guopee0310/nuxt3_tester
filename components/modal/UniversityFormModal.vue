<template>
  <el-dialog v-model:visible="isVisible" custom-class="max-w-[700px] w-full">
    <UniversitySubTitle slot="title" class="m-auto text-center"
      >找出成績提升的最佳方式</UniversitySubTitle
    >
    <div>
      <p class="mb-4 text-center text-lg">
        只差一步，讓你或你孩子的成績，從普通邁向頂尖，邁向理想大學。<br /><br />
        填寫下方表單，分享你目前遇到的學習狀況、課業問題。我們將請專業顧問師，提供以下一對一諮詢服務：
      </p>
      <br />
      <div class="flex flex-wrap justify-around">
        <div class="text-lg">
          <font-awesome-icon class="text-primary-500" :icon="['fa', 'check']" />
          高中課業規劃
        </div>
        <div class="text-lg">
          <font-awesome-icon class="text-primary-500" :icon="['fa', 'check']" />
          學習歷程諮詢
        </div>
        <div class="text-lg">
          <font-awesome-icon class="text-primary-500" :icon="['fa', 'check']" />
          免費性向測驗
        </div>
      </div>
      <PublicForm>&nbsp;</PublicForm>
    </div>
  </el-dialog>
</template>
<script>
import PublicForm from '@/components/form/PublicForm.vue'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
export default {
  components: {
    PublicForm,
    UniversitySubTitle
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.$nuxt.$on('formModalVisible', (value) => {
      this.isVisible = value
    })
  }
}
</script>
<style lang="scss" scoped>
.el-dialog__wrapper {
  @apply overflow-auto whitespace-nowrap text-center after:inline-block after:h-full after:align-middle after:content-[''];
}
:deep() {
  .el-dialog {
    @apply m-auto inline-block whitespace-normal text-left align-middle #{!important};
  }
  .el-dialog__header {
    @apply flex justify-center border-b border-solid border-base-200;
  }
  .el-dialog__headerbtn {
    @apply relative right-0 top-0;
  }
}
</style>
