import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
import system from '@/common/menu'

const FarmNews: Array<RouteRecordRaw> = [
	{
		path: '/news',
		component: Layout,
		redirect: '/news/index',
		meta: { name: system.menu.farmnews.index, icon: 'List' },
		children: [
			{
				path: 'index',
				meta: { title: system.menu.farmnews.index, icon: 'List' },
				component: () => import('views/FarmNews/index.vue')
			}
		]
	},
]

export default FarmNews