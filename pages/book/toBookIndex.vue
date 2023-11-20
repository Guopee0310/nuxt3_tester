<template>
  <div>
    <div class="overflow-x-hidden bg-base-50">
      <!-- banner-block-->
      <section class="banner-block mb-10 md:mb-16">
        <div class="container">
          <div class="banner-title">
            <div class="w-10/12 flex-[0_0_auto] sm:w-8/12">
              <img class="bn-book-1" src="~/assets/img/book/book-1.svg" alt="book1" />
              <h1 class="banner-txt">學習能夠建造一座橋<br />讓我們通往知識的城堡</h1>
            </div>
          </div>
        </div>
        <img class="bn-book-2" src="~/assets/img/book/book-2.svg" alt="book2" />
        <img class="bn-book-3" src="~/assets/img/book/book-3.svg" alt="book3" />
      </section>

      <!-- new-book-block -->
      <section class="new-book-block mb-10 md:mb-16">
        <div class="container">
          <BookSubTitle :display="'inline-block'" :icon-src="titleNew">
            <template #bookSubTitle>新書上架</template>
            <template #rightTextShow
              ><BookSubTitleLink :target-link="'/zone/book/toBookList'"
            /></template>
          </BookSubTitle>
          <BookSwiper :prev-id="'newbook-pre'" :next-id="'newbook-next'" />
          <ButtonSeeMore :url="'/zone/book/toBookList'" class="md:hidden" />
        </div>
      </section>

      <!-- hot-book-block -->
      <section class="hot-book-block mb-10 md:mb-16">
        <div class="container">
          <BookSubTitle :display="'inline-block'" :icon-src="hotImg">
            <template #bookSubTitle>熱銷推薦</template>
          </BookSubTitle>
          <BookSwiper :prev-id="'hotbook-pre'" :next-id="'hotbook-next'" />
        </div>
        <div class="bg-book bg-book-1 hidden xl:block"></div>
      </section>

      <!-- pre-order-block -->
      <section class="pre-order-block mb-10 md:mb-16">
        <div class="container">
          <BookSubTitle>
            <template #bookSubTitle>書籍預購</template>
          </BookSubTitle>
        </div>

        <div class="pre-order-content mb-10 md:mb-16">
          <div class="container">
            <div
              class="grid translate-y-0 grid-cols-1 gap-6 xl:-translate-y-1 xl:grid-cols-2 xl:gap-4"
            >
              <BookPreOrderCard :url="'/book/toBookDetail'" />
            </div>
          </div>
        </div>
      </section>

      <!-- article-block -->
      <section class="article-block mb-10 md:mb-16">
        <div class="container">
          <BookSubTitle :display="'inline-block'" :icon-src="titleNew">
            <template #bookSubTitle>精選文章</template>
            <template #rightTextShow
              ><BookSubTitleLink :target-link="'/zone/book/toBookList'"
            /></template>
          </BookSubTitle>
          <div class="my-4 flex justify-center md:justify-between">
            <div class="hidden md:block"></div>
            <div class="flex items-center justify-center">
              <div class="tab-menu my-2">
                <a
                  :class="{ tabActive: activeArticleTab === 0 }"
                  class="tab-nav"
                  @click="activeArticleTab = 0"
                >
                  <div class="tab-icon-1"></div>
                  <span>最新</span>
                </a>
                <a
                  :class="{ tabActive: activeArticleTab === 1 }"
                  class="tab-nav"
                  @click="activeArticleTab = 1"
                >
                  <div class="tab-icon-2"></div>
                  <span>熱門</span>
                </a>
                <a
                  :class="{ tabActive: activeArticleTab === 2 }"
                  class="tab-nav"
                  @click="activeArticleTab = 2"
                >
                  <div class="tab-icon-3"></div>
                  <span>素養教育</span>
                </a>
              </div>
            </div>
            <div class="hidden md:block" style="width: 76px"></div>
          </div>

          <div class="my-4">
            <!-- 最新 -->
            <BookTabArticleList v-show="activeArticleTab === 0">
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
            </BookTabArticleList>
            <!-- 熱門 -->
            <BookTabArticleList v-show="activeArticleTab === 1">
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />

              <!-- <BookTabArticleCard /> -->
            </BookTabArticleList>
            <!-- 素養教育 -->
            <BookTabArticleList v-show="activeArticleTab === 2">
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
              <BookTabArticleCard :url="'/book/toBookDetail'" />
            </BookTabArticleList>
          </div>
          <ButtonSeeMore :url="'/zone/book/toBookList'" class="md:hidden" />
        </div>

        <div class="bg-book bg-book-2 hidden xl:block"></div>
      </section>
    </div>
  </div>
