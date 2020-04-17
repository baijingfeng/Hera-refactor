import React, { Component } from 'react'

import { UserOutlined, LogoutOutlined } from '../../configs/iconList'

import './header.less'

export default class Header extends Component {

  logout= () => {
    href("/login")
    doLogout()
  }
	render() {
		return (
			<div className="header">
				<h3 className="title">{'title'}</h3>
				<a className="header-btn">
					<UserOutlined />
				</a>
				<a className="header-btn" onClick={this.logout.bind(this)}>
					<LogoutOutlined />
				</a>
			</div>
		)
	}
}
