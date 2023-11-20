<template>
  <div :class="[padding]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  padding: { type: String, default: 'px-3 md:px-8 lg:px-16' }
})
</script>
