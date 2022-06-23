<template>
    <el-table :data="list" 
    border 
    style="width: 100%"
    class="elTable"
    :cell-style="{ borderColor: '#ccc' }"
    :header-cell-style="{ borderColor: '#ccc' }"
    v-if="row">
        <el-table-column :prop="menu[i - 1]" :label="header[i - 1]" v-for="i in row" />
    </el-table>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { strNumberArr } from '@/typings'

const props = defineProps({
    list: {
        type: Array,
        default: <strNumberArr>(<unknown>[]),
    },
    header: {
        type: Object,
        default: [],
    },
})
/**
 * 封准格式为一个10行10列表格
 * 标头：[one，two，three，four，five，six，seven，eight，nine，ten]
 * tableData: [{ one: 'value', two: 'value', three: 'value'.... ten: 'value' }]
 */
const row = computed(() => props.header.length)
const menu = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
</script>


<style scoped lang="scss">
.elTable {
    border: 1px solid #ccc;
}
</style>
