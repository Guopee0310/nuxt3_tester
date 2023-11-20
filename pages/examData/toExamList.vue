<template>
  <!-- 公職版型 -->
  <!-- <ZoneExamTemplate /> -->

  <!-- 銀行版型 -->
  <!-- <ZoneBankTemplate /> -->

  <component :is="currentComponent" />
</template>

<script setup>
import ZoneExamTemplate from '@/components/views/zone/ZoneExamTemplate.vue'
import ZoneJobTemplate from '@/components/views/zone/ZoneJobTemplate.vue'
import ZoneBankTemplate from '@/components/views/zone/ZoneBankTemplate.vue'
import ZoneCertificateTemplate from '@/components/views/zone/ZoneCertificateTemplate.vue'
definePageMeta({
  layout: 'main'
})

const route = useRoute()
const router = useRouter()

// 取得公職專區類別
let examTypeData = reactive([])
const { data: examRes } = await useApi('/api/exam-section/exam-types/type')
examTypeData = examRes.value.data.examTypes

// 取得考試類別資料
let comboTypeData = reactive([])
const { data: comboRes } = await useApi('/api/exam-section/exam-types/combo-type', {
  query: {
    examTypeId: route.query.exam_type_id
  }
})
comboTypeData = comboRes.value.data.examComboTypes

// 取得route query 大分類exam_type_id
const { exam_type_id: examTypeId } = route.query

// 取得最新消息資料
let examNewsData = reactive([])
const { data: examnewsres } = await useApi('/api/exam-section/exam-types/news', {
  query: { examTypeId, count: 4 }
})
examNewsData = examnewsres.value.data

// 取得文章資料
let examArticleData = reactive([])
const { data: examarticleres } = await useApi('/api/exam-section/exam-types/hot-articles', {
  query: { examTypeId, count: 4 }
})
examArticleData = examarticleres.value.data

// 取得所有考試
let examExamsData = reactive([])
const { data: examexamsres } = await useApi('/api/exam-section/exam-types/exams', {
  query: { examTypeId }
})
examExamsData = examexamsres.value.data

// 取得考試日程表
let examGuidesData = reactive([])
const { data: guidesres } = await useApi('/api/exam-section/exam-types/guides', {
  query: { examTypeId, year: 110 }
})
examGuidesData = guidesres.value.data

provide('examTypeData', examTypeData)
provide('comboTypeData', comboTypeData)
provide('examNewsData', examNewsData)
provide('examArticleData', examArticleData)
provide('examExamsData', examExamsData)
provide('examGuidesData', examGuidesData)

// 根據路由參數決定currentComponent
const currentComponent = computed(() => {
  const examTypeIdFromRoute = parseInt(router.currentRoute.value.query.exam_type_id)

  if (examTypeIdFromRoute === 3074) {
    return ZoneExamTemplate
  } else if (examTypeIdFromRoute === 3075) {
    return ZoneJobTemplate
  } else if (examTypeIdFromRoute === 3079) {
    return ZoneBankTemplate
  } else if (examTypeIdFromRoute === 3128) {
    return ZoneCertificateTemplate
  } else {
    return null
  }
})
</script>
<style lang="scss" scoped></style>
