import React from 'react'
import { Button } from 'antd'

export const EditButton = ({ onClick, ...options }) => {
	return (
		<Button type="link" onClick={onClick} {...options}>
			编辑
		</Button>
	)
}
