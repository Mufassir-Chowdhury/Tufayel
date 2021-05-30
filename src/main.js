import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
require("typeface-raleway");

createApp(App).use(router).mount('#app')
