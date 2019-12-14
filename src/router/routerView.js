import React from "react"
import { Switch, Redirect, Route } from "react-router-dom"

function RouterView(props) {
    let { routes } = props
    let routerArr = routes && routes.filter(item => !item.to)
    let redirectArr = routes && routes.filter(item => item.to).map((item,index)=><Redirect key={index} path={item.path} to={item.to}></Redirect>)

    return <Switch>
        {
            routerArr && routerArr.map((item, index) => <Route key={index} path={item.path} render={(props) => <item.component {...props} child={item.children} />} />).concat(redirectArr)
        }
    </Switch>
}

export default RouterView;