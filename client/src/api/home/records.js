import ajax from '../ajax'

export function queryRecordsData(params, type) {
	return ajax({
		url: `/status/${type}`,
		method: 'GET',
		params,
	})
}

export function queryAllTypeRecordsData(params) {
	return Promise.all([
		queryRecordsData(params, 'new_in_records'),
		queryRecordsData(params, 'new_out_records'),
		queryRecordsData(params, 'update_records'),
	])
}
