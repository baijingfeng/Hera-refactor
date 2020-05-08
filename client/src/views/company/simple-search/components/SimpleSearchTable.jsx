import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Table } from 'antd'

const columns = [
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '时间',
		dataIndex: 'outDate',
		key: 'outDate',
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
	},
	{
		title: '入库',
		dataIndex: 'inStock',
		key: 'inStock',
	},
	{
		title: '订单内容',
		dataIndex: 'totalString',
		key: 'totalString',
	},
	{
		title: '操作',
		key: 'actions',
		render: ({ _id }) => <Link to={`/company_record/${_id}`}>查看详情</Link>,
	},
]

export const SimpleSearchTable = () => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table columns={columns} />
		</Card>
	)
}
