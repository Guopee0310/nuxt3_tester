<template>
  <div class="mb-4 border-b border-dashed border-primary-500 pb-2 pt-4 text-primary-500">
    <div class="container">
      <h1 class="text-xl tracking-[0.2em]">{{ title }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '預設標題'
    }
  }
}
</script>
<style lang="scss"></style>
