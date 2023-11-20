<template>
  <div>
    <div
      class="flex h-20 w-full items-center justify-center bg-blend-multiply"
      :style="`background:url(${mainHeadBg1}) no-repeat center/cover , url(${mainHeadBg2}) no-repeat center /cover;`"
    >
      <h1 class="text-center text-white">
        {{ currentTypeName }}<span class="pl-2 text-xl text-[#fffdd2]">/文章分享/</span>
      </h1>
    </div>

    <nav class="container my-7">
      <Breadcrumb :content="breadcrumbInfo" />
    </nav>

    <div class="container mb-17 mt-6">
      <div class="flex flex-wrap">
        <!-- main-content -->
        <div class="w-full flex-[1_1_0] md:w-[calc(100%_-_357px)]">
          <TypeMenu
            :type-infos="typeInfos.children"
            :type-id="typeId"
            :type-id2="typeId2"
            url="/article/toArticleList"
          />
          <div v-loading="loading">
            <InfoList :infos="infos" info-type="article" />
          </div>
          <Pagination
            :total-pages="totalPages"
            :current-page="parseInt(page, 10)"
            :url="
              typeId2
                ? `/article/toArticleList?type_id=${typeId}&type_id2=${typeId2}`
                : `/article/toArticleList?type_id=${typeId}`
            "
          />
        </div>

        <!-- main-rside -->
        <div class="basis-full md:ml-4 md:flex-[0_1_330px]">
          <ReviewList :infos="reviewInfos" />
          <CourseList :infos="subjectInfos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import InfoList from '@/components/views/news/InfoList'
import ReviewList from '@/components/views/news/ReviewList.vue'
import CourseList from '@/components/views/news/CourseList.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import Pagination from '@/components/pagination/Pagination.vue'
import TypeMenu from '@/components/views/news/TypeMenu.vue'
import mainHeadBg1 from '~/assets/img/news/mainheader-2-1.png'
import mainHeadBg2 from '~/assets/img/news/mainheader-2-2.png'

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const typeId = ref(0) // url參數1
const typeId2 = ref(0) // url參數2
let infos = reactive([]) // 文章列表資料
let typeInfos = reactive([]) // 文章分類
const currentTypeName = ref('') // 當前文章分類
const page = ref() // 當前頁碼
const totalPages = ref(0) // 總頁數
let breadcrumbInfo = reactive([]) // 麵包屑
const loading = ref(true)

// 獲取文章列表資料
async function fetchArticleData(t1, t2, p = 0) {
  const { data: infoRes } = await useApi('/api/article/article', {
    key: '/api/article/article' + t1 + '/' + t2,
    query: {
      typeId: t1,
      typeId2: t2,
      page: p,
      size: 6
    }
  })
  typeId.value = t1
  typeId2.value = t2
  infos = infoRes.value.data.content
  page.value = p
  totalPages.value = infoRes.value.data.totalPages
}

// 獲取文章分類資料
async function fetchTypeData(t1) {
  const { data: typeRes } = await useApi('/api/article/type', {
    key: '/api/article/type/' + t1,
    query: {
      type: t1
    }
  })
  typeInfos = typeRes.value.data[0]
}
const { type_id, type_id2, page_no = 0 } = route.query
await fetchArticleData(type_id, type_id2, page_no)
await fetchTypeData(type_id)
loading.value = false

// 路由更新重新渲染資料
onBeforeRouteUpdate(async (newRoute) => {
  const { type_id, type_id2, page_no } = newRoute.query
  loading.value = true
  await fetchArticleData(type_id, type_id2, page_no)
  await fetchTypeData(type_id)
  loading.value = false
})

// 取得關聯推薦課程、學員心得的分類id
const { data: relatedTypeId } = await useApi('/api/news/related', {
  query: { typeId: typeId.value }
})
const { newsTypeId, reviewTypeId, subjectTypeId } = relatedTypeId.value.data

const { data: allArticleTypeRes } = await useApi('/api/article/type', {
  query: { type: typeId.value }
})
// 第一層文章分類下的所有文章分類
const allArticleTypeInfos = allArticleTypeRes.value.data

watchEffect(() => {
  const articleMainType = computed(() =>
    allArticleTypeInfos.filter((item) => item.id === parseInt(typeId.value, 10))
  )
  const articleSubType = computed(() =>
    allArticleTypeInfos[0].children.filter((item) => item.id === parseInt(typeId2.value, 10))
  )
  currentTypeName.value = typeId2.value
    ? articleSubType.value[0].name
    : articleMainType.value[0].name

  // 麵包屑
  breadcrumbInfo = reactive([
    {
      name: articleMainType.value[0].name,
      path: '/news/toNewsIndex?type_id=' + newsTypeId
    },
    {
      name: articleMainType.value[0].name === currentTypeName ? '全部' : currentTypeName
    }
  ])
})

// 取得學員心得資料
const { data: reviewRes } = await useApi('/api/review/review-type/review', {
  query: {
    reviewTypeId,
    size: 3
  }
})
// 取得推薦課程資料
const { data: subjectRes } = await useApi('/api/subject/type/full-subjects', {
  query: {
    typeId: subjectTypeId,
    size: 3
  }
})
const { content: reviewInfos } = reviewRes.value.data
const subjectInfos = subjectRes.value.data
</script>

<style lang="scss" scoped>
@import '~/assets/scss/loading.scss';
</style>
