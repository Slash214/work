<template>
  <el-select @change="selectOnchange" v-model="value" class="m-2" :placeholder="props.tip || '默认搜索条件'" :size="props.size">
    <el-option
      v-for="item in props.selectlist"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface selectlist {
  label: string,
  value: string
} 

const props:any = defineProps({
  selectlist: {
    type: Array,
    default: () => []
  },
  tip: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'miden'
  }
})

const value = ref('')

const selectOnchange = () => {
  console.log('当前选择的值', value.value)
}

</script>
