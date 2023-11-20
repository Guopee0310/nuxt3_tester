<template>
  <NuxtLayout name="main">
    <div class="container">
      <div class="mx-auto lg:w-4/5">
        <!-- main-info -->
        <section class="mb-4 flex flex-col-reverse items-center justify-between lg:flex-row">
          <div class="lg:mr-4">
            <p class="info-box-title mb-3 text-3xl font-bold tracking-[2px] text-primary-500">
              噢！網站出錯了......
            </p>
            <p class="info-message-text mb-1 text-lg leading-[28px]">
              我們找遍每個角落，但該頁面已經消失不見了。
            </p>
            <p class="info-message-text mb-1 text-lg leading-[28px]">
              但別擔心，你可以填寫表單詢問任何問題，我們會儘速回覆
            </p>
          </div>
          <div>
            <img src="~/assets/img/error_page/main-img.png" alt="404頁面資訊" class="images" />
          </div>
        </section>

        <!-- main-connect -->
        <section class="flex flex-col justify-between md:flex-row">
          <PublicForm class="mb-4 grow">
            <span class="mb-3 block text-xl text-primary-500">
              <font-awesome-icon class="mr-1" :icon="['fas', 'clipboard-list']" />
              <span>填寫表單</span>
            </span>
          </PublicForm>
          <div class="mb-4 md:ml-4 md:max-w-[300px]">
            <div class="mb-3 block text-xl text-primary-500">
              <font-awesome-icon class="mr-1" :icon="['fas', 'book']" />
              <span>推薦課程</span>
            </div>
            <CourseItem />
          </div>
        </section>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import CourseItem from '@/components/views/news/CourseItem.vue'
import PublicForm from '@/components/form/PublicForm.vue'
defineProps({
  error: {
    type: Object,
    default: () => Object
  }
})
onMounted(() => {
  window.scrollTo(0, 0)
})
// console.log(props.error)
</script>
