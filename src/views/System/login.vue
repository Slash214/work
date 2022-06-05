<template>
    <div class="login">
        <div class="login_box">
            <el-input placeholder="输入账号" size="large" v-model="state.username"></el-input>
            <el-input placeholder="输入密码" size="large" v-model="state.password"></el-input>
            <el-button plain type="primary" size="large" @click="login">登陆</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { userLogin } from '@/api'
import { ElMessage } from 'element-plus'

const state = reactive({
    username: <string>'15328984202',
    password: <string>'123456',
})

const login = async () => {
    if (state.username && state.password) {
        const { code, data } = await userLogin({
            username: state.username,
            password: state.password,
        })
        console.warn('请求的数据', data)
		if (code === 200) {
			ElMessage.success({
                message: '登录成功',
                type: 'success',
                showClose: true,
                duration: 1000
            })
            let userInfo = data
            // userInfo.token = ''
            localStorage.userInfo
			localStorage.setItem('token', data?.token)
			location.reload()
		}
    }
}
</script>

<style scoped lang="scss">
.login {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
    .login_box {
        width: 300px;
        height: 300px;
        background-color: #fff;
        position: absolute;
        padding: 70px 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
