import React from 'react'
import { Button, Divider, Popconfirm } from 'antd'

/** 表单列表项-操作 */
export const renderActions = (
	text,
	record,
	{ getLoading, saveRow, removeRow, cancelAction, toggleEditable }
) => {
	const loading = getLoading()
	if (!!record.editable && loading) {
		return null
	}

	if (record.editable) {
		if (record.isNew) {
			return (
				<span>
					<Button type="link" onClick={e => saveRow(e, record.key)}>
						添加
					</Button>
					<Divider type="vertical" />
					<Popconfirm
						title="是否要删除此行？"
						onConfirm={() => removeRow(record.key)}
					>
						<Button type="link">删除</Button>
					</Popconfirm>
				</span>
			)
		}

		return (
			<span>
				<Button type="link" onClick={e => saveRow(e, record.key)}>
					保存
				</Button>
				<Divider type="vertical" />
				<Button type="link" onClick={e => cancelAction(e, record.key)}>
					取消
				</Button>
			</span>
		)
	}

	return (
		<span>
			<Button type="link" onClick={e => toggleEditable(e, record.key)}>
				编辑
			</Button>
			<Divider type="vertical" />
			<Popconfirm
				title="是否要删除此行？"
				onConfirm={() => removeRow(record.key)}
			>
				<Button type="link">删除</Button>
			</Popconfirm>
		</span>
	)
}

export const actions = (ref, configs) => ({
	title: '操作',
	key: 'actions',
  width: '15%',
  align: 'center',
  render: (text, record) => renderActions(text, record, ref.current),
  ...configs,
})
