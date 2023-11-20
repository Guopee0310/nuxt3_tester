<template>
  <div>
    <div class="relative overflow-hidden bg-base-50">
      <div class="container">
        <!-- banner -->
        <div class="mx-auto mb-8 mt-6 h-[50vw] w-full overflow-hidden rounded-3xl lg:h-[20vw]">
          <img
            class="block h-full w-full object-cover object-center"
            src="~/assets/img/japanZone/videoMain.png"
          />
        </div>

        <!-- JLPT文法 -->
        <div class="mx-auto mb-8 w-full">
          <JapanVideoPageTitile>
            <template #subtitle>JLPT</template>
            <template #title>文法</template>
          </JapanVideoPageTitile>

          <div class="grid w-full grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
          </div>

          <div class="my-4 text-center">
            <ButtonS2 :bg-color="'bg-secondary-500'">觀看更多</ButtonS2>
          </div>
        </div>

        <!-- JLPT解題 -->
        <div class="mx-auto mb-8 w-full">
          <JapanVideoPageTitile>
            <template #subtitle>JLPT</template>
            <template #title>解題</template>
          </JapanVideoPageTitile>

          <div class="grid w-full grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
          </div>

          <div class="my-4 text-center">
            <ButtonS2 :bg-color="'bg-secondary-500'">觀看更多</ButtonS2>
          </div>
        </div>

        <!-- 商用日文 -->
        <div class="mx-auto mb-8 w-full">
          <JapanVideoPageTitile :display="'hidden'">
            <template #title>商用日文</template>
          </JapanVideoPageTitile>

          <div class="grid w-full grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
            <JapanVideoCard />
          </div>

          <div class="my-4 text-center">
            <ButtonS2 :bg-color="'bg-secondary-500'">觀看更多</ButtonS2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import JapanVideoPageTitile from '@/components/views/japan/JapanVideoPageTitile.vue'
import JapanVideoCard from '@/components/card/JapanVideoCard.vue'
import ButtonS2 from '@/components/button/ButtonS2.vue'
definePageMeta({
  layout: 'japan'
})
</script>
<style lang="scss" scoped></style>
