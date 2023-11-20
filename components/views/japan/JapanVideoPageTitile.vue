<template>
  <h4 class="mb-5 text-3xl text-base-800 lg:text-4xl">
    <span :class="display" class="mr-2 border-r border-solid pr-2 text-xl lg:text-2xl"
      ><slot name="subtitle"></slot></span
    ><slot name="title"></slot>
  </h4>
</template>
<script setup>
defineProps({
  display: {
    type: String,
    default: 'inline-block'
  }
})
</script>
<style lang=""></style>
