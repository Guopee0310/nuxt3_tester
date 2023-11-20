export default defineEventHandler(async (event) => {
  const { examTypeId } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-types/${examTypeId}/exams`)
})
// 2.18.3
