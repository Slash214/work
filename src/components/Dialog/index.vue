<template>
    <teleport to="#modal">
        <div class="dialog" v-if="dialogVisible">
            <el-dialog
                v-model="dialogVisible"
                :title="title"
                width="40%"
                :before-close="handleClose"
            >
                <el-skeleton v-if="!message.length" :rows="3" animated />
                <div v-else>
                    <div class="info" v-if="!download">
                        <p v-for="(val, key) of message" :key="key">{{ val }}</p>
                    </div>
                    <div class="progress" v-else>
                        <el-progress
                            type="circle"
                            :status="percentage === 100 ? 'success' : ''"
                            :percentage="percentage"
                            :color="colors"
                        />
                        <p>{{percentage < 90 ? '正在打包下载资源中...' : '正在启动下载...' }}</p>
                    </div>
                </div>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button type="primary" @click="confirom">{{ btnText }}</el-button>
                    </span>
                </template>
            </el-dialog>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import useDOMCreate from '@/hooks/useDOMCreate'
const props = defineProps({
    title: {
        type: String,
        default: '下载',
    },
    message: {
        type: Array,
        default: () => [],
    },
    btnText: {
        type: String,
        default: '按钮名称',
    },
    dialogVisible: {
        type: Boolean,
        default: false,
    },
    percentage: {
    	type: Number,
    	default: 0
    }
})
useDOMCreate('modal')
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

const download = ref(<boolean>false)
const confirom = () => {
    download.value = !download.value
    emit('confirm', 'sure')
}
</script>

<style scoped lang="scss">
.dialog {
    width: 100vw;
    height: 100vh;
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
    .progress {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
          margin-top: 20px;
        }
    }
}
</style>
