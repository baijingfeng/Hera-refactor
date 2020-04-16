import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import * as Icons from '../../configs/iconList.js'
import menuList from '../../configs/menuList'
import { leftNavStyle } from '../../configs/styleConfig'

const { SubMenu, Item } = Menu

class NavMenu extends Component {
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

	menuItems =(() =>{
		console.log('menuList')
		return this.getMenuItems(menuList)
	})()

	render() {
		const selectKey = this.props.location.pathname
		const openKey = selectKey && `/${selectKey.split('/')[1]}` // 截取当前路径的第一段,作为默认打开的选项
		console.log('selectKey', selectKey)
		return (
			<Menu
				defaultSelectedKeys={[selectKey]}
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

// TODO: router.isActive()方式优化
