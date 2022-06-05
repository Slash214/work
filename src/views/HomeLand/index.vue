<template>
    <div class="tab">
        <div class="base" v-for="val in state.icon" :key="val.id">
            <SvgIcon class="icons" :name="val.icon"></SvgIcon>
            <p>{{ val.name }}</p>
        </div>
    </div>
    <div class="list mt20">
        <div>
            <!-- <Select /> -->
        </div>
        <div class="box" v-for="item in state.list" :key="item.id">
            <div class="user">
                <el-avatar :src="item.avatar" :size="53"></el-avatar>
                <div class="info">
                    <p>{{ item.nickname }}</p>
                    <p>{{ item.time }}</p>
                </div>
                <p v-text="item.type"></p>
            </div>
            <div class="content">
                {{ item.content }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getHomeLand } from '@/api'
import { onMounted, reactive } from 'vue'
import Select from '@/components/Select/index.vue'

interface article {
    id: number
    avatar: string
    time: string
    content: string
    nickname: string
    type: string
}

const state = reactive({
    icon: [
        { id: 1, name: '发布通知', icon: 'icon-fabutongzhi', link: '' },
        { id: 2, name: '发布作业', icon: 'icon-fabuzuoye', link: '' },
        { id: 3, name: '发私信', icon: 'icon-fasixin', link: '' },
    ],
    list: <article[]>[],
})

onMounted(async () => {
    const { data, status } = await getHomeLand()
    console.log(data)
    state.list = data
})
</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.icons {
    font-size: 100px;
}
.tab {
    //   justify-content:
    @include flex-auto(center, space-around);
    height: 230px;
    background-color: $white;
    .base {
        text-align: center;
        p {
            padding-top: 20px;
            font-size: $font22;
            color: #333;
        }
    }
}
.list {
    background-color: $white;
    padding: 40px 100px;
    .box {
        margin-top: 20px;
        border: 1px solid rgba(220, 220, 220, 1);
        border-radius: $br-m;
        padding: 16px;
        .user {
            @include flex-auto(center, space-between);
            margin-bottom: 16px;
            .info {
                width: 80%;
                line-height: 1.5;
            }
        }
        .content {
            text-align: justify;
            @include font-set($font14, #44494e, false, 1.3);
            @include text-hidden(4);
        }
    }
}
</style>
