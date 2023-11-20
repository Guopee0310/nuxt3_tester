<template>
  <el-dialog v-model:visible="isVisible" custom-class="max-w-[700px] w-full">
    <UniversitySubTitle slot="title" class="m-auto text-center"
      >如何從成績普通變成學霸</UniversitySubTitle
    >
    <div>
      <p class="mb-4 text-center text-lg">
        不想再因為成績悶悶不樂？希望錄取理想大學，而不用因成績與現實妥協？
      </p>
      <p class="mb-4 text-center text-lg">你其實可以做到！</p>
      <p class="mb-4 text-center text-lg">
        甄戰升學顧問，超過 10 年以上升學輔導經驗，幫助了眾多與你有相同困擾的同學，<br />順利上榜。
      </p>
      <p class="mb-4 text-center text-lg">
        透過「名師線上授課」搭配「真人一對一輔導」，突破成績不佳的困境。
      </p>
      <p class="mb-4 text-center text-lg">立即查看下方課程，取得最佳成績！</p>
      <br />
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>
          <h3 class="mb-3 text-center">頂尖名師影音教材</h3>
          <div class="grid grid-cols-2 gap-2">
            <ButtonS2 margin="m-0">學測（警大）</ButtonS2>
            <ButtonS2 margin="m-0">分科測驗</ButtonS2>
            <ButtonS2 margin="m-0">高中段考</ButtonS2>
            <ButtonS2 margin="m-0">警專</ButtonS2>
          </div>
        </div>
        <div>
          <h3 class="mb-3 text-center">一對一書審面試輔導</h3>
          <div class="grid grid-cols-2 gap-2">
            <ButtonS2 margin="m-0">學習歷程</ButtonS2>
            <ButtonS2 margin="m-0">個人申請</ButtonS2>
            <ButtonS2 margin="m-0">醫科專班</ButtonS2>
          </div>
        </div>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import ButtonS2 from '@/components/button/ButtonS2.vue'

export default {
  components: {
    UniversitySubTitle,
    ButtonS2
  },
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.$nuxt.$on('infoModalVisible', (value) => {
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
