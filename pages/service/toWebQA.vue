<template>
  <div>
    <font-awesome-iconqSearch />
    <div class="container-sm">
      <div class="flex flex-col-reverse flex-wrap py-5 lg:flex-row lg:py-10">
        <div class="border-solid border-base-100 lg:flex-[0_1_280px] lg:border-r lg:pr-8">
          <nuxt-link to="/service/indexQA" class="mb-4 hidden items-center text-base-500 lg:flex">
            <font-awesome-icon :icon="['fa', 'house']" class="mr-1" />
            TKBGO
            <span class="mx-2 inline-block h-2 w-[1px] bg-base-500"></span>
            Help Center
          </nuxt-link>

          <el-collapse v-model="activeNames" accordion @change="handleSubChange">
            <el-collapse-item name="1">
              <template #title>
                <span>{{ activeNames === '1' ? '-' : '+' }}</span
                >選單一
              </template>
              <el-collapse v-model="activeSubNames" accordion>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
              </el-collapse>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template #title>
                <span>{{ activeNames === '2' ? '-' : '+' }}</span
                >選單一
              </template>
              <el-collapse v-model="activeSubNames" accordion>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
              </el-collapse>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template #title>
                <span>{{ activeNames === '3' ? '-' : '+' }}</span
                >選單一
              </template>
              <el-collapse v-model="activeSubNames" accordion>
                <el-collapse-item>
                  <template #title> <i class="header-icon el-icon-arrow-down"></i>選單二 </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結</nuxt-link>
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to="">連結連結連結</nuxt-link>
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item>
                  <template #title>
                    <i class="header-icon el-icon-arrow-down"></i>選單二選單二選單二選單二選單二
                  </template>
                  <ol class="list-decimal pl-7">
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                    <li class="leading-loose text-secondary-600">
                      <nuxt-link class="block text-base underline" to=""
                        >連結連結連結連結連結連結連結連結連結</nuxt-link
                      >
                    </li>
                  </ol>
                </el-collapse-item>
              </el-collapse>
            </el-collapse-item>
          </el-collapse>
        </div>
        <div class="flex-[1_1_0] lg:ml-8">
          <nuxt-link
            to="/service/indexQA"
            :class="{
              'fixed left-0 top-10 w-full bg-primary-500 py-1 !text-white': isHomeBtnFixed
            }"
            class="mb-4 block items-center text-center text-base-500 lg:hidden"
          >
            <font-awesome-icon :icon="['fa', 'house']" class="mr-1" />
            TKBGO
            <span
              :class="{ '!bg-white': isHomeBtnFixed }"
              class="mx-2 inline-block h-2 w-[1px] bg-base-500"
            ></span>
            Help Center
          </nuxt-link>
          <font-awesome-iconqPost />
          <div class="mt-12">
            <font-awesome-iconqForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FaqSearch from '@/components/views/faq/FaqSearch.vue'
import ExamScheduleCard from '@/components/card/ExamScheduleCard.vue'
import FaqPost from '@/components/post/FaqPost.vue'
import FaqForm from '@/components/form/FaqForm.vue'

export default {
  layout: 'main',
  data() {
    return {
      activeNames: '',
      activeSubNames: '',
      isHomeBtnFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollPageY)
  },
  methods: {
    handleSubChange() {
      this.activeSubNames = ''
    },
    scrollPageY() {
      console.log(window.pageYOffset)
      if (window.pageYOffset > 150) this.isHomeBtnFixed = true
      else this.isHomeBtnFixed = false
    }
  }
}
</script>
<style lang="scss" scoped>
:deep() {
  .el-collapse-item__header {
    @apply block overflow-hidden rounded bg-primary-50 text-base text-primary-600;
    > span {
      @apply mr-1 inline-block w-6 bg-primary-500 py-1 text-center text-white;
    }
  }
}
:deep() {
  .el-collapse-item__wrap {
    .el-collapse-item {
      @apply pl-7;
      .el-collapse-item__header {
        @apply bg-transparent pl-4 -indent-4 text-base-800;
        .header-icon {
          @apply w-4 font-bold duration-200 ease-in before:relative before:left-4 before:content-['\e6df'];
        }
      }

      .el-collapse-item__header.is-active {
        .header-icon {
          @apply origin-[8px] rotate-180;
        }
      }
    }
  }
}
</style>
