<template>
    <div class="container">
        <div class="options">
            <!-- <TimeDate /> -->
            <Select />
            <el-button plain type="primary">发布动态</el-button>
        </div>

        <Loading :show="state.show" />
        <div class="list" v-if="!state.show">
            <div class="box" v-for="item in state.list" :key="item.id">
                <h4 v-text="item.title"></h4>
                <time v-text="item.time"></time>
                <p class="content" v-text="item.content"></p>
                <div class="group">
                    <el-image
                        :src="i"
                        v-for="(i, key) in item.imgList"
                        :key="key"
                        fit="cover"
                    ></el-image>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getMessage } from '@/api'
import { onMounted, reactive } from 'vue'
import Loading from '@/components/Loading/index.vue';

const state = reactive({
    list: <any>[],
	text: '正在加载数据...',
	show: false
})
onMounted(async () => {
	state.show = true
    const { data, status } = await getMessage()
    state.list = data
    console.log(data)
    setTimeout(() => {
	   state.show = false
	}, 1000);
})
</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.container {
    background-color: $white;
    min-height: 50vh;
    width: 100%;
    padding: 20px 110px;
    .options {
        margin-bottom: 20px;
        // justify-content: space-between
        @include flex-auto(center, space-between);
    }
    .list {
        width: 100%;
        .box {
            @include flex-auto(false, false, column);
            border-radius: $br-s;
            border: 1px solid #DCDCDC;
            margin-bottom: 20px;
            padding: 20px;
            h4 {
                @include font-set($font18, #111, false, 1.5);
            }
            time {
                padding: 6px 0;
                @include font-set($font16, #888, false, 1.5);
            }
            p {
                @include font-set($font14, #666, false, 1.3);
            }
            &:last-child {
                margin-bottom: 0;
            }
            .group {
                display: flex;
                flex-wrap: wrap;
                margin-top: 20px;
                .el-image {
                    width: 180px;
                    display: inline-block;
                    margin: 0 2% 2% 0;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>
