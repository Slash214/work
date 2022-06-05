import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
import system from '@/common/menu'

const HomeLand: Array<RouteRecordRaw> = [
	{
		path: '/homeland',
		component: Layout,
		redirect: '/homeland/index',
		meta: { name: system.menu.homeland.index},
		children: [
			{
				path: 'index',
				meta: { title: system.menu.homeland.index, icon: 'ChatDotSquare' },
				component: () => import('views/HomeLand/index.vue')
			}
		]
	},
]

export default HomeLand