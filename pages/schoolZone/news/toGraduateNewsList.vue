<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8">
          <h1 class="text-3xl text-base-800">研究所考試-最新消息</h1>
          <ZoneListArticle :default-data="newsListDefaultData" :graduate-type="graduate_type" />
          <PaginationS2
            :current-page="`${currentPage} + 1`"
            :total="totalElements"
            :page-size="pageSize"
            pager-count="4"
            @current-change="handleCurrentChange"
          />
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
      <ZoneGraduateSidebar />
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneGraduateSidebar from '@/components/views/zone/ZoneGraduateSidebar.vue'
import ZoneListArticle from '@/components/views/zone/ZoneListArticle.vue'
import PaginationS2 from '@/components/pagination/PaginationS2.vue'
definePageMeta({
  layout: 'main'
})
useSeoMeta({
  title: () => '研究所專區—最新消息列表'
})
zoneGraduateMenu() // 專區選單設定
// 麵包屑 start
const breadcrumbInfo = ref([
  {
    name: '研究所升學',
    path: '/schoolZone/toGraduateIndex'
  },
  {
    name: '最新消息'
  }
])
provide('passbreadcrumb', breadcrumbInfo)
// 麵包屑 end
// 串接 start
const route = useRoute()
const graduate_type = route.query.graduate_type || '' // url參數1
const newsListDefaultData = ref(null) // 列表資料
const currentPage = ref(0) // 當前頁；api第1頁為0，element plus Pagination第1頁為1，視情況加減1
const pageSize = ref(5) // 1頁幾筆資料
const totalElements = ref(0) // 資料總筆數
watchEffect(async () => {
  const { data: infoRes } = await useApi('/api/news/news', {
    key: '/api/news/news/' + graduate_type,
    query: {
      typeId: graduate_type,
      page: currentPage.value,
      size: pageSize.value
    }
  })
  newsListDefaultData.value = infoRes.value.data.content
  totalElements.value = infoRes.value.data.totalElements
  // console.log(
  //   'currentPage',
  //   currentPage.value,
  //   '，infoRes data number',
  //   infoRes.value.data.number,
  //   '，pageSize',
  //   pageSize.value,
  //   '，totalElements',
  //   totalElements.value
  // )
})
// console.log('watch外的currentPage', currentPage.value)
// 觸發換頁 start
const handleCurrentChange = (val) => {
  val -= 1
  currentPage.value = val
}
// 觸發換頁 end
// 串接 end
</script>
