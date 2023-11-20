<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <div>
          <ZoneTemplateXPadding>
            <h1 class="text-3xl text-base-800">甄試/複試</h1>
          </ZoneTemplateXPadding>
          <hr />
          <ZoneTemplateXPadding>
            <p>待套版時使用tab元件</p>
          </ZoneTemplateXPadding>
        </div>
        <ZoneTemplateXPadding>
          <PublicForm></PublicForm>
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
import PublicForm from '@/components/form/PublicForm.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu('18380935') // 專區選單設定
</script>
