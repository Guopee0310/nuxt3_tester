<template>
  <div>
    <UniversityInfoDetailBanner />
    <div class="container py-10">
      <div class="grid grid-cols-12 sm:gap-8">
        <div class="col-span-12 md:col-span-7 lg:col-span-9">
          <slot></slot>
        </div>
        <div class="col-span-12 md:col-span-5 lg:col-span-3">
          <div class="sticky top-13">
            <div class="mb-3 text-xl">推薦課程</div>
            <CourseCardS3 class="mb-5" />
            <CourseCardS3 class="mb-5" />
            <CourseCardS3 class="mb-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import UniversityInfoDetailBanner from '@/components/views/university/UniversityInfoDetailBanner.vue'
import CourseCardS3 from '@/components/card/CourseCardS3.vue'
export default {
  components: {
    UniversityInfoDetailBanner,
    CourseCardS3
  }
}
</script>
<style lang=""></style>
