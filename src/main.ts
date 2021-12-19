import {createApp} from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import router from "./router";

createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .mount('#app')
