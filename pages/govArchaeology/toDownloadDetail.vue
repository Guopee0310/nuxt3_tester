<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <section>
          <ZoneTemplateXPadding class="mb-6">
            <h1 class="font-bold tracking-widest text-base-600">
              {{ pastExamData.pastExamName }}考古題
            </h1>
            <hr class="mt-3" />
          </ZoneTemplateXPadding>
          <ZoneTemplateXPadding class="mb-8">
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
              <tbody>
                <tr>
                  <td
                    class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    {{ pastExamData.pastExamName }}
                  </td>
                  <td
                    class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                  >
                    <nuxt-link
                      v-for="(yearItem, index1) in pastExamYears"
                      :key="index1"
                      class="my-1 mr-2 inline-block text-link"
                      :to="`/govArchaeology/toDownloadDetail?seqno=${pastExamId}&yy=${yearItem}&exam_type_id=${examTypeId}`"
                      >{{ yearItem }}年</nuxt-link
                    >
                  </td>
                </tr>
                <tr v-if="pastExamId === '51'">
                  <td
                    class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                  >
                    {{ pastExamFITData.pastExamName }}
                  </td>
                  <td
                    class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                  >
                    <nuxt-link
                      v-for="(yearItem, index7) in pastExamFITYears"
                      :key="index7"
                      class="my-1 mr-2 inline-block text-link"
                      :to="`/govArchaeology/toDownloadDetail?seqno=${pastExamId}&yy=${yearItem}&exam_type_id=${examTypeId}`"
                      >{{ yearItem }}年</nuxt-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </ZoneTemplateXPadding>
          <ZoneTemplateXPadding class="mb-12">
            <h1 class="mb-3 font-bold tracking-widest text-base-600">{{ pastExamData.year }}年</h1>
            <AnchorList v-if="pastExamId !== '51'" direction="grid grid-cols-4 px-0 text-center">
              <AnchorPoint
                v-for="(pastExamItem, index2) in pastExamData.pastExams"
                :key="index2"
                :name="pastExamItem.level"
                :classname="'block cursor-pointer border border-solid border-base-300 bg-white p-2 align-middle h-full text-left'"
                :get-target="getTarget(index2)"
              />
            </AnchorList>
            <AnchorList v-if="pastExamId === '51'" direction="grid grid-cols-4 px-0 text-center">
              <AnchorPoint
                v-for="(pastExamItem, index2) in pastExamData.pastExams"
                :key="index2"
                :name="pastExamItem.level"
                :classname="'block cursor-pointer border border-solid border-base-300 bg-white p-2 align-middle h-full text-left'"
                :get-target="getTarget(index2)"
              />
              <AnchorPoint
                v-for="(pastExamItem, index8) in pastExamFITData.pastExams"
                :key="index8"
                :name="pastExamItem.level"
                :classname="'block cursor-pointer border border-solid border-base-300 bg-white p-2 align-middle h-full text-left'"
                :get-target="getTarget(pastExamData.pastExams.length + index8)"
              />
            </AnchorList>
          </ZoneTemplateXPadding>
          <div v-if="pastExamId !== '51'">
            <div
              v-for="(pastExamItem, index3) in pastExamData.pastExams"
              :key="index3"
              ref="itemRefs"
            >
              <ZoneTemplateXPadding class="mb-8">
                <h2 class="mb-3 font-bold tracking-widest text-base-600">
                  {{ pastExamItem.level }}
                </h2>
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        類別
                      </th>
                      <th
                        class="border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="pastExamItem.commonSubjects != ''">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        共同科目及答案
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(commonItem, index4) in pastExamItem.commonSubjects"
                          :key="index4"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          >{{ commonItem.subjectName }}</nuxt-link
                        >
                      </td>
                    </tr>
                    <tr v-for="(proItem, index5) in pastExamItem.proSubjects" :key="index5">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        {{ proItem.jobName }}
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(subjectItem, index6) in proItem.subjects"
                          :key="index6"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          >{{ subjectItem.subjectName }}</nuxt-link
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ZoneTemplateXPadding>
            </div>
          </div>
          <div v-if="pastExamId === '51'">
            <div
              v-for="(pastExamItem, index3) in pastExamData.pastExams"
              :key="index3"
              ref="itemRefs"
            >
              <ZoneTemplateXPadding class="mb-8">
                <h2 class="mb-3 font-bold tracking-widest text-base-600">
                  {{ pastExamItem.level }}
                </h2>
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        類別
                      </th>
                      <th
                        class="border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="pastExamItem.commonSubjects != ''">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        共同科目及答案
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(commonItem, index4) in pastExamItem.commonSubjects"
                          :key="index4"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          >{{ commonItem.subjectName }}</nuxt-link
                        >
                      </td>
                    </tr>
                    <tr v-for="(proItem, index5) in pastExamItem.proSubjects" :key="index5">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        {{ proItem.jobName }}
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(subjectItem, index6) in proItem.subjects"
                          :key="index6"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          ><span>{{ subjectItem.subjectName }}</span></nuxt-link
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ZoneTemplateXPadding>
            </div>
            <div
              v-for="(pastExamFITItem, index9) in pastExamFITData.pastExams"
              :key="index9"
              ref="itemRefs"
            >
              <ZoneTemplateXPadding class="mb-8">
                <h2 class="mb-3 font-bold tracking-widest text-base-600">
                  {{ pastExamFITItem.level }}
                </h2>
                <table class="w-full table-auto border-collapse text-center">
                  <thead>
                    <tr>
                      <th
                        class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        類別
                      </th>
                      <th
                        class="border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        科目
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-if="pastExamFITItem.commonSubjects != ''">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        共同科目及答案
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(commonItem, index10) in pastExamFITItem.commonSubjects"
                          :key="index10"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          >{{ commonItem.subjectName }}</nuxt-link
                        >
                      </td>
                    </tr>
                    <tr v-for="(proItem, index11) in pastExamFITItem.proSubjects" :key="index11">
                      <td
                        class="border border-solid border-base-300 bg-base-50 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                      >
                        {{ proItem.jobName }}
                      </td>
                      <td
                        class="border border-solid border-base-300 bg-white p-2 text-left align-middle"
                      >
                        <nuxt-link
                          v-for="(subjectItem, index12) in proItem.subjects"
                          :key="index12"
                          class="my-1 mr-2 inline-block text-link [&:not(:last-child)]:after:content-['、']"
                          to="/govArchaeology/toDownloadAd"
                          target="_blank"
                          >{{ subjectItem.subjectName }}</nuxt-link
                        >
                      </td>
                    </tr>
                  </tbody>
                </table>
              </ZoneTemplateXPadding>
            </div>
          </div>
        </section>
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>
<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import AnchorList from '@/components/others/AnchorList.vue'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
definePageMeta({
  layout: 'main'
})
const route = useRoute()
// 取得route query 大分類exam_type_id
const examTypeId = ref(null)
const examId = ref(null)
const pastExamId = ref(null)
const year = ref(null)
examTypeId.value = route.query.exam_type_id
examId.value = route.query.exam_data_id
pastExamId.value = route.query.seqno
year.value = route.query.yy
const itemRefs = ref([])
// 引入api資料
let examTypeData = reactive([])
const { data: examRes } = await useApi('/api/exam-section/exam-types/type')
examTypeData = examRes.value.data.examTypes
let ExamsData = reactive([])
const { data: examexamsres } = await useApi('/api/exam-section/exam-types/exams', {
  query: { examTypeId }
})
ExamsData = examexamsres.value.data.exams
// 依考古題 ID及民國年取得考古題下載資訊
const pastExamData = ref(null)
const pastExamYears = ref(null)
async function fetchpastExamData(t3, t4) {
  const { data: exampastres } = await useApi('/api/exam-section/past-exam/past', {
    key: '/api/exam-section/past-exam/${' + t3 + '}?year=${' + t4 + '}',
    query: { pastExamId: t3, year: t4 }
  })
  pastExamId.value = t3
  year.value = t4
  pastExamData.value = exampastres.value.data
  // console.log(pastExamData.value)
  const uniqueYears = new Set(pastExamData.value.availableYears)
  const filteredYears = [...uniqueYears]
  pastExamYears.value = filteredYears.sort((a, b) => b - a)
}

