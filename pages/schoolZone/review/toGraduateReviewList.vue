<template>
  <ZoneTemplate>
    <div class="flex flex-col gap-y-16 lg:flex-row">
      <ZoneTemplateWrapper class="flex-1 lg:order-2">
        <ZoneTemplateXPadding class="grid gap-y-8">
          <h1 class="text-3xl text-base-800">學員心得</h1>
          <div class="flex flex-col justify-center gap-4 bg-base-100 px-3 py-4">
            <div
              class="flex flex-col items-center gap-x-2 gap-y-1 text-lg md:flex-row md:justify-center"
            >
              <div class="w-full md:w-[120px] md:text-right">研究所升學管道</div>
              <el-select v-model="value" placeholder="Select" size="large" class="w-full md:w-auto">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
            <div
              class="flex flex-col items-center gap-x-2 gap-y-1 text-lg md:flex-row md:justify-center"
            >
              <div class="w-full md:w-[120px] md:text-right">系所分類</div>
              <el-select v-model="value" placeholder="Select" size="large" class="w-full md:w-auto">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <ZoneListCharacter />
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
import ZoneListCharacter from '@/components/views/zone/ZoneListCharacter.vue'
import PaginationS2 from '@/components/pagination/PaginationS2.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu() // 專區選單設定
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
