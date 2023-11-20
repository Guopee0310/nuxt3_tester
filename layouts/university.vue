<template>
  <div>
    <UniversityHeader />
    <div class="pt-13">
      <slot />
    </div>
    <UniversityFooter />
    <!-- <UniversityFormModal />
    <UniversityInfoModal /> -->
  </div>
</template>
<script>
import UniversityHeader from '@/components/header/UniversityHeader.vue'
import UniversityFooter from '@/components/footer/UniversityFooter.vue'
// import UniversityFormModal from '@/components/modal/UniversityFormModal.vue'
// import UniversityInfoModal from '@/components/modal/UniversityInfoModal.vue'
export default {
  name: 'University',
  components: {
    UniversityHeader,
    UniversityFooter
    // UniversityFormModal,
    // UniversityInfoModal
  }
}
</script>
<style lang=""></style>
