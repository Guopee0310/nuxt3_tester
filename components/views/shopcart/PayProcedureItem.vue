<template>
  <div
    class="flex flex-1 flex-col items-center gap-2 border-0 border-solid border-base-300 p-1 md:flex-row md:border"
    :style="outercolorchange"
  >
    <div
      class="flex h-5 w-5 flex-col items-center justify-center rounded bg-base-300 p-5 text-base-900"
      :style="colorchange"
    >
      <span class="text-xs">STEP</span><span class="text-lg">{{ numbername }}</span>
    </div>
    <span class="hidden text-base-900 md:block" :style="textcolorchange">{{ stepname }}</span>
  </div>
</template>
<script>
export default {
  name: 'PayProcedureItem',
  props: ['outercolorchange', 'colorchange', 'numbername', 'textcolorchange', 'stepname']
}
</script>
<style lang="scss" scoped></style>
