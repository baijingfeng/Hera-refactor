import React from 'react'
import { Card, Table, Button } from 'antd'
import { ContainerOutlined, ExportOutlined } from '@ant-design/icons'

const columns = [
	{
		title: '日期',
		dataIndex: 'outDate',
		key: 'outDate',
	},
	{
		title: '出入库',
		dataIndex: 'inOut',
		key: 'inOut',
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
		title: '单位',
		dataIndex: 'unit',
		key: 'unit',
	},
	{
		title: '数量',
		dataIndex: 'count',
		key: 'count',
	},
	{
		title: '单价',
		dataIndex: 'unitPrice',
		key: 'unitPrice',
	},
	{
		title: '天数',
		dataIndex: 'days',
		key: 'days',
	},
	{
		title: '金额',
		dataIndex: 'price',
		key: 'price',
	},
	{
		title: '运费',
		dataIndex: 'freight',
		key: 'freight',
	},
]

export const RentTable = ({ rentDatas }) => {
	const { history } = rentDatas
	return (
		<Card
			style={{ marginTop: '20px' }}
			actions={[
				<Button type="link">
					<ContainerOutlined key="Container" />
					生成对账单
				</Button>,
				<Button type="link">
					<ExportOutlined key="export" />
					导出excel
				</Button>,
			]}
		>
			<Table
				columns={columns}
				dataSource={history}
				rowKey={'_id'}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
		</Card>
	)
}
