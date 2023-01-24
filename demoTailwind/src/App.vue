<script setup>
import IcRoundSearch from './components/icons/IcRoundSearch.vue';
import groupworks from './data/groupworks.json'
const courseTitle = '<span class="text-[#BFDB38]">INT203 Client-Side Web Programming II</span>'
const searchDisabled = true
const getFooter = (typ) => {
  let footer = `School of Information Technology, KMUTT`
  if (typ.toLowerCase() == 'long') {
    return 'INT203 Client-Side Web Programming II,  ' + footer
  } else {
    return footer
  }
  return footer
}
const courseId = `INT203`
console.log(groupworks)
</script>

<template>
  <div class="flex flex-row bg-[#5c6964] text-white px-5 py-2">
    <div class="flex-none w-12 h-12"><img src="./assets/vuelogo.ico" style="width: 100%;" alt="" srcset=""></div>

    <div class="flex-col w-full ml-5">
      <h2 class="font-extrabold text-xl text-[#c6c9ad]">Vue3 Group Projects</h2>
      <h4 class="text-sm text-[#adadad]">Part of learning activities for <span v-html="courseTitle"></span></h4>
    </div>
    <div class="w-1/2 flex justify-end">
      <div class="space-x-2 items-center flex" v-show="true">
        <IcRoundSearch />
        <input class="w-full p-1 outline-none rounded-lg border border-gray-200 text-black" type="text"
          placeholder="Type your keyword here...">
        <button class="border rounded-lg p-1"
          v-bind:class="searchDisabled ? 'text-gray-400 border-gray-400' : 'text-white border-gray-200 hover:bg-black ease-in-out duration-200'"
          :disabled="searchDisabled">Search</button>
      </div>
    </div>
  </div>
  <div class="m-10 justify-items-center">
    <table class="w-full rounded-2xl">
      <thead class="bg-gray-200 border-2">
        <tr class="tracking-wide">
          <th>Section</th>
          <th>Project Name</th>
          <th>GitHub Repository</th>
          <th>Group Member</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-2" v-for="(groupwork, index) in groupworks" :class="index % 2 == 0 ? 'bg-white' : 'bg-gray-50'">
          <td class="text-center font-semibold border">{{ groupwork.section }}</td>
          <td class="font-semibold p-3 border">{{ groupwork.projectName }}</td>
          <td class="font-semibold p-3 border text-blue-500"> <a
              :href="groupwork.githubRepo">{{ groupwork.githubRepo }}</a></td>
          <td class="font-semibold p-3 border">
            <div w-full v-for="member in groupwork.students">{{`${member.id} ${member.name}` }}</div>
          </td>
        </tr>


      </tbody>
    </table>
  </div>

  <footer class=" w-full flex justify-center text-sm">

    <div>{{ getFooter('') }}</div>
  </footer>
</template>

<style scoped>

</style>
