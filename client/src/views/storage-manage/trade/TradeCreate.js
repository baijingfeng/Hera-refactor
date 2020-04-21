import React, { Component } from 'react'
import { Card } from 'antd'

import { TradeForm } from '../../../components/storage-manage/trade/TradeForm'

const tabList = [
	{
		key: '采购入库',
		tab: '采购入库',
	},
	{
		key: '销售出库',
		tab: '销售出库',
	},
]

export class TradeCreate extends Component {
	state = {
		key: '采购入库',
	}

	onTabChange = key => {
		this.setState({ key })
	}

	render() {
		return (
			<Card
				style={{ width: '100%' }}
				tabList={tabList}
				activeTabKey={this.state.key}
				onTabChange={this.onTabChange}
			>
				<TradeForm/>
			</Card>
		)
	}
}
