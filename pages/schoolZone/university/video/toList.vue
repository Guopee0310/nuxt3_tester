<template>
  <UniversityVideoTemplate>
    <UniversityVideoList column="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <UniversitySubTitle text-align="text-left">
        <font-awesome-icon class="mr-1" :icon="['fa', 'eye']" />最新上線
      </UniversitySubTitle>
    </UniversityVideoList>
    <div class="text-center">
      <PaginationS3 />
    </div>
  </UniversityVideoTemplate>
</template>
<script>
import UniversityVideoTemplate from '@/components/views/university/UniversityVideoTemplate.vue'
import UniversityVideoList from '@/components/views/university/UniversityVideoList.vue'
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import PaginationS3 from '@/components/pagination/PaginationS3.vue'
export default {
  components: {
    UniversityVideoTemplate,
    UniversityVideoList,
    UniversitySubTitle,
    PaginationS3
  },
  layout: 'university'
}
</script>
<style lang="scss" scoped></style>
