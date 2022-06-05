<template>
    <el-breadcrumb class="app-breadcrumb hidden-sm-and-down" separator="/">
        <transition-group appear name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
                <span class="no-redirect">{{ (item.meta.title) }}</span>
                <!-- <a @click.prevent="handleLink(item)">
                    {{ (item.meta.title) }}
                </a> -->
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch, Ref, onMounted } from 'vue'
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router'

const props = defineProps({
    levelList: {
       type: Array,
       default: () => []
    }
})
const levelList: Ref<RouteLocationMatched[]> = ref([])
const route = useRoute()
const router = useRouter()

onMounted(() => {
	getBreadcrumb()
})

const getBreadcrumb = (): void => {
    let matched = route.matched.filter(item => item.meta && item.meta.title)
    const first = matched[0]
    levelList.value = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
    )
}

watch(
    () => route.path,
    () => getBreadcrumb()
)

const handleLink = (item: RouteLocationMatched): any => {
    console.warn('ite,,', item)
    const { redirect, path } = item
    if (redirect) {
        console.error(redirect.toString())
        router.push(redirect.toString())
        return
    }
    router.push(path)
}
</script>

<style lang="scss" scoped></style>
