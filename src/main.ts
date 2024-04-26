import '@/shared/assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import router from './app/router'
import VueLazyload from 'vue-lazyload';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyload)

app.mount('#app')
