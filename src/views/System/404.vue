<template>
    <div class="nopage">
        <img src="@/assets/404.png" class="icon" />
        <p class="mt20 mb20">未找到当前页面</p>
        <el-button type="primary" @click="goback">返回首页</el-button>
    </div>
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router';

const router = useRouter()

const goback = () => {
    console.log('执行了')
    router.push('/')
}
</script>


<style scoped lang="scss">
@import '@/styles/mixin.scss';
.nopage {
    // min-height: 80vh;
    padding: 40px 0;
    background-color: $white;
    @include flex-auto(center, center, column);
    .icon {
        width: 500px;
        height: 356px;
    }
    p {
      @include font-set(18px, #111, 400, 1.5);
    }
}
</style>
