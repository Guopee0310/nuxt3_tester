<template>
  <div
    :class="[fontSize, padding, margin, bgColor, width]"
    class="inline-block cursor-pointer rounded-3xl text-center text-xl font-bold text-white shadow-lg duration-200 ease-in-out hover:opacity-80"
  >
    <slot>預設按鈕</slot>
    <span
      class="animated ml-1 inline-block h-4 w-4 rounded-full bg-white text-center text-sm leading-[20px] text-base-500"
    >
      <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </span>
  </div>
</template>
<script>
export default {
  props: {
    padding: { default: 'px-6 py-2' },
    bgColor: { default: 'bg-secondary-500' },
    width: { default: 'w-auto' },
    margin: { default: 'my-4' },
    fontSize: { default: 'text-lg' }
  }
}
</script>
<style lang="scss" scoped>
.animated {
  animation: bounce_horizontal 1.2s infinite alternate;
}

@keyframes bounce_horizontal {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(8px);
  }
  35% {
    transform: translateX(0px);
  }
}
</style>
