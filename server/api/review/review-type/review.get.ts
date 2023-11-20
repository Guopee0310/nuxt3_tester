export default defineEventHandler(async (event) => {
  const { reviewTypeId, sortby = 'LATEST', page = 0, size = 3 } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(
    `${baseURL}api/v1/review/review-type/${reviewTypeId}/reviews?sortby=${sortby}&page=${page}&size=${size}`
  )
})
