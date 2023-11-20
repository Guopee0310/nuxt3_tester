<template>
  <div class="flex justify-end bg-secondary-800 px-3 py-1 md:block md:bg-inherit md:px-0 md:py-4">
    <div class="flex h-full gap-[1px] bg-white md:gap-x-4 md:bg-inherit">
      <button
        v-for="item in props.subMenu"
        :key="item.examName"
        type="button"
        class="inline-block bg-secondary-800 p-1 px-2 text-center text-white md:flex md:w-20 md:flex-col md:items-center md:justify-start md:rounded md:bg-white md:px-1 md:text-secondary-600 md:hover:bg-primary-500 md:hover:text-white"
        :class="item.isActive ? 'zonemenu-active' : ''"
        @click="subMenuClick(item)"
      >
        <div
          class="mb-2 hidden h-6 w-full items-end justify-center text-2xl md:flex md:h-7 md:text-3xl"
        >
          <font-awesome-icon :icon="item.examIcon" />
        </div>
        <!-- 說明：最多10個全形字 -->
        <div class="leading-5">{{ item.examName }}</div>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  subMenu: {
    type: Array,
    default: () => []
  }
})
const emit = defineEmits(['subMenuClick'])
const subMenuClick = (item) => {
  const activeItem = item
  emit('subMenuClick', activeItem)
}
</script>

<style lang="scss" scoped>
.zonemenu-active {
  @apply md:relative md:cursor-default md:bg-primary-500 md:text-white md:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.3),0_4px_6px_-4px_rgba(0,0,0,0.3)] md:after:absolute md:after:-bottom-2 md:after:h-0 md:after:w-4 md:after:border-x-[10px] md:after:border-t-[10px] md:after:border-x-transparent md:after:border-t-primary-500 md:after:content-[''];
}
</style>
