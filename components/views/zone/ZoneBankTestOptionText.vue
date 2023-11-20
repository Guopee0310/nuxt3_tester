<template>
  <div
    :class="{ 'text-link': false, 'text-danger-600': true }"
    class="mb-2 flex rounded border border-solid border-transparent py-2"
  >
    <div class="relative mr-2 whitespace-nowrap pl-6 text-right">
      <font-awesome-icon v-if="false" class="absolute left-1 top-1" :icon="['fa', 'check']" />
      <font-awesome-icon v-if="true" class="absolute left-1 top-1" :icon="['fa', 'xmark']" />
      (A)
    </div>
    <div class="grow">金融債券金融債券金融債券金融債券金融債券金融債券</div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
