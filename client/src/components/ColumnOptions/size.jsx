import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-规格 */
export const renderSizeSelect = (text, record, ref, fieldName) => {
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

export const size = (ref, configs) => ({
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	render: (text, record) => renderSizeSelect(text, record, ref, 'size'),
	...configs,
})
