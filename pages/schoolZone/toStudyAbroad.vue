<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <ZoneTemplateXPadding>
          <h1 class="text-3xl font-bold text-base-800">TOEFL證照備戰策略 出國留學不是夢</h1>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="col-gap items-center text-center text-lg">
          <h2 class="arttitle">
            <font-awesome-icon :icon="['fas', 'location-dot']" />海外留學想去哪個國家呢？
          </h2>
          <!-- 留學地圖 start -->
          <div class="abroadmap">
            <div ref="abroadmapArr" class="abroadmap-main">
              <img
                class="abroadmap-img"
                src="~/assets/img/graduate/map.png"
                alt="海外留學想去哪個國家呢？"
                title="海外留學想去哪個國家呢？"
              />
              <a
                class="abroadmap-btn-can"
                target="_blank"
                href="https://www.google.com/maps/d/embed?mid=1VM8fTdu-KItC9pU1le4LBp2JMCh37aLO"
                @mouseenter.stop="abroadmapMouseenter"
                @mouseleave="abroadmapMouseleave"
              >
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <img src="~/assets/img/graduate/cd.png" alt="加拿大" title="加拿大" />
              </a>
              <a
                class="abroadmap-btn-uk"
                target="_blank"
                href="https://www.google.com/maps/d/embed?mid=1ATXPnQB-MsXh7E2NnxS8cOJOCQn_G_3u"
                @mouseenter.stop="abroadmapMouseenter"
                @mouseleave="abroadmapMouseleave"
              >
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <img src="~/assets/img/graduate/uk.png" alt="英國" title="英國" />
              </a>
              <a
                class="abroadmap-btn-us"
                target="_blank"
                href="https://www.google.com/maps/d/embed?mid=1qA9H40SIe1H5vb_qp-Cl3811ckcpyhbO"
                @mouseenter.stop="abroadmapMouseenter"
                @mouseleave="abroadmapMouseleave"
              >
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <img src="~/assets/img/graduate/us.png" alt="美國" title="美國" />
              </a>
              <a
                class="abroadmap-btn-aus"
                target="_blank"
                href="https://www.google.com/maps/d/embed?mid=1kZffVDUJrmShgASBqSIrjWVVpLssOjNW"
                @mouseenter.stop="abroadmapMouseenter"
                @mouseleave="abroadmapMouseleave"
              >
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <img src="~/assets/img/graduate/at.png" alt="澳大利亞" title="澳大利亞" />
              </a>
              <a
                class="abroadmap-btn-new"
                target="_blank"
                href="https://www.google.com/maps/d/embed?mid=17-6ntU3WxsGz3MeM4eiZ4LdcmOWCk2qi"
                @mouseenter.stop="abroadmapMouseenter"
                @mouseleave="abroadmapMouseleave"
              >
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <img src="~/assets/img/graduate/nz.png" alt="紐西蘭" title="紐西蘭" />
              </a>
            </div>
            <div class="abroadmap-chart">
              <img src="~/assets/img/graduate/chart.png" alt="圓餅圖" title="圓餅圖" />
            </div>
          </div>
          <!-- 留學地圖 end -->
          <p><span class="text-focus">目標學校的托福證照門檻？</span></p>
          <ButtonS2 bg-color="bg-[#7bb635]">免費諮詢</ButtonS2>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="col-gap">
          <h2 class="arttitle"><font-awesome-icon :icon="['fas', 'thumbtack']" />留學的五大好處</h2>
          <ul class="custlist">
            <li class="custlist-item">
              <div class="custlist-item-title">
                <div>沉浸式語言環境</div>
              </div>
              <div>學外語可以很有趣，其中關鍵一個關鍵因素就是跳脫舒適圈，沉浸在外語的環境中。</div>
            </li>
            <li class="custlist-item">
              <div class="custlist-item-title">
                <div>強化口說訓練</div>
              </div>
              <div>
                有別於填鴨式教學，海外學習促使自己發表自己的想法，訓練自己獨立思考與創造的能力。
              </div>
            </li>
            <li class="custlist-item">
              <div class="custlist-item-title">
                <div>拓展國際人脈</div>
              </div>
              <div>社交圈不僅限於母國，踏出舒適圈建立國際人脈網絡，將會讓你在職場上無往不利。</div>
            </li>
            <li class="custlist-item">
              <div class="custlist-item-title">
                <div>培養頂尖專業</div>
              </div>
              <div>繼續針對個人領域精進，了解國際間的競爭水平，並開闊新視野、新格局。</div>
            </li>
            <li class="custlist-item">
              <div class="custlist-item-title">
                <div>取得優質學歷</div>
              </div>
              <div>在競爭激烈的就業環境下，留學所增進的能力，可望成為進入面試門檻的敲門磚。</div>
            </li>
          </ul>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="col-gap">
          <h2 class="arttitle">
            <font-awesome-icon :icon="['fas', 'check']" />我有達到托福門檻嗎？
            <div class="inline whitespace-nowrap">看看美國前10大分數要求</div>
          </h2>
          <div class="flex flex-col gap-1">
            <h3 class="text-center text-xl font-medium text-[#568ecb]">美國商學院</h3>
            <div class="custtable-wrapper">
              <table class="custtable custtable-dyed">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>學校名稱</th>
                    <th>托福成績</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>哈佛大學</td>
                    <td>109</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>芝加哥大學</td>
                    <td>104</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>賓夕法尼亞大學</td>
                    <td>無最低要求</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>史丹佛大學</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>麻省理工學院</td>
                    <td>無最低要求</td>
                  </tr>
                </tbody>
              </table>
              <table class="custtable custtable-dyed">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>學校名稱</th>
                    <th>托福成績</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>西北大學</td>
                    <td>無最低要求</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>加州大學柏克萊分校</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>密西根大學安娜堡分校</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>哥倫比亞大學</td>
                    <td>110</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>達特茅斯學院</td>
                    <td>無最低要求</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <h3 class="text-center text-xl font-medium text-[#bb7126]">美國工學院</h3>
            <div class="custtable-wrapper">
              <table class="custtable custtable-wood">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>學校名稱</th>
                    <th>托福成績</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>麻省理工學院</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>史丹佛大學</td>
                    <td>無最低要求</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>加州大學柏克萊分校</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>加州理工學院</td>
                    <td>無最低要求</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>密西根大學安娜堡分校</td>
                    <td>無最低要求</td>
                  </tr>
                </tbody>
              </table>
              <table class="custtable custtable-wood">
                <thead>
                  <tr>
                    <th>排名</th>
                    <th>學校名稱</th>
                    <th>托福成績</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>6</td>
                    <td>卡內基梅隆大學</td>
                    <td>102</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>普渡大學西拉法葉分校</td>
                    <td>80<span class="text-xs">（W18/S18/L14/R19）</span></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>喬治亞理工學院</td>
                    <td>90<span class="text-xs">（單科皆不低於20）</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>伊利諾伊大學香檳分校</td>
                    <td>79</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>南加州大學</td>
                    <td>90<span class="text-xs">（單科皆不低於20）</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>資料來源：ETS官方數據</p>
          </div>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="col-gap">
          <h2 class="arttitle">
            <font-awesome-icon :icon="['fas', 'bookmark']" />留學申請準備步驟
          </h2>
          <div class="custstep">
            <div class="custstep-item">
              <div class="custstep-head">
                <div class="custstep-head-content">
                  <div><font-awesome-icon :icon="['fas', 'star']" />Step1</div>
                  <div>找心儀的諮詢中心</div>
                </div>
              </div>
              <div class="custstep-body">
                <ol class="list-decimal">
                  <li>諮詢</li>
                  <li>初選</li>
                  <li>定校</li>
                </ol>
              </div>
            </div>
            <div class="custstep-item">
              <div class="custstep-head">
                <div class="custstep-head-content">
                  <div><font-awesome-icon :icon="['fas', 'star']" />Step2</div>
                  <div>有利的申請條件</div>
                </div>
              </div>
              <div class="custstep-body">
                <ol class="list-decimal">
                  <li>GPA(大學在校成績)</li>
                  <li>TOEFL/IELTS成績(依國家不同)</li>
                  <li>GRE/GMAT成績(美國研究所為主)</li>
                  <li>工作經驗/研究</li>
                </ol>
              </div>
            </div>
            <div class="custstep-item">
              <div class="custstep-head">
                <div class="custstep-head-content">
                  <div><font-awesome-icon :icon="['fas', 'star']" />Step3</div>
                  <div>獨特的形象包裝</div>
                </div>
              </div>
              <div class="custstep-body">
                <ol class="list-decimal">
                  <li>履歷表</li>
                  <li>讀書計畫</li>
                  <li>推薦函</li>
                  <li>作品集</li>
                </ol>
              </div>
            </div>
            <div class="custstep-item">
              <div class="custstep-head">
                <div class="custstep-head-content">
                  <div><font-awesome-icon :icon="['fas', 'star']" />Step4</div>
                  <div>確實的申請追蹤</div>
                </div>
              </div>
              <div class="custstep-body">
                <ol class="list-decimal">
                  <li>確認文件到期</li>
                  <li>完成學校申請</li>
                  <li>追蹤申請進度</li>
                </ol>
              </div>
            </div>
          </div>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding class="col-gap">
          <h2 class="arttitle">
            <font-awesome-icon :icon="['fas', 'calendar-check']" />證照考試、留學準備時程表
          </h2>
          <p class="text-center text-lg">以申請秋季班入學為例，考照出國建議時程！</p>
          <div class="flex flex-col gap-1">
            <picture alt="證照考試、留學準備時程表" title="證照考試、留學準備時程表">
              <!-- 說明：電腦banner尺寸。 -->
              <source media="(min-width: 768px)" srcset="~/assets/img/graduate/schedule.png" />
              <!-- 說明：手機banner尺寸。 -->
              <img src="~/assets/img/graduate/schedule_m.png" />
            </picture>
            <p>※上述時程將依申請者狀況不同而有所調整</p>
          </div>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding>
          <h2 class="arttitle-head">
            <font-awesome-icon :icon="['fas', 'thumbs-up']" />托福考試破題技巧大公開
          </h2>
          <div class="bg-[#dcfefd] px-1 py-3 sm:px-2 sm:py-4">
            <ZoneStudyAbroadVideo></ZoneStudyAbroadVideo>
          </div>
        </ZoneTemplateXPadding>
        <ZoneTemplateXPadding>
          <PublicForm></PublicForm>
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
      <ZoneGraduateSidebar />
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ButtonS2 from '@/components/button/ButtonS2.vue'
import ZoneGraduateSidebar from '@/components/views/zone/ZoneGraduateSidebar.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import ZoneStudyAbroadVideo from '@/components/views/zone/ZoneStudyAbroadVideo.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu('35351663') // 專區選單設定
// 留學地圖 start
let abroadmapArr = ref(null)
onMounted(() => {
  abroadmapArr = abroadmapArr.value.children
})
function abroadmapMouseenter(even) {
  for (let i = 0; i < abroadmapArr.length; i++) {
    if (abroadmapArr[i] !== abroadmapArr[0]) {
      abroadmapArr[i].classList.add('abroadmap-pause')
    }
    if (abroadmapArr[i] !== undefined && abroadmapArr[i] !== even.target) {
      abroadmapArr[i].style.opacity = '0.3'
    }
  }
}
function abroadmapMouseleave(even) {
  for (let i = 0; i < abroadmapArr.length; i++) {
    abroadmapArr[i].classList.remove('abroadmap-pause')
    if (abroadmapArr[i] !== undefined && abroadmapArr[i] !== even.target) {
      abroadmapArr[i].style.opacity = null
    }
  }
}
// 留學地圖 end
</script>

