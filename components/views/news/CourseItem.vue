<template>
  <nuxtLink
    :to="`/product/toProductDetail?f_subject_no=${id}`"
    class="mb-3 inline-block shadow-[0_0_10px_rgba(0,0,0,.15)]"
  >
    <div class="dc-imgBox">
      <img :src="picture" :alt="name" />
    </div>
    <div class="px-4 py-3">
      <p>{{ name }}</p>
      <p class="pt-2 text-primary-400">
        特價優惠 <span class="text-2xl">${{ salePrice }}</span>
      </p>
    </div>
  </nuxtLink>
</template>
<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => {}
  }
})

const { id, salePrice, picture, name, classType } = toRefs(props.info)
</script>
<style lang=""></style>
