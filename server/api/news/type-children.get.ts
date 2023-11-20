export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public.baseURL
  const { type } = getQuery(event)
  return await $fetch(`${baseURL}api/v1/news/type/${type}/children`)
})
