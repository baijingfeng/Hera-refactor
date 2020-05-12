import ajax from '../ajax'

export function queryAllPayerData(params) {
	return ajax({
		url: '/record/all_payer',
		method: 'GET',
		params,
	})
}
