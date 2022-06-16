<template>
    <div class="main">
        <Crumbs :navlist="state.LevelList"></Crumbs>
        <div class="options">
            <h4 class="mb10">请选择以下条件，获取报告</h4>
            <div class="timer">
                <TimeDate></TimeDate>
                <Select :selectlist="state.classList" tip="选择班级" />
            </div>
        </div>
        <div class="content">
            <h4 class="mb20">选择全班或儿童导出报告（点击儿童姓名就可导出）</h4>
            <div class="list">
                <div class="brds" @click="gotoChild(item)" v-for="item in 15" :key="item">
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
import Crumbs from '@/components/Crumbs/index.vue'
import TimeDate from '@/components/TimeDate/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
    LevelList: [
        { name: '家园报告', link: '/record/report', active: false },
        { name: '儿童成长相册', link: '/subPage/album', active: true },
    ],
    classList: [
        { id: 1, label: '班级1', value: 1 },
        { id: 2, label: '班级2', value: 2 },
        { id: 3, label: '班级3', value: 3 },
        { id: 4, label: '班级4', value: 4 },
    ],
})

const gotoChild = (item: any) => {
    router.push('/subPage/preview')
}

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
    .options {
        padding: 0 70px;
        margin: 40px auto;
        .timer {
            display: flex;
        }
    }
    .content {
        padding: 0 70px;
        margin: 40px auto 0 auto;
        .list {
            width: 100%;
            @include flex-auto();
            flex-wrap: wrap;
            h4 {
                font-weight: 550;
            }
            .brds {
                width: 100px;
                height: 100px;
                margin: 0 10px 10px 0;
                border-radius: $br-s;
                background-color: #eee;
                box-shadow: $simple;
                @include flex-auto(center, center, column);
                &:hover {
                    background-color: var(--system-primary-color);
                    color: $white;
                    cursor: pointer;
                }
            }
        }
        .coverbox {
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            .cover {
                width: 297.5px;
                height: 421px;
                border: 1px solid #eee;
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
