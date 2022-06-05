<template>
   <el-header>
      <Top />
   </el-header>
   <el-container>
      <el-aside>
         <MenuList />
      </el-aside>
      <el-main>
         <router-view></router-view>
      </el-main>
   </el-container>
   <BackTop />
</template>
	
<script setup lang='ts'>
import Top from '@/layout/Top/index.vue';
import MenuList from './MenuList/index.vue';

</script>
	
<style lang="scss" scoped>
	.el-header {
      height: 70px;
      line-height: 70px;
      background-color: #fff;
      box-shadow: $base;
   }
   .el-container {
      min-width: 1200px;
      width: 1200px;
      max-width: 1200px;
      margin: 20px auto;
      .el-aside {
         width: 200px;
         background-color: #fff;
         height: 100%;
         min-height: 10vh;
         box-shadow: $base;
         border-radius: $br-m;
      }
      .el-main {
         padding-top: 0;
      }
   }
</style>