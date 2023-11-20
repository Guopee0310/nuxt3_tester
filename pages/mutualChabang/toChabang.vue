<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8 py-3">
          <h1 class="text-3xl text-base-800">查詢交叉查榜榜單（錄取榜單）</h1>
          <section class="bg-base-100 p-3">
            <h2 class="mb-3 text-xl">功能說明</h2>
            <ul class="list-disc pl-3">
              <li class="mb-2">
                線上查榜系統採<span class="mx-1 inline font-medium">資料庫</span>快速查榜。
              </li>
              <li class="mb-2">預設為本年度交叉查詢榜單。</li>
              <li class="mb-2">依查榜的資料，可直接點選整個系所的完整榜單，不必重複查詢。</li>
              <li class="mb-2">
                依查榜的資料，點選系所榜單後，可直接點選榜單裡其他考生之姓名、准考證查閱正取、備取記錄，以供揣測上榜機率。
              </li>
              <li class="text-danger-600">
                此系統僅為服務考生使用，方便各位考生迅速查榜，所列之姓名非本班所屬榜單，亦不會做後續使用。
              </li>
            </ul>
          </section>
          <section class="grid grid-cols-3 gap-x-3 gap-y-5">
            <div>
              <h3 class="mb-1 text-base text-base-400">年度</h3>
              <el-select v-model="selectYear.value" class="w-full">
                <el-option
                  v-for="item in selectYear.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="col-span-2 lg:col-span-1">
              <h3 class="mb-1 text-base text-base-400">准考證號碼</h3>
              <el-input v-model="admissionNumber" placeholder="請輸入"></el-input>
            </div>
            <div class="col-span-3 lg:col-span-1">
              <h3 class="mb-1 text-base text-base-400">應考生姓名</h3>
              <el-input v-model="examinee" placeholder="請輸入"></el-input>
            </div>
            <el-radio-group v-model="radioApplication" class="col-span-3 flex flex-wrap gap-y-2">
              <el-radio :label="1">研究所（一般生和在職專班）</el-radio>
              <el-radio :label="2">研究所（甄試生）</el-radio>
              <el-radio :label="3">大學轉學考</el-radio>
            </el-radio-group>
            <ButtonS2 margin="my-0" width="col-span-3 lg:col-span-1">搜尋結果</ButtonS2>
          </section>
          <section class="text-center text-3xl text-base-300">無榜單資料</section>
          <section>
            <h2 class="mb-3 text-2xl font-medium text-primary-500">
              研究所（一般生和在職專班）新進榜單
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th>准考<span class="inline whitespace-nowrap">證號</span></th>
                  <th>姓名</th>
                  <th>學校</th>
                  <th>系所<span class="inline whitespace-nowrap">榜單</span></th>
                  <th>組別</th>
                  <th>類別</th>
                  <th>初/複試</th>
                  <th>錄取別</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>abc00000</td>
                  <td>王小明</td>
                  <td>
                    <a href="javascript:;" class="text-link">國立台東大學</a>
                  </td>
                  <td>
                    <a href="javascript:;" class="text-link">教育學系教育研究碩士班</a>
                  </td>
                  <td>某個組</td>
                  <td>某個類</td>
                  <td>複試</td>
                  <td>某個別</td>
                </tr>
              </tbody>
            </table>
          </section>
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
zoneGraduateMenu('99042412') // 專區選單設定

// export default {
//     layout: 'main',
//     components: {
//         ZoneTemplate,
//         ZoneTemplateXPadding,
//         ButtonCount,
//         ButtonIconS2,
//         ButtonIconS3,
//         ButtonS2
//     },
//     data () {
//         return {
//             radioApplication: 1,
//             admissionNumber: '',
//             examinee: '',
//             selectYear: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '2024'
//                 },
//                 {
//                     value: '1',
//                     label: '2023'
//                 }]
//             }
//         };
//     }
// }
</script>

<style lang="scss" scoped>
// 表單——單選 start
:deep() .el-radio__input.is-checked + .el-radio__label {
  @apply text-primary-500;
}
:deep() .el-radio__input.is-checked .el-radio__inner {
  @apply border-primary-500 bg-primary-500;
}
// 表單——單選 end
// 表單——下拉 start
:deep() .el-select .el-input.is-focus .el-input__inner {
  @apply border-primary-500;
}
:deep() .el-select .el-input__inner:focus {
  @apply border-primary-500;
}
.el-select-dropdown__item.selected {
  @apply text-primary-500;
}
// 表單——下拉 end
// 表單——輸入框 start
:deep() .el-input__inner:focus {
  @apply border-primary-500;
}
// 表單——輸入框 end
.table {
  @apply w-full;
}
.table th,
td {
  @apply border border-solid border-base-200 px-1 py-2;
}
.table th {
  @apply bg-base-100 align-middle font-bold;
}
</style>
