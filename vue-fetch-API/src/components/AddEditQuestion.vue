<script setup>
import { ref, onMounted } from 'vue'
const editMode = ref(false)
const props = defineProps({
  question: { type: Object }
})

const emits = defineEmits(['add','edit'])
const updateQuestion = ref({})

onMounted(() => {
  if (props.question == undefined || props.question.id==undefined) {
    editMode.value=false
    updateQuestion.value = {
      "text": "",
      "options": [
        {
          "id": 1,
          "label": "A",
          "text": "",
          "isCorrect": false
        },
        {
          "id": 2,
          "label": "B",
          "text": "",
          "isCorrect": false
        },
        {
          "id": 3,
          "label": "C",
          "text": "",
          "isCorrect": false
        },
        {
          "id": 4,
          "label": "D",
          "text": "",
          "isCorrect": false
        }
      ]
    }
  }else{
    console.log(props.question)
    editMode.value=true
    updateQuestion.value=props.question
  }
})

</script>
<template>
  <div>
    <div class="m-2 font-bold text-xl"> Add/Edit Question</div>
    <div class="flex">
      <label for="question" class="mx-4 w-24">Question</label>
      <input type="text" v-model="updateQuestion.text" name="question" id="question" class="border-2 rounded-lg w-full">
    </div>
    <ul class="pl-6 mt-4">
      <li class="space-x-3 p-1" v-for="(option, index) in updateQuestion.options" :key="index">
        <input type="checkbox" :id="option.label" v-model="option.isCorrect" class="border border-gray-200" />
        <label v-show="option.isCorrect" :for="option.label">Correct Answer</label>
        <label :for="index">{{ option.label }}.</label>
        <input type="text" :id="index" v-model="option.text" class="border border-gray-300 rounded-md p-1" />
      </li>
    </ul>
    <div class="flex justify-end">
      <div v-if="!editMode" @click="$emit('add', updateQuestion)" class="cursor-pointer px-3 py-1 bg-green-500 text-md font-bold rounded-lg text-white"> Add </div>
      <div v-if="editMode" @click="$emit('edit', updateQuestion)" class="cursor-pointer px-3 py-1 bg-green-500 text-md font-bold rounded-lg text-white"> Update </div>
    </div>
  </div>
</template>

<style scoped>

</style>
