<template>
  <div class="youtube">
    <iframe :src="videoSrc" frameborder="0"></iframe>
    <!-- <div class="thumbnail"></div> -->
  </div>
</template>
<script setup>
const props = defineProps({
  src: {
    type: String,
    default: ''
  }
})
const videoSrc = toRef(props.src)
onUpdated(() => {
  videoSrc.value = props.src + '?autoplay=1'
})
</script>
<style lang="scss" src="~/assets/scss/youtube_lazyload.scss"></style>