<style lang="scss" scoped>
.arttitle {
  @apply text-center text-2xl font-semibold text-secondary-700;
  > [data-prefix='fas'] {
    @apply mr-1;
  }
}
.arttitle-head {
  @apply block rounded-t-2xl bg-secondary-700 py-3 text-center text-2xl font-semibold text-white;
  > [data-prefix='fas'] {
    @apply mr-1;
  }
}
.text-focus {
  display: inline;
  font-weight: 400;
  background-image: linear-gradient(rgba(255, 255, 255, 0) 70%, #ffe66b 60%);
}
.col-gap {
  @apply flex flex-col gap-3;
}
// 留學地圖樣式 start
.abroadmap {
  @apply relative w-full bg-[#dcfefd] px-[2%] py-[5%];
}
.abroadmap-main {
  @apply relative;
}
.abroadmap-chart {
  @apply text-center md:absolute md:right-[5%] md:top-[5%];
  > img {
    @apply md:w-3/5;
  }
}
.abroadmap-img {
  @apply w-full transition;
}
[class^='abroadmap-btn'] {
  @apply absolute flex w-[10vw] cursor-pointer flex-col items-center transition md:w-[7vw] lg:w-[4vw];
  > [data-prefix='fas'] {
    @apply animate-bounce text-center text-3xl text-secondary-600;
  }
}
.abroadmap-pause > [data-prefix='fas'] {
  animation-play-state: paused;
}
.abroadmap-btn-can {
  @apply left-[3%] top-[20%] hover:opacity-100;
}
.abroadmap-btn-uk {
  @apply left-[40%] top-[3%] hover:opacity-100;
}
.abroadmap-btn-us {
  @apply left-[28%] top-[35%] hover:opacity-100;
}
.abroadmap-btn-aus {
  @apply bottom-[6%] right-[23%] hover:opacity-100;
}
.abroadmap-btn-new {
  @apply bottom-[10%] right-0 hover:opacity-100;
}
// 留學地圖樣式 end
// 項目清單 start
.custlist {
  @apply flex flex-col gap-3;
}
.custlist-item {
  @apply flex flex-col gap-1 sm:flex-row sm:items-center;
}
.custlist-item-title {
  @apply flex;
  > div {
    @apply flex-1 whitespace-nowrap bg-secondary-500 py-1 pl-2 text-white sm:w-[120px] sm:flex-auto;
  }
  &::after {
    @apply block h-0 border-y-[2ex] border-l-[10px] border-r-0 border-solid border-y-transparent border-l-secondary-500 content-[''];
  }
}
// 項目清單 end
// 表格 start
.custtable-wrapper {
  @apply xl:flex xl:flex-row;
  > .custtable:not(:first-child) thead {
    @apply hidden xl:block;
  }
  > .custtable:not(:first-child) thead {
    @apply hidden xl:table-header-group;
  }
  > .custtable:not(:first-child) tbody tr:first-child td {
    @apply border-t-0 xl:border-t;
  }
}
.custtable {
  @apply w-full border-0;
  tbody {
    @apply text-white;
  }
  th,
  td {
    @apply border border-solid border-white px-1 py-2;
  }
  tbody {
    td:first-child {
      @apply text-center;
    }
    td:not(:first-child) {
      @apply w-2/5;
    }
  }
}
.custtable-dyed {
  thead {
    @apply bg-[#cae0ee];
  }
  tbody tr:nth-child(odd) {
    @apply bg-[#568dcd];
  }
  tbody tr:nth-child(even) {
    @apply bg-[#71ade3];
  }
}
.custtable-wrapper > .custtable-dyed:not(:first-child) {
  tbody tr:nth-child(odd) {
    @apply bg-[#71ade3] xl:bg-[#568dcd];
  }
  tbody tr:nth-child(even) {
    @apply bg-[#568dcd] xl:bg-[#71ade3];
  }
}
.custtable-wood {
  thead {
    @apply bg-[#ede0d7];
  }
  tbody tr:nth-child(odd) {
    @apply bg-[#bd7126];
  }
  tbody tr:nth-child(even) {
    @apply bg-[#cf823e];
  }
}
.custtable-wrapper > .custtable-wood:not(:first-child) {
  tbody tr:nth-child(odd) {
    @apply bg-[#cf823e] xl:bg-[#bd7126];
  }
  tbody tr:nth-child(even) {
    @apply bg-[#bd7126] xl:bg-[#cf823e];
  }
}
// 表格 end
// 步驟 start
.custstep {
  @apply flex flex-wrap gap-y-3;
}
.custstep-item {
  @apply w-full sm:w-1/2;
  &:nth-child(1) {
    @apply xl:w-1/5;
  }
  &:nth-child(2) {
    @apply xl:w-[32%];
  }
  &:nth-child(3),
  &:nth-child(4) {
    @apply xl:w-[24%];
  }
  @media (min-width: theme('screens.xl')) {
    &:nth-child(3) .custstep-head::before {
      @apply block h-0 border-y-[3ex] border-l-[10px] border-r-0 border-solid border-y-[#b4d87e] border-l-transparent content-[''];
    }
  }
  @media (min-width: theme('screens.sm')) {
    &:nth-child(2) .custstep-head::before {
      @apply block h-0 border-y-[3ex] border-l-[10px] border-r-0 border-solid border-y-[#b4d87e] border-l-transparent content-[''];
    }
    &:nth-child(4) .custstep-head::before {
      @apply block h-0 border-y-[3ex] border-l-[10px] border-r-0 border-solid border-y-[#b4d87e] border-l-transparent content-[''];
    }
  }
}
.custstep-head {
  @apply mb-1 flex;
  &::after {
    @apply block h-0 border-y-[3ex] border-l-[10px] border-r-0 border-solid border-y-transparent border-l-[#b4d87e] content-[''];
  }
}
.custstep-head-content {
  @apply flex flex-1 flex-col justify-center bg-[#b4d87e] pl-2;
  > *:first-child {
    @apply text-xs text-white;
  }
  > *:last-child {
    @apply text-lg font-medium;
  }
}
.custstep-body {
  @apply text-center;
  > * {
    @apply inline-block text-left;
  }
}
// 步驟 end
</style>
