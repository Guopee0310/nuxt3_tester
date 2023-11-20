import piniaPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  console.log(nuxtApp)
  nuxtApp.$pinia.use(piniaPersistedstate)
})
