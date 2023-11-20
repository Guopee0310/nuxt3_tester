<template>
  <div class="shadow-2 cursor-pointer rounded-lg bg-white p-4 hover:opacity-80">
    <div class="flex items-center">
      <StudentAvatar size="70px" />
      <div class="ml-4 flex-[1_1_0]">
        <div class="text-[18px] font-bold">林O宇</div>
        <div class="mt-1 text-[18px] font-bold leading-snug text-primary-500">
          研究所筆試心得〡106年考取台大電信所 _林O宇
        </div>
      </div>
    </div>
    <div class="mt-4 line-clamp-3 text-lg">
      周易老師：數學這種東西，跟電子電磁準備方式就不同，沒有什麼特別的方式，每天反覆記熟公式，狂寫題目就對了，透過不斷地練習，減少在考場的失誤率，在此要跟學弟妹說一下，大碩的模擬考一定要去練習，因為練習十之八九會有粗心的時候，這樣可以時常提醒自己，數學算得快也要算的準，還有線性代數這部分，我覺得是最有趣也是內容最少的一科，好好思考幫助腦袋靈活，在台大電機的題目上，線代相對微方算比較簡單的，其CP值是非常高的，千萬不能放掉這科，或許是影響上榜的關鍵。周易老師的觀察法非常有用，數間研究所的工數考試中，絕對能夠派上用場，幫助我許多，也謝謝老師課餘之間，很熱心幫學生解決各種的工數題目，緊緊跟好老師的步伐，讓我在工數表現上加分許多。
    </div>
  </div>
</template>
<script>
import StudentAvatar from '@/components/others/StudentAvatar.vue'
export default {
  components: {
    StudentAvatar
  }
}
</script>
<style lang="scss" scoped>
.avatar::after {
  content: '';
  background: url('~/assets/img/others/ribbon.png') no-repeat center / cover;
  @apply absolute -bottom-1 left-1/2 h-[17px] w-full -translate-x-1/2;
}
</style>
