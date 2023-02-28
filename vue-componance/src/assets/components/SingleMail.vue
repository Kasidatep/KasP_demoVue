<script setup>
import { defineProps } from 'vue'
const prop = defineProps({
    item: {
        type: Object,
        required: true
    },
    layout:{
        type: Object,
        defualt: {theme: "light"}

        // {theme: 'dark', btnColor:'bg-yellow-300'}
    }
   
})

</script>
<template>
    <div class="text-xl font-semibold">
        <input type="checkbox" :value="item.id"
            class=" relative h-5 w-5 cursor-pointer appearance-none rounded-lg border border-gray-600 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10">
        {{ item.title }}
    </div>
    <div class="indent-12">
        {{ item.body }}
    </div>
    <div class="flex">
        <div class="flex mx-1 mt-1 py-1 px-2 rounded-md " 
        v-for="keyword in item.keywords"
        :class="layout.theme==='dark'?'bg-yellow-500 text-gray-800':'bg-slate-500 text-white'">
            {{ keyword }}
        </div>
    </div>


</template>