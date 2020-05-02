import React from 'react'

import {
	TypeSelect,
	NameSelect,
	SizeSelect,
	CountInput,
	SubTotalText,
	UnitText,
	PriceInput,
	AmountText,
	CommentsInput,
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

export const count = configs => ({
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	align: 'center',
	render: (text, { key }) => <CountInput value={text} rowKey={key} />,
	...configs,
})

export const subtotal = configs => ({
	title: '小计',
	key: 'subtotal',
	align: 'center',
	render: (_, record) => <SubTotalText rowValue={record} />,
	...configs,
})

export const unit = configs => ({
	title: '单位',
	key: 'unit',
	align: 'center',
	render: (_, record) => <UnitText rowValue={record} />,
	...configs,
})

export const price = configs => ({
	title: '单价',
	dataIndex: 'price',
	key: 'price',
	align: 'center',
	render: (text, { key }) => <PriceInput value={text} rowKey={key} />,
	...configs,
})

export const amount = configs => ({
	title: '金额',
	key: 'amount',
	align: 'center',
	render: (_, record) => <AmountText rowValue={record} />,
	...configs,
})

export const comments = configs => ({
	title: '备注',
	dataIndex: 'comments',
	key: 'comments',
	align: 'center',
	render: (text, { key }) => <CommentsInput value={text} rowKey={key} />,
	...configs,
})

export const actions = configs => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (_, { key }) => <ActionsDelete rowKey={key} />,
	...configs,
})
