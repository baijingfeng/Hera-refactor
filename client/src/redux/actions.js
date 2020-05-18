import {
	SYSTEM_LOADED,
	SYSTEM_SETTINGS_UPDATED,
	ADD_TABLE_DATAS,
	CHANGE_TABLE_DATAS,
	REMOVE_TABLE_DATAS,
	SAVE_RESULTS,
	UPDATE_RECORD,
	PAYER_TRANSPORT_PAID_STATUS_CHANGED,
	PAYER_TRANSPORT_CHECKED_STATUS_CHANGED,
	SELECT_STORE,
} from './action-types'

export const systemLoaded = data => ({
	type: SYSTEM_LOADED,
	data,
})

export const systemSettingsUpdated = data => ({
	type: SYSTEM_SETTINGS_UPDATED,
	data,
})

export const selectStore = (config, store) => {
	localStorage.setItem(`store-${config.db}`, JSON.stringify(store))

	return {
		type: SELECT_STORE,
		data: store,
	}
}

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

export const saveResults = data => ({
	type: SAVE_RESULTS,
	data,
})

export const updateRecord = data => ({
	type: UPDATE_RECORD,
	data,
})

export const changePayerTrabsportPaidStatus = data => ({
	type: PAYER_TRANSPORT_PAID_STATUS_CHANGED,
	data,
})

export const changePayerTrabsportCheckedStatus = data => ({
	type: PAYER_TRANSPORT_CHECKED_STATUS_CHANGED,
	data,
})
