<template>
  <li class="list-none">
    <a href="javascript:void(0)" :class="classname" @click="scrollToTarget()"
      ><font-awesome-icon class="mr-1 text-lg" :icon="icon" />{{ name }}</a
    >
  </li>
</template>

<script setup>
const props = defineProps({
  classname: { type: String, default: 'text-link' },
  icon: { type: Array, default: () => ['fa', 'caret-down'] },
  name: { type: String, default: '錨點名稱' },
  getTarget: { type: Function, default: null }
})
const goheaderHeight = inject('goHeaderHeight')
const scrollTo = inject('scrollTo')

const scrollToTarget = () => {
  const target = props.getTarget()
  const headerHeight = goheaderHeight.value
  const scrollPosition = target.offsetTop - headerHeight
  scrollTo(scrollPosition)
}
</script>
