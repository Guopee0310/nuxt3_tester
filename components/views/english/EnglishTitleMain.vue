<template>
  <h1 class="flex gap-x-2">
    <div class="text-2xl font-bold tracking-[0.1em] sm:text-3xl">
      <slot name="title">單頁統一字數</slot>
    </div>
    <div class="w-[3px] bg-slate-300"></div>
    <div class="text-2xl font-bold text-base-500 sm:text-3xl">
      <slot name="subtitle"></slot>
    </div>
  </h1>
</template>
