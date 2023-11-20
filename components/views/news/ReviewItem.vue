<template>
  <li class="px-2 py-4">
    <nuxtLink class="flex items-center" :to="`/review/toReview?comment_id=${id}`">
      <div
        class="imgBox mr-4 h-16 w-16 overflow-hidden rounded-[20px] border-[3px] border-solid border-transparent bg-gradient-to-r from-[#6DE1DE_0%] to-[#89BDBC_100%]"
      >
        <img class="h-full w-full object-cover" :src="photo" :alt="title" />
      </div>
      <p class="w-[calc(100%_-_80px)]">{{ title }}</p>
    </nuxtLink>
  </li>
</template>
<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => {}
  }
})

const { id, photo, title } = toRefs(props.info)
</script>
<style lang=""></style>
