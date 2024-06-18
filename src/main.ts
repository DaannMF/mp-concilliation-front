// Components
import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css';

// Javascript
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// Theme
import './presentation/assets/theme'

// Notifications
import Notifications from '@kyvg/vue3-notification'

// Vue
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './presentation/router'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(Notifications)
app.component('EasyDataTable', Vue3EasyDataTable)
app.mount('#app')
