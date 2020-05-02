import React, { useCallback } from 'react'
import { Select } from 'antd'

import { useArticles, useTableDatas } from '../../utils'

const { Option } = Select

/** 表单列表项-类型 */
export const TypeSelect = ({ rowKey, value }) => {
	const { typeNameMap } = useArticles()
	const { handleFieldChange } = useTableDatas({ rowKey })

	const optionValues = Object.keys(typeNameMap)
	const onChange = value => {
		handleFieldChange(rowKey, 'type', value)
	}

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
