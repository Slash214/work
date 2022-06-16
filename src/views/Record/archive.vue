<template>
    <div class="archive">
       <div class="item" @click="gotoDetails(item)" v-for="item of state.icon" :key="item.id"> 
		  <SvgIcon :size="'80'" :name="item.name"  />
		  <h4>{{item.title}}</h4>
		  <p>{{item.desc}}</p>
	   </div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const state = reactive({
	icon: [
		{ id: 1, name: 'icon-banjishuliang', title: '班级记录归档', desc: '' },
		{ id: 2, name: 'icon-zongjiluliang', title: '教师记录归档', desc: '' },
		{ id: 3, name: 'icon-youeryuanshuliang', title: '全园记录数据统计', desc: '' },
		{ id: 4, name: 'icon-fabutongzhi', title: '班级记录数据统计', desc: '' },
		{ id: 5, name: 'icon-fabuzuoye', title: '教师记录数据统计', desc: '' },
		{ id: 6, name: 'icon-jiaoshishuliang', title: '儿童记录数据统计', desc: '' },
		{ id: 7, name: 'icon-ertongshaguliang', title: '儿童综合报告', desc: '' },
		{ id: 8, name: 'icon-banjishuliang', title: '儿童COA报告', desc: '' },
		{ id: 9, name: 'icon-dangqianxueqijiluliang', title: '儿童大动作报告', desc: '' },
	]
})

const gotoDetails = (item: any) => {
  console.log('点击了', item)
  console.log(1 === 1)
  console.log(1 >= 1)
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
			transition: box-shadow  .3s ease-in-out;
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
			  @include font-set($font14, #888, false, 1.5)
			}
		}

	}
</style>
