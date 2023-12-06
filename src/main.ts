import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import { router } from '@/plugins/router'

let AppInit = createApp(App)

AppInit.use(router)

AppInit.mount('#app')
