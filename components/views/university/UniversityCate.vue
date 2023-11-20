<template>
  <div>
    <UniversityCateBanner :course_cate3_id="course_cate3_id" />
    <section>
      <div class="container py-10">
        <UniversityPostTabs
          tab-active="最新消息"
          :tabs="['最新消息', '文章專區', '講座資訊']"
          @getData="getData"
        />
        <UniversityPostList v-if="screenSize > responsive">
          <UniversitySubTitle text-align="text-left" class="mb-5">
            <font-awesome-icon class="mr-1" :icon="['fa', 'bullhorn']" />最新消息
          </UniversitySubTitle>
        </UniversityPostList>
        <UniversityPostSwiperCard v-else>
          <UniversitySubTitle text-align="text-left">
            <font-awesome-icon class="mr-1" :icon="['fa', 'bullhorn']" />最新消息
          </UniversitySubTitle>
        </UniversityPostSwiperCard>
        <UniversityMoreLink />
      </div>
    </section>
    <section class="bg-base-50 py-10">
      <div class="container">
        <UniversityReviewSwiperCard class="pb-10" prev-id="reviewPrev" next-id="reviewNext">
          <UniversitySubTitle text-align="text-left">
            <font-awesome-icon class="mr-1" :icon="['fa', 'face-smile']" />學員心得
          </UniversitySubTitle>
        </UniversityReviewSwiperCard>
        <div>
          <UniversitySubTitle text-align="text-left" class="mb-5">
            <font-awesome-icon class="mr-1" :icon="['fa', 'video']" />最新影片
          </UniversitySubTitle>
          <div class="grid items-center gap-4 lg:grid-cols-3 lg:gap-10">
            <div class="sm:col-span-2">
              <youtubeVideo
                src="https://www.youtube.com/embed/vWouxgPxPQU?enablejsapi=1&origin=https%3A%2F%2Fwww.tkbgo.com.tw&widgetid=1"
              />
            </div>
            <div>
              <UniversityVideoListPlayButton class="mb-4" />
              <UniversityVideoListPlayButton class="mb-4" />
              <UniversityVideoListPlayButton class="mb-4" />
              <UniversityVideoListPlayButton class="mb-4" />
              <UniversityVideoListPlayButton />
            </div>
          </div>

          <UniversityMoreLink
            text-align="text-center"
            class="mt-4 rounded-[30px] bg-white p-2 lg:max-w-[845px]"
          />
        </div>
      </div>
    </section>

    <section v-if="course_cate3_id === '4031'" class="bg-secondary-500 py-10">
      <div class="container relative">
        <UniversitySubTitle text-color="text-white" class="mb-10">
          製作學習歷程時 使用甄戰的<b class="text-6xl">3</b>大專業優勢
        </UniversitySubTitle>
        <UniversityCateFeatureSwiper />
      </div>
    </section>
    <section v-else class="bg-gradient-to-b from-secondary-50 to-white py-10">
      <div class="container">
        <UniversitySubTitle text-align="text-left" class="mb-5">
          <font-awesome-icon :icon="['fa', 'chalkboard']" />精選課程
        </UniversitySubTitle>
        <div class="py-5">
          <h4 class="mb-5 border-b border-solid border-secondary-500 pb-1 text-2xl text-black">
            全修
          </h4>
          <div class="grid gap-10 lg:grid-cols-3">
            <CourseCardS3 />
            <CourseCardS3 />
            <CourseCardS3 />
          </div>
        </div>
        <UniversityMoreLink />
        <div class="py-5">
          <h4 class="mb-5 border-b border-solid border-secondary-500 pb-1 text-2xl text-black">
            全修
          </h4>
          <div class="grid gap-10 lg:grid-cols-4">
            <CourseCardS3 />
            <CourseCardS3 />
            <CourseCardS3 />
            <CourseCardS3 />
          </div>
        </div>
        <UniversityMoreLink />
      </div>
    </section>

    <UniversityCallToActionBlock>
      <div v-if="course_cate3_id === '4031'">
        <p>108課綱上路，學習歷程與學測成績同等重要。</p>
        <p>甄戰學習歷程輔導課，提升個人申請競爭力的最佳幫手。</p>
      </div>

      <div v-if="course_cate3_id === '4159'">
        <p>
          明星高中師資、豐富教學經驗、清晰易懂教學，TKB 分科測驗課程，打造最適合學生的考試準備課程。
        </p>
        <p>短期衝刺的最佳解方，讓你3個月見證逆轉奇蹟。</p>
      </div>

      <div v-if="course_cate3_id === '4008'">
        <p>
          TKB甄戰一點通高中影音教材，齊聚全國新生代補教名師與明星高中老師，聯手打造最完整的高中補習課程。
        </p>
        <p>108素養導向，搭配探究與實作最新課程，邀你一起成為考試常勝軍。</p>
      </div>
    </UniversityCallToActionBlock>
  </div>
</template>
<script>
import AnimatedButton from '@/components/button/AnimatedButton.vue'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import UniversityMoreLink from '@/components/views/university/UniversityMoreLink.vue'
import UniversityPostSwiperCard from '@/components/views/university/UniversityPostSwiperCard.vue'
import UniversityPostList from '@/components/views/university/UniversityPostList.vue'
import UniversityReviewSwiperCard from '@/components/views/university/UniversityReviewSwiperCard.vue'
import youtubeVideo from '@/components/video/youtubeVideo.vue'
import UniversityVideoListPlayButton from '@/components/views/university/UniversityVideoListPlayButton.vue'
import CourseCardS3 from '@/components/card/CourseCardS3'
import UniversityCallToActionBlock from '@/components/views/university/UniversityCallToActionBlock.vue'
import UniversityCateBanner from '@/components/views/university/UniversityCateBanner.vue'
import UniversityCateFeatureSwiper from '@/components/views/university/UniversityCateFeatureSwiper.vue'
import UniversityPostTabs from '@/components/views/university/UniversityPostTabs.vue'
export default {
  components: {
    AnimatedButton,
    UniversitySubTitle,
    UniversityMoreLink,
    UniversityPostSwiperCard,
    UniversityReviewSwiperCard,
    UniversityPostList,
    youtubeVideo,
    UniversityVideoListPlayButton,
    CourseCardS3,
    UniversityCallToActionBlock,
    UniversityCateBanner,
    UniversityCateFeatureSwiper,
    UniversityPostTabs
  },
  data() {
    return {
      course_cate3_id: '4159',
      screenSize: 0,
      responsive: parseInt(this.theme.screens.sm.replace('px', ''), 10)
    }
  },
  mounted() {
    this.screenSize = document.body.clientWidth
    if (this.screenSize)
      window.onresize = () => {
        this.screenSize = document.body.clientWidth
      }
  },
  methods: {
    openFormModal() {
      this.$nuxt.$emit('formModalVisible', true)
    },
    getData(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped></style>
