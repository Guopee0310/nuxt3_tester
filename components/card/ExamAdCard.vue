<template>
  <div class="flex items-center justify-center text-center">
    <div class="ex-month">
      <h2>10月</h2>
      <div class="ex-mon-box">
        <span class="ex-encourage-shape"></span>
        <div class="ex-encourage">
          <div class="ex-title mb-2">
            <span class="ex-info"
              ><font-awesome-icon :icon="['fas', 'bullseye']" />【銀行招考】速成班</span
            >
          </div>
          <a
            class="ex-img-box"
            href="https://www.tkbgo.com.tw/go_edm/edm155/index.jsp?print_id=9527"
            target="_blank"
          >
            <img
              class="swiper-lazy swiper-lazy-loaded"
              alt="【銀行招考】速成班"
              src="https://www.tkbtv.com.tw/upload/exam_information_file/2022103108552019931.jpg"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.ex-month {
  background-image: url('https://www.tkbgo.com.tw/tkbgo_newIndex/img/exam-month.webp');
  background-size: contain;
  background-repeat: no-repeat;
  width: 280px;
  padding: 0;

  h2 {
    @apply mt-2 text-lg font-bold;
    color: #7c7c7c;
  }

  .ex-mon-box {
    @apply mx-auto mt-8 flex w-full flex-col items-center;
  }

  .ex-encourage {
    width: 70%;
    background-color: #e5e5e5;
    margin: 0px auto 0;
    height: 224px;
    padding: 10px 15px;
    font-size: 16px;
    position: relative;
  }
}
</style>
