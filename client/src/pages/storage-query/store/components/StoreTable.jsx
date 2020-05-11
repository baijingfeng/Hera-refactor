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
		title: '名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '规格',
		dataIndex: 'size',
		key: 'size',
	},
	{
		title: '入库数量',
		dataIndex: 'in',
		key: 'in',
	},
	{
		title: '出库数量',
		dataIndex: 'out',
		key: 'out',
	},
	{
		title: '结存数量',
		dataIndex: 'delta',
		key: 'delta',
	},
	{
		title: '小计',
		dataIndex: 'total',
		key: 'total',
	},
]

export const StoreTable = () => {
	return (
		<Card style={{ marginTop: '20px' }}>
			<Table columns={columns} />
		</Card>
	)
}
