import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import * as Icons from '../../configs/iconListConfig.js'
import menuList from '../../configs/menuListConfig'
import { leftNavStyle } from '../../configs/styleConfig'

const { SubMenu, Item } = Menu

const getNode = (menu, type) =>
	type === 'SubMenu' ? (
		<span>
			{menu.icon && React.createElement(Icons[menu.icon])}
			<span style={leftNavStyle}>{menu.title}</span>
		</span>
	) : (
		<Link to={menu.path}>
			{menu.icon && React.createElement(Icons[menu.icon])}
			<span style={leftNavStyle}>{menu.title}</span>
		</Link>
	)

const getMenuItems = menuList => {
	return menuList.map(menu =>
		menu.children instanceof Array ? (
			<SubMenu key={menu.path} title={<span>{getNode(menu, 'SubMenu')}</span>}>
				{getMenuItems(menu.children)}
			</SubMenu>
		) : (
			<Item key={menu.path}>{getNode(menu, 'Item')}</Item>
		)
	)
}

const menuItems = getMenuItems(menuList)

// TODO: router.isActive()方式优化
const NavMenu = ({ location }) => (
	<Menu
		selectedKeys={[location.pathname]}
		defaultOpenKeys={[location.pathname && `/${location.pathname.split('/')[1]}`]}
		mode="inline"
		theme="dark"
	>
		{menuItems}
	</Menu>
)

export default withRouter(NavMenu)

/* class NavMenu extends React.Component {
	getNode = (menu, type) =>
		type === 'SubMenu' ? (
			<span>
				{menu.icon && React.createElement(Icons[menu.icon])}
				<span style={leftNavStyle}>{menu.title}</span>
			</span>
		) : (
			<Link to={menu.path}>
				{menu.icon && React.createElement(Icons[menu.icon])}
				<span style={leftNavStyle}>{menu.title}</span>
			</Link>
		)

	getMenuItems = menuList => {
		return menuList.map(menu =>
			menu.children instanceof Array ? (
				<SubMenu key={menu.path} title={<span>{this.getNode(menu, 'SubMenu')}</span>}>
					{this.getMenuItems(menu.children)}
				</SubMenu>
			) : (
				<Item key={menu.path}>{this.getNode(menu, 'Item')}</Item>
			)
		)
	}

	menuItems = this.getMenuItems(menuList)

	render() {
		const selectedKeys = this.props.location.pathname
		const openKey = selectedKeys && `/${selectedKeys.split('/')[1]}` // 截取当前路径的第一段,作为默认打开的选项
		console.log('selectedKeys', selectedKeys)
		return (
			<Menu
				defaultSelectedKeys={[selectedKeys]}
				defaultOpenKeys={[openKey]}
				mode="inline"
				theme="dark"
			>
				{this.menuItems}
			</Menu>
		)
	}
}

export default withRouter(NavMenu)
 */