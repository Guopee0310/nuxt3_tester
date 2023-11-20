export default defineEventHandler(async (event) => {
  const { examTypeId } = getQuery(event)
  const baseURL = useRuntimeConfig().public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-types/${examTypeId}`)
})

// 2.18.2
