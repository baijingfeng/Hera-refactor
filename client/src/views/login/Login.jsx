import React, { Component } from 'react'
import LoginForm from './LoginForm'

import './login.less'
export default class Login extends Component {
	render() {
		return (
			<div className="login">
				<h1> 用户登录 </h1>
				<LoginForm />
			</div>
		)
	}
}
