import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export const AddNewButton = ({ onClick, ...options }) => {
	return (
		<Button type="primary" onClick={onClick} {...options}>
			<PlusOutlined /> 新增
		</Button>
	)
}
