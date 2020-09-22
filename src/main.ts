import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import halo from './components/HelloWorld.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import toast from './core/plugin'


const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/', component: halo
    }
  ]
})
const app = createApp(App)
// app.config.errorHandler = (message: any) => {
//   console.exception(...message);
// };
// app.config.warnHandler =
//     (message) => {
//       console.error(message+'123')
//     }
try {
  app.use(router);
} catch (e) {
  throw e;;
}
app.mount('#app')
