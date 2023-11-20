<template>
  <div>
    <div
      class="relative overflow-hidden bg-[url('~/assets/img/university/index-bg-mb-1.png')] bg-cover bg-center bg-repeat-x lg:h-[580px] lg:bg-[url('~/assets/img/university/index-bg-1.png')]"
    >
      <div class="container">
        <div
          class="relative float-none my-4 lg:absolute lg:top-1/2 lg:float-left lg:-translate-y-1/2"
        >
          <UniversityBannerText>
            <template #title
              >想錄取好大學<br class="block lg:hidden" />
              找頂尖團隊幫忙</template
            >
            <template #slogan
              ><div>
                全台第一間全方位升學顧問中心<br />
                完整打造升學必勝方程式
              </div></template
            >
          </UniversityBannerText>
          <AnimatedButton
            margin="m-0"
            font-size="text-xl"
            bg-color="bg-primary-500"
            @click="openFormModal"
          >
            <span>立即諮詢</span>
          </AnimatedButton>
        </div>
        <div
          class="relative bottom-0 right-0 -mr-5 mt-4 overflow-hidden rounded-[300px_0_0_300px] lg:absolute lg:mr-auto lg:h-[30vw] lg:max-h-[560px] lg:w-[55vw] lg:max-w-[990px]"
        >
          <Swiper
            :loop="true"
            :allow-touch-move="false"
            :modules="[EffectFade, SwiperAutoplay]"
            effect="fade"
            :slides-per-view="1"
            :space-between="0"
            :autoplay="{
              delay: 8000
            }"
          >
            <SwiperSlide>
              <img src="~/assets/img/university/index-bn1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="~/assets/img/university/index-bn2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="~/assets/img/university/index-bn3.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    <section
      class="bg-[url('~/assets/img/university/index-bg-2.png')] bg-[length:50%_auto] bg-left-top bg-repeat-y py-10 lg:bg-[length:auto_auto]"
    >
      <div class="container pb-10 sm:pb-15">
        <UniversitySubTitle class="mb-5 text-center">您正在準備哪種考試？</UniversitySubTitle>
        <div class="grid grid-cols-3 gap-3 lg:gap-10">
          <nuxt-link
            to=""
            class="inline-block w-full overflow-hidden rounded-lg bg-[#b8e878] px-0 py-5 text-center text-black lg:p-5"
            data-type="G"
          >
            <div class="mb-5 text-xl lg:text-3xl">學測</div>
            <svg
              class="animated h-4/5 w-4/5 max-w-[150px]"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <g>
                <path
                  d="M12.6 27.7C12.6 29 13.7 30.1 15 30.1H30V4.8H107.2V122.3C107.2 123.6 108.3 124.7 109.6 124.7C110.9 124.7 112 123.6 112 122.3V0H25.2V25.2H15C13.7 25.2 12.6 26.3 12.6 27.7Z"
                ></path>
                <path
                  d="M62.4 145.2H4.8V25.5L19.6 10.4C20.5 9.40001 20.5 7.90001 19.6 7.00001C18.6 6.10001 17.1 6.10001 16.2 7.00001L0 23.5V150H62.4C63.7 150 64.8 148.9 64.8 147.6C64.8 146.3 63.7 145.2 62.4 145.2Z"
                ></path>
                <path d="M93.9 15.8H75V20.6H93.9V15.8Z"></path>
                <path d="M93.9 28.4H75V33.2H93.9V28.4Z"></path>
                <path
                  d="M141.3 132.5H80.6L67.6 141.2L80.2 150H140.9C146 150 150 146.2 150 141.3C150 136.5 146.1 132.5 141.3 132.5ZM140.9 145.2H81.7L76.2 141.4L82.1 137.5H141.3C143.4 137.5 145.2 139.2 145.2 141.4C145.2 143.5 143.3 145.2 140.9 145.2Z"
                ></path>
                <path
                  d="M71.7 85L86.6 70.1C87.5 69.2 87.5 67.6 86.6 66.7C85.7 65.8 84.1 65.8 83.2 66.7L71.7 78.1L66.9 73.3C66 72.4 64.4 72.4 63.5 73.3C62.6 74.2 62.6 75.8 63.5 76.7L71.7 85Z"
                ></path>
                <path
                  d="M58.5 96.3H96.4V53.6H53.6H15.8V96.3H58.5ZM91.5 91.5H58.5V58.5H91.5V91.5ZM20.6 58.5H53.6V91.5H20.6V58.5Z"
                ></path>
                <path
                  d="M42.1 66.6L37.1 71.6L32.1 66.6C31.2 65.7 29.6 65.7 28.7 66.6C27.8 67.5 27.8 69.1 28.7 70L33.7 75L28.7 80L32.1 83.4L37.1 78.4L42.1 83.4L45.5 80L40.5 75L45.5 70C46.4 69.1 46.4 67.5 45.5 66.6C44.6 65.7 43.1 65.7 42.1 66.6Z"
                ></path>
                <path d="M49.7 107.3H15V112.1H49.7V107.3Z"></path>
                <path d="M49.7 119.9H15V124.7H49.7V119.9Z"></path>
              </g>
            </svg>
          </nuxt-link>
          <nuxt-link
            to=""
            class="inline-block w-full overflow-hidden rounded-lg bg-[#fec22e] px-0 py-5 text-center text-black lg:p-5"
            data-type="Y"
          >
            <div class="mb-5 text-xl lg:text-3xl">學習歷程</div>
            <svg
              class="animated h-4/5 w-4/5 max-w-[150px]"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 150 150"
              fill="none"
            >
              <g>
                <path
                  d="M145.1 115C144.2 114 143.2 113.1 142.1 112.5C140 111.2 137.5 110.5 135 110.5H57C55.7 110.5 54.6 111.6 54.6 112.9V115.4C54.6 116 54.8 116.6 55.3 117.1C58.3 120.2 60 124.3 60 128.7C60 133.1 58.3 137.3 55.2 140.4C52.1 143.5 47.9 145.2 43.5 145.2C39.1 145.2 34.9 143.5 31.8 140.4C28.7 137.3 27 133.1 27 128.7V13.5C27 10.2 25.8 7.2 23.9 4.9H98.8C103.6 4.9 107.4 8.8 107.4 13.5V103.4C107.4 104.7 108.5 105.8 109.8 105.8C111.1 105.8 112.2 104.7 112.2 103.4V13.5C112.2 6.1 106.2 0 98.7 0H15C14.8 0 14.7 0 14.5 0.1C14.2 0 13.8 0 13.5 0C6 0 0 6 0 13.5V20.7H15C16.3 20.7 17.4 19.6 17.4 18.3C17.4 17 16.3 15.9 15 15.9H4.8V13.6C4.8 8.8 8.7 5 13.4 5C18.2 5 22 8.9 22 13.6V128.8C22 134.5 24.2 139.9 28.3 143.9C32.3 147.9 37.7 150.2 43.4 150.2C49.1 150.2 54.5 148 58.5 144C62.5 140 64.8 134.6 64.8 128.9C64.8 124 63.1 119.3 60.1 115.5H134.9C136.5 115.5 138.1 116 139.5 116.8C140.2 117.2 140.8 117.7 141.3 118.3C147.1 125.3 146.1 135.7 139.1 141.5C136.7 143.5 133.8 144.8 130.6 145.2H65.5C64.2 145.2 63.1 146.3 63.1 147.6C63.1 148.9 64.2 150 65.5 150H130.8C130.9 150 131 150 131.1 150C135.2 149.5 139 147.9 142.2 145.3C151.3 137.6 152.6 124.1 145.1 115Z"
                ></path>
                <path
                  d="M46.8 49.9L39.2 53.9C38 54.5 37.6 56 38.2 57.2C38.6 58 39.5 58.5 40.3 58.5C40.7 58.5 41.1 58.4 41.4 58.2L51.6 52.8V47.3C52.8 47.7 54.1 47.9 55.5 47.9C56.9 47.9 58.2 47.7 59.4 47.3V52.8L69.6 58.2C70 58.4 70.4 58.5 70.7 58.5C71.6 58.5 72.4 58 72.8 57.2C73.4 56 73 54.6 71.8 53.9L64.2 49.9V45C64.2 44.9 64.2 44.7 64.2 44.6C67.1 42.1 69 38.4 69 34.3V28.8C69 21.4 63 15.3 55.5 15.3C48 15.3 42 21.3 42 28.8V34.3C42 38.4 43.9 42.1 46.8 44.6C46.8 44.7 46.8 44.9 46.8 45V49.9ZM46.9 28.8C46.9 24 50.8 20.2 55.5 20.2C60.3 20.2 64.1 24.1 64.1 28.8V34.3C64.1 39.1 60.2 42.9 55.5 42.9C50.7 42.9 46.9 39 46.9 34.3V28.8Z"
                ></path>
                <path d="M97.1 66.3H37.1V71.1H97.1V66.3Z"></path>
                <path d="M97.1 78.9H37.1V83.7H97.1V78.9Z"></path>
                <path d="M97.1 53.6H78.2V58.4H97.1V53.6Z"></path>
                <path d="M97.1 41H78.2V45.8H97.1V41Z"></path>
                <path d="M97.1 91.5H37.1V96.3H97.1V91.5Z"></path>
                <path d="M124.7 81.3H119.9V87.6H124.7V81.3Z"></path>
                <path d="M124.7 68.7H119.9V75H124.7V68.7Z"></path>
                <path d="M124.7 56.1H119.9V62.4H124.7V56.1Z"></path>
                <path d="M14.3 81.3H9.5V87.6H14.3V81.3Z"></path>
                <path d="M14.3 68.7H9.5V75H14.3V68.7Z"></path>
                <path d="M14.3 56.1H9.5V62.4H14.3V56.1Z"></path>
              </g>
            </svg>
          </nuxt-link>
          <nuxt-link
            to=""
            class="inline-block w-full overflow-hidden rounded-lg bg-[#a8cbe1] px-0 py-5 text-center text-black lg:p-5"
            data-type="B"
          >
            <div class="mb-5 text-xl lg:text-3xl">分科測驗</div>
            <svg
              class="animated h-4/5 w-4/5 max-w-[150px]"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="147"
              viewBox="0 0 150 147"
              fill="none"
            >
              <g>
                <path
                  d="M150 97.3V67.8H107.4C110.9 64.5 113 59.9 113 54.8V36.3C113 28.2 106.4 21.5 98.2 21.5H95.1C91.3 21.5 87.8 22.9 85.2 25.3V17.7C85.2 12.2 89.6 7.8 95.1 7.8C96.4 7.8 97.5 6.7 97.5 5.4C97.5 4.1 96.4 3 95.1 3C92 3 89.2 3.9 86.8 5.6C84.1 2.2 79.1 0 73.6 0C67.1 0 61.3999 2.9 59.0999 7.5L58.5 8.6L59.0999 9.7C61.3999 14.3 67.1 17.2 73.6 17.2C76.1 17.2 78.4 16.8 80.5 16C80.4 16.6 80.4 17.2 80.4 17.9V25.5C77.8 23.1 74.3 21.7 70.5 21.7H67.4C59.3 21.7 52.5999 28.3 52.5999 36.5V55C52.5999 60.1 54.8 64.7 58.2 68H36.5999C28.4999 68 21.7999 74.6 21.7999 82.8C21.7999 86.6 23.3 90.1 25.6 92.7H18C9.89995 92.7 3.19995 99.3 3.19995 107.5C3.19995 115.7 9.99995 122 18.1 122H19.5C17.1 124.6 15.7 128.1 15.7 131.9C15.7 140 22.3 146.7 30.5 146.7H143.9V117.2H131.6V97.3H150ZM64.0999 8.6C65.8999 6.4 69.6 4.9 73.5 4.9C77.4 4.9 81.1 6.4 82.9 8.6C81.1 10.8 77.4 12.3 73.5 12.3C69.6 12.3 65.9999 10.8 64.0999 8.6ZM57.5 54.8V36.3C57.5 30.8 61.9 26.4 67.4 26.4H70.5C76 26.4 80.4 30.8 80.4 36.3H85.3C85.3 30.8 89.7 26.4 95.2 26.4H98.3C103.8 26.4 108.2 30.8 108.2 36.3V54.8C108.2 62 102.4 67.8 95.2 67.8H70.5C63.3 67.8 57.5 62 57.5 54.8ZM26.7 82.6C26.7 77.1 31.0999 72.7 36.5999 72.7H70.5H95.2H145.2V92.5H131.6H36.5999C31.0999 92.5 26.7 88 26.7 82.6ZM139 122V141.8H30.4C24.9 141.8 20.5 137.4 20.5 131.9C20.5 126.4 24.9 122 30.4 122H131.5H139ZM126.6 117.1H30.4H18.1C12.6 117.1 8.19995 112.7 8.19995 107.2C8.19995 101.7 12.6 97.3 18.1 97.3H36.5999H126.6V117.1Z"
                ></path>
                <path
                  d="M110.8 15.5L111.3 11.6H116.7L117.2 15.5V16.4H120.1V15.4L118.9 5.3C118.6 2.8 116.5 1 114 1C111.5 1 109.4 2.9 109.1 5.3L107.9 15.2V16.4H110.8V15.5ZM113.9 3.9C114.9 3.9 115.7 4.6 115.9 5.6L116.3 8.6H111.6L112 5.6C112 4.7 112.9 3.9 113.9 3.9Z"
                ></path>
                <path
                  d="M134.4 13.9V9.59998C134.4 8.29998 133.3 7.19998 132 7.19998C132.2 6.69998 132.3 6.19998 132.3 5.59998C132.3 3.09998 130.3 1.09998 127.8 1.09998H123.2V7.19998V10.1V16.3H132C133.3 16.3 134.4 15.2 134.4 13.9ZM126.1 3.99998H127.8C128.7 3.99998 129.4 4.69998 129.4 5.59998C129.4 6.49998 128.7 7.19998 127.8 7.19998H126.1V3.99998V3.99998ZM131.5 13.4H126.1V10.1H127.8H131.4V13.4H131.5Z"
                ></path>
                <path
                  d="M143.2 16.2C145.2 16.2 147.1 15.5 148.6 14C149.2 13.4 149.2 12.5 148.6 11.9C148 11.3 147.1 11.3 146.5 11.9C144.7 13.7 141.7 13.7 139.8 11.9C138 10.1 138 7.09998 139.8 5.19998C141.6 3.39998 144.6 3.39998 146.5 5.19998C147.1 5.79998 148 5.79998 148.6 5.19998C149.2 4.59998 149.2 3.69998 148.6 3.09998C145.6 0.0999756 140.8 0.0999756 137.8 3.09998C134.8 6.09998 134.8 10.9 137.8 13.9C139.3 15.5 141.3 16.2 143.2 16.2Z"
                ></path>
                <path
                  d="M21 29.5C20.4 28.9 19.5 28.9 18.9 29.5L16.9 31.5L14.9 29.5C14.3 28.9 13.4 28.9 12.8 29.5C12.2 30.1 12.2 31 12.8 31.6L14.8 33.6L12.8 35.6C12.2 36.2 12.2 37.1 12.8 37.7C13.1 38 13.5 38.1 13.8 38.1C14.1 38.1 14.5 38 14.8 37.7L16.8 35.7L18.8 37.7C19.1 38 19.5 38.1 19.8 38.1C20.2 38.1 20.5 38 20.8 37.7C21.4 37.1 21.4 36.2 20.8 35.6L18.8 33.6L20.8 31.6C21.6 31 21.6 30.1 21 29.5Z"
                ></path>
                <path
                  d="M24.8 37.3C25 37.8 25.6 38.2 26.1 38.2H32.3C33.1 38.2 33.8 37.5 33.8 36.7C33.8 35.9 33.1 35.2 32.3 35.2H29.7L33.4 31.5C33.8 31.1 33.9 30.5 33.7 29.9C33.5 29.4 32.9 29 32.4 29H26.2C25.4 29 24.7 29.7 24.7 30.5C24.7 31.3 25.4 32 26.2 32H28.8L25.1 35.7C24.7 36.1 24.5 36.7 24.8 37.3Z"
                ></path>
                <path
                  d="M1.5 28.9H3.5L6.2 37.1C6.4 37.7 7 38.1 7.6 38.1C7.6 38.1 7.6 38.1 7.7 38.1C8.3 38.1 8.9 37.6 9.1 37L11.9 25.8H32.3C33.1 25.8 33.8 25.1 33.8 24.3C33.8 23.5 33.1 22.8 32.3 22.8H10.7C10 22.8 9.4 23.3 9.3 23.9L7.4 31.4L5.9 27C5.7 26.4 5.1 26 4.5 26H1.5C0.7 26 0 26.6 0 27.4C0 28.3 0.7 28.9 1.5 28.9Z"
                ></path>
                <path
                  d="M33.7 42.9C33.7 42.1 33 41.4 32.2 41.4H1.5C0.7 41.4 0 42.1 0 42.9C0 43.7 0.7 44.4 1.5 44.4H32.3C33.1 44.3 33.7 43.7 33.7 42.9Z"
                ></path>
                <path
                  d="M21.4 54L16 58.8C15.5 59.2 15.4 59.8 15.6 60.4C15.8 61 16.4 61.3 17 61.3H24.6C25.4 61.3 26.1 60.6 26.1 59.8C26.1 59 25.4 58.3 24.6 58.3H20.9L23.5 56.1L23.6 56C24.7 54.8 25.2 53.6 25.2 52.4V52.2C25.2 49.6 23.1 47.5 20.6 47.5H20.2C17.6 47.5 15.5 49.6 15.5 52.1C15.5 52.9 16.1 53.6 17 53.6C17.8 53.6 18.5 52.9 18.5 52.1C18.5 51.1 19.3 50.4 20.2 50.4H20.6C21.6 50.4 22.3 51.2 22.3 52.1V52.4C22.1 52.9 21.9 53.4 21.4 54Z"
                ></path>
              </g>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <div class="container pb-10">
        <div class="mb-5 flex flex-col-reverse flex-wrap items-center md:flex-row">
          <div class="w-full sm:w-5/12">
            <img src="~/assets/img/university/index-s2-1.png" alt="" />
          </div>
          <div class="my-5 w-full sm:w-7/12 sm:px-5">
            <UniversitySubTitleWithText text-align="text-left" subtext-color="text-base-500">
              <template #subtitle>打造學生客製化教學</template>
              <template #subtext
                >學員專屬班導師制度，主動安排讀書計畫，確保學習進度不落後。再搭配影音教材隨時預習、複習，不懂觀念可無限重播。</template
              >
            </UniversitySubTitleWithText>
            <nuxt-link to="" class="block text-left text-secondary-600">
              【高中補習】升學指導，掌握學測高分秘訣
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
            <nuxt-link to="" class="block text-left text-secondary-600">
              【學測重考】短衝重考上頂大，不用再跑重考班
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
          </div>
        </div>
        <div class="mb-5 flex flex-wrap items-center">
          <div class="my-5 w-full sm:w-7/12 sm:px-5">
            <UniversitySubTitleWithText text-align="text-right" subtext-color="text-base-500">
              <template #subtitle>打磨精修學習歷程檔案</template>
              <template #subtext
                >每位學員皆有一位學習顧問師及一位碩博士老師共同指導，透過擬定目標、執行計畫、精修上傳，琣養質、量兼顧的經歷。</template
              >
            </UniversitySubTitleWithText>
            <nuxt-link to="" class="block text-right text-secondary-600">
              【學習歷程】免費諮詢，找出問題癥結點
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
            <nuxt-link to="" class="block text-right text-secondary-600">
              【個人申請】打造完美書審，上榜頂尖大學
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
          </div>
          <div class="w-full sm:w-5/12">
            <img src="~/assets/img/university/index-s2-2.png" alt="" />
          </div>
        </div>
        <div class="mb-5 flex flex-col-reverse flex-wrap items-center sm:flex-row">
          <div class="w-full sm:w-5/12">
            <img src="~/assets/img/university/index-s2-3.png" alt="" />
          </div>
          <div class="my-5 w-full sm:w-7/12 sm:px-5">
            <UniversitySubTitleWithText text-align="text-left" subtext-color="text-base-500">
              <template #subtitle>扎穩平時成績馬步</template>
              <template #subtext
                >頂尖名師共同主講，以素養導向切入授課，深入淺出課程重點，並提供「探究與實作」課程，滿足全新考試題型。</template
              >
            </UniversitySubTitleWithText>
            <nuxt-link to="" class="block text-secondary-600">
              【課業補強】最強師資陣容，不出門也能高效學習
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
            <nuxt-link to="" class="block text-secondary-600">
              【警專警大】雙管齊下，升學就業同時兼顧
              <font-awesome-icon class="text-secondary-500" :icon="['fa', 'circle-arrow-right']" />
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="container">
        <UniversitySubTitleWithText>
          <template #subtitle>品質領先業界</template>
          <template #subtext>您所需要的一切，我們都可以處理。</template>
        </UniversitySubTitleWithText>
        <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div class="relative min-h-[140px]">
              <svg
                class="absolute left-1/2 -translate-x-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="120"
                viewBox="0 0 240 120"
                fill="none"
              >
                <path
                  d="M120 0C87.9 0 57.8 12.5 35.1 35.1C12.4 57.7 0 87.9 0 120H20C20 64.8 64.8 20 120 20C175.2 20 220 64.8 220 120H240C240 87.9 227.5 57.8 204.9 35.1C182.3 12.4 152.1 0 120 0Z"
                  fill="url(#paint0)"
                />
                <defs>
                  <linearGradient
                    id="paint0"
                    x1="0"
                    y1="60"
                    x2="240"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop xmlns="http://www.w3.org/2000/svg" offset=".15" stop-color="#FEC22E">
                      <animate
                        attributeName="offset"
                        values=".15;.45;.65;.75;1;.75;.55;.45;.15"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset=".25" stop-color="#46F0F0">
                      <animate
                        attributeName="offset"
                        values=".25;.45;.65;.45;.25"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="0.8" stop-color="#FFF04D">
                      <animate
                        attributeName="offset"
                        values=".8;.85;1;.85.8"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
              <div
                class="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-primary-600"
              >
                <span class="text-6xl font-bold" data-to="500">0</span>
                <span class="text-lg">小時</span>
              </div>
            </div>
            <p class="max-w-[400px]">
              多位名校師資齊力錄製 500 小時以上豐富課程，不只內容充實，品質更是優質。
            </p>
          </div>
          <div>
            <div class="relative min-h-[140px]">
              <svg
                class="absolute left-1/2 -translate-x-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="120"
                viewBox="0 0 240 120"
                fill="none"
              >
                <path
                  d="M120 0C87.9 0 57.8 12.5 35.1 35.1C12.4 57.7 0 87.9 0 120H20C20 64.8 64.8 20 120 20C175.2 20 220 64.8 220 120H240C240 87.9 227.5 57.8 204.9 35.1C182.3 12.4 152.1 0 120 0Z"
                  fill="url(#paint1)"
                />
                <defs>
                  <linearGradient
                    id="paint1"
                    x1="0"
                    y1="60"
                    x2="240"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop xmlns="http://www.w3.org/2000/svg" offset=".15" stop-color="#FEC22E">
                      <animate
                        attributeName="offset"
                        values=".15;.45;.65;.75;1;.75;.55;.45;.15"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset=".25" stop-color="#46F0F0">
                      <animate
                        attributeName="offset"
                        values=".25;.45;.65;.45;.25"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="0.8" stop-color="#FFF04D">
                      <animate
                        attributeName="offset"
                        values=".8;.85;1;.85.8"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
              <div
                class="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-primary-600"
              >
                <span class="text-6xl font-bold" data-to="90">0</span>
                <span class="text-lg">% off</span>
              </div>
            </div>
            <p class="max-w-[400px]">平均每月只需$334，告別傳統補習班貴鬆鬆學費，經濟實惠首選。</p>
          </div>
          <div>
            <div class="relative min-h-[140px]">
              <svg
                class="absolute left-1/2 -translate-x-1/2"
                xmlns="http://www.w3.org/2000/svg"
                width="240"
                height="120"
                viewBox="0 0 240 120"
                fill="none"
              >
                <path
                  d="M120 0C87.9 0 57.8 12.5 35.1 35.1C12.4 57.7 0 87.9 0 120H20C20 64.8 64.8 20 120 20C175.2 20 220 64.8 220 120H240C240 87.9 227.5 57.8 204.9 35.1C182.3 12.4 152.1 0 120 0Z"
                  fill="url(#paint2)"
                />
                <defs>
                  <linearGradient
                    id="paint2"
                    x1="0"
                    y1="60"
                    x2="240"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop xmlns="http://www.w3.org/2000/svg" offset=".15" stop-color="#FEC22E">
                      <animate
                        attributeName="offset"
                        values=".15;.45;.65;.75;1;.75;.55;.45;.15"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset=".25" stop-color="#46F0F0">
                      <animate
                        attributeName="offset"
                        values=".25;.45;.65;.45;.25"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </stop>
                    <stop offset="0.8" stop-color="#FFF04D">
                      <animate
                        attributeName="offset"
                        values=".8;.85;1;.85.8"
                        repeatCount="indefinite"
                      />
                    </stop>
                  </linearGradient>
                </defs>
              </svg>
              <div
                class="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 text-primary-600"
              >
                <span class="text-6xl font-bold" data-to="5000">0</span>
                <span class="text-lg">題</span>
              </div>
            </div>
            <p class="max-w-[400px]">獨家 5 大科素養題庫，由 600 位老師共同命題，且持續新增中。</p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-secondary-100 py-10">
      <div class="container">
        <UniversitySubTitle text-color="text-secondary-600" class="mb-5 text-center"
          >當你遇到課業問題時
          <span class="whitespace-nowrap">立即替您解惑</span></UniversitySubTitle
        >
        <div class="grid grid-cols-1 gap-10 text-center md:grid-cols-3">
          <div>
            <img src="~/assets/img/university/index-s3-1.png" alt="" />
            <div class="m-auto min-h-[165px] max-w-[350px] -translate-y-6 bg-white p-3 shadow-md">
              <h4 class="mb-3 text-center text-2xl">專業學習顧問</h4>
              <p class="text-lg">
                顧問積極關心學生課業狀況，確認教材使用狀況，同時通知最新升學相關消息，避免資訊落後。
              </p>
            </div>
          </div>
          <div>
            <img src="~/assets/img/university/index-s3-2.png" alt="" />
            <div class="m-auto min-h-[165px] max-w-[350px] -translate-y-6 bg-white p-3 shadow-md">
              <h4 class="mb-3 text-center text-2xl">獨家素養題庫</h4>
              <p class="text-lg">
                由「中華未來學校教育學會」主導，參考大考中心混合題型，設計出滿足大考趨勢的素養題目，解決題目不夠問題。
              </p>
            </div>
          </div>
          <div>
            <img src="~/assets/img/university/index-s3-3.png" alt="" />
            <div class="m-auto min-h-[165px] max-w-[350px] -translate-y-6 bg-white p-3 shadow-md">
              <h4 class="mb-3 text-center text-2xl">線上解題APP</h4>
              <p class="text-lg">
                學生遇到不懂的問題，或是需要寫作批改，上傳問題至APP，即可獲得詳細解答。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      class="bg-[url('~/assets/img/university/index-bg-3.png')] bg-[length:50%_auto] bg-right-top bg-repeat-y lg:bg-[length:auto_auto]"
    >
      <section class="py-10">
        <div class="container">
          <UniversitySubTitleWithText>
            <template #subtitle>選擇 TKB 精選課程</template>
            <template #subtext
              >獲得最全面的升學考試輔導，<span class="whitespace-nowrap"
                >取得亮眼大考成績</span
              ></template
            >
          </UniversitySubTitleWithText>

          <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
            <nuxt-link
              to=""
              class="inline-block h-[180px] w-full rounded-md bg-[url('~/assets/img/university/course1.png')] bg-cover bg-center bg-no-repeat text-center"
            >
              <div class="relative top-1/2 -translate-y-1/2 text-3xl font-bold text-white">
                學測 / 警大
              </div>
            </nuxt-link>
            <nuxt-link
              to=""
              class="inline-block h-[180px] w-full rounded-md bg-[url('~/assets/img/university/course2.png')] bg-cover bg-center bg-no-repeat text-center"
            >
              <div class="relative top-1/2 -translate-y-1/2 text-3xl font-bold text-white">
                分科測驗
              </div>
            </nuxt-link>
            <nuxt-link
              to=""
              class="inline-block h-[180px] w-full rounded-md bg-[url('~/assets/img/university/course3.png')] bg-cover bg-center bg-no-repeat text-center"
            >
              <div class="relative top-1/2 -translate-y-1/2 text-3xl font-bold text-white">
                警專<br />
                <span class="text-xl">即將上線</span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </section>
      <section class="py-10">
        <div class="container">
          <UniversitySubTitle class="mb-5 text-center">師資精選</UniversitySubTitle>
          <TeacherSwiperCard />
        </div>
      </section>
      <section class="py-10">
        <div class="container">
          <UniversityPostSwiperCard class="mb-5" prev-id="newsPrev" next-id="newsNext">
            <UniversitySubTitle>最新消息</UniversitySubTitle>
          </UniversityPostSwiperCard>
          <UniversityMoreLink />
          <UniversityPostSwiperCard delay="6000" prev-id="articlePrev" next-id="articleNext">
            <UniversitySubTitle>文章專區</UniversitySubTitle>
          </UniversityPostSwiperCard>
          <UniversityMoreLink />
        </div>
      </section>
    </div>
    <section class="bg-secondary-500 py-10">
      <UniversitySubTitleWithText subtitle-text-color="text-white" subtext-color="text-white">
        <template #subtitle>學員見證·有目共睹</template>
        <template #subtext
          >TKB甄戰多年升學輔導經驗，<span class="whitespace-nowrap"
            >帶領學生不斷見證成功案例。</span
          ></template
        >
      </UniversitySubTitleWithText>
      <VideoSwiperSlide />
    </section>
    <section class="py-10">
      <div class="container">
        <PublicForm class="mx-auto max-w-[950px]">
          <UniversitySubTitleWithText>
            <template #subtitle
              >填寫表單<span class="whitespace-nowrap">與升學顧問一對一諮詢</span></template
            >
            <template #subtext
              >請填寫表格內必要訊息，顧問專員將在收到訊息後儘速為您服務，謝謝。</template
            >
          </UniversitySubTitleWithText>
        </PublicForm>
      </div>
    </section>
  </div>
