export default defineEventHandler(async (event) => {
  const id = getQuery(event).id
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/news/${id}/detail`)
})
