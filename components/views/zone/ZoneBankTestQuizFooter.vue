<template>
  <div
    class="flex flex-wrap items-center justify-between bg-gradient-to-r from-base-50 to-transparent px-3 py-4"
  >
    <div class="flex flex-wrap items-center">
      <div class="my-2 mr-6">
        <font-awesome-icon :icon="['fa', 'pen']" />
        單選題
      </div>
      <div class="my-2 mr-6">
        <font-awesome-icon :icon="['fa', 'globe']" />
        9人答題
      </div>
      <div class="my-2">
        <font-awesome-icon :icon="['fa', 'chart-pie']" />
        正確率77%
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