</template>
<script setup>
import { EffectFade } from 'swiper/modules'
import UniversityBannerText from '@/components/views/university/UniversityBannerText.vue'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import UniversitySubTitleWithText from '@/components/views/university/UniversitySubTitleWithText.vue'
import TeacherSwiperCard from '@/components/card/TeacherSwiperCard.vue'
import UniversityPostSwiperCard from '@/components/views/university/UniversityPostSwiperCard.vue'
import VideoSwiperSlide from '@/components/card/VideoSwiperSlide.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import AnimatedButton from '@/components/button/AnimatedButton.vue'
import UniversityMoreLink from '@/components/views/university/UniversityMoreLink.vue'

definePageMeta({
  layout: 'university'
})

// const swiperOption = reactive({
//   allowTouchMove: false,
//   speed: 1200,
//   effect: 'fade',
//   autoplay: true,
//   slidesPerView: 1,
//   spaceBetween: 0
// })
// export default {

//   data() {
//     return {
//       swiperOption: {
//         allowTouchMove: false,
//         speed: 1200,
//         effect: 'fade',
//         autoplay: true,
//         slidesPerView: 1,
//         spaceBetween: 0
//       }
//     }
//   },
//   methods: {
//     openFormModal() {
//       this.$nuxt.$emit('formModalVisible', true)
//     }
//   }
// }
</script>
<style lang="scss" scoped>
svg.animated path {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: draw 1.5s linear 1 forwards;
  stroke: #353535;
  fill: #353535;
}

svg g {
  fill-opacity: 0;
}

svg.animated g {
  stroke-width: 1;
  -webkit-animation: opacity 1s 1.5s linear 1 forwards;
  animation: abc 1s 1.5s linear 1 forwards;
}

@keyframes abc {
  100% {
    fill-opacity: 1;
  }
}

@keyframes draw {
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
