import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { history } from '../utils'
import Login from '../layouts/login/Login'
import { Admin } from '../layouts/admin/Admin'
import {
	Home,
	Trade,
	RentCreate,
	Settings,
	Product,
	Price,
	Weight,
	Operator,
	Project,
	Rent,
	SimpleSearch,
	Transport,
} from '../views'

const Routers = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/login" component={Login} />
				<Admin>
					<Switch>
						<Route path="/home" component={Home} />
						<Route path="/storage-manage/trade" component={Trade} />
						<Route path="/storage-manage/rent" component={RentCreate} />
						<Route path="/storage-manage" />
						<Route path="/storage-query" />
						<Route path="/company/rent" component={Rent} />
						<Route path="/company/simple-search" component={SimpleSearch} />
						<Route path="/company/transport-table" component={Transport} />
						<Route path="/system/settings" component={Settings} />
						<Route path="/system/product" component={Product} />
						<Route path="/system/price" component={Price} />
						<Route path="/system/weight" component={Weight} />
						<Route path="/system/operator" component={Operator} />
						<Route path="/system/project" component={Project} />
						<Redirect to="/home" />
					</Switch>
				</Admin>
			</Switch>
		</Router>
	)
}
export default Routers
