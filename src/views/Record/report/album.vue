<template>
    <div class="main">
        <div>
            <BreadcrumbVue :level-list="state.LevelList" />
        </div>
        <div class="options">
            <h4>请选择以下条件，获取报告</h4>
            <Select />
        </div>
        <div class="content">
            <h4 class="mb10">选择全班或儿童导出报告（点击儿童姓名就可导出）</h4>
            <div class="list">
                <div class="brds" v-for="item in 15" :key="item">
                    <p>名称</p>
                    <p>数量</p>
                </div>
            </div>
			<div class="coverbox">
				<!-- <h4>报告样式</h4> -->
				<div class="cover">
                    <el-button @click="changeCover">一键更换全班封面</el-button>
                </div>
				<div class="cover">
                    <p>请在这个地方添加将于</p>
                </div>
			</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Select from '@/components/Select/index.vue'

const state = reactive({
    LevelList: [],
})

const changeCover = () => {
    console.log('更换封面')
}

</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.main {
    width: 100%;
    background-color: $white;
    padding: 20px;
    .content {
        margin: 40px auto 0 auto;
        .list {
			width: 100%;
			@include flex-auto();
			flex-wrap: wrap;
            .brds {
                width: 100px;
                height: 100px;
				margin: 0 10px 10px 0;
                border-radius: $br-s;
                background-color: #ccc;
                box-shadow: $simple;
                @include flex-auto(center, center, column);
            }
        }
        .coverbox {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            .cover {
                width: 297.5px;
                height: 421px;
                border: 1px solid #ccc;
                margin-right: 20px;
                position: relative;
                padding: 20px;
                .el-button {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translate(-50%, -20px);
                }
            }
        }
    }
}
</style>
