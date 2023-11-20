<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="flex flex-col gap-y-4">
          <ZoneDetailTopTitle
            to-src="/schoolZone/news/toGraduateNewsList?graduate_type=91"
          >
            最新消息
          </ZoneDetailTopTitle>
          <ZoneDetailPostTopInfo />
          <PublicPost>
            <div>文章內容</div>
          </PublicPost>
        </ZoneTemplateXPadding>

        <ZoneTemplateXPadding>
          <PublicForm></PublicForm>
        </ZoneTemplateXPadding>

        <ZoneTemplateXPadding>
          <ButtonTurnPage />
        </ZoneTemplateXPadding>

        <ZoneTemplateXPadding>
          <ZoneDetailRecommend />
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
      <ZoneGraduateSidebar />
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneGraduateSidebar from '@/components/views/zone/ZoneGraduateSidebar.vue'
import ZoneDetailTopTitle from '@/components/views/zone/ZoneDetailTopTitle.vue'
import ZoneDetailPostTopInfo from '@/components/views/zone/ZoneDetailPostTopInfo.vue'
import ZoneDetailRecommend from '@/components/views/zone/ZoneDetailRecommend.vue'
import PublicPost from '@/components/post/PublicPost.vue'
import ButtonTurnPage from '@/components/button/ButtonTurnPage.vue'
import PublicForm from '@/components/form/PublicForm.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu() // 專區選單設定
</script>
