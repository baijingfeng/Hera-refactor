import React, { useState, useCallback } from 'react'
import { Card } from 'antd'

import { SubmitButton } from '../../../components'
import { RentForm } from './components/RentForm'
import { useTableDatas } from '../../../utils'

const tabList = [
	{
		key: '租赁入库',
		tab: '租赁入库',
	},
	{
		key: '租赁出库',
		tab: '租赁出库',
	},
]

export const RentCreate = () => {
	const [key, setKey] = useState('租赁入库')
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
			tabBarExtraContent={<SubmitButton form="rentForm" />}
		>
			<RentForm formId="rentForm" formValue={formValue} onSubmit={onSubmit} />
		</Card>
	)
}

