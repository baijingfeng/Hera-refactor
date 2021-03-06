import React, { Component } from 'react'
import { Row, Button, message } from 'antd'

import FlowTable from './components/FlowTable'
import LogTable from './components/LogTable'
import { queryAllTypeRecordsData } from '../../api'
import { GridCard } from '../../components'

import './home.less'

const rowStyle = {
	marginTop: 25,
}
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

	componentDidMount() {
		this.fetchAllTypeRecordsData()
	}

	getLogData = () => {
		try {
			this.logRef.current.fetchPage()
		} catch (error) {
			message.error('刷新失败, 请稍后再试!')
		}
	}

	fetchAllTypeRecordsData = async () => {
		const res = await queryAllTypeRecordsData({
			store: '586df7fe2d256304867ab346',
		})

		const [newInRecords, newOutRecords, updateRecords] = res.map(
			selfRes => selfRes.data.num
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
				<Row gutter={16} style={rowStyle}>
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
				<Row style={rowStyle}>
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
				<Row style={rowStyle}>
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
