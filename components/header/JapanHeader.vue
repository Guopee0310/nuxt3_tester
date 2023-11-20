<template>
  <header class="z-50 h-10 w-full bg-base-50 shadow-[0_0px_8px_rgb(0,0,0,0.2)] lg:h-18">
    <div class="container flex h-full items-center">
      <div class="relative flex h-6 w-full justify-between lg:h-12 lg:justify-start lg:gap-3">
        <div
          class="cursor-pointer rounded border border-solid border-base-300 bg-base-50 px-2 py-1 lg:hidden"
          @click="toggleMenu"
        >
          <font-awesome-icon :icon="['fas', 'bars']" />
        </div>
        <nuxt-link class="m-auto inline-block w-auto lg:w-[180px]" to="/japanZone/toJpnIndex"
          ><img class="h-5 lg:h-auto" src="~/assets/img/japanZone/logo_tkbjpn.png" alt="JapanLogo"
        /></nuxt-link>
        <div
          v-show="showMenu"
          class="fixed left-0 top-10 h-auto w-full bg-white shadow-[0_4px_4px_rgb(0,0,0,0.1)] lg:static lg:block lg:h-full lg:bg-base-50 lg:shadow-[0_4px_4px_rgb(0,0,0,0)]"
        >
          <ul
            class="flex h-auto w-full flex-col items-center text-center lg:h-full lg:flex-row lg:gap-2 lg:text-left"
          >
            <li
              class="relative w-full cursor-pointer py-0 hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
              @click.stop="toggleSubMenu(0)"
            >
              <nuxt-link class="inline-block w-full py-2" to=""
                >探索課程<font-awesome-icon class="ml-1" :icon="['fa', 'caret-down']"
              /></nuxt-link>
              <div
                v-show="showSubMenu[0]"
                :class="{ block: showSubMenu || windowWidth > 992 }"
                class="left-0 h-auto w-full bg-base-50 lg:absolute lg:top-14 lg:rounded-b-lg lg:shadow-[0_4px_4px_rgb(0,0,0,0.1)]"
              >
                <ul class="my-0 h-auto w-full text-center lg:my-2">
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toJpnExam"
                      >JLPT/文法/</nuxt-link
                    >
                  </li>
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toJpnSolve"
                      >JLPT/解題/</nuxt-link
                    >
                  </li>
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toJpnBusiness"
                      >商用日文</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="relative w-full cursor-pointer py-0 hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
              @click.stop="toggleSubMenu(1)"
            >
              <nuxt-link class="inline-block w-full py-2" to=""
                >課程列表<font-awesome-icon class="ml-1" :icon="['fa', 'caret-down']"
              /></nuxt-link>
              <div
                v-show="showSubMenu[1]"
                :class="{ block: showSubMenu || windowWidth > 992 }"
                class="left-0 h-auto w-full bg-base-50 lg:absolute lg:top-14 lg:rounded-b-lg lg:shadow-[0_4px_4px_rgb(0,0,0,0.1)]"
              >
                <ul class="my-0 h-auto w-full text-center lg:my-2">
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toCourseList"
                      >綜合實力培養</nuxt-link
                    >
                  </li>
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toCourseList"
                      >日語檢定</nuxt-link
                    >
                  </li>
                  <li class="w-full py-2 lg:py-0">
                    <nuxt-link
                      class="inline-block min-w-20 bg-secondary-500 px-2 py-1 text-white lg:w-full lg:min-w-0 lg:bg-base-50 lg:px-0 lg:py-2 lg:text-base-500 lg:hover:bg-secondary-500 lg:hover:text-white"
                      to="/japanZone/toCourseList"
                      >主題式課程</nuxt-link
                    >
                  </li>
                </ul>
              </div>
            </li>
            <li
              class="w-full cursor-pointer hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
            >
              <nuxt-link class="inline-block w-full py-2" to="/japanZone/toJpnNewsList"
                >最新消息</nuxt-link
              >
            </li>
            <li
              class="w-full cursor-pointer hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
            >
              <nuxt-link class="inline-block w-full py-2" to="/japanZone/toJpnVideoList"
                >動画專區</nuxt-link
              >
            </li>
            <li
              class="w-full cursor-pointer hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
            >
              <nuxt-link class="inline-block w-full py-2" to="/japanZone/toExamIntro"
                >考試資訊</nuxt-link
              >
            </li>
            <li
              class="w-full cursor-pointer hover:bg-secondary-50 lg:w-auto lg:px-4 lg:py-1 lg:hover:bg-base-50"
            >
              <nuxt-link class="inline-block w-full py-2" to="">聯絡我們</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="flex w-auto items-center justify-end gap-1 lg:w-[160px]">
          <div
            class="cursor-pointer rounded border border-solid border-base-300 bg-base-50 px-2 py-1 transition duration-300 ease-in-out hover:bg-secondary-500 hover:text-white"
          >
            帳戶
          </div>
          <div
            class="cursor-pointer rounded border border-solid border-base-300 bg-base-50 px-2 py-1 transition duration-300 ease-in-out hover:bg-secondary-500 hover:text-white"
          >
            登出
          </div>
        </div>
      </div>
    </div>

    <div
      class="fixed right-0 top-1/2 translate-x-1 translate-y-4 md:-translate-y-1/2 md:translate-x-0"
    >
      <a
        href="javascript:void(0)"
        class="writing-mode-vertical-rl tracking-lg relative block h-12 w-12 rounded-full bg-secondary-500 px-2 py-4 text-lg tracking-widest text-white md:h-auto md:w-auto md:rounded-l-xl md:rounded-r-none"
        @click="openFormModal"
      >
        <img
          class="absolute left-1/2 w-10 -translate-x-1/2 -translate-y-8"
          src="~/assets/img/japanZone/home/ShibaInu-0.png"
        />
        <span class="hidden md:block">立即諮詢</span>
        <font-awesome-icon
          class="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 text-2xl md:!hidden"
          :icon="['fas', 'comment-dots']"
        />
      </a>
      <a
        href="javascript:void(0)"
        class="writing-mode-vertical-rl tracking-lg relative block h-12 w-12 translate-y-1 rounded-full bg-primary-500 px-2 py-4 text-lg tracking-widest text-white md:h-auto md:w-auto md:translate-y-0 md:rounded-l-xl md:rounded-r-none"
        @click="openInfoModal"
      >
        <span class="hidden md:block">立即購課</span>
        <font-awesome-icon
          class="absolute left-1/2 top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 text-2xl md:!hidden"
          :icon="['fas', 'cart-shopping']"
        />
      </a>
    </div>
  </header>
