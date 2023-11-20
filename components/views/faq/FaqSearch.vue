<template>
  <div
    class="flex h-[100px] items-center justify-center bg-[url('~/assets/img/faq/header.jpg')] bg-cover bg-center bg-no-repeat"
    @click="isSearching = false"
    @keyup.esc="isSearching = false"
  >
    <div class="container">
      <div class="relative mx-auto flex h-8 w-full max-w-[600px]">
        <div
          :class="{ 'rounded-bl-md': !isSearching }"
          class="relative flex-[1_1_0] overflow-hidden rounded-tl-md bg-white"
        >
          <input
            v-model="keywords"
            class="h-full w-full bg-white pl-3 pr-4 focus:outline-none"
            type="text"
            name="keyword"
            placeholder="搜尋"
            autocomplete="off"
            @keyup="search"
          />
          <span
            v-show="keywords.length"
            class="absolute right-0 top-1/2 inline-block -translate-y-1/2 cursor-pointer bg-white pl-2 text-base-600"
            @click="keywords = ''"
            >&times;清除</span
          >
          >
        </div>
        <button
          :class="{ 'rounded-br-md': !isSearching }"
          class="flex-[0_1_50px] cursor-pointer rounded-tr-md border-none bg-white text-base-300 outline-none"
          type="button"
          @click.stop="search"
        >
          <font-awesome-icon :icon="['fa', 'magnifying-glass']" />
        </button>
        <div
          v-show="isSearching"
          class="absolute top-8 max-h-[500px] w-full overflow-auto bg-white p-3 shadow-md"
        >
          <a class="block cursor-pointer text-secondary-600 underline">題目題目題目題目題目題目</a>
          <a class="mt-1 block cursor-pointer text-secondary-600 underline">題目題目題目</a>
          <a class="mt-1 block cursor-pointer text-secondary-600 underline"
            >題目題目題目題目題目題目</a
          >
          <a class="mt-1 block cursor-pointer text-secondary-600 underline"
            >題目題目題目題目題目題目</a
          >
          <a class="mt-1 block cursor-pointer text-secondary-600 underline">題目題目題目題目</a>
          <a class="mt-1 block cursor-pointer text-secondary-600 underline">題目題目題目題目題目</a>
          <a class="mt-1 block cursor-pointer text-secondary-600 underline">題目題目題目</a>
          <span v-show="false" class="no-result-text mt-2">很抱歉，我們查詢不到您搜尋的項目</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const isSearching = ref(false)
const keywords = ref('')
const isSearchVisible = () => {
  if (keywords.value.length > 0) isSearching.value = true
  else isSearching.value = false
}
watch('keywords', isSearchVisible)
const search = () => isSearchVisible()
</script>
<style lang="scss"></style>
