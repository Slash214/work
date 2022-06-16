<template>
    <div class="top">
		<div class="tab">
			<div class="icons" v-for="item in state.icons" :key="item.id">
				<SvgIcon :size="'80'" :name="item.name"></SvgIcon>
				<span class="icon_title">{{item.title}}</span>
			</div>
		</div>
		<div class="plan">
		    <div class="myplan">
				<p>我的计划</p>
				<SvgIcon class="svgicons" name="icon-xiala" :size="'20'"></SvgIcon>
			</div>
			<div class="ongoing">
				<p>正在执行</p>
				<p>12</p>
			</div>
			<div class="total">
				<p>总任务</p>
				<p>222</p>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="types">
			<p>记录类型</p>
			<el-button>全部类型</el-button>
			<el-button>COA记录</el-button>
			<el-button>叙事记录</el-button>
			<el-button>大动作记录</el-button>
			<el-button>活动记录</el-button>
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import SvgIcon from '@/components/svgIcon/index.vue';
import { reactive } from 'vue';

const state = reactive({
	icons: [
		{id: 1, name: 'icon-xiejilu' , title: '写活动记录'},
		{id: 2, name: 'icon-xietuwenjilu' , title: '写叙事记录'},
		{id: 3, name: 'icon-xieCOAjilu' , title: '写COA记录'},
		{id: 4, name: 'icon-xiedadongzuojilu' , title: '写大动作记录'},
		{id: 5, name: 'icon-xieanli' , title: '写案例'},
		{id: 6, name: 'icon-benzhoujiluliang' , title: '统计分析'},
		{id: 7, name: 'icon-zongjiluliang' , title: '查看总记录'},
		{id: 8, name: 'icon-fabujihua' , title: '发布计划'},
	]
})
	
</script>
	
<style scoped lang="scss">
@import '@/styles/mixin.scss';
    .top {
		width: 100%;
		@include flex-auto(false, space-between);
		.tab {
			background-color: $white;
			width: 590px;
			display: flex;
			flex-wrap: wrap;
			padding: 20px;
			.icons {
			  width: 85px;
			  margin: 0 66px 20px 0;
			  &:nth-child(4n) {
				margin-right: 0
			  }
              @include flex-auto(center, center, column);
			  .icon_title {
				padding-top: 20px;
				font-size: 14px;
			  }
			}
		}
		.plan {
			margin-left: 20px;
			flex: 1;
			background-color: $white;
			padding: 20px;
			@include flex-auto(false, space-between, column);
			
			.myplan {
				cursor: pointer;
				@include flex-auto(center, space-between);
				@include font-set(20px, #111, 600, 1.5);
				p {
				  position: relative;
				  padding-left: 10px;
				  &::after {
					position: absolute;
					content: ' ';
					top: 50%;
					left: 0;
					transform: translate(-50%, -50%);
					width: 5px;
					height: 78%;
					border-radius: $br-l;
					background-color: #49aa9f;
				  }
				}
				.svgicons {
					transform: rotate(-90deg);
				}
			}
			.ongoing, .total {
				width: 100%;
				height: 110px;
				display: flex;
				// background-color: #000;
				p {
				  @include flex-auto(center, center);
				  @include font-set(24px, #111, false, 1.5);
				  width: 50%;
				  &:first-child {
					border-radius: $br-m 0 0 $br-m;
					background-color: rgba(20, 133, 238, 0.1);
					font-size: 14px;
				  }
				  &:last-child {
					border-radius: 0 $br-m $br-m 0;
				  }
				}
			}
		}
	}
	.container {
		background-color: $white;
		width: 100%;
		margin-top: 20px;
		border-radius: $br-m;
		position: relative;
		padding: 20px;
	}
</style>

