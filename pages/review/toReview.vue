<template>
  <ListTemplate :title="title">
    <template #buttonText>心得分類</template>
    <template #extraInfo>
      <div
        class="border-b-2 border-solid border-primary-500 pb-1 text-xl font-bold text-primary-500"
      >
        Last Sharing
      </div>
      <ol class="mb-2 list-disc border-b-2 border-solid border-primary-500 py-1 pl-3">
        <li class="mb-1 text-primary-500">
          <a href="https://www.tkbgo.com.tw/review/toReview.jsp?comment_id=1350"
            >多益心得〡考取金色證書_王O仁_多益分數895分</a
          >
        </li>
        <li class="mb-1 text-primary-500">
          <a href="https://www.tkbgo.com.tw/review/toReview.jsp?comment_id=1350"
            >多益心得〡考取金色證書_王O仁_多益分數895分</a
          >
        </li>
        <li class="mb-1 text-primary-500">
          <a href="https://www.tkbgo.com.tw/review/toReview.jsp?comment_id=1349"
            >高普考心得〡111年考取高考三等電子工程_李O彰</a
          >
        </li>
        <li class="mb-1 text-primary-500">
          <a href="https://www.tkbgo.com.tw/review/toReview.jsp?comment_id=1348"
            >技師證照考取心得〡111年錄取土木技師證照_黃o愷</a
          >
        </li>
        <li class="mb-1 text-primary-500">
          <a href="https://www.tkbgo.com.tw/review/toReview.jsp?comment_id=1347"
            >高普考心得〡111年考取地特四等文化行政榜首_袁O庭</a
          >
        </li>
      </ol>
    </template>
    <h2 class="mb-6 text-center font-bold">{{ title }}</h2>

    <StudentInfo
      :img-url="imgUrl"
      :prefix-accept="prefixAccept"
      :suffix-accept="suffixAccept"
      :prefix-graduate="prefixGraduate"
      :suffix-graduate="suffixGraduate"
    />

    <PublicPost :create-directory="parseInt(indexStatus)">
      <div v-html="content"></div>
    </PublicPost>
    <PublicForm />
    <a
      class="my-6 inline-block w-full"
      href="https://www.tkbgo.com.tw/product/toProductList.jsp?group=3&amp;type=4&amp;kind=170"
      target="_blank"
      ><img class="w-full" src="https://www.tkbtv.com.tw/upload/ad_pic/review_banner.jpg"
    /></a>
    <div class="mb-4 text-xl font-bold">相關課程</div>
    <CourseSwiperCard />
  </ListTemplate>
</template>
<script>
import ListTemplate from '@/components/sidebar/ListTemplate.vue'
import PublicPost from '@/components/post/PublicPost.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import CourseSwiperCard from '@/components/card/CourseSwiperCard.vue'
import StudentInfo from '@/components/others/StudentInfo.vue'
export default {
  components: {
    ListTemplate,
    PublicPost,
    PublicForm,
    CourseSwiperCard,
    StudentInfo
  },
  layout: 'main',
  async asyncData({ $getReviewDetail, query }) {
    try {
      const id = query.comment_id
      const res = await $getReviewDetail(id)
      return {
        ...res.data
      }
    } catch (err) {
      console.log(err)
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: this.description },
        { hid: 'keywords', name: 'keywords', content: this.keyWord }
      ]
    }
  }
}
</script>
<style lang="scss"></style>
