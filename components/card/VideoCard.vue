<template>
  <div
    class="flex h-full cursor-pointer flex-col justify-between transition-all hover:translate-y-[-1px] hover:shadow-lg"
  >
    <div>
      <div class="mb-1 flex aspect-video items-center justify-center overflow-hidden md:mb-2">
        <img
          src="https://www.tkbtv.com.tw/upload/pic/033158a120230323194046.jpg"
          alt=""
          title=""
          class="h-full w-full object-cover"
        />
      </div>
      <div class="mb-1 line-clamp-1 text-lg md:text-xl">
        【升學考試】112學測落點分析直播精華｜學測落點｜申請入學｜
      </div>
      <div class="flex h-[1.5em] flex-wrap gap-x-3 overflow-clip text-link md:h-[3em]">
        <a href="javascript:;">#學測</a>
        <a href="javascript:;">#申請入學</a>
        <a href="javascript:;">#個人申請</a>
        <a href="javascript:;">#學測落點</a>
        <a href="javascript:;">#備審</a>
        <a href="javascript:;">#面試</a>
      </div>
    </div>
    <div class="flex flex-wrap items-center justify-between">
      <div class="flex gap-x-4 text-base-400">
        <div class="whitespace-nowrap">
          <font-awesome-icon :icon="['fas', 'eye']" class="mr-1 text-secondary-500" />26
        </div>
        <div class="whitespace-nowrap">
          <font-awesome-icon :icon="['fas', 'clock']" class="mr-1 text-secondary-500" />2023-03-02
        </div>
      </div>
      <div class="flex flex-1 items-center justify-end gap-2">
        <div class="whitespace-nowrap bg-primary-500 p-1 text-xs leading-none text-white">
          上榜心得
        </div>
        <div class="whitespace-nowrap bg-base-300 p-1 text-xs leading-none text-white">
          <font-awesome-icon :icon="['fas', 'play']" class="mr-1" />LIVE
        </div>
        <a href="javascript:;" class="text-2xl text-base-400"
          ><font-awesome-icon :icon="['far', 'trash-can']"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped></style>
