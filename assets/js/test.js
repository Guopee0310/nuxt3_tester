import { toTypedSchema } from '@vee-validate/yup'
import * as yup from 'yup'

export const schema = toTypedSchema(
  yup.object({
    email: yup.string().required().email()
  })
)
