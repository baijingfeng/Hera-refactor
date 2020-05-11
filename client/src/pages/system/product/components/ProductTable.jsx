import React from 'react'
import { Table } from 'antd'

import { EditButton, DeleteButton } from '../../../../components'

const columns = [
	{
		title: '编号',
		dataIndex: 'number',
		key: 'number',
	},
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '型号',
		dataIndex: 'model',
		key: 'model',
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
		title: '理论重量（千克）',
		dataIndex: 'weight',
		key: 'weight',
	},
	{
		title: '计量单位',
		dataIndex: 'countUnit',
		key: 'countUnit',
	},
	{
		title: '换算单位',
		dataIndex: 'unit',
		key: 'unit',
	},
	{
		title: '换算比例',
		dataIndex: 'scale',
		key: 'scale',
	},
	{
		title: '是否需要换算',
		dataIndex: 'isScaled',
		key: 'isScaled',
		render: text => (text ? '是' : '否'),
	},
]

export const ProductTable = ({
	pageData,
	loading,
	editProduct,
	deleteProduct,
}) => {
	const actionColumn = {
		title: '操作',
		key: 'actions',
		align: 'center',
		render: product => (
			<div>
				<EditButton onClick={() => editProduct(product)} />
				<DeleteButton onClick={() => deleteProduct(product.number)} />
			</div>
		),
	}

	return (
		<Table
			columns={[...columns, actionColumn]}
			dataSource={pageData}
			pagination={{
				hideOnSinglePage: true,
				simple: true,
			}}
			rowKey={'_id'}
			loading={loading}
		/>
	)
}
