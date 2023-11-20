<template>
  <div>
    <h2 class="mb-1 text-2xl tracking-wider text-secondary-500 sm:mb-2 sm:text-4xl">
      <slot name="JapaneseTitle">預設日文標題</slot>
    </h2>
    <h2 class="text-2xl tracking-wider text-base-400 sm:text-4xl">
      <slot name="ChineseTitle">預設中文標題</slot>
    </h2>
  </div>
</template>
