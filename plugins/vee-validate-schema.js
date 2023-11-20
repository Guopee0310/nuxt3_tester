import { defineRule } from 'vee-validate'
import { required, email } from '@vee-validate/rules'

defineRule('required', required)
defineRule('email', email)

// eslint-disable-next-line no-useless-escape
const illegalText = /[\/\\\:\*\?\"\<\>\|\+\'\~\!#\%\^\&\(\)\{\}\[\]\=]/
defineRule('illegalText', (value) => {
  if (illegalText.test(value)) return '禁止使用的非法字元'
  return true
})
const tel = /^09[0-9]{8}$/
defineRule('tel', (value) => {
  if (!tel.test(value)) return '不正確的手機號碼格式'
  return true
})

const commonSchema = {
  email: { required: true, email: true },
  name: { required: true, illegalText: true },
  tel: { required: true, illegalText: true, tel: true },
  memo: { required: true, illegalText: true },
  is_read_policy: { required: { allowFalse: false } },
  sale_agree: { required: { allowFalse: false } }
}

const lectureSchema = {
  ...commonSchema,
  location: { required: true },
  session: { required: true },
  date: { required: true }
}

const storeConsultSchema = {
  ...commonSchema,
  store: { required: true }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      commonSchema,
      lectureSchema,
      storeConsultSchema
    }
  }
})
