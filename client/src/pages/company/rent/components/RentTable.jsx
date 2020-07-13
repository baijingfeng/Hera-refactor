import React from 'react'
import { Card, Table, Button, Descriptions } from 'antd'
import { ContainerOutlined, ExportOutlined } from '@ant-design/icons'

import {
	formatDate,
	formatCurrency,
	renderNumber,
	renderCurrency,
	formatNumber,
} from '../../../../tools'

const { Item } = Descriptions

const columns = [
	{
		title: '日期',
		dataIndex: 'outDate',
		key: 'outDate',
		render: text => (text && formatDate(text)) || '上期结存',
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
		render: renderNumber,
	},
	{
		title: '单价',
		dataIndex: 'unitPrice',
		key: 'unitPrice',
		render: unitPrice => formatCurrency(unitPrice, 4),
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
		render: renderCurrency,
	},
	{
		title: '运费',
		dataIndex: 'freight',
		key: 'freight',
		render: renderCurrency,
	},
]

export const RentTable = ({ rentDatas }) => {
	const { history = [], list = [], nameGroup = [], group = {} } = rentDatas
	const tableDatas = [...history, ...list]
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
				dataSource={tableDatas}
				rowKey={'_id'}
				pagination={{
					hideOnSinglePage: true,
					simple: true,
				}}
			/>
			{tableDatas.length > 0 && (
				<>
					<Descriptions layout="vertical" column={6} bordered>
						{nameGroup.map(({ name, count, unit }) => (
							<Item key={name} label={name}>{`${formatNumber(
								count
							)} ${unit}`}</Item>
						))}
					</Descriptions>
					<Descriptions column={1}>
						<Item label="金额">{`${formatNumber(group.price)} 元`}</Item>
						<Item label="运费">{`${formatNumber(group.freight)} 元`}</Item>
					</Descriptions>
				</>
			)}
		</Card>
	)
}
