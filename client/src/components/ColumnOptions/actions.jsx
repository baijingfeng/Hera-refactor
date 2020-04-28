import React from 'react'
import { Button } from 'antd'

/** 表单列表项-操作 */
export const renderActions = (record, ref) => {
	return (
		<Button
			type="link"
			danger
			onClick={() => ref.current.removeRow(record.key)}
		>
			删除
		</Button>
	)
}

export const actions = (ref, configs) => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (_, record) => renderActions(record, ref),
	...configs,
})
