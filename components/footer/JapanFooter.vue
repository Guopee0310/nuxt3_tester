<template>
  <div>
    <footer>
      <div
        class="container flex flex-col-reverse flex-wrap justify-between md:px-4 md:pt-8 lg:flex-row"
      >
        <div class="mt-5 max-w-[400px] lg:mt-0">
          <nuxt-link to="/" class="mb-2 inline-block">
            <img
              class="h-16"
              width="210"
              height="80"
              src="https://www.tkbgo.com.tw/tkbgo/img/tkblogo.webp"
              alt="台灣知識庫"
            />
          </nuxt-link>
          <div>
            <p class="my-2 leading-[1]">周一至周五 10:00-19:00</p>
            <p class="my-2 leading-[1]">
              電話：<a href="tel:+886-2-5580-5608">(02)5580-5608</a> |
              <a href="tel:+886-0985-368-799">0985-368-799</a>
            </p>
            <p class="my-2 leading-[1]">台北市中正區開封街一段32號11樓</p>
            <p class="my-2 leading-[1]">台灣知識庫股份有限公司電子商務分公司</p>
            <p class="my-2 leading-[1]">統一編號：54343691</p>
          </div>
        </div>
        <div class="flex w-full max-w-[800px] justify-end">
          <div class="basis-1/3">
            <span class="inline-block py-3 text-lg font-bold text-black">相關網站</span>
            <div class="mr-2">
              <a
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                href="https://www.tkbtv.com.tw"
                rel="noopener"
                target="_blank"
              >
                TKBTV雲端學習</a
              >
              <a
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                href="https://www.tkbtv.com.tw/tkbxo"
                rel="noopener"
                target="_blank"
              >
                TKBXO題庫</a
              >
            </div>
          </div>

          <div class="basis-1/3">
            <span class="inline-block py-3 text-lg font-bold text-black">關於我們</span>
            <div class="mr-2">
              <nuxt-link
                to=""
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                rel="noopener"
                target="_blank"
              >
                台灣知識庫簡介</nuxt-link
              >
              <nuxt-link
                to=""
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                rel="noopener"
                target="_blank"
              >
                反詐騙申明</nuxt-link
              >
              <nuxt-link
                to=""
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                rel="noopener"
                target="_blank"
              >
                會員權益說明</nuxt-link
              >
              <nuxt-link
                to=""
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                rel="noopener"
                target="_blank"
              >
                服務中心</nuxt-link
              >
            </div>
          </div>

          <div class="basis-1/3">
            <span class="inline-block w-full py-3 text-lg font-bold text-black">社群平台</span>
            <div class="mr-2">
              <a
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                href="https://www.facebook.com/TkbJapanese/"
                rel="noopener"
                target="_blank"
                ><font-awesome-icon class="mr-1" :icon="['fab', 'square-facebook']" />TKB日文報報</a
              >
              <a
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                href="https://www.youtube.com/channel/UCh0209oRT9DYAE6hAitQVrA"
                rel="noopener"
                target="_blank"
                ><font-awesome-icon class="mr-1" :icon="['fab', 'youtube']" />TKB日文報報</a
              >
              <a
                class="block py-1 text-sm tracking-[1px] transition duration-200 ease-out md:text-base md:leading-[1.2]"
                href="https://line.me/R/ti/p/%40415lfixm"
                rel="noopener"
                target="_blank"
                ><font-awesome-icon class="mr-1" :icon="['fab', 'line']" />TKB日文報報</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="container pt-8">
        <div
          class="mb-18 flex flex-wrap justify-between border-t-[1px] border-solid border-[#dddddd] py-4"
        >
          <div class="hidden w-auto max-w-[400px] text-center lg:w-full"></div>
          <div class="w-auto max-w-[400px] text-center lg:ml-auto lg:w-full">
            <p>©2018-<span>2023</span> TKB All Rights Reserved.</p>
          </div>
          <div class="w-auto max-w-[400px] text-center lg:w-full">
            <img
              class="lazy bottom__payment lazied"
              width="40"
              height="19"
              alt="visa"
              src="https://www.tkbgo.com.tw/tkbgo/img/ft-card-visa.png"
              style="visibility: visible"
            />
            <img
              class="lazy bottom__payment lazied"
              width="40"
              height="21"
              alt="master"
              src="https://www.tkbgo.com.tw/tkbgo/img/ft-card-master.png"
              style="visibility: visible"
            />
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped></style>
