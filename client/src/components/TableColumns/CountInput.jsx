import React, { useCallback } from 'react'
import { InputNumber } from 'antd'

import { useTableDatas } from '../../utils'

/** 表单列表项-数量 */
export const CountInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()
	const onChange = value => {
		handleFieldChange(rowKey, 'count', value)
	}

	return <InputNumber min={0} value={value} onChange={onChange} />
}
