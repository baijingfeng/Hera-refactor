import {
	SYSTEM_LOADED,
	ADD_TABLE_DATAS,
	CHANGE_TABLE_DATAS,
	REMOVE_TABLE_DATAS,
} from './action-types'

export const systemLoaded = data => ({
	type: SYSTEM_LOADED,
	data,
})

export const addTableDatas = payload => ({
	type: ADD_TABLE_DATAS,
	payload,
})

export const changeTableDatas = payload => ({
	type: CHANGE_TABLE_DATAS,
	payload,
})

export const removeTableDatas = payload => ({
	type: REMOVE_TABLE_DATAS,
	payload,
})
