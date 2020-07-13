import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Table } from 'antd'

import { formatDate, getProjectName, getTotalString } from '../../../../tools'

const getDirection = (entry, storeID) =>
	entry.inStock === storeID ? '入库' : '出库'

const getOtherSize = (entry, projects, storeId) => {
	return getDirection(entry, storeId) === '出库'
		? getProjectName(projects, entry.inStock)
		: getProjectName(projects, entry.outStock)
}

const getColumns = (projects, products, storeID) => [
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '时间',
		dataIndex: 'outDate',
		key: 'outDate',
		render: formatDate,
	},
	{
		title: '车号',
		dataIndex: 'carNumber',
		key: 'carNumber',
	},
	{
		title: '单号',
		dataIndex: 'number',
		key: 'number',
	},
	{
		title: '原始单号',
		dataIndex: 'originalOrder',
		key: 'originalOrder',
	},
	{
		title: '项目部',
		key: 'vendor',
		render: entry => getOtherSize(entry, projects, storeID),
	},
	{
		title: '出入库',
		key: 'inStock',
		render: entry => getDirection(entry, storeID),
	},
	{
		title: '订单内容',
		dataIndex: 'entries',
		key: 'entries',
		width: '15%',
		render: getTotalString.bind(null, products),
	},
	{
		title: '操作',
		key: 'actions',
		render: ({ _id }) => <Link to={`/record/${_id}`}>查看详情</Link>, // TODO: 之后自定义路由地址
	},
]

export const SimpleSearchTable = ({ tableDatas, storeID }) => {
	const projects = useSelector(state => state.system.projects)
	const products = useSelector(state => state.system.products)
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table
				columns={getColumns(projects, products, storeID)}
				dataSource={tableDatas}
				rowKey={'_id'}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
		</Card>
	)
}
