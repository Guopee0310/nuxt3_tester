<template>
  <div class="mb-6 flex flex-wrap items-center rounded bg-base-50 px-3 py-2">
    <div class="mr-3"><font-awesome-icon class="mr-1" :icon="['fa', 'filter']" />題目篩選</div>
    <div class="form-check-outline-aid1 mb-0">
      <input v-if="false" id="filterQuestionsPast" type="radio" name="filterQuestions" />
      <label
        for="filterQuestionsPast"
        class="mr-3 flex items-center rounded-3xl bg-secondary-500 px-3 py-2 text-sm text-white"
      >
        <span class="mr-[3px] flex h-3 w-3 items-center rounded-full bg-white">
          <font-awesome-icon class="text-secondary-500" :icon="['fa', 'check']" />
        </span>
        歷屆試題
      </label>
    </div>
    <div
      class="mt-2 flex grow flex-wrap items-center border-t border-solid border-base-200 lg:mt-0 lg:flex-nowrap lg:border-l lg:border-t-0 lg:pl-3"
    >
      <el-select v-model="select1.value" class="mt-2 w-full lg:mr-3 lg:mt-0 lg:w-auto">
        <el-option
          v-for="item in select1.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="select2.value" class="mt-2 w-full lg:mr-3 lg:mt-0 lg:w-auto">
        <el-option
          v-for="item in select2.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="select3.value" class="mt-2 w-full lg:mr-3 lg:mt-0 lg:w-auto">
        <el-option
          v-for="item in select3.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="select4.value" class="mt-2 w-full lg:mr-3 lg:mt-0 lg:w-auto">
        <el-option
          v-for="item in select4.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <ButtonS2 bg-color="bg-secondary-600" width="min-w-18" text-color="text-white" class="grow"
        >送出</ButtonS2
      >
    </div>
  </div>
</template>
<script>
import ButtonS2 from '@/components/button/ButtonS2.vue'
export default {
  components: {
    ButtonS2
  },
  data() {
    return {
      select1: {
        value: '0',
        options: [
          {
            value: '0',
            label: '考試名稱'
          },
          {
            value: '1',
            label: '篩選一'
          },
          {
            value: '2',
            label: '篩選一'
          },
          {
            value: '3',
            label: '篩選一'
          },
          {
            value: '4',
            label: '篩選一'
          },
          {
            value: '5',
            label: '篩選一'
          }
        ]
      },
      select2: {
        value: '0',
        options: [
          {
            value: '0',
            label: '考試名稱'
          },
          {
            value: '1',
            label: '篩選二'
          },
          {
            value: '2',
            label: '篩選二'
          },
          {
            value: '3',
            label: '篩選二'
          },
          {
            value: '4',
            label: '篩選二'
          },
          {
            value: '5',
            label: '篩選二'
          }
        ]
      },
      select3: {
        value: '0',
        options: [
          {
            value: '0',
            label: '考試名稱'
          },
          {
            value: '1',
            label: '篩選三'
          },
          {
            value: '2',
            label: '篩選三'
          },
          {
            value: '3',
            label: '篩選三'
          },
          {
            value: '4',
            label: '篩選三'
          },
          {
            value: '5',
            label: '篩選三'
          }
        ]
      },
      select4: {
        value: '0',
        options: [
          {
            value: '0',
            label: '考試名稱'
          },
          {
            value: '1',
            label: '篩選四'
          },
          {
            value: '2',
            label: '篩選四'
          },
          {
            value: '3',
            label: '篩選四'
          },
          {
            value: '4',
            label: '篩選四'
          },
          {
            value: '5',
            label: '篩選四'
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
:deep() {
  .el-input__inner {
    @apply rounded-none border-base-200;
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
