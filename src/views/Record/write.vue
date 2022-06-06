<template>
    <div class="top">
		<div class="tab">
			<div class="icons" v-for="item in state.icons" :key="item.id">
				<SvgIcon :size="'80'" :name="item.name"></SvgIcon>
				<span class="icon_title">{{item.title}}</span>
			</div>
		</div>
		<div class="plan">12</div>
	</div>
	<div class="container">
		内容
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
		@include flex-auto(center, space-between);
		.tab {
			background-color: $white;
			width: 590px;
			display: flex;
			flex-wrap: wrap;
			padding: 20px;
			.icons {
			  width: 85px;
			  margin: 0 66px 20px 0;
			  height: 100%; 
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
			flex: 1;
			background-color: $white;
		}
	}
	.container {
		background-color: $white;
		width: 100%;
		margin-top: 20px;
		border-radius: $br-m;
		position: relative;
	}
</style>

