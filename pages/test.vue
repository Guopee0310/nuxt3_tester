<template>
  <div class="container">
    <ButtonFavoriteShape />
    <ButtonFavorite />
    <StoreConsultForm></StoreConsultForm>
    {{ countStore.count }}
    <button @click="navigateTo('/swiper')">移動</button>
    <GoIndexBanner />

    <el-dialog
      v-model="dialogVisible"
      top="0"
      :show-close="false"
      :fullscreen="true"
      :lock-scroll="true"
      title="選項"
    >
      <div class="overflow-y-auto">
        <ul class="flex flex-wrap">
          <li class="mb-4 mr-2">
            <a
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1 text-base-400"
              :href="`${url}?type_id=${id}`"
              >全部
            </a>
          </li>
          <li v-for="item in types" :key="item.id" class="mb-4 mr-2">
            <a
              class="shadow-1 inline-block whitespace-nowrap px-3 py-1 text-base-400"
              :href="`${url}?type_id=${id}&type_id2=${item.id}`"
              >{{ item.name }}
            </a>
          </li>
        </ul>
      </div>
      <!-- <span slot="footer" class="dialog-footer">
        <button class="text-xl" @click="visible = false">關閉</button>
      </span> -->
    </el-dialog>
    <button type="button" class="mb-4 ml-1 flex-[0_1_40px] md:hidden" @click="dialogVisible = true">
      <font-awesome-icon
        class="text-xl font-black text-secondary-500"
        :icon="['fas', 'angle-down']"
      />按鈕
    </button>
  </div>
</template>
<script setup>
import GoIndexBanner from '@/components/banner/GoIndexBanner.vue'
// import { reactive, ref } from 'vue'
import ButtonFavoriteShape from '@/components/button/ButtonFavoriteShape.vue'
import ButtonFavorite from '@/components/button/ButtonFavorite.vue'
import StoreConsultForm from '@/components/form/StoreConsultForm.vue'
import { useCounterStore } from '@/stores/counter'
const countStore = useCounterStore()
</script>
<style lang="scss" scoped></style>
