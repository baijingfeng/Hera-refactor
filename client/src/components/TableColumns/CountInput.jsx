import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

import { useTableDatas } from '../../utils'

/** 表单列表项-数量 */
export const CountInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()
	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'count', value)
		},
		[handleFieldChange, rowKey]
	)

	return <InputNumber min={0} value={value} onChange={onChange} />
}
