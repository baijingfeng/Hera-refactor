import React, { Component } from 'react'
import { Card, Button } from 'antd'

import { TradeForm } from './components/TradeForm'

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

const SubmitButton = () => (
	<Button type="primary" htmlType="submit">
		保存
	</Button>
)

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
				tabBarExtraContent={<SubmitButton />}
			>
				<TradeForm />
			</Card>
		)
	}
}
