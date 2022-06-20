import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'element-plus/dist/index.css'
import '@/styles/normalize.scss'
import './theme/index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createPinia } from 'pinia'
import 'default-passive-events' 
// 添加事件管理者'passive'，来阻止'touchstart'事件，让页面更加流畅。 解决chrome下的warning问题


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(ElementPlus, {
	locale: zhCn
})
app.use(router)
app.use(createPinia())
app.mount('#app')
