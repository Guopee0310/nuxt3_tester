<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <ZoneTemplateXPadding class="">
          <h1 class="font-bold tracking-widest text-base-600">考試科目投考組合</h1>
          <hr class="mt-3" />
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="-mt-10">
          <div class="bg-base-200 py-3 md:pb-1 md:pt-3">
            <h3 class="my-2 hidden text-center font-medium tracking-[3px] text-base-500 md:block">
              請選擇理想的考試類別
            </h3>
            <div class="block cursor-pointer px-2 text-center md:hidden" @click="isShow = !isShow">
              <span
                class="inline-block w-full bg-base-50 py-3 text-xl font-medium tracking-[3px] text-base-800 shadow"
                >請選擇理想的考試類別<font-awesome-icon
                  :class="{ iconrotator: isShow }"
                  class="ml-1 text-lg"
                  :icon="['fas', 'chevron-down']"
              /></span>
            </div>
          </div>
          <div v-show="isShow" class="bg-base-200 py-3">
            <div class="grid gap-2 px-2 text-center md:grid-cols-3 lg:grid-cols-6">
              <div
                v-for="(item, index) in comboTypeData"
                :key="index"
                class="w-full cursor-pointer bg-base-50 py-2 text-base-800 hover:bg-white"
                @click="openModal(item)"
              >
                {{ item.comboTypeName }}
              </div>
            </div>
            <div class="mt-4 block cursor-pointer px-2 text-center md:hidden" @click="closeDrop()">
              <span
                class="inline-block w-full bg-base-50 py-3 text-xl font-medium tracking-[3px] text-base-800 shadow"
                ><font-awesome-icon :icon="['fas', 'chevron-up']"
              /></span>
            </div>
          </div>
        </ZoneTemplateXPadding>

        <ZoneTemplateXPaddingNarrow>
          <ZoneInfoContent>
            <ZoneInfoListRight>
              <ZoneInfoTitle titlename="最新消息" />
              <ZoneInfoNewItem
                v-for="(newitem, index) in NewsData"
                :key="index"
                :caption="examNewsData.newsTypeName"
                :title="newitem.title"
                :summary="newitem.subTitle"
                :url="`/news/toNews?news_id=${newitem.id}`"
              />
              <div class="text-right">
                <ButtonMore
                  class="right-0"
                  :to="`/news/toNewsList?type_id=${examNewsData.newsTypeId}`"
                />
              </div>
            </ZoneInfoListRight>
            <ZoneInfoListLeft>
              <ZoneInfoTitle titlename="熱門文章" />
              <ZoneInfoArticleItem
                v-for="(articleiItem, index) in ArticlesData"
                :key="index"
                :img-src="articleiItem.picture"
                :title="articleiItem.title"
                :url="`/article/toArticle?article_id=${articleiItem.id}`"
              />
              <div class="text-right">
                <ButtonMore
                  class="right-0"
                  :to="`/article/toArticleList?type_id=${examArticleData.articleTypeId}`"
                />
              </div>
            </ZoneInfoListLeft>
          </ZoneInfoContent>
        </ZoneTemplateXPaddingNarrow>

        <ZoneSectionTitle class="">公職考試日程表</ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow class="-mt-10">
          <div class="mb-3 flex flex-wrap gap-1">
            <ButtonS1
              v-for="(tab, index) in schedulesYearsData"
              :key="tab.id"
              :name="tab + '年'"
              :class="{ active: activeTabIndex === index }"
              @click="TabClick(tab, index)"
            />
          </div>
          <table class="w-full table-auto border-collapse text-center">
            <thead>
              <tr>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  考試<br class="block md:hidden" />資訊
                </th>
                <!-- <th class="text-lg border-solid border border-base-300 bg-base-300 text-base-800 tracking-widest font-bold align-middle p-2">最新<br class="block md:hidden">消息</th> -->
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  預定<br class="block md:hidden" />報名日期
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  預定<br class="block md:hidden" />考試日期
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  簡章<br class="block md:hidden" />下載
                </th>
                <th
                  class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  考古<br class="block md:hidden" />題
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in examSchedulesData" :key="index">
                <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
                  <nuxt-link
                    :to="`/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
                    class="block text-lg text-link decoration-1 underline-offset-2"
                    >{{ item.examName }}</nuxt-link
                  >
                </td>
                <!-- <td class="break-words py-2 px-1 align-middle border-solid border border-base-300 max-w-[200px]" v-if="item.newlink"><nuxt-link to=item.newlink class="block underline decoration-1 underline-offset-2 text-lg">{{item.newname}}</nuxt-link></td>
                <td class="break-words py-2 px-1 align-middle border-solid border border-base-300" v-else>尚無最新消息</td> -->
                <td
                  v-if="item.applicationBeginDate !== ''"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  {{ item.applicationBeginDate }}<br class="block md:hidden" />~<br
                    class="block md:hidden"
                  />{{ item.applicationEndDate }}
                </td>
                <td
                  v-else
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  尚未公告
                </td>
                <td
                  v-if="item.examBeginDate !== ''"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  {{ item.examBeginDate }}
                </td>
                <td
                  v-else
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  尚未公告
                </td>
                <td
                  v-if="item.examId !== ''"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  <nuxt-link
                    :to="`/examData/toExamDowloadRegulation?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
                    class="text-link"
                    >下載頁</nuxt-link
                  >
                </td>
                <td
                  v-else
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  準備中
                </td>
                <td
                  v-if="item.year !== ''"
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  <nuxt-link
                    :to="`/govArchaeology/toDownloadDetail?seqno=72&yy=${item.year}&exam_type_id=${examTypeId}`"
                    class="text-primary-500"
                    ><font-awesome-icon :icon="['fas', 'download']"
                  /></nuxt-link>
                </td>
                <td
                  v-else
                  class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                >
                  準備中
                </td>
              </tr>
            </tbody>
          </table>
        </ZoneTemplateXPaddingNarrow>
        <!-- 考試類科列表彈窗 -->
        <DefaultXlModal v-model="DefaultXlModalVisible" class="h-full md:h-[600px]">
          <template #content>
            <el-scrollbar>
              <h2 class="mb-2 text-2xl font-medium tracking-[3px] text-base-800">
                善用投考組合 上榜機會提升好幾倍！
              </h2>
              <p class="mb-4 text-lg leading-5">
                將考科相同、或類似的國家考試匯整，讓考生有多次考取的機會！一般行政考生，建議可由高考開始準備，因為高考涵蓋的科目較廣較深，加上普考與高考舉行的日子並不重疊，可同時報考增加上榜機會，考生可參考下表，準備起來更加輕鬆。
              </p>
              <h3 class="mb-4 text-2xl font-medium tracking-[3px]">
                <span class="text-primary-500">{{ comboTypeName }}</span
                >科目說明
              </h3>
              <div class="table-wrapper">
                <table class="w-full">
                  <thead>
                    <tr>
                      <th
                        class="border border-solid border-base-300 bg-base-300 px-1 py-2 align-middle text-lg font-medium text-base-800"
                      >
                        考試名稱
                      </th>
                      <th
                        class="border border-solid border-base-300 bg-base-300 px-1 py-2 align-middle text-lg font-medium text-base-800"
                        colspan="7"
                      >
                        應試專業科目
                      </th>
                    </tr>
                  </thead>
                  <tbody class="text-center">
                    <template
                      v-for="(comboExamItems, index1) in examComboDetailsData"
                      :key="index1"
                    >
                      <tr v-for="(comboJobsItem, index2) in comboExamItems.comboJobs" :key="index2">
                        <td
                          v-if="index2 == 0"
                          :rowspan="comboExamItems.comboJobs.length"
                          class="w-[11.6%] border border-solid border-base-300 align-middle text-lg"
                        >
                          {{ comboExamItems.comboExamName }}
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 align-middle text-lg"
                        >
                          {{ comboJobsItem.subjectType }}
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl1"
                            >{{ comboJobsItem.subjectName1 }}</a
                          >
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl2"
                            >{{ comboJobsItem.subjectName2 }}</a
                          >
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl3"
                            >{{ comboJobsItem.subjectName3 }}</a
                          >
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl4"
                            >{{ comboJobsItem.subjectName4 }}</a
                          >
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl5"
                            >{{ comboJobsItem.subjectName5 }}</a
                          >
                        </td>
                        <td
                          class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"
                        >
                          <a
                            class="cursor-pointer text-link"
                            :href="comboJobsItem.relatedCourseUrl6"
                            >{{ comboJobsItem.subjectName6 }}</a
                          >
                        </td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </el-scrollbar>
          </template>
        </DefaultXlModal>
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneTemplateXPaddingNarrow from '@/components/views/zone/ZoneTemplateXPaddingNarrow.vue'
import ZoneInfoContent from '@/components/views/zone/ZoneInfoContent.vue'
import ZoneInfoListRight from '@/components/views/zone/ZoneInfoListRight.vue'
import ZoneInfoListLeft from '@/components/views/zone/ZoneInfoListLeft.vue'
import ZoneInfoNewItem from '@/components/views/zone/ZoneInfoNewItem.vue'
import ZoneInfoArticleItem from '@/components/views/zone/ZoneInfoArticleItem.vue'
import ZoneInfoTitle from '@/components/views/zone/ZoneInfoTitle.vue'
import ButtonMore from '@/components/button/ButtonMore'
import ButtonS1 from '@/components/button/ButtonS1'
import ZoneSectionTitle from '@/components/others/ZoneSectionTitle'
import DefaultXlModal from '@/components/modal/DefaultXlModal.vue'
const route = useRoute()
// 引入斷點
const { tailwinds } = useTailwindConfig()
const menuResponsive = parseInt(tailwinds.theme.screens.md)
// 取得route query 大分類exam_type_id
const examTypeId = ref(null)
const examId = ref(null)
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id
// 引入api資料
const examTypeData = inject('examTypeData') // 取得公職專區分類
const comboTypeData = inject('comboTypeData') // 取得考試類別
const examNewsData = inject('examNewsData') // 最新消息
const examArticleData = inject('examArticleData') // 文章
const examExamsData = inject('examExamsData') // 取得所有考試
const ArticlesData = examArticleData.articles
const NewsData = examNewsData.news
const ExamsData = examExamsData.exams

