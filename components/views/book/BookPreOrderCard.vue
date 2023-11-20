<template>
  <nuxt-link class="pre-order-item" :to="url">
    <div class="tag-box">
      <div class="info-tag">
        <div class="info-p">預購優惠<span class="tag-txt">7</span>折</div>
      </div>
    </div>
    <div class="pre-order-card">
      <div class="pb-card-head">
        <div class="pb-img-box">
          <img
            src="https://books.tingmao.com.tw/upload/images/book/cover/M860768201001.png"
            alt="素養檢定：國中數學素養題本套書[含國一/國二/國三/適用國中會考數學科](FG5401+FG5402+FG5403+FG5404)"
          />
        </div>
      </div>
      <div class="pb-card-body">
        <div class="pb-message">| 享受第一手徜徉在知識海洋</div>
        <div class="pb-content">
          <div class="pb-title line-clamp-2">
            <div class="pb-txt">
              素養檢定：國中數學素養題本套書[含國一/國二/國三/適用國中會考數學科](FG5401+FG5402+FG5403+FG5404)
            </div>
          </div>
          <hr />
          <div class="mb-1 line-clamp-1">作者：<span>中華未來學校教育學會師資群</span></div>
          <div class="mb-1">定價：<span class="text-decoration-line-through">NT 1680 元</span></div>
          <div class="flex items-center">
            預購價格：
            <div class="flex items-center">
              NT
              <div class="sale-txt">1008</div>
              元
            </div>
          </div>
        </div>
        <div class="pb-date">
          <div class="pre-date">
            <div class="pre-title">預購期間:</div>
            <div class="date-txt line-clamp-1">
              <div class="time">2022/12/01<span>-</span>2023/01/23</div>
            </div>
          </div>
          <div class="publish-date">
            <div class="publish-title">預計出版日期:</div>
            <div class="date-txt line-clamp-1">
              <div class="time">2022/12/01<span>-</span>2023/01/23</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script setup>
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.pre-order-item {
  @apply relative mx-auto w-full cursor-pointer lg:w-[80%] xl:w-full;
  &:hover {
    opacity: 1;
  }
  .tag-box {
    position: absolute;
    top: -6px;
    right: -8px;
    width: 150px;
    height: 150px;
    overflow: hidden;
    .info-tag {
      position: absolute;
      top: 32px;
      right: -40px;
      text-align: center;
      width: 180px;
      font-size: 12px;
      font-weight: bold;
      display: inline-block;
      color: #fff;
      background-color: theme('colors.primary.500');
      padding: 0.25rem 1rem;
      letter-spacing: 1.1px;
      transform: rotate(45deg);
    }
    .info-tag::before {
      position: absolute;
      left: 0;
      bottom: -8px;
      display: block;
      content: '';
      width: 0px;
      height: 0px;
      border-top: 8px solid #a66301;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
    .info-tag::after {
      position: absolute;
      right: 0;
      bottom: -8px;
      display: block;
      content: '';
      width: 0px;
      height: 0px;
      border-top: 8px solid #a66301;
      border-right: 8px solid transparent;
      border-left: 8px solid transparent;
    }
    .info-p {
      font-size: 14px;
    }
    .tag-txt {
      font-size: 1.1rem;
      text-shadow: 2px 2px 1px rgba(57, 56, 56, 0.1);
      color: #fff72e;
    }
  }
}
.pre-order-card {
  @apply flex h-full w-full flex-col rounded-[3px] border border-solid border-base-200 bg-white shadow-[2px_3px_4px_0px_rgb(0,0,0,0,.07)] sm:h-[350px] sm:flex-row-reverse;
}
.pb-card-head {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  .pb-img-box {
    display: flex;
    justify-content: center;
    width: 280px;
    height: 280px;
    padding: 10px;
    background-color: theme('colors.base.50');
    > img {
      box-shadow: 4px 2px 6px 0px rgba(0, 0, 0, 0.11);
      display: block;
      object-fit: cover;
      aspect-ratio: 190/256;
    }
  }
}
.pb-card-body {
  overflow: hidden;
  flex-grow: 1;
  padding: 16px;
  .pb-message {
    font-size: 14px;
    font-weight: bold;
    color: theme('colors.primary.500');
    margin-bottom: 10px;
  }
  .pb-content {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #676767;
    > hr {
      margin: 8px 0px;
    }
  }
  .pb-title {
    @apply mb-2 h-[58px] text-[20px] font-semibold text-base-800;
  }
  .sale-txt {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0px 4px;
    letter-spacing: 1.2px;
    color: theme('colors.danger.600');
  }
  .pb-date {
    font-size: 14px;
    font-weight: bold;
    .date-txt {
      font-weight: 500;
      color: theme('colors.base.400');
      letter-spacing: 1.1px;
    }
    .time {
      > span {
        display: inline-block;
        margin: 0px 4px;
      }
    }
  }
}
</style>
