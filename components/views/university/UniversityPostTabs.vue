<template>
  <div class="mb-10">
    <a
      v-for="tab in tabs"
      v-if="tabs"
      :key="tab"
      :style="`width:${(1 / tabs.length) * 100}%`"
      :class="tabActiveName === tab ? 'border-secondary-600 text-secondary-600' : ''"
      class="inline-block max-w-[160px] cursor-pointer border-b-2 border-solid border-base-200 py-1 text-center text-xl text-base-300 hover:border-secondary-600 hover:text-secondary-600"
      @click="changeTab(tab)"
      >{{ tab }}
    </a>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    tabActive: {
      type: String
    },
    tabs: {
      type: Array
    }
  },
  data() {
    return {
      tabActiveName: this.tabActive
    }
  },
  methods: {
    changeTab(tab) {
      this.tabActiveName = tab
      this.$emit('getData', tab)
      return false
    }
  }
}
</script>
<style lang=""></style>
