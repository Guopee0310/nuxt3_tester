<template>
  <div>
    <CollapseButtonS2 :collapsed="collapsed" @click="collapsed = !collapsed">
      <slot name="buttonText">課程分類</slot>
    </CollapseButtonS2>
    <div v-show="!collapsed">
      <slot name="main">
        <div
          class="border-b-2 border-solid border-primary-500 pb-1 text-xl font-bold text-primary-500"
        >
          Menu
        </div>
        <div class="mb-2 border-b-2 border-solid border-primary-500 py-1">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item v-for="(group, index) in groupInfo" :key="group.id" :name="index + 1">
              <template #title>
                <font-awesome-icon
                  class="mr-1 text-[8px] text-primary-500"
                  :icon="['fa', 'play']"
                />
                <span class="text-base text-primary-500">{{ group.name }}</span>
              </template>
              <ul class="flex flex-wrap">
                <li v-for="t in group.children" :key="t.id" class="w-1/2">
                  <nuxtLink
                    :to="`/product/toProductList?group=${group.parentId}&type=${group.id}&kind=${t.id}`"
                    class="inline-block pl-2 text-sm text-primary-500"
                    >{{ t.name }}
                  </nuxtLink>
                </li>
              </ul>
            </el-collapse-item>
          </el-collapse>
        </div>
      </slot>
      <slot name="extraInfo"></slot>
    </div>
  </div>
</template>
<script setup>
import CollapseButtonS2 from '@/components/button/CollapseButtonS2.vue'
const collapsed = ref(true)
const route = useRoute()
const { type } = route.query

onMounted(() => {
  let w = window.innerWidth
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/gi
  const isMobile = regex.test(navigator.userAgent)
  if (w > 992 || !isMobile) collapsed.value = false
  else collapsed.value = true
  window.addEventListener('resize', () => {
    w = window.innerWidth
    collapsed.value = w < 992
  })
})

const groupInfo = inject('groupInfo') || []
const activeName = groupInfo.findIndex((item) => item.id === parseInt(type, 10)) + 1
</script>
<style lang="scss">
.el-collapse,
.el-collapse-item__header,
.el-collapse-item__wrap {
  border: 0;
}
.el-collapse-item__header {
  height: auto;
  line-height: 1.8;
  margin: 5px 0;
  svg {
    transition: 200ms ease-in;
  }
  &.is-active svg {
    transform: rotate(90deg);
  }
}
.el-collapse-item__arrow {
  display: none;
}
</style>
