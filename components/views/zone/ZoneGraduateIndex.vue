<template>
  <ZoneTemplate>
    <ZoneTemplateWrapper>
      <div class="grid grid-cols-1 gap-12">
        <ZoneTemplateXPadding class="grid grid-cols-1 gap-4 xl:grid-cols-5">
          <h1 class="font-bold tracking-widest text-base-600 xl:col-span-4">
            TKB大碩研究所｜2023最新課程 雲端面授任你選
          </h1>
          <div class="xl:col-span-4">
            <ZoneIndexBanner :default-data="indexBannerData" />
          </div>
          <div class="flex flex-col gap-3 xl:justify-center">
            <div class="text-center text-2xl font-bold text-base-400">大碩 / 雲端精選課程</div>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-2">
              <ButtonIcon to="/product/toproducttype">
                <template #icon>
                  <img
                    alt="理工課程"
                    title="理工課程"
                    src="@/assets/img/graduate/link-ico-01.webp"
                  />
                </template>
                <template #title>理工課程</template>
              </ButtonIcon>
              <ButtonIcon to="/product/toproducttype">
                <template #icon>
                  <img
                    alt="商管課程"
                    title="商管課程"
                    src="@/assets/img/graduate/link-ico-02.webp"
                  />
                </template>
                <template #title>商管課程</template>
              </ButtonIcon>
              <ButtonIcon to="/product/toproducttype">
                <template #icon>
                  <img
                    alt="文科課程"
                    title="文科課程"
                    src="@/assets/img/graduate/link-ico-03.webp"
                  />
                </template>
                <template #title>文科課程</template>
              </ButtonIcon>
              <ButtonIcon to="/news/tonews">
                <template #icon>
                  <img alt="題庫班" title="題庫班" src="@/assets/img/graduate/link-ico-04.webp" />
                </template>
                <template #title>題庫班</template>
              </ButtonIcon>
            </div>
            <AnchorPoint
              classname="w-full text-white block rounded bg-primary-500 py-3 text-center text-lg"
              :get-target="getTarget()"
              icon="null"
              name="立即諮詢"
            />
          </div>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPaddingNarrow>
          <ZoneInfoContent>
            <ZoneInfoListRight>
              <ZoneInfoTitle titlename="最新消息" />
              <ZoneInfoNewItem />
              <ZoneInfoNewItem />
              <ZoneInfoNewItem />
              <ZoneInfoNewItem />
              <div class="text-right">
                <ButtonMore
                  class="right-0"
                  to="/schoolZone/news/toGraduateNewsList?graduate_type=91"
                />
              </div>
            </ZoneInfoListRight>
            <ZoneInfoListLeft>
              <ZoneInfoTitle titlename="熱門文章" />
              <ZoneInfoArticleItem />
              <ZoneInfoArticleItem />
              <ZoneInfoArticleItem />
              <ZoneInfoArticleItem />
              <div class="text-right">
                <ButtonMore class="right-0" to="/schoolZone/article/graduate/toArticleList" />
              </div>
            </ZoneInfoListLeft>
          </ZoneInfoContent>
        </ZoneTemplateXPaddingNarrow>
      </div>
      <section>
        <ZoneSectionTitle class="mb-3">碩士學位比你想像的<span>更有價值</span></ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow class="grid grid-cols-1 gap-3 text-xl text-base-500">
          <p>
            根據人力銀行2021年資料顯示，研究所與大學畢業起薪差距約5,000元上下，其中以軟體 /
            工程類人員差距為最大，<span class="text-highlight"
              >私立大學與國立研究所的薪資差距可達16,000元。</span
            >
          </p>
          <p>
            一年下來差了近20萬，<span class="text-highlight">五年下來又整整多出了人生一桶金。</span
            >長期來看，薪資差距相當可觀。
          </p>
          <div class="text-center text-2xl font-bold text-base-600">學士、碩士畢業起薪比較</div>
          <!-- 薪資比較tab start -->
          <el-tabs
            v-model="salaryComparison"
            class="tab-salary"
            type="card"
            @tab-click="elTabClick"
          >
            <el-tab-pane label="工程類" name="active">
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
                <div>
                  <img
                    class="m-0 block w-full"
                    alt="工程類"
                    title="工程類"
                    src="@/assets/img/graduate/chart-valuable-1.webp"
                  />
                </div>
                <div class="flex flex-col gap-4 text-center text-[#20a4bb] lg:text-right">
                  <div class="text-3xl xl:text-5xl">國立研究所&私立大學</div>
                  <div class="text-3xl xl:text-5xl">
                    <span class="text-5xl xl:text-7xl">畢業起薪差距</span>可達
                  </div>
                  <div class="text-7xl font-bold xl:text-9xl">16000</div>
                  <div class="text-xs">參考104人力銀行薪資中位數</div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="商管類">
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
                <div>
                  <img
                    class="m-0 block w-full"
                    alt="商管類"
                    title="商管類"
                    src="@/assets/img/graduate/chart-valuable-2.webp"
                  />
                </div>
                <div class="flex flex-col gap-4 text-center text-[#f7a349] lg:text-right">
                  <div class="text-3xl xl:text-5xl">國立研究所&私立大學</div>
                  <div class="text-3xl xl:text-5xl">
                    <span class="text-5xl xl:text-7xl">畢業起薪差距</span>可達
                  </div>
                  <div class="text-7xl font-bold xl:text-9xl">11000</div>
                  <div class="text-xs">參考104人力銀行薪資中位數</div>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="其他類">
              <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-center">
                <div>
                  <img
                    class="m-0 block w-full"
                    alt="其他類"
                    title="其他類"
                    src="@/assets/img/graduate/chart-valuable-3.webp"
                  />
                </div>
                <div class="flex flex-col gap-4 text-center text-[#b34454] lg:text-right">
                  <div class="text-3xl xl:text-5xl">國立研究所&私立大學</div>
                  <div class="text-3xl xl:text-5xl">
                    <span class="text-5xl xl:text-7xl">畢業起薪差距</span>可達
                  </div>
                  <div class="text-7xl font-bold xl:text-9xl">6000</div>
                  <div class="text-xs">參考104人力銀行薪資中位數</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
          <!-- 薪資比較tab end -->
        </ZoneTemplateXPaddingNarrow>
      </section>
      <section>
        <ZoneSectionTitle class="mb-3">不只薪資·還能提升<span>自我價值</span></ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow class="grid grid-cols-1 gap-3 text-xl text-base-500">
          <p>
            碩士畢業除了有更優渥的薪資外，也累積了更強大的專業與能力，職場上獲得更多的機會，並且將跟著你一生，終生受用。
          </p>
          <div class="deco-1">
            <div class="deco-1-item">
              <img
                alt="學歷重新洗牌"
                title="學歷重新洗牌"
                src="@/assets/img/graduate/icon-valuable-1.webp"
              />
              <div>學歷重新洗牌</div>
            </div>
            <div class="deco-1-item">
              <img
                alt="更強的專業知識"
                title="更強的專業知識"
                src="@/assets/img/graduate/icon-valuable-2.webp"
              />
              <div>更強的專業知識</div>
            </div>
            <div class="deco-1-item">
              <img
                alt="更高的升遷機會"
                title="更高的升遷機會"
                src="@/assets/img/graduate/icon-valuable-3.webp"
              />
              <div>更高的升遷機會</div>
            </div>
            <div class="deco-1-item">
              <img
                alt="獨立思考的能力"
                title="獨立思考的能力"
                src="@/assets/img/graduate/icon-valuable-4.webp"
              />
              <div>獨立思考的能力</div>
            </div>
          </div>
        </ZoneTemplateXPaddingNarrow>
      </section>
      <section>
        <ZoneSectionTitle class="mb-6"><span>就讓大碩研究所</span>讓你圓夢</ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow class="grid grid-cols-1 gap-3 text-xl text-base-500">
          <div class="deco-2">
            <div class="deco-2-item">
              <img
                alt="30年研究所輔考經驗"
                title="30年研究所輔考經驗"
                src="@/assets/img/graduate/icon-dream-1.webp"
              />
              <div class="deco-2-title">30年研究所輔考經驗</div>
              <div>
                <div>創辦至今逾30年</div>
                <div>研究所升學第一品牌</div>
              </div>
            </div>
            <div class="deco-2-item">
              <img
                alt="各類系所齊全"
                title="各類系所齊全"
                src="@/assets/img/graduate/icon-dream-2.webp"
              />
              <div class="deco-2-title">各類系所齊全</div>
              <div>
                <div>理工商文、EMBA等</div>
                <div>各類課程一應俱全</div>
              </div>
            </div>
            <div class="deco-2-item">
              <img
                alt="更高的升遷機會"
                title="更高的升遷機會"
                src="@/assets/img/graduate/icon-dream-3.webp"
              />
              <div class="deco-2-title">更高的升遷機會</div>
              <div>
                <div>集結業界最強師資</div>
                <div>全方位輔考服務</div>
              </div>
            </div>
            <div class="deco-2-item">
              <img
                alt="獨立思考的能力"
                title="獨立思考的能力"
                src="@/assets/img/graduate/icon-dream-4.webp"
              />
              <div class="deco-2-title">獨立思考的能力</div>
              <div>
                <div>不分類科年年強勢佔榜</div>
                <div>翻轉學歷最佳選擇</div>
              </div>
            </div>
          </div>
        </ZoneTemplateXPaddingNarrow>
      </section>
      <section>
        <ZoneSectionTitle class="mb-6">研究所<span>最佳上榜課程</span></ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow class="grid grid-cols-1 gap-3 text-xl text-base-500">
          <el-scrollbar class="w-full">
            <div class="flex w-[1080px] gap-2 pl-6">
              <nuxt-link
                type="button"
                class="w-[12%] rounded bg-[#f7a349] py-1 text-center text-white shadow-md hover:!opacity-100"
                to="/news/toNews"
              >
                春季班
              </nuxt-link>
              <nuxt-link
                type="button"
                class="w-[17%] rounded bg-[#69c5cd] py-1 text-center text-white shadow-md hover:!opacity-100"
                to="/news/toNews"
              >
                暑期班
              </nuxt-link>
              <nuxt-link
                type="button"
                class="w-[17%] rounded bg-[#f7a349] py-1 text-center text-white shadow-md hover:!opacity-100"
                to="/news/toNews"
              >
                秋季班
              </nuxt-link>
              <nuxt-link
                type="button"
                class="w-[12%] rounded bg-[#69c5cd] py-1 text-center text-white shadow-md hover:!opacity-100"
                to="/news/toNews"
              >
                題庫班
              </nuxt-link>
            </div>
            <img
              class="w-[1080px] max-w-none"
              alt="研究所考試時程表"
              title="研究所考試時程表"
              src="@/assets/img/graduate/timkeline.webp"
            />
          </el-scrollbar>
        </ZoneTemplateXPaddingNarrow>
      </section>
      <section>
        <ZoneSectionTitle class="mb-3">大碩獨尊<span>全面制霸</span></ZoneSectionTitle>
        <div class="flex flex-wrap justify-center bg-[#69c5cd] md:items-center">
          <img
            class="m-0 block w-[450px]"
            alt="考上頂大研究所就找大碩"
            title="考上頂大研究所就找大碩"
            src="@/assets/img/graduate/daso_no1.webp"
          />
          <img
            class="m-0 block w-[616px]"
            alt="考上頂大研究所就找大碩"
            title="考上頂大研究所就找大碩"
            src="@/assets/img/graduate/daso_rate.webp"
          />
        </div>
      </section>
      <section>
        <ZoneSectionTitle class="mb-3">學員<span>見證</span></ZoneSectionTitle>
        <ZoneTemplateXPaddingNarrow
          class="grid grid-cols-1 gap-y-4 bg-gradient-to-r from-primary-50 to-primary-100 py-5 lg:py-8"
        >
          <!-- 心得文章tab start -->
          <ul class="flex list-none justify-center gap-3">
            <li v-for="(item, index) in experienceBtnData" :key="index" class="w-full sm:w-auto">
              <button
                type="button"
                class="block w-full rounded-lg border-2 border-solid border-primary-500 py-2 text-center text-lg leading-none sm:px-3 md:px-6 lg:text-xl"
                :class="
                  index == experienceActive
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-primary-500'
                "
                @click="experienceTab(index)"
              >
                {{ item.name }}研究所
              </button>
            </li>
          </ul>
          <ZoneGraduateIndexExperience></ZoneGraduateIndexExperience>
          <!-- 心得文章tab end -->
        </ZoneTemplateXPaddingNarrow>
      </section>
      <section>
        <ZoneSectionTitle class="mb-3">研究所<span>考試秘笈</span></ZoneSectionTitle>
        <!-- 心得影片 start -->
        <ZoneGraduateIndexCoverchar
          @on-slide-change-transition-end="getVideoSrc"
          @coverchar-click="openVideoModal"
        />
        <VideoShowModal
          v-model="visible"
          :video-src="videosrc"
          :title="videotitle"
          :close="closeVideoModal"
        />
        <!-- 心得影片 end -->
      </section>
      <ZoneTemplateXPaddingNarrow ref="scrolltoform">
        <PublicForm></PublicForm>
      </ZoneTemplateXPaddingNarrow>
    </ZoneTemplateWrapper>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneTemplateXPaddingNarrow from '@/components/views/zone/ZoneTemplateXPaddingNarrow.vue'
