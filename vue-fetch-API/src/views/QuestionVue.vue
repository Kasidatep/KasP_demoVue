<script setup>
import { ref, onMounted } from 'vue'
import { getQuestions } from '../composable/getQuestions'
import { useRouter } from 'vue-router'
import UpdateQuestion from '../components/UpdateQuestion.vue'
import {useQuests} from '../stores/questions.js'

const myQuests = useQuests()

const questions = ref([])
onMounted(async () => {  
    questions.value = await myQuests.getAllQuestions()
     
})
const router = useRouter()
const gotoQuestion = (questId) => {
    console.log(questId)
    router.push({ name: 'OneQuestionManagement', params: { questionId: questId } })
}
</script>

<template>
    <div class="bg-rose-100 p-5 rounded mt-5">
        <H1>Question List</H1>
        <div v-for="(question, index ) in questions" :key="index" @click="gotoQuestion(question.id)"
            class="hover:font-bold cursor-pointer">
            {{ index + 1 }}) {{ question.text }}
        </div>
        <hr class="font-bold m-5">
        <div>
            <h1>--------------</h1>
                <update-question />
                </div>
    </div>
</template>