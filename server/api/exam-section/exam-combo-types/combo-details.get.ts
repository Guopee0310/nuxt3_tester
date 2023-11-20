export default defineEventHandler(async (event) => {
  const { examComboTypeId } = getQuery(event)
  const baseURL = useRuntimeConfig().public.baseURL
  return await $fetch(`${baseURL}api/v1/exam-section/exam-combo-types/${examComboTypeId}`)
})
// 2.18.14 考試科目投考組合-彈窗
