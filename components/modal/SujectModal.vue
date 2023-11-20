<template>
  <el-dialog
    class="suject-dialog"
    width="80%"
    :append-to-body="true"
    :visible="visible"
    :lock-scroll="true"
  >
    <slot>
      <h2 class="mb-2 text-2xl font-medium tracking-[3px] text-base-800">
        善用投考組合 上榜機會提升好幾倍！
      </h2>
      <p class="mb-4 text-lg leading-5">
        將考科相同、或類似的國家考試匯整，讓考生有多次考取的機會！一般行政考生，建議可由高考開始準備，因為高考涵蓋的科目較廣較深，加上普考與高考舉行的日子並不重疊，可同時報考增加上榜機會，考生可參考下表，準備起來更加輕鬆。
      </p>
    </slot>

    <h3 class="mb-4 text-2xl font-medium tracking-[3px]">
      <span class="text-primary-500">新聞/傳播類</span>科目說明
    </h3>
    <div class="mb-3 text-2xl font-medium tracking-[3px] text-primary-900">
      <font-awesome-icon class="mr-3" :icon="['fas', 'square-pen']" />高考 普考
    </div>
    <div class="table-wrapper">
      <table class="w-full">
        <tbody class="text-center">
          <tr>
            <th
              class="border border-solid border-base-300 bg-base-300 px-1 py-2 align-middle text-lg font-medium text-base-800"
            >
              考試名稱
            </th>
            <th
              class="border border-solid border-base-300 bg-base-300 px-1 py-2 align-middle text-lg font-medium text-base-800"
            >
              考試類別
            </th>
            <th
              class="border border-solid border-base-300 bg-base-300 px-1 py-2 align-middle text-lg font-medium text-base-800"
              colspan="6"
            >
              應試專業科目
            </th>
          </tr>
          <tr>
            <td class="border border-solid border-base-300 bg-base-200 align-middle text-lg">
              高考
            </td>
            <td class="border border-solid border-base-300 align-middle text-lg">新聞</td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907TN0000003&class_type=I&group=7&type=10&kind=26"
                >新聞學</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911IDC000001&class_type=I&group=7&type=10&kind=26"
                >國際傳播與國際現勢</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >傳播理論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg"></td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >新聞英文</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=%E8%8B%B1%E6%96%87-%E9%9B%B2%E7%AB%AF&subject_no=V1903ENG000115&class_type=I"
                >英文</a
              >
            </td>
          </tr>
          <tr>
            <td class="border border-solid border-base-300 bg-base-200 align-middle text-lg">
              普考
            </td>
            <td class="border border-solid border-base-300 align-middle text-lg">新聞</td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907TN0000003&class_type=I&group=7&type=10&kind=26"
                >新聞學</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911IDC000001&class_type=I&group=7&type=10&kind=26"
                >國際傳播與國際現勢</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >傳播理論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >民意與公共關係學概論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >新聞英文</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=%E8%8B%B1%E6%96%87-%E9%9B%B2%E7%AB%AF&subject_no=V1903ENG000115&class_type=I"
                >英文</a
              >
            </td>
          </tr>
          <tr>
            <td
              class="border border-solid border-base-300 bg-base-200 align-middle text-lg"
              rowspan="4"
            >
              地方特考
            </td>
            <td class="border border-solid border-base-300 align-middle text-lg">新聞</td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907TN0000003&class_type=I&group=7&type=10&kind=26"
                >新聞學</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911IDC000001&class_type=I&group=7&type=10&kind=26"
                >國際傳播與國際現勢</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >傳播理論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >民意與公共關係學概論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >新聞英文</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=%E8%8B%B1%E6%96%87-%E9%9B%B2%E7%AB%AF&subject_no=V1903ENG000115&class_type=I"
                >英文</a
              >
            </td>
          </tr>
          <tr>
            <td class="border border-solid border-base-300 align-middle text-lg">新聞</td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1907TN0000003&class_type=I&group=7&type=10&kind=26"
                >新聞學</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V1911IDC000001&class_type=I&group=7&type=10&kind=26"
                >國際傳播與國際現勢</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >傳播理論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >民意與公共關係學概論</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?f_subject_no=F1700085&subject_no=&class_type=I&group=7&type=10&kind=26"
                >新聞英文</a
              >
            </td>
            <td class="w-[11.6%] border border-solid border-base-300 p-1 align-middle text-lg">
              <a
                class="text-link"
                href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=%E8%8B%B1%E6%96%87-%E9%9B%B2%E7%AB%AF&subject_no=V1903ENG000115&class_type=I"
                >英文</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </el-dialog>
</template>

<script setup>
defineProps({
  visible: Boolean
})
</script>

<style lang="scss">
.suject-dialog {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: calc(100% - 30px);
  max-width: calc(100% - 30px);
  .table-wrapper {
    overflow: auto;
    max-height: 50vh;
  }
  .el-dialog__body {
    overflow: hidden;
  }
  .dialog-footer {
    height: 20px;
  }
}
</style>
