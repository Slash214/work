<template>
	<div class="block">
       <div class="item" @click="handleLink(item.url)" v-for="item of menu" :key="item.id">
		   <el-image :src="item.icon" fir="cover"></el-image>
		   <h4>{{item.title}}</h4>
		   <p>{{item.desc}}</p>
	   </div>
	</div>
</template>
	
<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

interface list {
	id: number,
	icon: string,
	title: string,
	desc: string,
	url: string,
}
const router = useRouter()
const menu = ref<list[]>([
	{ id: 1, icon: '', title: '儿童成长相册', desc: '接受接受接受接受接受', url: '/subPage/album'},
	{ id: 2, icon: '', title: '儿童叙事记录报告', desc: '接受接受接受接受接受', url: '/subPage/album'},
	{ id: 3, icon: '', title: 'COA成长报告', desc: '接受接受接受接受接受', url: '/subPage/grow'},
])

const handleLink = (url: string) => {
   if (url) {
	   console.warn(url)
	//    return
	  router.push(url)
   }
}

</script>
	
<style scoped lang="scss">
@import '@/styles/mixin.scss';
	.block {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		.item {
			width: 32%;
			margin: 0 2% 2% 0;
			padding: 16px;
			border-radius: $br-m;
			background-color: $white;
			cursor: pointer;
			transition: box-shadow .3s ease-in-out;
			@include flex-auto(center, center, column);
			&:hover {
			   box-shadow: $simple;
			}
			&:nth-child(3n) {
				margin-right: 0;
			}
			.el-image {
				border-radius: 50%;
				width: 120px;
				height: 120px;
			}
			h4 {
			   padding: 10px 0;
			   @include font-set($font18, #111, 550, 1.5)
			}
			p {
			  @include font-set($font14, #888, false, 1.5)
			}
		}
	}
</style>