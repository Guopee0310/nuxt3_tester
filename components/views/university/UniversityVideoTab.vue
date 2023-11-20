<template>
  <div class="relative -mt-[37px] flex justify-center">
    <button class="tab relative mx-2 inline-block rounded-t-lg bg-base-50 px-3 py-2">
      影片總覽
    </button>
    <button
      class="tab relative mx-2 inline-block rounded-t-lg bg-base-50 px-3 py-2"
      @click.stop="tabListVisible = !tabListVisible"
    >
      影片列表
      <font-awesome-icon
        class="pointer-events-none text-xs"
        :icon="['fas', `${tabListVisible ? 'caret-up' : 'caret-down'}`]"
      />
      <div
        v-show="tabListVisible"
        class="absolute -bottom-[165px] left-0 z-20 w-full rounded-sm border border-solid border-base-200 bg-white py-1"
      >
        <nuxtLink to="" class="inline-block h-8 w-full text-center leading-[40px]"
          >最新上線</nuxtLink
        >
        <nuxtLink to="" class="inline-block h-8 w-full text-center leading-[40px]"
          >考試攻略</nuxtLink
        >
        <nuxtLink to="" class="inline-block h-8 w-full text-center leading-[40px]"
          >學員心得</nuxtLink
        >
        <nuxtLink to="" class="inline-block h-8 w-full text-center leading-[40px]"
          >課程試聽</nuxtLink
        >
      </div>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabListVisible: false
    }
  },
  mounted() {
    const body = document.body
    body.addEventListener('click', (e) => {
      if (e.target.nodeName === 'BUTTON') return
      this.tabListVisible = false
    })
  }
}
</script>
<style lang="scss" scoped>
.tab::before {
  content: url('~/assets/img/university/videoTabCorner.png');
  position: absolute;
  left: -8px;
  bottom: 0;
}

.tab::after {
  content: url('~/assets/img/university/videoTabCorner.png');
  position: absolute;
  right: -8px;
  bottom: 0;
  transform: rotateY(180deg);
}
</style>
