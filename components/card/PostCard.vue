<template>
  <nuxt-link class="card-item placeholder-glow" to="">
    <div class="aspect-[26/9] overflow-hidden rounded">
      <img src="https://www.tkbtv.com.tw/p20230217EC002_1100_380/toPic.action" />
    </div>
    <div class="px-2 py-3">
      <h4 class="line-clamp-1 text-xl font-bold">
        <strong>文章標題文章標題文章標題文章標題文章標題</strong>
      </h4>
      <p class="line-clamp-1 text-lg">1行文章內容1行文章內容1行文章內容1行文章內容</p>
      <div class="mt-5 flex text-xs text-base-300">
        <span class="mr-5">
          <font-awesome-icon :icon="['far', 'calendar']" />
          2022.12.25
        </span>
        <span class="mr-5">
          <font-awesome-icon :icon="['far', 'eye']" />
          500000
        </span>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {}
</script>
<style lang=""></style>
