<template>
  <div class="flex flex-col gap-3">
    <img
      src="https://www.tkbtv.com.tw/p20160831EC010_1100_380/toPic.action"
      alt="圖片說明"
      title="圖片說明"
    />
    <h2 class="font-semibold text-base-800">
      機械所考科準備〡工數、工程力學、熱力學、流體力學準備技巧
    </h2>
    <div class="flex flex-wrap justify-between gap-y-2">
      <div class="flex items-center gap-x-2 sm:gap-x-3">
        <div
          class="w-18 whitespace-nowrap bg-secondary-500 py-1 text-center leading-none text-white"
        >
          研究所推甄
        </div>
        <div class="flex items-center gap-1 text-base-400">
          <font-awesome-icon :icon="['fas', 'calendar']" />2023-06-08
        </div>
        <div class="flex items-center gap-1 text-base-400">
          <font-awesome-icon :icon="['fas', 'eye']" />200000
        </div>
      </div>
      <div class="flex items-center justify-end gap-x-2 sm:gap-x-3">
        <div>分享至</div>
        <nuxt-link to="https://www.facebook.com/sharer.php?u=" class="text-4xl text-social-fb-500">
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
        </nuxt-link>
        <nuxt-link
          to="https://social-plugins.line.me/lineit/share?url="
          class="text-4xl text-social-line-500"
        >
          <font-awesome-icon :icon="['fab', 'line']" />
        </nuxt-link>
      </div>
    </div>
    <hr />
  </div>
</template>

<script setup></script>
