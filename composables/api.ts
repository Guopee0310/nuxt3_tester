export const useApi = async (url: string, params?: any) => {
  const startTime = new Date()
  const opts = {
    onRequest({ options }) {
      options.headers = options.headers || {}
      options.headers.authorization = '12345'
    },
    onRequestError({ error }) {
      console.log(error)
    },
    onResponseError({ response }) {
      console.log(response)
    },
    ...params
  }
  const { data, pending, error, execute, refresh } = await useFetch(url, opts)
  const endTime = new Date()
  const spendTime = endTime - startTime
  console.log(`${url} 用了 ${spendTime} 毫秒`)

  return {
    data,
    pending,
    error,
    execute,
    refresh
  }
}
