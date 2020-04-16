import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav/LeftNav'
import Header from '../../components/header/Header'

import Home from '../../views/home/Home'
import System from '../../views/system/System'

const { Footer, Sider, Content } = Layout

export default class Admin extends Component {
	render() {
		const token = memoryUtils.token

		if (!token) {
			return <Redirect to="/login" />
		}

		return (
			<div>
				<Layout style={{ height: '100vh' }}>
					<Sider width="250">
						<LeftNav />
					</Sider>
					<Layout>
						<Header />
						<Content style={{ backgroundColor: 'white' }}>
							<Switch>
								<Route path="/home" component={Home} />
								<Route path="/system" component={System} />
								<Redirect to="/home" />
							</Switch>
						</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}
