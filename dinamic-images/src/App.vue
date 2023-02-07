<script setup>
import { ref } from 'vue';
const darkTheme = ref(false)
const yourColor = ref('#7e5d5d')
const studentId = ref('')
const entryYear = ref('')
const dynamicImage = 'images/cartoon.jpg'
const findEntryYear = (digits, event) => {
  entryYear.value = studentId.value.substring(0,digits)
  // alert(event.target.id)
  // alert(event.target.tagName)
}
</script>

<template>
  <div :class="darkTheme ? 'bg-[#2C3333] text-[#A5C9CA]' : 'text-[#2C3333]'">
    <div class="container mx-auto p-5 flex justify-between">
      <div class="px-5 flex font-extrabold scale-125 kasp-title-textlogo">
        My Web
        <span class="-ml-3 font-light badge scale-50 mt-1 bg-[#444444]">DEMO</span>
      </div>
      <div class="flex justify-end">
        <label class="px-5 uppercase">dark mode</label>
        <input type="checkbox" v-model="darkTheme" class="toggle" />
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn -mt-3 scale-75 align-top">MENU</label>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-slate-500 rounded-box w-64">
            <li>
              <div class=" mx-auto pt-5 text-sm">
                <label class="uppercase align-top">Title color </label>
                <input type="color" v-model="yourColor" class="rounded-full overflow-hidden w-5 h-5 mx-5"  />
                <br><span class="uppercase align-top">{{ yourColor }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="container w-full flex flex-col mt-5">
    <div class="flex p-5">
      <label for="stdId" class="font-bold text-4xl">Input StudentID:</label>
      <input type="text" name="stdId" id="stdId" @keyup.enter="findEntryYear(2, $event)" 
      placeholder="64xxxxxxxxx" class="input border-slate-700 border-solid mx-2 focus:bg-slate-300" v-model="studentId">
      <button class="btn" @click="findEntryYear(2, $event)"  @id="findEntryYearBtn" name="findEntryYearBtn">OK</button>
      <span class="font-bold text-2xl ml-5 bg-amber-600 px-5 pt-2 rounded-3xl align-bottom"> Year: 
        <span class="text-lg rounded-lg bg-amber-500 align-middle p-1 -mt-3">{{ entryYear }}</span></span>
    </div>
    <div class="flex w-full justify-around">
      <div class="flex flex-col w-52 h-60">
        <p>Static Image</p>
      <img src="./assets/logo.svg">
      </div>
      <div class="flex  flex-col w-52 h-60">
        <p>Dynamic Image</p>
      <img :src="dynamicImage">
      </div>
    </div>
  </div>

</template>

<style scoped>
.kasp-title-textlogo {
  color: v-bind(yourColor);
}
</style>
