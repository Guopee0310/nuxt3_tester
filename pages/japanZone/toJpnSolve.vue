<template>
  <div>
    <div class="relative overflow-hidden bg-base-50">
      <!-- banner -->
      <div
        class="japSolve-bg mb-6 flex h-[260px] items-center overflow-hidden sm:h-[580px] md:mb-14 xl:h-[610px]"
      >
        <div class="container">
          <div
            class="relative mx-auto mt-[25%] flex h-[85vw] w-[85vw] overflow-hidden rounded-full bg-[#EA8F83] pb-[20%] lg:h-[864px] lg:w-[864px]"
          >
            <img
              class="z-[1] m-auto block w-auto max-w-[80%]"
              src="~/assets/img/japanZone/page/solMain.png"
              alt="商用日文"
            />
          </div>
        </div>
      </div>

      <!-- 課程特色 -->
      <section class="section1 pb-3 md:pb-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle leading-loose"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco7.png"
                />課程特色</span
              >
            </h2>
          </div>

          <div class="feature relative flex w-full justify-center">
            <img
              :class="{ active: featureActiveIndex === 0 }"
              class="f-img relative opacity-10"
              src="~/assets/img/japanZone/page/fea1.png"
              alt="fea1"
            />
            <img
              :class="{ active: featureActiveIndex === 1 }"
              class="f-img absolute left-1/2 top-0 -translate-x-1/2 opacity-10"
              src="~/assets/img/japanZone/page/fea2.png"
              alt="fea2"
            />
            <img
              :class="{ active: featureActiveIndex === 2 }"
              class="f-img absolute left-1/2 top-0 -translate-x-1/2 opacity-10"
              src="~/assets/img/japanZone/page/fea3.png"
              alt="fea3"
            />
            <img
              :class="{ active: featureActiveIndex === 3 }"
              class="f-img absolute left-1/2 top-0 -translate-x-1/2 opacity-10"
              src="~/assets/img/japanZone/page/fea4.png"
              alt="fea4"
            />
          </div>
        </div>
      </section>

      <!-- 試著做做看! -->
      <section class="section2 bg-[#B3E8C8] pb-3 pt-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <div class="inline-block border-l border-r border-solid border-base-800 px-3">
                <span class="leading-loose">試著做做看!</span>
              </div>
            </h2>
          </div>

          <div class="japanTryItSlider">
            <div class="swiper-pagination page-tryit"></div>

            <div class="bg-tryit rounded-3xl bg-white p-3 md:p-12">
              <Swiper
                class="japanTryItSlider"
                :modules="japanTryItOption.modules"
                :slides-per-view="japanTryItOption.slidesPerView"
                :space-between="japanTryItOption.spaceBetween"
                :auto-height="japanTryItOption.autoHeight"
                :pagination="japanTryItOption.pagination"
              >
                <SwiperSlide>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question outter relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N5_N4'][0]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N5_N4', 0)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          1 漢字讀音
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字的正確讀音。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          すみません、この　チョコレートを　<span
                            class="underline underline-offset-4"
                            >七つ</span
                          >　ください。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)やっつ</li>
                          <li>(2)なのつ</li>
                          <li :class="{ ans: !AnsDogShow['N5_N4'][0] }">(3)ななつ</li>
                          <li>(4)むいつ</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question outter relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N5_N4'][1]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N5_N4', 1)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          2 漢字表記
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字最適當的漢字寫法。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          <span class="underline underline-offset-4">まいばん</span
                          >　えいごを　べんきょうして　います。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)毎朝　</li>
                          <li :class="{ ans: !AnsDogShow['N5_N4'][1] }">(2)毎晩　</li>
                          <li>(3)毎月　</li>
                          <li>(4)毎日</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N5_N4'][2]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N5_N4', 2)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          3 語法形式判斷
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入（　　）的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          部屋が狭い（　　）、テーブルを　友達に　あげました。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)のに</li>
                          <li>(2)なので</li>
                          <li>(3)けど</li>
                          <li :class="{ ans: !AnsDogShow['N5_N4'][2] }">(4)ので</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N5_N4'][3]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N5_N4', 3)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          4 重組句子
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入句中__內的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          私は<span
                            class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >★</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          >母にはなすようにしている。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)小さい</li>
                          <li>(2)でも</li>
                          <li :class="{ ans: !AnsDogShow['N5_N4'][3] }">(3)こと</li>
                          <li>(4)どんな</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="grid">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N5_N4'][4]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N5_N4', 4)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          5 讀解-短文
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請閱讀下方文章，選出最符合問題的答案。
                        </p>
                        <p>
                          日本には、丼物や、うどんや、うなぎなど、うまいものが山ほどあります。値段が高い物もありますが、安くておいしいものもたくさんあると思います。私はてんぷらやラーメンがほんとうに好きです。納豆は最初からその匂いのせいでちょっと嫌でしたけど、もう慣れてきました。刺身は生で柔らかい食感ですから、今でもチャレンジできません。でも、今週末、友達がいい店に連れて行ってもらいますから、その時また頑張って食べてみよう。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          問題 : 筆者がまだ食べられないものはどれですか。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)納豆</li>
                          <li>(2)てんぷら</li>
                          <li>(3)うどん</li>
                          <li :class="{ ans: !AnsDogShow['N5_N4'][4] }">(4)刺身</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N3'][0]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N3', 0)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          1 漢字讀音
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字的正確讀音。<br />
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          兄はサッカー<span class="underline underline-offset-4">選手</span
                          >をめざしている。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li :class="{ ans: !AnsDogShow['N3'][0] }">(1)せんしゅう</li>
                          <li>(2)ぜんしゅ</li>
                          <li>(3)せんしゅ</li>
                          <li>(4)せんて</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N3'][1]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N3', 1)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          2 漢字表記
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字最適當的漢字寫法。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          このイベントは、皆で<span class="underline">きょうりょく</span
                          >し合いましょう。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)強力</li>
                          <li>(2)競力</li>
                          <li :class="{ ans: !AnsDogShow['N3'][1] }">(3)協力</li>
                          <li>(4)教力</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N3'][2]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N3', 2)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          3 語法形式判斷
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入（　　）的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          家で仕事をする（　　）、部屋を広くすることに決めた。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)ことに</li>
                          <li>(2)たびに</li>
                          <li>(3)みたいに</li>
                          <li :class="{ ans: !AnsDogShow['N3'][2] }">(4)ために</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N3'][3]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N3', 3)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          4 重組句子
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入句中__內的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          新型インフルエンザ<span
                            class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >★</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          >だ
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)一方</li>
                          <li>(2)によって</li>
                          <li :class="{ ans: !AnsDogShow['N3'][3] }">(3)減る</li>
                          <li>(4)海外旅行者数は</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="grid">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N3'][4]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N3', 4)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          5 讀解-短文
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出文章中(1.)、(2.)處最符合文章語法的答案。
                        </p>
                        <p>
                          台湾では、ずいぶん前からタバコの値段が政府に上げられている。
                          それはタバコを吸う人を減らし、国民たちが健康に（ 1. ）を目指す
                          わけだそうだ。しかし今、政府が意図した目的とは少し違う結果に
                          なっている。値上げをした直後にはタバコを吸う人が（ 2. ）
                          減ったが、また徐々に増えていく傾向を見せているのだ。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">1</p>
                        <ul class="mb-2 grid grid-cols-2 md:grid-cols-4">
                          <li>(1)暮らせたこと</li>
                          <li>(2)暮らした</li>
                          <li>(3)暮らしたいこと</li>
                          <li :class="{ ans: !AnsDogShow['N3'][4] }">(4)暮らせること</li>
                        </ul>
                        <p class="mb-1 leading-7">2</p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)ますます</li>
                          <li :class="{ ans: !AnsDogShow['N3'][4] }">(2)一気に</li>
                          <li>(3)たまたま</li>
                          <li>(4)しっかり</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N2'][0]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N2', 0)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          1 漢字讀音
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字的正確讀音。<br />
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          あの二人は<span class="underline">双子</span>だけどあまり似ていないよね。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li :class="{ ans: !AnsDogShow['N2'][0] }">(1)ふたご</li>
                          <li>(2)ふたこ</li>
                          <li>(3)そうご</li>
                          <li>(4)そうこ</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N2'][1]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N2', 1)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          2 漢字表記
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字最適當的漢字寫法。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          好きな人からもらったプレゼントは<span class="underline">かいふう</span
                          >しないままおいてある。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li :class="{ ans: !AnsDogShow['N2'][1] }">(1)開封</li>
                          <li>(2)閉封</li>
                          <li>(3)解放</li>
                          <li>(4)開放</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N2'][2]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N2', 2)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          3 語法形式判斷
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入（　　）的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">私が出した提案（　　）、皆の意見が分かれた。</p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)はともかく</li>
                          <li>(2)はもとより</li>
                          <li>(3)をめぐって</li>
                          <li :class="{ ans: !AnsDogShow['N2'][2] }">(4)をぬきにして</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N2'][3]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N2', 3)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          4 重組句子
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入句中__內的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          そんな簡単な漢字を<span
                            class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >★</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          >しかない。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)一方</li>
                          <li>(2)によって</li>
                          <li :class="{ ans: !AnsDogShow['N2'][3] }">(3)減る</li>
                          <li>(4)海外旅行者数は</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="grid">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N2'][4]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N2', 4)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          5 讀解-短文
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出文章中(1.)、(2.)處最符合文章語法的答案。
                        </p>
                        <p>
                          仕事のビールは最高ですね。一日の疲れも吹き飛びますし、それにビールは健康にもいいそうです。まず、ビールを飲んで一時間内に起きる変化（
                          1.
                          ）トイレ近くなり、おつまみが欲しくなり、どんどん飲みたくなるなどです。抑制が効かなくなると言ったところですが、これはアルコールをとった時、起きる変化はあまり変わらないです。けれども、ビールを飲み続けたら、心臓病（
                          2. ）、目とか腎臓にもいい影響を及ぼしていることです。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">1</p>
                        <ul class="mb-2 grid grid-cols-2 md:grid-cols-4">
                          <li>(1)とすれば</li>
                          <li>(2)としても</li>
                          <li>(3)としては</li>
                          <li :class="{ ans: !AnsDogShow['N2'][4] }">(4)と</li>
                        </ul>
                        <p class="mb-1 leading-7">2</p>
                        <ul class="mb-2 grid grid-cols-2 md:grid-cols-4">
                          <li>(1)になりにくく</li>
                          <li :class="{ ans: !AnsDogShow['N2'][4] }">(2)になりがち</li>
                          <li>(3)になりやすく</li>
                          <li>(4)になりがたく</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N1'][0]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N1', 0)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          1 漢字讀音
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字的正確讀音。<br />
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          新商品の<span class="underline">欠陥</span
                          >に関する客からの苦情が絶えない。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)けつかん</li>
                          <li :class="{ ans: !AnsDogShow['N1'][0] }">(2)けっかん</li>
                          <li>(3)けつげん</li>
                          <li>(4)けっけん</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N1'][1]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N1', 1)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          2 漢字表記
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出畫底線單字最適當的漢字寫法。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          相談したうえで、その計画は<span>見合わせる</span>ことにした。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)変更する</li>
                          <li :class="{ ans: !AnsDogShow['N1'][1] }">(2)中止する</li>
                          <li>(3)続行する</li>
                          <li>(4)更新する</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="mb-6 grid gap-6 md:mb-12 md:grid-cols-2">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N1'][2]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N1', 2)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          3 語法形式判斷
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入（　　）的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          黒島さん家は僕が小さい頃から（　　　）で付き合いをしてきたから、仲が良いんだ。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)家族が別々</li>
                          <li>(2)家族すら</li>
                          <li>(3)家族なし</li>
                          <li :class="{ ans: !AnsDogShow['N1'][2] }">(4)家族同然</li>
                        </ul>
                      </div>
                    </div>
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N1'][3]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N1', 3)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          4 重組句子
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出最適合填入句中__內的選項。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">
                          会社に通っていない<span
                            class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >★</span
                          ><span class="mx-1 inline-block h-5 w-5 border-b border-solid text-center"
                            >&nbsp;</span
                          >ことだ。
                        </p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)どうでもいい</li>
                          <li>(2)雨が降ろうと雪が降ろうと</li>
                          <li :class="{ ans: !AnsDogShow['N1'][3] }">(3)天気なんか</li>
                          <li>(4)僕にとって</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="grid">
                    <div
                      class="question relative flex h-fit w-full flex-col overflow-hidden rounded-3xl border border-solid"
                    >
                      <div
                        v-if="AnsDogShow['N1'][4]"
                        class="ansDog absolute right-2 top-2 cursor-pointer"
                        @click="AnsDogClick('N1', 4)"
                      >
                        <img src="~/assets/img/japanZone/page/answer.png" alt="" />
                      </div>
                      <div class="quiz-header h-auto bg-white p-4">
                        <h4 class="mb-5 text-center text-2xl font-semibold text-base-400">
                          5 最適合用法
                        </h4>
                        <p class="text-lg leading-7">
                          〔例題〕<br />
                          請選出該詞彙最適當的用法。
                        </p>
                      </div>
                      <div class="quiz-body h-full bg-base-100 p-4 text-lg leading-7">
                        <p class="mb-1 leading-7">免除</p>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-4">
                          <li>(1)彼女は幸いに事故を免除されたようだ。</li>
                          <li>(2)部長は責任を免除しようとしている。</li>
                          <li :class="{ ans: !AnsDogShow['N1'][4] }">
                            (3)今回の地震で崩壊を免除された家はたくさんあった。
                          </li>
                          <li>(4)学期成績の優秀な生徒は入学金が免除される。</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <!-- 教材內容 -->
      <section class="section3 pb-3 pt-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle leading-loose"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco8.png"
                />教材內容</span
              >
            </h2>
          </div>

          <div class="material">
            <img
              :class="{ active: materialActiveIndex === 0 }"
              src="~/assets/img/japanZone/page/tb1.png"
            />
            <img
              :class="{ active: materialActiveIndex === 1 }"
              src="~/assets/img/japanZone/page/tb2.png"
            />
            <img
              :class="{ active: materialActiveIndex === 2 }"
              src="~/assets/img/japanZone/page/tb3.png"
            />
            <img
              :class="{ active: materialActiveIndex === 3 }"
              src="~/assets/img/japanZone/page/tb4.png"
            />
          </div>
        </div>
      </section>

      <!-- 課程試聽 -->
      <section class="section4 py-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle leading-loose"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco9.png"
                />課程試聽</span
              >
            </h2>
          </div>
          <div class="mx-auto max-w-[800px]">
            <youtubeVideo src="https://www.youtube.com/embed/tW8PR1rfGRI" />
          </div>
        </div>
      </section>

      <!-- 講師介紹 -->
      <section class="section4 py-6 md:py-14">
        <div class="container">
          <div class="mb-8 text-center md:mb-12">
            <h2 class="text-3xl sm:text-4xl">
              <span class="border-b border-solid pb-2 align-middle leading-loose"
                ><img
                  class="mr-1 w-7 pb-2 pr-1"
                  src="~/assets/img/japanZone/page/deco10.png"
                />講師介紹</span
              >
            </h2>
          </div>

          <div>
            <div
              class="mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-4 md:flex-row md:gap-0"
            >
              <div class="mx-auto w-full text-center md:w-5/12">
                <img src="~/assets/img/japanZone/page/teacher5.png" />
              </div>
              <div class="w-full md:w-7/12">
                <div
                  class="mb-3 bg-[#D17462] px-2 py-3 text-center text-4xl font-semibold text-white"
                >
                  日檢專業講師 Ellie
                </div>
                <ul class="flex flex-col gap-2">
                  <li class="text-2xl font-semibold leading-8 tracking-wider text-base-800">
                    <fa
                      class="mr-1 text-[#D17462]"
                      :icon="['far', 'square-check']"
                    />台大日文畢業，超過5年日語教學經驗
                  </li>
                  <li class="text-2xl font-semibold leading-8 tracking-wider text-base-800">
                    <fa
                      class="mr-1 text-[#D17462]"
                      :icon="['far', 'square-check']"
                    />擅長文法變化，用表格歸納進行解說
                  </li>
                  <li class="text-2xl font-semibold leading-8 tracking-wider text-base-800">
                    <fa
                      class="mr-1 text-[#D17462]"
                      :icon="['far', 'square-check']"
                    />現任TKB日文與多家知名補習班日文講師
                  </li>
                </ul>
              </div>
            </div>

            <div class="ellie-course relative m-10 rounded-3xl bg-white p-4 md:p-8">
              <Swiper
                class="swiper-ellie-course"
                :modules="[SwiperAutoplay, SwiperNavigation]"
                :observer="true"
                :observe-parents="true"
                :slides-per-view="1"
                :space-between="20"
                :navigation="{
                  nextEl: '.course-swiper-button-next',
                  prevEl: '.course-swiper-button-prev'
                }"
                :breakpoints="{
                  [breakpointsInt('sm')]: {
                    slidesPerView: 3,
                    spaceBetween: 30
                  }
                }"
              >
                <SwiperSlide>
                  <a
                    class="flex flex-col gap-2"
                    href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2113JPN000002&class_type=I&group=138&type=3302&kind=3303"
                  >
                    <img src="https://www.tkbtv.com.tw/upload/subject/20210708083322226909.jpg" />
                    <h4 class="text-lg text-base-400">N2日檢解題班-雲端</h4>
                    <p class="text-lg font-semibold text-danger-600">$3500</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="flex flex-col gap-2"
                    href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2113JPN000001&class_type=I&group=138&type=3302&kind=3303"
                  >
                    <img src="https://www.tkbtv.com.tw/upload/subject/20210708083350228945.jpg" />
                    <h4 class="text-lg text-base-400">N3日檢解題班-雲端</h4>
                    <p class="text-lg font-semibold text-danger-600">$3500</p>
                  </a>
                </SwiperSlide>
                <SwiperSlide>
                  <a
                    class="flex flex-col gap-2"
                    href="https://www.tkbgo.com.tw/product/toProductDetail.jsp?subject_no=V2113JPN000005&class_type=I&group=138&type=3302&kind=3303"
                  >
                    <img src="https://www.tkbtv.com.tw/upload/subject/20211125093333232720.jpg" />
                    <h4 class="text-lg text-base-400">N&N5日檢解題班-雲端</h4>
                    <p class="text-lg font-semibold text-danger-600">$3500</p>
                  </a>
                </SwiperSlide>
              </Swiper>
              <div
                class="course-swiper-button-prev absolute left-0 top-1/2 mr-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#EA8F83] transition-all duration-200 ease-in-out"
              >
                <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'chevron-left']" />
              </div>
              <div
                class="course-swiper-button-next absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#EA8F83] transition-all duration-200 ease-in-out"
              >
                <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'chevron-right']" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script setup>
