export default defineEventHandler(async (event) => {
  const { examTypeId, count } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-types/${examTypeId}/news?count=${count}`)
})
// 2.18.4
