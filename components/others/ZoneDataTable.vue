<template>
  <div>
    <table class="w-full table-auto border-collapse text-center">
      <thead>
        <tr>
          <th
            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
          >
            考試<br class="block md:hidden" />資訊
          </th>
          <!-- <th class="text-lg border-solid border border-base-300 bg-base-300 text-base-800 tracking-widest font-bold align-middle p-2">最新<br class="block md:hidden">消息</th> -->
          <th
            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
          >
            預定<br class="block md:hidden" />報名日期
          </th>
          <th
            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
          >
            預定<br class="block md:hidden" />考試日期
          </th>
          <th
            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
          >
            簡章<br class="block md:hidden" />下載
          </th>
          <th
            class="border border-solid border-base-300 bg-base-300 p-2 align-middle text-lg font-bold tracking-widest text-base-800"
          >
            考古<br class="block md:hidden" />題
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            <nuxt-link
              :to="`/examData/toIntroduction?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
              class="block text-lg text-link decoration-1 underline-offset-2"
              >{{ item.examName }}</nuxt-link
            >
          </td>
          <!-- <td class="break-words py-2 px-1 align-middle border-solid border border-base-300 max-w-[200px]" v-if="item.newlink"><nuxt-link to=item.newlink class="block underline decoration-1 underline-offset-2 text-lg">{{item.newname}}</nuxt-link></td>
                <td class="break-words py-2 px-1 align-middle border-solid border border-base-300" v-else>尚無最新消息</td> -->
          <td
            v-if="item.applicationBeginDate !== ''"
            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
          >
            {{ item.applicationBeginDate }}<br class="block md:hidden" />~<br
              class="block md:hidden"
            />{{ item.applicationEndDate }}
          </td>
          <td v-else class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            尚未公告
          </td>
          <td
            v-if="item.examBeginDate !== ''"
            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
          >
            {{ item.examBeginDate }}
          </td>
          <td v-else class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            尚未公告
          </td>
          <td
            v-if="item.examId !== ''"
            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
          >
            <nuxt-link
              :to="`/examData/toExamDowloadRegulation?exam_data_id=${item.examId}&exam_type_id=${examTypeId}`"
              class="text-link"
              >下載頁</nuxt-link
            >
          </td>
          <td v-else class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            準備中
          </td>
          <td
            v-if="item.year !== ''"
            class="break-words border border-solid border-base-300 px-1 py-2 align-middle"
          >
            <nuxt-link
              :to="`/govArchaeology/toDownloadDetail?seqno=72&yy=${item.year}&exam_type_id=${examTypeId}`"
              class="text-primary-500"
              ><font-awesome-icon :icon="['fas', 'download']"
            /></nuxt-link>
          </td>
          <td v-else class="break-words border border-solid border-base-300 px-1 py-2 align-middle">
            準備中
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
defineProps({
  tableData: {
    type: Object,
    default: null
  }
})
</script>
