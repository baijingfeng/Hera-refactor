export const menuList = [
	{
		title: '首页',
		path: '/home',
		icon: 'HomeOutlined',
	},
	{
		title: '仓库管理',
		path: '/storage-manage',
		icon: 'DatabaseOutlined',
		children: [
			{
				title: '交易管理',
				path: '/storage-manage/trade',
			},
			{
				title: '租赁管理',
				path: '/storage-manage/rent',
			},
			{
				title: '暂存管理',
				path: '/storage-manage/transfer',
			},
			{
				title: '盘点管理',
				path: '/storage-manage/stocktaking',
			},
		],
	},
	{
		title: '仓库查询',
		path: '/storage-query',
		icon: 'SearchOutlined',
		children: [
			{
				title: '库存查询',
				path: '/storage-query/store',
			},
			{
				title: '出入库查询',
				path: '/storage-query/simple-search',
			},
			{
				title: '运输单查询',
				path: '/storage-query/transport-table',
			},
		],
	},
	{
		title: '公司',
		path: '/company',
		icon: 'ClusterOutlined',
		children: [
			{
				title: '租金计算',
				path: '/company/rent',
			},
			{
				title: '出入库查询',
				path: '/company/simple-search',
			},
			{
				title: '运输单查询',
				path: '/company/transport-table',
			},
		],
	},
	{
		title: '系统信息',
		path: '/system',
		icon: 'SettingOutlined',
		children: [
			{
				title: '基础配置',
				path: '/system/setting',
			},
			{
				title: '产品信息',
				path: '/system/product',
			},
			{
				title: '合同方案',
				path: '/system/price',
			},
			{
				title: '计重方案',
				path: '/system/weight',
			},
			{
				title: '操作员管理',
				path: '/system/operator',
			},
			{
				title: '客户列表',
				path: '/system/project',
			},
		],
	},
]
