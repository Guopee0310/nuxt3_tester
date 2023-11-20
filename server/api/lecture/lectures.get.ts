export default defineEventHandler(async (event) => {
  const {
    addressId = '',
    typeId = '',
    sortbyDate = '',
    isCharge = '',
    firstNumber = 0,
    lastNumber = 10,
    sortby = 'POPULAR'
  } = getQuery(event)
  const baseURL = useRuntimeConfig().public.baseURL
  return await $fetch(
    `${baseURL}api/v1/lecture/lectures?addressId=${addressId}&typeId=${typeId}&sortbyDate=${sortbyDate}&isCharge=${isCharge}&firstNumber=${firstNumber}&lastNumber=${lastNumber}&sortby=${sortby}`
  )
})
