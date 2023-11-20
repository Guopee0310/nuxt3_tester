<template>
  <div>
    <section class="hidden bg-white py-6 lg:block">
      <div class="container flex justify-between">
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/schoolZone/toGraduateIndex.jsp?graduate_type=91"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-1.webp"
            alt="研究所"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">研究所</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3079"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-2.webp"
            alt="銀行"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">銀行</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3074"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-3.webp"
            alt="公職"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">公職</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3075"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-4.webp"
            alt="國營"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">國營</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/zone/english/toIndex.jsp"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-5.webp"
            alt="英文"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">英文</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/japanZone/toJpnIndex.jsp"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-6.webp"
            alt="日文"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">日文</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/schoolZone/university/toIndex.jsp"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-7.webp"
            alt="高升大"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">高升大</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/schoolZone/toGraduateIndex.jsp?graduate_type=92"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-8.webp"
            alt="轉學考"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">轉學考</p>
        </a>
        <a
          class="type-item"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3128"
          target="_self"
        >
          <img
            class="w-14 lg:w-20"
            src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/c-type-9.webp"
            alt="證照"
          />
          <p class="mt-[12px] text-center text-[1.25rem] text-black">證照</p>
        </a>
      </div>
    </section>
    <section class="type-block-mb block lg:hidden">
      <div class="type-mb-wrapper relative flex justify-between">
        <a
          class="inline-block h-14 grow text-center text-xl font-bold leading-[72px]"
          href="https://www.tkbgo.com.tw/schoolZone/toGraduateIndex.jsp?graduate_type=91"
          target="_self"
        >
          <span>研究所</span>
        </a>
        <a
          class="inline-block h-14 grow text-center text-xl font-bold leading-[72px]"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3079"
          target="_self"
        >
          <span>銀行</span>
        </a>
        <a
          class="inline-block h-14 grow text-center text-xl font-bold leading-[72px]"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3074"
          target="_self"
        >
          <span>公職</span>
        </a>
        <a
          class="inline-block h-14 grow text-center text-xl font-bold leading-[72px]"
          href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3075"
          target="_self"
        >
          <span>國營</span>
        </a>
        <a
          class="w-16 grow-0 bg-secondary-500 text-center text-xl font-black leading-[60px] text-white"
          data-id="1"
          @click="isProductModalShow = true"
        >
          <font-awesome-icon :icon="['fa', 'chevron-down']" />
        </a>
      </div>
      <transition name="modal">
        <div v-show="isProductModalShow">
          <div
            class="overlay point-event-auto fixed inset-0 z-10 h-full w-full bg-[rgba(0,0,0,0.3)]"
            @click="isProductModalShow = false"
          ></div>
          <div
            class="fixed z-10 w-full translate-y-[-72px] bg-white shadow-[10px_10px_25px_-5px_rgba(150,150,150,0)]"
            data-id="modal1"
          >
            <div class="modal-head flex">
              <span
                class="mx-6 inline-block h-12 grow border-b border-solid border-[#7a7a7a] text-xl font-bold leading-[60px]"
                >課程專區</span
              >
              <a
                class="type-btn-close w-16 grow-0 bg-secondary-500 text-center text-xl font-black leading-[60px] text-white"
                @click="isProductModalShow = false"
              >
                <font-awesome-icon :icon="['fa', 'chevron-up']" />
              </a>
            </div>
            <div class="modal-body px-2 py-5">
              <div class="modal-body-wrapper flex flex-wrap">
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/schoolZone/toGraduateIndex.jsp?graduate_type=91"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-1.webp"
                    alt="研究所"
                  />
                  <span>研究所</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3079"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-2.webp"
                    alt="銀行"
                  />
                  <span>銀行</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3074"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-3.webp"
                    alt="公職"
                  />
                  <span>公職</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3075"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-4.webp"
                    alt="國營"
                  />
                  <span>國營</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/zone/english/toIndex.jsp"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-5.webp"
                    alt="英文"
                  />
                  <span>英文</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/japanZone/toJpnIndex.jsp"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-6.webp"
                    alt="日文"
                  />
                  <span>日文</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/schoolZone/university/toIndex.jsp"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-7.webp"
                    alt="高升大"
                  />
                  <span>高升大</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/schoolZone/toGraduateIndex.jsp?graduate_type=92"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-8.webp"
                    alt="轉學考"
                  />
                  <span>轉學考</span>
                </a>
                <a
                  class="modal-body-item flex w-1/3 items-center py-4 pl-4 text-xl"
                  href="https://www.tkbgo.com.tw/examData/toExamList.jsp?exam_type_id=3128"
                  target="_self"
                >
                  <img
                    class="mr-2 w-4"
                    src="https://www.tkbgo.com.tw/tkbgo_newIndex/img/type-icon-9.webp"
                    alt="證照"
                  />
                  <span>證照</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isProductModalShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in;
}
.modal-enter-to,
.modal-leave-from {
  opacity: 1;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
