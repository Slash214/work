<template>
    <div class="main">
		<Crumbs :navlist="state.crumbs"></Crumbs>
		<div class="options mb20 mt20">
			<Select @update-value="changeWay" value="按学期选择" :selectlist="state.wayList" placeholder="请选择学期" tip="时间" />
			<Select @update-value="getTime" :hidden="state.currentFlag" :selectlist="state.timeselect" placeholder="请选择学期" />
			<TimeDate @get-change-time="getChangeTime" class="ml20" :hidden="!state.currentFlag" />
			<el-button class="ml20" type="primary" @click="queryData">查询数据</el-button>
		</div>
		<Loading :show="state.loading" />
		<div class="container" v-if="state.list.length">
			<h4 class="mt20 mb10">{{state.title}}</h4>
			<BaseTable :list="state.list" :header="state.tableHeader" />

			<div class="box">
				<p class="mb20">观察记录包</p>
				<div class="item" v-for="item in state.list" :key="item">
				  <span>
					{{formatTime(new Date())}}
					{{item.one}}
					{{state.currentTime.value}}
				  </span>
				  <a @click="hanldehange(val)" v-for="val of state.tab" :key="val.id">{{val.name}}</a>
				  <el-divider />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import crumbs from '@/common/breadcrumb'
import {formatTime } from '@/utils/tool'
import { ApiCtl } from '@/api';
import { ElMessage } from 'element-plus';

type selectlist = {
	id: number,
	value: string | number,
	start: string,
	end: string,
	label: string
}

const state = reactive({
	crumbs: [
        { name: crumbs.archive.name, link: crumbs.archive.link, active: false },
        { name: crumbs.gradeFile.name, link: crumbs.gradeFile.link, active: true },
	],
	wayList: [
		{ id: 1, label: '按学期选择', value: 1 },
		{ id: 2, label: '按时间选择', value: 2 },
	],
	currentFlag: <boolean>false,
	currentTime: <any>{},
	tableHeader: ['班级', 'COA记录', '大动作', '记录叙事', '记录活动', '记录总数'],
	list: <any>[],
	title: '我是标题不听不听不听',
	tab: [
		{ id: 1, name: '整包下载' }, { id: 2, name: '预览观察记录' },
		{ id: 3, name: '预览活动记录'}, { id: 4, name: '自定义下载' }
	],
	timeselect: <selectlist[]>[],
	loading: <boolean>false
})

let num:any = { one: '拉拉班级', two: '23', three: 23, four: '45', five: '95', six: '186' }
onMounted(async () => {
	const { data, status, info } = await ApiCtl.getTerm()
	if (status) {
		let item: selectlist[] = []
		data.forEach((ele: { startTime: string, endTime: string, term: string }, key: number) => {
			item.push({
				id: key + 1,
				start: ele.startTime,
				end: ele.endTime,
				value: ele.term,
				label: ele.term
			})
		});
		state.timeselect = item
	}
	console.warn('info', info)
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
		msgTypeList: '1,2,5,14'
	})

	if (info) {
		console.log('请求失败')
		ElMessage.error(info)
		return
	}

    state.loading = false
	let arr: any[] = []
	data.forEach((e: any) => {
		let { className, msgType_1, msgType_5, msgType_14, msgType_2} = e 
		arr.push({
			one: className,
			two: msgType_1,
			three: msgType_5,
			four: msgType_2,
			five: msgType_14,
			six: msgType_1 + msgType_14 + msgType_2 + msgType_5
		})
	})
	state.list = arr
	console.log('请求数据', data)
}

const hanldehange = (item: any) => {
  console.log('点击了', item)
}


// change time way 
const changeWay = (val: number) => {
	console.log(val)
	state.currentFlag = val === 1 ? false : true
}

// 获取学期 根据学期 获取 start time and end time 
const getTime = (value:any) => {
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
    width: 100%;
    background-color: $white;
    padding: 20px;
	min-height: 80vh;
	.options {
		@include flex-auto();
	}
	.container {
		margin: 0 auto;
		width: 90%;
        h4 {
		  margin: 50px 0 20px 0;
		  @include flex-auto(center, center);
		  @include font-set(22px, #333, 500, 1.5);
		}
		.box {
			margin-top: 40px;
			text-align: justify;
			.item {
            //   padding: 20px 0;
			  color: #888;
			  a {
				color: rgb(165, 54, 238);
				padding-left: 30px;
			  }
			}
		}
	}
}
</style>
