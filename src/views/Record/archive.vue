<template>
    <div class="archive">
        <div class="item" @click="gotoDetails(item)" v-for="(item, key) of state.icon" :key="key">
            <SvgIcon :size="'80'" :name="item.name" />
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ApiCtl } from '@/api'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const state = reactive({
    icon: [
        {
            id: 1,
            name: 'icon-banjishuliang',
            title: '班级记录归档',
            desc: '',
            link: '/subPage/gradefile',
        },
        { id: 2, name: 'icon-zongjiluliang', title: '教师记录归档', desc: '', link: '' },
        { id: 3, name: 'icon-youeryuanshuliang', title: '全园记录数据统计', desc: '', link: '' },
        { id: 4, name: 'icon-fabutongzhi', title: '班级记录数据统计', desc: '', link: '' },
        { id: 5, name: 'icon-fabuzuoye', title: '教师记录数据统计', desc: '', link: '' },
        { id: 6, name: 'icon-jiaoshishuliang', title: '儿童记录数据统计', desc: '', link: '' },
        { id: 7, name: 'icon-ertongshaguliang', title: '儿童综合报告', desc: '', link: '' },
        { id: 8, name: 'icon-banjishuliang', title: '儿童COA报告', desc: '', link: '' },
        { id: 9, name: 'icon-dangqianxueqijiluliang', title: '儿童大动作报告', desc: '', link: '' },
    ],
})

onMounted(async () => {
    const { data, info, status } = await ApiCtl.getrecord({
        module: 'menuPc',
        crudType: 'select',
        selectFn: 'recordModular',
    })

    if (status) {
        console.warn('请求成功')
    }

    console.log('获取的数据', data, info, status)
})

const gotoDetails = (item: {
    id: number
    name: string
    title: string
    desc: string
    link: string
}) => {
    console.log('点击了', item)
    if (item.link) router.push(item.link)
}
</script>

<style lang="scss" scoped>
.archive {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .item {
        cursor: pointer;
        width: 32%;
        border-radius: 12px;
        margin: 0 2% 2% 0;
        background-color: $white;
        padding: 20px;
        transition: box-shadow 0.3s ease-in-out;
        @include flex-auto(center, center, column);
        height: 240px;
        &:hover {
            box-shadow: $simple;
        }
        &:nth-child(3n) {
            margin-right: 0;
        }
        h4 {
            padding: 20px 0;
            @include font-set($font18, #111, 550, 1.5);
        }
        p {
            @include font-set($font14, #888, false, 1.5);
        }
    }
}
</style>