import youtubeVideo from '@/components/video/youtubeVideo.vue'
definePageMeta({
  layout: 'japan'
})
const { breakpointsInt } = useTailwindConfig()
const japanTryItOption = reactive({
  modules: [SwiperAutoplay, SwiperPagination],
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      const level = ['N5&N4', 'N3', 'N2', 'N1']
      return '<span class="' + className + '">' + level[index] + '</span>'
    }
  }
})

const AnsDogShow = reactive({
  N5_N4: [true, true, true, true, true],
  N3: [true, true, true, true, true],
  N2: [true, true, true, true, true],
  N1: [true, true, true, true, true]
})
const materialActiveIndex = ref(0)
const featureActiveIndex = ref(0)
onMounted(() => {
  window.setInterval(() => {
    materialActiveIndex.value = (materialActiveIndex.value + 1) % 4
    featureActiveIndex.value = (featureActiveIndex.value + 1) % 4
  }, 2000)
})

const AnsDogClick = (slideIndex, questionIndex) => {
  AnsDogShow[slideIndex][questionIndex] = false
}
</script>
<style lang="scss" scoped>
//背景底圖
.japSolve-bg {
  background: url('~/assets/img/japanZone/page/JpnSolvebg.png') theme('colors.base.50') no-repeat
    center center/cover;
  background-blend-mode: normal;
}

