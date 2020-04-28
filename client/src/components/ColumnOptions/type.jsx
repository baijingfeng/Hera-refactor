import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []

for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-类型 */
export const renderTypeSelect = (record, ref, fieldName) => {
	return (
		<Select
			size="middle"
			defaultValue="a1"
			onChange={value => ref.current.handleFieldChange(false, fieldName, record.key, value)}
			style={{ width: 200 }}
		>
			{children}
		</Select>
	)
}

export const type = (ref, configs) => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	align: 'center',
	render: (_, record) => renderTypeSelect(record, ref, 'type'),
	...configs,
})
