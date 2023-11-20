export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/video/index-videos?count=4`)
})
