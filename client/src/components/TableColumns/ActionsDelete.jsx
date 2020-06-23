import React from 'react'
import { Button } from 'antd'

/** 表单列表项-操作 */
export const ActionsDelete = ({ rowKey, handleDelete }) => (
	<Button type="link" danger onClick={() => handleDelete(rowKey)}>
		删除
	</Button>
)
