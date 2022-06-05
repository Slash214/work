import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'

const asyncRoutes: Array<RouteRecordRaw> = [
	{
		path: '/',
		component: Layout,
		redirect: '/dashboard',
		meta: { name: '', len: 1 },
		children: [
			{
				path: '/dashboard',
				name: 'dashboard',
				meta: { title: '首页', keepAlive: false, icon: 'HomeFilled' },
				component: () => import('views/Dashboard/index.vue')
			}
		]
	},
]

export default asyncRoutes