<template>
    <div>
        <UniversityInfoListBanner :infoType="infoType" />
        <div class="container py-10">
            <UniversityPostTabs :tabs="['最新消息', '文章專區', '講座資訊', '學員心得']" />
            <UniversityPostList></UniversityPostList>
            <div class="text-center mt-10">
                <PaginationS3 />
            </div>
            <UniversityCallToActionBlock>
                <p>超過5000素養題庫，由600位老師共同命題，涵蓋10項學測主要考科。</p>
                <p>TKB甄戰一點通高中數位教材，購課即贈全新素養練習題：</p>
            </UniversityCallToActionBlock>
        </div>

    </div>
</template>
<script>
import UniversityInfoListBanner from '@/components/views/university/UniversityInfoListBanner.vue';
import UniversityPostTabs from '@/components/views/university/UniversityPostTabs.vue';
import UniversityPostList from '@/components/views/university/UniversityPostList.vue';
import UniversitySubTitle from '@/components/views/university/UniversitySubTitle.vue';
import PaginationS3 from '@/components/pagination/PaginationS3.vue';
import UniversityCallToActionBlock from '@/components/views/university/UniversityCallToActionBlock.vue';
export default {
    layout: 'university',
    data() {
        return {
            infoType: 'news'
        }
    },
    components: {
        UniversityInfoListBanner,
        UniversityPostTabs,
        UniversityPostList,
        UniversitySubTitle,
        PaginationS3,
        UniversityCallToActionBlock
    }
}
</script>
<style lang="">
    
</style>