<template>
  <div
    class="relative mb-[2%] h-full w-full rounded-full bg-cover bg-no-repeat"
    :style="`width:${size}; height:${size}; background-image:url('https://www.tkbtv.com.tw/upload/${imgUrl}')`"
  >
    <img
      class="absolute -bottom-[8%] left-[2px] scale-[1.2]"
      src="~/assets/img/others/ribbon.png"
      alt=""
    />
  </div>
</template>
<script>
export default {
  props: {
    size: String,
    imgUrl: String
  }
}
</script>
<style lang="scss"></style>
