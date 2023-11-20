<template>
  <nuxtLink
    class="block cursor-pointer rounded-3xl border border-solid border-base-200 bg-white px-4 py-1 text-base-500 duration-100 ease-in hover:border-secondary-500 hover:text-secondary-500"
    :to="url"
  >
    {{ name }}
  </nuxtLink>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
