import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ElMessage } from 'element-plus'

const env = import.meta.env.MODE
let baseURL = ''


const map = new Map<string, string>([
	['dev', 'http://127.0.0.1:4523/m1/1157551-0-default'],
	['test', 'http://192.168.2.1/1157551-0-default'],
	['production', 'https://www.lovehaha.cn/api'],
])
if (map.get(env)) baseURL = map.get(env) || ''
else console.error('配置错误')

console.error('baseURL', baseURL)


// 创建实例
const service: AxiosInstance = axios.create({
	baseURL,
	timeout: 1000 * 60 * 30,
	headers: {
		'Content-Type': 'application/json'
	}
})


// 请求拦截器
const token:string = localStorage.getItem('token') || ''
service.interceptors.request.use(
	(config: AxiosRequestConfig) => {
		// TODO 在这里可以加上想要在请求发送前处理的逻辑
		// TODO 比如 loading 等 
		config.headers = {}
		if (token) config.headers['magic-token'] = token
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error)
	}
)


// 响应拦截器
service.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response.status === 200) {
			// 请求成功
			if (response?.data) return response.data
			else return response
		}
		ElMessage.info(JSON.stringify(response.status))
		return response
	},
	(error: AxiosError) => {
		const { response } = error
		if (response) {
			ElMessage.error('服务器请求错误！工程师正在维修')
			return Promise.reject(response.data)
		}
		ElMessage.warning('网络连接异常,请稍后再试!')
		return Promise.reject(error)
	}
)

export default service