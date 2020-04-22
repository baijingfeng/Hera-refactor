import React, { PureComponent } from 'react'
import { Table, Button, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import styles from '../style.less'

export default class TradeFormList extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			index: 0,
			data: [],
		}
	}

	columns = [
		{
			title: '类型',
			dataIndex: 'type',
			key: 'type',
			// width: '20%',
			render: (text, record) => {
				if (record.editable) {
					return (
						<Input
							value={text}
							autoFocus
							onChange={e => this.handleFieldChange(e, 'name', record.key)}
							onKeyPress={e => this.handleKeyPress(e, record.key)}
							placeholder="类型"
						/>
					)
				}
				return text
			},
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
		{
			title: '小计',
			// dataIndex: 'price',
			key: 'total',
		},
		{
			title: '单位',
			// dataIndex: 'report',
			key: 'unit',
		},
		{
			title: '单价',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: '金额',
			dataIndex: 'report',
			key: 'report',
		},
		{
			title: '备注',
			dataIndex: 'comments',
			key: 'comments',
		},
		{
			title: '操作',
			key: 'actions',
		},
	]

	newMember = () => {
		console.log('object')
		const { data, index } = this.state
		const newData = (data && data.map(item => ({ ...item }))) || []

		newData.push({
			key: `NEW_TEMP_ID_${index}`,
			type: '',
			name: '',
			size: '',
			count: '',
			total: '',
			unit: '',
			price: '',
			report: '',
			comments: '',
		})

		this.setState({
			index: index + 1,
			newData,
		})
	}

	render() {
		const { newData } = this.state
		return (
			<>
				<Table
					columns={this.columns}
					dataSource={newData}
					rowClassName={record => (record.editable ? styles.editable : '')}
					pagination={false}
				/>
				<Button
					onClick={this.newMember}
					type="primary"
					ghost
					style={{
						marginTop: 16,
						marginBottom: 8,
						width: '100%',
						borderStyle: 'dashed',
					}}
				>
					<PlusOutlined />
					增加
				</Button>
			</>
		)
	}
}
