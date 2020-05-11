import React from 'react'
import { Table } from 'antd'

import {
	AddNewButton,
	EditButton,
	DeleteConfirmButton,
} from '../../../../components'

const columns = [
	{
		title: '用户名',
		dataIndex: 'username',
		key: 'username',
	},
	{
		title: '姓名',
		dataIndex: 'profile',
		key: 'name',
		render: ({ name }) => <span>{name}</span>,
	},
	{
		title: '角色',
		dataIndex: 'role',
		key: 'role',
	},
	{
		title: '备注',
		dataIndex: 'comments',
		key: 'comments',
	},
]

//TODO: 添加详情编辑页面
export const OperatorTable = ({
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
		render: user => (
			<div>
				<EditButton onClick={() => editProduct(user)} />
				<DeleteConfirmButton
					title={`确认要删除用户${user.profile.name} 吗？`}
					onConfirm={() => deleteProduct(user._id)}
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
