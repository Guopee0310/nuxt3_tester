<template>
  <div
    class="flex h-full flex-col border border-solid border-[rgba(0,0,0,.1)] bg-[rgba(0,0,0,0.05)] p-1"
  >
    <div class="img_box type_vertical_center">
      <img
        class="aspect-[1.7/1]"
        :src="
          subject.picture
            ? subject.picture
            : `/_nuxt/assets/img/product/product_${classTypeId}.webp`
        "
      />
    </div>
    <div class="py-1">
      <h3 class="text-base font-bold">{{ subject.name }}</h3>
    </div>

    <div class="mt-auto">
      <span class="inline-block font-['tahoma'] text-xs">原價 ${{ subject.originalPrice }}</span>
      <div class="font-['tahoma'] font-bold">
        <span class="text-xs text-danger-600">特惠價</span>
        <span class="text-base text-danger-600">${{ subject.salePrice }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({
  subject: {
    type: Object,
    default: () => {}
  },
  classTypeId: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
