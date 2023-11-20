<template>
  <header
    ref="goHeaderElement"
    class="header h-10 bg-white shadow-[0_0px_8px_rgb(0,0,0,0.2)] xl:h-18"
  >
    <div class="container flex h-full flex-wrap items-center py-2">
      <a
        class="mr-1 flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded border border-solid border-secondary-500 xl:hidden"
        onclick=""
      >
        <span class="paddin-[1px] block text-[23px] text-secondary-500">☰</span>
      </a>
      <div class="logo inline-block w-[110px] xl:w-[176px]">
        <nuxt-link to="/">
          <img :src="TkbLogo" alt="TKBGO" />
        </nuxt-link>
      </div>
      <ul class="header-nav ml-5 hidden xl:flex">
        <li class="navs mr-3">
          <a class="navs_main_links" href="#dropdowns1"
            >精選課程
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div id="dropdowns1" class="nav-dropdown hidden">
            <div id="classPc" class="nd-box">
              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 大碩研究所</span
                >
                <ul class="ndList-s">
                  <li id="type_H,I,B,C,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="3"
                      date-type="4"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=3&amp;type=4"
                      class="wrap pcHref"
                    >
                      理工研究所
                    </a>
                  </li>
                  <li id="type_H,I,B,C,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="3"
                      date-type="5"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=3&amp;type=5"
                      class="wrap pcHref"
                    >
                      商管研究所
                    </a>
                  </li>

                  <li id="type_H,I,B,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="3"
                      date-type="6"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=3&amp;type=6"
                      class="wrap pcHref"
                    >
                      文科藝術傳播
                    </a>
                  </li>

                  <li id="type_I" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="3"
                      date-type="2813"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=3&amp;type=2813"
                      class="wrap pcHref"
                    >
                      工轉商
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="3"
                      date-type="3652"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=3&amp;type=3652"
                      class="wrap pcHref"
                    >
                      研究所題庫班
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 大學轉學考</span
                >
                <ul class="ndList-s">
                  <!-- 					 2019/04/08新增銀行專區連結目前先寫死 -->

                  <li id="type_H,I,B,C,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="74"
                      date-type="144"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=74&amp;type=144"
                      class="wrap pcHref"
                    >
                      理工學院
                    </a>
                  </li>

                  <li id="type_H,I,B,C,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="74"
                      date-type="145"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=74&amp;type=145"
                      class="wrap pcHref"
                    >
                      商管學院
                    </a>
                  </li>

                  <li id="type_H,I,B,A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="74"
                      date-type="146"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=74&amp;type=146"
                      class="wrap pcHref"
                    >
                      文科藝術傳播
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 公職考試</span
                >
                <ul class="ndList-s">
                  <li id="type_H,I,A,C,B,E,F" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="10"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=10"
                      class="wrap pcHref"
                    >
                      高考/三等
                    </a>
                  </li>

                  <li id="type_H,I,A,C,B,E,F" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="61"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=61"
                      class="wrap pcHref"
                    >
                      普考/四等
                    </a>
                  </li>

                  <li id="type_H,I,C,A,B" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="14"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=14"
                      class="wrap pcHref"
                    >
                      初考/五等
                    </a>
                  </li>

                  <li id="type_H,I,A,B,C,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="18"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=18"
                      class="wrap pcHref"
                    >
                      外交特考
                    </a>
                  </li>

                  <li id="type_H,I,A,B" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="309"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=309"
                      class="wrap pcHref"
                    >
                      司法特考
                    </a>
                  </li>

                  <li id="type_H,I,C,B,A" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="15"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=15"
                      class="wrap pcHref"
                    >
                      鐵路特考
                    </a>
                  </li>

                  <li id="type_I,A,B,C" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="16"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=16"
                      class="wrap pcHref"
                    >
                      關務特考
                    </a>
                  </li>

                  <li id="type_H,I,C,A,B,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="19"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=19"
                      class="wrap pcHref"
                    >
                      調查局特考
                    </a>
                  </li>

                  <li id="type_H,I,A,C,B" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="17"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=17"
                      class="wrap pcHref"
                    >
                      國安局特考
                    </a>
                  </li>

                  <li id="type_A,C,B" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="21"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=21"
                      class="wrap pcHref"
                    >
                      一般警察特考
                    </a>
                  </li>

                  <li id="type_H,I,X" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="7"
                      date-type="1150"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=7&amp;type=1150"
                      class="wrap pcHref"
                    >
                      國考題庫班
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 就業考試</span
                >
                <ul class="ndList-s">
                  <li id="type_H,I,A,B,C,E,F" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="63"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=63"
                      class="wrap pcHref"
                    >
                      國營事業專班
                    </a>
                  </li>

                  <li id="type_H,I,A,C,B,F,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="64"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=64"
                      class="wrap pcHref"
                    >
                      台電養成班
                    </a>
                  </li>

                  <li id="type_H,I,A" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="67"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=67"
                      class="wrap pcHref"
                    >
                      中鋼集團
                    </a>
                  </li>

                  <li id="type_H,I,B,A,C" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="66"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=66"
                      class="wrap pcHref"
                    >
                      中華郵政
                    </a>
                  </li>

                  <li id="type_H,I,A,B" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="65"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=65"
                      class="wrap pcHref"
                    >
                      中華電信
                    </a>
                  </li>

                  <li id="type_H,I,A" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="68"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=68"
                      class="wrap pcHref"
                    >
                      台灣菸酒
                    </a>
                  </li>

                  <li id="type_H,I" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="132"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=132"
                      class="wrap pcHref"
                    >
                      中油雇員
                    </a>
                  </li>

                  <li id="type_H,I,A" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="131"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=131"
                      class="wrap pcHref"
                    >
                      自來水評價人員
                    </a>
                  </li>

                  <li id="type_H,I,Y,B,A,C,X" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="135"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=135"
                      class="wrap pcHref"
                    >
                      銀行招考
                    </a>
                  </li>

                  <li id="type_H" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="134"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=134"
                      class="wrap pcHref"
                    >
                      捷運
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="3377"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=3377"
                      class="wrap pcHref"
                    >
                      台灣港務公司
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="3378"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=3378"
                      class="wrap pcHref"
                    >
                      農田水利會
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="3379"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=3379"
                      class="wrap pcHref"
                    >
                      農會
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="4104"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=4104"
                      class="wrap pcHref"
                    >
                      阿里山林業鐵路及文化資產管理
                    </a>
                  </li>
                </ul>
              </div>
              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 專業證照</span
                >
                <ul class="ndList-s">
                  <li id="type_A,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="9"
                      date-type="71"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=9&amp;type=71"
                      class="wrap pcHref"
                    >
                      國際證照
                    </a>
                  </li>

                  <li id="type_I" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="9"
                      date-type="137"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=9&amp;type=137"
                      class="wrap pcHref"
                    >
                      國家證照
                    </a>
                  </li>

                  <li id="type_I,A,B,C,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="9"
                      date-type="72"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=9&amp;type=72"
                      class="wrap pcHref"
                    >
                      技師執照
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 銀行考試</span
                >
                <ul class="ndList-s">
                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="135"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=135"
                      class="wrap pcHref"
                    >
                      銀行課程
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="8"
                      date-type="135"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=8&amp;type=135"
                      class="wrap pcHref"
                    >
                      資訊類
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 終身學習</span
                >
                <ul class="ndList-s">
                  <li id="type_U,I,E" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="138"
                      date-type="433"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=138&amp;type=433"
                      class="wrap pcHref"
                    >
                      美語
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="138"
                      date-type="3302"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=138&amp;type=3302"
                      class="wrap pcHref"
                    >
                      日語
                    </a>
                  </li>

                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="138"
                      date-type="3177"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=138&amp;type=3177"
                      class="wrap pcHref"
                    >
                      學習方法
                    </a>
                  </li>
                </ul>
              </div>

              <div class="nd-lists">
                <span class="nd-lists-title"
                  ><font-awesome-icon :icon="['fas', 'caret-right']" /> 高中升大學</span
                >
                <ul class="ndList-s">
                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="4011"
                      date-type="4010"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=4011&amp;type=4010"
                      class="wrap pcHref"
                    >
                      大學多元入學
                    </a>
                  </li>
                  <li id="type_" class="ndList-item">
                    <a
                      date-href="https://www.tkbgo.com.tw/product/toProductType.jsp"
                      date-group="4011"
                      date-type="4013"
                      href="https://www.tkbgo.com.tw/product/toProductType.jsp?group=4011&amp;type=4013"
                      class="wrap pcHref"
                    >
                      國中升高中
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links" href="https://www.tkbgo.com.tw/video/toVideoIndex.jsp"
            >影音專區</a
          >
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links" href="javascript:void(0)">
            升學專區
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div class="nav-dropdown hidden">
            <div class="nd-box">
              <ul class="nd-lists-type">
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}schoolZone/toGraduateIndex.jsp?graduate_type=91"
                    class="gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />研究所
                  </a>
                </li>
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}schoolZone/toGraduateIndex.jsp?graduate_type=92"
                    class="gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />轉學考
                  </a>
                </li>
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}schoolZone/toGraduateIndex.jsp?graduate_type=127"
                    class="gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />高升大</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links">
            公職就業
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div class="nav-dropdown hidden">
            <div class="nd-box">
              <ul class="nd-lists-type">
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                    class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />公職考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                    class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />國營就業</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                    class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />銀行考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}examData/toExamList.jsp?exam_type_id=${ts_pc_id}"
                    class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />專業證照</a
                  >
                </li>
              </ul>
              <div class="nd-lists"></div>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links">
            語言專區
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div class="nav-dropdown hidden">
            <div class="nd-box">
              <ul class="nd-lists-type">
                <li class="ndList-item-b">
                  <a
                    target="_blank"
                    href="${BASE_URL}zone/english/toIndex.jsp"
                    class="wrap gaHeader"
                  >
                    <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />美語專區
                  </a>
                </li>
                <li class="ndList-item-b">
                  <a
                    target="_blank"
                    href="${BASE_URL}japanZone/toJpnIndex.jsp"
                    class="wrap gaHeader"
                  >
                    <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />日文專區
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links">
            最新消息
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div class="nav-dropdown hidden">
            <div class="nd-box">
              <ul class="nd-lists-type">
                <li class="ndList-item-b">
                  <a
                    href="${BASE_URL}news/toNewsIndex.jsp?type_id=${type_id}"
                    class="wrap gaHeader"
                  >
                    <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />${name}
                  </a>
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}review/toReviewList.jsp?ts_pc1=2630" class="wrap gaHeader">
                    <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />學員心得
                  </a>
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}lecture/toLectureList.jsp?type_id=1450" class="wrap gaHeader">
                    <font-awesome-icon :icon="['fas', 'caret-right']" size="sm" />講座專區
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links">
            線上書城
            <font-awesome-icon :icon="['fas', 'caret-down']" size="sm" />
          </a>
          <div class="nav-dropdown hidden">
            <div class="nd-box">
              <ul class="nd-lists-type">
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
                <li class="ndList-item-b">
                  <a href="${BASE_URL}book/toBookList.jsp?category_id=${id}" class="wrap gaHeader"
                    ><font-awesome-icon :icon="['fas', 'caret-right']" size="sm" /> 升學考試</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="navs mr-3">
          <a class="navs_main_links gaHeader" href="https://www.tkbgo.com.tw/livestream/toIndex.jsp"
            ><img
              src="https://www.tkbgo.com.tw/tkbgo/img/liveIcon.svg"
              class="inline-block pr-1 align-middle"
            />直播專區</a
          >
        </li>
        <li class="navs mr-3">
          <a
            class="navs_main_links gaHeader"
            href="https://www.tkbgo.com.tw/examCalendar/toExamCalendarIndex.jsp"
            >考試行事曆</a
          >
        </li>
      </ul>

      <div class="member-list ml-auto flex h-[100%] items-center gap-2">
        <div class="flex items-center">
          <div
            class="hidden h-[100%] items-center justify-center overflow-hidden rounded-[20px] border border-solid border-secondary-500 bg-white sm:flex"
          >
            <input
              id="keyword"
              class="w-[100px] py-[4px] pl-[12px] pr-[4px] focus:outline-none"
              type="text"
              name="keyword"
              placeholder="請輸入"
            />
            <button
              class="mx-2 inline-block cursor-pointer border-0 outline-none"
              type="submit"
              onclick="sendSearch(1)"
            >
              <img src="~/assets/img/others/search.webp" alt="搜尋" />
            </button>
          </div>

          <div class="searchBox-mb block sm:hidden">
            <div id="openSearch">
              <div class="icon-box relative h-[32px] w-[32px] rounded-full bg-secondary-500">
                <img
                  class="absolute left-1/2 top-1/2 h-[12px] -translate-x-1/2 -translate-y-1/2"
                  src="~/assets/img/others/search-btn.webp"
                  alt="搜尋"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="member-item">
          <a
            class="shop-cart gaHeader duration-300 ease-in"
            href="${BASE_URL}${TM!=null&&!('' eq TM.talk_id_no)?'orders/toShopcart.jsp':'ordersTemp/toShopcart.jsp'}"
          >
            <div class="element_notice buying_cart_count_tab">
              <span></span>
            </div>
            <div class="relative h-[32px] w-[32px] cursor-pointer rounded-full bg-secondary-500">
              <img
                class="absolute left-1/2 top-1/2 h-[14px] -translate-x-1/2 -translate-y-1/2"
                src="~/assets/img/others/cart.webp"
                alt="購物車"
              />
            </div>
          </a>
        </div>

        <div id="signinBtn" class="member-item flex justify-center">
          <div
            class="cursor-pointer rounded-[20px] border border-solid border-secondary-500 bg-white px-[12px] py-[2px] font-bold text-secondary-500 duration-300 ease-in"
          >
            登入
          </div>
        </div>

        <div id="#user-dropdowm" class="member-item hidden">
          <div class="item-btn login-icon-mb">
            <div class="icon-box">
              <img src="~/assets/img/others/user.webp" alt="使用者" />
            </div>
          </div>

          <ul
            id="user-dropdowm"
            class="fixed top-[65px] w-[150px] -translate-x-[100px] rounded bg-[rgba(255,255,255,.99)] px-3 py-4 shadow-[0_8px_16px_rgba(0,0,0,.14)]"
          >
            <li class="drop-item flex items-center justify-end">
              <div class="drop-top user-drop-close">
                <font-awesome-icon :icon="['fas', 'xmark']" size="lg" />
              </div>
            </li>

            <li class="flex items-center justify-end">
              <a id="member_profile" class="my-1 w-full cursor-pointer px-1 text-base-500"
                ><font-awesome-icon :icon="['fas', 'user-gear']" />帳戶</a
              >
            </li>
            <hr class="my-1 border-[0.9px] border-solid text-base-500" />
            <li class="flex items-center justify-end">
              <a class="my-1 w-full cursor-pointer px-1 text-base-500" onclick="signin_logout()">
                <font-awesome-icon :icon="['fas', 'right-from-bracket']" />登出</a
              >
            </li>
          </ul>
        </div>

        <div class="member-item flex items-center">
          <a class="item-btn fade show" href="${BASE_URL}service/indexQA.jsp">
            <div class="icon-box relative h-[32px] w-[32px] rounded-full bg-secondary-500">
              <img
                class="absolute left-1/2 top-1/2 h-[14px] -translate-x-1/2 -translate-y-1/2"
                src="~/assets/img/others/question.webp"
                alt="QA"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import TkbLogo from '@/assets/img/others/logo_tkb.svg'

const goHeaderElement = ref(null)
const updateHeaderHeight = inject('updateHeaderHeight', () => {})
const windowResizeEvent = inject('windowResize', ref(null))
onMounted(() => {
  updateHeaderHeight(goHeaderElement.value.clientHeight)
})

watch(windowResizeEvent, () => {
  updateHeaderHeight(goHeaderElement.value.clientHeight)
})
</script>

<style lang="scss" scoped>
.navs_main_links {
  @apply cursor-pointer text-[0.95rem] duration-100 ease-in hover:text-primary-500;
}

.nav-dropdown {
  @apply fixed left-0 top-[90px] z-10 w-full bg-white pb-4 pt-3 shadow-[0,8px,16px,0px,rgba(0,0,0,.15)];
}

.nd-box {
  @apply mx-auto w-[1100px];
}

.nd-lists {
  @apply float-left mb-4 w-[150px];
}

.nd-lists-title {
  @apply mb-2 block;
}

.nd-lists-type {
  @apply flex h-[100%] w-[100%] flex-wrap items-center justify-start;
}

.ndList-item {
  @apply block px-2 text-sm leading-6;
}

.ndList-item-b {
  @apply h-[65px] w-[150px] leading-[65px];
}
</style>
