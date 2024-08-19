import '@/styles/reset.scss'
import { createApp } from 'vue'
import App from './App.vue'
//pinia
import pinia from './stores'
//router
import router from './router'
//element-ui
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//svg
import 'virtual:svg-icons-register'
import globalComponent from '@/components'
const app = createApp(App)
app.use(globalComponent)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
