import React from 'react'
import { InputNumber } from 'antd'

/** 表单列表项-数量 */
export const renderCountInput = (record, ref, fieldName) => {
	return (
		<InputNumber
			min={1}
			max={10}
			defaultValue={3}
			onChange={e => ref.current.handleFieldChange(e, fieldName, record.key)}
		/>
	)
}

export const count = (ref, configs) => ({
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	align: 'center',
	render: (_, record) => renderCountInput(record, ref, 'count'),
	...configs,
})
