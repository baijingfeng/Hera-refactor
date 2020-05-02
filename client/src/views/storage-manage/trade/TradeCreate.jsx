import React, { useState, useCallback } from 'react'
import { Card } from 'antd'

import { SubmitButton } from '../../../components'
import { TradeForm } from './components/TradeForm'
import { useTableDatas } from '../../../utils'

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
	const { datas } = useTableDatas()

	const onSubmit = useCallback(
		value => {
			console.log({ ...value, entries: datas })
			setFormValue({ ...value, entries: datas })
		},
		[datas]
	)

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
