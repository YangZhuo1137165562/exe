import React, { Component } from 'react'
import {login} from "@/api/api"
export default class Login extends Component {
    state={
        user:"",
        pwd:"",
        regflag:false
    }
    changeInp=(e)=>{
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
    }
    async submitFn(){//async必须容错处理
        try{
            let {user,pwd} =this.state
        let loginRes=await login({userName:user,password:pwd})
        if(loginRes.data.code===1){
            window.localStorage.token=loginRes.data.token
            window.localStorage.userId=loginRes.data.userId
            this.props.history.push("/index/home")
        }else if(loginRes.data.code===-1){
            this.setState({regflag:true})
        }
        }catch(e){
            console.log(e.response);
        }
    }
    registerFn=()=>{
        this.props.history.push("/registry")
    }
    render() {
        let {user,pwd,regflag}=this.state
        return (
            <div className="index-page">
                <input className="usercss" name="user" value={user} onChange={(e)=>{this.changeInp(e)}} placeholder="请输入用户名" />
                <input className="pwdcss" name="pwd" value={pwd} onChange={(e)=>{this.changeInp(e)}} placeholder="请输入密码" />
                <div className="submit" onClick={()=>{this.submitFn()}}>登录</div>
                {
                    regflag?<div className="register" onClick={()=>{this.registerFn()}}>注册</div>:null
                }
            </div>
        )
    }
}
