export default defineEventHandler(async (event) => {
  const { kind } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/subject/type/${kind}/subjects`)
})
