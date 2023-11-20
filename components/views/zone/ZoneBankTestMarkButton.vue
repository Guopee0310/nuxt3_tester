<template>
  <button
    type="button"
    :class="[width, height, isMarked ? 'text-primary-500' : 'text-base-200']"
    class="flex flex-col items-center"
    @click="isMarked = !isMarked"
  >
    <div :class="[textDisplay, textSize]">{{ isMarked ? '已標記' : '做記號' }}</div>
    <font-awesome-icon :icon="['fas', 'thumbtack']" :class="[iconSize]" />
  </button>
</template>
<script>
export default {
  props: {
    width: { default: 'w-8' },
    height: { default: 'h-auto' },
    textDisplay: { default: 'block' },
    iconSize: { default: 'text-3xl' },
    textSize: { default: 'text-xs' }
  },
  data() {
    return {
      isMarked: false
    }
  }
}
</script>
<style lang="scss" scoped></style>