// 取的投考考組合彈窗
const examComboDetailsData = ref(null)
const comboTypeId = ref(null) // 取得投考組合彈窗值
const comboTypeName = ref(null) // 取得投考組合彈窗名稱

// 取得考試日程表年份
const schedulesYearsData = ref(null)
const currentYear = ref(null)
async function fetchSchedulesYearsData(t1) {
  const { data: schedulesyearsres } = await useApi('/api/exam-section/exam-types/schedules-years', {
    key: '/api/exam-section/exam-types/${' + t1 + '}/schedules/available-years',
    query: { examTypeId: t1 }
  })
  examTypeId.value = t1
  schedulesYearsData.value = schedulesyearsres.value.data.availableYears
  currentYear.value = schedulesYearsData.value[0]
}

// 依考試類別 ID 及民國年取得考試日程資訊
const activeTabIndex = ref(0)
const activeTabYear = ref(null)
const examSchedulesData = ref(null)
const oldexamSchedulesData = ref(null)
const newexamSchedulesData = ref(null)

watch(currentYear, async () => {
  const { data: firstschedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: examTypeId.value, year: currentYear.value }
  })
  examSchedulesData.value = firstschedulesres.value.data.schedules
  oldexamSchedulesData.value = firstschedulesres.value.data.schedules
  newexamSchedulesData.value = oldexamSchedulesData.value
})

