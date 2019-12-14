import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header-com">
                <span>{this.props.hleft}</span>
                <span>{this.props.htitle}</span>
                <span>{this.props.hright}</span>
            </div>
        )
    }
}
