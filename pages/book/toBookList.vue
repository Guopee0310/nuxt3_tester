<template>
  <div>
    <div :class="{ 'overflow-hidden': showBookList }" class="bg-book-list">
      <!-- sidebars Mask -->
      <div v-show="showBookList" class="sidebars-mask" @click="closeBookList()"></div>

      <div class="container">
        <div class="flex py-4">
          <!-- left-side -->
          <div class="flex-[0_0_auto] lg:w-3/12">
            <div ref="bookSidebar" :class="{ 'sidebar-show': showBookList }" class="sidebar-block">
              <!-- sidebars-title -->
              <div class="sidebars-title mb-3">
                <div class="sidebars-title-box">
                  <img
                    class="sidebars-title-icon mr-1"
                    src="~/assets/img/book/title-book.svg"
                    alt="bookicon"
                  />
                  <h3 class="sidebars-title-name mr-1">叢書分類</h3>
                </div>
              </div>
              <div class="sidebars-title-mb">
                <h3 class="sidebars-title-name-mb">
                  叢書分類<font-awesome-icon :icon="['fas', 'caret-down']" />
                </h3>
              </div>

              <!-- sidebars-menu -->
              <div id="sidebarsMenu" class="sidebars-menu">
                <ul class="sidebars-nav">
                  <!-- 有下拉選項的才會有全部這個選項 -->
                  <li class="sidebars-item">
                    <a class="sidebars-info first-layer"
                      >升學考試<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer"
                          >研究所<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">共同科目</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">資訊、資工</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">財經、經濟</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">工管、工工</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">電機、電子</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">機械</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">化學、化工</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">材料</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">環工</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">數學</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">英文</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">文學、中文</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">設計、工設</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">商管</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">統計</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href=""
                          >大學轉學考<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href=""
                          >高中升大學<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a class="sidebars-info first-layer"
                      >公職考試<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer"
                          >高普考(行政類)<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer"
                          >高普考(技術類)<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer"
                          >高普考(普通科目)<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer"
                          >技師考試<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a href="" class="sidebars-info second-layer"
                          >各類特考<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">警察特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">外交特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">關務特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">國安特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">調查特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">移民特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">司法特考</a>
                          </li>
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">鐵路特考</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=52"
                      >國民營考試<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >經濟部新進職員<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >台電雇員<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >捷運<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >銀行<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >中華郵政<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=63"
                      >消防叢書<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >消防書籍<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >消防傳記<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >消防數位光碟<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=123"
                      >素養教育<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >素養雜誌<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >素養書籍<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >親子教養<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >STEAM教具<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=75"
                      >語言學習<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >英語<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >華語小學堂<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=118"
                      >證照檢定<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >甲/乙/丙級檢定<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >教師甄試<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >領隊導遊<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=68"
                      >AI、程式設計<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=96"
                      >大專用書<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=116"
                      >產業叢書<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=106"
                      >一般圖書<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >健康養生<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >企業管理<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >自我成長<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >商業理財<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >宗教命理<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >期刊論文<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >文學小說<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;"
                          >生活風格<font-awesome-icon
                            class="arrow-down"
                            :icon="['fas', 'chevron-down']"
                        /></a>
                        <ul class="sbi-drop">
                          <li class="sidebars-item">
                            <a class="sidebars-info thrid-layer" href="javascript:;">全部</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li class="sidebars-item">
                    <a
                      class="sidebars-info first-layer"
                      href="https://www.tkbgo.com.tw/book/toBookList.jsp?category_id=101"
                      >統計研究(數位光碟)<font-awesome-icon
                        class="arrow-down"
                        :icon="['fas', 'chevron-down']"
                    /></a>
                    <ul class="sbi-drop">
                      <li class="sidebars-item">
                        <a class="sidebars-info second-layer" href="javascript:;">全部</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- right-side -->
          <div class="w-full flex-[0_0_auto] lg:w-9/12">
            <!-- book-title-block -->
            <div class="book-title-block mb-4 pb-3">
              <div class="book-title-box">
                <img
                  class="book-title-icon mr-2"
                  src="~/assets/img/book/title-book.svg"
                  alt="bookicon"
                />
                <h1 class="book-title-name mr-1">書籍專區</h1>
                <span class="book-title-line">_</span>
              </div>
              <button class="series-btn" @click="openBookList()">
                叢書分類<font-awesome-icon :icon="['fas', 'caret-down']" />
              </button>
              <div class="book-result-box">
                <span class="resul-txt">""</span>
                <div>共有<span class="resul-txt">1100</span>筆&nbsp;符合商品</div>
              </div>
            </div>
            <div>
              <!-- book-list-block -->
              <div
                class="mx-auto mb-12 flex flex-row flex-wrap justify-center gap-x-2 gap-y-5 lg:justify-start"
              >
                <!-- 顯示20本書籍 -->
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />

                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
                <BookItemCard class="max-w-[160px] md:max-w-[180px]" />
              </div>

              <!-- pagination -->
              <div class="flex items-center justify-center">
                <PaginationS2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import BookItemCard from '@/components/card/BookItemCard.vue'
