import React from 'react'
import { Button } from 'antd'

/** 表单列表项-操作 */
export const renderActions = (
	text,
	record,
	{ saveRow, removeRow, cancelAction, toggleEditable }
) => {
	return (
		<Button type="link" danger onClick={() => removeRow(record.key)}>
			删除
		</Button>
	)
}

export const actions = (ref, configs) => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (text, record) => renderActions(text, record, ref.current),
	...configs,
})
