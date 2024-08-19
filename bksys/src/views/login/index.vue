<template>
    <div class="login_container">
        <el-row>
            <el-col>
                <el-form class="login_form">
                    <h1>welcome</h1>
                    <h2>巨星引擎</h2>
                    <el-form-item>
                        <el-input prefix-icon="User" placeholder="请输入账号" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" show-password prefix-icon="Lock" placeholder="请输入密码"
                            v-model="loginForm.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button :loading="loading" @click="login" class="login_btn">登陆</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script setup lang='ts'>
import { reactive, ref } from 'vue';
//引入仓库
import useUserStore from '@/stores/modules/user';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
let loading = ref(false);
let useStore = useUserStore();
let $router = useRouter();
let loginForm = reactive({ username: '', password: '' })
const login = async () => {
    loading.value = true;
    try {
        await useStore.userLogin(loginForm);
        $router.push('/home')
        loading.value = false;
    } catch (error) {
        loading.value = false;
        ElNotification({
            type: 'error',
            message: (error as Error).message
        })
    }
}
</script>
<style scpoed lang='scss'>
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg');
    background-size: cover;

    .login_form {
        position: relative;
        width: 350px;
        top: 30vh;
        left: 35vw;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        padding: 30px;

        .login_btn {
            width: 100%;
        }

        h1 {
            color: rgb(194, 202, 223);
            font-size: 30px;
            margin-bottom: 20px;
        }

        h2 {
            color: rgb(148, 167, 214);
            font-size: 20px;
            margin-bottom: 20px;
        }
    }
}
</style>
