<template>
    <div class="main">
        <Crumbs :navlist="state.crumbs"></Crumbs>
        <div class="options">
            <h4 class="mb10">请选择以下条件，获取报告</h4>
            <div class="timer">
                <Select class="mr10" @update-value="changeWay" :value="'按学期选择'" :selectlist="state.timeWay" 
                tip="时间" placeholder="按学期选择"></Select>
                <TimeDate @get-change-time="getChangeTime" :hidden="state.way === 1"></TimeDate>
                <Select @update-value="getTimeData" :hidden="state.way === 2" :selectlist="state.timeList" tip="时间" placeholder="按时间选择"></Select>
                <Select @update-value="getClassData" :value="state.currentGrade.value" :selectlist="state.classList" tip="班级" placeholder="按班级选择" />
                <el-button class="ml10" type="primary" :disabled="disabled" @click="selectData">查询数据</el-button>
            </div>
        </div>
        <div class="content">
            <h4 class="mb20">选择全班或儿童导出报告（点击儿童姓名就可导出）</h4>
            <div class="list">
                <div class="brds" @click="outWord" >
                    <p>一键</p>
                    <p>导出</p>
                </div>
                <div class="brds" @click="gotoChild(item)" v-for="item in state.studentList" :key="item.stuId">
                    <p>{{item.coaMsgNum}}</p>
                    <p>{{item.stuName}}</p>
                </div>
            </div>
            <div class="coverbox">
                <!-- <h4>报告样式</h4> -->
                <div class="cover">
                    <el-button @click="changeCover">一键更换全班封面</el-button>
                </div>
                <div class="cover">
                    <p>请在这个地方添加寄语</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import Select from '@/components/Select/index.vue'
import Crumbs from '@/components/Crumbs/index.vue'
import TimeDate from '@/components/TimeDate/index.vue'
import { useRouter } from 'vue-router'
import { computed } from '@vue/reactivity'
import { ApiCtl } from '@/api'

const router = useRouter()
const state = reactive({
    crumbs: [
        { name: '班级归档', link: '/record/report', active: false },
        { name: '儿童成长相册', link: '/subPage/album', active: true },
    ],
    timeWay: [ {id: 1, label: '按学期选择', value: 1 }, { id: 2, label: '按时间选择',value: 2 }],
    classList: [
        { id: 1, label: '班级1', value: 'classId-1' },
        { id: 2, label: '班级2', value: 'classId-2' },
        { id: 3, label: '班级3', value: 'classId-3' },
        { id: 4, label: '班级4', value: 'classId-4' },
    ],
    timeList: [
        { id: 1, value: '2021上半学年', label: '2021上半学年', start: '2021-02-08', end: '2021-06-07' },
        { id: 2, value: '2021下半学年', label: '2021下半学年', start: '2021-02-08', end: '2021-06-07' },
        { id: 3, value: '2020上半学年', label: '2020上半学年', start: '2021-02-08', end: '2021-06-07' },
        { id: 4, value: '2020下半学年', label: '2020下半学年', start: '2021-02-08', end: '2021-06-07' },
    ],
    classvalue: '',
    way: <number>1,
    currentTime: { start: '', end: '', value: ''},
    currentGrade: { id: 0, label: '', value: '' },
    studentList: <{stuName: string, coaMsgNum: number, stuData: {}, stuId: number}[]>[]
})

const disabled:any = computed(():boolean => {
   return state.currentGrade.id && state.currentTime.value ? false : true
})

const gotoChild = (item: any) => {
    router.push('/subPage/preview')
}

const changeCover = () => {
    console.log('更换封面')
}


const selectData = async () => {
    console.log('查询')
    const { data, status, info } = await ApiCtl.getGradeList({
        startTime: state.currentTime.start,
        endTime: state.currentTime.end
    })
    console.log(data, status, info)

    if (status) {
        state.studentList = data[0].children
    }
}

const changeWay = (val: any) => {
    console.log('当前的值', val)
    state.way = +val
    state.currentTime = { start: '', end: '', value: ''},
    state.currentGrade = { id: 0, label: '', value: '' }
    state.classvalue = ''
    console.error('是否改变', state.currentGrade, state.currentTime)
}

const outWord = () => {
    console.log('导出')
}

const getTimeData = (val: any) => {
    // 获取的时间
    console.log('获取的时间', val)
    state.currentTime = state.timeList.filter((e: any) => e?.value === val)[0]
    console.log('获取的时间', state.currentTime)
}

const getClassData = (val: any) => {
    // 获取的班级
    state.currentGrade = state.classList.filter((e: any) => e?.value === val)[0]
    console.log('获取的班级', val)
    console.log('获取的班级', state.currentGrade)
}

const getChangeTime = (arr: string[]) => {
    console.warn('时间数组', arr)
    state.currentTime = { start: arr[0], end: arr[1], value: '自定义时间' }
    console.warn('时间数组', state.currentTime)
}

</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.main {
    width: 100%;
    background-color: $white;
    padding: 20px;
    .options {
        width: 90%;
        margin: 40px auto;
        .timer {
            display: flex;
        }
    }
    .content {
        width: 90%;
        margin: 40px auto 0 auto;
        .list {
            width: 100%;
            @include flex-auto();
            flex-wrap: wrap;
            h4 {
                font-weight: 550;
            }
            .brds {
                width: 90px;
                height: 90px;
                margin: 0 10px 10px 0;
                border-radius: $br-s;
                background-color: #eee;
                box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
                @include flex-auto(center, center, column);
                &:hover {
                    background-color: var(--system-primary-color);
                    color: $white;
                    cursor: pointer;
                }
                p {
                  line-height: 1.5;
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
