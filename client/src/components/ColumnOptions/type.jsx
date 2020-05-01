import React, { useCallback } from 'react'
import { Select } from 'antd'
import { useDispatch } from 'react-redux'

import { useArticles } from '../../utils'
import { changeTableFormType } from '../../redux/actions'

const { Option } = Select

/** 表单列表项-类型 */
export const TypeSelect = React.forwardRef(
	({ text, record, fieldName }, ref) => {
		const { typeNameMap } = useArticles()
		const dispatch = useDispatch()

		const onChange = useCallback(
			value => {
				dispatch(changeTableFormType(value))
				ref.current.handleFieldChange(false, fieldName, record.key, value)
			},
			[dispatch]
		)

		return (
			<Select size="middle" value={text} onChange={onChange}>
				{Object.keys(typeNameMap).map((type, index) => (
					<Option key={index.toString()} value={type}>
						{type}
					</Option>
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
	...configs,
})
