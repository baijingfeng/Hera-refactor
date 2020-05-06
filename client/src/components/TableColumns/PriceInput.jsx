import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

import { useTableDatas } from '../../utils'

/** 表单列表项-单价 */
export const PriceInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()

	const onChange = useCallback(
		value => {
			handleFieldChange(rowKey, 'price', value)
		},
		[handleFieldChange, rowKey]
	)

	return <InputNumber min={0} value={value} onChange={onChange} />
}
