export default defineEventHandler(async (event) => {
  const { examTypeId, year } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(
    `${baseURL}api/v1/exam-section/exam-types/${examTypeId}/schedules?year=${year}`
  )
})
// 2.18.12 考試時程表&考試日程表
