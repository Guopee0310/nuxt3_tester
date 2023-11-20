<template>
    <div class="flex h-16 cursor-pointer btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 86 86" fill="none">
            <rect width="86" height="86" rx="6" fill="url(#paint0)"/>
            <path d="M69 37.8039C73 40.1133 73 45.8868 69 48.1962L34.5 68.1147C30.5 70.4241 25.5 67.5374 25.5 62.9186L25.5 23.0814C25.5 18.4626 30.5 15.5759 34.5 17.8853L69 37.8039Z" fill="white"/>
            <defs>
            <linearGradient id="paint0" x1="3" y1="4.5" x2="84" y2="80.5" gradientUnits="userSpaceOnUse">
            <stop offset="0.15" stop-color="#FEC22E"/>
            <stop offset="0.59411" stop-color="#FFF04D"/>
            <stop offset="1" stop-color="#46F0F0"/>
            </linearGradient>
            </defs>
        </svg>
        <div v-if="false" class="flex-[0_1_144px] overflow-hidden h-16">
            <img src="https://fakeimg.pl/864x483/#eee">
        </div>
        <div class="flex flex-col justify-center pl-3 flex-[1_1_0]">
            內容內容內容內容內容內容內容內容內容內容內容內容
        </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    .btn:hover {
        background: linear-gradient(90deg, #FFFFFF 35.66%, rgba(255, 255, 255, 0) 100%);
        filter: drop-shadow(-5px 0px 10px rgba(0, 0, 0, 0.15));
    }
</style>