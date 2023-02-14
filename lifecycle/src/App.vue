<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from 'vue';
import IcBaselineAttachment from './components/icons/IcBaselineAttachment.vue'

const toggleIcon = ref(true)
const isPlaying = ref(false)
const music = ref('audio/sample.mp3')
const musicControl = ref()
const playMusic = () => {
  isPlaying.value = !isPlaying.value
  console.log(musicControl.value)
  if (isPlaying.value) musicControl.value.play()
  else musicControl.value.pause()
}
onBeforeMount(() => {
  counter.value++
  console.log(`{App.vue} before mount... onBeforeMount() counter=[${counter.value}]`)
})

onMounted(() => {
  counter.value++
  console.log(`{App.vue} mount... onMounted() counter=[${counter.value}]`)
})

console.log(`{App.vue} create...`)
const counter = ref(1)
const increaseCounter = () => {
  console.log(`{App.vue} increaseCounter is working... counter=[${counter.value}] `)
  counter.value += 10
}

onBeforeUpdate(() => {
  console.log(`{App.vue} onBeforeUpdate... counter=[${counter.value}] `)
  counter.value += 1000
})

onUpdated(() => {
  console.log(`{App.vue} updated... counter=[${counter.value}] `)
})
</script>

<template>

  <div class="title"> LifeCycle Hook </div>
  <div class="counter content">Counter:: <span>{{ counter }}</span><button @click="increaseCounter">+</button></div>
  <div class="icon conntent">
    <IcBaselineAttachment v-if="toggleIcon" />
    <button @click="toggleIcon = !toggleIcon">{{ toggleIcon?'hide': 'show' }} icon</button>
  </div>
  <audio :src="music" id="musicControl" ref="musicControl"></audio>
  <button @click="playMusic">{{ isPlaying?'pause': 'play' }}</button>
</template>

<style scoped>
.title {
  margin: 20px auto;
  width: 200px;
  font-size: x-large;
  font-weight: 600;
  border-radius: 1.25px 10px;
  text-align: center;
  animation: title-animate infinite 2s ease-in-out;
}

@keyframes title-animate {

  0%,
  100% {
    background-color: rgb(255, 165, 132);
  }

  50% {
    background-color: rgb(221, 126, 24);
  }

}

.content {
  padding: 5px;
  margin: 10px;
  border-radius: 4px;
}

.counter {
  background-color: rgb(187, 187, 105);

}

.counter>span {
  background: rgb(210, 212, 212);
  background: linear-gradient(42deg, rgb(219, 223, 223) 0%, rgba(255, 255, 255, 1) 100%);
  padding: 2px 10px;
  border-radius: 2px;
  margin-left: 10px;
}

.content>button {
  background-color: rgb(17, 9, 9);
  padding: 2px;
  border-radius: 20px;
  margin-left: 50px;
  width: 50px;
  color: beige;
}

.content>button:hover {
  background-color: rgb(24, 139, 49);
  padding: 2px;
  border-radius: 20px;
  margin-left: 50px;
  width: 50px;
  color: beige;
  transition: ease-in-out 0.2s;
}
</style>