</template>
<script setup>
const { tailwinds } = useTailwindConfig()
const showMenu = ref(true)
const showSubMenu = reactive({
  0: false,
  1: false
})
const windowWidth = ref(0)
const menuResponsive = parseInt(tailwinds.theme.screens.lg)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}
const windowResizeEvent = inject('windowResize', ref(null))
watch(windowResizeEvent, () => {
  handleResize()
})
onMounted(() => {
  handleResize()
})
const toggleSubMenu = (buttonIndex) => {
  if (buttonIndex === 1) {
    showSubMenu[0] = false
    showSubMenu[buttonIndex] = !showSubMenu[buttonIndex]
  } else {
    showSubMenu[1] = false
    showSubMenu[buttonIndex] = !showSubMenu[buttonIndex]
  }
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value < menuResponsive) {
    showMenu.value = false
  } else {
    showMenu.value = true
  }
}
// const visible = ref(false)
// const emit = defineEmits(['openFormModalClick'])
// const openFormModal = () => {
//   visible.value = true
//   emit('openFormModalClick', visible.value)
// }

// openInfoModal() {
//   this.$nuxt.$emit('infoModalVisible', true)
// },
// openFormModal() {
//   this.$nuxt.$emit('formModalVisible', true)
// }
// export default {
//   name: 'JapanHeader',
//   data() {
//     return {
//       showMenu: false,
//       showSubMenu: {
//         0: false,
//         1: false
//       },
//       windowWidth: 0,
//       menuResponsive: parseInt(this.theme.screens.lg.replace('px', ''), 10)
//     }
//   },
//   mounted() {
//     this.handleResize() // 取到當前的螢幕寬度
//     window.addEventListener('resize', this.handleResize)

//     window.addEventListener('click', () => {
//       this.showSubMenu = {
//         0: false,
//         1: false
//       }
//     })
//   },
//   beforeUnmount() {
//     window.removeEventListener('resize', this.handleResize)
//   },
//   methods: {
//     toggleMenu() {
//       this.showMenu = !this.showMenu
//     },
//     toggleSubMenu(buttonIndex) {
//       if (buttonIndex === 1) {
//         this.showSubMenu[0] = false
//         this.showSubMenu[buttonIndex] = !this.showSubMenu[buttonIndex]
//       } else {
//         this.showSubMenu[1] = false
//         this.showSubMenu[buttonIndex] = !this.showSubMenu[buttonIndex]
//       }
//     },
//     handleResize() {
//       this.windowWidth = window.innerWidth
//       if (this.windowWidth > this.menuResponsive) {
//         this.showMenu = true
//       } else {
//         this.showMenu = false
//       }
//     },
//     openInfoModal() {
//       this.$nuxt.$emit('infoModalVisible', true)
//     },
//     openFormModal() {
//       this.$nuxt.$emit('formModalVisible', true)
//     }
//   }
// }
</script>
<style lang="scss" scoped></style>
