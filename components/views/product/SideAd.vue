<template>
  <div class="hidden basis-full items-start justify-center pl-8 lg:flex lg:basis-1/4">
    <nuxtLink
      v-for="(ad, index) in ads"
      :key="index"
      class="inline-block"
      :to="ad.link"
      :title="ad.title"
      target="_blank"
    >
      <img :src="ad.picture" :alt="ad.title" />
    </nuxtLink>
  </div>
</template>
<script setup>
const { data: res } = await useApi('/api/ad/banner', {
  query: {
    adPositionId: 34,
    count: 1
  }
})
const ads = res.value.data
</script>
<style lang=""></style>
