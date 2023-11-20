<template>
  <aside
    class="flex flex-col gap-3 lg:order-1 lg:w-[280px] lg:flex-initial lg:border-r lg:border-solid lg:border-base-200"
  >
    <div class="px-2 sm:max-lg:grid sm:max-lg:grid-cols-3 sm:max-lg:gap-x-2">
      <ButtonCount
        count-bg="bg-[#9cd365]"
        bottom-line="border-b border-solid border-base-200 sm:max-lg:border-b-0"
        to="/schoolZone/news/toGraduateNewsList?graduate_type=91"
      >
        <template #title>最新消息</template>
        <template #count>32</template>
      </ButtonCount>
      <ButtonCount
        count-bg="bg-[#9cd365]"
        bottom-line="border-b border-solid border-base-200 sm:max-lg:border-b-0"
        to="/schoolZone/article/graduate/toArticleList"
      >
        <template #title>焦點文章</template>
        <template #count>134</template>
      </ButtonCount>
      <ButtonCount
        count-bg="bg-[#9cd365]"
        bottom-line="border-b-0"
        to="/schoolZone/review/toGraduateReviewList"
      >
        <template #title>學員心得</template>
        <template #count>473</template>
      </ButtonCount>
    </div>
    <div class="grid grid-cols-1 gap-2 sm:max-lg:grid-cols-2">
      <ButtonIconS2 icon-bg="bg-[#9cd365]" to="/video/toVideo">
        <template #title>升學頻道</template>
        <template #subtitle>CHANNEL</template>
      </ButtonIconS2>
      <ButtonIconS2 icon-bg="bg-[#caa389]" to="/lecture/toLectureDetail">
        <template #icon><font-awesome-icon :icon="['fas', 'microphone']" /></template>
        <template #title>免費講座</template>
        <template #subtitle>LECTURE</template>
      </ButtonIconS2>
      <ButtonIconS2 icon-bg="bg-primary-400" to="/formAsk/CONTACT_B/toAsk">
        <template #icon><font-awesome-icon :icon="['fas', 'phone-flip']" /></template>
        <template #title>聯絡我們</template>
        <template #subtitle>CONTENT</template>
      </ButtonIconS2>
      <ButtonIconS2 icon-bg="bg-[#ffa791]" to="/onSale/toOnSaleList">
        <template #icon><font-awesome-icon :icon="['fas', 'pencil']" /></template>
        <template #title>優惠課程</template>
        <template #subtitle>ON SALE</template>
      </ButtonIconS2>
    </div>
    <div class="px-2 sm:max-lg:grid sm:max-lg:grid-cols-3 sm:max-lg:gap-x-2">
      <ButtonIconS3
        bottom-line="border-b-2 border-dotted border-base-200 sm:max-lg:border-b-0"
        to="https://www.tkbtv.com.tw/tkbxo/toIndex.action"
      >
        <template #icon><font-awesome-icon :icon="['fab', 'youtube']" /></template>
        <template #title>XO影音解答</template>
      </ButtonIconS3>
      <ButtonIconS3
        color="text-[#705c57]"
        bottom-line="border-b-2 border-dotted border-base-200 sm:max-lg:border-b-0"
        to="https://www.tkbtv.com.tw/"
      >
        <template #icon><font-awesome-icon :icon="['fas', 'cloud']" /></template>
        <template #title>雲端學習</template>
      </ButtonIconS3>
      <ButtonIconS3 color="text-[#eeb58f]" bottom-line="border-b-0" to="/toBlog">
        <template #icon><font-awesome-icon :icon="['fas', 'comment-dots']" /></template>
        <template #title>相關粉絲頁</template>
      </ButtonIconS3>
    </div>
  </aside>
</template>

<script setup>
import ButtonCount from '@/components/button/ButtonCount.vue'
import ButtonIconS2 from '@/components/button/ButtonIconS2.vue'
import ButtonIconS3 from '@/components/button/ButtonIconS3.vue'
</script>
