import React, { useCallback } from 'react'
import { Input } from 'antd'

import { useTableDatas } from '../../tools'

/** 表单列表项-数量 */
export const CommentsInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()
	const onChange = useCallback(
		e => {
			handleFieldChange(rowKey, 'comments', e.target.value)
		},
		[handleFieldChange, rowKey]
	)

	return <Input value={value} onChange={onChange} />
}
