import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

/** 表单列表项-单价 */
export const PriceInput = ({ handleFieldChange, value, rowKey }) => {
	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'price', value)
		},
		[handleFieldChange, rowKey]
	)

	return <InputNumber min={0} value={value} onChange={onChange} />
}
