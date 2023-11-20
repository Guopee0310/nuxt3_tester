<template>
  <div>
    <slot></slot>
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </div>
</template>
<script>
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import PostCard from '@/components/card/PostCard.vue'
export default {
  components: {
    UniversitySubTitle,
    PostCard
  }
}
</script>
<style lang=""></style>
