<template>
	<div class="main">
		<Crumbs :navlist="state.crumbs"></Crumbs>
		<div class="options mb20 mt20">
            <Select
                @update-value="changeWay"
                value="按学期选择"
                :selectlist="state.wayList"
                placeholder="请选择学期"
                tip="时间"
            />
            <Select
                @update-value="getTime"
                :hidden="state.currentFlag"
                :selectlist="state.timeselect"
                placeholder="请选择学期"
            />
            <TimeDate @get-change-time="getChangeTime" class="ml20" :hidden="!state.currentFlag" />
            <el-button class="ml20" type="primary" @click="queryData">查询数据</el-button>
        </div>
	</div>
</template>
	
<script setup lang='ts'>
import { reactive } from 'vue'
import crumbs from '@/common/breadcrumb'
import { ElMessage } from 'element-plus'
import { ApiCtl } from '@/api'


type selectlist = {
    id: number
    value: string | number
    start: string
    end: string
    label: string
}

const state = reactive({
   crumbs: [
        { name: crumbs.archive.name, link: crumbs.archive.link, active: false },
        { name: crumbs.teacherFile.name, link: crumbs.teacherFile.link, active: true },
	],
	currentTime: <any>{},
	wayList: [
        { id: 1, label: '按学期选择', value: 1 },
        { id: 2, label: '按时间选择', value: 2 },
	],
	timeselect: <selectlist[]>[],
	currentFlag: <boolean>false,
	loading: <boolean>false,
	list: <any>[],
	title: '',
})


const queryData = async () => {
    console.log('开始查询数据')
    state.loading = true
    state.list = []
    // setTimeout(() => {
    // 	state.loading = false
    // }, 5000);
    // return
    if (!state.currentTime.start || !state.currentTime.end) {
        console.log('请选择当前时间')
        ElMessage.warning('请选择当前时间')
        return
    }

    const { data, info, status } = await ApiCtl.getGradeList({
        startTime: state.currentTime?.start,
        endTime: state.currentTime?.end,
        findTime: 'create_time',
        msgTypeList: '1,2,5,14',
    })

    if (info) {
        console.log('请求失败')
        ElMessage.error(info)
        return
    }

    state.loading = false
    let arr: any[] = []
    state.title = `${state.currentTime.value}班级记录归档`
    data.forEach((e: any) => {
        let { className, msgType_1, msgType_5, msgType_14, msgType_2 } = e
        arr.push({
            one: className,
            two: msgType_1,
            three: msgType_5,
            four: msgType_2,
            five: msgType_14,
            six: msgType_1 + msgType_14 + msgType_2 + msgType_5,
        })
    })
    state.list = arr
    console.log('请求数据', data)
}

// change time way
const changeWay = (val: number) => {
    console.log(val)
    state.currentFlag = val === 1 ? false : true
}

// 获取学期 根据学期 获取 start time and end time
const getTime = (value: any) => {
    console.log('val', value)
    state.currentTime = state.timeselect.filter((e: selectlist) => value === e.value)[0]
    console.log('获取的time', state.currentTime)
}

// get start time and end time is custom time
const getChangeTime = (timeArr: string[]) => {
    console.log('获取的time', timeArr)
    state.currentTime = {
        start: timeArr[0],
        end: timeArr[1],
        value: '自定义时间',
    }
}

</script>
	 
<style scoped lang="scss">
@import '@/styles/mixin.scss';
.main {
	background-color: $white;
	min-height: 80vh;
	padding: 20px;
	.options {
		@include flex-auto();
	}
}
</style>