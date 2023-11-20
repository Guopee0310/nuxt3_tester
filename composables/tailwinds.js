import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/tailwind.config.js'

export const useTailwindConfig = () => {
  const tailwinds = resolveConfig(tailwindConfig)
  const breakpointsInt = (para) => {
    const tailwindsArr = { ...tailwinds.theme.screens }
    return parseInt(tailwindsArr[para].replace('px', ''), 10)
  }
  return {
    tailwinds,
    breakpointsInt
  }
}
