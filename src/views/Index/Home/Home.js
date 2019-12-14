//轮播图，better-scroll,跳详情（进入商家页）

import React, { Component } from 'react'
import Header from "@/views/components/Header.js"
import Swiper from "swiper"
import "swiper/css/swiper.css"
import axios from "axios"
import DlCom from "@/views/components/Dlcom.js"

export default class Home extends Component {
    state = {
        imgsArr: [
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1488282808,2001746394&fm=26&gp=0.jpg",
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1267490802,3326052181&fm=26&gp=0.jpg",
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2746120682,390938867&fm=26&gp=0.jpg"
        ],
        homeList: []
    }
    enterFn=()=>{
        this.props.history.push("/index/bussi")
    }
    render() {
        let { imgsArr, homeList } = this.state
        return (
            <div className='home-page'>
                {/* 首页title  */}
                <div className="home-head">
                    <Header hleft={<span>地址</span>} htitle="首页" hright={<span>登录</span>}></Header>
                </div>
                {/* 首页main */}
                <div className="home-main">
                    {/* carousel */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                imgsArr && imgsArr.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* better-scroll */}
                    <div className="home-better">
                        {
                            homeList && homeList.map((item, index) => {
                                return (
                                    <DlCom item={item} key={index} enterFn={this.enterFn}></DlCom>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        // 轮播图
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: true
        })
        // better-scroll
        axios.get("/api/list").then((res) => {
            this.setState({
                homeList: res.data
            })
        })
    }
}
