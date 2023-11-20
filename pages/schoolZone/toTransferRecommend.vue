<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8 py-3">
          <h1 class="text-3xl text-base-800">推薦課程</h1>
          <div class="grid gap-y-3">
            <h2 class="text-2xl font-semibold">雲端課程三大優勢</h2>
            <ul class="flex flex-col sm:flex-row sm:flex-wrap">
              <li class="w-[260px]">
                <img
                  class="m-0 block w-full"
                  src="~/assets/img/transfer/ft_1.png"
                  alt="24小時學習不中斷"
                  title="24小時學習不中斷"
                />
              </li>
              <li class="w-[260px]">
                <img
                  class="m-0 block w-full"
                  src="~/assets/img/transfer/ft_2.png"
                  alt="自由安排上課進度"
                  title="自由安排上課進度"
                />
              </li>
              <li class="w-[260px]">
                <img
                  class="m-0 block w-full"
                  src="~/assets/img/transfer/ft_3.png"
                  alt="支援兩倍速播放"
                  title="支援兩倍速播放"
                />
              </li>
            </ul>
            <p class="text-lg">
              還在煩惱該去哪補習嗎？趕緊點選下方你想要的課程，購買屬於你的上榜雲端課程吧！
            </p>
          </div>
          <div class="grid gap-y-4">
            <h3
              class="relative block w-[160px] bg-[#00ab6b] py-2 pl-3 text-xl font-medium leading-none text-white after:absolute after:right-[-30px] after:top-0 after:block after:h-0 after:border-l-[30px] after:border-r-0 after:border-t-[4ex] after:border-solid after:border-l-[#00ab6b] after:border-t-transparent after:content-['']"
            >
              理工學院
            </h3>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  理工
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  私醫
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
          <div class="grid gap-y-4">
            <h3
              class="relative block w-[160px] bg-[#00ab6b] py-2 pl-3 text-xl font-medium leading-none text-white after:absolute after:right-[-30px] after:top-0 after:block after:h-0 after:border-l-[30px] after:border-r-0 after:border-t-[4ex] after:border-solid after:border-l-[#00ab6b] after:border-t-transparent after:content-['']"
            >
              商管學院
            </h3>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  商管
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
          <div class="grid gap-y-4">
            <h3
              class="relative block w-[160px] bg-[#00ab6b] py-2 pl-3 text-xl font-medium leading-none text-white after:absolute after:right-[-30px] after:top-0 after:block after:h-0 after:border-l-[30px] after:border-r-0 after:border-t-[4ex] after:border-solid after:border-l-[#00ab6b] after:border-t-transparent after:content-['']"
            >
              文科藝術傳播
            </h3>
            <div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  外文
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  法律
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  日文
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  大傳/新聞
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
              <button
                type="button"
                class="group h-16 rounded bg-base-100 transition hover:bg-[#00ab6b] md:h-20"
              >
                <div
                  class="translate-y-2 text-lg transition group-hover:translate-y-0 group-hover:text-white md:translate-y-3"
                >
                  政治
                </div>
                <font-awesome-icon
                  :icon="['fas', 'angle-down']"
                  class="translate-y-6 opacity-0 transition group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100"
                />
              </button>
            </div>
          </div>
        </ZoneTemplateXPadding>
      </main>
      <ZoneTransferSidebar />
    </div>
  </ZoneTemplate>
</template>
<script>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneTransferSidebar from '@/components/views/zone/ZoneTransferSidebar.vue'

export default {
  components: {
    ZoneTemplate,
    ZoneTemplateXPadding,
    ZoneTransferSidebar
  },
  layout: 'main'
}
</script>
<style lang="scss" scoped></style>
