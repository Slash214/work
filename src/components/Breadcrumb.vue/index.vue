<template>
    <el-breadcrumb class="app-breadcrumb hidden-sm-and-down" separator="/">
        <transition-group appear name="breadcrumb">
            <el-breadcrumb-item v-for="(item, index) in props.levelList" :key="index">
                <span class="no-redirect">{{ (item.name) }}</span>
            </el-breadcrumb-item>
        </transition-group>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref, watch, Ref, onMounted } from 'vue'
import { useRoute, useRouter, RouteLocationMatched } from 'vue-router'

const props: any = defineProps({
    levelList: {
       type: Array,
       default: () => []
    }
})
const router = useRouter()

onMounted(() => {
	console.log(props.levelList)
})


const handleLink = (item: RouteLocationMatched): any => {
    // console.warn('ite,,', item)
    // const { redirect, path } = item
    // if (redirect) {
    //     console.error(redirect.toString())
    //     router.push(redirect.toString())
    //     return
    // }
    // router.push(path)
}
</script>

<style lang="scss" scoped></style>
