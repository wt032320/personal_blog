import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/icon/iconfont'
import JsppUI from './libs/jsppui'

createApp(App)
  .use(store)
  .use(router)
  .use(JsppUI)
  .mount('#app')
