import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
import system from '@/common/menu'

const record: Array<RouteRecordRaw> = [
	{
		path: '/record',
		component: Layout,
		meta: { title: system.menu.record.index, icon: 'TrendCharts', alwayShow: true },
		redirect: '/record/write',
		children: [
			{
				path: 'write',
				meta: { title: system.menu.record.write },
				component: () => import('views/Record/write.vue')
			},
			{
				path: 'archive',
				meta: { title: system.menu.record.archive },
				component: () => import('@/views/Record/archive.vue')
			},
			{
				path: 'report',
				meta: { title: system.menu.record.report },
				component: () => import('views/Record/report.vue'),
			}
		]
	},
]

export default record