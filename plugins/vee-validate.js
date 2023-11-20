import { Form, Field, configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 輸入字元即進行驗證
})

setLocale('zh_TW')

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Form', Form)
  nuxtApp.vueApp.component('Field', Field)
})