</template>
<script setup>
import ButtonSeeMore from '@/components/button/ButtonSeeMore.vue'
import BookSubTitle from '@/components/views/book/BookSubTitle.vue'
import BookSubTitleLink from '@/components/views/book/BookSubTitleLink.vue'
import BookSwiper from '@/components/card/BookSwiper.vue'
import BookTabArticleList from '@/components/views/book/BookTabArticleList.vue'
import BookTabArticleCard from '@/components/views/book/BookTabArticleCard.vue'
import BookPreOrderCard from '@/components/views/book/BookPreOrderCard.vue'
import titleNew from '@/assets/img/book/title-new.svg'
import hotImg from '@/assets/img/book/title-hot.svg'
definePageMeta({
  layout: 'book'
})
const activeArticleTab = ref(0)
</script>
<style lang="scss" scoped>
.banner-block {
  position: relative;
  width: 100%;
  height: 450px;
  background:
    url('~/assets/img/book/bg-002.svg') no-repeat center center/cover,
    url('~/assets/img/book/bg-001.webp') no-repeat center center/cover;
  .banner-title {
    display: flex;
    align-items: center;
    height: 420px;
  }
  .bn-book-1 {
    position: absolute;
    top: 40px;
    animation: book1-animation 2s alternate infinite;
  }

  @keyframes book1-animation {
    0% {
      transform: translate(-90px, 0px);
    }
    100% {
      transform: translate(-90px, 20px);
    }
  }
  .bn-book-2 {
    position: absolute;
    bottom: 20px;
    left: 20px;
    animation: book2-animation 2s alternate infinite;
  }
  @keyframes book2-animation {
    0% {
      transform: translate(0px, 20px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
  .bn-book-3 {
    position: absolute;
    bottom: 30px;
    right: -20px;
    animation: book3-animation 2.5s alternate infinite;
  }
  @keyframes book3-animation {
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(0px, 20px);
    }
  }
  .banner-txt {
    font-size: 1.8rem;
    font-weight: bolder;
    text-align: left;
    line-height: 1.6;
    text-shadow: 3px 2px 1px #fff;
    letter-spacing: 1.5px;
  }
}

.hot-book-block {
  position: relative;
  .bg-book {
    position: absolute;
    background-image: url('~/assets/img/book/bg-book-1.svg');
    background-repeat: no-repeat;
    &.bg-book-1 {
      left: -50px;
      width: 200px;
      height: 270px;
      background-size: 200px;
      background-position: left;
      top: 0px;
    }
  }
}

.pre-order-block {
  .pre-order-content {
    background: url('~/assets/img/book/bg-sea.webp') no-repeat center center/cover;
    @apply xl:mt-10 xl:h-[420px];
  }
}

.article-block {
  position: relative;
  .tab-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    .tab-nav {
      display: flex;
      align-items: center;
      padding: 7px 18px;
      gap: 6px;
      background: theme('colors.white');
      border: 1px solid theme('colors.base.200');
      border-radius: 22px;
      cursor: pointer;
      > span {
        line-height: 22px;
        letter-spacing: 0.08em;
        color: theme('colors.base.500');
      }
      .tab-icon-1 {
        width: 12px;
        height: 12px;
        background-color: theme('colors.base.500');
        mask-image: url('~/assets/img/book/tab-icon-1.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-1.svg');
      }
      .tab-icon-2 {
        width: 12px;
        height: 16px;
        background-color: theme('colors.base.500');
        mask-image: url('~/assets/img/book/tab-icon-2.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-2.svg');
      }
      .tab-icon-3 {
        width: 9px;
        height: 12px;
        background-color: theme('colors.base.500');
        mask-image: url('~/assets/img/book/tab-icon-3.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-3.svg');
      }
    }

    .tab-nav.tabActive {
      border: 1px solid theme('colors.primary.500');
      > span {
        color: theme('colors.primary.500');
      }
      .tab-icon-1 {
        background-color: theme('colors.primary.500');
        mask-image: url('~/assets/img/book/tab-icon-1.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-1.svg');
      }
      .tab-icon-2 {
        background-color: theme('colors.primary.500');
        mask-image: url('~/assets/img/book/tab-icon-2.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-2.svg');
      }
      .tab-icon-3 {
        background-color: theme('colors.primary.500');
        mask-image: url('~/assets/img/book/tab-icon-3.svg');
        -webkit-mask-image: url('~/assets/img/book/tab-icon-3.svg');
      }
    }
  }

  .bg-book {
    background-image: url('~/assets/img/book/bg-book-2.svg');
    position: absolute;
    background-repeat: no-repeat;
    &.bg-book.bg-book-2 {
      right: 0px;
      width: 145px;
      height: 237px;
      background-size: 200px;
      background-position: left;
      bottom: 0px;
    }
  }
}

@media (max-width: theme('screens.md')) {
  .banner-block {
    width: 100%;
    height: 346px;
    background:
      url('~/assets/img/book/bg-004.svg') no-repeat center center/cover,
      url('~/assets/img/book/bg-003.webp') no-repeat center center/cover;
    .banner-title {
      height: 200px;
    }
    .banner-txt {
      font-size: 1.125rem;
      line-height: 1.6;
      margin-left: 20px;
      text-shadow: 3px 2px 1px #fff;
      letter-spacing: 1.5px;
    }
    .bn-book-1 {
      width: 50px;
      position: absolute;
      top: 10px;
      animation: book1-animation 2s alternate infinite;
    }

    @keyframes book1-animation {
      0% {
        transform: translate(0px, 10px);
      }
      100% {
        transform: translate(0px, 20px);
      }
    }
    .bn-book-2 {
      display: none;
    }

    .bn-book-3 {
      width: 60px;
      position: absolute;
      bottom: 30px;
      right: -20px;
      animation: book3-animation 2.5s alternate infinite;
    }
    @keyframes book3-animation {
      0% {
        transform: translate(0px, 0px);
      }
      100% {
        transform: translate(0px, 20px);
      }
    }
  }
}

@media (max-width: theme('screens.xl')) {
  .pre-order-block {
    .pre-order-content {
      height: unset;
      background: unset;
      margin-top: 20px;
    }
  }
}
</style>
