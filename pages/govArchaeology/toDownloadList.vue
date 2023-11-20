<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <section>
          <ZoneTemplateXPadding class="mb-6">
            <h1 class="font-bold tracking-widest text-base-600">考古題</h1>
            <hr class="mt-3" />
          </ZoneTemplateXPadding>
          <ZoneTemplateXPadding class="mb-6">
            <table class="w-full table-auto border-collapse text-center">
              <thead>
                <tr>
                  <th
                    class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    招考單位
                  </th>
                  <th
                    class="border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    年度
                  </th>
                </tr>
              </thead>
              <tbody v-if="examTypeId !== '3079'">
                <tr v-for="(availableItem, index1) in availableData" :key="index1">
                  <td
                    class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    {{ availableItem.pastExamName }}
                  </td>
                  <td
                    class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                  >
                    <nuxt-link
                      v-for="(yearItem, index2) in availableItem.years.sort((a, b) => b - a)"
                      :key="index2"
                      class="my-1 mr-2 inline-block tracking-wider text-link"
                      :to="`/govArchaeology/toDownloadDetail?seqno=${availableItem.pastExamId}&yy=${yearItem}&exam_type_id=${examTypeId}`"
                      >{{ yearItem }}年</nuxt-link
                    >
                  </td>
                </tr>
              </tbody>
              <tbody v-if="examTypeId === '3079'">
                <tr>
                  <td
                    class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    {{ BankTypeData[0].pastExamName }}
                  </td>
                  <td
                    class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                  >
                    <nuxt-link
                      v-for="(yearItem, index3) in BankTypeData[0].years.sort((a, b) => b - a)"
                      :key="index3"
                      class="my-1 mr-2 inline-block tracking-wider text-link"
                      :to="`/govArchaeology/toDownloadDetail?seqno=${BankTypeData[0].pastExamId}&yy=${yearItem}&exam_type_id=${examTypeId}`"
                      >{{ yearItem }}年</nuxt-link
                    >
                  </td>
                </tr>
                <tr>
                  <td
                    class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    {{ FitTypeData[0].pastExamName }}
                  </td>
                  <td
                    class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                  >
                    <nuxt-link
                      v-for="(yearItem, index4) in FitTypeData[0].years.sort((a, b) => b - a)"
                      :key="index4"
                      class="my-1 mr-2 inline-block tracking-wider text-link"
                      :to="`/govArchaeology/toDownloadDetail?seqno=${FitTypeData[0].pastExamId}&yy=${yearItem}&exam_type_id=${examTypeId}`"
                      >{{ yearItem }}年</nuxt-link
                    >
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

const availableData = ref(null)
async function fetchavailableData(t1) {
  const { data: examjobsres } = await useApi('/api/exam-section/exam-types/available-years', {
    key: '/api/exam-section/exam-types/${' + t1 + '}/available-past-exams',
    query: { examTypeId: t1 }
  })
  examTypeId.value = t1
  availableData.value = examjobsres.value.data.available
}
// 年份倒序排+過濾重複值
// const reversedAvailableData = computed(() => {
//   return availableData.value.map((item) => {
//     const uniqueYears = new Set(item.years)
//     const filteredYears = [...uniqueYears]
//     return {
//       ...item,
//       years: filteredYears.sort((a, b) => b - a)
//     }
//   })
// })

// for銀行和金融基測FIT
const availableBankData = ref(null)
const { data: examBankjobsres } = await useApi('/api/exam-section/exam-types/available-years', {
  key: '/api/exam-section/exam-types/3075/available-past-exams',
  query: { examTypeId: 3075 }
})
availableBankData.value = examBankjobsres.value.data.available
const BankTypeData = computed(() =>
  availableBankData.value.filter((item) => item.pastExamId === 51)
)
const FitTypeData = computed(() =>
  availableBankData.value.filter((item) => item.pastExamId === 4212)
)
// console.log(BankTypeData.value[0])
await fetchavailableData(examTypeId.value)

// 路由更新重新渲染資料
onBeforeRouteUpdate(async (newRoute) => {
  examTypeId.value = newRoute.query.exam_type_id
  await fetchJobsData(examTypeId.value)
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
      name: '考古題下載'
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
</script>
<style lang="scss" scoped></style>
