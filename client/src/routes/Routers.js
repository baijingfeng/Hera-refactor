import React, { Component } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { history } from '../utils'
import Login from '../layouts/login/Login'
import Admin from '../layouts/admin/Admin'
import { Home, TradeCreate, RentCreate } from '../views'

export default class Routers extends Component {
	// TODO: 之后改为config配置的形式
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/login" component={Login} />
					<Admin>
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/storage-manage/trade" component={TradeCreate} />
							<Route path="/storage-manage/rent" component={RentCreate} />
							<Route path="/storage-query">
								{/* <Route path="/trade" component={}/> */}
							</Route>
							<Route path="/company" component={RentCreate}>
								{/* <Route path="/trade" component={}/> */}
							</Route>
							<Route path="/system">
								{/* <Route path="/trade" component={}/> */}
							</Route>
							<Redirect to="/home" />
						</Switch>
					</Admin>
				</Switch>
			</Router>
		)
	}
}
