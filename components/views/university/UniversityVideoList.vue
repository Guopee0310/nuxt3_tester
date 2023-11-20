<template>
  <div>
    <slot></slot>
    <div :class="column" class="my-5 grid gap-10">
      <VideoCardS2 />
      <VideoCardS2 />
      <VideoCardS2 />
      <VideoCardS2 />
    </div>
  </div>
</template>
<script>
import VideoCardS2 from '@/components/card/VideoCardS2'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'

export default {
  components: {
    VideoCardS2,
    UniversitySubTitle
  },
  props: {
    column: {
      default: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    }
  }
}
</script>
<style lang=""></style>
