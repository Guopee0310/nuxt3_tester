<template>
  <div class="min-h-[600px] border-b-2 border-solid border-primary-500 bg-white pb-18">
    <PageTitle :title="title" />
    <div class="container">
      <div class="flex flex-wrap lg:flex-nowrap">
        <aside class="basis-full lg:mr-10 lg:flex-[0_1_200px]">
          <div>
            <DropMenu :group-info="groupInfo">
              <template #extraInfo>
                <slot name="extraInfo"></slot>
              </template>
              <template #buttonText>
                <slot name="buttonText"></slot>
              </template>
            </DropMenu>
            <InfoBox />
          </div>
        </aside>
        <main class="overflow-hidden lg:flex-[1_1_0]">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>
<script setup>
import PageTitle from '@/components/others/PageTitle.vue'
import DropMenu from '@/components/menu/DropMenu.vue'
import InfoBox from '@/components/others/InfoBox.vue'

defineProps({
  title: {
    type: String,
    default: '預設標題'
  },
  typeInfo: {
    type: Array,
    default: () => []
  },
  groupInfo: {
    type: Array,
    default: () => []
  }
})
</script>
<style lang="scss" scoped></style>
