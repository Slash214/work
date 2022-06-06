import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'

const subPage: Array<RouteRecordRaw> = [
	{
		path: '/subPage',
		component: Layout,
		redirect: '/subPage/album',
		meta: { name: '', },
		children: [
			{
				path: 'album',
				name: 'album',
				meta: { title: '成长相册',  },
				component: () => import('views/Record/report/album.vue')
			},
			{
				path: 'narrate',
				name: 'narrate',
				meta: { title: 'COA轶事记录',  },
				component: () => import('views/Record/report/narrate.vue')
			},
			{
				path: 'grow',
				name: 'grow',
				meta: { title: 'COA成长报告',  },
				component: () => import('views/Record/report/grow.vue')
			},
			{
				path: 'preview',
				name: 'preview',
				meta: { title: '儿童成长相册预览',  },
				component: () => import('views/Record/report/preview.vue')
			}
		]
	},
]

export default subPage