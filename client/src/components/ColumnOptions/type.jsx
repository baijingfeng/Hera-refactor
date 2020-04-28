import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []

for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-类型 */
export const renderTypeSelect = (text, record, ref, fieldName) => {
	return (
		<Select
			size="middle"
			value={text}
			onChange={value =>
				ref.current.handleFieldChange(false, fieldName, record.key, value)
			}
		>
			{children}
		</Select>
	)
}

export const type = (ref, configs) => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	render: (text, record) => renderTypeSelect(text, record, ref, 'type'),
	...configs,
})
