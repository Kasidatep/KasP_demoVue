<script setup>
import { ref } from 'vue'
import { getMails } from './composable/getMails';
import SingleMail from './assets/components/singleMail.vue'
import BinaryPreview from './assets/components/BinaryPreview.vue';
import MailSearch from './assets/components/MailSearch.vue';
const mails = ref(getMails())
const selectedMail = ref([])
const selectedBinaryFile = ref('')
const addSelectedMail = (user, event)=>{
  console.log(user)
  console.log(event.event)
  if(selectedMail.value.find(m => m == event.mailId))
    selectedMail.value = selectedMail.value.filter(m => m!==event.mailId)
  else selectedMail.value.push(event.mailId)
  
}
const chooseBinaryFile = (event)=>{
    console.log( event.target.files[0])
    selectedBinaryFile.value = event.target.files[0]
  }
</script>

<template>
  <div class="flex flex-col mx-auto justify-center content-center w-4/5">
    <div class="flex justify-between text-center m-2 mt-5 p-3 bg-slate-500 rounded-lg text-white">
      <div class=" text-2xl font-extrabold p-1 mt-1"> Mailing List</div>
      <div>
        <MailSearch>
          <template #default>
            <h1 class=" text-xl font-semibold pt-2">Search</h1>
            <input type="text" class="border border-gray-100 p-2 rounded-lg text-gray-700 ml-3">
          </template>
          <template v-slot:header>
            <h2>My Inbox</h2>
          </template>
        </MailSearch>
      </div>
    </div>
    <div class="flex flex-col m-2  content-center rounded-xl text-md p-3"
      :class="index % 2 == 0 ? 'bg-slate-200' : 'bg-slate-300'" v-for="(item, index) in mails">
      
      <SingleMail :item="item" :layout="{theme:'light'}" @chooseMail="addSelectedMail('Kasidate',$event)"/>
    </div>
    <div class="flex text-lg font-bold text-center m-2 mt-5 bg-slate-400 rounded-lg text-white">
      <div class="bg-gradient-to-r from-slate-800 p-2 rounded-l-lg">
        SELECTED MAIL:
      </div>
      <div class="p-2 ml-2 rounded-l-lg font-bold">
        {{ selectedMail.join(' / ') }}
      </div>
    </div>
    <div class="flex flex-col text-lg font-bold  m-2 mt-5 bg-gradient-to-r from-slate-500 to-slate-300 rounded-lg text-white">
    <div class="p-2">
        Choose your file:  <input type="file" accept="image/*, .pdf" @change="chooseBinaryFile" />
    </div>
    <div>
      <BinaryPreview :selectedBinaryObject="selectedBinaryFile"/>
    </div>
    </div>
  </div>

</template>

<style scoped>

</style>
