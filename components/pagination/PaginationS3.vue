<template>
  <el-pagination
    class="inline-block px-0 py-2 align-middle"
    background
    layout="prev, pager, next"
    :page-size="size"
    :total="80"
    :pager-count="5"
  >
  </el-pagination>
</template>
<script>
export default {
  props: {
    size: {
      type: Number,
      defalut: 6
    }
  }
}
</script>
<style lang="scss">
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  @apply h-8 w-8 bg-base-100 text-center font-normal leading-[40px] text-base-800;
}

.el-pager .more:before {
  @apply leading-normal;
}

.el-pagination.is-background .el-pager li {
  @apply m-0;
}

.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev {
  @apply rounded-full border-2 border-solid border-secondary-500 bg-white text-black;
}

.el-pagination.is-background .btn-prev:disabled,
.el-pagination.is-background .btn-next:disabled {
  @apply hidden;
}

.el-pagination.is-background .btn-next {
  @apply ml-2;
}

.el-pagination.is-background .btn-prev {
  @apply mr-2;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  @apply pointer-events-none bg-secondary-500 text-white text-white;
}

.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
  @apply hidden lg:inline-block;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  @apply text-secondary-500;
}
</style>
