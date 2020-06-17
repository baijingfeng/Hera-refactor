import React, { useCallback } from 'react'
import { Select } from 'antd'

import { useArticles, useTableDatas } from '../../tools'

const { Option } = Select

const getNameOptions = (typeNameMap, nameArticleMap, type) => {
	// 因为有的旧数据存在分类问题，所以这里加一个判断空的处理
	// 尽管我们可以把所有数据问题都解决掉，但是不可否认，我已经检查过一遍数据却还存在这个问题，所以还有隐含的问题
	if (typeNameMap[type]) {
		return typeNameMap[type].map(name => ({
			value: name,
			label: name,
			pinyin: nameArticleMap[name].pinyin,
		}))
	} else {
		return []
	}
}

/** 表单列表项-名称 */
export const NameSelect = ({ value, rowValue: { key, type } }) => {
	const { typeNameMap, nameArticleMap } = useArticles()
	const { handleFieldChange } = useTableDatas()

	const optionValues = getNameOptions(typeNameMap, nameArticleMap, type)

	const onChange = useCallback(
		value => {
			handleFieldChange(key, 'name', value)
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
