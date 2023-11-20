<template>
  <div
    class="flex flex-col gap-4 [&>:not(:last-child)]:border-b [&>:not(:last-child)]:border-solid [&>:not(:last-child)]:border-base-200 [&>:not(:last-child)]:pb-4"
  >
    <nuxt-link
      to="/schoolZone/review/toReview"
      class="flex flex-col gap-x-4 gap-y-2 hover:!opacity-100 lg:flex-row lg:items-center"
    >
      <div class="flex items-center gap-2">
        <div
          :class="[photoSizePc]"
          class="aspect-square w-16 flex-initial overflow-clip rounded-full shadow-md"
        >
          <img
            class="block aspect-auto h-full w-full object-cover"
            src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
            alt="研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）"
            title="研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）"
          />
        </div>
        <div class="flex-1 lg:hidden">
          <h3 class="line-clamp-2 block text-2xl font-semibold">
            研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）
          </h3>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="hidden lg:block">
          <h3 class="line-clamp-1 block text-2xl font-semibold">
            研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）
          </h3>
        </div>
        <div class="flex flex-wrap gap-x-3 gap-y-1">
          <div class="flex gap-1">
            <div
              class="flex w-[6em] items-center justify-center whitespace-nowrap bg-secondary-500 text-xs leading-none text-white"
            >
              原學校
            </div>
            <div class="text-base-400">國立台灣師範大學 機械工程學系</div>
          </div>
          <div class="flex gap-1">
            <div
              class="flex w-[6em] items-center justify-center whitespace-nowrap bg-primary-500 text-xs leading-none text-white"
            >
              考取學校
            </div>
            <div class="text-base-400">成功大學 機械工程學系丙組（榜首）</div>
          </div>
        </div>
        <div :class="[textLines]" class="text-lg">
          學習工數需要花相對較長的時間，除了觀念要清晰以外，還需要練習題目來熟悉計算技巧。我認為工數是準備機械所份量最重的科目，若把它當數學會很痛苦。工程數學顧名思義是工程上需要用到的數學，所以每個章節都會有它的物理意義。我的方式是努力理解每個微分方程、轉換、矩陣、向量的物理意義，也能幫助自己理解以後遇到不同的工程問題時它的解會是甚麼形式。
        </div>
      </div>
    </nuxt-link>
    <nuxt-link
      to="/schoolZone/review/toReview"
      class="flex flex-col gap-x-4 gap-y-2 hover:!opacity-100 lg:flex-row lg:items-center"
    >
      <div class="flex items-center gap-2">
        <div
          :class="[photoSizePc]"
          class="aspect-square w-16 flex-initial overflow-clip rounded-full shadow-md"
        >
          <img
            class="block aspect-auto h-full w-full object-cover"
            src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095948.jpg"
            alt="研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）"
            title="研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）"
          />
        </div>
        <div class="flex-1 lg:hidden">
          <h3 class="line-clamp-2 block text-2xl font-semibold">
            研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）
          </h3>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <div class="hidden lg:block">
          <h3 class="line-clamp-1 block text-2xl font-semibold">
            研究所考試心得〡108年考取成功大學 機械工程學系丙組 _王Ｏ卷（榜首）
          </h3>
        </div>
        <div class="flex flex-wrap gap-x-3 gap-y-1">
          <div class="flex gap-1">
            <div
              class="flex w-[6em] items-center justify-center whitespace-nowrap bg-secondary-500 text-xs leading-none text-white"
            >
              原學校
            </div>
            <div class="text-base-400">國立台灣師範大學 機械工程學系</div>
          </div>
          <div class="flex gap-1">
            <div
              class="flex w-[6em] items-center justify-center whitespace-nowrap bg-primary-500 text-xs leading-none text-white"
            >
              考取學校
            </div>
            <div class="text-base-400">成功大學 機械工程學系丙組（榜首）</div>
          </div>
        </div>
        <div :class="[textLines]" class="text-lg">
          學習工數需要花相對較長的時間，除了觀念要清晰以外，還需要練習題目來熟悉計算技巧。我認為工數是準備機械所份量最重的科目，若把它當數學會很痛苦。工程數學顧名思義是工程上需要用到的數學，所以每個章節都會有它的物理意義。我的方式是努力理解每個微分方程、轉換、矩陣、向量的物理意義，也能幫助自己理解以後遇到不同的工程問題時它的解會是甚麼形式。
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  photoSizePc: { type: String, default: 'lg:w-[160px]' },
  textLines: { type: String, default: 'line-clamp-2' }
})
</script>