// for金融基測FIT ID及民國年取得考古題下載資訊
const pastExamFITData = ref(null)
const pastExamFITYears = ref(null)
const { data: exampastfitres } = await useApi('/api/exam-section/past-exam/past', {
  key: '/api/exam-section/past-exam/4212?year=109',
  query: { pastExamId: 4212, year: 109 }
})

pastExamFITData.value = exampastfitres.value.data
const fitUniqueYears = new Set(pastExamFITData.value.availableYears)
const fitFilteredYears = [...fitUniqueYears]
pastExamFITYears.value = fitFilteredYears.sort((a, b) => b - a)

await fetchpastExamData(pastExamId.value, year.value)
// 路由更新重新渲染資料
onBeforeRouteUpdate(async (newRoute) => {
  pastExamId.value = newRoute.query.seqno
  year.value = newRoute.query.yy
  await fetchpastExamData(pastExamId.value, year.value)
})

// 麵包屑設定
const breadcrumbInfo = ref(null)
watchEffect(() => {
  examTypeId.value = route.query.exam_type_id
  examId.value = route.query.exam_data_id
  pastExamId.value = route.query.seqno
  year.value = route.query.yy
  const examMainType = computed(() =>
    examTypeData.filter((item) => item.examTypeId === parseInt(examTypeId.value))
  )

  breadcrumbInfo.value = [
    {
      name: examMainType.value[0].examTypeName,
      path: '/examData/toExamList?exam_type_id=' + examTypeId.value
    },
    {
      name: '考古題下載',
      path: '/govArchaeology/toDownloadList?exam_type_id=' + examTypeId.value
    },
    {
      name: pastExamData.value.pastExamName + '考古題'
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
    toSrc: `/govArchaeology/toDownloadDetail?exam_type_id=${examTypeId.value}`
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
    // 比對govArchaeology
    const regexPath = /\/([^/]+)\//
    const matchPath = newSubMenuData[i].toSrc.match(regexPath)
    const thisPath = matchPath[1]
    // 比對exam_type_id的id
    const regexExamType = /exam_type_id=(\d+)/
    const matchId = newSubMenuData[i].toSrc.match(regexExamType)
    const thisExamTypeId = matchId[1]
    if (
      thisPath === route.path.match(regexPath)[1] &&
      thisExamTypeId === route.query.exam_type_id
    ) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
} else if (examTypeId.value === '3128') {
  newSubMenuData = subMenu2Data
  for (let i = 0; i < newSubMenuData.length; i++) {
    // 比對govArchaeology
    const regexPath = /\/([^/]+)\//
    const matchPath = newSubMenuData[i].toSrc.match(regexPath)
    const thisPath = matchPath[1]
    // 比對exam_type_id的id
    const regexExamType = /exam_type_id=(\d+)/
    const matchId = newSubMenuData[i].toSrc.match(regexExamType)
    const thisExamTypeId = matchId[1]
    if (
      thisPath === route.path.match(regexPath)[1] &&
      thisExamTypeId === route.query.exam_type_id
    ) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
} else {
  newSubMenuData = subMenuData

  for (let i = 0; i < newSubMenuData.length; i++) {
    // 比對govArchaeology
    const regexPath = /\/([^/]+)\//
    const matchPath = newSubMenuData[i].toSrc.match(regexPath)
    const thisPath = matchPath[1]
    // 比對exam_type_id的id
    const regexExamType = /exam_type_id=(\d+)/
    const matchId = newSubMenuData[i].toSrc.match(regexExamType)
    const thisExamTypeId = matchId[1]
    if (
      thisPath === route.path.match(regexPath)[1] &&
      thisExamTypeId === route.query.exam_type_id
    ) {
      newSubMenuData[i].isActive = true
    } else {
      newSubMenuData[i].isActive = false
    }
  }
}

provide('passmainmenu', newExamsData)
provide('passsubmenu', newSubMenuData)
provide('passmainmenuwidth', 'md:w-[280px] lg:w-[820px] pr-4')

const getTarget = (index) => {
  return () => itemRefs.value[index]
}
</script>
<style lang=""></style>
