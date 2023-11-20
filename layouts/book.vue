<template>
  <div>
    <BookHeader class="fixed left-0 top-0 w-full" />
    <div class="bg-base-50 pt-10 xl:pt-18">
      <slot></slot>
    </div>
    <TkbgoFooter />
  </div>
</template>
<script setup>
import BookHeader from '@/components/header/BookHeader.vue'
import TkbgoFooter from '@/components/footer/TkbgoFooter.vue'
</script>
<style lang="scss" scoped></style>
