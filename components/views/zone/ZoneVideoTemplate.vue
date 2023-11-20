<template>
  <div>
    <div
      class="h-auto pt-4 md:h-[230px]"
      :style="`background:url(${ZoneMenuBg}) no-repeat center left/cover;`"
    >
      <div class="container">
        <BreadcrumbS2 class="mb-4 md:mb-0" />
        <div class="flex flex-col justify-center gap-x-4 md:flex-row md:items-center">
          <ZoneMenuSearch class="md:order-2" />
          <ZoneMenuAdd class="md:order-1" />
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
  </div>
</template>
<script>
import BreadcrumbS2 from '@/components/breadcrumb/BreadcrumbS2.vue'
import ZoneMenuAdd from '@/components/views/zone/ZoneMenuAdd.vue'
import ZoneMenuSearch from '@/components/views/zone/ZoneMenuSearch.vue'
import ZoneMenuBg from '@/assets/img/video/background_video.webp'

export default {
  components: {
    BreadcrumbS2,
    ZoneMenuAdd,
    ZoneMenuSearch
  },
  data() {
    return {
      ZoneMenuBg
    }
  }
}
</script>
<style lang="scss" scoped></style>
