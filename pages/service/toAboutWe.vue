<template>
  <div>
    <div class="container">
      <PageTitle title="關於我們" />
      <AnchorList>
        <AnchorPoint
          v-for="(item, index) in items"
          :key="index"
          :classname="item.colorchart"
          :name="item.name"
          :get-target="getTarget(index)"
        />
        <!-- <AnchorPoint target-id="#sort1" target-name="臺灣知識庫簡介" />
        <AnchorPoint colorchart="text-secondary-700" target-id="#sort2" target-name="董事長的話" /> -->
      </AnchorList>
      <div ref="sort0" class="mb-10 grid border-b border-solid border-primary-500">
        <h2 class="mb-3 font-bold text-primary-500">臺灣知識庫簡介</h2>
        <div class="mb-2 border-b border-dashed border-base-300 pb-2">
          <h4 class="mb-4 font-semibold text-black">
            數位學習整體解決方案提供者 Taiwan Knowledge Bank e-Learning Service Provider
          </h4>
          <div class="flex flex-col md:flex-row">
            <div class="mx-auto h-[148px] w-[124px] shrink-0">
              <img class="block" src="~/assets/img/service/we_about_logo.jpg" />
            </div>

            <p class="w-full">
              「臺灣知識庫」（Taiwan Knowledge Bank.
              T.K.B.）成立於2000年1月，多年來鑽研於e-learning教學系統及相關產品的研發，
              包含內容（套裝數位學堂、題庫）；服務（企業數位學習導入、課程委製、教育訓練）、工具（數位教材及學習平台製作）及知識通路
              （TKB數位學堂）的佈建。不論是為政府、企業乃至於學校建置功能卓越、系統穩定的學習平台，或是製作多元且精緻的數位化課程，皆能
              從數位學習導入及客製化數位學堂製作等案例中，確實證明臺灣知識庫的確是目前e-learning領域整體解決方案的最佳提供者。
            </p>
          </div>
        </div>

        <div class="mb-2 border-b border-dashed border-base-300 pb-2">
          <h4 class="mb-4 font-semibold text-black">屢獲國家肯定，見證品質與專業</h4>
          <p class="w-full">
            「臺灣知識庫」（Taiwan Knowledge Bank.
            T.K.B.）成立於2000年1月，多年來鑽研於e-learning教學系統及相關產品的研發，
            包含內容（套裝數位學堂、題庫）；服務（企業數位學習導入、課程委製、教育訓練）、工具（數位教材及學習平台製作）及知識通路
            （TKB數位學堂）的佈建。不論是為政府、企業乃至於學校建置功能卓越、系統穩定的學習平台，或是製作多元且精緻的數位化課程，皆能
            從數位學習導入及客製化數位學堂製作等案例中，確實證明臺灣知識庫的確是目前e-learning領域整體解決方案的最佳提供者。
          </p>
        </div>

        <div class="mb-2 pb-2">
          <h4 class="mb-4 font-semibold text-black">展望未來，實現數位新時代夢想</h4>
          <div class="list-line">
            <div>
              <span class="mr-1 inline-block">1.</span>
              全台第一家TKB數位學堂於西元2000年在台北隆重開幕：
            </div>
            <p class="pl-4">
              總計已完成超過3300門數位學堂，15萬小時的數位視訊教學內容 ，
              涵蓋文、理、工、商、英日語與管理類，總學習人次超過550萬，至今全省已擁有30個數位學習中心（e-learning
              center）。未
              來將陸續增設至50個數位學習中心，以提供更完備之學習服務網路。在開辦類科方面亦將多元化、豐富化，帶給學員「天天開
              課，輕鬆上課」的學習彈性與便利。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">2.</span> 打造專屬國際級數位學習中心：</div>
            <p class="pl-4">
              與速博Sparq合力研發第三代數位學習平台，已於2005年全面上線，此國際級共通平台，可容
              許全台任一地點、任一組織成員均可獲得最先進之數位學習服務。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">3.</span> 持續提供數位學習整體解決方案：</div>
            <p class="pl-4">
              不管是數位教材委製、學習平台建置、顧問服務與專業認證輔導、教學工具製作等各項數位
              學習所需之元素皆能提供最頂尖之服務。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">4.</span> 行動應用軟體(APP)之開發與設計：</div>
            <p class="pl-4">
              TKB臺灣知識庫於2009年成立APP應用事業群，致力於行動應用軟體之開發與設計，目前
              開發完成超過40個以上的APP程式，包含了不同的類別以及語言，其中廁所Go！、健康卡路里、APP玩家等多款知名應用程式
              均曾獲得台灣分類以及不分類的下載量第一名。另外於2010年發行的「iphone4無禁忌活用術X100」雜誌，更在正式上市之前
              就創下預購超過萬本的驚人成績，足以證明APP應用事業群是同時具備APP企劃、開發、設計、行銷等完整能力的專業團隊。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">5.</span> 全球華人華文學習第一品牌：</div>
            <p class="pl-4">
              TKB臺灣知識庫在西元2011年更成立華文事業部，希望提供最優質之華文學習產品與服務，以期
              成為全球華人華文學習第一品牌。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">6.</span> 最專業整合行銷團隊：</div>
            <p class="pl-4">
              臺灣知識庫整合行銷團隊是一個充滿創意與熱情的團隊，提供最專業的行銷策略顧問、各類營隊/活動/展
              覽/記者會/博覽會/承辦、各種文宣手冊/廣告承製、媒體公關服務、招生宣傳承辦、專案行銷規劃與執行等優質服務，帶給您最
              省錢、最有效、最創新、最快速的行銷體驗。如果您有各種行銷上的疑惑，歡迎與我們連絡，讓我們攜手一起共創事業高峰！
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">7.</span> 輕鬆打破美語學習障礙：</div>
            <p class="pl-4">
              為了幫助更多學子輕鬆念語文，美語學習事業群建立不同於國內一般美語教學的學習方式，透過加強
              聽說讀寫，達到全方位英語實力提昇的目標。另外，美語學習事業群更獨家引進每年數次獲得美國國家級教育獎項的線上課程
              權威─「史丹佛多媒體互動英語」，並結合1對5專業外籍老師小班面授課程，虛實合一的方式使學生學習效果倍增，解決傳統
              學子學習美語的瓶頸與障礙。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">8.</span> 升學就業進修叢書最豐富：</div>
            <p class="pl-4">
              圖書出版事業群至今已出版1,000餘種書籍，包括理、工、 商、教育、文學類相關之參考書及教科
              書，並出版通俗類叢書，包含財金類、保健、語文（全民英檢）、法學叢書、甄試系列等。現有書籍舉凡有大專用書、
              升學叢 書、證照用書、數位出版、就業考試等五大類，每年以100種新書的速度陸續增加中。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">9.</span> 全球邁向數位化的時代：</div>
            <p class="pl-4">
              臺灣知識庫仍不斷在數位學習領域中精進，我們將持續以「數位時代的知識傳動者」為經營使命、「傳動知識、創造價值」為宗旨，並以「創新知識價值、速度優勢競爭、多元數位內容、服務品質第一」為經營理念，成為數位教學系統的第一品牌及全台最大的知識通路，期許帶領數位學習產業邁向新紀元！
            </p>
          </div>
        </div>
      </div>

      <div ref="sort1" class="mb-10 grid border-b border-solid border-primary-500">
        <h2 class="mb-3 font-bold text-primary-500">董事長的話</h2>
        <div class="flex flex-col md:flex-row">
          <div class="mx-auto h-[228px] w-auto shrink-0">
            <img class="block" src="~/assets/img/service/we_about_boss.jpg" />
          </div>

          <div class="flex w-full flex-col">
            <h4 class="mb-4 font-semibold text-black">
              臺灣知識庫 丘昌其 董事長 ─ 「傳動知識，創造價值」
            </h4>
            <p class="mb-2 border-b border-dashed border-base-300 pb-2">
              貧者因書而富」、「知識就是力量」，兩者皆闡釋闡釋教育和學習的核心價值。從小就在貧窮農村成長，身為果農之子的我，
              更能體會「書中自有黃金屋，書中自有顏如玉，書中自有千鍾粟。」勉勵的智慧之語。使我成為知識學習的受益者，也成為傳
              承知識的教育家。
              為了發展教育、傳動知識、創造智慧，臺灣知識庫結合無數的專家、教授等知識工作者，開發出「無奇不有」
              的知識內容，利用圖書出版、網際網路、數位學堂等工具，傳承無限的知識、經驗、智慧予後世，開發人類最珍貴、永不枯竭的
              黃金腦力，提昇人類的進步與生活品質，這些困難的挑戰，就是臺灣知識庫團隊努力不懈的使命與任務。
            </p>
            <p class="mb-2 pb-2">
              臺灣知識庫的數位學習中心－「TKB數位學堂」，開創臺灣以數位學習中心傳承知識學習的模式，也啟動以網際網路解惑的
              教育，使「臺灣知識庫」成為數位學習最大的「通路」與「平台」，再造「孔子周遊列國」的旋風，帶動新時代新的學習
              模式，臺灣知識庫將以「當代孔子」自許，為文化教育、知識傳承，永無止境與無私的關愛和奉獻，實踐孔子的教育
              理想「有教無類」。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitle from '@/components/others/PageTitle.vue'
import AnchorList from '@/components/others/AnchorList.vue'
import AnchorPoint from '@/components/others/AnchorPoint.vue'
definePageMeta({
  layout: 'main'
})
const items = reactive([
  {
    colorchart: 'text-link',
    name: '臺灣知識庫簡介'
  },
  {
    colorchart: 'text-secondary-700',
    name: '董事長的話'
  }
])
const sort0 = ref(null)
const sort1 = ref(null)

const getTarget = (index) => {
  if (index === 0) {
    return () => sort0.value
  } else if (index === 1) {
    return () => sort1.value
  } else {
    return () => null
  }
}
</script>
<style lang="scss" scoped>
.list-line:not(:last-child) {
  @apply mb-2 border-b border-dashed border-base-300 pb-2;
}
</style>
