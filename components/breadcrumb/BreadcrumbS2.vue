<template>
  <el-breadcrumb class="leading-relaxed" separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="(item, index) in content"
      :key="item.path"
      :to="item.path ? item.path : ''"
    >
      <font-awesome-icon
        v-if="index === 0"
        class="mr-1 text-white"
        :icon="['fas', 'house-chimney']"
      />{{ item.name }}</el-breadcrumb-item
    >
  </el-breadcrumb>
</template>

<script setup>
defineProps({
  content: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss" scoped>
:deep() .el-breadcrumb__inner.is-link,
:deep() .el-breadcrumb__inner a {
  color: white;
  font-weight: normal;
  opacity: 1;
  transition-property: all;
}

:deep() .el-breadcrumb__inner.is-link:hover,
:deep() .el-breadcrumb__inner a:hover {
  opacity: 0.7;
}

:deep() .el-breadcrumb__separator {
  color: white;
}

:deep() .el-breadcrumb__inner {
  opacity: 0.7;
  color: white !important;
}
</style>
