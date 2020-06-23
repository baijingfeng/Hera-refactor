import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

/** 表单列表项-数量 */
export const CountInput = ({ handleFieldChange, value, rowKey }) => {
	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'count', value)
		},
		[handleFieldChange, rowKey]
	)

	return <InputNumber min={0} value={value} onChange={onChange} />
}
