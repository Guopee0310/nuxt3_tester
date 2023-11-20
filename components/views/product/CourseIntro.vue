<template>
  <div class="flex flex-wrap">
    <div class="grow basis-3/4">
      <PublicPost :create-directory="false">
        <section>
          <PageTitleS2>學員心得</PageTitleS2>
          <div>
            <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
            <div class="lg-button">
              <a
                target="_blank"
                href="https://www.tkbgo.com.tw/review/toReviewList.jsp?ts_pc1=2629&amp;ts_pc2=2633&amp;ts_pc3=2691"
                >更多學員心得</a
              >
            </div>
          </div>
          <CollaspeButton>展開內容</CollaspeButton>
        </section>
        <section class="mt-8">
          <PageTitleS2>雲端課程</PageTitleS2>
          <AIHClassInfo />
          <CollaspeButton>展開內容</CollaspeButton>
        </section>
        <section class="mt-8">
          <PageTitleS2>購課流程</PageTitleS2>
          <div>
            <h2>課程購買方式</h2>
            <ol>
              <li>確認購買商品</li>
              <li>加入購物車</li>
              <li>填寫訂購資料</li>
              <li>送出訂單</li>
              <li>進行付款</li>
              <li>完成訂購</li>
            </ol>
            <div class="imgShadow hidden md:block">
              <img class="lazy" src="https://www.tkbgo.com.tw/tkbgo/img/cart-flow.png" />
            </div>
            <div class="imgShadow block md:hidden">
              <img class="lazy" src="https://www.tkbgo.com.tw/tkbgo/img/cart-flow_nob.png" />
            </div>
          </div>
          <CollaspeButton>展開內容</CollaspeButton>
        </section>
      </PublicPost>
    </div>
    <SideAd v-if="false" />
    <SideTeacherInfo />
  </div>
</template>
<script>
import PublicPost from '@/components/post/PublicPost'
import ReviewCard from '@/components/card/ReviewCard'
import AIHClassInfo from '@/components/views/product/AIHClassInfo'
import SideTeacherInfo from '@/components/views/product/SideTeacherInfo.vue'
import CollaspeButton from '@/components/button/CollaspeButton'
import PageTitleS2 from '@/components/others/PageTitleS2'
import SideAd from '@/components/views/product/SideAd.vue'
export default {
  name: 'CourseIntro',
  components: {
    PublicPost,
    ReviewCard,
    AIHClassInfo,
    SideTeacherInfo,
    CollaspeButton,
    PageTitleS2,
    SideAd
  }
}
</script>
<style lang="scss"></style>
