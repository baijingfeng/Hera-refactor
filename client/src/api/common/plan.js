import ajax from '../ajax'

export function queryPricePlan(params) {
	return ajax({
		url: '/plan/price',
		method: 'GET',
		params,
	})
}
