<template>
  <div ref="editStyle" class="mb-5 text-lg">
    <slot></slot>
  </div>
</template>

<script>
import youtubeLazyLoad from '@/assets/js/youtube_lazyload'
import articleDirctory from '@/assets/js/article_directory'
import { accordion, collapseSop } from '@/assets/js/accordion'
import tableRwd from '@/assets/js/table.js'

export default {
  props: ['createDirectory'],
  mounted() {
    const target = this.$refs.editStyle
    articleDirctory(target, this.createDirectory)
    accordion()
    collapseSop()
    youtubeLazyLoad()
    tableRwd()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/accordion.scss';
@import '@/assets/scss/article_style.scss';
@import '@/assets/scss/article_directory.scss';
@import '@/assets/scss/table.scss';
@import '@/assets/scss/youtube_lazyload.scss';
</style>
