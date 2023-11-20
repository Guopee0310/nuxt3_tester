<template>
  <div>
    <div class="container">
      <Breadcrumb :content="breadcrumbInfo" class="pt-4" />
      <PageTitle title="TKB課程優惠" />
      <AnchorList direction="flex-wrap">
        <AnchorPoint
          v-for="(item, index) in edmTypeData"
          :key="index"
          :classname="item.colorchart"
          :name="item.name"
          :get-target="getTarget(index)"
        />
      </AnchorList>
      <div
        v-for="(item, index) in edmListData"
        :key="index"
        ref="itemRefs"
        class="mb-10 border-b border-solid border-primary-500 pb-10"
      >
        <h2 class="mb-3 font-bold text-primary-500">{{ item.name }}</h2>
        <div class="grid-rows grid md:grid-cols-3 md:gap-12">
          <OnSaleCard
            v-for="(carditem, cardindex) in item.edmList"
            :key="cardindex"
            :url="`${baseURL}go_edm/edm${carditem.id}/index.jsp`"
            :img-src="carditem.photo"
            :title="carditem.title"
            :summary="carditem.summary"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import PageTitle from '@/components/others/PageTitle.vue'
import AnchorList from '@/components/others/AnchorList.vue'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
import OnSaleCard from '@/components/card/OnSaleCard.vue'
definePageMeta({
  layout: 'main'
})
const baseURL = useRuntimeConfig().public.baseURL
const itemRefs = ref([])

let edmTypeData = reactive([])
const { data: typeRes } = await useApi('/api/edm/type')
edmTypeData = typeRes.value.data

let edmListData = reactive([])
const { data: listRes } = await useApi('/api/edm/list')
edmListData = listRes.value.data
const breadcrumbInfo = reactive([
  {
    name: ' GO優惠',
    path: '/onSale/toOnSaleList'
  }
])
const colorChart = [
  { colorchart: 'text-link' },
  { colorchart: 'text-secondary-700' },
  { colorchart: 'text-secondary-700' },
  { colorchart: 'text-secondary-700' },
  { colorchart: 'text-primary-800' },
  { colorchart: 'text-primary-800' },
  { colorchart: 'text-primary-500' }
]

edmTypeData = edmTypeData.map((item, index) => {
  if (index < colorChart.length) {
    return { ...item, colorchart: colorChart[index].colorchart }
  } else {
    return { ...item, colorchart: 'text-link' }
  }
})

const getTarget = (index) => {
  return () => itemRefs.value[index]
}

useSeoMeta({
  title: () => 'GO優惠-TKB購課網',
  ogTitle: () => 'GO優惠-TKB購課網',
  description:
    'TKBTV 雲端課程、TKB 函授課程、TKB 數位學堂課程線上購買。專辦全國公務人員高普考試、技師考試、國營事業招考、銀行招考、轉學考、研究所考試等最新考試資訊提供與課程學習。公務人員考試包含：高普考試、專門職業技師、初等考試、地方特考、領隊導遊、一般警察特考、司法特考。就業考試包含：國營事業招考、台電招考、中油招考、中華郵政招考、自來水招考、台鐵招考、銀行招考。以及大學轉學考、研究所考試。',
  ogDescription:
    'TKBTV 雲端課程、TKB 函授課程、TKB 數位學堂課程線上購買。專辦全國公務人員高普考試、技師考試、國營事業招考、銀行招考、轉學考、研究所考試等最新考試資訊提供與課程學習。公務人員考試包含：高普考試、專門職業技師、初等考試、地方特考、領隊導遊、一般警察特考、司法特考。就業考試包含：國營事業招考、台電招考、中油招考、中華郵政招考、自來水招考、台鐵招考、銀行招考。以及大學轉學考、研究所考試。',
  keywords:
    '全國公務人員招考、就業考試及升學考試服務網｜公職考試｜就業考試｜國營事業招考｜研究所考試｜轉學考｜考試資訊提供及線上學習購買'
  // ogImage: post.picture,
})
</script>

<style lang="scss" scoped></style>