await fetchSchedulesYearsData(examTypeId.value)
// 路由更新重新渲染資料
onBeforeRouteUpdate(async (newRoute) => {
  examTypeId.value = newRoute.query.exam_type_id
  await fetchSchedulesYearsData(examTypeId.value)
})
// 麵包屑設定
const breadcrumbInfo = ref(null)
watchEffect(() => {
  examTypeId.value = route.query.exam_type_id
  examId.value = route.query.exam_data_id
  const examMainType = computed(() =>
    examTypeData.filter((item) => item.examTypeId === parseInt(examTypeId.value))
  )
  breadcrumbInfo.value = [
    {
      name: examMainType.value[0].examTypeName,
      path: '/examData/toExamList?exam_type_id=' + examTypeId.value
    }
  ]
})
provide('passbreadcrumb', breadcrumbInfo)

// 綠色區塊按鈕設定
// newExamsData考試按鈕,*因為Font Awesome資料為舊版本，暫時用假資料examIcon: ['fas', 'school']
const newExamsData = reactive(
  ExamsData.map((exam) => {
    return {
      ...exam,
      examIcon: ['fas', 'school'],
      toSrc: `/examData/toIntroduction?exam_data_id=${exam.examId}&exam_type_id=${examTypeId.value}`
    }
  })
)

const subMenuData = reactive([
  {
    examId: '15186434',
    examName: '簡章下載',
    examIcon: ['fas', 'paste'],
    toSrc: `/examData/toexamListRegulations?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '81985168',
    examName: '考古題',
    examIcon: ['fas', 'map'],
    toSrc: `/govArchaeology/toDownloadList?exam_type_id=${examTypeId.value}`
  }
])
provide('passmainmenu', newExamsData)
provide('passsubmenu', subMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')

const isShow = ref(true)
const DefaultXlModalVisible = ref(false)

const openModal = async (item) => {
  DefaultXlModalVisible.value = true
  comboTypeId.value = item.comboTypeId
  comboTypeName.value = item.comboTypeName
  const { data: comboDetailsres } = await useApi(
    '/api/exam-section/exam-combo-types/combo-details',
    {
      query: { examComboTypeId: comboTypeId.value }
    }
  )
  examComboDetailsData.value = comboDetailsres.value.data.comboDetails
}
const closeDrop = () => {
  isShow.value = false
  window.scrollTo({
    top: 0,
    left: 0
  })
}

const TabClick = async (tab, index) => {
  activeTabYear.value = tab
  activeTabIndex.value = index

  // console.log(activeTabYear.value, activeTabIndex.value)
  const { data: schedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: examTypeId.value, year: activeTabYear.value }
  })

  examSchedulesData.value = schedulesres.value.data.schedules
}
onMounted(() => {
  let w = window.innerWidth
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/gi
  const isMobile = regex.test(navigator.userAgent)
  if (w > menuResponsive || !isMobile) isShow.value = true
  window.addEventListener('resize', () => {
    w = window.innerWidth
    isShow.value = w > menuResponsive
  })
})
</script>
<style lang="scss" scoped>
.iconrotator {
  transform: rotate(-0.5turn);
}

.active {
  @apply bg-secondary-500 text-base-50;
}
</style>
