import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

/** 表单列表项-重量 */
export const WeightInput = ({ handleFieldChange, value, rowKey }) => {
	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'weight', value)
		},
		[handleFieldChange, rowKey]
	)

	return <InputNumber min={0} value={value} onChange={onChange} />
}