//section2

:deep() .japanTryItSlider {
  .page-tryit {
    position: relative;
    top: unset;
    left: unset;
    bottom: unset !important;
    display: flex;
    z-index: unset;
    padding-left: 8%;
    span.swiper-pagination-bullet {
      font-size: 16px;
      width: auto;
      height: auto;
      padding: 10px 20px;
      border-radius: 15px 15px 0 0;
      background-color: #ea8f83;
      color: white;
    }
  }
}

.ansDog {
  @apply hidden;
}
.question:hover .ansDog {
  @apply block;
}

.ans {
  color: #ea8f83;
}

.active {
  opacity: 1 !important;
}

.section3 {
  background-image: linear-gradient(to bottom, transparent 95%, white 95%),
    linear-gradient(to right, transparent 95%, white 95%);
  background-size:
    25px 25px,
    25px 25px;
}
//section3
.section3 {
  .material {
    @apply flex flex-wrap justify-center;
    img {
      flex-wrap: 1;
      max-width: 50%;
      position: relative;
      margin-bottom: 20px;
      opacity: 0.5;
      @apply xl:max-w-full;
      &.m-active {
        opacity: 1;
      }
    }
    & img:nth-child(1) {
      z-index: 3;
    }
    & img:nth-child(2) {
      z-index: 2;
      @apply ml-[0%] xl:-ml-[4%];
    }
    & img:nth-child(3) {
      z-index: 1;
      @apply ml-[0%] xl:-ml-[4%];
    }
    & img:nth-child(4) {
      z-index: 0;
      @apply ml-[0%] xl:-ml-[4%];
    }
  }
}

//section4
:deep() .ellie-course {
  .course-swiper-button-prev {
    @apply -ml-12 flex sm:hidden;
    &.swiper-button-disabled {
      @apply hidden;
    }
  }
  .course-swiper-button-next {
    @apply -mr-12 flex sm:hidden;
    &.swiper-button-disabled {
      @apply hidden;
    }
  }
  .course-swiper-button-prev::after,
  .course-swiper-button-next::after {
    display: none;
  }
}
.section4,
.section5 {
  background: fixed url('~/assets/img/japanZone/page/JpnSolvebg.png') theme('colors.base.50')
    no-repeat center center/cover;
  background-blend-mode: normal;
}
</style>
