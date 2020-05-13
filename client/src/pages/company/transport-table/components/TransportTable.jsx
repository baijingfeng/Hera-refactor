import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Table, Button, Checkbox, message } from 'antd'
import { ExportOutlined } from '@ant-design/icons'

import {
	formatDate,
	getProjectName,
	toFixedWithoutTrailingZero,
} from '../../../../utils'
import {
	updateTransportPaidStatus,
	updateTransportCheckedStatus,
} from '../../../../api'
import {
	changePayerTrabsportPaidStatus,
	changePayerTrabsportCheckedStatus,
} from '../../../../redux/actions'

const getColumns = (projects, onCheck) => [
	{
		title: '结清',
		dataIndex: 'transportPaid',
		key: 'transportPaid',
		width: '7%',
		render: (paid, { _id }) => (
			<Checkbox defaultChecked={paid} onChange={e => onCheck(_id, 'paid', e)} />
		),
	},
	{
		title: '核对',
		dataIndex: 'transportChecked',
		key: 'transportChecked',
		width: '7%',
		render: (checked, { _id }) => (
			<Checkbox
				defaultChecked={checked}
				onChange={e => onCheck(_id, 'checked', e)}
			/>
		),
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
		width: '15%',
		render: getProjectName.bind(null, projects),
	},
	{
		title: '入库',
		dataIndex: 'inStock',
		key: 'inStock',
		width: '15%',
		render: getProjectName.bind(null, projects),
	},
	{
		title: '收款人',
		dataIndex: 'transport',
		key: 'transport_payee',
		render: ({ payee }) => payee,
	},
	{
		title: '运费',
		dataIndex: 'transport',
		key: 'transport_fee',
		render: ({ fee }) => toFixedWithoutTrailingZero(fee),
	},
	{
		key: 'actions',
		render: ({ _id }) => <Link to={`/transport/${_id}`}>查看运输单</Link>,
	},
]

export const TransportTable = ({ tableDatas }) => {
	const projects = useSelector(state => state.system.projects)
	const dispatch = useDispatch()

	const onCheck = async (id, type, e) => {
		const status = e.target.checked

		if (type === 'paid') {
			await updateTransportPaidStatus({ id, paid: status })
			dispatch(
				changePayerTrabsportPaidStatus({
					key: '运输单查询公司',
					id,
					paid: status,
				})
			)
		} else {
			await updateTransportCheckedStatus({ id, checked: status })
			dispatch(
				changePayerTrabsportCheckedStatus({
					key: '运输单查询公司',
					id,
					checked: status,
				})
			)
		}

		message.success('修改成功')
	}

	const columns = getColumns(projects, onCheck)
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
