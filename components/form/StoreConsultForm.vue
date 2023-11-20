<template>
  <div>
    <slot>
      <h4 class="text-center text-3xl font-bold text-secondary-600">填寫表單諮詢課程優惠</h4>
      <p class="mb-4 mt-2 text-center text-lg text-base-400">
        請填寫表格內必要訊息，顧問專員將在收到訊息後儘速為您服務，謝謝。
      </p>
    </slot>

    <Form
      ref="form"
      v-slot="{ errors }"
      :validation-schema="$storeConsultSchema"
      @submit="onSubmit()"
    >
      <div
        :class="errors.name ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <label
          for="name"
          class="relative flex-[0_1_auto] bg-base-50 px-[8px] py-[12px] text-center font-bold after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[60%] after:w-[2px] after:bg-base-200 after:content-['']"
          >真實姓名</label
        >
        <Field
          v-model="formData.name"
          name="name"
          label="真實姓名"
          class="w-full flex-[1_1_0] overflow-hidden bg-base-50 px-[8px] py-[12px] focus:outline-none"
          placeholder="請輸入真實姓名"
          type="text"
        />
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.name }}</div>

      <div
        :class="errors.email ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <label
          class="relative flex-[0_1_auto] bg-base-50 px-[8px] py-[12px] text-center font-bold after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[60%] after:w-[2px] after:bg-base-200 after:content-['']"
          >電子信箱</label
        >
        <Field
          v-model="formData.email"
          name="email"
          class="w-full flex-[1_1_0] overflow-hidden bg-base-50 px-[8px] py-[12px] focus:outline-none"
          type="text"
          label="電子信箱"
          placeholder="範例：test@test.com"
        />
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.email }}</div>

      <div
        :class="errors.tel ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <label
          class="relative flex-[0_1_auto] bg-base-50 px-[8px] py-[12px] text-center font-bold after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[60%] after:w-[2px] after:bg-base-200 after:content-['']"
          >行動電話</label
        >
        <Field
          v-model="formData.tel"
          name="tel"
          type="text"
          label="行動電話"
          placeholder="範例：09xxxxxxxx"
          class="w-full flex-[1_1_0] overflow-hidden bg-base-50 px-[8px] py-[12px] focus:outline-none"
        />
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.tel }}</div>

      <div
        :class="errors.store ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <label
          class="relative flex-[0_1_auto] bg-base-50 px-[8px] py-[12px] text-center font-bold after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[60%] after:w-[2px] after:bg-base-200 after:content-['']"
          >諮詢地區</label
        >
        <Field
          v-model="formData.store"
          label="諮詢地區"
          as="select"
          name="store"
          class="w-full flex-[1_1_0] overflow-hidden bg-base-50 px-[8px] py-[12px] outline-none"
        >
          <option value="">請選擇</option>
          <option value="門市一">門市一</option>
          <option value="門市二">門市二</option>
          <option value="門市三">門市三</option>
          <option value="門市四">門市四</option>
          <option value="門市五">門市五</option>
          <option value="門市六">門市六</option>
          <option value="門市七">門市七</option>
        </Field>
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.store }}</div>

      <div
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid border-transparent"
      >
        <label
          class="relative flex-[0_1_auto] bg-base-50 px-[8px] py-[12px] text-center font-bold after:absolute after:inset-y-0 after:right-0 after:m-auto after:h-[60%] after:w-[2px] after:bg-base-200 after:content-['']"
          >聯絡時間</label
        >
        <select
          v-model="formData.contact_time"
          name="contact_time"
          class="w-full flex-[1_1_0] overflow-hidden bg-base-50 px-[8px] py-[12px] outline-none"
        >
          <option value="全天皆可">全天皆可</option>
          <option value="早上">早上</option>
          <option value="中午">中午</option>
          <option value="晚上">晚上</option>
        </select>
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500"></div>

      <div
        :class="errors.memo ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <label
          class="relative w-full bg-base-50 px-[8px] py-[12px] font-bold leading-[1.3] after:absolute after:inset-x-0 after:bottom-0 after:m-auto after:h-[1px] after:w-[99%] after:bg-base-200 after:content-['']"
          >諮詢內容</label
        >
        <Field
          v-model="formData.memo"
          as="textarea"
          class="h-[175px] max-h-[175px] w-full overflow-auto bg-base-50 p-2 outline-none"
          name="memo"
          label="諮詢內容"
          rows="4"
          placeholder="輸入"
        >
        </Field>
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.memo }}</div>

      <label class="mb-2 block">
        <Field
          v-model="formData.is_read_policy"
          class="mr-[3px]"
          :class="{ ' unchecked ': errors.is_read_policy }"
          name="is_read_policy"
          label="此欄位"
          type="checkbox"
          :true-value="1"
          :false-value="0"
          :value="true"
        />本人已瞭解及閱讀
        <a
          class="border-b-[1px] border-solid border-link text-link"
          href="${BASE_URL}service/toWebQA.jsp?faq_id=2"
          >會員權利說明 </a
        >跟
        <a
          class="border-b-[1px] border-solid border-link text-link"
          href="service/toWebQA.jsp?faq_id=160"
          >個資法相關規範</a
        >。
        <span class="inline-block text-sm text-red-500"> {{ errors.is_read_policy }}</span>
      </label>

      <label class="mb-2 block">
        <Field
          id="sale_agree"
          v-model="formData.sale_agree"
          class="mr-[3px]"
          :class="{ ' unchecked ': errors.sale_agree }"
          name="sale_agree"
          type="checkbox"
          label="此欄位"
          :value="true"
        />本人願意提供表單資料給臺灣知識庫相關企業。
        <span class="inline-block text-sm text-red-500">{{ errors.sale_agree }}</span>
      </label>

      <vueRecaptcha :sitekey="sitekey" @verify="recaptchaVerified"></vueRecaptcha>
      <ButtonS2> 資料送出 </ButtonS2>
    </Form>
  </div>
</template>
<script setup>
import vueRecaptcha from 'vue3-recaptcha2'
import ButtonS2 from '@/components/button/ButtonS2.vue'
const sitekey = '6LcUhbUUAAAAALfm5nNyPpU07kB64EZIYGZFXbR7'
const form = ref(null)
const formData = reactive({
  email: '',
  name: '',
  tel: '',
  memo: '',
  store: '',
  is_read_policy: false,
  sale_agree: false,
  contact_time: '全天皆可',
  recaptchaCheck: ''
})

const recaptchaVerified = (res) => {
  formData.recaptchaCheck = res
}

const { $storeConsultSchema } = useNuxtApp()
const onSubmit = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  if (!formData.recaptchaCheck) return alert('請勾選機器人驗證')
  form.value.resetForm()
  alert('success!!')
}
</script>
<style lang="scss" scoped>
.unchecked {
  @apply h-[12px] w-[12px] appearance-none rounded-sm outline outline-1 outline-red-500;
}
</style>
