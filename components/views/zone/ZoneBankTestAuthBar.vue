<template>
  <div class="pb-2 pt-6 text-right">
    <el-popover placement="bottom" trigger="click">
      <div class="leading-relaxed">
        <ul>
          <li>
            您目前的身份是：<span class="inline-block px-1 text-secondary-600">一般訪客</span>
          </li>
          <li>詳解啟用狀態：<span class="text-base-400">未啟用</span></li>
          <ButtonS2 slot="reference" bg-color="bg-secondary-600" width="w-full">
            成為認證會員
          </ButtonS2>
        </ul>
      </div>
      <ButtonS2
        slot="reference"
        class="mr-1"
        width="w-auto"
        bg-color="white"
        border-css="border border-solid border-secondary-600"
        text-color="text-secondary-600"
      >
        <font-awesome-icon :icon="['fa', 'user-lock']" />
        <span>一般訪客</span>
      </ButtonS2>
    </el-popover>

    <el-popover placement="bottom" trigger="click">
      <div class="leading-relaxed">
        <h4 class="mb-1 text-lg font-bold">如何啟用詳解功能？</h4>
        <ul class="pl-4 -indent-4">
          <li>
            <span
              ><font-awesome-icon
                class="!w-4"
                :icon="['far', 'circle-check']"
              />成為認證會員：</span
            >
            <a class="cursor-pointer text-secondary-600 underline">註冊會員</a>&nbsp;並且&nbsp;
            <a class="cursor-pointer text-secondary-600 underline">驗證手機號碼</a>，享<span
              class="highlight"
              >三十天</span
            >使用期限 (從啟用日計算)
          </li>
          <li>
            <span
              ><font-awesome-icon class="!w-4" :icon="['far', 'circle-check']" />成為VIP會員：</span
            >購買任一課程即可成為VIP會員，享 <span class="highlight">課程觀看期限內</span>使用
          </li>
        </ul>
      </div>
      <ButtonS2 slot="reference" class="mr-1" width="w-auto" bg-color="bg-secondary-600">
        <span>啟用詳解功能</span>
      </ButtonS2>
    </el-popover>

    <nuxt-link to="">
      <font-awesome-icon class="text-2xl text-secondary-600" :icon="['far', 'circle-question']" />
    </nuxt-link>
  </div>
</template>
<script>
import ButtonS2 from '@/components/button/ButtonS2.vue'
export default {
  components: {
    ButtonS2
  }
}
</script>
<style lang=""></style>
