import React from 'react'
import { Table, Button } from 'antd'

import { EditButton, DeleteConfirmButton } from '../../../../components'

const columns = [
	{
		title: '公司名称',
		dataIndex: 'company',
		key: 'company',
	},
	{
		title: '公司电话',
		dataIndex: 'companyTel',
		key: 'companyTel',
	},
	{
		title: '项目部名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '项目部电话',
		dataIndex: 'tel',
		key: 'tel',
	},
	{
		title: '项目部地址',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: '联系人姓名',
		dataIndex: 'contact_name',
		key: 'contact_name',
	},
	{
		title: '联系人电话',
		dataIndex: 'contact_phone',
		key: 'contact_phone',
	},
	{
		title: '类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '备注',
		dataIndex: 'comments',
		key: 'comments',
	},
]

//TODO: 添加详情编辑页面
export const ProjectTable = ({
	pageData,
	loading,
	addNewProduct,
	editProduct,
	deleteProduct,
}) => {
	const actionColumn = {
		title: '操作',
		key: 'actions',
		align: 'center',
		render: user => (
			<div>
				<EditButton onClick={() => editProduct(user)} />
				{/* <DeleteConfirmButton
					title={`确认要删除用户${user.profile.name} 吗？`}
					onConfirm={() => deleteProduct(user._id)}
				/> */}
				<Button type="link" danger>
					禁用
				</Button>
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
