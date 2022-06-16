<template>
    <div class="picker">
        <span class="name">时间</span>
        <el-date-picker
            @change="pickerChange"
            @panel-change="panelChange"
            v-model="value1"
            type="daterange"
            range-separator="到"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            :shortcuts="shortcuts"
            :disabled-date="disabledDate"
        />
    </div>
</template>

<script setup lang="ts">
import { formatTime } from '@/utils/tool';
import { ref } from 'vue'

const value1 = ref('')
const emit = defineEmits(['getChangeTime'])
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
    // e is array => start === e[0]  end === e[1]
    console.warn(`date time value is change, start time ${e[0]}, end time ${e[1]}`)
    let timeArr: [] = []
    timeArr = e.map((item: Date) => formatTime(item))
    console.warn('success', timeArr)
    emit('getChangeTime', timeArr)
}

// 面板切换的时候触发
const panelChange = (e: any) => {
    console.log('面版改变', e)
}

</script>

<style scoped lang="scss">
.picker {
    .name {
        padding-right: 10px;
        font-size: 14px;
    }
}
</style>
