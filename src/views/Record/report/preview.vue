<template>
	<div class="main">
		<Crumbs :navlist="state.list" />

		<div class="privew">
			<div class="box" v-for="i in 9" :key="i">12321</div>
		</div>
	</div>
</template>
	
<script setup lang='ts'>
import Crumbs from '@/components/Crumbs/index.vue';
import { reactive } from 'vue';
	
const state = reactive({
	list: [
		{ name: '家园报告', link: '/record/report', active: false },
        { name: '儿童成长相册', link: '/subPage/album', active: false },
        { name: '儿童成长相册预览', link: '/subPage/preview', active: true },
	]
})

</script>
	
<style scoped lang="scss">
  .main {
	background-color: $white;
	width: 100%;
	padding: 20px;
	.privew {
		width: 91%;
		margin: 40px auto 0 auto;
		display: flex;
		flex-wrap: wrap;
		.box {
			width: 395px;
			height: 558px;
			margin: 0 47px 47px 0;
			border: 1px solid #ddd;
			&:nth-child(2n) {
				margin-right: 0;
			}
		}
	}
  }
</style>