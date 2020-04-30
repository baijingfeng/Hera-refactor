import React, { useState } from 'react'
import { Card } from 'antd'

import { SubmitButton } from '../../../components'
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

export const TradeCreate = () => {
	const [key, setKey] = useState('采购入库')
	const [formValue, setFormValue] = useState(null)

	const onSubmit = value => {
		console.log('value', value)
		console.log('key', key)
		setFormValue(value)
	}

	return (
		<Card
			style={{ width: '100%' }}
			tabList={tabList}
			activeTabKey={key}
			onTabChange={setKey}
			tabBarExtraContent={<SubmitButton form="tradeForm" />}
		>
			<TradeForm formId="tradeForm" formValue={formValue} onSubmit={onSubmit} />
		</Card>
	)
}
