<template>
  <div
    class="relative overflow-hidden bg-cover bg-center bg-repeat-x lg:h-[580px]"
    :class="backgroundImageCss"
  >
    <div class="container">
      <div
        class="relative float-none my-4 lg:absolute lg:top-1/2 lg:float-left lg:-translate-y-1/2"
      >
        <UniversityBannerText>
          <template #title
            >{{ bannerText[course_cate3_id].title[0] }}<br class="block lg:hidden" />
            {{ bannerText[course_cate3_id].title[1] }}</template
          >
          <template #slogan
            ><div>
              {{ bannerText[course_cate3_id].slogan[0] }}<br />
              {{ bannerText[course_cate3_id].slogan[1] }}
            </div></template
          >
        </UniversityBannerText>
        <AnimatedButton
          margin="m-0"
          font-size="text-xl"
          bg-color="bg-primary-500"
          @click.native="openFormModal"
        >
          <span>預約諮詢</span>
        </AnimatedButton>
      </div>
      <div class="photo">
        <img :src="'~/assets/img/university/avatar' + course_cate3_id + '.png'" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import UniversityBannerText from '@/components/views/university/UniversityBannerText.vue'
import AnimatedButton from '@/components/button/AnimatedButton.vue'
import UniversityBannerAvatar from '@/components/views/university/UniversityBannerAvatar.vue'
export default {
  components: {
    UniversityBannerText,
    AnimatedButton,
    UniversityBannerAvatar
  },
  props: {
    course_cate3_id: {
      default: '4031'
    }
  },
  data() {
    return {
      bannerText: {
        4008: {
          title: ['掌握學測考題重點', '進入理想大學'],
          slogan: ['108課綱新型學測大變革，從「探究與實作」到「素養考題」', '網羅最詳盡的考情資訊']
        },
        4159: {
          title: ['抓緊最後機會', '分科測驗逆轉上榜'],
          slogan: ['危機倒數！分科測驗不能死讀書，要以高效率補足弱科', '準備分科逆轉了嗎？']
        },
        4031: {
          title: ['學習歷程檔案全攻略', ''],
          slogan: [
            '超吸睛的學習歷程打造術大公開，從觀念到實作',
            '帶你一步步製作，讓教授一眼就看到你！'
          ]
        }
      }
    }
  },
  computed: {
    backgroundImageCss() {
      switch (this.course_cate3_id) {
      case '4008':
        return "bg-[url('~/assets/img/university/banner4008-mb.png')] lg:bg-[url('~/assets/img/university/banner4008.png')]"
        case '4159':
        return "bg-[url('~/assets/img/university/banner4159-mb.png')] lg:bg-[url('~/assets/img/university/banner4159.png')]"
      case '4031':
          return "bg-[url('~/assets/img/university/banner4031-mb.png')] lg:bg-[url('~/assets/img/university/banner4031.png')]"
      }
    }
  },
  methods: {
    openFormModal() {
      this.$nuxt.$emit('formModalVisible', true)
    }
  }
}
</script>
<style lang="scss" scoped>
.photo {
  @apply relative float-none h-auto max-w-[480px] lg:absolute lg:left-[calc(50%_+_130px)] lg:top-1/2 lg:float-right lg:w-[30vw] lg:-translate-y-1/2;
}
</style>
