import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as Icons from '@element-plus/icons-vue'
import './assets/global.css'
import VueAxios from 'vue-axios'
import axios from "axios"
import router from "@/router";

const app = createApp(App)
//app.use(VueRouter)
app.use(router);
app.mount('#app');
for (let i in Icons) {
    app.component(i, Icons[i])
}
app.use(ElementPlus)


app.use(VueAxios, axios)


