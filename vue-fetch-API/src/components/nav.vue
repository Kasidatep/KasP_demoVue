<script setup>
import {RouterLink} from 'vue-router'
</script>
<template>
    <div class="flex space-3">
        <RouterLink :to="{name:'QuestionManagement'}">Question Management</RouterLink>
        <RouterLink :to="{name:'About'}">About</RouterLink>
    </div>
</template>
<style>

</style>