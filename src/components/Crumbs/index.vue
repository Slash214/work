<template>
    <div class="crumb">
        <el-breadcrumb>
            <transition-group appear name="breadcrumb">
                <el-breadcrumb-item @click="gotoRouter(item.link)" v-for="(item, index) in props.navlist" :key="index">
                    <span :class="item.active ? 'nocheck' : 'check'">{{ item.name }}</span>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
        <span class="check ml10" @click="router.back">返回上一页</span>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const props: any = defineProps({
    navlist: {
        type: Array,
        default: () => [],
    },
})

onMounted(() => {
    console.log('阿萨大', props.navlist)
})

const gotoRouter = (url: string) => {
	if (!url) return
	router.push(url)
}

</script>

<style scoped lang="scss">
.crumb {
    display: flex;
    .check {
        color: var(--system-primary-color);
        font-size: 14px;
        cursor: pointer;
    }
    .nocheck {
        color: #999;
    }
}
</style>
