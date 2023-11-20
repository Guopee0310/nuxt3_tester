<template>
  <div class="relative mb-6 rounded border border-solid border-base-100 bg-white">
    <div class="flex flex-wrap items-center justify-between px-3 py-4">
      <div class="w-full grow lg:w-auto">
        <h3 class="mb-3 w-full text-2xl text-base-800 lg:w-auto">
          銀行考試109年第2次台灣金融研訓院金融人員會計學
        </h3>
        <div class="flex flex-wrap items-center text-base-400">
          <div class="mr-6 flex items-center">
            <div
              class="mr-1 inline-block whitespace-nowrap rounded-3xl bg-secondary-500 px-2 py-1 text-center text-sm text-white"
            >
              歷屆試題
            </div>
            40題
          </div>
          <div class="mr-6 mt-2 w-full lg:mt-0 lg:w-auto">
            <font-awesome-icon class="mr-1" :icon="['fa', 'globe']" />0人參加
          </div>
          <div class="mt-2 w-full lg:mt-0 lg:w-auto">
            <span class="rounded-3xl bg-base-100 px-2 py-[3px] font-bold text-secondary-600">
              <font-awesome-icon class="mr-1" :icon="['fa', 'file']" />附詳解
            </span>
          </div>
        </div>
      </div>
      <ButtonFavoriteShape class="ml-auto mr-2" />
      <ButtonS2 bg-color="bg-secondary-600" @click.native="$router.push({ name: 'toBankTest2' })"
        >預覽</ButtonS2
      >
    </div>
    <div class="absolute left-1 top-1 text-sm text-base-300">0</div>
  </div>
</template>
<script>
import ButtonS2 from '@/components/button/ButtonS2.vue'
import ButtonFavoriteShape from '@/components/button/ButtonFavoriteShape.vue'
export default {
  components: {
    ButtonS2,
    ButtonFavoriteShape
  },
  data() {
    return {
      isCollected: false
    }
  }
}
</script>
<style lang="scss" scoped></style>
