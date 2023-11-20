<template>
  <div class="mb-4 bg-[#f8f8f8] p-3 lg:hidden">
    <font-awesome-icon
      class="text-lg"
      :icon="['fa', `${collapsed ? 'circle-plus' : 'circle-minus'}`]"
    />
    <span class="pl-1 text-xl font-bold"><slot>分類名稱</slot></span>
  </div>
</template>
<script>
export default {
  props: {
    collapsed: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss"></style>
