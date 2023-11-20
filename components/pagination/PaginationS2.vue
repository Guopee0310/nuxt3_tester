<template>
  <el-pagination background layout="prev, pager, next"></el-pagination>
</template>

<style lang="scss">
.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  @apply my-0 ml-0 mr-2 h-8 w-8 leading-[40px];
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  @apply bg-primary-500;
}

.el-pager li.btn-quicknext,
.el-pager li.btn-quickprev {
  @apply hidden lg:inline-block;
}
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  @apply text-primary-500;
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  @apply pointer-events-none text-white;
}

.el-pagination.is-background .btn-next.is-active,
.el-pagination.is-background .btn-prev.is-active,
.el-pagination.is-background .el-pager li.is-active {
  @apply bg-secondary-500;
}
</style>
