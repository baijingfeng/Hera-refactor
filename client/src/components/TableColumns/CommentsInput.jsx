import React, { useCallback } from 'react'
import { Input } from 'antd'

/** 表单列表项-数量 */
export const CommentsInput = ({ value, rowKey, handleFieldChange }) => {
	const onChange = useCallback(
		e => {
			handleFieldChange(rowKey, 'comments', e.target.value)
		},
		[handleFieldChange, rowKey]
	)

	return <Input value={value} onChange={onChange} />
}
