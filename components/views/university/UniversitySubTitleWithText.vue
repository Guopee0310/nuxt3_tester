<template>
  <div>
    <UniversitySubTitle class="mb-3" :text-align="textAlign" :text-color="subtitleTextColor"
      ><slot name="subtitle"></slot
    ></UniversitySubTitle>
    <UniversitySubText class="mb-5" :text-align="textAlign" :text-color="subtextColor"
      ><slot name="subtext"></slot
    ></UniversitySubText>
  </div>
</template>
<script>
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue'
import UniversitySubText from '@/components/views/university/UniversitySubText.vue'
export default {
  components: {
    UniversitySubTitle,
    UniversitySubText
  },
  props: ['subtitleTextColor', 'subtextColor', 'textAlign']
}
</script>
<style lang=""></style>
