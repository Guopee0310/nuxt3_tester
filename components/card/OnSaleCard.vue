<template>
  <nuxt-link class="t-line l-line relative w-full" :to="url" target="_blank">
    <div class="mb-2">
      <img class="img-outter w-full object-cover" :src="imgSrc" :alt="imgAlt" />
    </div>
    <h3 class="mb-2 font-semibold text-primary-500">
      {{ title }}
    </h3>
    <p>
      {{ summary }}
    </p>
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  },
  imgSrc: {
    type: String,
    default: ''
  },
  imgAlt: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.img-outter {
  aspect-ratio: 540/244;
}
.t-line:not(:last-child) {
  @apply mb-6 border-b border-solid border-b-[#ddd] pb-6 md:mb-0 md:border-0 md:pb-0;
}
.l-line:not(:nth-child(3n + 3))::after {
  content: '';
  width: 1px;
  height: 100%;
  background: #ddd;
  position: absolute;
  top: 0px;
  @apply -right-6 hidden md:block;
}
</style>
