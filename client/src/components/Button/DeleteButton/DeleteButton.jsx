import React from 'react'
import { Button } from 'antd'

export const DeleteButton = ({ ...options }) => {
	return (
		<Button type="link" danger {...options}>
			删除
		</Button>
	)
}
