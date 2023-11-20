<template>
  <nuxt-link class="inline-block w-full" to="/japanZone/news/toNews">
    <div class="flex w-full flex-col gap-2 md:flex-row">
      <div class="mx-auto w-full border border-solid md:w-3/12 md:flex-[0_0_25%]">
        <div class="flex h-auto w-full items-center justify-center overflow-hidden md:h-[126px]">
          <img
            class="block h-full w-full object-cover object-center md:w-auto"
            src="https://www.tkbtv.com.tw/p20190826EC002_1100_380/toPic.action"
          />
        </div>
      </div>
      <div class="mx-auto w-full md:w-9/12 md:flex-[0_1_75%]">
        <h3 class="mb-2 line-clamp-2 h-auto text-xl font-semibold text-secondary-500 md:text-2xl">
          2023日檢第一回考試報名延長，7/2進行考試│JLPT®
        </h3>
        <div class="line-clamp-2 h-auto">
          JLPT是日文學習者最常考的日文檢定，具有國際效力的優點也可應用在升學就業方面，日文基本介紹、考科講解由下列文章一一講解。
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
export default {
  name: 'JapanInfoItem'
}
</script>
<style lang="scss" scoped></style>
