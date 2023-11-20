<template>
  <button
    type="button"
    :class="[width, height, isFavorite ? 'text-primary-500' : 'text-base-200']"
    class="flex flex-col items-center"
    @click="toggleFavorite"
  >
    <font-awesome-icon :icon="['fas', 'heart']" :class="[iconSize]" />
    <div :class="[textDisplay, textSize]">{{ isFavorite ? '已收藏' : '收藏' }}</div>
  </button>
</template>

<script setup>
defineProps({
  width: { type: String, default: 'w-8' },
  height: { type: String, default: 'h-auto' },
  textDisplay: { type: String, default: 'block' },
  iconSize: { type: String, default: 'text-3xl' },
  textSize: { type: String, default: 'text-xs' }
})

const isFavorite = ref(false)
function toggleFavorite() {
  isFavorite.value = !isFavorite.value
}
</script>
