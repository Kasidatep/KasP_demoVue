<script setup>
import { ref } from 'vue'
import { getMails } from './composable/getMails';
import SingleMail from './assets/components/singleMail.vue'
const mails = ref(getMails())
</script>

<template>
  <div class="flex flex-col mx-auto justify-center content-center w-4/5">
    <div class="text-2xl font-extrabold text-center m-2 mt-5 p-3 bg-slate-500 rounded-lg text-white">Mailing List</div>
    <div class="flex flex-col m-2  content-center rounded-xl text-md p-3"
      :class="index % 2 == 0 ? 'bg-slate-200' : 'bg-slate-300'" v-for="(item, index) in mails">
      
      <SingleMail :item="item" :layout="{theme:'light'}"/>
    </div>
  </div>

</template>

<style scoped>

</style>
