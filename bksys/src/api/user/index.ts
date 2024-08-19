//用户相关的接口
import request from "@/utils/request";
import type { loginForm, loginResponseData,userResponseData } from "./type";
//统一管理
enum API {
    LOGIN_URL = "/user/login",
    USERINFO_URL = "/user/info"
}
//对外暴露
//登陆接口
export const reqLogin = (data: loginForm) => request.post<any, loginResponseData>(API.LOGIN_URL, data);
//获取用户
export const reqUserInfo = () => request.get<any,userResponseData>(API.LOGIN_URL)