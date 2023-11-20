<template>
  <nuxt-link class="flex items-center justify-center gap-1 hover:!opacity-100 xl:justify-start">
    <div class="aspect-auto h-8 w-8 object-contain">
      <slot name="icon"></slot>
    </div>
    <div class="w-[2em] text-lg font-bold leading-5 text-base-400">
      <slot name="title">限三四字</slot>
    </div>
  </nuxt-link>
</template>

<script setup></script>
