import React from 'react'
import { Select } from 'antd'

import { useArticles } from '../../utils'
import { useSelector } from 'react-redux'

const { Option } = Select

const children = []
for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

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
export const NameSelect = React.forwardRef(
	({ text, record, fieldName }, ref) => {
		const { typeNameMap, nameArticleMap } = useArticles()
		const tableFormType = useSelector(store => store.formDeps.tableFormType)

		const onChange = value => {
			ref.current.handleFieldChange(false, fieldName, record.key, value)
		}

		const optionValues = getNameOptions(
			typeNameMap,
			nameArticleMap,
			tableFormType
		)

		return (
			<Select value={text} onChange={onChange}>
				{optionValues.map(({ value, label }, index) => (
					<Option key={index.toString()} value={value}>
						{label}
					</Option>
				))}
			</Select>
		)
	}
)

export const name = (ref, configs) => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	render: (text, record) => (
		<NameSelect text={text} record={record} fieldName="name" ref={ref} />
	),
	...configs,
})
