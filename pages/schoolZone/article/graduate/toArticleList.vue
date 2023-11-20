<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8">
          <h1 class="text-3xl text-base-800">焦點文章</h1>
          <ZoneListArticle />
          <PaginationS2 />
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
import ZoneListArticle from '@/components/views/zone/ZoneListArticle.vue'
import PaginationS2 from '@/components/pagination/PaginationS2.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu() // 專區選單設定
</script>
