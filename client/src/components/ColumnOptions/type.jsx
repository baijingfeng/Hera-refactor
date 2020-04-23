import React from 'react'
import { Input } from 'antd'

/** 表单列表项-类型 */
export const renderTypeInput = (text, record, tableFormRef, fieldName) => {
	if (record.editable) {
		return (
			<Input
				value={text}
				autoFocus
				onChange={e => tableFormRef.handleFieldChange(e, fieldName, record.key)}
				onKeyPress={e => tableFormRef.handleKeyPress(e, record.key)}
				placeholder="类型"
			/>
		)
	}
	return text
}

export const type = ref => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	render: (text, record) => renderTypeInput(text, record, ref.current, 'type'),
})
