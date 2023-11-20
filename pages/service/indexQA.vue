<template>
  <div>
    <font-awesome-iconqSearch />
    <div class="lg:container-sm">
      <div class="flex flex-wrap md:py-10">
        <IndexQaItem />
        <IndexQaItem />
        <IndexQaItem />
        <IndexQaItem />
        <IndexQaItem />
      </div>
    </div>
  </div>
</template>
<script setup>
import FaqSearch from '@/components/views/faq/FaqSearch.vue'
import IndexQaItem from '@/components/views/faq/IndexQaItem.vue'
definePageMeta({
  layout: 'main'
})
</script>
<style lang="scss"></style>
