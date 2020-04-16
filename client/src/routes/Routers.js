import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import history from '../utils/history'
import Login from './login/Login'
import Admin from './admin/Admin'

export default class Routers extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" component={Admin} />
				</Switch>
			</Router>
		)
	}
}
