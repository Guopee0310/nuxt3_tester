<template>
  <div>
    <!-- 側邊按鈕 start -->
    <div class="fixed right-0 top-1/2 z-50 md:-translate-y-1/2">
      <button
        type="button"
        class="relative mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-secondary-500 text-white hover:bg-secondary-600 md:mb-0 md:h-auto md:w-auto md:rounded-l-xl md:rounded-r-none md:px-2 md:py-4"
        @click="isEnglishFormModal = true"
      >
        <img
          class="absolute inset-x-2 -top-1/2 md:inset-x-1 md:-top-1/4"
          src="@/assets/img/tkbgo_english/servcat.svg"
        />
        <span
          v-if="windowWidth >= breakpointsInt('md')"
          class="writing-mode-vertical-rl text-lg tracking-widest"
          >立即諮詢</span
        >
        <span v-if="windowWidth < breakpointsInt('md')" class="text-2xl">
          <font-awesome-icon :icon="['fas', 'comment-dots']" />
        </span>
      </button>
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 px-2 py-4 text-white hover:bg-primary-600 md:h-auto md:w-auto md:rounded-l-xl md:rounded-r-none"
        @click="isEnglishInfoModal = true"
      >
        <span
          v-if="windowWidth >= breakpointsInt('md')"
          class="writing-mode-vertical-rl text-lg tracking-widest"
          >立即購課</span
        >
        <span v-if="windowWidth < breakpointsInt('md')" class="text-2xl">
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </span>
      </button>
    </div>
    <!-- 側邊按鈕 end -->
    <!-- 諮詢跳窗 start -->
    <DefaultLgModal
      v-model="isEnglishFormModal"
      class="dialog-secondary h-full overflow-clip md:h-[800px]"
      :is-header="true"
    >
      <template #header>
        <div class="text-center text-2xl tracking-widest">立即諮詢</div>
      </template>
      <template #content>
        <el-scrollbar>
          <PublicForm />
        </el-scrollbar>
      </template>
    </DefaultLgModal>
    <!-- 諮詢跳窗 end -->
    <!-- 購課跳窗 start -->
    <DefaultLgModal
      v-model="isEnglishInfoModal"
      class="dialog-primary h-full overflow-clip md:h-auto"
      :is-header="true"
    >
      <template #header>
        <div class="text-center text-2xl tracking-widest">立即購課</div>
      </template>
      <template #content>
        <el-scrollbar>
          <div class="flex flex-col gap-8">
            <div v-for="item in courseData" :key="item.name" class="flex flex-col gap-4">
              <div
                class="border-b border-solid border-base-200 pb-2 text-xl font-semibold tracking-widest"
              >
                {{ item.name }}
              </div>
              <div v-for="item2 in item.sort1" :key="item2.name" class="grid lg:grid-cols-8">
                <div class="py-1 text-lg">{{ item2.name }}</div>
                <div class="flex flex-wrap items-start gap-2 lg:col-span-7">
                  <ButtonS4 v-for="item3 in item2.sort2" :key="item3.name" :to="item3.toSrc">{{
                    item3.name
                  }}</ButtonS4>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </template>
    </DefaultLgModal>
    <!-- 購課跳窗 end -->
  </div>
</template>

<script setup>
import DefaultLgModal from '@/components/modal/DefaultLgModal.vue'
import PublicForm from '@/components/form/PublicForm.vue'
import ButtonS4 from '@/components/button/ButtonS4.vue'
const { breakpointsInt } = useTailwindConfig()
const windowWidth = ref(0)
const isEnglishFormModal = ref(false) // 諮詢跳窗是否顯示
const isEnglishInfoModal = ref(false) // 購課跳窗是否顯示
// 購課跳窗內容 start
const courseData = reactive([
  {
    name: '英文證照課程',
    sort1: [
      {
        name: '多益',
        sort2: [
          {
            name: '多益入門先修班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100623'
          },
          {
            name: '多益題庫班',
            toSrc: '/product/toProductDetail?subject_no=V2113ENG000008'
          },
          {
            name: '多益實戰班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100635'
          },
          {
            name: '多益全攻略',
            toSrc: '/product/toProductDetail?f_subject_no=F2100634'
          }
        ]
      },
      {
        name: '托福',
        sort2: [
          {
            name: '托福實戰班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100049'
          },
          {
            name: '托福刷題寫作班',
            toSrc: '/product/toProductDetail?subject_no=S2013ENG000009'
          },
          {
            name: '托福背景知識素養班',
            toSrc: '/product/toProductDetail?subject_no=S2013ENG000014'
          }
        ]
      },
      {
        name: '雅思',
        sort2: [
          {
            name: '雅思精修班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100394'
          }
        ]
      },
      {
        name: 'GRE',
        sort2: [
          {
            name: 'GRE實戰班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100243'
          }
        ]
      }
    ]
  },
  {
    name: '增強英文實力',
    sort1: [
      {
        name: '研究所英文',
        sort2: [
          {
            name: '研究所英文全修班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100560'
          },
          {
            name: '研究所英文衝刺班',
            toSrc: '/product/toProductDetail?subject_no=V2101ENG000014'
          },
          {
            name: '研究所英文口面試',
            toSrc: '/product/toProductDetail?subject_no=V2101ENG000023'
          }
        ]
      },
      {
        name: '商務英文',
        sort2: [
          {
            name: '商務英文全修班',
            toSrc: '/product/toProductDetail?f_subject_no=F2100373'
          },
          {
            name: '求職履歷面試',
            toSrc: '/product/toProductDetail?subject_no=V2110ENG000030'
          },
          {
            name: '會議簡報銷售',
            toSrc: '/product/toProductDetail?subject_no=V2110ENG000031'
          },
          {
            name: '書信口語表達',
            toSrc: '/product/toProductDetail?subject_no=V2110ENG000032'
          }
        ]
      },
      {
        name: '英文文法',
        sort2: [
          {
            name: '初中階文法',
            toSrc: '/product/toProductDetail?f_subject_no=V2110ENG000028'
          },
          {
            name: '高階文法',
            toSrc: '/product/toProductDetail?f_subject_no=V2110ENG000029'
          },
          {
            name: '文法全修',
            toSrc: '/product/toProductDetail?f_subject_no=F1600481'
          }
        ]
      }
    ]
  }
])
// 購課跳窗內容 end
const handleResize = () => {
  windowWidth.value = window.innerWidth
}
const windowResizeEvent = inject('windowResize', ref(null))
watch(windowResizeEvent, () => {
  handleResize()
})
onMounted(() => {
  handleResize()
})
</script>

<style lang="scss">
.dialog-secondary .el-dialog__header {
  @apply mr-0 bg-secondary-500 text-white;
  .el-icon svg path {
    @apply fill-white;
  }
}
.dialog-primary .el-dialog__header {
  @apply mr-0 bg-primary-500 text-white;
  .el-icon svg path {
    @apply fill-white;
  }
}
</style>
