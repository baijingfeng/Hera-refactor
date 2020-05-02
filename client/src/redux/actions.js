import { SYSTEM_LOADED, CHANGE_TABLE, CHANGE_TABLE_FORM_TYPE } from './action-types'

export const systemLoaded = data => ({
	type: SYSTEM_LOADED,
	data,
})

export const changeTableFormType = tableFormType => ({
	type: CHANGE_TABLE_FORM_TYPE,
	tableFormType,
})

export const changeTable = payload => ({
	type: CHANGE_TABLE,
	payload,
})