import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import 'element-plus/dist/index.css'
import '@/styles/normalize.scss'
import './theme/index.scss'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}

app.use(ElementPlus, {
	locale: zhCn
})
app.use(router)
app.mount('#app')
