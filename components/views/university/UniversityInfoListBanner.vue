<template>
  <div
    class="flex h-[320px] min-h-[140px] items-center justify-center bg-cover bg-center bg-no-repeat"
    :style="{
      backgroundImage: 'url(' + require('~/assets/img/university/' + infoType + 'Info-bg.png') + ')'
    }"
  >
    <img :src="require(`~/assets/img/university/${infoType}logo.svg`)" alt="" />
  </div>
</template>
<script>
export default {
  props: ['infoType']
}
</script>
<style lang=""></style>
