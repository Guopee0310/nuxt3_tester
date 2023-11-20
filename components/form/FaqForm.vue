<template>
  <div>
    <div class="mb-4 border-b border-solid pb-3 text-center text-xl text-secondary-700">
      <img
        src="https://www.tkbgo.com.tw/tkbgoFAQ/img/QA.png"
        alt=""
        class="mr-1 max-w-6 align-text-bottom"
      />聯絡我們
    </div>

    <Form ref="form" v-slot="{ errors }" @submit="onSubmit()">
      <label class="my-2 block text-xl">問題說明 <span class="text-secondary-700">※</span> </label>
      <div
        :class="errors.memo ? 'border-red-500' : 'border-transparent'"
        class="flex flex-wrap items-center justify-center overflow-hidden rounded-sm border border-solid"
      >
        <Field
          v-model="formData.memo"
          :rules="{ required: true }"
          as="textarea"
          class="h-[175px] max-h-[175px] w-full overflow-auto bg-base-50 p-2 outline-none"
          name="memo"
          label="問題說明"
          rows="4"
          placeholder="輸入"
        >
        </Field>
      </div>
      <div class="h-4 w-full text-left text-sm text-red-500">{{ errors.memo }}</div>
      <ButtonS2>資料送出</ButtonS2>
    </Form>
  </div>
</template>

<script setup>
import ButtonS2 from '@/components/button/ButtonS2.vue'

const form = ref()
const formData = reactive({
  memo: ''
})

const onSubmit = async () => {
  const { valid } = await form.value.validate()
  if (!valid) return
  alert('success')
}
</script>
<style lang="scss"></style>
