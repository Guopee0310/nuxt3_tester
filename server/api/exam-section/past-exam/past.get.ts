export default defineEventHandler(async (event) => {
  const { pastExamId, year } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/past-exam/${pastExamId}?year=${year}
  `)
})
// 2.18.11
