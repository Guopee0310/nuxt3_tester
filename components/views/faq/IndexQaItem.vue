<template>
  <div
    class="basis-full border-t border-solid border-white md:basis-1/3 md:border-none md:px-2 md:pb-6"
  >
    <div
      class="flex items-center bg-primary-500 p-2 text-white md:pointer-events-none md:rounded md:bg-primary-50 md:py-1 md:text-base-500"
      @click="toggle($event)"
    >
      >
      <img class="hidden w-6 md:block" src="~/assets/img/faq/index_icon.svg" alt="" />
      <div class="pl-1 font-semibold">會員權益說明</div>
      <font-awesome-icon
        :class="{ 'rotate-180': isShow }"
        class="ml-auto block text-white duration-200 ease-in lg:hidden"
        :icon="['fa', 'chevron-down']"
      />
    </div>
    <transition>
      <div v-show="isShow" ref="itemList" class="md:!block md:!h-auto">
        <ul class="px-4 py-2 md:block md:px-0">
          <indexQaChildItem @adjust="adjustHeight" />
          <indexQaChildItem @adjust="adjustHeight" />
          <ButtonS2 class="text-sm" padding="px-2 py-1" width="w-auto max-w-[200px]"
            >更多的14</ButtonS2
          >
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import ButtonS2 from '@/components/button/ButtonS2.vue'
import indexQaChildItem from '@/components/views/faq/indexQaChildItem.vue'
export default {
  components: {
    ButtonS2,
    indexQaChildItem
  },
  data() {
    return {
      isShow: false,
      height: 0
    }
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow
      this.$refs.itemList.style.height = 0
      this.height = 0
      if (this.isShow) {
        this.setHeight()
      }
    },
    getHeight() {
      return this.$refs.itemList.scrollHeight
    },
    setHeight() {
      this.$nextTick(() => {
        this.height = this.getHeight()
        this.$refs.itemList.style.height = this.height + 'px'
      })
    },
    adjustHeight() {
      this.height = 'auto'
      this.$refs.itemList.style.height = this.height
      this.setHeight()
    }
  }
}
</script>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
