<template>
    <el-backtop :bottom="100">
        <div class="text">回到顶部</div>
    </el-backtop>
</template>

<script setup lang="ts"></script>

<style>
.text {
    height: 100%;
    width: 100%;
    background-color: var(--el-bg-color-overlay);
    box-shadow: var(--el-box-shadow-lighter);
    text-align: center;
    line-height: 1.5;
	font-size: 14px;
    color: #1989fa;
}
</style>
