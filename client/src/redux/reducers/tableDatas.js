import { CHANGE_TABLE_DATAS } from '../action-types'

const obj = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
}

const initialTableDatas = []

export const tableDatas = (state = initialTableDatas, { type, payload }) => {
	switch (type) {
		case CHANGE_TABLE_DATAS:
			return [...state, ...payload]

		default:
			return state
	}
}
