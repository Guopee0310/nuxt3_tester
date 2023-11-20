export default defineEventHandler(async () => {
  const baseURL = useRuntimeConfig().public.baseURL
  return await $fetch(`${baseURL}api/v1/edm/types`)
})