import PaginationS2 from '@/components/pagination/PaginationS2.vue'
definePageMeta({
  layout: 'book'
})
const windowResizeEvent = inject('windowResize', ref(null))
const { breakpointsInt } = useTailwindConfig()
// const menuResponsive = parseInt(tailwinds.theme.screens.lg)
const showBookList = ref(false)
const windowWidth = ref(0)
watch(windowResizeEvent, () => {
  handleResize()
})
onMounted(() => {
  handleResize() // 取到當前的螢幕寬度
  window.addEventListener('resize', handleResize)

  const sidebarsInfo = document.querySelectorAll('.sidebars-info')
  sidebarsInfo.forEach((sidebarInfo) => {
    sidebarInfo.addEventListener('click', sidebarInfoClick)
  })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
const openBookList = () => {
  showBookList.value = !showBookList.value
}
const closeBookList = () => {
  showBookList.value = false
}
const handleResize = () => {
  windowWidth.value = window.innerWidth
  if (windowWidth.value > breakpointsInt('lg')) showBookList.value = false
}
const removeSiblingsActive = (sidebarsInfo) => {
  const siblings = Array.from(sidebarsInfo.parentNode.children).filter((element) => {
    return element !== sidebarsInfo.parentNode.querySelector('.sidebars-info')
  })
  siblings.forEach((element) => {
    element.classList.remove('sidebars-info-active')
    element.parentNode.querySelector('.sbi-drop').style.display = 'none'
  })

  siblings.forEach((element) => {
    element.classList.remove('layer-active')
  })
}
const collapseMenu = (sbiDrop) => {
  const allType = sbiDrop.querySelector('.sidebars-item sidebars-info')

  // allType.classList.add('layer-active');

  removeSiblingsActive(allType)
}
const sidebarInfoClick = (e) => {
  e.preventDefault()
  // 取消同層選取

  removeSiblingsActive(e.currentTarget.parentNode.querySelector('.sbi-drop'))
  const sbiDrop = e.currentTarget.parentNode.querySelector('.sbi-drop')
  if (sbiDrop.style.display === 'block') {
    // 選取關閉
    e.currentTarget.classList.remove('sidebars-info-active')
    sbiDrop.style.display = 'none'
    setTimeout(() => {
      collapseMenu(sbiDrop)
    }, 400)
  } else {
    // 選取打開
    e.currentTarget.classList.add('sidebars-info-active', 'layer-active')
    collapseMenu(sbiDrop)
    sbiDrop.style.display = 'block'
  }
}
</script>
<style lang="scss" scoped>
.bg-book-list {
  background-color: theme('colors.white') !important;
  background: url('~/assets/img/book/bg-dune.webp') no-repeat center bottom;
  background-size: auto 10rem;
  background-attachment: fixed;
  @apply md:bg-contain;
}

.sidebar-block {
  display: block;
  background-color: theme('colors.white');
  position: fixed;
  top: 0;
  // left: 0px;
  left: -260px;
  width: 260px;
  height: 100%;
  overflow-y: auto;
  transition: left 0.3s ease-in-out;
  z-index: 20;
  @apply top-10 lg:sticky lg:bottom-2 lg:left-0 lg:top-[0px] lg:h-[calc(100vh-160px)] lg:w-[unset] lg:bg-[unset] lg:pl-6 lg:pr-4;
}
.sidebars-title {
  @apply hidden lg:block;
}
.sidebars-title-box {
  @apply lg:flex lg:items-end;

  .sidebars-title-icon {
    @apply w-4;
  }
  .sidebars-title-name {
    @apply mb-[undet] text-[20px] font-semibold;
  }
}
.sidebars-title-mb {
  @apply flex flex-nowrap items-center lg:hidden;
}
.sidebars-title-name-mb {
  @apply m-[unset] flex w-full justify-between pb-[12px] pl-3 pr-4 pt-4 text-[1.2rem] font-semibold tracking-wider text-base-700;
}

// 側邊欄選單

.sidebars-nav {
  @apply flex flex-col;
}
.sbi-drop {
  @apply hidden py-1;
}
.sidebars-item {
  @apply flex flex-col flex-nowrap;
}
.sidebars-info {
  @apply flex w-full cursor-pointer items-center font-semibold tracking-wider text-base-700;
}
.first-layer {
  @apply justify-between bg-[unset] px-4 py-[8px] text-base-700;
}
.arrow-down {
  @apply text-[12px] text-base-500;
}
.sidebars-info.sidebars-info-active {
  > .arrow-down {
    transform: rotate(180deg);
  }
}

.first-layer.layer-active {
  @apply bg-base-100;
}

// 側邊欄選單第二層
.second-layer {
  @apply gap-1 py-1 pl-6 pr-4 text-base-600;
}
.second-layer.layer-active {
  @apply text-black;
}

// 側邊欄選單第三層
.thrid-layer {
  @apply gap-1 py-[3px] pl-6 pr-4 text-base-500;
}

.thrid-layer.layer-active {
  @apply text-secondary-500;
}

.sidebars-mask {
  @apply fixed left-0 top-0 z-10 block h-full w-full cursor-pointer overflow-x-hidden bg-black opacity-40 lg:hidden;
}

.sidebar-show {
  left: 0;
}
.overflow-hidden {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

// 書籍專區標題
.book-title-block {
  @apply flex flex-col items-start justify-center gap-5 border-b border-solid border-base-300 lg:flex-row lg:flex-wrap lg:items-end lg:justify-start lg:gap-3;
}

.book-title-box {
  @apply relative flex flex-nowrap items-end justify-start text-base-50;
  &::before {
    content: '';
    display: block;
    height: 18px;
    width: 104%;
    border-radius: 20px;
    background-color: theme('colors.base.100');
    position: absolute;
    left: 6px;
    bottom: 0px;
    @apply h-5;
  }
  .book-title-icon {
    @apply z-[1] block w-4 lg:w-auto;
  }
  .book-title-name {
    @apply z-[1] mb-[2px] whitespace-nowrap text-xl font-semibold tracking-wider text-base-600 md:text-3xl;
  }
  .book-title-line {
    @apply z-[1] inline-block text-lg text-base-600;
  }
}

// 手機版側欄彈窗按鈕
.series-btn {
  @apply flex w-full items-center justify-between rounded-[4px] border border-solid border-base-200 bg-base-50 px-4 py-1 font-semibold tracking-wider text-base-600 shadow-[inset_2px_2px_2px_rgb(0,0,0,.09)] lg:hidden;
}

.book-result-box {
  @apply flex flex-wrap items-center justify-center gap-2 font-semibold tracking-wider lg:text-xl;
}
.resul-txt {
  @apply mx-1 inline-block text-secondary-500 lg:text-xl;
}
</style>
