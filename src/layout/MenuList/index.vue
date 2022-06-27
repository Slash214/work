<template>
    <el-menu
        class="layout-menu system-scrollbar"
        background-color="var(--system-menu-background)"
        text-color="var(--system-menu-text-color)"
        active-text-color="var(--system-primary-color)"
        :default-active="'1'"
        :default-openeds="openeds"
    >
        <menu-item v-for="(i, key) in allRouters" :menu="i" :key="key" />
    </el-menu>
</template>

<script setup lang="ts">
import MenuItem from './Menuitem.vue'
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const openeds = ref([
    '/record'
])

const allRouters = useRouter().options.routes.filter(e => {
    return e.path !== '/login' && e.path !== '/system' && e.path !== '/:pathMatch(.*)' && e.path !== '/subPage'
})




console.log('全部路由器', allRouters)
</script>

<style lang="scss" scoped>
// .el-scrollbar {
//     background-color: var(--system-menu-background);
// }
.layout-menu {
    width: 100%;
    border: none;
    :deep() {
        .el-menu-item,
        .el-sub-menu {
            background-color: var(--system-menu-background) !important;
        }
        .el-menu-item i,
        .el-menu-item-group__title,
        .el-sub-menu__title i {
            color: var(--system-menu-text-color);
        }
        .el-menu-item,
        .el-sub-menu__title {
            &.is-active {
                background-color: var(--system-primary-color) !important;
                color: var(--system-primary-text-color) !important;
                i {
                    color: var(--system-primary-text-color) !important;
                }
                &:hover {
                    background-color: var(--system-primary-color) !important;
                    color: var(--system-primary-text-color) !important;
                }
            }
            &:hover {
                background-color: var(--system-menu-hover-background) !important;
            }
        }
        .el-sub-menu {
            &.is-active {
                > .el-sub-menu__title,
                > .el-sub-menu__title i {
                    color: var(--system-menu-submenu-active-color) !important;
                }
            }
            .el-menu-item {
                background-color: var(--system-menu-children-background) !important;
                &.is-active {
                    background-color: var(--system-primary-color) !important;
                    color: var(--system-primary-text-color) !important;
                    &:hover {
                        background-color: var(--system-primary-color) !important;
                        color: var(--system-primary-text-color) !important;
                    }
                }
                &:hover {
                    background-color: var(--system-menu-hover-background) !important;
                }
            }
            .el-sub-menu {
                .el-sub-menu__title {
                    background-color: var(--system-menu-children-background) !important;
                    &:hover {
                        background-color: var(--system-menu-hover-background) !important;
                    }
                }
            }
        }
    }
}
</style>
