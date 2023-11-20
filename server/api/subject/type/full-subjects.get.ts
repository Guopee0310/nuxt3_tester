export default defineEventHandler(async (event) => {
  const { typeId, size = 3 } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/subject/type/${typeId}/full-subjects?size=${size}`)
})
