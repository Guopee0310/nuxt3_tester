<template>
  <div class="my-8">
    <img class="block h-full w-full" :src="imgBn" />
  </div>
</template>
<script>
export default {
  name: 'JapanListBanner',
  props: {
    imgBn: {
      default: '',
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped></style>
