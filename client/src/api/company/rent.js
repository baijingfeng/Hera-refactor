import ajax from '../ajax'

export function queryRentData(params) {
	return ajax({
		url: '/store/rent',
		method: 'GET',
		params: {
			condition: JSON.stringify(params),
		},
	})
}
