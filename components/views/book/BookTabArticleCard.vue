<template>
  <nuxt-link class="tab-card" :to="url">
    <div class="tab-card-head">
      <img
        src="https://img.tkbtv.com.tw/p20210427BC065_1100_380/toPic.action"
        alt="高中素養題庫介紹 | 解析素養導向試題"
      />
    </div>
    <div class="tab-card-body">
      <div class="tb-title line-clamp-2">
        <h3 class="tb-txt">02專訪蔣再益老師：首先最重要的，還是要先相信自己。</h3>
      </div>
      <div class="tb-info line-clamp-2">
        <p class="tb-info-txt">
          傳統通路的方式需要一層一層的建立關係，才需要花費大額金錢，才可以曝光在傳統的媒體上 ..
        </p>
      </div>
      <div class="tb-bottom">
        <div class="tb-class">購書城</div>
        <div class="tb-date">|<span class="tb-time">2023/01/01</span></div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.tab-card {
  width: 48.5%;
  display: flex;
  gap: 10px;
  cursor: pointer;
  @apply flex w-full cursor-pointer flex-col gap-2 sm:w-[47%] xl:w-[48.5%] xl:flex-row;
  .tab-card-head {
    @apply w-full flex-[0_0_auto] xl:w-[347px] xl:flex-shrink-0;
    > img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
      aspect-ratio: 347/120;
    }
  }

  .tab-card-body {
    @apply flex w-full grow flex-col justify-between gap-1 xl:w-[300px];
    .tb-title {
      @apply h-auto;
    }
    .tb-txt {
      font-size: 1rem;
      font-weight: bold;
      line-height: 1.4;
      margin: 0px;
    }
    .tb-info {
      @apply h-auto;
    }
    .tb-info-txt {
      font-size: 14px;
      line-height: 1.4;
      margin: 0px;
    }
    .tb-bottom {
      @apply flex items-center gap-2;
    }
    .tb-class {
      font-size: 14px;
      font-weight: bold;
      color: theme('colors.primary.500');
    }
    .tb-date {
      font-size: 12px;
      color: theme('colors.base.400');
    }
    .tb-time {
      margin-left: 8px;
      letter-spacing: 1.2px;
    }
  }
}
</style>
