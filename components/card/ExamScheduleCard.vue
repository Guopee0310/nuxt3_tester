<template>
  <div class="flex items-center justify-center text-center">
    <div class="ex-date">
      <h2>{{ exam.SIGN_DATE_BEGIN }}</h2>
      <div class="ex-box">
        <a
          href="https://www.tkbgo.com.tw/examData/toIntroduction.jsp?exam_data_id=93&exam_type_id=3074&&menu_number=05"
          target="_blank"
        >
          <h1>{{ exam.TITLE }}</h1>
          <ul>
            <li class="ex-day">
              <span
                ><font-awesome-icon
                  class="w-4 text-center"
                  :icon="['far', 'clock']"
                />報名時間</span
              >{{ exam.SIGN_DATE_BEGIN }}~{{ exam.SIGN_DATE_END }}
            </li>
            <li class="ex-time">
              <span
                ><font-awesome-icon
                  class="w-4 text-center"
                  :icon="['fas', 'pen-to-square']"
                />考試時間</span
              >{{ exam.EXAM_DATE_BEGIN }}~{{ exam.EXAM_DATE_END }}
            </li>
            <li class="ex-nop">
              <span
                ><font-awesome-icon class="w-4 text-center" :icon="['far', 'user']" />招考人數</span
              >{{ exam.QUOTA ? exam.QUOTA + '人' : '尚未公告' }}
            </li>
          </ul>
        </a>
        <div class="ex-acions">
          <img
            src="~/assets/img/home_page/exam-b-1.webp"
            title="檔案下載-未提供下載"
            alt="檔案下載-未提供下載"
          />
          <img src="~/assets/img/home_page/exam-b-2.webp" title="免費講座" alt="免費講座" />
          <img
            src="~/assets/img/home_page/exam-b-3.webp"
            title="歷屆考題-未提供下載"
            alt="歷屆考題-未提供下載"
          />
          <img
            src="~/assets/img/home_page/exam-b-4.webp"
            title="影音心得-尚未建立心得"
            alt="影音心得-尚未建立心得"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['exam'])
</script>
<style lang="scss">
.ex-date {
  background-image: url('https://www.tkbgo.com.tw/tkbgo_newIndex/img/exam-date-mob.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  padding: 0;
  h2 {
    @apply mt-6 text-xl;
    color: #1f1f1f;
  }

  .ex-box {
    @apply mx-auto mt-8;
    border: 1px solid transparent;
    width: 70%;
    height: 180px;
    box-shadow: 0px 0px 25px rgb(50 50 50 / 15%);

    h1 {
      margin: 20px 10px 0;
      font-size: 21px;
      font-weight: 600;
      color: #863f2a;
      @apply line-clamp-1;
    }

    ul {
      @apply mb-2 mt-1 inline-block p-0 text-base;
    }

    li {
      @apply text-black;
      text-align: left;
    }

    span {
      @apply mr-1;
      color: #863f2a;
    }

    img {
      @apply inline-block h-6 w-6;
      margin: 0 2px;
      border-radius: 3px;
    }
  }
}
</style>
