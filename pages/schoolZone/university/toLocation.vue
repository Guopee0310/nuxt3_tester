<template>
  <div>
    <UniversityInfoListBanner :info-type="infoType" />
    <div class="container py-10">
      <UniversityPostTabs
        :tab-active="tempInfo"
        :tabs="tabs"
        @getData="getData"
      ></UniversityPostTabs>

      <div v-for="(item, index) in area" :key="index" class="accordion-item">
        <h3 class="accordion-header">
          <button
            ref="accordionBTN"
            class="accordion-button relative flex w-full items-center px-4 py-3 text-2xl font-bold text-base-600"
            :class="{ 'border-b border-solid border-base-600': !item.show }"
            :aria-expanded="item.show"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#' + item.abbr"
            @click="toggleData(item)"
          >
            <font-awesome-icon class="mx-1" :icon="['fa', 'location-dot']" />{{ item.branch }}
          </button>
        </h3>
        <div v-show="item.show" :id="item.abbr">
          <div class="accordion-body">
            <div class="row">
              <div class="col-12 col-md-6">
                <div class="image">
                  <img :src="require('~/assets/img/university/' + item.abbr + '_cover.png')" />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <div class="info">
                  <div class="info-item">
                    <div class="title">地址</div>
                    <div>{{ item.address }}</div>
                  </div>
                  <div class="info-item">
                    <div class="title">諮詢時間</div>
                    <ul>
                      <li :class="{ disabled: item.openingDay[0] == null }">一</li>
                      <li :class="{ disabled: item.openingDay[1] == null }">二</li>
                      <li :class="{ disabled: item.openingDay[2] == null }">三</li>
                      <li :class="{ disabled: item.openingDay[3] == null }">四</li>
                      <li :class="{ disabled: item.openingDay[4] == null }">五</li>
                      <li :class="{ disabled: item.openingDay[5] == null }">六</li>
                      <li :class="{ disabled: item.openingDay[6] == null }">日</li>
                    </ul>
                    <div class="time">
                      <div v-html="item.openingTime.replace(/、/g, '<br>')"></div>
                    </div>
                    <div class="text-end">
                      <a
                        class="animated button"
                        href="#anchorPoint"
                        @click="tempBranch = item.branch"
                      >
                        <span class="text">預約諮詢</span>
                        <span class="arrow"><i class="fas fa-arrow-right"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 col-md-4">
                <div class="map ratio ratio-16x9">
                  <iframe
                    width="100%"
                    height="300"
                    frameborder="0"
                    :src="
                      'https://www.google.com/maps?q=' + item.address + '&hl=zhTW&z=15&output=embed'
                    "
                  >
                  </iframe>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="comment">
                  <img :src="'./img/location/' + item.abbr + '_com1.png'" alt="" />
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div class="comment">
                  <img :src="'./img/location/' + item.abbr + '_com2.png'" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StoreConsultForm class="mx-auto w-full max-w-[950px]">
        <h4 class="text-center text-3xl font-bold text-secondary-600">前往門市·請先預約諮詢</h4>
        <p class="mb-4 mt-2 text-center text-lg text-base-400">
          欲前往現場諮詢的同學，請先於下方表單進行預約，並備註您要諮詢的內容。<br />讓顧問師能針對您的狀況，提前規劃學習方向，謝謝！
        </p>
      </StoreConsultForm>
    </div>
  </div>
</template>
<script>
import StoreConsultForm from '@/components/form/StoreConsultForm.vue'
import UniversityPostTabs from '@/components/views/university/UniversityPostTabs.vue'
import UniversityInfoListBanner from '@/components/views/university/UniversityInfoListBanner.vue'
export default {
  components: {
    UniversityInfoListBanner,
    StoreConsultForm,
    UniversityPostTabs
  },
  layout: 'university',
  data() {
    return {
      infoType: 'location',
      tempInfo: '北區',
      tempBranch: 0,
      data: {
        北區: [
          {
            branch: '台北甄戰',
            abbr: 'tpe',
            address: '台北市中正區忠孝西路一段102號3樓',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一到日——10:00～21:00',
            show: true
          }
        ],
        桃竹區: [
          {
            branch: '桃園甄戰',
            abbr: 'tyn',
            address: '桃園市桃園區中華路27號',
            openingDay: ['一', '二', '三', '四', '五', '六'],
            openingTime: '一到六——10:00～19:00',
            show: true
          },
          {
            branch: '中壢甄戰',
            abbr: 'cli',
            address: '中壢市新興路102巷11號',
            openingDay: ['一', '二', '三', '四', '五', '六'],
            openingTime: '一到六——10:00～19:00',
            show: false
          },
          {
            branch: '新竹甄戰',
            abbr: 'hsz',
            address: '新竹市中華路2段314號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一到日——10:00～19:00',
            show: false
          }
        ],
        中區: [
          {
            branch: '台中甄戰',
            abbr: 'txg',
            address: '台中市南區復興路三段503號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '平日——12:30-21:30、假日——10:00-19:00',
            show: true
          },
          {
            branch: '西屯甄戰',
            abbr: 'xitun',
            address: '台中市河南路二段319號2樓',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '平日——12:30-20:30、假日——10:00-18:00',
            show: false
          },
          {
            branch: '斗六甄戰',
            abbr: 'tuz',
            address: '雲林縣斗六市鎮北路34號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一——12:00–21:00、二到四——08:30–21:00、五到日——08:30–17:30',
            show: false
          },
          {
            branch: '虎尾甄戰',
            abbr: 'huwei',
            address: '雲林縣虎尾鎮林森路二段268號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime:
              '一——12:00–17:30、二到三——08:30–21:00、四——12:00–21:00、五到日——08:30–17:30',
            show: false
          }
        ],
        嘉南區: [
          {
            branch: '嘉義甄戰',
            abbr: 'cyi',
            address: '嘉義市北榮街219號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一到日——10:00-19:00',
            show: true
          },
          {
            branch: '台南甄戰',
            abbr: 'tnn',
            address: '台南市北區公園路145號',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一到日——09:00-22:00',
            show: false
          }
        ],
        高屏區: [
          {
            branch: '高雄甄戰',
            abbr: 'khh',
            address: '高雄市新興區八德一路332號5樓',
            openingDay: ['一', '二', '三', '四', '五', '六', '日'],
            openingTime: '一到日——11:00-20:00',
            show: true
          }
        ]
      }
    }
  },
  computed: {
    tabs() {
      return Object.keys(this.data)
    },
    area() {
      return this.data[this.tempInfo]
    },
    branchs() {
      const arr = []
      for (const p in this.data) {
        for (let i = 0; i < this.data[p].length; i++) {
          arr.push(this.data[p][i].branch)
        }
      }
      return arr
    }
  },
  methods: {
    changeInfo(e) {
      const text = e.target.innerText
      this.tempInfo = text
      window.scroll({ top: 0 })
    },
    toggleData(branch) {
      branch.show = !branch.show
    },
    getData(val) {
      console.log(val)
      this.tempInfo = val
    }
  }
}
</script>
<style lang=""></style>
