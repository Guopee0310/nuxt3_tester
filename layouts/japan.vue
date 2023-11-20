<template>
  <div>
    <JapanHeader ref="japanheader" class="fixed left-0 top-0 w-full" />
    <div class="bg-base-50 pt-10 lg:pt-18">
      <slot />
    </div>
    <JapanFooter class="-mb-18 h-full bg-base-50" />
    <!-- <JapanInfoModal /> -->
    <JapanFormModal />
  </div>
</template>
<script setup>
import JapanHeader from '@/components/header/JapanHeader.vue'
import JapanFooter from '@/components/footer/JapanFooter.vue'
// import JapanInfoModal from '@/components/modal/JapanInfoModal.vue'
import JapanFormModal from '@/components/modal/JapanFormModal.vue'

// export default {
//   name: 'Japan',
//   components: {
//     JapanHeader,
//     JapanFooter,
//     JapanInfoModal,
//     JapanFormModal
//   },
//   data() {
//     return {}
//   }
// }
</script>
<style lang="scss" scoped></style>
