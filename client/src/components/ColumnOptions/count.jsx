import React from 'react'
import { InputNumber } from 'antd'

function onChange(value) {
	console.log('changed', value)
}

/** 表单列表项-数量 */
export const renderCountInput = (text, record, ref, fieldName) => {
	if (record.editable) {
		return (
			<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
		)
	}
	return text
}

export const count = (ref, configs) => ({
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	render: (text, record) => renderCountInput(text, record, ref, 'count'),
	...configs,
})
