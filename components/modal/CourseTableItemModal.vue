<template>
  <div>
    <div class="editstyle">
      <table class="rwd-table">
        <thead>
          <tr>
            <th width="50%">所選課程</th>
            <th width="15%">課型</th>
            <th width="15%">師資</th>
            <th width="10%">時數</th>
            <th width="10%">是否為贈課</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData">
            <td>
              <div class="data-title">所選課程</div>
              <div>{{ item.classname }}</div>
            </td>
            <td>
              <div class="data-title">課型</div>
              <div>{{ item.type }}</div>
            </td>
            <td>
              <div class="data-title">師資</div>
              <div>{{ item.teacher }}</div>
            </td>
            <td>
              <div class="data-title">時數</div>
              <div>{{ item.hours }}</div>
            </td>
            <td>
              <div class="data-title">是否為贈課</div>
              <div>{{ item.present }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import articleDirctory from '@/assets/js/article_directory'
import { accordion, collapseSop } from '@/assets/js/accordion'
import tableRwd from '@/assets/js/table.js'

export default {
  name: 'CourseTableItemModal',
  props: ['tableData'],
  mounted() {
    const editstyle = document.querySelector('.editstyle')
    articleDirctory(editstyle)
    accordion()
    collapseSop()
    tableRwd()
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/article_style.scss';
@import '@/assets/scss/table.scss';
</style>
