import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

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
				<Redirect to="/login" />
			</Router>
		)
	}
}
