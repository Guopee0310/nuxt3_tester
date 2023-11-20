<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8 py-3">
          <h1 class="text-3xl text-base-800">考科組合</h1>
          <section class="bg-base-100 p-3">
            <h2 class="mb-4 text-xl">搜尋方法說明</h2>
            <dl>
              <dt class="mb-1 flex items-center gap-x-3">
                <span
                  class="relative inline-block bg-base-400 py-1 pl-2 pr-1 leading-none text-white after:absolute after:right-[-10px] after:top-0 after:block after:h-0 after:border-y-[1.6ex] after:border-l-[10px] after:border-r-0 after:border-solid after:border-y-transparent after:border-l-base-400 after:content-['']"
                  >方法一</span
                >
                <span class="text-lg font-medium">依據學校查詢</span>
              </dt>
              <dd class="mb-3">
                選擇：(一) 研究所報考類別<fa :icon="['fas', 'right-long']" class="mx-2" />(二)
                學校<fa :icon="['fas', 'right-long']" class="mx-2" />(四) 年度
              </dd>
              <dt class="mb-1 flex items-center gap-x-3">
                <span
                  class="relative inline-block bg-base-400 py-1 pl-2 pr-1 leading-none text-white after:absolute after:right-[-10px] after:top-0 after:block after:h-0 after:border-y-[1.6ex] after:border-l-[10px] after:border-r-0 after:border-solid after:border-y-transparent after:border-l-base-400 after:content-['']"
                  >方法二</span
                >
                <span class="text-lg font-medium">依據學院/系所查詢</span>
              </dt>
              <dd class="mb-3">
                選擇：(一) 研究所報考類別<fa :icon="['fas', 'right-long']" class="mx-2" />(三)
                學院/系所<fa :icon="['fas', 'right-long']" class="mx-2" />(四) 年度
              </dd>
              <dt class="mb-1 flex items-center gap-x-3">
                <span
                  class="relative inline-block bg-base-400 py-1 pl-2 pr-1 leading-none text-white after:absolute after:right-[-10px] after:top-0 after:block after:h-0 after:border-y-[1.6ex] after:border-l-[10px] after:border-r-0 after:border-solid after:border-y-transparent after:border-l-base-400 after:content-['']"
                  >方法三</span
                >
                <span class="text-lg font-medium">依據學校、學院/系所詳細查詢</span>
              </dt>
              <dd>
                選擇：(一) 研究所報考類別<fa :icon="['fas', 'right-long']" class="mx-2" />(二)
                學校<fa :icon="['fas', 'right-long']" class="mx-2" />(三) 學院/系所<fa
                  :icon="['fas', 'right-long']"
                  class="mx-2"
                />(四) 年度
              </dd>
            </dl>
          </section>
          <section class="grid grid-cols-2 gap-4">
            <div class="col-span-2">
              <h3 class="mb-2 text-xl">(一) 研究所報考類別</h3>
              <el-radio-group v-model="radioApplication" class="flex flex-wrap gap-y-2">
                <el-radio :label="1">甄試生</el-radio>
                <el-radio :label="2">甄試生(在職組)</el-radio>
                <el-radio :label="3">一般生</el-radio>
                <el-radio :label="4">一般生(在職組)</el-radio>
                <el-radio :label="5">在職專班</el-radio>
                <el-radio :label="6">商管在職專班</el-radio>
                <el-radio :label="7">EMBA</el-radio>
              </el-radio-group>
            </div>
            <div class="col-span-2">
              <h3 class="mb-2 text-xl">(二) 學校</h3>
              <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
                <el-select v-model="selectInstitution.value" class="flex-1">
                  <el-option
                    v-for="item in selectInstitution.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="selectArea.value" class="flex-1">
                  <el-option
                    v-for="item in selectArea.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="selectCategory.value" class="flex-1">
                  <el-option
                    v-for="item in selectCategory.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="selectSchool.value" class="flex-1">
                  <el-option
                    v-for="item in selectSchool.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <h3 class="mb-2 text-xl">(三) 學院/系所</h3>
              <div class="grid grid-cols-2 gap-2">
                <el-select v-model="selectSort.value" class="flex-1">
                  <el-option
                    v-for="item in selectSort.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select v-model="selectDepartment.value" class="flex-1">
                  <el-option
                    v-for="item in selectDepartment.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <div>
              <h3 class="mb-2 text-xl">(四) 年度</h3>
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
            <ButtonS2 margin="my-0" width="col-span-1">搜尋結果</ButtonS2>
          </section>
          <section class="text-center text-3xl text-base-300">無考科資料</section>
          <section>
            <ul
              class="mb-3 flex flex-col gap-y-1 pl-[1.2em] indent-[-1.2em] font-medium text-primary-500"
            >
              <li>
                <span class="inline-block w-[1.2em] indent-0"
                  ><fa :icon="['fas', 'asterisk']" /></span
                >點系所看詳細內容
              </li>
              <li>
                <span class="inline-block w-[1.2em] indent-0"
                  ><fa :icon="['fas', 'asterisk']" /></span
                >* 表示該系所各組合計之報名人數
              </li>
              <li>
                <span class="inline-block w-[1.2em] indent-0"
                  ><fa :icon="['fas', 'asterisk']" /></span
                >招生名額中分別代表為：一般生、一般在職生、甄試生。
              </li>
            </ul>
            <table class="table">
              <thead>
                <tr>
                  <th class="w-3/12 md:w-2/12">學校</th>
                  <th class="w-3/12 md:w-2/12">系所</th>
                  <th class="w-1/12">組別</th>
                  <th>考試<span class="inline whitespace-nowrap">科目</span></th>
                  <th class="hidden w-1/12 md:table-cell">
                    招生<span class="inline whitespace-nowrap">名額</span>
                  </th>
                  <th class="hidden w-1/12 md:table-cell">
                    報考<span class="inline whitespace-nowrap">人數</span>
                  </th>
                  <th class="hidden w-1/12 md:table-cell">口試</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>國立台灣大學</td>
                  <td>
                    <a href="javascript:;" class="text-link"
                      >物理學系碩士班、天文物理研究所碩士班及應用物理學研究所碩士班</a
                    >
                  </td>
                  <td>三所聯合招生</td>
                  <td>筆試:1.英文(B) 2.普通物理學 3.近代物理學(A)</td>
                  <td class="hidden md:table-cell">43/0/0</td>
                  <td class="hidden md:table-cell">113</td>
                  <td class="hidden md:table-cell">無</td>
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
zoneGraduateMenu('87277281') // 專區選單設定

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
//             radioApplication: 3,
//             selectInstitution: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '公/私立'
//                 },
//                 {
//                     value: '1',
//                     label: '公立'
//                 },
//                 {
//                     value: '3',
//                     label: '私立'
//                 }]
//             },
//             selectArea: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '區域'
//                 },
//                 {
//                     value: '1',
//                     label: '北區'
//                 },
//                 {
//                     value: '2',
//                     label: '中區'
//                 },
//                 {
//                     value: '3',
//                     label: '南區'
//                 },
//                 {
//                     value: '4',
//                     label: '花東'
//                 }]
//             },
//             selectCategory: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '學制'
//                 },
//                 {
//                     value: '1',
//                     label: '大學'
//                 },
//                 {
//                     value: '2',
//                     label: '科技大學'
//                 },
//                 {
//                     value: '3',
//                     label: '技術學院'
//                 },
//                 {
//                     value: '4',
//                     label: '師範大學'
//                 },
//                 {
//                     value: '5',
//                     label: '教育大學'
//                 },
//                 {
//                     value: '6',
//                     label: '專科學校'
//                 },
//                 {
//                     value: '7',
//                     label: '護專'
//                 },
//                 {
//                     value: '8',
//                     label: '國防、政治、警察'
//                 },
//                 {
//                     value: '9',
//                     label: '其他'
//                 }]
//             },
//             selectSchool: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '不拘'
//                 }]
//             },
//             selectSort: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '不拘'
//                 }]
//             },
//             selectDepartment: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '不拘'
//                 }]
//             },
//             selectYear: {
//                 value: '0',
//                 options: [
//                 {
//                     value: '0',
//                     label: '不拘'
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
