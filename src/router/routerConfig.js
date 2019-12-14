import Index from "@/views/Index/Index.js"
import Detail from "@/views/Detail/Detail.js"
import Login from "@/views/Login/Login.js"

// import Home from "@/views/Index/Home/Home"
import Bussi from "@/views/Index/Bussi/Bussi"
import Cart from "@/views/Index/Cart/Cart"
import My from "@/views/Index/My/My"

import React from "react"
import Loadable from "react-loadable"
function Loading(){
    return <div>....loading.....</div>
}

const Home =Loadable({
    loader:()=>import("@/views/Index/Home/Home"),
    loading:Loading
})
const Registry=Loadable({
    loader:()=>import("@/views/Registry/Registry"),
    loading:Loading
})


const routes=[
    {
        path:"/index",
        component:Index,
        children:[
            {
                path:"/index/home",
                component:Home
            },
            {
                path:"/index/bussi",
                component:Bussi
            },
            {
                path:"/index/cart",
                component:Cart
            },
            {
                path:"/index/my",
                component:My
            },
            {
                path:"/index",
                to:"/index/home"
            }
        ]
    },
    {
        path:"/detail",
        component:Detail
    },
    {
        path:"/login",
        component:Login
    },
    {
        path:"/registry",
        component:Registry
    },
    {
        path:"/",
        to:"/index"
    }
]
export default routes;