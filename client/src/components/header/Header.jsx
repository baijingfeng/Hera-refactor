import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import history from '../../utils/history'
import { message, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import { UserOutlined, LogoutOutlined } from '../../configs/iconList'
import menuList from '../../configs/menuList'
import { reqLogout } from '../../api'

import './header.less'

class Header extends Component {
	username = memoryUtils.userInfo.username

	logout = () => {
		Modal.confirm({
			title: '确认退出吗?',
			icon: <ExclamationCircleOutlined />,
			okText: '确认',
			cancelText: '取消',
			onOk: async () => {
				memoryUtils.userInfo = {}
				storageUtils.removeUserInfo()

				const { message: msg } = await reqLogout()
				history.replace('/login')
				message.success(msg)
			},
		})
	}

	getTitle = () => {
		let title = ''
		const path = this.props.location.pathname
		for (let item of menuList) {
			if (item.path === path) {
				title = item.title
			} else if (item.children) {
				const cItem = item.children.find(cItem => cItem.path === path) || ''
				title = cItem.title
			}

			if (title) {
				break
			}
		}
		return title
	}

	// TODO: 用button标签加合适的样式替换a标签
	render() {
		const title = this.getTitle()
		return (
			<>
				<h3 className="title">{title}</h3>
				<a className="header-btn">
					<UserOutlined />
					{this.username}
				</a>
				<a className="header-btn" onClick={this.logout}>
					<LogoutOutlined />
					退出
				</a>
			</>
		)
	}
}

export default withRouter(Header)
