<template>
  <div class="photo">
    <img :src="imgUrl" alt="" />
  </div>
</template>
<script>
export default {
  props: ['imgUrl']
}
</script>
<style lang="scss" scoped>
.photo {
  @apply relative float-none h-auto max-w-[480px] lg:absolute lg:left-[calc(50%_+_130px)] lg:top-1/2 lg:float-right lg:w-[30vw] lg:-translate-y-1/2;
}
</style>
