<template>
  <li class="mb-[7px]">
    <div class="mb-1 cursor-pointer overflow-hidden rounded bg-base-50 px-2 py-1" @click="toggle()">
      會員權益說明<span class="float-right">{{ isShow ? '-' : '+' }}</span>
    </div>
    <div :class="{ hidden: !isShow }" class="mb-2 px-2">
      <nuxt-link
        class="mt-1 block leading-loose text-secondary-600 underline md:leading-relaxed"
        to=""
        >會員權益說明</nuxt-link
      >
      <nuxt-link
        class="mt-1 block leading-loose text-secondary-600 underline md:leading-relaxed"
        to=""
        >會員權益說明</nuxt-link
      >
      <nuxt-link
        class="mt-1 block leading-loose text-secondary-600 underline md:leading-relaxed"
        to=""
        >會員權益說明</nuxt-link
      >
      <nuxt-link
        class="mt-1 block leading-loose text-secondary-600 underline md:leading-relaxed"
        to=""
        >會員權益說明</nuxt-link
      >
    </div>
  </li>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
      this.$emit('adjust')
    }
  }
}
</script>
<style lang="scss"></style>
