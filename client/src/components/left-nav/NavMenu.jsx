import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd'

import { Icons, menuList, leftNavStyle } from '../../configs'

const { SubMenu, Item } = Menu

const getNode = (menu, menuType) =>
	menuType === 'SubMenu' ? (
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
const NavMenu = ({ location: { pathname } }) => (
	<Menu
		selectedKeys={[pathname]}
		defaultOpenKeys={[pathname && `/${pathname.split('/')[1]}`]}
		mode="inline"
		theme="dark"
	>
		{menuItems}
	</Menu>
)

export default withRouter(NavMenu)
