<template>
    <div class="flex flex-wrap gap-2 mb-4">
        <div class="page-current w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-Answered">1</div>
        <div class="page-mark w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-Answered">2</div>
        <div class="page-answered w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-mark">3</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-mark">4</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-current">5</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer topic-page-item-mark">6</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer ">7</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer ">8</div>
        <div class="w-8 h-8 rounded text-center leading-[40px] border border-solid border-base-200 cursor-pointer ">9</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .page-current {
        @apply text-white bg-secondary-600 border-secondary-600;
    }
    .page-mark {
        @apply text-white bg-primary-400 border-primary-400;
    }
    .page-answered {
        @apply text-white bg-secondary-200 border-secondary-300;
    }
</style>