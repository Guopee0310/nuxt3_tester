<template>
  <footer class="shadow-[0px_0px_15px_rgba(0,0,0,0.1)]">
    <div class="container grid grid-cols-1 gap-4 py-4">
      <div class="flex flex-col gap-4 md:flex-row md:flex-wrap md:justify-between">
        <div class="flex justify-between md:order-2 md:grow">
          <div class="flex flex-col gap-y-2">
            <div class="text-lg font-bold text-black">門市諮詢</div>
            <nuxt-link to="/zone/english/store/toStoreList" class="block">北部</nuxt-link>
            <nuxt-link to="/zone/english/store/toStoreList" class="block">桃竹</nuxt-link>
            <nuxt-link to="/zone/english/store/toStoreList" class="block">中部</nuxt-link>
            <nuxt-link to="/zone/english/store/toStoreList" class="block">嘉南</nuxt-link>
            <nuxt-link to="/zone/english/store/toStoreList" class="block">高屏</nuxt-link>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="text-lg font-bold text-black">相關網站</div>
            <nuxt-link to="/" class="block">TKBGO</nuxt-link>
            <nuxt-link to="https://www.tkbtv.com.tw" class="block">雲端學習</nuxt-link>
            <nuxt-link to="https://www.tkbtv.com.tw/tkbxo" class="block">TKBXO題庫</nuxt-link>
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="text-lg font-bold text-black">相關社群</div>
            <nuxt-link to="https://www.facebook.com/tkbfunenglish" class="block"
              >Facebook</nuxt-link
            >
            <nuxt-link to="https://www.instagram.com/funenglish.tw/" class="block"
              >Instagram</nuxt-link
            >
            <nuxt-link
              to="https://tkbfunenglish.pixnet.net/blog?fbclid=IwAR2o9O2Ft0SQdMxRmgyDMncV7_WENbQAnf2bUOZQkDuA4A9fWXNRR1cQaqQ"
              class="block"
              >Blog</nuxt-link
            >
          </div>
          <div class="flex flex-col gap-y-2">
            <div class="text-lg font-bold text-black">關於我們</div>
            <nuxt-link to="/service/toAboutWe" class="block">台灣知識庫簡介</nuxt-link>
            <nuxt-link to="/service/toAntiFraud" class="block">反詐騙申明</nuxt-link>
            <nuxt-link to="/service/toWebQA?faq_id=2" class="block">會員權益說明</nuxt-link>
            <nuxt-link to="/service/toWebQA" class="block">服務中心</nuxt-link>
          </div>
        </div>

        <div class="flex w-full justify-center md:order-3 lg:w-auto">
          <nuxt-link class="block w-[160px]" to="https://lin.ee/h3BUtCg">
            <img
              class="w-full"
              src="@/assets/img/tkbgo_english/line_qrcode.png"
              alt="洋碩美語QRcode"
            />
          </nuxt-link>
        </div>

        <div class="flex flex-col gap-y-2 md:order-1 md:grow">
          <nuxt-link class="block w-[264px]" to="/zone/english/toIndex">
            <img class="w-full" src="@/assets/img/tkbgo_english/ynso_logo.webp" alt="洋碩美語" />
          </nuxt-link>
          <p>周一至周五 09:00-19:00</p>
          <p>電話：(02)5580-5608｜0985-368-799</p>
          <p>台北市中正區開封街一段32號11樓</p>
          <p>台灣知識庫股份有限公司電子商務分公司</p>
          <p>統一編號：54343691</p>
        </div>
      </div>
      <hr />
      <div class="flex justify-center gap-3">
        <p>©2018 TKB All Rights Reserved.</p>
        <div class="w-8">
          <img class="w-full" src="@/assets/img/others/ft-card-visa.png" alt="visa card" />
        </div>
        <div class="w-8">
          <img class="w-full" src="@/assets/img/others/ft-card-master.png" alt="master card" />
        </div>
      </div>
    </div>
  </footer>
</template>
