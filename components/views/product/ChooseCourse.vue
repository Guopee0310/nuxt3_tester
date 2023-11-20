<template>
    <div>
        <!-- 全修課程顯示 -->
        <div>
            <div class="flex justify-center font-bold text-xl lg:justify-start gap-4 mb-6">
                    <div class="text-secondary-500 ">可選科目數：3</div>
                    <div>已選科目數：0</div>
            </div>
            <table class="w-full mb-6">
                <thead>
                    <tr>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg" width="75px">群組</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg" width="30%">課程名稱</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">單買</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">課型</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">師資</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">時數</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">售價</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">開課日期</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <tr class="tr-group bg-base-50 cursor-pointer" @click="toggleGroup(1)">
                            <td class="p-2 text-center border border-solid border-base-200 align-middle">
                                <font-awesome-icon class="text-secondary-500 text-xl !w-4" :icon="['far', `square-${table.group1 ? 'minus' : 'plus'}`]" />
                                1
                            </td>
                            <td class="p-2 border border-solid border-base-200 align-middle" colspan="8">工數-雲端<span chosename=""></span></td>
                        </tr>
                        <tr v-show="table.group1">
                            <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                                <div class="reset-cb">
                                    <input id="f1" type="checkbox" name="free" data-common-group="0" data-same-class="-1" class="1" classname="工數-雲端-張衡" data-class-name="工數-雲端" value="V1907EM0000006" data-is_open="1" data-open_date="2022/07/15">
                                    <span class="real-cb"></span>
                                </div>
                            1
                            </td>
                            <td class="p-2 border border-solid border-base-200 align-middle">
                                <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1907EM0000006&amp;class_type=I" class="wrap" target="_blank">
                                    工數-雲端
                                </a>
                            </td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">張衡</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">217.6</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期"><span class="already">已上架</span></td>
                        </tr>
                        <tr v-show="table.group1">
                            <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                                <div class="reset-cb">
                                    <input id="f2" type="checkbox" name="free" data-common-group="0" data-same-class="-1" class="1" classname="工數-雲端-周易" data-class-name="工數-雲端" value="V1903EM0000001" data-is_open="1" data-open_date="2022/07/15">
                                    <span class="real-cb"></span>
                                </div>
                                1
                            </td>
                            <td class="p-2 border border-solid border-base-200 align-middle">
                                <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1903EM0000001&amp;class_type=I" class="wrap" target="_blank">    
                                    工數-雲端
                                </a>
                            </td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">周易</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">189.5</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期"><span class="already">已上架</span></td>
                        </tr>                         
                        <tr v-show="table.group1">
                            <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                                <div class="reset-cb">
                                    <input id="f3" type="checkbox" name="free" data-common-group="0" data-same-class="-1" class="1" classname="工數-雲端-程逸" data-class-name="工數-雲端" value="V1910EM0000010" data-is_open="0" data-open_date="2023/07/15">
                                    <span class="real-cb"></span>
                                </div>
                                1
                            </td>
                            <td class="p-2 border border-solid border-base-200 align-middle">
                                <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1910EM0000010&amp;class_type=I" class="wrap" target="_blank">
                                    工數-雲端
                                </a>
                            </td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">程逸</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">150.7</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                            <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期">2023/07/15</td>
                        </tr>
                    </tr>
                    <tr class="tr-group bg-base-50 cursor-pointer" @click="toggleGroup(2)">
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">
                            <font-awesome-icon class="text-secondary-500 text-xl !w-4" :icon="['far', `square-${table.group2 ? 'minus' : 'plus'}`]" />
                            2
                        </td>
                        <td class="p-2 border border-solid border-base-200 align-middle" colspan="8">
                            工數-雲端<span chosename=""></span>
                        </td>
                    </tr>
                    <tr v-show="table.group2">
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                            <div class="reset-cb">
                                <input id="f1" type="checkbox" name="free" data-common-group="0" data-same-class="-1" class="1" classname="工數-雲端-張衡" data-class-name="工數-雲端" value="V1907EM0000006" data-is_open="1" data-open_date="2022/07/15">
                                <span class="real-cb"></span>
                            </div>
                        2
                        </td>
                        <td class="p-2 border border-solid border-base-200 align-middle">
                            <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1907EM0000006&amp;class_type=I" class="wrap" target="_blank">
                                工數-雲端
                            </a>
                        </td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">張衡</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">217.6</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期"><span class="already">已上架</span></td>
                    </tr>
                    <tr v-show="table.group2">
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                            <div class="reset-cb">
                                <input id="f2" type="checkbox" name="free" data-common-group="0" data-same-class="-1" classname="工數-雲端-周易" data-class-name="工數-雲端" value="V1903EM0000001" data-is_open="1" data-open_date="2022/07/15">
                                <span class="real-cb"></span>
                            </div>
                            2
                        </td>
                        <td class="p-2 border border-solid border-base-200 align-middle">
                            <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1903EM0000001&amp;class_type=I" class="wrap" target="_blank">    
                                工數-雲端
                            </a>
                        </td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">周易</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">189.5</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期"><span class="already">已上架</span></td>
                    </tr>                         
                    <tr v-show="table.group2">
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                            <div class="reset-cb">
                                <input id="f3" type="checkbox" name="free" data-common-group="0" data-same-class="-1" classname="工數-雲端-程逸" data-class-name="工數-雲端" value="V1910EM0000010" data-is_open="0" data-open_date="2023/07/15">
                                <span class="real-cb"></span>
                            </div>
                            2
                        </td>
                        <td class="p-2 border border-solid border-base-200 align-middle">
                            <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1910EM0000010&amp;class_type=I" class="wrap" target="_blank">
                                工數-雲端
                            </a>
                        </td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">程逸</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">150.7</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期">2023/07/15</td>
                    </tr>

                    <tr class="bg-base-50">
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">  
                            <div class="reset-cb">
                                <input id="f7" type="checkbox" name="free" data-common-group="0" data-same-class="-1" classname="通訊線代-雲端-周易" data-class-name="通訊線代-雲端" value="V1907ELA000004" data-is_open="1" data-open_date="2019/12/01">
                                <span class="real-cb"></span>
                            </div>
                        3
                        </td>
                        <td class="p-2 border border-solid border-base-200 align-middle">
                            <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=通訊線代-雲端&amp;subject_no=V1907ELA000004&amp;class_type=I" class="wrap" target="_blank">
                                通訊線代-雲端
                            </a>
                        </td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">可</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型"> 雲端課程</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">周易</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="時數">156.3</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="售價">$ 22,000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="上架日期"><span class="already">已上架</span></td>
                    </tr> 	
                </tbody>
            </table>
        </div>
        <!-- 單科課程顯示 -->
        <div v-if="false">
            <table class="w-full mb-6">
                <thead>
                    <tr>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg" width="60%">課程名稱</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">原價</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">特價</th>
                        <th class="p-2 bg-secondary-500 text-white align-middle text-lg">有效日期</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle">
                            <a href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?name=工數-雲端&amp;subject_no=V1903EM0000001&amp;class_type=I" class="wrap" target="_blank">    
                                研究所-電機電子通訊所(三科)-雲端
                            </a>
                        </td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="單買">$55000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="課型">$54000</td>
                        <td class="p-2 text-center border border-solid border-base-200 align-middle" data-label="師資">自購買日起556日</td>
                    </tr>                         
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ChooseCourse',
  data() {
    return {
      table:{},
    }
  },
  created() {
    // 模擬資料是3筆
    for(let i =1; i<3; i++) {
      this.$set(this.table, `group${i}`, false)
    }
  },
  methods: {
    toggleGroup(index) {
      this.table[`group${index}`] = !this.table[`group${index}`] 
    },
  },
}
</script>
<style lang="scss" scoped>
     table th:nth-child(3), table th:nth-child(4), table th:nth-child(6), table th:nth-child(7), table th:nth-child(8) {
        @apply hidden md:table-cell;
    }

    table tr td:nth-child(3), table tr td:nth-child(4), table tr td:nth-child(6), table tr td:nth-child(7), table tr td:nth-child(8) {
        @apply hidden md:table-cell;
    }

    .reset-cb {
        @apply w-3 h-3 relative inline-block top-[2px] mr-[2px];
        input[type=checkbox] {
            @apply w-4 h-4 absolute inset-0 appearance-none z-10;
        }
        .real-cb {
            @apply inline-block bg-white border-2 border-solid border-base-100 absolute inset-0 w-full h-full;
        }
        input:checked+span {
            @apply border border-solid border-link;
        }

        input:checked+span::before {
            content: '';
            @apply border-2 border-solid border-t-transparent border-r-link border-b-link border-l-transparent;
            position: absolute;
            width: 3px;
            height: 9px;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(39deg);
        }
    }
</style>
