<template>
  <div class="hidden lg:block">
    <div>
      <nuxtLink
        to="#"
        class="relative mb-2 block border-2 border-solid border-primary-500 px-3 py-2"
      >
        <div class="text-lg font-bold text-primary-500">Contact</div>
        <div class="text-sm">聯絡我們</div>
        <font-awesome-icon
          class="absolute inset-y-0 right-2 my-auto text-[8px]"
          :icon="['fa', 'play']"
        />
      </nuxtLink>
      <nuxtLink
        to="/onSale/toOnSaleList"
        class="relative mb-2 block border-2 border-solid border-primary-500 px-3 py-2"
      >
        <div class="text-lg font-bold text-primary-500">On Sale</div>
        <div class="text-sm">優惠課程</div>
        <font-awesome-icon
          class="absolute inset-y-0 right-2 my-auto text-[8px]"
          :icon="['fa', 'play']"
        />
      </nuxtLink>
      <a
        class="relative mb-2 flex items-center justify-between rounded-md bg-primary-500 px-3 py-[8px] text-white"
        href="http://www.tkbtv.com.tw/tkbxo/index/toIndex.action"
        target="_blank"
        rel="noopener"
      >
        XO影音解答
        <font-awesome-icon :icon="['fab', 'youtube']" />
      </a>
      <a
        class="relative mb-2 flex items-center justify-between rounded-md bg-primary-500 px-3 py-[8px] text-white"
        href="https://www.tkbtv.com.tw/front/toIndex.action"
        target="_blank"
        rel="noopener"
      >
        雲端學習
        <font-awesome-icon :icon="['fa', 'cloud']" />
      </a>
      <a
        class="relative mb-2 flex items-center justify-between rounded-md bg-primary-500 px-3 py-[8px] text-white"
        href="https://www.tkbgo.com.tw/toBlog.jsp"
        target="_blank"
        rel="noopener"
      >
        相關粉絲頁
        <font-awesome-icon :icon="['fa', 'message']" />
      </a>
    </div>
    <div class="mt-5 flex justify-between">
      <a href="https://www.facebook.com/tkbgo.com.tw/" target="_blank">
        <img class="w-10 rounded" src="~/assets/img/social_media/facebook.png" alt="" />
      </a>
      <a href="https://page.line.me/uog5903w" target="_blank">
        <img class="w-10 rounded" src="~/assets/img/social_media/line.png" alt="" />
      </a>
      <a href="https://www.youtube.com/channel/UC5PnsCWCndEN7O7CsCDltgA" target="_blank">
        <img class="w-10 rounded" src="~/assets/img/social_media/youtube.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang=""></style>
