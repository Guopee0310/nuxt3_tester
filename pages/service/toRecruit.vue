<template>
  <div>
    <!-- 主視覺 -->
    <div class="recruit-bg relative overflow-hidden">
      <div class="recruit-mb-bg"></div>
      <div
        class="recruit-title absolute left-0 top-0 flex h-full w-full items-center justify-center"
      >
        <img
          class="mt-[5%] w-[140px] lg:w-[180px] xl:w-[275px]"
          src="~/assets/img/service/main_header_title.svg"
          alt="歡迎加入TKB"
          title="歡迎加入TKB"
        />
      </div>
    </div>

    <!-- 情境區塊 -->
    <div class="container my-10">
      <div class="mx-auto w-full sm:max-w-[720px] lg:max-w-full">
        <div class="hidden border-x-4 border-t-4 border-solid border-base-800 pt-10 sm:block"></div>
        <div class="my-2 flex flex-col items-center gap-4 lg:flex-row lg:items-start">
          <div class="mx-auto w-full lg:w-5/12">
            <div class="sandwich-photo mx-auto w-full sm:w-[440px] lg:w-full">
              <img
                class="block"
                src="~/assets/img/service/photo_person.webp"
                alt="關於TKBGO購課網"
              />
            </div>
          </div>
          <div class="m-auto w-full lg:w-7/12">
            <p class="my-3">
              關於 TKBGO
              購課網，我們是台灣知識庫股份有限公司旗下的課程銷售平台，主要課程類別是研究所、公職、國營、語言相關，平台上有上千門課程供選擇，幫助無數學生考取理想學校、工作職務及相關證照。平台每個月不重複訪客有數十萬以上。
            </p>
            <p class="my-3">
              我們致力於打造高品質的教育品牌網站，為學習者提供最新的資訊，優質的學習內容及更佳的學習體驗，協助學習者在學習階段，有更好的學習成果，達成各學習的階段目標！為此，我們正在尋找優秀的行銷夥伴加入！
            </p>
          </div>
        </div>
        <div class="hidden border-x-4 border-b-4 border-solid border-base-800 pt-10 sm:block"></div>
      </div>
    </div>

    <!-- 職務區塊 -->
    <div class="geometry-bg min-h-[300px] py-10">
      <div class="container">
        <h2 class="mb-4 text-center text-4xl font-semibold text-secondary-500">
          <span class="font-normal">/</span> 徵才 <span class="font-normal">/</span>
        </h2>
        <div class="flex flex-col gap-8">
          <a
            class="card-prj block overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            href="https://www.104.com.tw/job/3yaek?jobsource=company_job"
            target="_blank"
          >
            <div
              class="mb-2 flex items-center justify-between border-b border-solid border-base-300 pb-2"
            >
              <div class="text-2xl font-semibold text-[#456990] md:text-base-800">
                電子商務-課程產品行銷企劃
              </div>
              <div class="flex items-center gap-1">
                <span class="hidden text-[#456990] md:block">加入我們</span>
                <div
                  class="flex h-4 w-4 items-center justify-center rounded-full bg-[#456990] text-white"
                >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </div>
              </div>
            </div>
            <div>
              <ol class="list-decimal pl-4 text-lg">
                <li class="mb-1">課程產品網站專區企劃及管理。</li>
                <li class="mb-1">
                  產品行銷活動企劃及推廣(線上及線下活動規劃及執行、影音相關企劃等等)。
                </li>
                <li class="mb-1">廣告及行銷執行討論。</li>
                <li class="mb-1">需擅長跨部門溝通。</li>
                <li class="mb-1">主管交辦事項。</li>
              </ol>
            </div>
          </a>

          <a
            class="card-prj block overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            href="https://www.104.com.tw/job/4us6h?jobsource=company_job"
            target="_blank"
          >
            <div
              class="mb-2 flex items-center justify-between border-b border-solid border-base-300 pb-2"
            >
              <div class="text-2xl font-semibold text-[#456990] md:text-base-800">
                電子商務網路行銷人員
              </div>
              <div class="flex items-center gap-1">
                <span class="hidden text-[#456990] md:block">加入我們</span>
                <div
                  class="flex h-4 w-4 items-center justify-center rounded-full bg-[#456990] text-white"
                >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <div class="mb-1 text-lg"><span class="mr-1">※</span>網站社群經營</div>
              <ol class="list-decimal pl-4 text-lg">
                <li class="mb-1">網站維運：執行行銷活動，規劃視覺、版位、功能服務優化。</li>
                <li class="mb-1">社群經營：社群平台操作，與目標受眾互動，營造品牌形象。</li>
                <li class="mb-1">
                  數據洞察：使用Google Analytics並進行數據驅動，擬定可行的優化策略。
                </li>
              </ol>
            </div>
            <div class="mb-2">
              <div class="mb-1 text-lg"><span class="mr-1">※</span>行銷企劃專案</div>
              <ol class="list-decimal pl-4 text-lg" start="4">
                <li class="mb-1">跨部門溝通：與產品部門共同規劃產品行銷方針與作業排程。</li>
                <li class="mb-1">提案企劃：針對產品提出可行方向製作簡報，清楚傳遞資訊。</li>
                <li class="mb-1">專案控管：掌握時程並全力執行，以達到預設轉換目標。</li>
                <li class="mb-1">主管交辦事項。</li>
              </ol>
            </div>
          </a>

          <a
            class="card-prj block overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            href="https://www.104.com.tw/job/3tmyt?jobsource=company_job"
            target="_blank"
          >
            <div
              class="mb-2 flex items-center justify-between border-b border-solid border-base-300 pb-2"
            >
              <div class="text-2xl font-semibold text-[#456990] md:text-base-800">
                電子商務線上學習顧問/國內業務人員
              </div>
              <div class="flex items-center gap-1">
                <span class="hidden text-[#456990] md:block">加入我們</span>
                <div
                  class="flex h-4 w-4 items-center justify-center rounded-full bg-[#456990] text-white"
                >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <ol class="mb-1 list-decimal pl-4 text-lg">
                <li class="mb-1">無需陌生開發。</li>
                <li class="mb-1">與客戶維護良好關係，做好客戶關係管理。</li>
                <li class="mb-1">與公司其他通路合作。</li>
                <li class="mb-1">內勤業務工作，無需擔心日曬雨淋。</li>
                <li class="mb-1">完整的升遷管道。</li>
              </ol>
              <div class="text-lg">
                <span class="mr-1">※</span>公司提供完整新人教育訓練及每年產品教育訓練。
              </div>
            </div>
          </a>

          <a
            class="card-prj block overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            href="https://www.104.com.tw/job/7kxzm?jobsource=company_job"
            target="_blank"
          >
            <div
              class="mb-2 flex items-center justify-between border-b border-solid border-base-300 pb-2"
            >
              <div class="text-2xl font-semibold text-[#456990] md:text-base-800">
                電子商務-線上課程教學設計人員
              </div>
              <div class="flex items-center gap-1">
                <span class="hidden text-[#456990] md:block">加入我們</span>
                <div
                  class="flex h-4 w-4 items-center justify-center rounded-full bg-[#456990] text-white"
                >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <ol class="mb-1 list-decimal pl-4 text-lg">
                <li class="mb-1">線上課程製作。</li>
                <li class="mb-1">老師溝通協調。</li>
                <li class="mb-1">課程簡報教材相關製作。</li>
                <li class="mb-1">網站課程上架執行。</li>
                <li class="mb-1">行政相關事務協助。</li>
                <li class="mb-1">主管交辦事項。</li>
              </ol>
              <div class="text-lg"><span class="mr-1">※</span>具團隊精神並擁有良好的溝通能力。</div>
            </div>
          </a>

          <a
            class="card-prj block overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            href="https://www.104.com.tw/job/3tn4i?jobsource=company_job"
            target="_blank"
          >
            <div
              class="mb-2 flex items-center justify-between border-b border-solid border-base-300 pb-2"
            >
              <div class="text-2xl font-semibold text-[#456990] md:text-base-800">
                Java/JSP網站系統程式設計師
              </div>
              <div class="flex items-center gap-1">
                <span class="hidden text-[#456990] md:block">加入我們</span>
                <div
                  class="flex h-4 w-4 items-center justify-center rounded-full bg-[#456990] text-white"
                >
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </div>
              </div>
            </div>
            <div class="mb-2">
              <ol class="list-decimal pl-4 text-lg">
                <li class="mb-1">
                  熟悉JSP/Servlet、MVC架構，了解java
                  web框架，熟SQL語法及資料庫基本概念，對於Java框架熟悉者佳，如Struts、SpringBoot。
                </li>
                <li class="mb-1">
                  須會撰寫基本的前端javaScript、CSS，HTML技術，使用過前端框架者佳，如Vue、React。
                </li>
                <li class="mb-1">
                  本職務適合對於實踐web前後端技術有熱情，且有開發自有技術的自信與熱情的web程式設計師。
                </li>
                <li class="mb-1">能夠協助開發網站並能夠維護網站的運作，能有基本的除錯能力。</li>
                <li class="mb-1">有Android或IOS程式經驗佳。</li>
              </ol>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: 'main'
})
</script>
<style lang="scss" scoped>
.recruit-bg {
  background: url('~/assets/img/service/main_headerbg_re.svg') repeat top left;
  @apply block pb-[115%] sm:pb-[80%] md:hidden;

  @media (min-width: theme('screens.md')) {
    background: url('~/assets/img/service/main_header.webp') no-repeat right bottom / cover;
    @apply hidden pb-[40%] md:block xl:h-[660px] xl:pb-0;
  }
}

.recruit-mb-bg {
  background: url('~/assets/img/service/main_header_mob.webp') no-repeat center bottom / cover;
  @apply absolute left-0 top-0 block w-full pb-[75%] md:hidden;
}
.sandwich-photo {
  @apply relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 0;
    top: 0.5rem;
    left: 0.5rem;
    border-top: 10px solid theme('colors.secondary.500');
    border-left: 10px solid theme('colors.secondary.500');
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }
  > img {
    filter: drop-shadow(-4px 8px 12px rgba(0, 0, 0, 0.16));
  }
}

.geometry-bg {
  background: url('~/assets/img/service/bg_geometry.webp') no-repeat top left/100% 100%;
}

.card-prj {
  @apply transition-all duration-300 ease-in-out;
  &:hover {
    @apply translate-y-1 scale-[1.01] opacity-100;
  }
}
</style>
