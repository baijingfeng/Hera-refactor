/**
 * 作用:
 * 	1. 在这里为菜单项,按需引入antd4版本中的icon, 以便以配置形式生成菜单项列表
 * 	2. 可以引入其他依赖库的icon, 通过在这里重命名, 实现icon定制功能
 * 注意: 
 * 	1. 并非所有的icon都从这里中转引入, 具体页面具体对待
 * 	2. 这里主要是导航菜单列表的icon, 以及需要定制的icon
 */
export {
	UserOutlined,
	LockOutlined,
	HomeOutlined,
	DatabaseOutlined,
	SettingOutlined,
	SearchOutlined,
	ClusterOutlined,
	LogoutOutlined,
} from '@ant-design/icons'
