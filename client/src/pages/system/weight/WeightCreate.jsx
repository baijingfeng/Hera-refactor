import React, { useCallback } from 'react'
import { Card, Button } from 'antd'
import { CloseOutlined } from '@ant-design/icons'

import { SaveButton } from '../../../components'
import { WeightForm } from './components/WeightForm'
import { saveRecordData } from '../../../api'
import { history } from '../../../tools'

export const WeightCreate = () => {
	const onSubmit = useCallback(({ date, ...rest }) => {
		saveRecordData({ ...rest, date: date.format('YYYY-MM-DD') })
	}, [])

	return (
		<Card
			title="计重方案创建"
			style={{ width: '100%' }}
			extra={
				<span>
					<Button
						style={{ marginRight: '20px' }}
						onClick={() => history.goBack()}
					>
						<CloseOutlined />
						取消
					</Button>
					<SaveButton form="weightForm" />
				</span>
			}
		>
			<WeightForm formId="weightForm" onSubmit={onSubmit} />
		</Card>
	)
}
