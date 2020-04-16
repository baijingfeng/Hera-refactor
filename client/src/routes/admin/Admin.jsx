import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import baseConfig from '../../configs/baseConfig'

import NavMenu from '../../components/left-nav/NavMenu'
import Header from '../../components/header/Header'

import './admin.less'

const { Footer, Sider, Content } = Layout

export default class Admin extends Component {
	render() {
		const token = memoryUtils.token

		if (!token) {
			return <Redirect to="/login" />
		}

		const { children } = this.props

		return (
			<div>
				<Layout style={{ height: '100vh' }} className="admin">
					<Sider width="250" className="sider">
						<header className="header">{baseConfig.AppName}</header>
						<NavMenu />
					</Sider>
					<Layout className="main">
						<Header />
						<Content style={{ backgroundColor: 'white' }}>{children}</Content>
						<Footer>Footer</Footer>
					</Layout>
				</Layout>
			</div>
		)
	}
}
