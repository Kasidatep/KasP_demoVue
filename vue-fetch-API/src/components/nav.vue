<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="flex space-3 w-full justify-between ">
        <RouterLink :to="{name:'QuestionList'}">Question List</RouterLink>
        <RouterLink :to="{name:'QuestionManagement'}">Question Management</RouterLink>
        <RouterLink :to="{name:'About'}">About</RouterLink>
    </div>
</template>
<style>

</style>