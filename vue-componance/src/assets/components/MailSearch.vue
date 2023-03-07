<script setup>

</script>
<template>
    <div class="flex">
        <div class="flex">
            <slot></slot>
        </div>
        <div class=" text-xl font-semibold pt-2 ml-5 bg-slate-400 p-2 rounded-lg">
            <slot name="header">
                <h2>Inbox</h2>
            </slot>
        </div>
    </div>
</template>