import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Table } from 'antd'

import { formatDate, getProjectName } from '../../../../tools'

const getColumns = projects => [
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
		dataIndex: 'outStock',
		key: 'outStock',
		render: getProjectName.bind(null, projects),
	},
	{
		title: '出入库',
		dataIndex: 'inStock',
		key: 'inStock',
		render: getProjectName.bind(null, projects),
	},
	{
		title: '订单内容',
		dataIndex: 'totalString',
		key: 'totalString',
	},
	{
		title: '操作',
		key: 'actions',
		render: ({ _id }) => <Link to={`/company_record/${_id}`}>查看运输单</Link>,
	},
]

export const TransportTable = ({ tableDatas }) => {
	const projects = useSelector(state => state.system.projects)
	const columns = getColumns(projects)
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table
				columns={columns}
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
