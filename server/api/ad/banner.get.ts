export default defineEventHandler(async (event) => {
  const { adPositionId, count = '' } = getQuery(event)
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  return await $fetch(`${baseURL}api/v1/ad/${adPositionId}/ads?size=${count}`)
})

// https://www.tkbgo.com.tw/api/v1/ad/33/ads?count=5'
