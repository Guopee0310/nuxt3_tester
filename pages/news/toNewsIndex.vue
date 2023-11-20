<template>
  <div>
    <div
      class="flex h-20 w-full items-center justify-center bg-blend-multiply"
      :style="`background:url(${mainHeadImg1}) no-repeat center/cover , url(${mainHeadImg2}) no-repeat center /cover;`"
    >
      <h1 class="text-center text-white">公職考試消息</h1>
    </div>
    <div class="container mb-17 mt-6">
      <div class="flex flex-wrap">
        <!-- main-content -->
        <div class="w-full flex-[1_1_0] md:w-[calc(100%_-_357px)]">
          <!-- main-news -->
          <Jumbotron
            title="最新消息"
            :infos="newsInfos.slice(0, 3)"
            info-type="news"
            :info-type-id="newsTypeId"
          />
          <InfoList :infos="newsInfos.slice(3, 7)" info-type="news" />
          <!-- main-article -->
          <Jumbotron
            title="文章分享"
            :infos="articleInfos.slice(0, 3)"
            info-type="article"
            :info-type-id="22"
          />
          <InfoList :infos="articleInfos.slice(3, 7)" info-type="article" />
        </div>
        <!-- main-rside -->
        <div class="main-rside basis-full md:ml-4 md:flex-[0_1_330px]">
          <ReviewList :infos="reviewInfos" />
          <CourseList :infos="subjectInfos" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Jumbotron from '@/components/views/news/Jumbotron'
import InfoList from '@/components/views/news/InfoList'
import ReviewList from '@/components/views/news/ReviewList.vue'
import CourseList from '@/components/views/news/CourseList.vue'
import mainHeadImg1 from '@/assets/img/news/mainheader-1-1.png'
import mainHeadImg2 from '@/assets/img/news/mainheader-1-2.png'

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const { type_id: newsTypeId } = route.query

// 取得關聯推薦課程、學員心得的分類id
const { data: relatedTypeId } = await useApi('/api/news/related', {
  query: {
    typeId: newsTypeId
  }
})

// 取得關連文章、心得、推薦課程的id
const { articleTypeId, reviewTypeId, subjectTypeId } = relatedTypeId.value.data

// 取得消息
const { data: newsRes } = await useApi('/api/news/news', {
  query: {
    typeId: newsTypeId,
    page: 0,
    size: 6
  }
})

// 取得文章列表
const { data: articleRes } = await useApi('/api/article/article', {
  query: {
    typeId: articleTypeId,
    page: 0,
    size: 6
  }
})

// 取得學員心得
const { data: reviewRes } = await useApi('/api/review/review-type/review', {
  query: { reviewTypeId, size: 3 }
})

// 取得課程推薦
const { data: subjectRes } = await useApi('/api/subject/type/full-subjects', {
  query: { typeId: subjectTypeId, size: 3 }
})

const { content: newsInfos } = newsRes.value.data
const { content: articleInfos } = articleRes.value.data
const { content: reviewInfos } = reviewRes.value.data
const subjectInfos = subjectRes.value.data
</script>

<style lang="scss" scoped></style>
