<template>
  <button
    type="button"
    :class="[width, height, padding, lineHeight, isFavorite ? 'bg-primary-500' : 'bg-base-200']"
    class="flex items-center justify-center gap-1 whitespace-nowrap rounded text-white"
    @click="toggleFavorite"
  >
    <div>{{ isFavorite ? '已收藏' : '收藏' }}</div>
    <font-awesome-icon :icon="['fas', 'heart']" :class="[iconSize]" />
  </button>
</template>

<script setup>
defineProps({
  width: { type: String, default: 'w-19' },
  height: { type: String, default: 'h-auto' },
  padding: { type: String, default: 'py-2' },
  lineHeight: { type: String, default: 'leading-none' }
})

const isFavorite = ref(false)
function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>
