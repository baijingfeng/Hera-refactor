import React, { useCallback } from 'react'
import { Input } from 'antd'

import { useTableDatas } from '../../utils'

/** 表单列表项-数量 */
export const CommentsInput = ({ value, rowKey }) => {
	const { handleFieldChange } = useTableDatas()
	const onChange = e => {
		handleFieldChange(rowKey, 'comments', e.target.value)
	}

	return <Input value={value} onChange={onChange} />
}
