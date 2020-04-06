import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './views/login/Login'
import Admin from './views/admin/Admin'

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/admin" component={Admin} />
				</Switch>
			</Router>
		)
	}
}
