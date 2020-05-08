import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Table, Button } from 'antd'
import { ExportOutlined } from '@ant-design/icons'

const columns = [
	{
		title: '结清',
		dataIndex: 'transportPaid',
		key: 'transportPaid',
	},
	{
		title: '核对',
		dataIndex: 'transportChecked',
		key: 'transportChecked',
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
		title: '收款人',
		dataIndex: 'transport',
		key: 'transport_payee',
	},
	{
		title: '运费',
		dataIndex: 'transport',
		key: 'transport_fee',
	},
	{
		key: 'actions',
		render: ({ _id }) => <Link to={`/transport/${_id}`}>查看运输单</Link>,
	},
]

export const TransportTable = () => {
	return (
		<Card
			style={{ marginTop: '20px' }}
			actions={[
				<Button type="link">
					<ExportOutlined key="export" />
					导出excel
				</Button>,
			]}
		>
			<Table columns={columns} />
		</Card>
	)
}
