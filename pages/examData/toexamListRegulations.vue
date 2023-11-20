<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <section>
          <ZoneTemplateXPadding class="mb-6">
            <h1
              v-for="examTypeItem in examTypeData"
              :key="examTypeItem.examTypeId"
              class="font-bold tracking-widest text-base-600"
            >
              <span v-if="examTypeItem.examTypeId === parseInt(examTypeId)"
                >{{ examTypeItem.examTypeName }} 簡章下載</span
              >
            </h1>
            <hr class="mt-3" />
          </ZoneTemplateXPadding>
          <ZoneTemplateXPadding class="mb-3">
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
                  <td
                    class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
                  >
                    {{ item.examName }}
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
          </ZoneTemplateXPadding>
        </section>
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>
<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ButtonS1 from '@/components/button/ButtonS1'
definePageMeta({
  layout: 'main'
})
const route = useRoute()
// 取得route query 大分類exam_type_id
const examTypeId = ref(null)
const examId = ref(null)
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id

// 引入api資料
let examTypeData = reactive([])
const { data: examRes } = await useApi('/api/exam-section/exam-types/type')
examTypeData = examRes.value.data.examTypes

let ExamsData = reactive([])
const { data: examexamsres } = await useApi('/api/exam-section/exam-types/exams', {
  query: { examTypeId }
})
ExamsData = examexamsres.value.data.exams

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

onMounted(async () => {
  await fetchSchedulesYearsData(examTypeId.value)
  await fetchSchedulesData(examTypeId.value, currentYear.value)
})
watchEffect(currentYear, async () => {
  await fetchSchedulesYearsData(examTypeId.value)
  await fetchSchedulesData(examTypeId.value, currentYear.value)
})
async function fetchSchedulesData(t1, t4) {
  const { data: firstschedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: t1, year: t4 }
  })
  examTypeId.value = t1
  currentYear.value = t4
  examSchedulesData.value = firstschedulesres.value.data.schedules
  oldexamSchedulesData.value = firstschedulesres.value.data.schedules
  newexamSchedulesData.value = oldexamSchedulesData.value
}

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
    },
    {
      name: '簡章下載'
    }
  ]
})
provide('passbreadcrumb', breadcrumbInfo)
// newExamsData考試按鈕,*因為Font Awesome資料為舊版本，暫時用假資料examIcon: ['fas', 'school']
const newExamsData = reactive(
  ExamsData.map((item) => {
    return {
      ...item,
      examIcon: ['fas', 'school'],
      toSrc: `/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId.value}`
    }
  })
)
const subMenuData = reactive([
  {
    examId: '15186434',
    examName: '簡章下載',
    examIcon: ['fas', 'paste'],
    isActive: false,
    toSrc: `/examData/toexamListRegulations?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '81985168',
    examName: '考古題',
    examIcon: ['fas', 'map'],
    isActive: false,
    toSrc: `/govArchaeology/toDownloadList?exam_type_id=${examTypeId.value}`
  }
])
const subMenu2Data = reactive([
  {
    examId: '15186434',
    examName: '簡章下載',
    examIcon: ['fas', 'paste'],
    isActive: false,
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
    toSrc: `/examData/toBankTest?exam_type_id=${examTypeId.value}`
  }
])
const subMenu3Data = reactive([
  {
    examId: '15186434',
    examName: '簡章下載',
    examIcon: ['fas', 'paste'],
    isActive: false,
    toSrc: `/examData/toexamListRegulations?exam_type_id=${examTypeId.value}`
  },
  {
    examId: '81985168',
    examName: '考古題',
    examIcon: ['fas', 'paste'],
    toSrc: `/govArchaeology/toDownloadDetail?seqno=51&yy=112&exam_type_id=${examTypeId.value}`
  },
  {
    examId: '35832739',
    examName: '線上測驗',
    examIcon: ['fas', 'map'],
    toSrc: `/examData/toBankTest?exam_type_id=${examTypeId.value}`
  }
])
let newSubMenuData = reactive([])
if (examTypeId.value === '3079') {
  newSubMenuData = subMenu3Data
  for (let i = 0; i < newSubMenuData.length; i++) {
    if (newSubMenuData[i].toSrc === route.href) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
} else if (examTypeId.value === '3128') {
  newSubMenuData = subMenu2Data
  for (let i = 0; i < newSubMenuData.length; i++) {
    if (newSubMenuData[i].toSrc === route.href) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
} else {
  newSubMenuData = subMenuData
  for (let i = 0; i < newSubMenuData.length; i++) {
    if (newSubMenuData[i].toSrc === route.href) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
}

provide('passmainmenu', newExamsData)
provide('passsubmenu', newSubMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')

const TabClick = async (tab, index) => {
  activeTabYear.value = tab
  activeTabIndex.value = index
  const { data: schedulesres } = await useApi('/api/exam-section/exam-types/schedules', {
    key: '/api/exam-section/exam-types/ examTypeId /schedules?year=year ',
    query: { examTypeId: examTypeId.value, year: activeTabYear.value }
  })

  examSchedulesData.value = schedulesres.value.data.schedules
}
</script>
<style lang="scss" scoped>
/* 頁籤 */
.active {
  @apply bg-secondary-500 text-base-50;
}
</style>
