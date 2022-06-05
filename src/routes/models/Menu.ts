/**
 * @description 多级路由问题 没有完美解决 使用自定义面包屑方法去解决
 * @author 爱呵呵
 */

import { RouteRecordRaw } from "vue-router";
import Layout from '@/layout/index.vue'
const route: RouteRecordRaw[] = [
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu-1',
    meta: { title: '多久菜单', icon: '' },
    children: [
      {
        path: 'menu-1',
        component: () => import('@/components/MenuBox/index.vue'),
        redirect: '/menu/menu-1/menu-1-1',
        meta: { title: '菜单1' },
        children: [
          {
            path: 'menu-1-1',
            component: () => import('@/components/menu/index.vue'),
            redirect: '/menu/menu-1/menu-1-1/menu-1-1-1',
            meta: { title: '菜单1—1-1' },
            children: [
              {
                path: 'menu-1-1-1',
                component: () => import('@/views/menu/menu-1/menu-1-1/menu-1-1-1.vue'),
                meta: { title: 'message.menu.menu.menu_1_1_1' },
              },
              {
                path: 'menu-1-1-2',
                component: () => import('@/views/menu/menu-1/menu-1-1/menu-1-1-2.vue'),
                meta: { title: 'message.menu.menu.menu_1_1_2' },
              },
            ]
          },
          {
            path: 'menu-1-2',
            component: () => import('@/views/menu/menu-1/menu-1-2.vue'),
            meta: { title: '菜单2' },
          },
        ]
      },
      {
        path: 'menu-2',
        component: () => import('@/views/menu/menu-2.vue'),
        meta: { title: 'message.menu.menu.menu_2' }
      },
      {
        path: 'menu-3',
        component: () => import('@/views/menu/menu-3.vue'),
        meta: { title: 'message.menu.menu.menu_3' }
      },
    ]
  }
]

export default route