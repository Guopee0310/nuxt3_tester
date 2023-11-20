export default defineEventHandler(async (event) => {
  const { examTypeId, year } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-types/${examTypeId}/guides?year=${year}`)
})
// 2.18.16 新進簡章-銀行
