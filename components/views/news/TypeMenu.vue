<template>
  <div>
    <section class="mb-4 flex items-center md:block">
      <div class="flex-[1_1_0] overflow-auto">
        <ul class="flex items-center md:flex-wrap">
          <li class="mb-4 mr-2">
            <nuxtLink
              :class="typeId && !typeId2 ? 'active' : ''"
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1"
              :to="`${url}?type_id=${typeId}`"
              >全部
            </nuxtLink>
          </li>
          <li v-for="item in typeInfos" :key="item.id" class="mb-4 mr-2">
            <nuxtLink
              :to="`${url}?type_id=${typeId}&type_id2=${item.id}`"
              :class="typeId2 && typeId2 == item.id ? 'active' : ''"
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1 text-base-400"
              >{{ item.name }}
            </nuxtLink>
          </li>
        </ul>
      </div>
      <button
        type="button"
        class="mb-4 ml-1 flex-[0_1_40px] md:hidden"
        @click="dialogVisible = true"
      >
        <font-awesome-icon
          class="text-xl font-black text-secondary-500"
          :icon="['fas', 'angle-down']"
        />
      </button>
    </section>
    <el-dialog
      v-model="dialogVisible"
      top="0"
      :show-close="false"
      :fullscreen="true"
      :lock-scroll="true"
      append-to-body
      title="選項"
    >
      <div class="h-[485px] overflow-y-auto">
        <ul class="flex flex-wrap">
          <li class="mb-4 mr-2">
            <nuxtLink
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1 text-base-400"
              :to="`${url}?type_id=${typeId}`"
              >全部
            </nuxtLink>
          </li>
          <li v-for="item in typeInfos" :key="item.id" class="mb-4 mr-2">
            <nuxtLink
              :class="typeId2 && typeId2 == item.id ? 'active' : ''"
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1 text-base-400"
              :to="`${url}?type_id=${typeId}&type_id2=${item.id}`"
              >{{ item.name }}
            </nuxtLink>
          </li>
        </ul>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <button class="text-xl" @click="dialogVisible = false">關閉</button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
defineProps({
  typeInfos: {
    type: Object,
    default() {
      return {}
    }
  },
  typeId: {
    type: Number,
    default() {
      return 0
    }
  },
  typeId2: {
    type: Number,
    default() {
      return 0
    }
  },
  url: {
    type: String,
    default: ''
  }
})

const dialogVisible = ref(false)
</script>
<style lang="scss" scoped>
.active {
  @apply bg-secondary-300;
  color: #fff;
}

:deep() .el-dialog {
  @apply flex flex-col;
}

:deep() .el-dialog__header {
  @apply border-b border-solid border-base-200 p-3;
}

:deep() .el-dialog__body {
  @apply flex-[1_1_auto] overflow-auto p-3;
}

.el-dialog__footer {
  @apply border-t border-solid border-base-200 p-3;

  button {
    @apply border border-solid border-secondary-300 bg-secondary-300;
    width: 100%;
    padding: 4px 12px;
    color: #fff;
  }
}
</style>
