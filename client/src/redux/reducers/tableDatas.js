import {
	ADD_TABLE_DATAS,
	CHANGE_TABLE_DATAS,
	REMOVE_TABLE_DATAS,
} from '../action-types'

const obj = {
	type: '租赁类',
	name: '',
	size: '',
	count: 0,
}

const initialTableDatas = {
	index: 0,
	dataList: [],
}

export const tableDatas = (state = initialTableDatas, { type, payload }) => {
	switch (type) {
		case ADD_TABLE_DATAS:
			return { ...state, index: state.index + 1, dataList: [...payload] }

		case CHANGE_TABLE_DATAS:
			return { ...state, dataList: [...payload] }

		case REMOVE_TABLE_DATAS:
			return { ...state, dataList: [...payload] }

		default:
			return state
	}
}
