import React from 'react'
import { Table } from 'antd'

import { AddNewButton, EditButton, DeleteConfirmButton } from '../../../../components'
import { renderDate } from '../../../../utils'

const columns = [
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '日期',
		dataIndex: 'date',
		key: 'date',
		render: renderDate,
	},
	{
		title: '备注',
		dataIndex: 'comments',
		key: 'comments',
	},
]

//TODO: 添加详情编辑页面
export const PriceTable = ({
	pageData,
	loading,
	addNewProduct,
	editProduct,
	deleteProduct,
}) => {
	const actionColumn = {
		title: <AddNewButton onClick={addNewProduct} />,
		key: 'actions',
		align: 'center',
		render: plan => (
			<div>
				<EditButton onClick={() => editProduct(plan)} />
				<DeleteConfirmButton
					title={`确认删除“${plan.name}”方案1吗？`}
					onConfirm={() => deleteProduct(plan._id)}
				/>
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
