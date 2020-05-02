import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

import { useTableDatas } from '../../utils'

/** 表单列表项-单价 */
export const PriceInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()

	const onChange = value => {
		handleFieldChange(rowKey, 'price', value)
	}

	return <InputNumber min={0} value={value} onChange={onChange} />
}
