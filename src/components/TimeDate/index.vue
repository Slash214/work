<template>
    <div class="picker">
        <span class="name">时间选择</span>
        <el-date-picker
            @change="pickerChange"
            @panel-change="panelChange"
            v-model="value1"
            type="daterange"
            range-separator="To"
            start-placeholder="开始的时间"
            end-placeholder="结束的时间"
            :shortcuts="shortcuts"
            :disabled-date="disabledDate"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('')

const shortcuts = [
    {
        text: '上周',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
        },
    },
    {
        text: '上个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
        },
    },
    {
        text: '最后3个月',
        value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
        },
    },
]

const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
}

// 值改变的时候触发
const pickerChange = (e: any) => {
    console.warn(e)
}

// 面板切换的时候触发
const panelChange = (e: any) => {
    console.log('面包改变', e)
}
</script>

<style scoped lang="scss">
.picker {
    .name {
        padding-right: 10px;
    }
}
</style>
