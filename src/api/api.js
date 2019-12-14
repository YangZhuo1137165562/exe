import axios from "axios"

// 获取所有用户接口
export const user=(params)=>axios.get("/user",{params})
// 用户登录接口
export const login=(params)=>axios.post("/login",params)
//注册接口
export const register=(params)=>axios.post("/register",params)

