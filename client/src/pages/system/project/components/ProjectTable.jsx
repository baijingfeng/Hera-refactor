import React from 'react'
import { Table, Button, Descriptions } from 'antd'

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
		title: '联系人信息',
		dataIndex: 'contacts',
		key: 'contact_name',
		align: 'center',
		render: contacts => (
			<Descriptions layout="vertical" bordered column={4} size="small">
				{contacts.map(({ _id, name, phone }) => (
					<Descriptions.Item key={_id} label={name}>
						{phone}
					</Descriptions.Item>
				))}
			</Descriptions>
		),
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
		width: '5%',
		render: project => (
			<div>
				<EditButton onClick={() => editProduct(project)} />
				<DeleteConfirmButton
					title={`确认要删除吗`}
					onConfirm={() => deleteProduct(project._id)}
				/>
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
