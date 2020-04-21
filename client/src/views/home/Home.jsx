import React, { Component } from 'react'
import { Row } from 'antd'

import { FlowTable, LogTable } from '../../components'
import { reqAllTypeRecordsData } from '../../api'
import { GridCard } from '../../models'

import './home.less'

export class Home extends Component {
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
		const { newInRecords, newOutRecords, updateRecords } = this.state
		return (
			<>
				<Row>
					<GridCard span={24} title="赫拉管理系统">
						亲爱的，欢迎使用赫拉管理系统，祝您心情愉快，工作顺利！
					</GridCard>
				</Row>
				<Row gutter={16} style={this.rowStyle}>
					<GridCard span={8} title="入库单新增量">
						{newInRecords}
					</GridCard>
					<GridCard span={8} title="出库单新增量">
						{newOutRecords}
					</GridCard>
					<GridCard span={8} title="出入库修改量">
						{updateRecords}
					</GridCard>
				</Row>
				<Row style={this.rowStyle}>
					<GridCard span={24} title="流程" extra={<a href="#">刷新</a>}> {/** TODO: 更改为ajax异步刷新 */}
						<FlowTable />
					</GridCard>
				</Row>
				<Row style={this.rowStyle}>
					<GridCard span={24} title="日志" extra={<a href="#">刷新</a>}>
						<LogTable />
					</GridCard>
				</Row>
			</>
		)
	}
}
