<template>
    <form class="flex">
        <input type="search" class="flex-1 block text-lg leading-none bg-white rounded-l outline-0 px-3 py-2 transition duration-200 ease-in-out focus:shadow-[0_0_10px_2px] focus:shadow-primary-500 fa" placeholder="&#xf008 請輸入影片關鍵字" required>
        <button type="submit" class="flex-initial whitespace-nowrap text-sm text-white bg-secondary-900 rounded-r px-4 py-1">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" class="font-black mr-1" />
            <div class="hidden xl:inline">影片搜尋</div>
        </button>
    </form>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
@import '@fortawesome/fontawesome-svg-core/styles.css';
    .fa{
        font-family: 'Font Awesome 6 Free';
    }
</style>