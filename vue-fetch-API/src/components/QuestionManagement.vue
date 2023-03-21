<script setup>
import { ref, onMounted } from 'vue'
import { getQuestions } from '../composable/getQuestions'
import DeleteIcon from '../components/icons/DeleteIcon.vue'
import AddEditQuestion from '../components/AddEditQuestion.vue'
const currentComponance = ref('QuestionManagement')
const questions = ref([])
const selectedQuestion = ref(undefined)

const deleteQuestion = async (id) => {
  try {
    const res = await fetch(`http://localhost:5000/questions/${id}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      questions.value = questions.value.filter(q => q.id !== id)
    } else {
      throw new error('cannot DELETE id: ' + id);
    }
  } catch (err) {
    console.log(err)
  }
}

const switchComponents = (component) => {
  if(component=='QuestionManagement') currentComponance.value='QuestionManagement'
  else if(component=='AddEditQuestion') currentComponance.value='AddEditQuestion'
  else currentComponance.value='QuestionManagement'
}

const addNewQuestion = async (newQuestion) => {
  console.log(newQuestion)
  selectedQuestion.value=undefined
  try{
    const res = await fetch('http://localhost:5000/questions', {
      method:'POST',
      headers: {
        "Content-type": "application/json"
    },
      body: JSON.stringify(newQuestion)
    })
    if(res.status==201){
      const addQuestion = await res.json()
      questions.value.push(addQuestion)
      console.log(addQuestion)
      console.log('Add successfully.')
      switchComponents('QuestionManagement')
    }else{
      throw new Error(res.statusText)
    }

  }catch(err){
    console.log(err)
  }
}

const updateQuestion = (question) => {
  console.log(question)
  selectedQuestion.value = question
  switchComponents('AddEditQuestion')
}

const editQuestion = async (modQuestion) => {
  console.log(modQuestion)

  try{
    const res = await fetch('http://localhost:5000/questions/'+modQuestion.id, {
      method:'PUT',
      headers: {
        "Content-type": "application/json"
    },
      body: JSON.stringify(modQuestion)
    })
    if(res.status==200){
      const modQuest = await res.json()
      console.log(modQuest)
      // questions.value = questions.value.map((quest)=>{
      //   if(quest?.id===modQuest?.id) {return quest = modQuest}
      // })
      console.log('edit successfully.')
      
      switchComponents('QuestionManagement')
      selectedQuestion.value=undefined
    }else{
      throw new Error(res.statusText)
    }
  }catch(err) {console.log(err)}
}

const showWarning = (mes) => console.log(mes)

// getQuestions().then(res => questions.value=res).catch(err => showWarning(err))

onMounted(async () => {
  questions.value = await getQuestions()
})

console.log(questions)

</script>
<template>
  <div>
    <div class="flex mt-5 ml-5 font-bold">
      <div @click="currentComponance = 'QuestionManagement'"
      class="bg-emerald-500 p-2 rounded-md mr-2 cursor-pointer text-white hover:bg-emerald-800 ease-linear duration-200">
        Question List</div>
      <div @click="currentComponance = 'AddEditQuestion'"
        class="bg-emerald-500 p-2 rounded-md mr-2 cursor-pointer text-white hover:bg-emerald-800 ease-linear duration-200">
        New Question
      </div>
    </div>
    <AddEditQuestion @add="addNewQuestion" @edit="editQuestion" :question="selectedQuestion" v-if="currentComponance == 'AddEditQuestion'" />
    <div v-if="currentComponance == 'QuestionManagement'">
      <div v-for="question in questions" :key="question.id" class="m-2">
        <div class="flex justify-between">
          <div class="flex w-fit">
            <div class="text-red-500 pt-1 bg-slate-200 px-1 rounded-md" @click="deleteQuestion(question.id)">
              <DeleteIcon />
            </div>
            <div class="font-bold ml-2">{{ question.id }}) {{ question.text }}</div>
          </div>
          <div @click="updateQuestion(question)" class="curror-pointer p-2 text-sm bg-emerald-600 rounded-md text-white hover:bg-emerald-800 ease-linear duration-200">
            EDIT
          </div>
        </div>

        <div v-for="option in question.options" :key="option.id" class="ml-5">
          <input type="checkbox">
          {{ option.label }}) {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
