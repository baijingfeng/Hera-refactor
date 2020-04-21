import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { message, Modal } from 'antd'
import {
	UserOutlined,
	LogoutOutlined,
	ExclamationCircleOutlined,
} from '@ant-design/icons'

import { history, memoryUtils, storageUtils } from '../../../../utils'
import { menuList } from '../../../../configs'
import { reqLogout } from '../../../../api'

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
				history.replace('/login')
				try {
					const { message: msg } = await reqLogout()
					message.success(msg)
				} catch (error) {
					message.error(error)
				}
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
	// TODO: 解决标题在缩小屏幕时会溢出的问题
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
