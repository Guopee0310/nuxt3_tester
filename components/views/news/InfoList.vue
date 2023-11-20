<template>
  <section class="listblock mb-6">
    <InfoItem
      v-for="item in infos"
      :key="item.id"
      :info="item"
      :url="`/${infoType}/to${capitalizeStr(infoType)}?${infoType}_id=${item.id}`"
    />
  </section>
</template>
<script setup>
import InfoItem from '@/components/views/news/InfoItem'
// 字首轉大寫
const capitalizeStr = (str) => {
  return str[0].toUpperCase() + str.slice(1)
}
defineProps({
  infos: {
    type: Array,
    default() {
      return []
    }
  },
  infoType: {
    type: String,
    default: ''
  }
})
</script>
<style lang=""></style>
