export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-types`)
})
// 2.18.1
