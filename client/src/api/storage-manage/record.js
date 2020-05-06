import ajax from '../ajax'

export function saveRecordData(params) {
	return ajax({
		url: '/record',
		method: 'POST',
		data: params,
	})
}
