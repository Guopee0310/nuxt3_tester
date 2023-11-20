<template>
  <div class="flex items-center">
    <div>
      <span
        id="teacherPrev"
        class="mr-2 inline-block h-8 w-8 cursor-pointer rounded-full border border-solid border-base-700 bg-white text-center leading-[40px] text-base-700 duration-100 ease-in hover:bg-base-800 hover:text-white"
      >
        <font-awesome-icon :icon="['fa', 'arrow-left']" />
      </span>
    </div>
    <div
      v-swiper:teacherCardSwiper="teacherSwiperOption"
      class="swiper-container shrink grow"
      dir="rtl"
    >
      <div class="swiper-wrapper">
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-1.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">
                  李榮哲<span class="ml-2 text-xs">老師</span>
                </div>
                <div class="text-start">建國中學國文教師</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中國文
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-2.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">陳顥<span>老師</span></div>
                <div class="text-start">翰林版國文教科書編輯</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中國文
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-3.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">姜威<span>老師</span></div>
                <div class="text-start">肯特州立大學碩士</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中英文
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-4.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">劉星<span>老師</span></div>
                <div class="text-start">台大電機所碩士</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中數學
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-5.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">洪敬承<span>老師</span></div>
                <div class="text-start">成功高中生物教師</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中生物
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-6.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">陳大量<span>老師</span></div>
                <div class="text-start">台師大物理學碩士</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中物理
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-7.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">謝錦<span>老師</span></div>
                <div class="text-start">超過15年物理教學經驗</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中物理
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-8.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">王皓<span>老師</span></div>
                <div class="text-start">化學教學資歷超過11年</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中化學
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-9.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">高清<span>老師</span></div>
                <div class="text-start">各大補習班專任化學講師</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中化學
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-10.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">劉成霖<span>老師</span></div>
                <div class="text-start">台大地理系</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中地理
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-11.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">成泰<span>老師</span></div>
                <div class="text-start">超過25年歷史教學經驗名師</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中歷史
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
        <div class="swiper-slide teacher-wrapper text-center" dir="ltr">
          <nuxt-link to="/">
            <div class="mx-auto my-3 min-h-[400px] max-w-[200px] shadow-lg">
              <div
                class="bg-center-top min-h-[250px] bg-secondary-50 bg-[url('~/assets/img/university/se-teacher-12.png')] bg-cover"
              ></div>
              <div
                class="teacher-info relative min-h-[150px] bg-secondary-600 px-2 pb-4 pt-2 text-white"
              >
                <div class="mb-2 flex items-center text-2xl">周妤<span>老師</span></div>
                <div class="text-start">台大社會所博士候選人</div>
                <button class="absolute bottom-2 left-2 block bg-secondary-700 px-2 py-1">
                  高中公民
                </button>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div>
      <span
        id="teacherNext"
        class="ml-2 inline-block h-8 w-8 cursor-pointer rounded-full border border-solid border-base-700 bg-white text-center leading-[40px] text-base-700 duration-100 ease-in hover:bg-base-800 hover:text-white"
      >
        <font-awesome-icon :icon="['fa', 'arrow-right']" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    teacherSwiperOption: {
      default() {
        return {
          autoplay: {
            delay: 3000,
            disableOnInteraction: false
          },
          slidesPerView: 1,
          spaceBetween: 20,
          breakpoints: {
            576: {
              slidesPerView: 'auto'
            }
          },
          navigation: {
            nextEl: '#teacherPrev',
            prevEl: '#teacherNext'
          },
          rewind: true
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.teacher-info::before {
  content: '';
  background: linear-gradient(8deg, theme('colors.secondary.600') 49%, transparent 51%);
  @apply absolute -top-8 left-0 z-10 block h-8 w-full;
}

.swiper-slide {
  @apply ml-4 max-w-none sm:max-w-[205px];
}

.swiper-slide:nth-child(even) {
  @apply mt-8;
}

.swiper-button-disabled {
  @apply pointer-events-none cursor-auto opacity-30;
}
</style>
