<template>
    <div class="main">
        <div class="box-styl">
            <h1>Setup模式</h1>
            <p class="section-box">
                Pinia的state: count = <b>{{ count }}</b>
            </p>
            <p class="section-box">
                Pinia的getters: doubleCount() = <b>{{ doubleCount() }}</b>
            </p>
            <div class="section-box">
                <p>Pinia的action: increment()</p>
                <el-button @click="increment">点我</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { userCounterStoreForSetup } from '@/store/counterForOptions'

const counterStoreForSetup = userCounterStoreForSetup()
const { count } = storeToRefs(counterStoreForSetup)
const { increment, doubleCount } = counterStoreForSetup
</script>

<style scoped lang="scss">
.main {
    width: 100%;
    background-color: $white;
    padding: 20px;
    min-height: 80vh;
}
</style>
