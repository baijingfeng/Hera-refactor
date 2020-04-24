import React from 'react'
import { Input } from 'antd'

/** 表单列表项-类型 */
export const renderTypeInput = (text, record, ref, fieldName) => {
	if (record.editable) {
		return (
			<Input
				value={text}
				autoFocus
				onChange={e => ref.current.handleFieldChange(e, fieldName, record.key)}
				onKeyPress={e => ref.current.handleKeyPress(e, record.key)}
				placeholder="类型"
			/>
		)
	}
	return text
}

export const type = (ref, configs) => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	render: (text, record) => renderTypeInput(text, record, ref, 'type'),
	...configs,
})
