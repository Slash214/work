<template>
    <div class="dialog">
        <el-dialog v-model="dialogVisible" :title="title" width="40%" :before-close="handleClose">
            <div class="info">
				<p v-for="(val,key) of message" :key="key">{{val}}</p>
			</div>
			<div class="progress">
				 <el-progress type="circle" :status="percentage === 100 ? 'success' : ''"
				 :percentage="percentage" :color="colors" />
			</div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button type="primary" @click="confirom">{{btnText}}</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import { setInterval } from 'timers/promises';

const props = defineProps({
	title: {
		type: String,
		default: '下载'
	},
	message: {
		type: Array,
		default: () => []
	},
	btnText: {
		type: String,
		default: '按钮名称'
	},
	dialogVisible: {
		type: Boolean,
	    default: false
	},
	// percentage: {
	// 	type: Number,
	// 	default: 100
	// }
})

const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const emit = defineEmits(['confirm'])
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('你确定要取消嘛?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
const percentage = ref(<number>0)

const confirom = () => {
	// console.log('确认下载')
	percentage.value += 10
	emit('confirm', 'sure')
	
}


</script>

<style scoped lang="scss">
.dialog {
	.info {
		font-size: 14px;
		color: #333;
		line-height: 1.5;
		p {
		  margin-bottom: 10px;
		  &:last-child {
			margin-bottom: 0;
		  }
		}
	}
}

</style>
