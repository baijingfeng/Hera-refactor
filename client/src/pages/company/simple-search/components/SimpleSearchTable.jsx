import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Card, Table } from 'antd'

import { formatDate, getProjectName, getTotalString } from '../../../../utils'

const getColumns = (projects, products) => [
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
		title: '出库',
		dataIndex: 'outStock',
		key: 'outStock',
		render: getProjectName.bind(null, projects),
	},
	{
		title: '入库',
		dataIndex: 'inStock',
		key: 'inStock',
		render: getProjectName.bind(null, projects),
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
		render: ({ _id }) => (
			<Link to={`/company/simple-search/record/${_id}`}>查看详情</Link>
		),
	},
]

export const SimpleSearchTable = ({ tableDatas }) => {
	const projects = useSelector(state => state.system.projects)
	const products = useSelector(state => state.system.products)
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table
				columns={getColumns(projects, products)}
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
