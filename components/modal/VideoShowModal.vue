<template>
  <el-dialog
    :visible="isVisible"
    class="video-dialog"
    :append-to-body="true"
    :lock-scroll="true"
    destroy-on-close
  >
    <el-scrollbar class="h-full">
      <div class="aspect-video w-full">
        <iframe
          width="100%"
          height="100%"
          :src="videoSrc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </el-scrollbar>
  </el-dialog>
</template>
<script setup>
defineProps({
  videoSrc: {
    type: String,
    default: ''
  },
  isVisible: {
    type: Boolean,
    default: true
  }
})
</script>
<style lang="scss">
.el-dialog__title {
  @apply inline-block max-w-[96%] break-words;
}
.el-overlay-dialog {
  @apply box-border flex items-center justify-center;
}
.video-dialog {
  @apply m-0 flex w-full flex-col md:h-auto md:w-[760px] xl:w-[1100px];
}
</style>
