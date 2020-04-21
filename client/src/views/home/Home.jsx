import React, { Component } from 'react'
import { Row, Button } from 'antd'

import FlowTable from './components/FlowTable'
import LogTable from './components/LogTable'
import { reqAllTypeRecordsData } from '../../api'
import { GridCard } from '../../components'

import './home.less'

export class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newInRecords: '加载中...',
			newOutRecords: '加载中...',
			updateRecords: '加载中...',
		}

		this.logRef = React.createRef()
	}

	rowStyle = {
		marginTop: 25,
	}

	getLogData = () => {
		this.logRef.current.getTablePage()
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
					<GridCard
						span={24}
						title="流程"
						extra={
							<Button type="link" onClick={() => {}}>
								刷新
							</Button>
						}
					>
						{/** TODO: 更改为ajax异步刷新 */}
						<FlowTable />
					</GridCard>
				</Row>
				<Row style={this.rowStyle}>
					<GridCard
						span={24}
						title="日志"
						extra={
							<Button type="link" onClick={this.getLogData}>
								刷新
							</Button>
						}
					>
						<LogTable ref={this.logRef} />
					</GridCard>
				</Row>
			</>
		)
	}
}
