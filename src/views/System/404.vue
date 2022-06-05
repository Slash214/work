<template>
    <div class="nopage">404page
        <SvgIcon :name="'404'" />
        <el-button type="primary" @click="goback">返回首页</el-button>
    </div>
</template>

<script setup lang="ts">
import SvgIcon from '@/components/svgIcon/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const goback = () => {
    console.log('执行了')
    router.back()
}
</script>




<style scoped lang="scss">
.nopage {
    min-height: 80vh;
    background-color: $white;
}
</style>
