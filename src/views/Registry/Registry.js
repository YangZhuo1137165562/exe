import React, { Component } from 'react'
import { register } from "@/api/api"
import Toast from "antd-mobile/lib/toast"//引入js
import "antd-mobile/lib/toast/style/css"//引入样式
export default class Registry extends Component {
    state = {
        user: "",
        pwd: "",
        name: ""
    }
    changeInp = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }
    async registerFn() {
        let { user, pwd, name } = this.state
        //要求两次用户名一致
        if (user === name) {
            try {
                let regRes = await register({ userName: user, password: pwd, realName: name })
                // 通过regRes就可以把用户存入数据库中，并且可以有一个令牌
                if(regRes.data.code===1){//注册成功，去登陆的
                    this.props.history.go(-1)
                }
            }
            catch (e) {
                Toast.info(e.response.data.message)
                // console.log(e.response.data.message);
            }
        } else {
            Toast.info('用户名两次不一样', 1);
        }
    }
    render() {
        let { user, pwd, name } = this.state
        return (
            <div className="registry-page">
                <input className="usercss" name="user" value={user} onChange={(e) => { this.changeInp(e) }} placeholder="请输入用户名" />
                <input className="pwdcss" name="pwd" value={pwd} onChange={(e) => { this.changeInp(e) }} placeholder="请输入密码" />
                <input className="usercss" name="name" value={name} onChange={(e) => { this.changeInp(e) }} placeholder="请输入真实姓名" />
                <div className="register" onClick={() => { this.registerFn() }}>注册</div>
            </div>
        )
    }
}
