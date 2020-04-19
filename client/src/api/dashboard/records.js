import Axios from 'axios'
import ajax from '../ajax'

export function reqRecordsData(params, type) {
	return ajax({
		url: `/api/status/${type}`,
		method: 'GET',
		params,
	})
}

export function reqAllTypeRecordsData(params) {
	return Axios.all([
		reqRecordsData(params, 'new_in_records'),
		reqRecordsData(params, 'new_out_records'),
		reqRecordsData(params, 'update_records'),
	])
}
