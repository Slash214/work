import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'

const test: Array<RouteRecordRaw> = [
	{
		path: '/test',
		component: Layout,
		redirect: '/test/one',
		meta: { 'title': '测试路由', len: 2, icon: 'Menu' },
		children: [
			{
				path: 'one',
				meta: { title: '路由1', keepAlive: false },
				component: () => import('views/Test/test.vue')
			},
			{
				path: 'two',
				meta: { title: '路由2', keepAlive: false },
				component: () => import('views/Test/test1.vue')
			}
		]
	},
]

export default test