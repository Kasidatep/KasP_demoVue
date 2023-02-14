import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'


console.log("{main.js} before creating... createApp function ")
const myApp = createApp(App)
console.log("{main.js} before mount... #app ")
myApp.mount('#app')
console.log("{main.js} after mount... #app ")