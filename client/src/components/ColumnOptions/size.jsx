import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-规格 */
export const renderSizeSelect = (record, ref, fieldName) => {
	return (
		<Select
			size="middle"
			defaultValue="a1"
			onChange={e => ref.current.handleFieldChange(e, fieldName, record.key)}
			style={{ width: 200 }}
		>
			{children}
		</Select>
	)
}

export const size = (ref, configs) => ({
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	align: 'center',
	render: (_, record) => renderSizeSelect(record, ref, 'size'),
	...configs,
})
