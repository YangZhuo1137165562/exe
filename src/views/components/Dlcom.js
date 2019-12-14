import React, { Component } from 'react'

export default class Dlcom extends Component {
    render() {
        let item=this.props.item
        return (
            <dl>
                <dt>
                    <img src={item.img} alt="" />
                </dt>
                <dd>
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                    <p className="enter" onClick={()=>this.props.enterFn()}>进店</p>
                </dd>
            </dl>
        )
    }
}
