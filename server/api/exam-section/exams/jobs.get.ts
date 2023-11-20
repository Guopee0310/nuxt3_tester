export default defineEventHandler(async (event) => {
  const { examId } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exams/${examId}/jobs`)
})
// 2.18.6 考試類科列表
