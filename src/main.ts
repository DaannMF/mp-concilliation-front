import { createApp } from 'vue'
import './scss/style.scss'
import router from './router/router'
import App from './App.vue'

let app = createApp(App)
app.use(router)
app.mount('#app')
