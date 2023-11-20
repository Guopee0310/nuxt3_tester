<template>
    <p :class="[textColor, textAlign]" class="text-lg">
        <slot></slot>
    </p>
</template>
<script>
export default {
    props: {
        textColor: {
            default: 'text-base-400'
        },
        textAlign: {
            default: 'text-center'
        }
    } 
}
</script>
<style lang="">
    
</style>