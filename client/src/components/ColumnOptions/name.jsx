import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-名称 */
export const renderNameSelect = (record, ref, fieldName) => {
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

export const name = (ref, configs) => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	align: 'center',
	render: (_, record) => renderNameSelect(record, ref, 'name'),
	...configs,
})
