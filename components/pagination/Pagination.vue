<template>
  <div class="pagination my-10 flex justify-center">
    <nuxtLink
      v-show="currentPage >= 1"
      :to="`${url}&page_no=${currentPage - 1}`"
      type="button"
      class="mr-1 flex h-6 w-6 cursor-pointer items-center justify-center border border-solid border-[#87d9d7] px-1 text-secondary-400 hover:bg-secondary-400 hover:text-white"
    >
      <span class="btn-prev-txt">
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </span>
    </nuxtLink>
    <ul class="flex items-center justify-center">
      <li v-for="(page, index) in dynamicPages" :key="index" class="mx-1">
        <nuxtLink
          :to="`${url}&page_no=${page - 1}`"
          :class="page === currentPage + 1 ? 'active' : ''"
          class="flex h-6 w-6 cursor-pointer items-center justify-center border border-solid border-[#87d9d7] bg-white text-secondary-400 hover:bg-secondary-400 hover:text-white"
          >{{ page }}</nuxtLink
        >
      </li>
    </ul>
    <nuxtLink
      v-show="totalPages > 1 && currentPage + 1 !== totalPages"
      :to="`${url}&page_no=${currentPage + 1}`"
      class="ml-1 flex h-6 w-6 cursor-pointer items-center justify-center border border-solid border-[#87d9d7] px-1 text-secondary-400 hover:bg-secondary-400 hover:text-white"
    >
      <span class="btn-prev-txt">
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </span>
    </nuxtLink>
  </div>
</template>
<script setup>
const props = defineProps({
  totalPages: {
    type: Number,
    default: 0
  },
  currentPage: {
    type: Number,
    default: 1
  },
  url: {
    type: String,
    default: ''
  }
})

let pageArr = reactive([])
let dynamicPages = reactive([])

watchEffect(() => {
  pageArr = reactive([])
  for (let i = 1; i < props.totalPages + 1; i++) {
    pageArr.push(i)
  }
  if (props.currentPage <= 2) {
    dynamicPages = pageArr.slice(0, 5)
  } else if (props.currentPage > 2) {
    dynamicPages = pageArr.slice(props.currentPage - 2, props.currentPage + 3)
  } else if (props.currentPage > props.totalPages - 5) {
    dynamicPages = pageArr.slice(props.totalPages)
  }
})
</script>
<style lang="scss" scoped>
.active {
  @apply bg-secondary-400 text-white;
  cursor: auto;
}
</style>
