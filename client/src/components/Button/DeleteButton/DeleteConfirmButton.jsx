import React from 'react'
import { Popconfirm, Button } from 'antd'

export const DeleteConfirmButton = ({ title, onConfirm }) => {
	return (
		<Popconfirm
			title={title}
			onConfirm={onConfirm}
			okText="确认"
			cancelText="取消"
		>
			<Button type="link" danger>
				删除
			</Button>
		</Popconfirm>
	)
}
