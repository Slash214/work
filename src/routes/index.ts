/**
 * @description 路由配置
 * @author 爱呵呵
 */

import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import NProgress from '@/utils/nprogress'

import {
    Dasboard, System, Test, Record, FarmNews,
    HomeLand
} from './models'
import subPage  from './subpage/index'


const routes: Array<RouteRecordRaw> = [
    ...System,
    ...Dasboard,
    ...Test,
    ...Record,
    ...FarmNews,
    ...HomeLand,
    // ...Menu
    ...subPage
]

const router: Router = createRouter({
    // 新的vue-router4 使用 history路由模式 和 base前缀
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// 未授权时可访问的白名单
const whiteList = ['/login']

// 获取本地token判断是否已登陆
const userToken = localStorage.getItem('token') || ''

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */

router.beforeEach((to, _from, next) => {
    // console.log('全局路由前置守卫：to,from\n', to, from);
    // 设置页面标题
    NProgress.start()
    document.title = (to.meta.title as string) || import.meta.env.BASE_URL
    if (userToken) {
        if (to.path === '/login') {
            next('/')
            return
        }
        next()
    } else if (whiteList.includes(to.path)) {
        next()
    } else {
        // 重定向路由
        next('/login')
    }
    

})

// 路由跳转之后的监听操作
router.afterEach((to, from) => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    NProgress.done()
})

export default router