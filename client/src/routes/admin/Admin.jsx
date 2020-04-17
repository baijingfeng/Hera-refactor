import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout, BackTop } from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import baseConfig from '../../configs/baseConfig'

import NavMenu from '../../components/left-nav/NavMenu'
import Header from '../../components/header/Header'

import './admin.less'

const { Header: AntdHeader, Footer, Sider, Content } = Layout

class Admin extends Component {
	render() {
		const token = memoryUtils.token

		if (!token) {
			return <Redirect to="/login" />
		}

		const { children } = this.props

		return (
			<Layout style={{ height: '100vh' }} className="admin">
				<Sider width="250" className="sider">
					<header className="header">{baseConfig.AppName}</header>
					<NavMenu />
				</Sider>
				<Layout className="main">
					<AntdHeader>
						<Header />
					</AntdHeader>
					<Content style={{ margin: '24px 16px 0', backgroundColor: '#ccc' }}>
						{children}
						<BackTop />
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						<strong>Copyright © 2019 XX信息科技（上海）有限公司.</strong>
					</Footer>
				</Layout>
			</Layout>
		)
	}
}

export default Admin
