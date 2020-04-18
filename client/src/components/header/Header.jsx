import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import { UserOutlined, LogoutOutlined } from '../../configs/iconListConfig'

import './header.less'
import history from '../../utils/history'

export default class Header extends Component {
	logout = () => {
		Modal.confirm({
			title: '确认退出吗?',
			icon: <ExclamationCircleOutlined />,
			okText: '确认',
			cancelText: '取消',
			onOk() {
				memoryUtils.userInfo = {}
				storageUtils.removeUserInfo()

				history.replace('/login')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}
	render() {
		const { username } = memoryUtils.userInfo
		return (
			<>
				<h3 className="title">{'首页'}</h3>
				<Link className="header-btn" to="">
					<UserOutlined />
					{username}
				</Link>
				<Link className="header-btn" to="" onClick={this.logout}>
					<LogoutOutlined />
					退出
				</Link>
			</>
		)
	}
}
