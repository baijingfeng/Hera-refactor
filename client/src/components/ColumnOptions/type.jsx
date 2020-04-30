import React from 'react'
import { useSelector } from 'react-redux'
import { Select } from 'antd'

import { transformArticle } from '../../utils'

const { Option } = Select

const children = []

for (let i = 10; i < 36; i++) {
	children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>)
}

/** 表单列表项-类型 */
export const TypeSelect = React.forwardRef(
	({ text, record, fieldName }, ref) => {
		const articles = useSelector(state => state.system.articles)
		console.log('articles', articles)
		const { typeNameMap, nameArticleMap } = transformArticle(articles.toArray())
		console.log('typeNameMap', typeNameMap)
		return (
			<Select
				size="middle"
				value={text}
				onChange={value =>
					ref.current.handleFieldChange(false, fieldName, record.key, value)
				}
			>
				{Object.keys(typeNameMap).map((type, index) => (
					<Option key={index.toString()}>{type}</Option>
				))}
			</Select>
		)
	}
)

export const type = (ref, configs) => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	render: (text, record) => (
		<TypeSelect text={text} record={record} fieldName="type" ref={ref} />
	),
})
