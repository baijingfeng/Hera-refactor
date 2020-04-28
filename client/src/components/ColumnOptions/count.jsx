import React from 'react'
import { InputNumber } from 'antd'

/** 表单列表项-数量 */
export const renderCountInput = (text, record, ref, fieldName) => {
	return (
		<InputNumber
			min={0}
			value={text}
			onChange={value =>
				ref.current.handleFieldChange(false, fieldName, record.key, value)
			}
		/>
	)
}

export const count = (ref, configs) => ({
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	render: (text, record) => renderCountInput(text, record, ref, 'count'),
	...configs,
})
