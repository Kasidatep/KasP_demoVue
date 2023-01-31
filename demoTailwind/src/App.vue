<script setup>
import { ref , computed} from "vue";
import IcRoundSearch from "./components/icons/IcRoundSearch.vue";
import groupworks from "./data/groupworks.json";
const courseTitle =
  '<span class="text-[#BFDB38]">INT203 Client-Side Web Programming II</span>';
const getFooter = (type) => {
  let footer = `School of Information Technology, KMUTT`;
  if (type.toLowerCase() == "long") {
    return "INT203 Client-Side Web Programming II,  " + footer;
  } else return footer;
};
const courseId = `INT203`;
console.log(groupworks);

const reactiveData = ref(1);
const norReactiveData = 1;


let agreed = ref(false);

let showSearch = ref(false);
function toggleSearch() {
  showSearch.value = !showSearch.value;
}
const searchKeyword = ref("");
let groups = groupworks
const filterGroupwork = computed(() => {
  return groups = groupworks.filter(groupwork => {
    return groupwork.projectName
      .toLocaleLowerCase()
      .includes(searchKeyword.value.toLocaleLowerCase());
  });
});

let searchDisabled = searchKeyword == "" ? ture : false;

</script>

<template>
  <div class="flex flex-row bg-[#5c6964] text-white px-5 py-2">
    <div class="flex-none w-12 h-12">
      <img src="./assets/vuelogo.ico" style="width: 100%" alt="" srcset="" />
    </div>

    <div class="flex-col w-full ml-5">
      <h2 class="font-extrabold text-xl text-[#c6c9ad]">Vue3 Group Projects</h2>
      <h4 class="text-sm text-[#adadad]">
        Part of learning activities for <span v-html="courseTitle"></span>
      </h4>
    </div>
    <div class="w-1/2 flex justify-end">
      <div class="space-x-2 items-center flex" v-show="true">
        <div @click="toggleSearch"><IcRoundSearch /></div>
        <div v-show="showSearch" class="w-96 flex justify-end">
          <input
            v-model.trim="searchKeyword"
            class="w-full mr-2 p-1 outline-none rounded-lg border border-gray-200 text-black"
            type="text"
            id="searchInput"
            placeholder="Type your keyword here..."
          />
          <button
            class="border rounded-lg p-1"
            v-bind:class="
              searchDisabled
                ? 'text-gray-400 border-gray-400'
                : 'text-white border-gray-200 hover:bg-black ease-in-out duration-200'
            "
            :disabled="searchDisabled"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="border-2 bg-gray-600 w-full h-24">
    {{ searchKeyword }}
    <div class="text-xl text-white m-5">
      <input type="checkbox" v-model="agreed" /> I
      <span>{{ agreed === false ? " NOT" : "" }}</span> agree Something...
    </div>
  </div>
  <div class="border-2 bg-gray-600 w-full h-44" v-show="false">
    <div class="m-5 text-lg text-slate-200">
      <span class="font-bold text-white w-24">REACTIVE: </span>{{ reactiveData
      }}<button
        @click="++reactiveData"
        class="font-bold text-white w-24 text-center bg-black mx-5 rounded hover:bg-slate-800"
      >
        +
      </button>
    </div>
    <div class="m-5 text-lg text-slate-200">
      <span class="font-bold text-white w-24">NOT REACTIVE: </span
      >{{ norReactiveData
      }}<button
        @click="++norReactiveData"
        class="font-bold text-white w-24 text-center bg-black mx-5 rounded hover:bg-slate-800"
      >
        +
      </button>
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
        <tr
          class="border-2"
          v-for="(groupwork, index) in filterGroupwork"
          :class="index % 2 == 0 ? 'bg-white' : 'bg-gray-50'"
        >
          <td class="text-center font-semibold border">
            {{ groupwork.section }}
          </td>
          <td class="font-semibold p-3 border">{{ groupwork.projectName }}</td>
          <td class="font-semibold p-3 border text-blue-500">
            <a :href="groupwork.githubRepo">{{ groupwork.githubRepo }}</a>
          </td>
          <td class="font-semibold p-3 border">
            <div class="w-full" v-for="member in groupwork.students">
              {{ `${member.id} ${member.name}` }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <footer class="w-full flex justify-center text-sm">
    <div>{{ getFooter("") }}</div>
  </footer>
</template>

<style scoped></style>
