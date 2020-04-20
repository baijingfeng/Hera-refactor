import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'

import { reqAllTypeRecordsData } from '../../api'

import './home.less'
import { FlowList } from '../../components'

export default class Home extends Component {
	state = {
		newInRecords: '加载中...',
		newOutRecords: '加载中...',
		updateRecords: '加载中...',
	}

	rowStyle = {
		marginTop: 25,
	}

	async componentDidMount() {
		const res = await reqAllTypeRecordsData({
			store: '586df7fe2d256304867ab346',
		})

		const [newInRecords, newOutRecords, updateRecords] = res.map(
			res => res.data.num
		)
		this.setState({
			newInRecords,
			newOutRecords,
			updateRecords,
		})
	}

	render() {
		return (
			<>
				<Row>
					<Col span={24}>
						<Card title="赫拉管理系统">
							亲爱的，欢迎使用赫拉管理系统，祝您心情愉快，工作顺利！
						</Card>
					</Col>
				</Row>
				<Row gutter={16} style={this.rowStyle}>
					<Col span={8}>
						<Card title="入库单新增量">
							{this.state.newInRecords}
						</Card>
					</Col>
					<Col span={8}>
						<Card title="出库单新增量">{this.state.newOutRecords}</Card>
					</Col>
					<Col span={8}>
						<Card title="出入库修改量">{this.state.updateRecords}</Card>
					</Col>
				</Row>
				<Row style={this.rowStyle}>
					<Col span={24}>
						<Card title="流程">
							<FlowList></FlowList>
						</Card>
					</Col>
				</Row>
				<Row style={this.rowStyle}>
					<Col span={24}>
						<Card title="日志">
							<FlowList></FlowList>
						</Card>
					</Col>
				</Row>
			</>
		)
	}
}
