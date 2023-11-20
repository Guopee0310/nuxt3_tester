<template>
  <nuxt-link to="" :class="[display, textAlign, textColor]">
    <slot>查看更多</slot>
    <span
      :class="[iconColor, iconBgColor]"
      class="ml-1 inline-block h-5 w-5 rounded-full text-center text-sm leading-[25px]"
    >
      <font-awesome-icon :icon="['fa', 'arrow-right']" />
    </span>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    textAlign: {
      default: 'text-right'
    },
    textColor: {
      default: 'text-base-600'
    },
    iconColor: {
      default: 'text-white'
    },
    iconBgColor: {
      default: 'bg-base-600'
    },
    display: {
      default: 'block'
    }
  }
}
</script>
<style lang="scss"></style>
