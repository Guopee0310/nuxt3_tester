<template>
  <div class="py-10 text-center text-xl leading-loose">
    <slot>
      <p>
        TKB甄戰一點通高中影音教材，齊聚全國新生代補教名師與明星高中老師，聯手打造最完整的高中補習課程。
      </p>
      <p>108素養導向，搭配探究與實作最新課程，邀你一起成為考試常勝軍。</p>
    </slot>
    <AnimatedButton bg-color="bg-primary-500" @click="openFormModal">免費體驗</AnimatedButton>
  </div>
</template>
<script>
import AnimatedButton from '@/components/button/AnimatedButton.vue'
export default {
  components: {
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
