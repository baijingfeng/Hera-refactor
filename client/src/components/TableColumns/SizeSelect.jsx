import React, { useCallback } from 'react'
import { Select } from 'antd'

import { useArticles } from '../../tools'

const { Option } = Select

const getSizeOptions = (nameArticleMap, name) => {
	const article = nameArticleMap[name]
	return article
		? article.sizes.map(size => ({ value: size, label: size }))
		: []
}

/** 表单列表项-规格 */
export const SizeSelect = ({ handleFieldChange, value, rowValue }) => {
	const { nameArticleMap } = useArticles()

	const { key, name } = rowValue

	const optionValues = getSizeOptions(nameArticleMap, name)

	const onChange = useCallback(
		value => {
			handleFieldChange(key, 'size', value)
		},
		[handleFieldChange, key]
	)

	return (
		<Select value={value} onChange={onChange}>
			{optionValues.map(({ value, label }, index) => (
				<Option key={index.toString()} value={value}>
					{label}
				</Option>
			))}
		</Select>
	)
}
