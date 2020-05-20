import React from 'react'
import { Card, Table } from 'antd'

import { toFixedWithoutTrailingZero as fixed_ } from '../../../../utils'

const columns = [
	{
		title: '收款人',
		dataIndex: 'payee',
		key: 'payee',
		render: payee => (
			<span style={payee === '合计' ? { color: 'red' } : {}}>{payee}</span>
		),
	},
	{
		title: '小计',
		dataIndex: 'fee',
		key: 'fee',
		render: fixed_,
	},
	{
		title: '已结清款',
		dataIndex: 'paid',
		key: 'paid',
		render: fixed_,
	},
	{
		title: '未结清款',
		key: 'fee-paid',
		render: ({ fee, paid }) => fixed_(fee - paid),
	},
	{
		title: '已核对款',
		dataIndex: 'checked',
		key: 'checked',
		render: fixed_,
	},
	{
		title: '未核对款',
		key: 'fee-checked',
		render: ({ fee, checked }) => fixed_(fee - checked),
	},
]

export const TransportStatsTable = ({ tableDatas = [] }) => {
	return (
		<Card title="统计结果" style={{ marginTop: '20px' }}>
			<Table
				columns={columns}
				dataSource={tableDatas}
				rowKey={'payee'}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
		</Card>
	)
}
