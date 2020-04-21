import React, { PureComponent } from 'react'
import { Form, Input, Card, Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Item } = Form
export default class TradeFormList extends PureComponent {
	columns = [
		{
			title: '类型',
			dataIndex: 'level',
			key: 'level',
		},
		{
			title: '名称',
			dataIndex: 'timestamp',
			key: 'timestamp',
		},
		{
			title: '规格',
			dataIndex: 'type',
			key: 'type',
		},
		{
			title: '数量',
			dataIndex: 'user',
			key: 'user',
		},
		{
			title: '小计',
			dataIndex: 'report',
			key: 'report',
		},
		{
			title: '单位',
			dataIndex: 'report',
			key: 'report',
		},
		{
			title: '单价',
			dataIndex: 'report',
			key: 'report',
		},
		{
			title: '金额',
			dataIndex: 'report',
			key: 'report',
		},
		{
			title: '备注',
			dataIndex: 'report',
			key: 'report',
		},
	]
	render() {
		return (
			<>
				<Table columns={this.columns} />
				<Button
					icon={<PlusOutlined />}
					onClick={this.handleAdd}
					type="primary"
					ghost
					style={{
						marginBottom: 16,
						width: '100%',
						borderStyle: 'dashed',
					}}
				>
					增加
				</Button>
			</>
		)
	}
}
