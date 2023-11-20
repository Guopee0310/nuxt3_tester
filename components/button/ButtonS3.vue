<template>
  <div
    :class="[fontSize, padding, margin, bgColor, width]"
    class="inline-block cursor-pointer rounded-3xl text-center font-bold text-white shadow-lg duration-200 ease-in-out hover:opacity-80"
  >
    <slot>預設按鈕</slot>
  </div>
</template>
<script>
export default {
  props: {
    padding: { default: 'px-6 py-2' },
    bgColor: { default: 'bg-secondary-500' },
    width: { default: 'w-auto' },
    margin: { default: 'my-4' },
    fontSize: { default: 'text-lg' }
  }
}
</script>
<style lang=""></style>
