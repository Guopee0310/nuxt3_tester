<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <div>
          <ZoneTemplateXPadding>
            <h1 class="text-3xl text-base-800">機械所</h1>
          </ZoneTemplateXPadding>
          <hr />
          <ZoneTemplateXPadding>
            <p>待套版時使用tab元件</p>
            <h2 class="mb-3 text-2xl font-medium">考試科目</h2>
            <ZoneExamCombination></ZoneExamCombination>
          </ZoneTemplateXPadding>
        </div>
        <ZoneTemplateXPadding>
          <PublicForm></PublicForm>
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
      <ZoneTransferSidebar />
    </div>
  </ZoneTemplate>
</template>

<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
import ZoneTransferSidebar from '@/components/views/zone/ZoneTransferSidebar.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import ZoneExamCombination from '@/components/views/zone/ZoneExamCombination.vue'
definePageMeta({
  layout: 'main'
})
</script>
