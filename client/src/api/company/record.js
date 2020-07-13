import ajax from '../ajax'

export function queryRecordData(id) {
	return ajax({
		url: `/record/${id}`,
		method: 'GET',
	})
}
