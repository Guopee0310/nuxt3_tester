<template>
  <div>
    <div class="my-3 flex w-full flex-col items-center justify-center text-center">
      <div class="my-3 w-full border border-solid border-base-300 py-13 text-2xl text-base-400">
        購物車內無任何商品
      </div>
      <!-- <ButtonS2 class="max-w-[200px]">繼續購物</ButtonS2> -->
      <nuxt-link to="/">
        <ButtonS2 class="max-w-[200px]">繼續購物</ButtonS2>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import ButtonS2 from '@/components/button/ButtonS2.vue'
export default {
  name: 'NothingCart',
  components: {
    ButtonS2
  },
  methods: {
    btnClick(url) {
      window.location.href(url)
    }
  }
}
</script>
<style lang="scss" scoped></style>
