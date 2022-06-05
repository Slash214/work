<template>
    <header class="safe_area">
        <div class="item">
            <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                    {{state.currentSchool}}
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            v-for="item in schoolList"
                            :key="item.id"
                            :command="item"
                            >{{ item.name }}</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
        <div class="item">
            <el-dropdown @command="setOptions">
                <span class="el-dropdown-link">
                    爱呵呵
					<el-icon class="el-icon--right"><arrow-down /></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            v-for="item in options"
                            :key="item.id"
                            :command="item"
                            >{{ item.name }}</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import { reactive } from 'vue';


const schoolList = [
    { id: 1, name: '电子科技大学' },
    { id: 2, name: '清华大学' },
    { id: 3, name: '北京交通大学' },
    { id: 4, name: '安徽工程科技学院　　' },
    { id: 5, name: '中央财经大学' },
]

const state = reactive({
	currentSchool: schoolList[0].name
})

interface select {
	id: number,
	name: string
}

const options:select[] = [
    { id: 1, name: '修改密码' },
    { id: 2, name: '退出登陆' },
]

const handleCommand = (command: select) => {
    // ElMessage(`click on item ${command}`)
	state.currentSchool = command.name
}

const setOptions = (command: select) => {
	if (command.id === 1) {
		ElMessage(`修改密码........`)
	}

	if (command.id === 2) {
		ElMessage('正在退出中...')
		localStorage.removeItem('token')
		setTimeout(() => {
			location.reload()
		}, 1000);
	}
}

</script>

<style lang="scss" scoped>
@import '@/styles/mixin.scss';
.safe_area {
    box-sizing: border-box;
    display: flex;
	align-items: center;
    justify-content: space-between;
	height: 100%;
    .item {
        @include flex-auto(center, center);
        .el-dropdown-link {
			font-size: $font18;
		}
    }
}
</style>
