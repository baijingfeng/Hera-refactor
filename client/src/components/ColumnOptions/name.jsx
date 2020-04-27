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

/** 表单列表项-名称 */
export const renderNameSelect = (text, record, ref, fieldName) => {
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

export const name = (ref, configs) => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	render: (text, record) => renderNameSelect(text, record, ref, 'name'),
	...configs,
})
