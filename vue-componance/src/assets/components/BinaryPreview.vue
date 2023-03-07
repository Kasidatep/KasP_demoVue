<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
    selectedBinaryObject: [String, Object]
})
const isDoc = ref(false)
const previewSrc = ref('')
const previewImage = () => {
    const reader = new FileReader()
    reader.addEventListener(
        'load',
        () => {     
            previewSrc.value = reader.result
        },
        false
    )
    if (props.selectedBinaryObject) {
        reader.readAsDataURL(props.selectedBinaryObject)
    }
}
const previewDoc = ()=>{
    previewSrc.value = URL.createObjectURL(props.selectedBinaryObject)
}
const canPreview = computed(() => {
   
    if (typeof props.selectedBinaryObject === 'object') { 
        if(props.selectedBinaryObject.name.endsWith('pdf')){
            previewDoc()
            isDoc.value = true
        }else{
            previewImage()
            isDoc.value = false
        }
        return true
    }else return false
})
</script>
<template>
    <div>  
        <div v-if="canPreview && !isDoc">
            <img :src="previewSrc" class="h-52" />
        </div>
        <div v-if="canPreview  && isDoc">
            <a :href="previewSrc" class="w-fit px-5 text-blue-500 bg-slate-50 block mx-5 my-2 rounded-full hover:bg-slate-300 hover:-translate-y-1 hover:shadow-lg duration-500 ease-in-out" target="_blank"> {{ previewSrc }}</a>
        </div>
    </div>
</template >
