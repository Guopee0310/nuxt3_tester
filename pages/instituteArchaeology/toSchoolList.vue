<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8 py-3">
          <h1 class="text-3xl text-base-800">各校研究所考古題下載</h1>
          <h1 class="text-3xl text-base-800">大學轉學考考古題下載</h1>
          <table class="table">
            <thead>
              <tr>
                <th class="w-2/3">學校</th>
                <th class="w-1/3">試題連結</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                </td>
                <td>
                  <a href="javascript:;" class="text-lg text-link">全部系所</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                </td>
                <td>
                  <a href="javascript:;" class="text-lg text-link">全部系所</a>
                </td>
              </tr>
            </tbody>
          </table>
        </ZoneTemplateXPadding>
      </main>
      <aside
        class="flex flex-col gap-3 lg:order-1 lg:w-[280px] lg:flex-initial lg:border-r lg:border-solid lg:border-base-200"
      >
        <div class="px-2">
          <ButtonCount count-bg="bg-[#9cd365]">
            <template #title>最新消息</template>
            <template #count>32</template>
          </ButtonCount>
          <ButtonCount count-bg="bg-[#9cd365]">
            <template #title>焦點文章</template>
            <template #count>134</template>
          </ButtonCount>
          <ButtonCount count-bg="bg-[#9cd365]" bottom-line="border-b-0">
            <template #title>學員心得</template>
            <template #count>473</template>
          </ButtonCount>
        </div>
        <div class="grid grid-cols-1 gap-2 sm:max-lg:grid-cols-2">
          <ButtonIconS2 icon-bg="bg-[#9cd365]">
            <template #title>升學頻道</template>
            <template #subtitle>CHANNEL</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-[#caa389]">
            <template #icon><fa :icon="['fas', 'microphone']" /></template>
            <template #title>免費講座</template>
            <template #subtitle>LECTURE</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-primary-400">
            <template #icon><fa :icon="['fas', 'phone-flip']" /></template>
            <template #title>聯絡我們</template>
            <template #subtitle>CONTENT</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-[#ffa791]">
            <template #icon><fa :icon="['fas', 'pencil']" /></template>
            <template #title>優惠課程</template>
            <template #subtitle>ON SALE</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-[#9cd365]">
            <template #icon><fa :icon="['fas', 'pencil']" /></template>
            <template #title>推薦課程</template>
            <template #subtitle>ON SALE</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-[#caa389]">
            <template #title>升學頻道</template>
            <template #subtitle>CHANNEL</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-primary-400">
            <template #icon><fa :icon="['fas', 'microphone']" /></template>
            <template #title>免費講座</template>
            <template #subtitle>LECTURE</template>
          </ButtonIconS2>
          <ButtonIconS2 icon-bg="bg-[#ffa791]">
            <template #icon><fa :icon="['fas', 'phone-flip']" /></template>
            <template #title>聯絡我們</template>
            <template #subtitle>CONTENT</template>
          </ButtonIconS2>
        </div>
        <div class="grid grid-cols-1 gap-x-2 px-2 sm:max-lg:grid-cols-2">
          <ButtonIconS3 color="text-[#642719]">
            <template #title>峰碩課程</template>
          </ButtonIconS3>
          <ButtonIconS3>
            <template #icon><fa :icon="['fab', 'youtube']" /></template>
            <template #title>XO影音解答</template>
          </ButtonIconS3>
          <ButtonIconS3
            color="text-[#705c57]"
            bottom-line="border-b-2 sm:max-lg:border-b-0 border-dotted border-base-200"
          >
            <template #icon><fa :icon="['fas', 'cloud']" /></template>
            <template #title>雲端學習</template>
          </ButtonIconS3>
          <ButtonIconS3 color="text-[#eeb58f]" bottom-line="border-b-0">
            <template #icon><fa :icon="['fas', 'comment-dots']" /></template>
            <template #title>相關粉絲頁</template>
          </ButtonIconS3>
        </div>
      </aside>
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ButtonCount from '@/components/button/ButtonCount.vue'
import ButtonIconS2 from '@/components/button/ButtonIconS2.vue'
import ButtonIconS3 from '@/components/button/ButtonIconS3.vue'
import ButtonS2 from '@/components/button/ButtonS2.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu('63278050') // 專區選單設定

// export default {
//     layout: 'main',
//     components: {
//         ZoneTemplate,
//         ZoneTemplateXPadding,
//         ButtonCount,
//         ButtonIconS2,
//         ButtonIconS3,
//         ButtonS2
//     }
// }
</script>

<style lang="scss" scoped>
.table {
  @apply w-full;
}
.table th,
td {
  @apply border border-solid border-base-200 px-1 py-2 align-middle;
}
.table th {
  @apply bg-base-100 font-bold;
}
</style>
