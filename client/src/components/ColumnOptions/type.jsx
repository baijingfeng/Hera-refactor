import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

function handleChange(value) {
	console.log(`Selected: ${value}`)
}

/** 表单列表项-类型 */
export const renderTypeSelect= (text, record, ref, fieldName) => {
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

export const type = (ref, configs) => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	render: (text, record) => renderTypeSelect(text, record, ref, 'type'),
	...configs,
})
