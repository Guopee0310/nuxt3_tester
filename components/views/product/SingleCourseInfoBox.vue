<template>
  <div class="order-3 w-full overflow-hidden bg-white lg:order-2 lg:ml-8 lg:w-[400px]">
    <div class="bg-secondary-700 px-5 py-3">
      <h2 class="line-clamp-1 text-[1.2rem] text-white">研究所-通訊所(三科)-雲端</h2>
    </div>
    <div class="relative h-[340px] px-3 py-4">
      <div
        class="relative flex w-full justify-center overflow-hidden rounded-3xl bg-secondary-500/[.1]"
      >
        <div
          :class="aniTabActive === '課程資訊' ? 'text-white' : 'text-secondary-700'"
          class="z-10 flex w-1/2 cursor-pointer justify-center py-1 text-lg font-bold duration-100 ease-in"
          @click="aniTabActive = '課程資訊'"
        >
          課程資訊
        </div>
        <div
          :class="aniTabActive === '課程試看' ? 'text-white' : 'text-secondary-700'"
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
          class="aniTab absolute top-0 h-full w-1/2 rounded-3xl bg-secondary-700 duration-300 ease-in-out"
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
                class="mr-1 text-secondary-700"
                :icon="['fa', 'user-tie']"
              />授課師資<span class="pl-1 text-secondary-700">劉強</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-700"
                :icon="['fa', 'desktop']"
              />課程類型<span class="pl-1 text-secondary-700">大碩研究所</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-700"
                :icon="['far', 'calendar']"
              />有效期限<span class="pl-1 text-secondary-700">556天</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-700"
                :icon="['fa', 'user-pen']"
              />上課方式 <span class="pl-1 text-secondary-700">雲端課程</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon class="mr-1 text-secondary-700" :icon="['fa', 'clock']" />課程時數
              <span class="pl-1 text-secondary-700">56.8小時</span>
            </li>
            <li class="float-left inline-block w-1/2 py-1 text-[0.9rem] text-black">
              <font-awesome-icon
                class="mr-1 text-secondary-700"
                :icon="['far', 'calendar-days']"
              />上架日期 <span class="pl-1 text-secondary-700">2023-10-15</span>
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
          <div>
            <div class="cursor-pointer border-b border-solid border-base-100 bg-base-50 px-2 py-3">
              <div class="mb-1 flex justify-between">
                <div class="text-sm text-secondary-700">
                  <font-awesome-icon :icon="['far', 'file-lines']" />
                  第0章
                </div>
              </div>
              <div class="flex justify-between">
                <div>課程簡介</div>
                <font-awesome-icon class="text-xl" :icon="['far', 'circle-play']" />
              </div>
            </div>
            <div class="cursor-pointer border-b border-solid border-base-100 px-2 py-3">
              <div class="mb-1 flex justify-between">
                <div class="text-sm text-secondary-700">
                  <font-awesome-icon :icon="['far', 'file-lines']" />
                  第0章
                </div>
              </div>
              <div class="flex justify-between">
                <div>課程簡介</div>
                <font-awesome-icon class="text-xl" :icon="['far', 'circle-play']" />
              </div>
            </div>
          </div>
          <!-- 無任何試看內容 -->
          <div class="hidden h-full w-full items-center justify-center text-lg text-base-400">
            尚無任何試看影片
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
