export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/subject/types?level=2`)
})

// 2.4.4
// 接api的地方
