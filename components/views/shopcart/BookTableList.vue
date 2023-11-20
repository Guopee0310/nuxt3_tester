<template>
  <div>
    <h3 class="mb-4 mt-20 font-bold text-base-800">
      <font-awesome-icon class="mr-1" :icon="['fas', 'bookmark']" />書城購物明細
    </h3>

    <table class="w-full table-auto border-collapse text-center shadow-md">
      <thead>
        <tr>
          <th
            class="border border-solid border-base-300 bg-base-100 p-2 align-middle font-bold tracking-widest"
            width="55%"
          >
            書籍
          </th>
          <th
            class="border border-solid border-base-300 bg-base-100 p-2 align-middle font-bold tracking-widest"
            width="20%"
          >
            數量
          </th>
          <th
            class="border border-solid border-base-300 bg-base-100 p-2 align-middle font-bold tracking-widest"
            width="15%"
          >
            優惠價
          </th>
          <th
            class="border border-solid border-base-300 bg-base-100 p-2 align-middle font-bold tracking-widest"
            width="10%"
          >
            刪除
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="break-words border border-solid border-base-300 px-1 py-3 align-middle">
            <a
              class="block underline decoration-1"
              href="https://www.tkbgo.com.tw/book/toBookDetail.jsp?id=2068"
              >研究所2021試題大補帖【工程數學(3)土木所、環工所】(107~109年試題)</a
            >
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-3 align-middle">2</td>
          <td class="break-words border border-solid border-base-300 px-1 py-3 align-middle">
            <span class="line-through">1000</span> -> 900
          </td>
          <td class="break-words border border-solid border-base-300 px-1 py-3 align-middle">
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
  name: 'BookTableList'
}
</script>
<style lang="scss" scoped></style>
