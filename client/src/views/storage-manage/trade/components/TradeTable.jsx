import React, { PureComponent } from 'react'
import { Table, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

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

	newMember = () => {
		const { data, index } = this.state
		const newData = data?.map(item => ({ ...item })) || []

		newData.push({
			key: `NEW_TEMP_ID_${index}`,
			workId: '',
			name: '',
			department: '',
			editable: true,
			isNew: true,
		})

		this.setState({
			index: index + 1,
			newData,
		})
	}

	render() {
		return (
			<>
				<Table columns={this.columns} pagination={false} />
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
