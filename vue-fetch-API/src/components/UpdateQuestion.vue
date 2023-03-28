<script setup>
import {useQuests} from '../stores/questions.js'
import { onMounted, ref } from 'vue'
const myQuests = useQuests()

const newQuest = ref('')
const addNewQuest = ()=>{
    myQuests.addNewQuestion(newQuest)
}
onMounted(async ()=>{
    await myQuests.fetchQuestions()
})
</script>
<template>
   <div class="bg-rose-100 p-5 rounded mt-5">
        <H1>Update Question</H1>
        <input type="text" v-model="newQuest">
        <button @click="addNewQuest">Add now</button>
        <div v-for="(question,index ) in myQuests.questions" :key="index"
        
        class="hover:font-bold cursor-pointer">
            {{ index+1}}) {{ question.text }}
        </div>
    </div>
</template>