<template>
  <div>
    <TkbgoHeader class="fixed left-0 top-0 z-20 w-full" />
    <div class="pt-10 xl:pt-18">
      <slot />
    </div>
    <TkbgoFooter />
  </div>
</template>
<script setup>
import TkbgoFooter from '@/components/footer/TkbgoFooter'
import TkbgoHeader from '@/components/header/TkbgoHeader'
</script>
<style lang="scss"></style>
