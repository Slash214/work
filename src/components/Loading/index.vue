<template>
    <div v-if="props.show" class="loading" v-loading="props.show" :element-loading-text="props.text"></div>
</template>

<script setup lang="ts">
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