import ZoneInfoContent from '@/components/views/zone/ZoneInfoContent.vue'
import ZoneInfoListRight from '@/components/views/zone/ZoneInfoListRight.vue'
import ZoneInfoListLeft from '@/components/views/zone/ZoneInfoListLeft.vue'
import ZoneInfoNewItem from '@/components/views/zone/ZoneInfoNewItem.vue'
import ZoneInfoArticleItem from '@/components/views/zone/ZoneInfoArticleItem.vue'
import ZoneInfoTitle from '@/components/views/zone/ZoneInfoTitle.vue'
import ZoneIndexBanner from '@/components/banner/ZoneIndexBanner.vue'
import ButtonIcon from '@/components/button/ButtonIcon.vue'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
import ButtonMore from '@/components/button/ButtonMore.vue'
import ZoneSectionTitle from '@/components/others/ZoneSectionTitle.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import ZoneGraduateIndexExperience from '@/components/views/zone/ZoneGraduateIndexExperience.vue'
import ZoneGraduateIndexCoverchar from '@/components/views/zone/ZoneGraduateIndexCoverchar.vue'
import VideoShowModal from '@/components/modal/VideoShowModal.vue'
zoneGraduateMenu() // 專區選單設定
// 首頁輪播banner start
const indexBannerData = reactive([
  {
    title: '圖片說明',
    picture: 'https://www.tkbtv.com.tw/upload/tv_ad/20220407151701164993.jpg',
    link: 'https://www.tkbgo.com.tw/go_edm/edm490/index.jsp?print_id=9522'
  },
  {
    title: '圖片說明',
    picture: 'https://www.tkbtv.com.tw/upload/tv_ad/20220510092443203252.webp',
    link: 'https://www.tkbgo.com.tw/news/toNews.jsp?print_id=9522&news_id=3952'
  },
  {
    title: '圖片說明',
    picture: 'https://www.tkbtv.com.tw/upload/tv_ad/20200916100844133967.webp',
    link: 'https://www.tkbgo.com.tw/go_edm/edm223/index.jsp?print_id=9522'
  },
  {
    title: '圖片說明',
    picture: 'https://www.tkbtv.com.tw/upload/tv_ad/20200326135333119074.webp',
    link: 'https://www.tkbgo.com.tw/go_edm/edm505/index.jsp?print_id=9522'
  }
])
// 首頁輪播banner end
// scroll to start
const scrolltoform = ref(null)
const getTarget = () => {
  return () => scrolltoform.value.$el
}
// scroll to end
// Element Plus Tabs start
const salaryComparison = ref('active')
const elTabClick = () => {}
// Element Plus Tabs end
// 心得文章tab start
const experienceActive = ref(0)
const experienceBtnData = ref([{ name: '理工' }, { name: '商管' }, { name: '生化' }])
function experienceTab(para) {
  experienceActive.value = para
}
// 心得文章tab end
// 心得影片 start
const videosrc = ref('')
const videotitle = ref('')
const visible = ref(false)
const getVideoSrc = (valvideo, valtitle) => {
  videosrc.value = valvideo
  videotitle.value = valtitle
}
const openVideoModal = () => {
  visible.value = true
  const autoPlay = '?autoplay=1&enablejsapi=1'
  videosrc.value += autoPlay
}
const closeVideoModal = () => {
  visible.value = false
  videosrc.value = ''
}
// 心得影片 end
</script>

