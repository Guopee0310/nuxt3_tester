<template>
  <div>
    <div class="h-auto bg-secondary-600 pt-4 md:h-[230px]">
      <div class="container px-0 md:px-3">
        <BreadcrumbS2 :content="breadcrumbInfo" class="mb-4 px-3 md:mb-0 md:px-0" />
        <div class="flex flex-col md:flex-row">
          <ZoneMenuNotAdd :sub-menu="subMenu" class="md:order-2" @sub-menu-click="getMenuItem" />
          <ZoneMenuAdd
            :main-menu="mainMenu"
            class="md:order-1"
            :class="mainMenuWidth"
            @main-menu-click="getMenuItem"
          />
        </div>
      </div>
    </div>

    <div
      class="container bg-gradient-to-b from-secondary-600 via-secondary-600 px-0 pb-13 md:-mt-9 md:from-inherit md:via-inherit md:px-3"
    >
      <div class="overflow-clip rounded bg-white md:shadow-2xl">
        <!-- 說明：框內目前為滿版，如需padding可選用下列元件，視情況可調整元件樣式設定，也可只使用其一，或都不使用。
                  ZoneTemplateWrapper：含上下padding及縱向gap。
                  ZoneTemplateXPadding：左右padding。
                  ZoneTemplateXPaddingNarrow：窄版左右padding，與ZoneSectionTitle一同使用。
                  例：ZoneTemplateWrapper>section>(ZoneSectionTitle>span)+ZoneTemplateXPaddingNarrow -->
        <slot></slot>
      </div>
    </div>
    <DefaultXlModal v-model="menuModalVisible" :title="modalTitle" class="h-full md:h-auto">
      <template #content>
        <component :is="modalCom" />
      </template>
    </DefaultXlModal>
  </div>
</template>

<script setup>
import BreadcrumbS2 from '@/components/breadcrumb/BreadcrumbS2.vue'
import ZoneMenuAdd from '@/components/views/zone/ZoneMenuAdd.vue'
import ZoneMenuNotAdd from '@/components/views/zone/ZoneMenuNotAdd.vue'
import DefaultXlModal from '@/components/modal/DefaultXlModal.vue'
const router = useRouter()
const breadcrumbInfo = inject('passbreadcrumb') // 麵包屑
const mainMenu = inject('passmainmenu') // 左邊Swiper選單
const subMenu = inject('passsubmenu') // 右邊白選單
const mainMenuWidth = inject('passmainmenuwidth') // 左邊Swiper選單寬及padding
const allMenu = mainMenu.concat(subMenu) // 左右選單合併
const menuModalVisible = ref(false)
let modalTitle = ref()
let modalCom = ref()
const getMenuItem = (item) => {
  if (item.isModal === true) {
    menuModalVisible.value = true
    modalTitle = item.examName
    modalCom = item.toModal
  } else {
    allMenu.forEach((element) => {
      if (element.examId === item.examId) {
        element.isActive = true
        router.push(element.toSrc)
      } else {
        element.isActive = false
      }
    })
  }
}
</script>
