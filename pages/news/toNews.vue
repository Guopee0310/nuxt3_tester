<template>
  <div>
    <div
      class="flex h-20 w-full items-center justify-center bg-blend-multiply"
      :style="`background:url(${mainHeadBg1}) no-repeat center/cover , url(${mainHeadBg2}) no-repeat center /cover;`"
    >
      <h1 class="text-center text-white">
        {{ currentTypeName }}<span class="pl-2 text-xl text-[#fffdd2]">/最新消息/</span>
      </h1>
    </div>
    <nav class="container my-7">
      <Breadcrumb :content="breadcrumbInfo" />
    </nav>

    <div class="container mb-17 mt-6">
      <div class="flex flex-wrap">
        <!-- main-content -->
        <div class="w-full flex-[1_1_0] md:w-[calc(100%_-_330px)]">
          <TypeMenu
            :type-infos="newsMainType[0].children"
            url="/news/toNewsList"
            :type-id="post.newsTypeId1"
            :type-id2="post.newsTypeId2"
          />
          <!-- 文章抬頭資訊 -->
          <PublicPostTopInfo :title="post.title" :date="post.date" :clicks="post.clicks" />
          <!-- 首圖 -->
          <div><img :src="post.picture" /></div>
          <PublicPost>
            <div v-html="post.content"></div>
          </PublicPost>
          <!-- category-block -->
          <div class="mb-10 flex w-full flex-wrap">
            <div class="mb-4 flex">
              <div class="mb-2 mr-2 whitespace-nowrap py-1 font-bold">消息分類</div>
              <div class="flex flex-wrap">
                <ButtonS1
                  v-if="newsMainType && newsMainType.length"
                  class="mb-2 mr-2"
                  :url="`/news/toNewsList?type_id=${newsMainType[0].id}`"
                  :name="newsMainType[0]?.name"
                />
                <ButtonS1
                  v-if="newsSubType && newsSubType.length"
                  class="mb-2 mr-2"
                  :url="`/news/toNewsList?type_id=${newsMainType[0].id}&type_id2=${newsSubType[0].id}`"
                  :name="newsSubType[0]?.name"
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
import mainHeadBg1 from '@/assets/img/news/mainheader-2-1.png'
import mainHeadBg2 from '@/assets/img/news/mainheader-2-2.png'
import PublicPostTopInfo from '@/components/post/PublicPostTopInfo.vue'

definePageMeta({
  layout: 'main'
})

const currentTypeName = ref('')
const route = useRoute()
const { news_id: id } = route.query
const { data: postRes } = await useApi('/api/news/detail', {
  query: { id }
})

// 取得文章內容
const post = postRes.value.data

// 取得關連的課程分類id
const { subjectType1, subjectType2, subjectType3 } = post

const { data: subjectTypeRes } = await useApi('/api/subject/type/children', {
  query: { typeId: subjectType1 }
})

// 課程分類第一層
const subjectMainType = computed(() =>
  subjectTypeRes.value?.data.filter((item) => item.id === parseInt(subjectType2, 10))
)

// 課程分類第二層
const subjectSubType = computed(() =>
  subjectMainType.value[0]?.children.filter((item) => item.id === parseInt(subjectType3, 10))
)

const { data: allNewsTypeRes } = await useApi('/api/news/types')
const allNewsTypeInfos = allNewsTypeRes.value.data

// 消息分類第一層
const newsMainType = computed(() => allNewsTypeInfos.filter((item) => item.id === post.newsTypeId1))

// 消息分類第二層
const newsSubType = computed(() =>
  newsMainType.value[0].children.filter((item) => item.id === post.newsTypeId2)
)
currentTypeName.value = newsSubType.value[0].name

// 麵包屑
const breadcrumbInfo = reactive([
  {
    name: newsMainType.value[0].name,
    path: '/news/toNewsIndex?type_id=' + newsMainType.value[0].id
  },
  {
    name: newsSubType.value[0].name,
    path: `/news/toNewsList?type_id=${newsMainType.value[0].id}&type_id2=${newsSubType.value[0].id}`
  },
  {
    name: post.title
  }
])

useSeoMeta({
  title: () => `${post.title}-TKB購課網`,
  ogTitle: () => `${post.title}-TKB購課網`,
  description: post.seoDescription,
  ogDescription: post.seoDescription,
  ogImage: post.picture,
  keywords: post.seoKeyword
})

// 取得關聯推薦課程、學員心得的分類id
const { data: relatedTypeId } = await useApi('/api/news/related', {
  query: {
    typeId: post.newsTypeId1
  }
})

// 推薦課程、推薦心得
const { reviewTypeId, subjectTypeId } = relatedTypeId.value.data
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
const { content: reviewInfos } = reviewRes.value.data
const subjectInfos = subjectRes.value.data
</script>

<style lang="scss" scoped></style>
