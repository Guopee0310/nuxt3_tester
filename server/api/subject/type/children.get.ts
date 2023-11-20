export default defineEventHandler(async (event) => {
  console.log(123)

  const { typeId } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/subject/type/${typeId}/children`)
})
