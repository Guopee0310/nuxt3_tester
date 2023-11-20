<template>
  <table class="table table-fixed">
    <thead>
      <tr>
        <th>共同科目</th>
        <th>專業科目</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="grid items-start gap-x-4 gap-y-3 xl:grid-cols-2">
            <a class="flex items-center justify-between rounded p-2 shadow-md" href="javascript:;">
              <div class="text-lg">國文</div>
              <div
                class="flex h-3 w-3 items-center justify-center rounded-full bg-base-300 text-xs text-white"
              >
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </a>
            <a class="flex items-center justify-between rounded p-2 shadow-md" href="javascript:;">
              <div class="text-lg">英文</div>
              <div
                class="flex h-3 w-3 items-center justify-center rounded-full bg-base-300 text-xs text-white"
              >
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </a>
          </div>
        </td>
        <td>
          <div class="grid items-start gap-x-4 gap-y-3 xl:grid-cols-2">
            <a class="flex items-center justify-between rounded p-2 shadow-md" href="javascript:;">
              <div class="text-lg">西洋文學概論</div>
              <div
                class="flex h-3 w-3 items-center justify-center rounded-full bg-base-300 text-xs text-white"
              >
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </a>
            <a class="flex items-center justify-between rounded p-2 shadow-md" href="javascript:;">
              <div class="text-lg">翻譯寫作</div>
              <div
                class="flex h-3 w-3 items-center justify-center rounded-full bg-base-300 text-xs text-white"
              >
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </a>
            <a class="flex items-center justify-between rounded p-2 shadow-md" href="javascript:;">
              <div class="text-lg">經濟學</div>
              <div
                class="flex h-3 w-3 items-center justify-center rounded-full bg-base-300 text-xs text-white"
              >
                <font-awesome-icon :icon="['fas', 'angle-right']" />
              </div>
            </a>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.table {
  @apply w-full;
}
.table th,
td {
  @apply border border-solid border-base-200 p-2;
}
.table th {
  @apply bg-base-100 font-bold;
}
</style>