<style lang="scss" scoped>
@import '@fortawesome/fontawesome-svg-core/styles.css';
.text-highlight {
  @apply inline text-[#B34454];
}
// 薪資比較tab樣式 start
.tab-salary:deep() {
  .el-tabs__header {
    @apply h-auto border-b-0 lg:w-1/2;
  }
  .el-tabs__nav {
    @apply float-none flex gap-3 border-0 lg:justify-center;
  }
  .el-tabs__item {
    @apply flex h-auto w-full items-center justify-center border-0 bg-[#20a4bb] py-3 text-lg leading-none text-white opacity-30 lg:w-auto lg:text-xl;
    padding-right: 0px !important;
    padding-left: 0px !important;
    @media (min-width: theme('screens.lg')) {
      padding-right: 30px !important;
      padding-left: 30px !important;
    }
  }
  .el-tabs__item:nth-child(2) {
    @apply bg-[#f7a349];
  }
  .el-tabs__item:nth-child(3) {
    @apply bg-[#b34454];
  }
  .el-tabs__item.is-active {
    @apply opacity-100;
  }
}
// 薪資比較tab樣式 end
.deco-1 {
  @apply grid grid-cols-2 gap-y-5 bg-[#f7a349] py-5 md:grid-cols-4 lg:py-8 xl:px-20;
}
.deco-1-item {
  @apply flex flex-col gap-2 text-center text-white;
  > img {
    @apply mx-auto block w-18 lg:w-[120px];
  }
}
.deco-2 {
  @apply grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-4 xl:px-20;
}
.deco-2-item {
  @apply flex flex-col gap-2 text-center;
  > img {
    @apply mx-auto block w-18 lg:w-[120px];
  }
}
.deco-2-title {
  @apply text-[#f7a349];
}
</style>
