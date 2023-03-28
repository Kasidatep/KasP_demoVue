import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'
import { getQuestions } from '../composable/getQuestions.js'
export const useQuests = defineStore('quests', () => {
    //state, action, getter    
    const questions = ref([])
    const fetchQuestions = async () => {
        questions.value = await getQuestions()
    }
    const getAllQuestions = () => {
        return questions.value    }
    const addNewQuestion = (newQuestionText) => {
        questions.value.push({
            id: questions.value[questions.value.length - 1].id + 1,
            text: newQuestionText        })
    }
    return { questions, fetchQuestions, getAllQuestions, addNewQuestion }
})
if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useQuests, import.meta.hot))
}