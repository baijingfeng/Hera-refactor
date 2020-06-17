import React from 'react'
import { Button } from 'antd'

import { useTableDatas } from '../../tools'

/** 表单列表项-操作 */
export const ActionsDelete = ({ rowKey }) => {
	const { removeRow } = useTableDatas({ rowKey })

	return (
		<Button type="link" danger onClick={removeRow}>
			删除
		</Button>
	)
}
