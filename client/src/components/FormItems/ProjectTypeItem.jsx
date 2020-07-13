import React from 'react'
import { Select } from 'antd'
import { PURCHASING_CLIENT_TYPES } from '../../configs'
import ColItem from './components/ColItem'

export const ProjectTypeItem = ({ colCof, itemCof, onChange }) => {
	const baseItemCof = {
		label: '类型',
		name: 'projectType',
		rules: [{ required: true, message: '请选择类型!' }],
	}

	return (
		<ColItem
			colCof={{ ...colCof }}
			itemCof={{
				...baseItemCof,
				...itemCof,
			}}
		>
			<Select
				style={{ width: 300 }}
				placeholder="请选择类型"
				onChange={onChange}
			>
				{PURCHASING_CLIENT_TYPES.map((item, index) => (
					<Select.Option key={`${index}${item}`} value={item}>
						{item}
					</Select.Option>
				))}
			</Select>
		</ColItem>
	)
}
