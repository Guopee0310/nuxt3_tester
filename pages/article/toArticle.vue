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
            :type-infos="allArticleTypeInfos[0].children"
            url="/article/toArticleList"
            :type-id="typeId"
            :type-id2="typeId2"
          />
          <!-- 文章抬頭資訊 -->
          <PublicPostTopInfo :title="post.title" :date="post.createDate" :clicks="post.checkNum" />
          <!-- 首圖 -->
          <div><img :src="post.picture" /></div>
          <PublicPost>
            <div v-html="post.content"></div>
          </PublicPost>
          <!-- category-block -->
          <div class="mb-10 flex w-full flex-wrap">
            <div class="mb-4 flex">
              <div class="mb-2 mr-2 whitespace-nowrap py-1 font-bold">文章分類</div>
              <div class="flex flex-wrap">
                <ButtonS1
                  class="mb-2 mr-2"
                  :url="`/article/toArticleList?type_id=${articleMainType[0].id}`"
                  :name="articleMainType[0].name"
                />
                <ButtonS1
                  class="mb-2 mr-2"
                  :url="`/article/toArticleList?type_id=${articleMainType[0].id}&type_id2=${articleSubType[0].id}`"
                  :name="articleSubType[0].name"
                />
              </div>
            </div>
            <div class="mb-4 flex items-center">
              <div class="mb-2 mr-2 whitespace-nowrap py-1 font-bold">課程分類</div>
              <div class="flex flex-wrap">
                <ButtonS1
                  v-if="subjectMainType && subjectMainType.length"
                  :url="`/product/toProductList?group=${subjectType1}&type=${subjectType2}`"
                  :name="subjectMainType[0]?.name"
                  class="mb-2 mr-2"
                />
                <ButtonS1
                  v-if="subjectSubType && subjectSubType.length"
                  :url="`/product/toProductList?group=${subjectType1}&type=${subjectType2}&kind=${subjectType3}`"
                  :name="subjectSubType[0]?.name"
                  class="mb-2 mr-2"
                />
              </div>
            </div>
          </div>
          <div class="mb-5">
            <PublicForm />
          </div>
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
import ReviewList from '@/components/views/news/ReviewList.vue'
import CourseList from '@/components/views/news/CourseList.vue'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue'
import TypeMenu from '@/components/views/news/TypeMenu.vue'
import ButtonS1 from '@/components/button/ButtonS1.vue'
import PublicPost from '@/components/post/PublicPost.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import mainHeadBg1 from '~/assets/img/news/mainheader-2-1.png'
import mainHeadBg2 from '~/assets/img/news/mainheader-2-2.png'
import PublicPostTopInfo from '@/components/post/PublicPostTopInfo.vue'

definePageMeta({
  layout: 'main'
})

const currentTypeName = ref('')
const route = useRoute()
const { article_id: id } = route.query
const { data: res } = await useApi('/api/article/detail', {
  query: { id }
})

const post = res.value.data
const { typeId, typeId2, subjectType1, subjectType2, subjectType3 } = post

const { data: allArticleTypeRes } = await useApi('/api/article/type', {
  query: { type: typeId }
})

// 第一層分類下的所有分類
const allArticleTypeInfos = allArticleTypeRes.value.data

// 文章分類第一層
const articleMainType = computed(() => allArticleTypeInfos.filter((item) => item.id === typeId))

// 文章分類第二層
const articleSubType = computed(() =>
  allArticleTypeInfos[0]?.children.filter((item) => item.id === typeId2)
)

currentTypeName.value = articleSubType.value[0].name

useSeoMeta({
  title: () => `${post.title}-TKB購課網`,
  ogTitle: () => `${post.title}-TKB購課網`,
  description: post.secTitle,
  ogDescription: post.secTitle,
  ogImage: post.picture,
  keywords: post.seoKeyword
})

// 取得關聯推薦課程、學員心得的分類id
const { data: relatedTypeId } = await useApi('/api/news/related', {
  query: {
    typeId
  }
})

// 取得消息第一層id、推薦課程id、學員心得id
const { newsTypeId, reviewTypeId, subjectTypeId } = relatedTypeId.value.data
const { data: reviewRes } = await useApi('/api/review/review-type/review', {
  query: {
    reviewTypeId,
    size: 3
  }
})
const { data: subjectRes } = await useApi('/api/subject/type/full-subjects', {
  query: {
    typeId: subjectTypeId,
    size: 3
  }
})

// 取得學員心得
const { content: reviewInfos } = reviewRes.value.data

// 取得推薦課程
const subjectInfos = subjectRes.value.data

const { data: subjectTypeRes } = await useApi('/api/subject/type/children', {
  query: { typeId: subjectTypeId }
})

// 課程分類第一層
const subjectMainType = computed(() =>
  subjectTypeRes.value?.data.filter((item) => item.id === parseInt(subjectType2, 10))
)

// 課程分類第二層
const subjectSubType = computed(() =>
  subjectMainType.value[0]?.children.filter((item) => item.id === parseInt(subjectType3, 10))
)

// 麵包屑
const breadcrumbInfo = reactive([
  {
    name: articleMainType.value[0].name,
    path: '/news/toNewsIndex?type_id=' + newsTypeId
  },
  {
    name: articleSubType.value[0].name,
    path: `/article/toArticleList?type_id=${articleMainType.value[0].id}&type_id2=${articleSubType.value[0].id}`
  },
  {
    name: post.title
  }
])
</script>

<style lang="scss" scoped></style>
