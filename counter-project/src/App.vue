<script setup>
import firstPage from './components/First.vue'
import {ref} from 'vue'
const count = ref(1)
function increment(){count.value++}
</script>
 
<template>
<div class="w-screen h-screen bg-neutral-900">
  <firstPage />
  <div class="p-8">
<div class="text-dark text-4xl font-bold">Counter : {{ count }}</div>
<button @click="count--" class="mt-3 mr-3 inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">-</button>
<button @click="increment()" class="mt-3 ml-3 inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">+</button>

  </div>

</div>
</template>
 
<style scoped>

</style>