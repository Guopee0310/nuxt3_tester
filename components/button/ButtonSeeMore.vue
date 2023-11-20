<template>
  <nuxt-link
    class="group inline-block w-full cursor-pointer rounded-[3px] border border-solid border-base-200 bg-white py-[8px] text-center text-lg shadow-[2px_3px_4px_0px_rgb(0,0,0,0.07)]"
    :to="url"
  >
    <span class="mr-1 font-bold">看更多</span>
    <font-awesome-icon
      class="text-base-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-500"
      :icon="['fas', 'arrow-right']"
    />
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
