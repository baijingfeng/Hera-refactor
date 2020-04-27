import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value) {
	console.log(`名称 Selected: ${value}`)
}

/** 表单列表项-规格 */
export const renderSizeSelect = (text, record, ref, fieldName) => {
	if (record.editable) {
		return (
			<Select
				size='middle'
				defaultValue="a1"
				onChange={handleChange}
				style={{ width: 200 }}
			>
				{children}
			</Select>
		)
	}
	return text
}

export const size = (ref, configs) => ({
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	render: (text, record) => renderSizeSelect(text, record, ref, 'size'),
	...configs,
})
