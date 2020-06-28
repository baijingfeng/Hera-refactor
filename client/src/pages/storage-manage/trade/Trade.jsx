import React, { useState, useCallback } from 'react'
import { Card } from 'antd'

import { SaveButton } from '../../../components'
import { TradeForm } from './components/TradeForm'
import { saveRecordData } from '../../../api'

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

export const Trade = () => {
	const [key, setKey] = useState('采购入库')
	const [formValue, setFormValue] = useState(null)

	const onSubmit = useCallback(value => {
		console.log('value', value)
		saveRecordData({ ...value })
		setFormValue({ ...value })
	}, [])

	return (
		<Card
			style={{ width: '100%' }}
			tabList={tabList}
			activeTabKey={key}
			onTabChange={setKey}
			tabBarExtraContent={<SaveButton form="tradeForm" />}
		>
			<TradeForm formId="tradeForm" formValue={formValue} onSubmit={onSubmit} />
		</Card>
	)
}
