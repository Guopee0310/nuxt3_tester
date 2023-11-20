<template>
  <ListTemplate title="學員心得">
    <template #buttonText>心得分類</template>
    <table class="mb-5 h-6 w-full">
      <tbody>
        <tr>
          <th width="100px" class="bg-base-200 align-middle font-bold text-base-800">分類細項</th>
          <td>
            <el-select v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </td>
        </tr>
      </tbody>
    </table>
    <a href="" class="flex items-start border-b border-solid border-base-200 py-3">
      <div class="relative mr-2 flex-[0_1_90px]">
        <img src="https://www.tkbtv.com.tw/upload/comment_pic/20220930141114158023.png" alt="" />
        <div class="absolute bottom-0 right-1 flex h-4 w-4 items-center justify-center bg-white">
          <font-awesome-icon class="text-3xl text-primary-500" :icon="['fab', 'youtube']" />
        </div>
      </div>
      <div class="flex-[1_1_0]">
        <h3 class="text-lg font-bold">研究所考試心得〡111年考取台科大電子所_葉O瑋</h3>
        <p class="line-clamp-3 text-base-500">
          原學校考取學校考研的心路歷程每天把該做的做好，自律過好的每一天，只要成為習慣，要上榜一定沒問題。我是透過班上同學介紹報名的，本來因為在校成績不佳，本來沒想過要考研究所，但在同學鼓勵下與參加大碩舉辦的講座，因此才打算給自己一個機會努力看看。現在往回看會非常慶幸當初有準備要考研究所，雖然一開始會害怕去補習還是跟不上別人的腳步導致浪費了更多的時間與金錢，但大碩的老師教學技巧都非常棒，由淺入深的方式讓我在學習上不造成困擾。研究所考試準備不會到很長，是每天要把該做的事、該看的書做好就好，只要有自律的過好每天，只要當成習慣，要上榜一定沒問題，準備期間偶爾也會很煩想放棄，適當得抒發壓力也很重要。有同學一起準備會更好，「大家拉著彼此比較不會頹廢，且不會的題目可以互相討論」，大碩的老師也都會看同學比較沒力時候鼓勵同學，讓我能順利撐完研究所考試。
        </p>
      </div>
    </a>
    <a href="" class="flex items-start border-b border-solid border-base-200 py-3">
      <div class="relative mr-2 flex-[0_1_90px] items-start">
        <img src="https://www.tkbtv.com.tw/upload/comment_pic/20220930141114158023.png" alt="" />
        <div class="absolute bottom-0 right-1 flex h-4 w-4 items-center justify-center bg-white">
          <font-awesome-icon class="text-3xl text-primary-500" :icon="['fab', 'youtube']" />
        </div>
      </div>
      <div class="flex-[1_1_0]">
        <h3 class="text-lg font-bold">研究所考試心得〡111年考取台科大電子所_葉O瑋</h3>
        <p class="line-clamp-3 text-base-500">
          原學校考取學校考研的心路歷程每天把該做的做好，自律過好的每一天，只要成為習慣，要上榜一定沒問題。我是透過班上同學介紹報名的，本來因為在校成績不佳，本來沒想過要考研究所，但在同學鼓勵下與參加大碩舉辦的講座，因此才打算給自己一個機會努力看看。現在往回看會非常慶幸當初有準備要考研究所，雖然一開始會害怕去補習還是跟不上別人的腳步導致浪費了更多的時間與金錢，但大碩的老師教學技巧都非常棒，由淺入深的方式讓我在學習上不造成困擾。研究所考試準備不會到很長，是每天要把該做的事、該看的書做好就好，只要有自律的過好每天，只要當成習慣，要上榜一定沒問題，準備期間偶爾也會很煩想放棄，適當得抒發壓力也很重要。有同學一起準備會更好，「大家拉著彼此比較不會頹廢，且不會的題目可以互相討論」，大碩的老師也都會看同學比較沒力時候鼓勵同學，讓我能順利撐完研究所考試。
        </p>
      </div>
    </a>
    <ButtonDisplayMore />
  </ListTemplate>
</template>
<script>
import ListTemplate from '@/components/sidebar/ListTemplate.vue'
import ButtonDisplayMore from '@/components/button/ButtonDisplayMore'
export default {
  components: {
    ListTemplate,
    ButtonDisplayMore
  },
  layout: 'main',
  data() {
    return {
      options: [
        {
          value: '0',
          label: '顯示全部'
        },
        {
          value: '1',
          label: '選項1'
        },
        {
          value: '2',
          label: '選項2'
        },
        {
          value: '3',
          label: '選項3'
        },
        {
          value: '4',
          label: '選項4'
        },
        {
          value: '5',
          label: '選項5'
        }
      ],
      value: '0'
    }
  }
}
</script>
<style lang="scss" scoped>
:deep() {
  .el-select {
    @apply w-full;
  }

  .el-input__inner {
    @apply rounded-none border-base-300;
  }

  .el-range-editor.is-active,
  .el-range-editor.is-active:hover,
  .el-select .el-input.is-focus .el-input__inner {
    @apply border-primary-500;
  }

  .el-select .el-input__inner:focus {
    @apply border-primary-500;
  }
}

.el-select-dropdown__item.selected {
  @apply text-primary-500;
}
</style>
