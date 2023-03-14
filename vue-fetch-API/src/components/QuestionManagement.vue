<script setup>
import {ref, onMounted} from 'vue'
import {getQuestions} from '../composable/getQuestions'
import DeleteIcon from '../components/icons/DeleteIcon.vue'
const questions = ref([])

const deleteQuestion = async (id)=>{
  try{
    const res = await fetch(`http://localhost:5000/questions/${id}`, {
      method: 'DELETE'
    })
    if(res.ok){
      questions.value = questions.value.filter(q => q.id !== id)
    }else{
      throw new error('cannot DELETE id: '+id);
    }
  }catch(err){
    console.log(err)
  }
}

const showWarning = (mes) => console.log(mes)

// getQuestions().then(res => questions.value=res).catch(err => showWarning(err))

onMounted(async ()=> {
  questions.value = await getQuestions()
})

console.log(questions)
</script>

<template>
  <div class="flex mt-5 ml-5 font-bold">
    <div class="bg-emerald-500 p-2 rounded-md mr-2  text-white hover:bg-emerald-800 ease-linear duration-200">Question List</div>
    <div class="bg-emerald-500 p-2 rounded-md mr-2  text-white hover:bg-emerald-800 ease-linear duration-200">New Question</div>
  </div>
  <div v-for="question in questions" class="m-2">
    <div class="flex justify-between">
      <div class="flex w-fit">
          <div class="text-red-500 pt-1 bg-slate-200 px-1 rounded-md" @click="deleteQuestion(question.id)"> <DeleteIcon /> </div>
          <div class="font-bold ml-2">{{ question.id}})  {{ question.text }}</div>
      </div>
      <div class="p-2 text-sm bg-emerald-600 rounded-md text-white hover:bg-emerald-800 ease-linear duration-200">
          EDIT
      </div>
    </div>
    
    <div v-for="option in question.options" :key="option.id" class="ml-5">
      <input type="checkbox">
      {{ option.label }}) {{ option.text }}
    </div>
 
  
  </div>
</template>

<style scoped></style>
