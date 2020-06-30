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
	WeightInput,
	ActionsDelete,
} from '../../components'

export const type = handleFieldChange => ({
	title: '类型',
	dataIndex: 'type',
	key: 'type',
	align: 'center',
	render: (text, { key }) => (
		<TypeSelect
			value={text}
			rowKey={key}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const name = handleFieldChange => ({
	title: '名称',
	dataIndex: 'name',
	key: 'name',
	align: 'center',
	width: '15%',
	render: (text, record) => (
		<NameSelect
			value={text}
			rowValue={record}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const size = handleFieldChange => ({
	title: '规格',
	dataIndex: 'size',
	key: 'size',
	align: 'center',
	width: '15%',
	render: (text, record) => (
		<SizeSelect
			value={text}
			rowValue={record}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const count = handleFieldChange => ({
	title: '数量',
	dataIndex: 'count',
	key: 'count',
	align: 'center',
	render: (text, { key }) => (
		<CountInput
			value={text}
			rowKey={key}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const total = handleFieldChange => ({
	title: '小计',
	key: 'total',
	align: 'center',
	render: (_, record) => (
		<TotalText rowValue={record} handleFieldChange={handleFieldChange} />
	),
})

export const unit = handleFieldChange => ({
	title: '单位',
	key: 'unit',
	align: 'center',
	render: (_, record) => (
		<UnitText rowValue={record} handleFieldChange={handleFieldChange} />
	),
})

export const price = handleFieldChange => ({
	title: '单价',
	dataIndex: 'price',
	key: 'price',
	align: 'center',
	render: (text, { key }) => (
		<PriceInput
			value={text}
			rowKey={key}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const amount = handleFieldChange => ({
	title: '金额',
	key: 'amount',
	align: 'center',
	render: (_, record) => (
		<AmountText rowValue={record} handleFieldChange={handleFieldChange} />
	),
})

export const weight = handleFieldChange => ({
	title: '重量',
	dataIndex: 'weight',
	key: 'weight',
	align: 'center',
	render: (text, { key }) => (
		<WeightInput
			value={text}
			rowKey={key}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const comments = handleFieldChange => ({
	title: '备注',
	dataIndex: 'comments',
	key: 'comments',
	align: 'center',
	render: (text, { key }) => (
		<CommentsInput
			value={text}
			rowKey={key}
			handleFieldChange={handleFieldChange}
		/>
	),
})

export const actions = handleDelete => ({
	title: '操作',
	key: 'actions',
	align: 'center',
	render: (_, { key }) => (
		<ActionsDelete rowKey={key} handleDelete={handleDelete} />
	),
})
