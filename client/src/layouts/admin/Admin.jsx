import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { useDispatch } from 'react-redux'

import { memoryUtils, storageUtils } from '../../utils'
import { APP_NAME } from '../../configs'
import { ajax, querySystemInfo } from '../../api'
import NavMenu from './components/NavMenu'
import Header from './components/header/Header'
import { systemLoaded, selectStore } from '../../redux/actions'

import './admin.less'

const { Header: AntdHeader, Footer, Sider, Content } = Layout

export const Admin = ({ children }) => {
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchSystemInfo = async () => {
			const { data } = await querySystemInfo()
			dispatch(systemLoaded(data))

			const { config } = data
			try {
				const store_ = JSON.parse(localStorage.getItem(`store-${config.db}`))
				if ('_id' in store_) {
					// 简单验证是否为有效的仓库信息
					dispatch(selectStore(config, store_))
				}
			} catch (e) {}

			storageUtils.setSystemInfo(data)
			memoryUtils.systemInfo = data
		}
		fetchSystemInfo()
	}, [dispatch])

	const { access_token } = memoryUtils.userInfo
	if (!access_token) {
		return <Redirect to="/login" />
	} else {
		// 成功登录后, 给之后的所有ajax请求设置权限请求头部
		ajax.defaults.headers.common['Authorization'] = `Bearer ${access_token}`
	}

	return (
		<Layout style={{ height: '100vh' }} className="admin">
			{/* TODO: 利用一个状态变量, 控制折叠, 以及小屏幕上显示折叠式样 */}
			<Sider width="250" className="sider">
				<header className="headerName">{APP_NAME}</header>
				<NavMenu />
			</Sider>
			<Layout className="main">
				<AntdHeader className="right-header">
					<Header />
				</AntdHeader>
				<Content style={{ margin: '24px 16px 0', minHeight: 'auto' }}>
					{children}
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					<strong>Copyright © 2019 XX信息科技（上海）有限公司.</strong>
				</Footer>
			</Layout>
		</Layout>
	)
}
