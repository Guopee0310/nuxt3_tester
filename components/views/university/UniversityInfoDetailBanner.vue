<template>
  <div
    class="h-[320px] min-h-[140px] bg-[url('~/assets/img/university/articlePage-bg-mb-1.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('~/assets/img/university/articlePage-bg-1.png')]"
  >
    <div class="container h-full">
      <BreadcrumbS2 class="py-3" />
      <div class="mb-6 flex h-[calc(100%_-_96px)] items-center justify-center">
        <div class="text-center">
          <h1
            class="mb-3 text-4xl font-bold text-white shadow-black/25 [text-shadow:_0_4px_4px_var(--tw-shadow-color)]"
          >
            高中公民補習課程｜師資介紹、課程費用詳情｜甄戰一點通
          </h1>
          <UniversityMoreLink
            display="inline-block"
            text-align="text-center"
            text-color="text-white"
            icon-color="text-base-700"
            icon-bg-color="bg-white"
            class="mr-2 rounded-[20px] bg-base-700 px-2 py-1"
            >學測</UniversityMoreLink
          >
          <span class="mr-2 text-white">
            <font-awesome-icon class="mr-1" :icon="['fa', 'calendar']" />2023/05/25
          </span>
          <span class="text-white">
            <font-awesome-icon class="mr-1" :icon="['fa', 'eye']" />32
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BreadcrumbS2 from '@/components/breadcrumb/BreadcrumbS2.vue'
import UniversityMoreLink from '@/components/views/university/UniversityMoreLink.vue'
export default {
  components: {
    BreadcrumbS2,
    UniversityMoreLink
  }
}
</script>
<style lang=""></style>
