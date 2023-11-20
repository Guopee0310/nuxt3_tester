<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-4 py-3">
          <h1 class="text-3xl text-base-800">研究所簡章下載</h1>
          <AnchorList direction="flex-wrap">
            <AnchorPoint
              :colorchart="'color:#0067b6;'"
              :icon="['fa', 'caret-down']"
              :target-id="'#sort1'"
              :target-name="'研究所考試簡章'"
            />
            <AnchorPoint
              :colorchart="'color:#1d8e8e;'"
              :icon="['fa', 'caret-down']"
              :target-id="'#sort2'"
              :target-name="'研究所推甄簡章'"
            />
            <AnchorPoint
              :colorchart="'color:#1d8e8e;'"
              :icon="['fa', 'caret-down']"
              :target-id="'#sort3'"
              :target-name="'在職專班簡章'"
            />
          </AnchorList>
          <div class="grid gap-y-16">
            <section class="grid gap-y-8">
              <h2 id="sort1" class="text-2xl font-medium text-primary-500">研究所考試簡章</h2>
              <div class="grid gap-y-3">
                <h3 class="block border-b border-solid border-primary-500 text-xl">
                  <span class="inline-block rounded-t bg-primary-500 px-2 py-1 text-white"
                    >國立大學</span
                  >
                </h3>
                <div class="flex justify-end gap-2">
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />考試諮詢講座</ButtonS2
                  >
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />推甄諮詢講座</ButtonS2
                  >
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w-1/3">簡章內容及下載</th>
                      <th class="w-1/3">報名日</th>
                      <th class="w-1/3">考試日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="grid gap-y-3">
                <h3 class="block border-b border-solid border-primary-500 text-xl">
                  <span class="inline-block rounded-t bg-primary-500 px-2 py-1 text-white"
                    >國立大學</span
                  >
                </h3>
                <div class="flex justify-end gap-2">
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />考試諮詢講座</ButtonS2
                  >
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />推甄諮詢講座</ButtonS2
                  >
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w-1/3">簡章內容及下載</th>
                      <th class="w-1/3">報名日</th>
                      <th class="w-1/3">考試日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="grid gap-y-8">
              <h2 id="sort2" class="text-2xl font-medium text-primary-500">研究所推甄簡章</h2>
              <div class="grid gap-y-3">
                <h3 class="block border-b border-solid border-primary-500 text-xl">
                  <span class="inline-block rounded-t bg-primary-500 px-2 py-1 text-white"
                    >國立大學</span
                  >
                </h3>
                <div class="flex justify-end gap-2">
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />考試諮詢講座</ButtonS2
                  >
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />推甄諮詢講座</ButtonS2
                  >
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w-1/3">簡章內容及下載</th>
                      <th class="w-1/3">報名日</th>
                      <th class="w-1/3">考試日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            <section class="grid gap-y-8">
              <h2 id="sort3" class="text-2xl font-medium text-primary-500">在職專班簡章</h2>
              <div class="grid gap-y-3">
                <h3 class="block border-b border-solid border-primary-500 text-xl">
                  <span class="inline-block rounded-t bg-primary-500 px-2 py-1 text-white"
                    >國立大學</span
                  >
                </h3>
                <div class="flex justify-end gap-2">
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />考試諮詢講座</ButtonS2
                  >
                  <ButtonS2 margin="my-0"
                    ><fa :icon="['fas', 'paste']" class="mr-1" />推甄諮詢講座</ButtonS2
                  >
                </div>
                <table class="table">
                  <thead>
                    <tr>
                      <th class="w-1/3">簡章內容及下載</th>
                      <th class="w-1/3">報名日</th>
                      <th class="w-1/3">考試日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                    <tr>
                      <td class="align-middle">
                        <a href="javascript:;" class="text-lg text-link">國立台灣大學</a>
                      </td>
                      <td>111.11.29 9時~111.12.6 24時止</td>
                      <td>
                        筆試112.2.4
                        口試日期及地點請查閱簡章內頁，個人口試時間由各系所逕於口試日前公布於各系所網站
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
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
import AnchorList from '@/components/others/AnchorList.vue'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu('41726330') // 專區選單設定
// export default {
//     layout: 'main',
//     components: {
//         ZoneTemplate,
//         ZoneTemplateXPadding,
//         ButtonCount,
//         ButtonIconS2,
//         ButtonIconS3,
//         ButtonS2,
//         AnchorList,
//         AnchorPoint
//     }
// }
</script>

<style lang="scss" scoped>
.table {
  @apply w-full;
}
.table th,
td {
  @apply border border-solid border-base-200 px-1 py-2;
}
.table th {
  @apply bg-base-100 font-bold;
}
</style>
