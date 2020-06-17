import React, { useCallback } from 'react'
import { Select } from 'antd'

import { useArticles, useTableDatas } from '../../tools'

const { Option } = Select

/** 表单列表项-类型 */
export const TypeSelect = ({ rowKey, value }) => {
	const { typeNameMap } = useArticles()
	const { handleFieldChange } = useTableDatas({ rowKey })

	const optionValues = Object.keys(typeNameMap)
	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'type', value)
		},
		[handleFieldChange, rowKey],
	) 

	return (
		<Select size="middle" value={value} onChange={onChange}>
			{optionValues.map((type, index) => (
				<Option key={index.toString()} value={type}>
					{type}
				</Option>
			))}
		</Select>
	)
}
