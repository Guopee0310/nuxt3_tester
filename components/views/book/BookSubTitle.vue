<template>
  <div class="mb-3 flex justify-center md:justify-between">
    <div class="hidden md:block"></div>
    <div class="title-info flex items-center justify-center">
      <img class="z-[1]" src="~/assets/img/book/title-book.svg" alt="bookicon" />
      <h2 class="z-[1] mx-2 text-xl font-semibold tracking-wider md:text-2xl">
        <slot name="bookSubTitle">新書上架</slot>
      </h2>
      <img :class="[display]" class="z-[1]" :src="iconSrc" />
    </div>
    <slot name="rightTextShow"><div class="hidden md:block" style="width: 76px"></div></slot>
  </div>
</template>
<script>
export default {
  name: 'BookSubTitle',
  props: {
    iconSrc: {
      default: '',
      type: String
    },
    display: { default: 'hidden' }
  }
}
</script>
<style lang="scss" scoped>
.title-info {
  position: relative;
  &::before {
    content: '';
    display: block;
    height: 20px;
    width: 105%;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2px;
  }
}
</style>
