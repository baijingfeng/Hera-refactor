import React, { Component } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined, MailOutlined } from '@ant-design/icons'

import './left-nav.less'

const { SubMenu, Item } = Menu

export default class LeftNav extends Component {
	render() {
		return (
			<div className="left-nav">
				<header className="header">AFX</header>
				<Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" >
					<Item key="1">
						<PieChartOutlined />
						<span>Option 1</span>
					</Item>
					<Item key="2">
						<DesktopOutlined />
						<span>Option 2</span>
					</Item>
					<Item key="3">
						<ContainerOutlined />
						<span>Option 3</span>
					</Item>
					<SubMenu
						key="sub1"
						title={
							<span>
								<MailOutlined />
								<span>Navigation One</span>
							</span>
						}
					>
						<Item key="5">Option 5</Item>
						<Item key="6">Option 6</Item>
						<Item key="7">Option 7</Item>
						<Item key="8">Option 8</Item>
					</SubMenu>
					<SubMenu
						key="sub2"
						title={
							<span>
								<AppstoreOutlined />
								<span>Navigation Two</span>
							</span>
						}
					>
						<Item key="9">Option 9</Item>
						<Item key="10">Option 10</Item>
						<SubMenu key="sub3" title="Submenu">
							<Item key="11">Option 11</Item>
							<Item key="12">Option 12</Item>
						</SubMenu>
					</SubMenu>
				</Menu>
			</div>
		)
	}
}
