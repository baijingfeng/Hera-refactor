import React from 'react'
import { Card, Table } from 'antd'

import { toFixedWithoutTrailingZero as fixed_ } from '../../../../utils'

const columns = [
	{
		title: '名称',
		dataIndex: 'payee',
		key: 'payee',
	},
	
	{
		title: '出库数量',
		dataIndex: 'paid',
		key: 'paid',
		render: fixed_,
	},
	{
		title: '入库数量',
		key: 'fee-paid',
		render: ({ fee, paid }) => fixed_(fee - paid),
	},
	{
		title: '小计',
		dataIndex: 'fee',
		key: 'fee',
		render: fixed_,
	},
]

export const SimpleSearchStatsTable = ({ tableDatas = [] }) => {
	return (
		<Card title="统计结果" style={{ marginTop: '20px' }}>
			<Table
				columns={columns}
				dataSource={tableDatas}
				rowKey={({ payee }) => payee}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
		</Card>
	)
}
