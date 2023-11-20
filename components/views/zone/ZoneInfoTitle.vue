<template>
  <h2
    class="relative mb-3 after:absolute after:top-1/2 after:ml-2 after:h-[2px] after:w-[45px] after:bg-primary-500 after:content-['']"
  >
    {{ titlename }}
  </h2>
</template>
<script setup>
defineProps({
  titlename: { type: String, default: '' }
})
</script>
