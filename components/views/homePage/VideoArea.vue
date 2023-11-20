<template>
  <!-- video-block  start -->
  <section class="mb-[150px] bg-secondary-500 py-6 md:mb-auto">
    <div class="container flex flex-col-reverse items-center justify-between md:flex-row-reverse">
      <div
        class="-mb-[120px] w-full bg-white px-2 py-2 shadow-[10px_10px_25px_-5px_rgba(50,50,50,0.3)] md:-ml-10 md:mb-0 md:w-1/2 md:py-6"
      >
        <div class="flex flex-col md:pl-16 md:pr-6 md:pt-6">
          <a
            v-for="video in videoData"
            :key="video.id"
            class="mb-3 flex items-center"
            :href="video.url"
            @click.prevent="tempVideo = video"
          >
            <div class="relative mr-3 flex-[1_0_40%]">
              <img :src="video.picture" :alt="video.title" />
            </div>
            <div>
              <h3 class="line-clamp-2 text-base text-black lg:text-xl">
                {{ video.title }}
              </h3>
            </div>
          </a>
        </div>
        <div class="my-2 flex justify-end lg:pr-6">
          <ButtonS2>
            <nuxtLink class="inline-block h-full w-full" to="/video/toVideoIndex" target="_blank">
              <span>more</span>
            </nuxtLink>
          </ButtonS2>
        </div>
      </div>
      <div class="z-10 flex w-full flex-col py-4 md:w-[70%]">
        <div class="mb-4">
          <img
            class="vdm-logo max-w-[200px]"
            src="~/assets/img/home_page/video-logo.webp"
            alt="tkbgo-logo"
          />
        </div>
        <div class="mb-2 flex flex-col justify-start">
          <div class="mb-2 shadow-[10px_10px_25px_-5px_rgba(50,50,50,.3)]">
            <youtubeVideo :src="tempVideo.url" />
          </div>
          <div class="md:pr-20">
            <h3 class="text-xl font-bold text-black">
              {{ tempVideo.title }}
            </h3>
          </div>
        </div>
        <div>
          <div
            class="line-clamp-1 max-w-[520px] rounded-2xl bg-[#f1e452] px-2 leading-[1.8] text-secondary-800 md:w-[calc(100%_-_50px)]"
          >
            <nuxtLink
              v-for="(tag, index) in tempVideo.tags"
              :key="index"
              :to="`/video/toVideoList?s_name=${tag}`"
              class="vdm-tag"
              ># {{ tag }}</nuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import ButtonS2 from '../../button/ButtonS2.vue'
import youtubeVideo from '@/components/video/youtubeVideo'
const { data: res } = await useApi('/api/video/index-videos')
const videoData = res.value.data
const tempVideo = ref()
tempVideo.value = videoData[0]
</script>
<style lang="scss"></style>
