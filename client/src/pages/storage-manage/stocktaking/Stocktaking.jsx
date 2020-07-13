import React, { useState, useCallback } from 'react'
import { Card } from 'antd'

import { SaveButton } from '../../../components'
import { StocktakingForm } from './components/StocktakingForm'
import { saveRecordData } from '../../../api'

const tabList = [
	{
		key: '盘点入库',
		tab: '盘点入库',
	},
	{
		key: '盘点出库',
		tab: '盘点出库',
	},
]

export const Stocktaking = () => {
	const [key, setKey] = useState('盘点入库')
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
			<StocktakingForm formId="tradeForm" formValue={formValue} onSubmit={onSubmit} />
		</Card>
	)
}
