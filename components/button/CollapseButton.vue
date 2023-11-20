<template>
  <div
    class="inline-block cursor-pointer rounded border border-solid border-[#666] px-2 py-1 text-center text-lg text-base-500"
  >
    <font-awesome-icon :icon="['fa', 'circle-chevron-down']" class="mr-1" />
    <slot>收合按鈕</slot>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
