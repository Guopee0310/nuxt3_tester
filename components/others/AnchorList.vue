<template>
  <ul :class="[direction]" class="container my-5 flex gap-1 xl:gap-3">
    <slot></slot>
  </ul>
</template>
<script setup>
defineProps({
  direction: {
    type: String,
    default: 'flex-col md:flex-row'
  }
})
</script>

<style lang="scss" scoped></style>
