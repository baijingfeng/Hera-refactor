import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { history } from '../utils'
import Login from '../layouts/login/Login'
import { Admin } from '../layouts/admin/Admin'
import {
	Home,
	Trade,
	RentCreate,
	Store,
	SimpleSearch,
	Transport,
	Rent,
	CompanySimpleSearch,
	CompanyTransport,
	CompanyRecord,
	Settings,
	Product,
	Price,
	Weight,
	Operator,
	Project,
} from '../pages'

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
						<Route path="/storage-query/store" component={Store} />
						<Route path="/storage-query/simple-search" component={SimpleSearch} />
						<Route path="/storage-query/transport-table" component={Transport} />
						<Route path="/company/rent" component={Rent} />
						<Route path="/company/simple-search/record/:id" component={CompanyRecord} />
						<Route path="/company/simple-search" component={CompanySimpleSearch} />
						<Route path="/company/transport-table" component={CompanyTransport} />
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
