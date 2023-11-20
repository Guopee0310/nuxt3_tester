<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const goHeaderHeight = ref(0)
const windowResize = ref(null)
const windowScroll = ref(null)
const updateHeaderHeight = (header) => {
  goHeaderHeight.value = header
}
const scrollTo = (position) => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  })
}
const handleResize = (e) => {
  windowResize.value = e
}
const handlewindowScroll = (e) => {
  windowScroll.value = e
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handlewindowScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handlewindowScroll)
})
// 設置為全域範圍，需要使用inject注入
provide('goHeaderHeight', goHeaderHeight)
provide('updateHeaderHeight', updateHeaderHeight)
provide('windowResize', windowResize)
provide('windowScroll', windowScroll)
provide('scrollTo', scrollTo)
</script>

<style scoped></style>
