import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import halo from './components/HelloWorld.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', component:halo
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
