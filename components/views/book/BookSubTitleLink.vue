<template>
  <nuxt-link
    class="group hidden cursor-pointer items-center gap-1 text-lg md:flex"
    :to="targetLink"
  >
    <span class="font-bold">看更多</span>
    <font-awesome-icon
      class="text-base-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-500"
      :icon="['fas', 'arrow-right']"
    />
  </nuxt-link>
</template>
<script>
export default {
  name: 'BookSubTitleLink',
  props: {
    targetLink: {
      default: '',
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped></style>
