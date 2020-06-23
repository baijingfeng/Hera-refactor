import React from 'react'

import {
	TypeSelect,
	NameSelect,
	SizeSelect,
	CountInput,
	TotalText,
	UnitText,
	PriceInput,
	AmountText,
	CommentsInput,
	ActionsDelete,
} from '../../components'

export const type = {
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	align: 'center',
	render: (text, { key }) => <TypeSelect value={text} rowKey={key} />,
}

export const name = {
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	align: 'center',
	width: '15%',
	render: (text, record) => <NameSelect value={text} rowValue={record} />,
}

export const size = {
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	align: 'center',
	width: '15%',
	render: (text, record) => <SizeSelect value={text} rowValue={record} />,
}

export const count = {
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	align: 'center',
	render: (text, { key }) => <CountInput value={text} rowKey={key} />,
}

export const total = {
	title: '小计',
	key: 'total',
	align: 'center',
	render: (_, record) => <TotalText rowValue={record} />,
}

export const unit = {
	title: '单位',
	key: 'unit',
	align: 'center',
	render: (_, record) => <UnitText rowValue={record} />,
}

export const price = {
	title: '单价',
	dataIndex: 'price',
	key: 'price',
	align: 'center',
	render: (text, { key }) => <PriceInput value={text} rowKey={key} />,
}

export const amount = {
	title: '金额',
	key: 'amount',
	align: 'center',
	render: (_, record) => <AmountText rowValue={record} />,

}

export const comments = {
	title: '备注',
	dataIndex: 'comments',
	key: 'comments',
	align: 'center',
	render: (text, { key }) => <CommentsInput value={text} rowKey={key} />,

}

export const actions = handleDelete => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (_, { key }) => <ActionsDelete rowKey={key} handleDelete={handleDelete}/>,
})
