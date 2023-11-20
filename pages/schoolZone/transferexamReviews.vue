<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <main class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8 py-3">
          <section class="grid gap-y-4">
            <h1 class="text-3xl text-base-800">書審/面試</h1>
            <TabS2>
              <Tab
                name="bookreview01"
                lable="書審製作技巧"
                :tab-icon="['fas', 'book']"
                :selected="true"
              >
                <img
                  class="mb-4"
                  src="https://img.tkbtv.com.tw/p20170626EC010_1100_380/toPic.action"
                  alt="轉學考書審資料，自傳、讀書計畫 準備方法大公開！"
                  title="轉學考書審資料，自傳、讀書計畫 準備方法大公開！"
                />
                <PublicPost :create-directory="false">
                  <h1>轉學考書審資料，自傳、讀書計畫 準備方法大公開！</h1>
                  <p>
                    轉學考考試方式，想必大家都知道有考試及書審兩種，考試不用說準備方式就是自讀或是補習。但書面審查的準備可就沒那麼簡單，需要蒐集歷年的資料以及將自己的優劣勢做分析，撰寫出一份能夠讓教授第一時間感興趣且又能明確熟知個人特質的文件。
                  </p>
                  <h2>轉學考書審資料準備</h2>
                  <p>
                    大多學校都會要求自傳、讀書計畫、學經歷證件（有利審查文件），以下分則說明之：
                  </p>
                  <h3>自傳</h3>
                  <p>
                    自傳是教授對你的初步認識，<strong>有故事性</strong>的架構對於整體而言是非常有幫助的，<strong>利用自己的經歷來說明自己與該科系的連結度</strong>，重點是一定要有<strong>實例作證</strong>，也就是說設定一個<strong>主題</strong>，來當作自傳的寫作中心，像是「會計與我」，寫出會計與自己的長過程中有什麼相關聯，來吸引教授對於你的興趣，再來就是突顯<strong>動機</strong>，轉學考是針對系所報考，動機顯得就非常重要，也就是為什麼要報考此科系，以及對於此科系的個人願景，切記千萬不要單純的描述自己這樣會顯得無趣流於制式。
                  </p>
                  <h3>讀書計畫</h3>
                  <p>
                    轉學考有別於其他升學方式，在讀書計畫的撰寫上，可以說明轉換科系後對於修課的計畫，自己如何在<strong>課後進修</strong>，規劃未來3年/2年的計畫，利用甘特圖、時間軸、條列式等方式呈現。或是自己對於該所的成長方向等⋯⋯
                  </p>
                  <h3>學經歷證件（有利審查文件）</h3>
                  <p>
                    這是比較多學生詢問的一項，<strong>大一成績很重要嗎？</strong>以各校的簡章來看，大學成績單占比從20％～40％都有，如果你有相關科系的證照或是自傳方面很突顯等，這方面當然可以不用著重，但若是該學校的成績占比略高時，建議同學在大學的成績不要太差，也就是至少能及格，除了審查較容易通過外，學分抵免上也比較有機會能夠折抵。
                  </p>
                  <h2>自傳/讀書計畫的撰寫技巧</h2>
                  <div class="video">
                    <div
                      class="youtube"
                      data-lazy-embed="https://www.youtube.com/embed/RF2LukZMMpk"
                    >
                      <div class="thumbnail"></div>
                    </div>
                  </div>
                  <p>
                    轉學考書審資料準備其實不難，只要提早準備,找到對的方式就可以輕鬆完成轉學考備審資料，TKB購課網與甄戰學習顧問，提供一對一專業諮詢，透過先了解你的狀況，再進評估的方式，做個人的輔導，教學書審口試準備技巧，並進行模擬練習，提升專業知識與臨場反應。
                  </p>
                  <p>
                    轉學最重要的就是持續準備的毅力，不管你是準備筆試考試還是書審資料都要一步一步的堅持走下去，TKB購課網也提供轉學考諮詢服務，打造專屬於你的課程，讓你轉學不煩腦。
                  </p>
                  <div class="lg-button">
                    <a href="javascript:;" @click="$router.push('/formAsk/CONTACT_B/toAsk')"
                      >轉考書審輔導諮詢</a
                    >
                  </div>
                  <h4>延伸閱讀：</h4>
                  <a href="javascript:;" @click="$router.push('/news/toNews')"
                    ><font-awesome-icon class="mr-1" :icon="['fas', 'caret-right']" />暑假轉學考
                    各校簡章、考試日程</a
                  >
                  <br />
                  <a href="javascript:;" @click="$router.push('/news/toNews')"
                    ><font-awesome-icon
                      class="mr-1"
                      :icon="['fas', 'caret-right']"
                    />龍門轉學考補習費用整理</a
                  >
                  <br />
                  <a href="javascript:;" @click="$router.push('/news/toNews')"
                    ><font-awesome-icon
                      class="mr-1"
                      :icon="['fas', 'caret-right']"
                    />轉學考如何準備｜轉學考資格、轉學考補習、錄取率一次懂</a
                  >
                </PublicPost>
              </Tab>
              <Tab name="bookreview02" lable="面試注意事項" :tab-icon="['fas', 'user-group']">
                <img
                  class="mb-4"
                  src="https://img.tkbtv.com.tw/p20170524RG005_1100_380/toPic.action"
                  alt="【轉學考甄試】轉學考 口面試技巧篇"
                  title="【轉學考甄試】轉學考 口面試技巧篇"
                />
                <PublicPost :create-directory="false">
                  <h1>【轉學考甄試】轉學考 口面試技巧篇</h1>
                  <p>
                    轉學考甄試入學比例逐年增加，寒轉多以書審面試為主，各大專院校暑轉的書審面試比例也都在逐年提升，除了筆試考科成績外，各大學校系對於學生自身的學習經歷和未來規劃是更加重視。
                  </p>
                  <p>
                    轉學考甄試除了書審資料審查，部分校系還有口面試，口面試也是同學比較不熟悉，以下三點口面試技巧讓你能夠對口面試有初步的了解：
                  </p>
                  <h2>事前準備動作</h2>
                  <p>
                    因為已經將書審資料繳交，當然教授一定會針對該內容提出問題，所以<strong>熟記書審資料</strong>絕對是必要的動作，還要針對該科系的時事、系所資料、課程等先作初步的認識，這樣才能對教授說明你對於該系的遠景，展現出對於科系的企圖心等等，都是留下第一印象很好表現。
                  </p>
                  <h2>服裝儀容</h2>
                  <p>
                    以能夠展現出青春洋溢、朝氣活力為主，穿著整潔自然、乾淨很要，除了襯衫、套裝的選擇外，其他服飾盡量避開無袖、露背、迷你裙、牛仔褲以及花俏的配飾（耳環、鼻環等⋯⋯），也不要太刻意的穿著讓自己不自然綁手綁腳的，兒頭髮一定要書整乾淨整，這樣才能讓第一印象有加分的效果。
                  </p>
                  <h2>臨機應變</h2>
                  <p>
                    通常教授會問什麼問題，你無法完全掌握，所以若是問到答不出來時，就誠實的說明自己沒有涉獵該領域，並且後續會在未來努力自我進修，補足缺乏的知識等等，讓教授認為你是一個有想法、有遠見的年輕人，千萬別呼嚨教授隨便答題，這樣只會造成反效果。
                  </p>
                  <p>
                    除了以上三點外，其實口面試還有很多的技巧，《TKB購課網 X
                    甄戰學習顧問團隊》透過專業師資，先與您做基礎教學，再進入口試模擬，讓你在上場前先對口面試環境熟悉，以及如何的對答技巧可以有加分作用，讓自己在眾多考生中出類拔萃。
                  </p>
                  <div class="lg-button">
                    <a href="https://www.tkbgo.com.tw/go_edm/edm718/index.jsp?print_id=12312"
                      >口面試輔導教學</a
                    >
                  </div>
                </PublicPost>
              </Tab>
            </TabS2>
          </section>
          <PublicForm></PublicForm>
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
import PublicForm from '@/components/form/PublicForm.vue'
import TabS2 from '@/components/menu/TabS2.vue'
import Tab from '@/components/menu/Tab.vue'
import PublicPost from '@/components/post/PublicPost.vue'

export default {
  components: {
    ZoneTemplate,
    ZoneTemplateXPadding,
    ZoneTransferSidebar,
    PublicForm,
    TabS2,
    Tab,
    PublicPost
  },
  layout: 'main'
}
</script>
<style lang="scss" scoped></style>
