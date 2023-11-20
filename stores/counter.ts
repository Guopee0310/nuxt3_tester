import { defineStore } from 'pinia'

export const useCounterStore = defineStore(
  'counter',
  () => {
    const count = ref(0)
    const name = ref('小明')
    const increment = () => {
      count.value++
    }
    const decrement = () => {
      count.value--
    }
    const double = computed(() => count.value * 2)
    return {
      name,
      count,
      increment,
      decrement,
      double
    }
  },
  {
    persist: true
  }
)
