<template>
  <div>
    <div class="pt-10 lg:pt-18">
      <slot></slot>
    </div>
    <EnglishFooter />
    <EnglishModal />
    <EnglishHeader />
  </div>
</template>

<script setup>
import EnglishModal from '@/components/modal/EnglishModal.vue'
import EnglishHeader from '@/components/header/EnglishHeader.vue'
import EnglishFooter from '@/components/footer/EnglishFooter.vue'
</script>
