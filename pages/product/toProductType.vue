<template lang="">
  <ListTemplate :title="typeInfo[0].name">
    <h2 class="mb-6 font-bold text-secondary-500">精選課程 | {{ typeInfo[0].name }}</h2>
    <div class="mb-5 border-b-2 border-solid border-secondary-500">
      <span class="course-title">選擇類別</span>
    </div>
    <div class="mb-2 overflow-hidden border-b-2 border-solid border-secondary-500 pb-5">
      <ul>
        <li
          v-for="t in typeInfo[0].children"
          :key="t.id"
          class="float-left m-1 flex h-[105px] w-[210px] justify-center rounded bg-[rgba(0,0,0,.1)] text-center text-xl text-base-600 hover:bg-secondary-500 hover:text-white"
        >
          <nuxt-link
            :to="`/product/toProductList?group=${typeInfo[0].parentId}&type=${t.parentId}&kind=${t.id}`"
          >
            <span class="inline-block w-full">{{ t.name }}</span>
            <font-awesome-icon class="hidden" :icon="['font-awesome-icon', 'angle-down']" />
          </nuxt-link>
        </li>
      </ul>
    </div>
  </ListTemplate>
</template>
<script setup>
import ListTemplate from '@/components/sidebar/ListTemplate.vue'

definePageMeta({
  layout: 'main'
})

const route = useRoute()
const { group, type } = route.query

const { data: res } = await useApi('/api/subject/type/children', {
  query: {
    typeId: group
  }
})

const groupInfo = res.value.data
provide('groupInfo', groupInfo)

const typeInfo = computed(() => groupInfo.filter((item) => item.id === parseInt(type, 10)))
console.log(typeInfo)
</script>
<style lang="scss" scoped>
.course-title {
  @apply block bg-secondary-500 py-1 pl-3 text-xl text-white;
  clip-path: polygon(0 0, 110px 0, 125px 105%, 0% 105%);
}

ul > li a {
  @apply pt-8 duration-100 ease-in;
}

ul > li {
  svg {
  }
}

ul > li:hover {
  svg {
    @apply mx-auto mt-3 block text-base;
  }
  a {
    @apply pt-6;
  }
}
</style>
