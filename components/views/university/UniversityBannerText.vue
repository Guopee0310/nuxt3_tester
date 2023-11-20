<template>
  <div>
    <UniversityTitle>
      <slot name="title"></slot>
    </UniversityTitle>
    <div class="my-5 text-2xl leading-relaxed">
      <slot name="slogan"></slot>
    </div>
  </div>
</template>
<script>
import UniversityTitle from '@/components/views/university/UniversityTitle'
import AnimatedButton from '@/components/button/AnimatedButton'
export default {
  components: {
    UniversityTitle,
    AnimatedButton
  },
  methods: {
    openFormModal() {
      this.$nuxt.$emit('formModalVisible', true)
    }
  }
}
</script>
<style lang=""></style>
