<template>
    <div class="main">
        <div class="top">
            <div class="userinfo base">
                <el-avatar :src="state.userInfo.avatar" :size="83"></el-avatar>
                <div class="content">
                    <p v-text="state.userInfo.name"></p>
                    <p v-text="state.userInfo.school"></p>
                    <p v-text="state.userInfo.idf"></p>
                </div>
            </div>
            <div class="card">
                <p>四川省第一幼儿园</p>
                <p>客服  <el-icon><Avatar /></el-icon></p>
            </div>
        </div>
        <div class="mid">
            <h4 class="title mb10">幼儿园数据分布数据</h4>
            <div class="group">
                <div class="box" v-for="item in 6" :key="item">
                    {{ item }}
                </div>
            </div>
        </div>
        <div class="row">
            <BaseTable :header="state.header" :list="state.tableData" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { formatTime } from '@/utils'
import {  } from '@/api'
import { strNumberArr } from '@/typings'
import { getTest } from '@/api/user'

const state = reactive({
    header: ['学校名称', '班级数量', '教师数量', '儿童数量', '平台到欺时间'],
    tableData: <strNumberArr[]>[],
    userInfo: {
        avatar: 'http://img.pinkyang.cn/2022.06.01-avatar.jpg',
        name: '爱呵呵',
        idf: '教师',
        school: '电子科技大学',
    },
})

onMounted(async () => {
    const result = await getTest({})
    console.warn(result)
})
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.main {
    .top {
        width: 100%;
        @include flex-auto();
        background-color: $white;
        padding: 30px 20px;
        height: 156px;
        .userinfo {
            @include flex-auto(center);
            width: 250px;
            .content {
                // flex: 1;
                margin-left: 30px;
                font-size: $font14;
                p {
                    &:first-child {
                        font-size: $font18;
                        color: #111;
                    }
                    &:nth-child(2) {
                        padding: 10px 0;
                    }
                    &:not(&:first-child) {
                        color: #999;
                    }
                }
            }
        }
        // .base {
        //     width: 49%;
        //     background-color: $white;
        //     padding: 30px 20px;
        //     height: 156px;
        // }
        .card {
            @include flex-auto(false, space-between, column);
            color: #333;
            font-size: $font16;
            p {
                
                &:last-child {
                    cursor: pointer;
                    .el-icon {
                        display: inline-block;
                        padding-top: 5px;
                        color: #999;
                    }
                }
            }
        }
    }
    .mid {
        width: 100%;
        padding: 20px;
        margin-top: 20px;
        background-color: $white;
        .title {
            @include font-set($font18, #333, false, 1.5);

            position: relative;
            padding-left: 16px;
            &::after {
                position: absolute;
                content: " ";
                top: 50%;
                left: 0;
                transform: translate(0, -50%);
                width: 5px;
                height: 80%;
                border-radius: 20px;
                background: #49AA9F;
            }
        }
        .group {
            @include flex-auto();
            flex-wrap: wrap;
            .box {
                width: 32%;
                margin: 0 2% 2% 0;
                background-color: #eee;
                height: 200px;
                text-align: center;
                &:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }
    }
    .row {
        margin-top: 20px;
        background-color: $white;
        padding: 20px;
        text-align: center;
    }
}
</style>
