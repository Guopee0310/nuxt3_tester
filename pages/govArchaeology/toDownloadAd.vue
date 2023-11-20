<template>
  <div>
    <ZoneTemplate>
      <ZoneTemplateWrapper class="mb-3">
        <ZoneTemplateXPadding class="mb-6">
          <a
            class="mb-3 inline-block w-full"
            href="https://www.tkbgo.com.tw/go_edm/edm383/index.jsp?print_id=798"
            target="_blank"
            ><img
              class="w-full"
              src="	https://www.tkbtv.com.tw/upload/tv_ad/2022021412013212276.webp"
          /></a>
          <hr class="mb-8" />
          <h2 class="mb-3 font-bold tracking-widest">台北捷運招考-109年</h2>
          <table class="w-full table-auto border-collapse text-center">
            <tbody>
              <tr>
                <td
                  class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  年度
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 text-left align-middle text-lg"
                >
                  109年
                </td>
              </tr>
              <tr>
                <td
                  class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  職等
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 text-left align-middle text-lg"
                >
                  109年北捷招考
                </td>
              </tr>
              <tr>
                <td
                  class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  分類
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 text-left align-middle text-lg"
                >
                  共同科目及答案
                </td>
              </tr>
              <tr>
                <td
                  class="w-[30%] border border-solid border-base-300 bg-base-200 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
                >
                  科目
                </td>
                <td
                  class="break-words border border-solid border-base-300 px-1 py-2 text-left align-middle text-lg"
                >
                  新進控制員(二)、專員(二)-論文【題目】
                </td>
              </tr>
            </tbody>
          </table>
          <!-- 需判斷登入才可下載 -->
          <div class="my-4">
            <a
              class="inline-block cursor-pointer border-b-2 border-solid border-link text-xl text-link"
              href="https://byone.tkb.com.tw/upload/file/commonSubject/20200429171122006012.pdf"
              target="_blank"
              ><fa class="mr-1" :icon="['fas', 'file-pdf']" />題目下載(PDF)</a
            >
          </div>
        </ZoneTemplateXPadding>
      </ZoneTemplateWrapper>
    </ZoneTemplate>
  </div>
</template>
<script setup>
import ZoneTemplate from '@/components/views/zone/ZoneTemplate.vue'
import ZoneTemplateWrapper from '@/components/views/zone/ZoneTemplateWrapper.vue'
import ZoneTemplateXPadding from '@/components/views/zone/ZoneTemplateXPadding.vue'
definePageMeta({
  layout: 'main'
})
zoneGraduateMenu()
</script>
<style lang="scss" scoped></style>
