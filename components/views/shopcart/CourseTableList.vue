<template>
  <div>
    <!-- 全修 -->
    <h3 class="mb-4 mt-6 font-bold text-base-800">
      <font-awesome-icon class="mr-1" :icon="['far', 'rectangle-list']" />全修
    </h3>
    <table class="w-full table-auto border-collapse text-center shadow-md">
      <thead>
        <tr>
          <th
            class="border border-solid border-sky-600 bg-sky-600 p-2 align-middle font-bold tracking-widest text-base-50"
            width="55%"
          >
            課程名稱
          </th>
          <th
            class="border border-solid border-sky-600 bg-sky-600 p-2 align-middle font-bold tracking-widest text-base-50"
            width="20%"
          >
            挑選科目與搭贈
          </th>
          <th
            class="border border-solid border-sky-600 bg-sky-600 p-2 align-middle font-bold tracking-widest text-base-50"
            width="15%"
          >
            價格
          </th>
          <th
            class="border border-solid border-sky-600 bg-sky-600 p-2 align-middle font-bold tracking-widest text-base-50"
            width="10%"
          >
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <a
              class="block underline decoration-1"
              href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2100439"
              >高考/三等-環保技術共同科目-雲端</a
            >
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <el-button
              class="rounded border border-solid border-sky-600 px-[7px] py-[5px] text-sky-600"
              @click="openModal('F2100439')"
              ><font-awesome-icon :icon="['fas', 'list-check']"
            /></el-button>
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            $ 29,500
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <a class="rounded border border-solid px-[8px] py-[5px]" href=""
              ><font-awesome-icon :icon="['far', 'trash-can']"
            /></a>
          </td>
        </tr>
        <tr>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <a
              class="block underline decoration-1"
              href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F2100439"
              >研究所-材料所(三科)-雲端
            </a>
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <el-button
              class="rounded border border-solid border-sky-600 px-[7px] py-[5px] text-sky-600"
              @click="openModal('F2100430')"
              ><font-awesome-icon :icon="['fas', 'list-check']"
            /></el-button>
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            $ 29,500
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <a class="rounded border border-solid px-[8px] py-[5px]" href=""
              ><font-awesome-icon :icon="['far', 'trash-can']"
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CourseTableList',
  methods: {
    openModal(event) {
      this.$emit('openModal', event)
    }
  }
}
</script>
<style lang="scss" scoped></style>
