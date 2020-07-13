import React, { useEffect } from 'react'
import { Card, Button, Descriptions, Table } from 'antd'
import {
	PrinterOutlined,
	EditOutlined,
	FileTextOutlined,
} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'

import { queryRecordData } from '../../../api'
import { updateRecord } from '../../../redux/actions'
import { getProjectName, formatDate, history } from '../../../tools'

const { Item } = Descriptions

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
		title: '数量',
		dataIndex: 'count',
		key: 'count',
	},
]

export const Record = ({ match }) => {
	const records = useSelector(state => state.store.records)
	const projects = useSelector(state => state.system.projects)
	const dispatch = useDispatch()

	const { id } = match.params
	const record = records.get(id)

	useEffect(() => {
		const getRecord = async () => {
			if (!record) {
				const { data } = await queryRecordData(id)
				dispatch(updateRecord(data.record))
			}
		}
		getRecord()
	}, [dispatch, id, record])

	const {
		outStock,
		inStock,
		vendor,
		outDate,
		carNumber,
		number,
		originalOrder,
		username,
		_id,
		entries = [],
	} = record || {}
	return (
		<Card
			title="订单详情"
			actions={[
				<Button type="link">
					<PrinterOutlined key="Printer" />
					打印
				</Button>,
				<Button type="link">
					<EditOutlined key="Edit" />
					编辑
				</Button>,
				<Button type="link" onClick={() => history.push(`/transport/${_id}`)}>
					<FileTextOutlined key="FileText" />
					运输单
				</Button>,
			]}
		>
			<>
				<Descriptions layout="vertical" column={6} bordered>
					<Item label="出库">
						{getProjectName(projects, outStock) || vendor}
					</Item>
					<Item label="入库">
						{getProjectName(projects, inStock) || vendor}
					</Item>
					<Item label="时间">{formatDate(outDate)}</Item>
					<Item label="车号">{carNumber}</Item>
					<Item label="单号">{number}</Item>
					<Item label="原始单号">{originalOrder}</Item>
					<Item label="制单人：">{username}</Item>
				</Descriptions>
				<Table
					rowKey={'_id'}
					columns={columns}
					dataSource={entries}
					pagination={{
						hideOnSinglePage: true,
						simple: true,
					}}
					style={{ marginTop: '3vh' }}
				/>
			</>
		</Card>
	)
}
