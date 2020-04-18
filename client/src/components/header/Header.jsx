import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import history from '../../utils/history'
import { Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import { UserOutlined, LogoutOutlined } from '../../configs/iconList'

import './header.less'
import menuList from '../../configs/menuList'

class Header extends Component {
	username = memoryUtils.userInfo.username

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

	render() {
		const title = this.getTitle()
		return (
			<>
				<h3 className="title">{title}</h3>
				<Link className="header-btn" to="">
					<UserOutlined />
					{this.username}
				</Link>
				<Link className="header-btn" to="" onClick={this.logout}>
					<LogoutOutlined />
					退出
				</Link>
			</>
		)
	}
}

export default withRouter(Header)
