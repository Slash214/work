<template>
    <teleport to="#loading">
        <div v-if="show" class="loading" v-loading :element-loading-text="props.text"></div>
    </teleport>
</template>

<script setup lang="ts">
import useDOMCreate from '@/hooks/useDOMCreate';

useDOMCreate('loading')
const props = defineProps({
    text: {
        type: String,
        default: '正在加载数据...',
    },
    show: {
        type: Boolean,
        default: false,
    },
})
</script>

<style scoped>
.loading {
    margin-top: 100px;
}
</style>
