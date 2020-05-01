import { SYSTEM_LOADED, CHANGE_TABLE_FORM_TYPE } from './action-types'

export const systemLoaded = data => ({
	type: SYSTEM_LOADED,
	data,
})

export const changeTableFormType = tableFormType => ({
	type: CHANGE_TABLE_FORM_TYPE,
	tableFormType,
})
