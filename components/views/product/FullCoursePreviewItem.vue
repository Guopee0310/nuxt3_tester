<template>
  <div class="mb-3">
    <div class="mb-2 cursor-pointer text-lg text-base-500" @click="isShow = !isShow">
      <font-awesome-icon
        class="mr-1 text-secondary-500"
        :icon="['far', `square-${isShow ? 'minus' : 'plus'}`]"
      />
      線性代數-雲端 - 林緯
    </div>
    <div :class="{ hidden: !isShow }" class="flex-wrap pl-5 duration-400 ease-in">
      <div
        class="mb-2 mr-3 flex w-full cursor-pointer items-center rounded bg-[#e9f5f6] px-2 py-1 text-secondary-500 duration-100 ease-in-out hover:bg-secondary-500 hover:text-white"
        data-video-path="https://media.tkbtv.com.tw/vod2/_definst_/mp4:TKB01/Propaganda/2021/V2107LA0000001-01.mp4/playlist.m3u8?wowzatokenendtime=1679932076&amp;wowzatokenhash=ZGOPL0CQBHdTxxDf5YVJRhlv1EcHboiqfoHI-C-A9xU="
      >
        <font-awesome-icon class="mr-1" :icon="['far', 'circle-play']" />課程簡介
      </div>
      <div
        class="mb-2 mr-3 flex w-full cursor-pointer items-center rounded bg-[#e9f5f6] px-2 py-1 text-secondary-500 duration-100 ease-in-out hover:bg-secondary-500 hover:text-white"
        data-video-path="https://media.tkbtv.com.tw/vod2/_definst_/mp4:TKB01/test/2021/V2107LA0000001.mp4/playlist.m3u8?wowzatokenendtime=1679932076&amp;wowzatokenhash=t-WhGgGU4zeOey59OjuPIuTtk-EZ-Vh6Xi15MESeGwg="
      >
        <font-awesome-icon class="mr-1" :icon="['far', 'circle-play']" />章節介紹
      </div>
      <div
        class="mb-2 mr-3 flex w-full cursor-pointer items-center rounded bg-[#e9f5f6] px-2 py-1 text-secondary-500 duration-100 ease-in-out hover:bg-secondary-500 hover:text-white"
        data-video-path="https://media.tkbtv.com.tw/vod2/_definst_/mp4:TKB01/test/2021/V2107LA0000002-02.mp4/playlist.m3u8?wowzatokenendtime=1679932076&amp;wowzatokenhash=pA-K7oN2EjjSZQ-rKQESy0if5YggtX753gAYXHhh2R8="
      >
        <font-awesome-icon class="mr-1" :icon="['far', 'circle-play']" />特徵根的重要性
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>
<style lang=""></style>
