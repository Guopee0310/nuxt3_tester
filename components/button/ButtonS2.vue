<template>
  <button
    :class="[padding, margin, bgColor, textColor, minWidth, width, weight, borderCss]"
    class="inline-block rounded text-center duration-150 ease-in hover:opacity-90"
  >
    <slot>預設按鈕</slot>
  </button>
</template>

<script setup>
defineProps({
  padding: { type: String, default: 'px-3 py-2' },
  margin: { type: String, default: 'my-2' },
  textColor: { type: String, default: 'text-white' },
  bgColor: { type: String, default: 'bg-primary-500' },
  minWidth: { type: String, default: 'min-w-18' },
  width: { type: String, default: 'w-full md:w-auto' },
  weight: { type: String, default: 'font-bold' },
  borderCss: { type: String, default: '' }
})
</script>
