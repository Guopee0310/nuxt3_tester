<template>
    <h2 :class="[textColor, textAlign]" class="text-3xl font-bold"><slot>這是高升大預設標題</slot></h2>
</template>
<script>
export default {
    props: {
        textColor: {
            default: 'text-secondary-600'
        },
        textAlign: {
            default: 'text-center'
        }
    }
}
</script>
<style lang="">
    
</style>