<template>
  <div>
    <!-- 單修 -->
    <h3 class="my-4 mt-6 font-bold text-base-800">
      <font-awesome-icon class="mr-1" :icon="['far', 'rectangle-list']" />單科
    </h3>
    <table class="w-full table-auto border-collapse text-center shadow-md">
      <thead>
        <tr>
          <th
            class="border border-solid border-secondary-500 bg-secondary-500 p-2 align-middle font-bold tracking-widest text-base-50"
            width="55%"
          >
            課程名稱
          </th>
          <th
            class="border border-solid border-secondary-500 bg-secondary-500 p-2 align-middle font-bold tracking-widest text-base-50"
            width="20%"
          >
            滿萬折千
          </th>
          <th
            class="border border-solid border-secondary-500 bg-secondary-500 p-2 align-middle font-bold tracking-widest text-base-50"
            width="15%"
          >
            價格
          </th>
          <th
            class="border border-solid border-secondary-500 bg-secondary-500 p-2 align-middle font-bold tracking-widest text-base-50"
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
              >基礎工數-雲端</a
            >
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <span> -- </span>
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            $ 7,000
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
              href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1910EM0000011"
              >工數-雲端</a
            >
            <a
              class="block underline decoration-1"
              href="https://www.tkbgo.com.tw/orders/getFSContent.jsp?shoppingcar_id=660813"
              title="所選科目"
              >所選科目與搭贈課程</a
            >
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <span> -- </span>
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            $ 22,000
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
  name: 'OneCourseTableList',
  components: {}
}
</script>
<style lang="scss" scoped></style>
