<template>
  <UniversityVideoTemplate>
    <div class="mb-5">
      <UniversityVideoList v-if="screenSize > responsive">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'eye']" />最新上線
        </UniversitySubTitle>
      </UniversityVideoList>
      <UniversityVideoSwiperCard v-else prev-id="newsPrev" next-id="newsNext">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'eye']" />最新上線
        </UniversitySubTitle>
      </UniversityVideoSwiperCard>
      <UniversityMoreLink
        text-color="text-secondary-700"
        icon-color="text-white"
        icon-bg-color="bg-secondary-700"
        class="ml-auto max-w-[120px] rounded-[30px] bg-white p-2"
      />
    </div>
    <div class="mb-5">
      <UniversityVideoList v-if="screenSize > responsive">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'book-open-reader']" />考試攻略
        </UniversitySubTitle>
      </UniversityVideoList>
      <UniversityVideoSwiperCard v-else prev-id="testPrev" next-id="testNext">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'book-open-reader']" />考試攻略
        </UniversitySubTitle>
      </UniversityVideoSwiperCard>
      <UniversityMoreLink
        text-color="text-secondary-700"
        icon-color="text-white"
        icon-bg-color="bg-secondary-700"
        class="ml-auto max-w-[120px] rounded-[30px] bg-white p-2"
      />
    </div>
    <div class="mb-5">
      <UniversityVideoList v-if="screenSize > responsive">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'face-smile']" />學員心得
        </UniversitySubTitle>
      </UniversityVideoList>
      <UniversityVideoSwiperCard v-else prev-id="commentPrev" next-id="commentNext">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'face-smile']" />學員心得
        </UniversitySubTitle>
      </UniversityVideoSwiperCard>
      <UniversityMoreLink
        text-color="text-secondary-700"
        icon-color="text-white"
        icon-bg-color="bg-secondary-700"
        class="ml-auto max-w-[120px] rounded-[30px] bg-white p-2"
      />
    </div>
    <div class="mb-5">
      <UniversityVideoList v-if="screenSize > responsive">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'chalkboard-user']" />課程試聽
        </UniversitySubTitle>
      </UniversityVideoList>
      <UniversityVideoSwiperCard v-else prev-id="tryPrev" next-id="tryNext">
        <UniversitySubTitle text-align="text-left">
          <font-awesome-icon class="mr-1" :icon="['fa', 'chalkboard-user']" />課程試聽
        </UniversitySubTitle>
      </UniversityVideoSwiperCard>
      <UniversityMoreLink
        text-color="text-secondary-700"
        icon-color="text-white"
        icon-bg-color="bg-secondary-700"
        class="ml-auto max-w-[120px] rounded-[30px] bg-white p-2"
      />
    </div>
  </UniversityVideoTemplate>
</template>

<script>
import UniversityVideoTemplate from '@/components/views/university/UniversityVideoTemplate.vue'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import UniversityVideoList from '@/components/views/university/UniversityVideoList.vue'
import UniversityMoreLink from '@/components/views/university/UniversityMoreLink.vue'
import UniversityVideoSwiperCard from '@/components/views/university/UniversityVideoSwiperCard.vue'

export default {
  components: {
    UniversityVideoTemplate,
    UniversitySubTitle,
    UniversityVideoList,
    UniversityMoreLink,
    UniversityVideoSwiperCard
  },
  layout: 'university',
  data() {
    return {
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
  }
}
</script>
<style lang="scss" scoped></style>
