<template>
    <div class="bg-white rounded border-2 border-solid border-base-100 mb-6">
       <div class="py-4 px-3 text-xl">
            <div class="flex mb-4">
               <div class="basis-5 text-right whitespace-nowrap mr-2">1.</div> 
               <div class="grow">下列何者為貨幣市場的金融工具？</div>
            </div> 
            <div>
                <slot name="OptionGroup"></slot>
            </div>
        </div> 
        <ZoneBankTestQuizFooter>
            <slot name="ButtonGroup"></slot>
        </ZoneBankTestQuizFooter>
    </div>
</template>
<script>
import ZoneBankTestQuizFooter from '@/components/views/zone/ZoneBankTestQuizFooter.vue';
export default {
   components: {
       ZoneBankTestQuizFooter
   }
}
</script>
<style lang="">
   
</style>