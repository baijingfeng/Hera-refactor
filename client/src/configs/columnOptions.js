import { type, name, size, count, total, unit, actions } from '../components'

export const tradeColumns = ref => [
	type(ref),
	actions(ref, {
		align: 'center',
	}),
]

export const tradeColumnsInitialValue = {
	type: '',
	name: '',
}

const backup = (renderTypeInput, renderActions, ref) => [
	{
		title: '名称',
		dataIndex: 'name',
		key: 'name',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '规格',
		dataIndex: 'size',
		key: 'size',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '数量',
		dataIndex: 'count',
		key: 'count',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '小计',
		// dataIndex: 'price',
		key: 'total',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '单位',
		// dataIndex: 'report',
		key: 'unit',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '单价',
		dataIndex: 'price',
		key: 'price',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '金额',
		dataIndex: 'report',
		key: 'report',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '备注',
		dataIndex: 'comments',
		key: 'comments',
		render: (text, record) => renderTypeInput(text, record, ref, 'name'),
	},
	{
		title: '操作',
		key: 'actions',
		width: '10%',
		render: (text, record) => renderActions(text, record, ref),
	},
]
