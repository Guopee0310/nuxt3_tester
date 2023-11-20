<template>
  <div>
    <div class="bg-base-50">
      <UniversityInfoListBanner :info-type="infoType" />
      <UniversityVideoTab />
      <div class="relative">
        <main class="container py-10">
          <div class="relative z-10">
            <slot></slot>
          </div>
        </main>
      </div>
    </div>
    <div class="container">
      <UniversityCallToActionBlock>
        <p>
          TKB甄戰一點通高中影音教材，齊聚全國新生代補教名師與明星高中老師，聯手打造最完整的高中補習課程。
        </p>
        <p>108素養導向，搭配探究與實作最新課程，邀你一起成為考試常勝軍。</p>
      </UniversityCallToActionBlock>
    </div>
  </div>
</template>
<script>
import UniversityInfoListBanner from '@/components/views/university/UniversityInfoListBanner.vue'
import UniversityVideoTab from '@/components/views/university/UniversityVideoTab.vue'
import UniversityCallToActionBlock from '@/components/views/university/UniversityCallToActionBlock.vue'
export default {
  components: {
    UniversityInfoListBanner,
    UniversityVideoTab,
    UniversityCallToActionBlock
  },
  data() {
    return {
      infoType: 'video'
    }
  }
}
</script>
<style lang="scss" scoped>
main::before {
  content: '';
  right: 0;
  top: 0;
  position: absolute;
  width: 580px;
  height: 320px;
  background: url('~/assets/img/university/video-deco.svg');
}
main::after {
  content: '';
  left: 0;
  bottom: 0;
  position: absolute;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  width: 580px;
  height: 320px;
  background: url('~/assets/img/university/video-deco.svg');
}
</style>
