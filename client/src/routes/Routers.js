import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { history } from '../utils'
import Login from '../layouts/login/Login'
import { Admin } from '../layouts/admin/Admin'
import { Home, TradeCreate, RentCreate, Settings, ProductList } from '../views'

const Routers = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/login" component={Login} />
				<Admin>
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/storage-manage/trade" component={TradeCreate} />
						<Route path="/storage-manage/rent" component={RentCreate} />
						<Route path="/storage-manage" />
						<Route path="/storage-query" />
						<Route path="/company" />
						<Route path="/system/settings" component={Settings} />
						<Route path="/system/product" component={ProductList} />
						<Redirect to="/home" />
					</Switch>
				</Admin>
			</Switch>
		</Router>
	)
}
export default Routers
