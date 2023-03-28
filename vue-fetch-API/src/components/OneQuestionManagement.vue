<script setup>
import {useRoute} from 'vue-router'
const route = useRoute()
const questId = route.params.questionId
console.log(questId)
</script>

<template>
    <h1>{{ this.$route.params.questionId }}</h1>
</template>