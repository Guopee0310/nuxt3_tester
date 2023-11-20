export default defineEventHandler(async (event) => {
  const { typeId, typeId2, page, size, sortby = 'LATEST' } = getQuery(event)
  const baseURL = useRuntimeConfig().public.baseURL
  return await $fetch(
    `${baseURL}api/v1/articles/articles?typeId=${typeId}&typeId2=${
      typeId2 || ''
    }&sortby=${sortby}&page=${page}&size=${size}`
  )
})
