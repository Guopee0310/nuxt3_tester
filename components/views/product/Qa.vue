<template>
  <div class="flex flex-wrap">
    <div class="grow basis-3/4">
      <ButtonS3 @click="toggleAllQa()">
        <font-awesome-icon
          class="!w-4 align-text-bottom text-xl text-white"
          :icon="['far', `square-${QA.isAllShow ? 'minus' : 'plus'}`]"
        />
        {{ QA.isAllShow ? '收合' : '展開' }}所有問答
      </ButtonS3>
      <div
        v-for="(item, index) in QA.list"
        :key="index"
        class="mb-4 flex cursor-pointer flex-wrap items-center rounded-lg bg-white px-4 py-2 shadow-lg"
        @click="item.isShow = !item.isShow"
      >
        <div class="min-w-10 font-['Century_Gothic'] text-3xl font-bold text-secondary-500">Q1</div>
        <div class="title text-xl font-bold text-secondary-500">{{ item.title }}</div>
        <div class="ml-auto">
          <font-awesome-icon
            :class="{ hidden: item.isShow }"
            class="text-lg text-secondary-500"
            :icon="['fa', 'angle-down']"
          />
          <font-awesome-icon
            :class="{ hidden: !item.isShow }"
            class="text-lg text-secondary-500"
            :icon="['fa', 'angle-up']"
          />
        </div>
        <div :class="{ hidden: !item.isShow }" class="mt-2 w-[calc(100%_-_60px)] text-lg">
          <div class="leading-relaxed">
            {{ item.content }}
          </div>
        </div>
      </div>
    </div>
    <div class="hidden basis-1/4 justify-center pl-8 lg:flex">
      <a class="inline-block" href="https://www.tkbgo.com.tw/go_edm/edm155/index.jsp?print_id=800">
        <img src="https://www.tkbtv.com.tw/upload/tv_ad/20211227112503112838.jpg" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
import ButtonS3 from '@/components/button/ButtonS3'
export default {
  name: 'Qa',
  data() {
    return {
      QA: {
        isAllShow: false,
        list: [
          {
            title: '雲端使用期限？時數？',
            content:
              '購買雲端課程後需於有效日期截止前，將觀看時數使用完畢。若是沒有使用完，過期後時數就會自動歸零，無法使用。有效期限到期前無法將課程時數使用完畢，請在有效期限尚未過期前加購有效期限。',
            isShow: false
          },
          {
            title: '雲端使用期限？時數？',
            content:
              '購買雲端課程後需於有效日期截止前，將觀看時數使用完畢。若是沒有使用完，過期後時數就會自動歸零，無法使用。有效期限到期前無法將課程時數使用完畢，請在有效期限尚未過期前加購有效期限。',
            isShow: false
          }
        ]
      }
    }
  },
  watch: {
    QA: {
      handler: function (obj) {
        const arr = obj.list.filter((item) => item.isShow === true)
        this.QA.isAllShow = arr.length === this.QA.list.length
      },
      deep: true
    }
  },
  methods: {
    toggleAllQa() {
      const arr = this.QA.list.filter((item) => item.isShow === true)
      this.QA.list.forEach((item) => {
        if (arr.length < this.QA.list.length) item.isShow = true
        else item.isShow = false
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
