<template>
  <div>
    <Swiper
      :modules="swiperOption.modules"
      :slides-per-view="swiperOption.slidesPerView"
      :centered-slides="swiperOption.centeredSlides"
      :effect="swiperOption.effect"
      :coverflow-effect="swiperOption.coverflowEffect"
      :loop="swiperOption.loop"
      :space-between="swiperOption.spaceBetween"
      :pagination="swiperOption.pagination"
      :breakpoints="swiperOption.breakpoints"
      :autoplay="swiperOption.autoplay"
    >
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div> </SwiperSlide
      ><SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="rec-card" @click="isModalShow = true">
          <div class="rec-card-body">
            <div class="content">
              <h3>JLPT日語檢定N1合格心得</h3>
              <div class="rec-p-ellipsis">
                <p class="rec-p-ellipsis">後來認識了TKB日文，向課程專員諮詢過後</p>
              </div>
            </div>
          </div>
          <div class="rec-card-rect"></div>
          <div class="rec-card-footer">
            <div class="student">
              <div class="photo">
                <img
                  src="https://www.tkbtv.com.tw/upload/comment_pic/20170510095849.jpg"
                  alt="TKB學員照片"
                />
              </div>
            </div>
            <div class="student-content">
              <div class="student-tag">TKB學員</div>
              <span class="student-title">JLPT日語檢定N1</span>
              <span class="student-name">曾Ｏ珊</span>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

    <RecommendModal v-if="isModalShow" @controlModal="isModalShow = false" />
  </div>
</template>
<script setup>
import { EffectFade, EffectCoverflow } from 'swiper/modules'
import RecommendModal from '@/components/modal/RecommendModal.vue'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
const isModalShow = ref(false)
const swiperOption = reactive({
  modules: [SwiperAutoplay, SwiperPagination, EffectFade, EffectCoverflow],
  autoplay: {
    delay: 10000
  },
  speed: 800,
  loop: true,
  centeredSlides: true,
  effect: 'coverflow', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: -10, // Slide rotate in degrees
    stretch: 15, // Stretch space between slides (in px)
    depth: 310, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows: false // Enables slides shadows
  },
  slidesPerView: 1.2,
  spaceBetween: 20,
  breakpoints: {
    920: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1.7,
      spaceBetween: 20
    }
  },
  pagination: {
    clickable: true
  }
})
</script>
<style lang="scss" scoped>
.rec-card {
  @apply mt-2 cursor-pointer rounded-3xl;
  .rec-card-body {
    @apply h-[280px] px-6 pb-4 pt-8;
    .content {
      @apply flex h-full flex-col;
      h3 {
        @apply mb-3 min-h-[50px] text-2xl;
      }
      .rec-p-ellipsis {
        @apply line-clamp-5 text-xl tracking-[1px];
      }
    }
  }
}

.rec-card-rect {
  @apply -mx-2 mb-2 h-7;
}

.rec-card-footer {
  @apply -m-2 flex justify-around px-6 pb-2;
  .student {
    @apply -mt-6;
    .photo {
      @apply mb-1 h-18 w-18 overflow-hidden rounded-full;
    }
  }
  .student-content {
    @apply shrink basis-[360px] pl-4;

    .student-tag {
      font-size: 15px;
      display: inline-block;
      border-radius: 8px;
      color: #e49635;
      background-color: #fff;
      margin-bottom: 8px;
      padding: 4px 12px;
    }

    .student-title {
      display: block;
      color: #fff;
      font-size: 1.25rem;
      line-height: 1.2;
      font-weight: 600;
      border-bottom: 1px solid #fff;
      padding: 4px 0px;
      margin: 4px 0px;
    }

    .student-name {
      @apply mt-2 block text-lg text-white;
    }
  }
}

.swiper-slide:nth-child(odd) {
  .rec-card {
    background-color: rgba(247, 248, 251, 0.8);
    border-top: 4px solid rgba(255, 255, 255, 0.9);
    h3 {
      @apply text-[#014d6f];
    }
    .rec-card-rect {
      @apply from-[#62b3b0_49%] to-[transparent_51%] bg-gradient-[-4deg];
    }
    .rec-card-footer {
      @apply bg-secondary-500;

      .photo {
        @apply shadow-[0_0_0_3px] shadow-secondary-500;
      }

      .student-tag {
        @apply text-secondary-500;
      }
    }
  }
}

.swiper-slide:nth-child(even) {
  .rec-card {
    background-color: rgba(249, 240, 241, 0.8);
    border-top: 4px solid rgba(255, 255, 255, 0.9);
    h3 {
      @apply text-primary-600;
    }
    .rec-card-rect {
      @apply from-[#f29001_49%] to-[transparent_51%] bg-gradient-[-4deg];
    }
    .rec-card-footer {
      @apply bg-primary-500;

      .photo {
        @apply shadow-[0_0_0_3px] shadow-primary-600;
      }

      .student-tag {
        @apply text-primary-600;
      }
    }
  }
}

:deep(.swiper-pagination) {
  @apply relative bottom-0 mt-4;
  .swiper-pagination-bullet {
    @apply m-2 bg-secondary-500 opacity-100 outline-0;
  }

  .swiper-pagination-bullet-active {
    background-color: #fff;
    -webkit-box-shadow: 0 0 0 3px #fd6e4e;
    box-shadow: 0 0 0 3px #fd6e4e;
  }
}
</style>
