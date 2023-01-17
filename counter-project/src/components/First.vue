<script setup>
  const uname = `Kasidatep`
  const greeting = (courseTitle) => `Hello, ${courseTitle}`
</script>
 
<template>
  <div>
    <h1>{{greeting("INT203")}}</h1>
    <h5>- {{ uname }}</h5>
  </div>
</template>
 
<style scoped>
/* div{
   padding: 30px;
}
h1 {
  color: red;
} */
</style>