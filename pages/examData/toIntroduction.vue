<template>
  <div>
    <!-- 公職專區共用課程簡介 -->
    <!-- <ZoneToIntroductionTemplate /> -->
    <!-- 記帳士考試頁面 -->
    <!-- <ZoneBookKeeperTemplate /> -->
    <!-- 司法特考考試頁面 -->
    <!-- <ZoneLawTemplate /> -->
    <component :is="currentComponent" />
  </div>
</template>
<script setup>
import ZoneToIntroductionTemplate from '@/components/views/zone/ZoneToIntroductionTemplate.vue'
import ZoneBookKeeperTemplate from '@/components/views/zone/ZoneBookKeeperTemplate.vue'
import ZoneLawTemplate from '@/components/views/zone/ZoneLawTemplate.vue'
definePageMeta({
  layout: 'main'
})

const route = useRoute()
const router = useRouter()
const { exam_type_id: examTypeId, exam_data_id: examId } = route.query
const currentComponent = ref(null)

// 取得公職專區類別
let examTypeData = reactive([])
const { data: examRes } = await useApi('/api/exam-section/exam-types/type')
examTypeData = examRes.value.data.examTypes

// 取得所有考試
let examExamsData = reactive([])
const { data: examexamsres } = await useApi('/api/exam-section/exam-types/exams', {
  query: { examTypeId }
})
examExamsData = examexamsres.value.data

provide('examTypeData', examTypeData)
provide('examExamsData', examExamsData)
onBeforeMount(() => {
  // 在元件掛載之前初始化 currentComponent
  currentComponent.value = switchComponent(route.query)
})
watch(
  () => route.query,
  (query) => {
    // 在查詢參數變化時，調用 switchComponent 並將查詢參數傳遞給它
    currentComponent.value = switchComponent(query)
  }
)

function switchComponent() {
  const examTypeIdFromRoute = parseInt(router.currentRoute.value.query.exam_type_id)
  const examDataIdFromRoute = parseInt(router.currentRoute.value.query.exam_data_id)

  if (examTypeIdFromRoute === 3128 && examDataIdFromRoute === 3130) {
    return ZoneBookKeeperTemplate
  } else if (examTypeIdFromRoute === 3074 && examDataIdFromRoute === 3088) {
    return ZoneLawTemplate
  } else if (
    examTypeIdFromRoute === parseInt(examTypeId) ||
    examDataIdFromRoute === parseInt(examId)
  ) {
    return ZoneToIntroductionTemplate
  } else {
    return null
  }
}
</script>
