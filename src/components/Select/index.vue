<template>
    <div>
        <span class="tips">{{ props.tip }}</span>
        <el-select
            @change="selectOnchange"
            v-model="val"
            class="m-2"
            :placeholder="props.placeholder || '默认搜索条件'"
            :size="props.size"
        >
            <el-option
                v-for="item in props.selectlist"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

interface selectlist {
    label: string
    value: string
}

const props: any = defineProps({
    selectlist: {
        type: Array,
        default: () => [],
    },
    tip: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '',
    },
    size: {
        type: String,
        default: 'default',
    },
    value: {
        type: String,
        default: '',
    },
})

const emit = defineEmits(['updateValue'])
const val = ref('')

onMounted(() => {
    if (props.value) val.value = props.value
})

const selectOnchange = () => {
    // console.log('当前选择的值', val.value)
    emit('updateValue', val.value)
}
</script>

<style>
.tips {
    font-size: 14px;
    line-height: 2.5;
    margin: 0 10px;
}
.el-select {
    width: 130px;
}
</style>
