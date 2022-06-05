import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
import message from '@/common/menu'

const System: Array<RouteRecordRaw> = [
	{
		path: '/system',
		component: Layout,
		redirect: '/404',
		meta: { title: message.menu.system.name },
		children: [
			{
				path: '/404',
				component: () => import('@/views/system/404.vue'),
				meta: { title: message.menu.system.nopage,  }
			},
		]
	},
	{
		path: '/login',
		name: 'login',
		meta: { title: '登陆页面', icon: '' },
		component: () => import('views/System/login.vue')
	},
	{
		path: '/:pathMatch(.*)',
		component: Layout,
		redirect: '/404'
	}
]

export default System