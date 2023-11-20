<template>
  <div class="flex flex-wrap items-center justify-center">
    <StudentAvatar size="160px" :img-url="imgUrl" />
    <div v-if="suffixAccept && suffixGraduate" class="my-3 basis-full md:ml-8 md:flex-[0_1_500px]">
      <div
        v-for="item in suffixAcceptArr"
        :key="item"
        class="my-2 rounded-md bg-secondary-500 px-4 py-2 text-center text-xl text-white"
      >
        {{ prefixAccept }} - {{ item }}
      </div>
      <div
        v-if="suffixGraduate"
        class="my-2 rounded-md bg-secondary-50 px-4 py-2 text-center text-xl text-secondary-500"
      >
        {{ prefixGraduate }} - {{ suffixGraduate }}
      </div>
      <youtubeVideo v-if="videoUrl" :src="videoUrl" />
    </div>
  </div>
</template>
<script>
import StudentAvatar from '@/components/others/StudentAvatar.vue'
import youtubeVideo from '@/components/video/youtubeVideo.vue'
export default {
  components: {
    StudentAvatar,
    youtubeVideo
  },
  props: ['videoUrl', 'imgUrl', 'prefixAccept', 'suffixAccept', 'prefixGraduate', 'suffixGraduate'],
  computed: {
    suffixAcceptArr() {
      if (!this.suffixAccept) return
      return this.suffixAccept.split(',')
    }
  }
}
</script>
<style lang="scss"></style>
