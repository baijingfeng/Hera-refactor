import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-名称 */
export const renderNameSelect = (text, record, ref, fieldName) => {
	return (
		<Select
			value={text}
			onChange={value => ref.current.handleFieldChange(false, fieldName, record.key, value)}
		>
			{children}
		</Select>
	)
}

export const name = (ref, configs) => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	render: (text, record) => renderNameSelect(text, record, ref, 'name'),
	...configs,
})
