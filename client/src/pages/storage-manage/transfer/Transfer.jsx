import React, { useState, useCallback } from 'react'
import { Card } from 'antd'

import { SaveButton } from '../../../components'
import { TransferForm } from './components/TransferForm'
import { saveRecordData } from '../../../api'

const tabList = [
	{
		key: '暂存入库',
		tab: '暂存入库',
	},
	{
		key: '暂存出库',
		tab: '暂存出库',
	},
]

export const Transfer = () => {
	const [key, setKey] = useState('暂存入库')

	const onSubmit = useCallback(value => {
		console.log('value', value)
		saveRecordData({ ...value })
	}, [])

	return (
		<Card
			style={{ width: '100%' }}
			tabList={tabList}
			activeTabKey={key}
			onTabChange={setKey}
			tabBarExtraContent={<SaveButton form="transferForm" />}
		>
			<TransferForm formId="transferForm" onSubmit={onSubmit} />
		</Card>
	)
}
