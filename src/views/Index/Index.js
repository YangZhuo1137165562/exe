//二级路由，首页，商家，购物车，我的 

import React, { Component } from 'react'
import {NavLink} from "react-router-dom"
import RouterView from "@/router/routerView"

export default class Index extends Component {
    state={
        twoRouteArr:[
            {
                name:"首页",
                path:"/index/home"
            },
            {
                name:"商家",
                path:"/index/bussi"
            },
            {
                name:"购物车",
                path:"/index/cart"
            },
            {
                name:"我的",
                path:"/index/my"
            }
        ]
    }
    render() {
        let {twoRouteArr}=this.state
        let {child}=this.props
        return (
            <div className="index-page">
                <div className="index-main">
                    <RouterView routes={child}></RouterView>
                </div>
                <div className="index-foot">
                    {
                        twoRouteArr&&twoRouteArr.map((item,index)=>{
                            return (
                            <NavLink to={item.path} key={index}>{item.name}</NavLink>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
