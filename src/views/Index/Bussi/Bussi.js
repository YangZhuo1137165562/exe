import React, { Component } from 'react'
import Head from "@/views/components/Header.js"
import Bscroll from "better-scroll"
import Axios from 'axios'
export default class Bussi extends Component {
    state = {
        curindex: 0,
        scrollH: [],
        bussiList: []
    }
    leftfn = (index) => {
        this.setState({
            curindex: index
        })
        this.myscroll.scrollToElement('.r-main' + index, 1000)
    }
    backfn = () => {
        this.props.history.go(-1)
    }
    render() {
        let { bussiList, curindex } = this.state
        return (
            <div className="bussi-page">
                <div className="bussi-head">
                    <Head htitle="商家" hleft={<span onClick={() => { this.backfn() }}>返回</span>}></Head>
                </div>
                <div className="bussi-main">
                    <div className="bussi-left">
                        {
                            bussiList && bussiList.map((item, index) => {
                                return <p className={index === curindex ? "leftActive" : ""} key={index} onClick={() => { this.leftfn(index) }}>{item.name}</p>
                            })
                        }
                    </div>
                    <div className="bussi-right">
                        <div ref="right">
                            {
                                bussiList && bussiList.map((item, index) => {
                                    return (
                                        <div className="rightItme" key={index}>
                                            <h3>{item.name}</h3>
                                            <div className="rightItemMain">
                                                {
                                                    item.foods && item.foods.map((it, i) => {
                                                        return (
                                                            <dl key={i}>
                                                                <dt>
                                                                    <img src={it.image} alt="" />
                                                                </dt>
                                                                <dd>
                                                                    <h3>{it.name}</h3>
                                                                    <p>￥：{it.price}</p>
                                                                </dd>
                                                            </dl>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        Axios.get("/api/better").then((res) => {
            this.setState({
                bussiList: res.data.goods
            })

            this.myscroll=new Bscroll('.bussi-right',{
                probeType:3
            })
    
            this.myscroll.on("scroll",({y})=>{
                let scrollY=Math.abs(y)
                for(let i=0;i<this.state.scrollH.length;i++){
                    if(scrollY>this.state.scrollH[i]&&scrollY<this.state.scrollH[i+1]){
                        this.setState({
                            curindex:i
                        })
                    }
                }
            })
            let rightArr=Array.from(this.refs.right.children)
            console.log(rightArr,"11");
            let last =rightArr[rightArr.length-1]
            rightArr&&rightArr.forEach((item,index)=>{
                return (
                    this.state.scrollH.push(item.offsetTop-45)
                )
            })
    
            this.state.scrollH.push(last.offsetTop+last.offsetHeight)
        })
        
    }
}