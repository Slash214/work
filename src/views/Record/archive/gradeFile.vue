<template>
    <div class="main">
		<Crumbs :navlist="state.crumbs"></Crumbs>
		<div class="options mb20 mt20">
			<span>时间</span>
			<Select  />
			<!-- <el-button >查询数据</el-button> -->
		</div>
		<div class="container">
			<h4 class="mb10">{{state.title}}</h4>
			<BaseTable :list="state.list" :header="state.tableHeader" />

			<div class="box">
				<p class="mb20">观察记录包</p>
				<div class="item" v-for="item in 10" :key="item">
				  <span>{{formatTime(new Date())}}上半学年信息</span>
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

const state = reactive({
	crumbs: [
        { name: crumbs.archive.name, link: crumbs.archive.link, active: false },
        { name: crumbs.gradeFile.name, link: crumbs.gradeFile.link, active: true },
	],
	tableHeader: ['班级', 'COA记录', '大动作', '记录叙事', '记录活动', '记录总数'],
	list: <any>[],
	title: '我是标题不听不听不听',
	tab: [
		{ id: 1, name: '整包下载' }, { id: 2, name: '预览观察记录' },
		{ id: 3, name: '预览活动记录'}, { id: 4, name: '自定义下载' }
	]
})


let num:any = { one: '拉拉班级', two: '23', three: 23, four: '45', five: '95', six: '186' }
onMounted(() => {
	for (let i = 0; i < 10; i++) {
		state.list.push(num)
	}
})


const hanldehange = (item: any) => {
  console.log('点击了', item)
}


</script>

<style scoped lang="scss">
@import '@/styles/mixin.scss';
.main {
    width: 100%;
    background-color: $white;
    padding: 20px;
	.container {
		margin: 0 auto;
		width: 90%;
        h4 {
		  @include flex-auto(center, center);
		  @include font-set(24px, #333, 550, 1.5);
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
