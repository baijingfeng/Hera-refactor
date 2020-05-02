import React from 'react'

import {
	TypeSelect,
	NameSelect,
	SizeSelect,
	ActionsDelete,
} from '../../components'

export const type = configs => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	align: 'center',
	render: (text, { key }) => <TypeSelect value={text} rowKey={key} />,
	...configs,
})

export const name = configs => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	align: 'center',
	render: (text, record) => <NameSelect value={text} rowValue={record} />,
	...configs,
})

export const size = configs => ({
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	align: 'center',
	render: (text, record) => <SizeSelect value={text} rowValue={record} />,
	...configs,
})

export const actions = configs => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (_, { key }) => <ActionsDelete rowKey={key} />,
	...configs,
})
