<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper>
        <ZoneTemplateXPaddingNarrow class="mt-5">
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
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
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

const route = useRoute()
// 取得route query 大分類exam_type_id
const examTypeId = ref(null)
const examId = ref(null)
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id
// 引入api資料
const examTypeData = inject('examTypeData') // 取得公職專區分類
const examNewsData = inject('examNewsData') // 最新消息
const examArticleData = inject('examArticleData') // 文章
const examExamsData = inject('examExamsData') // 取得所有考試
const ArticlesData = examArticleData.articles
const NewsData = examNewsData.news
const ExamsData = examExamsData.exams

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
    examIcon: ['fas', 'paste'],
    toSrc: `/govArchaeology/toDownloadList?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '35832739',
    examName: '線上測驗',
    examIcon: ['fas', 'map'],
    toSrc: `/examData/toBookKeeperTest?exam_type_id=${examTypeId.value}`
  }
])
provide('passmainmenu', newExamsData)
provide('passsubmenu', subMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')

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
</script>
<style lang="scss" scoped>
.iconrotator {
  transform: rotate(-0.5turn);
}

.active {
  @apply bg-secondary-500 text-base-50;
}
</style>
