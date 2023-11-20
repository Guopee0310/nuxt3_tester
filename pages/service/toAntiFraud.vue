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
      </AnchorList>
      <div ref="sort0" class="mb-10 grid border-b border-solid border-primary-500">
        <h2 class="mb-3 font-bold text-primary-500">付款詐騙圖說</h2>
        <div class="mb-2 pb-2">
          <div class="flex flex-col md:flex-row">
            <div
              class="mx-auto h-full w-full shrink-0"
              style="
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8yMC8xNcHGcVAAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAAYElEQVQokaXSsQ7AIAgEUHsT//+hzGx1McaiKGcZibyc6KOqb2klIiUqM5t6OB3YwfANBpiGGWA5nAXALmkE4KMwQI99A3zu/OudWWC57SwQPlUGAPslRwA+CgP02DdABRBTM+f/ksfOAAAAAElFTkSuQmCC');
              "
            >
              <img class="mx-auto block" src="~/assets/img/service/BILK.png" />
            </div>
          </div>
        </div>
        <div class="mb-2 border-b border-dashed border-base-300 pb-2">
          <p>圖片出處：內政部警政署刑事警察局</p>
          <div>
            <span class="mr-1 inline-block">。</span>受害者特徵：
            小資族、在校學生、家庭主婦、網路購物者。
          </div>
          <div>
            <span class="mr-1 inline-block">。</span>常見犯罪時間：
            17時至24時，歹徒通常在銀行下班後，不易立即查證下，以竄改電話假冒網路店家及金融機構來電詐騙。
          </div>
        </div>

        <div class="mb-2 pb-2">
          <p class="mb-1 font-semibold">
            如以上服務內容無法滿足您的需求，請點選右下方，「課程諮詢服務」，將會有專員為您服務。
          </p>
          <p class="font-semibold">
            若專員不在服務時間內或忙線中，建議您點擊 「聯絡我們」，我們會盡快與您聯絡。
          </p>
        </div>
      </div>

      <div ref="sort1" class="mb-10 grid border-b border-solid border-primary-500">
        <h2 class="mb-3 font-bold text-primary-500">ＴＫＢ ＧＯ購課網嚴正聲明：</h2>
        <h4 class="mb-4 font-semibold text-black">
          近來詐騙猖獗，行騙手法也不斷更新。 教育商城強調，絕不會於任何時間主動以電話或簡訊等方式，
          告知您因設定錯誤而要求重新轉帳付款、檢查帳戶餘額或索取個人帳戶相關資料，在此特別聲明！
        </h4>
        <p class="mb-2 border-b border-dashed border-base-300 pb-2">
          若您對來電人員向您提出的要求有任何疑問，請務必撥打反詐騙專線<span class="text-primary-500"
            >165</span
          >求證， 並連繫教育商城客服人員。<br />
          客服專線(02)5580-5608轉115 0985-368-799 (周一至周五 8:30-17:30)
        </p>
        <div class="mb-2 border-b border-solid border-primary-500 pb-2">
          <p>購課網提醒您，防詐騙步驟：</p>
          <div class="list-line">
            <div><span class="mr-1 inline-block">1.</span> 發覺有異 速速撥打165：</div>
            <p class="pl-4">撥打165警政專線求證，以確保權益。</p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">2.</span> 接到電話請與客服連絡：</div>
            <p class="pl-4">聯繫教育商城-客服專線02-5580-5608轉115 (周一至周五 8:30-17:30)</p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">3.</span> 絕不依照指示操作ATM：</div>
            <p class="pl-4">
              除了網站提供的帳號以外，不會有其它的帳號或其他名目要求您至ATM操作，接獲任何電話請您不要提供往來銀行、金融卡信用卡等個人帳戶相關資訊也請勿到ATM做任何操作或轉帳。
            </p>
          </div>
          <div class="list-line">
            <div><span class="mr-1 inline-block">4.</span> 小心警覺 速速通報：</div>
            <p class="pl-4">
              請注意，詐騙集團可能會竄改電信資訊，轉換來電顯示為本公司客服專線。若您於非上班時間接收到本公司客服專線，也請多加注意！
            </p>
          </div>
          <p>有任何問題請先冷靜並一律立即與本公司求證。</p>
        </div>
        <div class="mb-2 pb-2">
          <p class="mb-2 font-semibold">
            如以上服務內容無法滿足您的需求，請點選右下方，「課程諮詢服務」，將會有專員為您服務。
          </p>
          <p class="font-semibold">
            若專員不在服務時間內或忙線中，建議您點擊 「聯絡我們」，我們會盡快與您聯絡。
          </p>
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
    name: '付款詐騙圖說'
  },
  {
    colorchart: 'text-secondary-700',
    name: 'ＴＫＢ ＧＯ購課網嚴正聲明'
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
.list-line {
  @apply mb-2 border-b border-dashed border-base-300 pb-2;
}
</style>
