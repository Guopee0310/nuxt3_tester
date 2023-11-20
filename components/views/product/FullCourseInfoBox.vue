<template>
  <div class="order-3 w-full overflow-hidden bg-white lg:order-2 lg:ml-8 lg:w-[400px]">
    <div class="bg-secondary-500 px-5 py-3">
      <h2 class="line-clamp-1 text-[1.2rem] text-white">研究所-通訊所(三科)-雲端</h2>
    </div>
    <div class="relative h-[340px] px-3 py-4">
      <div
        class="relative flex w-full justify-center overflow-hidden rounded-3xl bg-secondary-500/[.1]"
      >
        <div
          :class="aniTabActive === '課程資訊' ? 'text-white' : 'text-secondary-500'"
          class="z-10 flex w-1/2 cursor-pointer justify-center py-1 text-lg font-bold duration-100 ease-in"
          @click="aniTabActive = '課程資訊'"
        >
          課程資訊
        </div>
        <div
          :class="aniTabActive === '課程試看' ? 'text-white' : 'text-secondary-500'"
          class="z-10 flex w-1/2 cursor-pointer items-center justify-center py-1 text-lg font-bold duration-100 ease-in"
          @click="aniTabActive = '課程試看'"
        >
          課程試看
          <span
            class="mx-1 h-[17px] w-[17px] rounded-full bg-[#F7687A] text-center text-xs text-white"
            >9</span
          >
        </div>
        <div
          ref="aniTab"
          class="aniTab absolute top-0 h-full w-1/2 rounded-3xl bg-secondary-500 duration-300 ease-in-out"
          :class="aniTabActive === '課程試看' ? 'left-1/2' : 'left-0'"
        >
          >
        </div>
      </div>
      <div class="flex h-[calc(100%_-_50px)] w-full flex-col">
        <div
          ref="ContentInformation"
          :class="aniTabActive === '課程資訊' ? '' : 'hidden'"
          class="mt-2 h-full min-h-[255px]"
        >
          <ul class="flex flex-wrap p-2">
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-500"
                :icon="['far', 'calendar']"
              />有效期限<span class="pl-1 text-secondary-500">556天</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-500"
                :icon="['fa', 'user-pen']"
              />上課方式 <span class="pl-1 text-secondary-500">雲端課程</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-500"
                :icon="['far', 'square-check']"
              />可選科目 <span class="pl-1 text-secondary-500">3科</span>
            </li>
            <li class="float-left inline-block w-full py-1 text-[0.9rem] text-black">
              <a class="text-primary-500" href="">
                <font-awesome-icon class="mr-1" :icon="['far', 'circle-question']" />時數使用說明
              </a>
            </li>
          </ul>
          <div class="border-y-[1px] border-solid border-[#ddd] p-2">
            <div class="text-[0.9rem] text-black">
              <font-awesome-icon class="mr-1" :icon="['fa', 'credit-card']" />
              付款方式：
              <a
                class="text-primary-500"
                rel="noopener"
                target="_blank"
                href="https://www.tkbgo.com.tw/service/toWebQA.jsp?faq_id=455"
                >ATM轉帳、線上刷卡、分期零利率(須滿三萬)、LINE Pay</a
              >
            </div>
          </div>
          <div class="p-2">
            <span class="text-base-400">課程售價</span>
            <div class="flex items-end justify-end font-['Century_Gothic']">
              <div class="mr-10 text-2xl font-bold text-base-500">
                <span class="mr-1">NT</span><span class="line-through">41,000</span>
              </div>
              <div class="text-3xl font-bold tracking-wide text-danger-600">
                <span class="mr-1 text-2xl">NT</span>40,000
              </div>
            </div>
          </div>
        </div>
        <div
          ref="ContentPreview"
          class="mt-2 min-h-[255px] overflow-y-auto px-1 duration-400 ease-in-out scrollbar-thin scrollbar-thumb-gray-300"
          :class="[
            aniTabActive === '課程試看' ? '' : 'hidden',
            isPreviewDetailShow ? '-translate-x-full opacity-0' : 'opacity-100'
          ]"
        >
          <div class="grid w-full grid-cols-2 gap-2 p-2">
            <div
              class="duration-20 line-clamp-1 cursor-pointer rounded border border-solid border-secondary-500 px-2 py-1 text-center text-secondary-500 duration-200 ease-in-out hover:bg-secondary-500 hover:text-white"
              @click="previewDetail()"
            >
              <span>工數-雲端</span>
            </div>
            <div
              class="duration-20 line-clamp-1 cursor-pointer rounded border border-solid border-secondary-500 px-2 py-1 text-center text-secondary-500 duration-200 ease-in-out hover:bg-secondary-500 hover:text-white"
              @click="previewDetail()"
            >
              <span>線代-雲端</span>
            </div>
            <div
              class="duration-20 line-clamp-1 cursor-pointer rounded border border-solid border-secondary-500 px-2 py-1 text-center text-secondary-500 duration-200 ease-in-out hover:bg-secondary-500 hover:text-white"
              @click="previewDetail()"
            >
              <span>通訊線代-雲端</span>
            </div>
            <div
              class="duration-20 line-clamp-1 cursor-pointer rounded border border-solid border-secondary-500 px-2 py-1 text-center text-secondary-500 duration-200 ease-in-out hover:bg-secondary-500 hover:text-white"
              @click="previewDetail()"
            >
              <span>通訊數學-雲端</span>
            </div>
          </div>
          <!-- 無任何試看內容 -->
          <div class="hidden h-full w-full items-center justify-center text-lg text-base-400">
            尚無任何試看影片
          </div>
        </div>
        <!--課程試看內容-->
        <div
          ref="ContentPreviewDetail"
          :class="isPreviewDetailShow ? 'opacity-100' : 'translate-x-full opacity-0'"
          class="opacity-full absolute left-0 top-0 z-10 h-full w-full overflow-auto bg-white px-4 py-2 duration-400 ease-in-out"
        >
          <div
            class="mb-3 border-b border-solid border-base-300 py-1 pl-[1em] -indent-[1.5em] text-xl text-secondary-500"
          >
            <font-awesome-icon
              class="!w-5 cursor-pointer"
              :icon="['fa', 'chevron-left']"
              @click="isPreviewDetailShow = false"
            />
            課程試看：線代-雲端
          </div>
          <div>
            <FullCoursePreviewItem />
            <FullCoursePreviewItem />
            <FullCoursePreviewItem />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FullCoursePreviewItem from '@/components/views/product/FullCoursePreviewItem.vue'
export default {
  components: {
    FullCoursePreviewItem
  },
  data() {
    return {
      aniTabActive: '課程資訊',
      isPreviewDetailShow: false
    }
  },
  methods: {
    previewDetail() {
      this.isPreviewDetailShow = true
    }
  }
}
</script>
<style lang="scss" scoped>
.aniTab {
  box-shadow: inset 0 -2px rgba(0, 0, 0, 0.08);
}
</style>
