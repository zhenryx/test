import { defineStore } from "pinia";
//引入接口
import { reqLogin } from "@/api/user";
import type { loginForm } from "@/api/user/type";
let useUserStore=defineStore('User',{
    state:()=>{
        return{
            token:localStorage.getItem("TOKEN"),
        }
    },
    actions:{
        //用户登录方法
        async userLogin(data:loginForm){
            let result:any=await reqLogin(data);
            if(result.code == 200){
                //pinia存储token
                this.token = result.data.token;
                //本地存储持久化存储
                localStorage.setItem("TOKEN", result.data.token)
                //async函数返回成功的promise
                return 'ok';
            }else{
                return Promise.reject(new Error(result.data.message));
            }
        }
    },
    getters:{

    }
})
export default useUserStore