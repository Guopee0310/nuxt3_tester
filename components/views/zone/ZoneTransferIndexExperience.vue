<template>
  <div
    class="flex flex-col gap-x-4 gap-y-2 rounded-md bg-white px-4 py-3 lg:flex-row lg:items-center"
  >
    <div class="flex items-center gap-3">
      <div class="aspect-square w-16 rounded-full shadow-md lg:w-[160px]">
        <img
          class="block aspect-auto h-full w-full object-cover"
          :src="imgSrc"
          :alt="mainName + subName"
          :title="mainName + subName"
        />
      </div>
      <h3 class="block text-base font-semibold lg:hidden">
        <span class="block text-xl sm:inline-block">{{ mainName }}</span>
        <span class="sm:before:content-['（'] sm:after:content-['）']">{{ subName }}</span>
      </h3>
    </div>
    <div class="grid gap-3">
      <h3 class="hidden text-xl font-semibold lg:block">
        <span class="text-xl">{{ mainName }}</span>
        <span class="text-lg">（{{ subName }}）</span>
      </h3>
      <div class="pass">
        <div class="pass-title">同時考取：</div>
        <slot name="school">
          <span>霍格華茲魔法與巫術學院</span>
          <span>德姆蘭魔法學校</span>
        </slot>
      </div>
      <div>
        <slot name="depiction"
          >TKB讓我的人生有了很大的轉變，自從來這裡上課，我整個氣場運勢都變好了，發票頻頻中獎，做什麼事都順順利利，就算遇到困難也會出現貴人，這都要感謝TKB的諄諄教誨，指引我方向！</slot
        >
        <button
          type="button"
          class="inline whitespace-nowrap text-link underline"
          @click="$router.push('/review/toReview')"
        >
          點我看完整心得
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  mainName: { type: String, default: '姓名' },
  subName: { type: String, default: '原學校' },
  imgSrc: { type: String, default: '' },
  moreUrl: { type: String, default: '' }
})
</script>

<style lang="scss" scoped>
.pass {
  @apply flex flex-wrap items-center justify-center gap-2 sm:justify-start;
}
.pass-title {
  @apply w-full text-center font-semibold sm:inline sm:w-auto sm:text-left;
}
.pass span {
  @apply whitespace-nowrap rounded bg-[#FCE519] px-2 py-1;
}
</style>
