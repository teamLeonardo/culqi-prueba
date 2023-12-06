import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import { router } from '@/plugins/router'
import { pinia } from '@/plugins/pinia'

let AppInit = createApp(App)

AppInit.use(router)
AppInit.use(pinia)

AppInit.mount('#app')
