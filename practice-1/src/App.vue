<script setup>
const accountData = [{
  name: 'salary',
  amount: 10000
},
{
  name: 'rent',
  amount: -2500
},
{
  name: 'parking fee',
  amount: 0
},
{
  name: 'car fuel',
  amount: -600
},
{
  name: 'commission',
  amount: 5500
}]

const netTotal = () => {
  return accountData.reduce((amount, current) => {
    return amount += current.amount
  }, 0)
}
</script>

<template>
  <div class="mt-5">
    <div class="text-4xl font-extrabold text-center w-full">MY ACCOUNT</div>
    <!-- mobile -->
    <div class="mt-10 md:hidden">
      <div class="m-1 mt-5" v-for="(data, index) in accountData " :key="index">
        <div class="ml-10" v-show="data.amount != 0">
          <span class="font-bold "> Name: </span> {{ data.name }} <br>
          <span class="font-bold"> Amount: </span> <span
            :class="data.amount < 0 ? 'bg-red-300' : data.amount > 0 ? 'bg-green-300' : ''" class="rounded ml-1 px-1">{{
              data.amount
            }}</span>
        </div>
        <hr>
      </div>
      <div class="font-bold mt-10">
        <hr>
        <span class="font-bold mx-20 py-10"></span>Net Total: <span class="ml-10">{{ netTotal() }}</span>
        <hr>
      </div>
    </div>

    <!-- web brower -->
    <div class="mt-10 hidden md:contents">
      <div class="flex flex-col text-xl">
        <hr>
        <div class="flex flex-row  font-bold justify-between mx-40">
          <div>Name</div>
          <div>Amount</div>
        </div>
        <hr>
        <div class="flex flex-row justify-between mx-40" v-for="(data, index) in accountData " :key="index"
          v-show="data.amount != 0">
          <div>{{ data.name }}</div>
          <div :class="data.amount < 0 ? 'bg-red-300' : data.amount > 0 ? 'bg-green-300' : ''" class="ml-1 px-1">
            {{ data.amount }}</div>
        </div>
      </div>
      <hr>
      <div class="flex flex-row font-bold justify-between mx-40">

        <div>Net Total:</div>
        <div>{{ netTotal() }}</div>

      </div>
      <hr>
    </div>
  </div>
</template>
<style scoped>

</style>
