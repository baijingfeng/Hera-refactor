import React, { useState } from 'react'
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

export const TradeCreate = () => {
	const [key, setKey] = useState('采购入库')

	return (
		<Card
			style={{ width: '100%' }}
			tabList={tabList}
			activeTabKey={key}
			onTabChange={setKey}
			tabBarExtraContent={<SubmitButton />}
		>
			<TradeForm />
		</Card>
	)
}
