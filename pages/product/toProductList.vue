<template>
  <ListTemplate :title="kindInfo.name">
    <div v-loading="loading">
      <ProductListInfo :class-types="classTypes" />
    </div>
  </ListTemplate>
</template>
<script setup>
import ListTemplate from '@/components/sidebar/ListTemplate.vue'
import ProductListInfo from '@/components/views/product/ProductListInfo.vue'

definePageMeta({
  layout: 'main'
})

const route = useRoute()
let groupInfo = reactive([])
let subjectInfo = reactive([])
let kindInfo = reactive([])
let classTypes = reactive([])
const loading = ref(true)
const { group, type, kind } = route.query
const kindNo = ref(kind)

// 取得側欄選單資料
async function fetchMenuData(group, type) {
  const { data: groupRes } = await useApi('/api/subject/type/children', {
    query: { typeId: group }
  })
  groupInfo = groupRes.value.data
  const typeInfo = computed(() => groupInfo.filter((item) => item.id === parseInt(type, 10)))
  if (!kindNo.value) kindNo.value = typeInfo.value[0].children[0].id
  const kindInfoArr = computed(() =>
    typeInfo.value[0].children.filter((item) => item.id === parseInt(kindNo.value, 10))
  )
  kindInfo = toRef(kindInfoArr.value[0])
}

// 取得課程資料
async function fetchSubjectsData() {
  const { data: kindRes } = await useApi('/api/subject/type/subjects', {
    key: '/api/subject/type/subjects/' + kindNo.value,
    query: { kind: kindNo.value }
  })
  subjectInfo = kindRes.value.data
  classTypes = subjectInfo.classType
    .map((item) => Object.assign(item, subjectInfo[item.id]))
    .reverse()
}

await fetchMenuData(group, type)
await fetchSubjectsData()

provide('groupInfo', groupInfo)
loading.value = false

// 更新路由重新發請求
onBeforeRouteUpdate(async (newRoute) => {
  const { group, type, kind } = newRoute.query
  kindNo.value = kind
  loading.value = true
  await fetchMenuData(group, type)
  await fetchSubjectsData()
  loading.value = false
})
</script>
<style lang="scss" scoped>
@import '~/assets/scss/loading.scss';
</style>
