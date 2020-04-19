import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout, BackTop } from 'antd'

import { memoryUtils } from '../../utils'
import { baseConfig } from '../../configs'
import { ajax } from '../../api'
import { Header, NavMenu } from '../../components'

import './admin.less'

const { Header: AntdHeader, Footer, Sider, Content } = Layout

class Admin extends Component {
	render() {
		const { access_token } = memoryUtils.userInfo

		if (!access_token) {
			return <Redirect to="/login" />
		} else {
			// 成功登录后, 给之后的所有ajax请求设置权限请求头部
			ajax.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
		}

		const { children } = this.props
		return (
			<Layout style={{ height: '100vh' }} className="admin">
				{/* TODO: 利用一个状态变量, 控制折叠, 以及小屏幕上显示折叠式样 */}
				<Sider width="250" className="sider">
					<header className="headerName">{baseConfig.AppName}</header>
					<NavMenu />
				</Sider>
				<Layout className="main">
					<AntdHeader className="right-header">
						<Header />
					</AntdHeader>
					<Content style={{ margin: '24px 16px 0' }}>
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
